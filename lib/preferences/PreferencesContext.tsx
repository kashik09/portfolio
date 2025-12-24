'use client'

import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_PREFERENCES, Mode, Preferences, ThemePref, VibeyTheme } from './types'
import { loadPreferences, savePreferences } from './storage'

interface PreferencesContextValue {
  preferences: Preferences
  setPreferences: Dispatch<SetStateAction<Preferences>>
  setMode: (mode: Mode) => void
  setTheme: (theme: ThemePref) => void
  setVibeyTheme: (vibeyTheme: VibeyTheme) => void
}

const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined)

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(DEFAULT_PREFERENCES)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setPreferences(loadPreferences())
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return
    savePreferences(preferences)
  }, [preferences, isHydrated])

  const value = useMemo<PreferencesContextValue>(
    () => ({
      preferences,
      setPreferences,
      setMode: (mode) => setPreferences((prev) => ({ ...prev, mode })),
      setTheme: (theme) => setPreferences((prev) => ({ ...prev, theme })),
      setVibeyTheme: (vibeyTheme) => setPreferences((prev) => ({ ...prev, vibeyTheme })),
    }),
    [preferences]
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error('usePreferences must be used within PreferencesProvider')
  }
  return context
}
