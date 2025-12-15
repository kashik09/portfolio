import { Sparkles, Sun, BookOpen, Gem, LucideIcon } from 'lucide-react'

export type ThemeName =
  | 'dracula'
  | 'ayulight'
  | 'quietlight'
  | 'material'

export interface Theme {
  name: string
  value: ThemeName
  icon: LucideIcon
}

export const themes: Record<ThemeName, Theme> = {
  dracula: {
    name: 'Midnight Purple',
    value: 'dracula',
    icon: Sparkles,
  },
  ayulight: {
    name: 'Desert Dawn',
    value: 'ayulight',
    icon: Sun,
  },
  quietlight: {
    name: 'Clean Slate',
    value: 'quietlight',
    icon: BookOpen,
  },
  material: {
    name: 'Ocean Deep',
    value: 'material',
    icon: Gem,
  },
}

export const defaultTheme: ThemeName = 'dracula'