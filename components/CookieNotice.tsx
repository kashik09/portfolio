'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already acknowledged
    const acknowledged = localStorage.getItem('cookieNoticeAcknowledged')
    if (!acknowledged) {
      // Small delay before showing to avoid flash on page load
      setTimeout(() => setIsVisible(true), 500)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('cookieNoticeAcknowledged', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-card border-t border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-foreground mb-1">Cookies & site data</h3>
              <p className="text-sm text-muted-foreground">
                We use essential cookies to keep the site working (such as login and security).
                We may also use limited analytics to understand usage and improve the site.
                By continuing to use this site, you acknowledge this use.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/legal/privacy-policy"
                className="text-sm text-primary hover:underline font-medium whitespace-nowrap"
              >
                Learn more
              </Link>
              <button
                onClick={handleDismiss}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium whitespace-nowrap"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
