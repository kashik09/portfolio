'use client'

import { VibeyBackdrop } from '@/components/VibeyBackdrop'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <VibeyBackdrop className="min-h-screen">
      {children}
    </VibeyBackdrop>
  )
}
