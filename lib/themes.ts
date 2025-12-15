import { Sparkles, Moon, Waves, Sun, CircleDot, SunMoon, BookOpen, Gem, LucideIcon } from 'lucide-react'

export type ThemeName =
  | 'dracula'
  | 'tokyonight'
  | 'ayumirage'
  | 'ayulight'
  | 'abyss'
  | 'solarized'
  | 'quietlight'
  | 'material'

export interface Theme {
  name: string
  value: ThemeName
  icon: LucideIcon
}

export const themes: Record<ThemeName, Theme> = {
  dracula: {
    name: 'Purple Rain',
    value: 'dracula',
    icon: Sparkles,
  },
  tokyonight: {
    name: 'Tokyo Night',
    value: 'tokyonight',
    icon: Moon,
  },
  ayumirage: {
    name: 'Ayu Mirage',
    value: 'ayumirage',
    icon: Waves,
  },
  ayulight: {
    name: 'Ayu Light',
    value: 'ayulight',
    icon: Sun,
  },
  abyss: {
    name: 'Abyss',
    value: 'abyss',
    icon: CircleDot,
  },
  solarized: {
    name: 'Solarized Light',
    value: 'solarized',
    icon: SunMoon,
  },
  quietlight: {
    name: 'Quiet Light',
    value: 'quietlight',
    icon: BookOpen,
  },
  material: {
    name: 'Material Theme',
    value: 'material',
    icon: Gem,
  },
}

export const defaultTheme: ThemeName = 'tokyonight'