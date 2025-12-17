import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import { prisma } from '@/lib/prisma'

// GET /api/pages/[slug] - Get a single page with sections
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    const isAdmin = session?.user?.role && ['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)

    const where: any = { slug: params.slug }

    // Public users only see published pages
    if (!isAdmin) {
      where.status = 'PUBLISHED'
    }

    const page = await prisma.page.findFirst({
      where,
      include: {
        sections: {
          orderBy: { order: 'asc' }
        }
      }
    })

    if (!page) {
      return NextResponse.json(
        { success: false, error: 'Page not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: page
    })
  } catch (error: any) {
    console.error('Error fetching page:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch page' },
      { status: 500 }
    )
  }
}

// PATCH /api/pages/[slug] - Update a page
export async function PATCH(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.role || !['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()

    const page = await prisma.page.update({
      where: { slug: params.slug },
      data: {
        title: body.title,
        status: body.status,
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription,
      }
    })

    return NextResponse.json({
      success: true,
      data: page
    })
  } catch (error: any) {
    console.error('Error updating page:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update page' },
      { status: 500 }
    )
  }
}

// DELETE /api/pages/[slug] - Delete a page
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.role || !['ADMIN', 'OWNER'].includes(session.user.role)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await prisma.page.delete({
      where: { slug: params.slug }
    })

    return NextResponse.json({
      success: true,
      message: 'Page deleted successfully'
    })
  } catch (error: any) {
    console.error('Error deleting page:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete page' },
      { status: 500 }
    )
  }
}
