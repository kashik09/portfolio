import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import { prisma } from '@/lib/prisma'

// POST /api/pages/[slug]/sections - Add a section to a page
export async function POST(
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

    // Find the page
    const page = await prisma.page.findUnique({
      where: { slug: params.slug },
      include: { sections: true }
    })

    if (!page) {
      return NextResponse.json(
        { success: false, error: 'Page not found' },
        { status: 404 }
      )
    }

    // Create the section
    const section = await prisma.pageSection.create({
      data: {
        pageId: page.id,
        type: body.type,
        data: body.data || {},
        order: body.order ?? page.sections.length
      }
    })

    return NextResponse.json({
      success: true,
      data: section
    })
  } catch (error: any) {
    console.error('Error creating section:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create section' },
      { status: 500 }
    )
  }
}

// PATCH /api/pages/[slug]/sections - Update sections order or bulk update
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
    const { sections } = body // Array of { id, order, data?, type? }

    // Update sections in bulk
    await Promise.all(
      sections.map((section: any) =>
        prisma.pageSection.update({
          where: { id: section.id },
          data: {
            order: section.order,
            ...(section.data && { data: section.data }),
            ...(section.type && { type: section.type })
          }
        })
      )
    )

    return NextResponse.json({
      success: true,
      message: 'Sections updated successfully'
    })
  } catch (error: any) {
    console.error('Error updating sections:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update sections' },
      { status: 500 }
    )
  }
}
