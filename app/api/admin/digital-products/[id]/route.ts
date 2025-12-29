export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from '@/lib/auth'

// GET /api/admin/digital-products/[id] - Get single product
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'OWNER')) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      )
    }

    const product = await prisma.digitalProduct.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            purchases: true,
            licenses: true,
            downloads: true
          }
        }
      }
    })

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: product
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

// PATCH /api/admin/digital-products/[id] - Update product
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'OWNER')) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const updateData: any = {}

    // Handle all possible update fields
    if (body.name !== undefined) updateData.name = body.name
    if (body.slug !== undefined) updateData.slug = body.slug
    if (body.description !== undefined) updateData.description = body.description
    if (body.category !== undefined) updateData.category = body.category
    if (body.price !== undefined) updateData.price = body.price
    if (body.fileUrl !== undefined) updateData.fileUrl = body.fileUrl
    if (body.fileSize !== undefined) updateData.fileSize = body.fileSize
    if (body.fileType !== undefined) updateData.fileType = body.fileType
    if (body.thumbnailUrl !== undefined) updateData.thumbnailUrl = body.thumbnailUrl
    if (body.personalLicense !== undefined) updateData.personalLicense = body.personalLicense
    if (body.commercialLicense !== undefined) updateData.commercialLicense = body.commercialLicense
    if (body.teamLicense !== undefined) updateData.teamLicense = body.teamLicense
    if (body.version !== undefined) updateData.version = body.version
    if (body.changelog !== undefined) updateData.changelog = body.changelog
    if (body.documentation !== undefined) updateData.documentation = body.documentation
    if (body.featured !== undefined) updateData.featured = body.featured
    if (body.tags !== undefined) updateData.tags = body.tags
    if (body.previewImages !== undefined) updateData.previewImages = body.previewImages

    // Handle published status
    if (body.published !== undefined) {
      updateData.published = body.published
      // Set publishedAt timestamp when first published
      if (body.published) {
        const currentProduct = await prisma.digitalProduct.findUnique({
          where: { id: params.id },
          select: { publishedAt: true }
        })
        if (!currentProduct?.publishedAt) {
          updateData.publishedAt = new Date()
        }
      }
    }

    const product = await prisma.digitalProduct.update({
      where: { id: params.id },
      data: updateData
    })

    return NextResponse.json({
      success: true,
      data: product
    })
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/digital-products/[id] - Delete product
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'OWNER')) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      )
    }

    // Check if product exists
    const product = await prisma.digitalProduct.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            purchases: true,
            licenses: true
          }
        }
      }
    })

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      )
    }

    // Warn if product has purchases or licenses
    if (product._count.purchases > 0 || product._count.licenses > 0) {
      // For safety, we might want to prevent deletion of products with purchases
      // But the schema should handle cascade deletion properly
      console.warn(`Deleting product ${product.id} with ${product._count.purchases} purchases and ${product._count.licenses} licenses`)
    }

    // Delete product (cascade will handle related records)
    await prisma.digitalProduct.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}
