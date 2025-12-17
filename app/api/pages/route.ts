import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import { prisma } from '@/lib/prisma'

// GET /api/pages - List all pages
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    const isAdmin = session?.user?.role && ['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)

    const where: any = {}

    // Public users only see published pages
    if (!isAdmin) {
      where.status = 'PUBLISHED'
    } else if (status) {
      where.status = status
    }

    const pages = await prisma.page.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      select: {
        id: true,
        slug: true,
        title: true,
        status: true,
        seoTitle: true,
        seoDescription: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: { sections: true }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: pages
    })
  } catch (error: any) {
    console.error('Error fetching pages:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch pages' },
      { status: 500 }
    )
  }
}

// POST /api/pages - Create a new page
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.role || !['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()

    const page = await prisma.page.create({
      data: {
        slug: body.slug,
        title: body.title,
        status: body.status || 'DRAFT',
        seoTitle: body.seoTitle || null,
        seoDescription: body.seoDescription || null,
      }
    })

    return NextResponse.json({
      success: true,
      data: page
    })
  } catch (error: any) {
    console.error('Error creating page:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create page' },
      { status: 500 }
    )
  }
}
