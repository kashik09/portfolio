'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from '@/lib/ThemeContext'
import { PreferencesProvider } from '@/lib/preferences/PreferencesContext'
import { PreferencesGate } from '@/components/preferences/PreferencesGate'
import { ToastProvider } from '@/components/ui/Toast'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <PreferencesProvider>
      <ThemeProvider>
        <ToastProvider>
          <PreferencesGate />
          {children}
        </ToastProvider>
      </ThemeProvider>
    </PreferencesProvider>
  )
}
