import { DEFAULT_PREFERENCES, Preferences, Mode, ThemePref, VibeyTheme } from './types'

const STORAGE_KEY = 'site-preferences-v1'

const MODES: Mode[] = ['formal', 'vibey']
const THEME_PREFS: ThemePref[] = ['system', 'light', 'dark']
const VIBEY_THEMES: VibeyTheme[] = ['grape', 'ocean', 'peach', 'neon']

const isBrowser = () => typeof window !== 'undefined'

const isMode = (value: unknown): value is Mode => MODES.includes(value as Mode)
const isThemePref = (value: unknown): value is ThemePref => THEME_PREFS.includes(value as ThemePref)
const isVibeyTheme = (value: unknown): value is VibeyTheme => VIBEY_THEMES.includes(value as VibeyTheme)

export function loadPreferences(): Preferences {
  if (!isBrowser()) return DEFAULT_PREFERENCES

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PREFERENCES

    const parsed = JSON.parse(raw) as Partial<Preferences>

    return {
      mode: isMode(parsed.mode) ? parsed.mode : DEFAULT_PREFERENCES.mode,
      theme: isThemePref(parsed.theme) ? parsed.theme : DEFAULT_PREFERENCES.theme,
      vibeyTheme: isVibeyTheme(parsed.vibeyTheme) ? parsed.vibeyTheme : DEFAULT_PREFERENCES.vibeyTheme,
    }
  } catch {
    return DEFAULT_PREFERENCES
  }
}

export function savePreferences(prefs: Preferences): void {
  if (!isBrowser()) return

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    // Ignore storage errors (private mode, quota, etc).
  }
}
