export type Mode = 'formal' | 'vibey'
export type ThemePref = 'system' | 'light' | 'dark'
export type VibeyTheme = 'grape' | 'ocean' | 'peach' | 'neon'

export interface Preferences {
  mode: Mode
  theme: ThemePref
  vibeyTheme: VibeyTheme
}

export const DEFAULT_PREFERENCES: Preferences = {
  mode: 'formal',
  theme: 'system',
  vibeyTheme: 'grape',
}
