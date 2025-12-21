import { CreditTransactionType, AuditAction } from '@prisma/client'
import { prisma } from '@/lib/prisma'

/**
 * Check if a user has sufficient credits
 */
export async function hasAvailableCredits(
  userId: string,
  requiredCredits: number
): Promise<{
  hasCredits: boolean
  availableCredits: number
  membershipId?: string
}> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      membership: true,
    },
  })

  if (!user || !user.membership) {
    return {
      hasCredits: false,
      availableCredits: 0,
    }
  }

  const membership = user.membership

  // Check if membership is active
  if (membership.status !== 'ACTIVE') {
    return {
      hasCredits: false,
      availableCredits: 0,
      membershipId: membership.id,
    }
  }

  // Check if membership has expired
  if (membership.endDate < new Date()) {
    return {
      hasCredits: false,
      availableCredits: 0,
      membershipId: membership.id,
    }
  }

  const availableCredits = membership.remainingCredits

  return {
    hasCredits: availableCredits >= requiredCredits,
    availableCredits,
    membershipId: membership.id,
  }
}

/**
 * Deduct credits from a membership
 */
export async function deductCredits(options: {
  userId: string
  membershipId: string
  amount: number
  description: string
  reference?: string
}): Promise<{
  success: boolean
  error?: string
  remainingCredits?: number
}> {
  try {
    const membership = await prisma.membership.findUnique({
      where: { id: options.membershipId },
    })

    if (!membership) {
      return {
        success: false,
        error: 'Membership not found',
      }
    }

    if (membership.status !== 'ACTIVE') {
      return {
        success: false,
        error: 'Membership is not active',
      }
    }

    if (membership.remainingCredits < options.amount) {
      return {
        success: false,
        error: 'Insufficient credits',
      }
    }

    // Deduct credits and create transaction
    const newRemainingCredits = membership.remainingCredits - options.amount
    const newUsedCredits = membership.usedCredits + options.amount

    await prisma.$transaction([
      prisma.membership.update({
        where: { id: options.membershipId },
        data: {
          usedCredits: newUsedCredits,
          remainingCredits: newRemainingCredits,
        },
      }),
      prisma.creditTransaction.create({
        data: {
          userId: options.userId,
          membershipId: options.membershipId,
          type: CreditTransactionType.USAGE,
          amount: -options.amount, // Negative for deduction
          balance: newRemainingCredits,
          description: options.description,
          reference: options.reference,
        },
      }),
      prisma.auditLog.create({
        data: {
          userId: options.userId,
          action: AuditAction.CREDIT_USED,
          resource: 'Membership',
          resourceId: options.membershipId,
          details: {
            amount: options.amount,
            description: options.description,
            reference: options.reference,
            remainingCredits: newRemainingCredits,
          },
        },
      }),
    ])

    return {
      success: true,
      remainingCredits: newRemainingCredits,
    }
  } catch (error: any) {
    console.error('Failed to deduct credits:', error)
    return {
      success: false,
      error: error.message || 'Failed to deduct credits',
    }
  }
}

/**
 * Add credits to a membership (admin action)
 */
export async function addCredits(options: {
  userId: string
  membershipId: string
  amount: number
  type: CreditTransactionType
  description: string
  reference?: string
  performedBy: string
}): Promise<{
  success: boolean
  error?: string
  newBalance?: number
}> {
  try {
    const membership = await prisma.membership.findUnique({
      where: { id: options.membershipId },
    })

    if (!membership) {
      return {
        success: false,
        error: 'Membership not found',
      }
    }

    // Add credits and create transaction
    const newRemainingCredits = membership.remainingCredits + options.amount
    const newTotalCredits = membership.totalCredits + options.amount

    await prisma.$transaction([
      prisma.membership.update({
        where: { id: options.membershipId },
        data: {
          totalCredits: newTotalCredits,
          remainingCredits: newRemainingCredits,
        },
      }),
      prisma.creditTransaction.create({
        data: {
          userId: options.userId,
          membershipId: options.membershipId,
          type: options.type,
          amount: options.amount, // Positive for addition
          balance: newRemainingCredits,
          description: options.description,
          reference: options.reference,
        },
      }),
      prisma.auditLog.create({
        data: {
          userId: options.performedBy,
          action: AuditAction.CREDIT_ADJUSTED,
          resource: 'Membership',
          resourceId: options.membershipId,
          details: {
            amount: options.amount,
            type: options.type,
            description: options.description,
            reference: options.reference,
            newBalance: newRemainingCredits,
            affectedUserId: options.userId,
          },
        },
      }),
    ])

    return {
      success: true,
      newBalance: newRemainingCredits,
    }
  } catch (error: any) {
    console.error('Failed to add credits:', error)
    return {
      success: false,
      error: error.message || 'Failed to add credits',
    }
  }
}

