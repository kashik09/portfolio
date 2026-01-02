export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/site/availability - Fetch public availability status
export async function GET() {
  try {
    const settings = await prisma.siteSettings.findUnique({
      where: { id: 'site_settings_singleton' },
      select: {
        availabilityStatus: true,
        availabilityMessage: true,
        leaveStart: true,
        leaveEnd: true,
        manualOverride: true,
      },
    })

    if (!settings) {
      // Return default if no settings exist
      return NextResponse.json({
        success: true,
        data: {
          status: 'AVAILABLE',
          message: null,
        },
      })
    }

    // Return the raw settings for now
    // Phase 4 will add the effective status calculation
    return NextResponse.json({
      success: true,
      data: {
        status: settings.availabilityStatus,
        message: settings.availabilityMessage,
        leaveStart: settings.leaveStart,
        leaveEnd: settings.leaveEnd,
      },
    })
  } catch (error) {
    console.error('Error fetching availability:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch availability' },
      { status: 500 }
    )
  }
}
