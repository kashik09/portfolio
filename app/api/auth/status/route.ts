import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth-options'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  const headers = { 'Cache-Control': 'no-store' }

  try {
    const providers = authOptions.providers.map((provider: any) => provider.id || provider.name)

    await prisma.$queryRaw`SELECT 1`

    return NextResponse.json(
      {
        ok: true,
        auth: {
          configured: true,
          providers,
        },
        database: {
          ok: true,
        },
        timestamp: new Date().toISOString(),
      },
      { headers }
    )
  } catch (error) {
    console.error('Auth status check failed:', error)
    return NextResponse.json(
      { ok: false, error: 'Auth status check failed' },
      { status: 500, headers }
    )
  }
}