/**
 * Refund credits to a membership
 */
export async function refundCredits(options: {
  userId: string
  membershipId: string
  amount: number
  description: string
  reference?: string
  performedBy: string
}): Promise<{
  success: boolean
  error?: string
  newBalance?: number
}> {
  try {
    const membership = await prisma.membership.findUnique({
      where: { id: options.membershipId },
    })

    if (!membership) {
      return {
        success: false,
        error: 'Membership not found',
      }
    }

    // Refund credits and create transaction
    const newRemainingCredits = membership.remainingCredits + options.amount
    const newUsedCredits = Math.max(0, membership.usedCredits - options.amount)

    await prisma.$transaction([
      prisma.membership.update({
        where: { id: options.membershipId },
        data: {
          usedCredits: newUsedCredits,
          remainingCredits: newRemainingCredits,
        },
      }),
      prisma.creditTransaction.create({
        data: {
          userId: options.userId,
          membershipId: options.membershipId,
          type: CreditTransactionType.REFUND,
          amount: options.amount, // Positive for refund
          balance: newRemainingCredits,
          description: options.description,
          reference: options.reference,
        },
      }),
      prisma.auditLog.create({
        data: {
          userId: options.performedBy,
          action: AuditAction.CREDIT_ADJUSTED,
          resource: 'Membership',
          resourceId: options.membershipId,
          details: {
            amount: options.amount,
            type: 'REFUND',
            description: options.description,
            reference: options.reference,
            newBalance: newRemainingCredits,
            affectedUserId: options.userId,
          },
        },
      }),
    ])

    return {
      success: true,
      newBalance: newRemainingCredits,
    }
  } catch (error: any) {
    console.error('Failed to refund credits:', error)
    return {
      success: false,
      error: error.message || 'Failed to refund credits',
    }
  }
}

/**
 * Get credit transaction history for a membership
 */
export async function getCreditHistory(
  membershipId: string,
  limit: number = 50
): Promise<any[]> {
  try {
    const transactions = await prisma.creditTransaction.findMany({
      where: { membershipId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })

    return transactions
  } catch (error) {
    console.error('Failed to get credit history:', error)
    return []
  }
}

/**
 * Calculate rollover credits when membership renews
 */
export async function calculateRolloverCredits(
  membershipId: string
): Promise<{
  rolloverAmount: number
  willRollover: boolean
}> {
  try {
    const membership = await prisma.membership.findUnique({
      where: { id: membershipId },
    })

    if (!membership) {
      return {
        rolloverAmount: 0,
        willRollover: false,
      }
    }

    const remainingCredits = membership.remainingCredits
    const rolloverCap = membership.rolloverCap

    if (remainingCredits <= 0) {
      return {
        rolloverAmount: 0,
        willRollover: false,
      }
    }

    const rolloverAmount = Math.min(remainingCredits, rolloverCap)

    return {
      rolloverAmount,
      willRollover: rolloverAmount > 0,
    }
  } catch (error) {
    console.error('Failed to calculate rollover credits:', error)
    return {
      rolloverAmount: 0,
      willRollover: false,
    }
  }
}
