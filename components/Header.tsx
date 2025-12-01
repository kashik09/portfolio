'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './theme-provider'
import { getTheme, getThemeNames, type ThemeName } from '@/lib/themes'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)
  const { theme, mode, setTheme, toggleMode } = useTheme()

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/request', label: 'Request' },
    { href: '/about', label: 'About' },
  ]

  const themes = getThemeNames()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setThemeDropdownOpen(false)
  }

  const toggleThemeDropdown = () => {
    setThemeDropdownOpen(!themeDropdownOpen)
  }

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme)
    setThemeDropdownOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="group flex items-center space-x-2 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <span className="text-xl font-bold">K</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            KashiCoding
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-1 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground-muted transition-all hover:bg-accent/10 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Theme Controls */}
        <div className="hidden items-center space-x-2 md:flex">
          {/* Theme Selector Dropdown */}
          <div className="relative">
            <button
              onClick={toggleThemeDropdown}
              className="flex items-center space-x-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-all hover:bg-card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Select theme"
            >
              <span className="hidden lg:inline">
                {getTheme(theme).displayName}
              </span>
              <span className="lg:hidden">Theme</span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  themeDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Theme Dropdown Menu */}
            {themeDropdownOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setThemeDropdownOpen(false)}
                />

                {/* Dropdown */}
                <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right animate-slide-down rounded-lg border border-border bg-card shadow-lg">
                  <div className="p-2">
                    {themes.map(themeName => {
                      const themeInfo = getTheme(themeName)
                      const isActive = theme === themeName

                      return (
                        <button
                          key={themeName}
                          onClick={() => handleThemeChange(themeName)}
                          className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground hover:bg-accent/10 hover:text-accent'
                          }`}
                        >
                          <div>
                            <div className="font-medium">
                              {themeInfo.displayName}
                            </div>
                            <div
                              className={`text-xs ${
                                isActive
                                  ? 'text-primary-foreground/80'
                                  : 'text-foreground-muted'
                              }`}
                            >
                              {themeInfo.description.slice(0, 30)}...
                            </div>
                          </div>
                          {isActive && (
                            <svg
                              className="h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleMode}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-all hover:bg-card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Toggle dark mode"
          >
            {mode === 'light' ? (
              <svg
                className="h-5 w-5 transition-transform hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 transition-transform hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-card-hover md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="animate-slide-down border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {/* Mobile Navigation Links */}
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Theme Selector */}
            <div className="border-t border-border pt-4">
              <div className="mb-2 px-4 text-sm font-medium text-foreground-muted">
                Theme
              </div>
              <div className="space-y-1">
                {themes.map(themeName => {
                  const themeInfo = getTheme(themeName)
                  const isActive = theme === themeName

                  return (
                    <button
                      key={themeName}
                      onClick={() => {
                        handleThemeChange(themeName)
                        setMobileMenuOpen(false)
                      }}
                      className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left transition-colors ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-accent/10 hover:text-accent'
                      }`}
                    >
                      <span className="font-medium">
                        {themeInfo.displayName}
                      </span>
                      {isActive && (
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile Dark Mode Toggle */}
            <div className="border-t border-border pt-4">
              <button
                onClick={() => {
                  toggleMode()
                  setMobileMenuOpen(false)
                }}
                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
              >
                <span className="font-medium">
                  {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </span>
                {mode === 'light' ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
