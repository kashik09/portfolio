'use client'

import { useEffect, useState } from 'react'
import { usePreferences } from '@/lib/preferences/PreferencesContext'

type ResolvedTheme = 'light' | 'dark'

const getSystemTheme = (media: MediaQueryList): ResolvedTheme =>
  media.matches ? 'dark' : 'light'

export function PreferencesGate() {
  const { preferences } = usePreferences()
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('light')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => setSystemTheme(getSystemTheme(media))

    update()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return

    const resolvedTheme =
      preferences.theme === 'system' ? systemTheme : preferences.theme

    const root = document.documentElement
    root.setAttribute('data-mode', preferences.mode)
    root.setAttribute('data-theme', resolvedTheme)

    if (preferences.mode === 'vibey') {
      root.setAttribute('data-vibey', preferences.vibeyTheme)
    } else {
      root.removeAttribute('data-vibey')
    }
  }, [preferences.mode, preferences.theme, preferences.vibeyTheme, systemTheme])

  return null
}
