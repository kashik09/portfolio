# New developments report

Generated: 2025-12-24 11:53:41 UTC

## Branch + HEAD
- Branch: main
- HEAD: 693a9e0

## Working tree status
 M README.md
 M app/(main)/layout.tsx
 M app/(main)/legal/privacy-policy/page.tsx
 M app/(main)/legal/terms/page.tsx
 M app/(main)/page.tsx
 M app/(user)/dashboard/layout.tsx
 M app/(user)/dashboard/page.tsx
 M app/(user)/dashboard/settings/page.tsx
 M app/(user)/layout.tsx
 M app/Providers.tsx
 M app/admin/content/about/page.tsx
 M app/admin/layout.tsx
 M app/admin/settings/page.tsx
 M app/api/admin/settings/email/route.ts
 M app/api/content/request-form/route.ts
 M app/api/content/services/route.ts
 M app/api/digital-products/[slug]/download/route.ts
 M app/globals.css
 M app/layout.tsx
 M components/AdminHeader.tsx
 M components/Footer.tsx
 M components/Header.tsx
 M components/ProjectCard.tsx
 D components/ThemeSelector.tsx
 M components/home/HeroFormal.tsx
 M components/home/HeroVibey.tsx
 M components/preferences/PreferencesPanel.tsx
 M components/ui/Button.tsx
 M components/ui/Input.tsx
 M docs/preferences.md
 D lib/ThemeContext.tsx
 M lib/email.ts
 D lib/themes.ts
 M prisma/schema.prisma
 M tailwind.config.ts
?? NEW_DEVELOPMENTS.md
?? app/(main)/cart/
?? app/(main)/checkout/
?? app/(main)/digital-products/
?? app/(main)/shop/
?? app/(user)/dashboard/orders/
?? app/admin/content/legal/
?? app/admin/content/pricing/
?? app/admin/orders/
?? app/api/admin/orders/
?? app/api/cart/
?? app/api/checkout/
?? app/api/content/pricing/
?? app/api/content/privacy-policy/
?? app/api/content/terms/
?? app/api/orders/
?? app/api/payment/
?? app/api/shop/
?? components/VibeyBackdrop.tsx
?? components/cart/
?? components/shop/
?? components/ui/ProgressBar.tsx
?? components/ui/YearPicker.tsx
?? lib/cart.ts
?? lib/currency.ts
?? lib/email/
?? lib/order-fulfillment.ts
?? lib/order-number.ts
?? lib/payment/
?? pricing-map.example.json
?? public/content/pricing.json
?? scripts/generate-prices-to-review.ts
?? scripts/generate-pricing-review.ts
?? scripts/migrate-content-to-db.ts
?? scripts/update-prices.ts

## Summary (what changed)
 README.md                                         |  80 +----
 app/(main)/layout.tsx                             |   5 +-
 app/(main)/legal/privacy-policy/page.tsx          |   2 +-
 app/(main)/legal/terms/page.tsx                   |   2 +-
 app/(main)/page.tsx                               |  10 +-
 app/(user)/dashboard/layout.tsx                   |   3 -
 app/(user)/dashboard/page.tsx                     |  60 ++--
 app/(user)/dashboard/settings/page.tsx            |  30 +-
 app/(user)/layout.tsx                             |  10 +-
 app/Providers.tsx                                 |  11 +-
 app/admin/content/about/page.tsx                  |  83 +++--
 app/admin/layout.tsx                              |  30 +-
 app/admin/settings/page.tsx                       | 272 ++++++++++++++--
 app/api/admin/settings/email/route.ts             | 139 ++++++--
 app/api/content/request-form/route.ts             |  43 ++-
 app/api/content/services/route.ts                 |  43 ++-
 app/api/digital-products/[slug]/download/route.ts |  33 +-
 app/globals.css                                   | 374 +++++++++++-----------
 app/layout.tsx                                    |   1 -
 components/AdminHeader.tsx                        | 104 ++++--
 components/Footer.tsx                             |  25 +-
 components/Header.tsx                             |   8 +-
 components/ProjectCard.tsx                        |   2 +-
 components/ThemeSelector.tsx                      |  85 -----
 components/home/HeroFormal.tsx                    |   6 +-
 components/home/HeroVibey.tsx                     |   6 +-
 components/preferences/PreferencesPanel.tsx       |  47 +--
 components/ui/Button.tsx                          |  12 +-
 components/ui/Input.tsx                           |  12 +-
 docs/preferences.md                               |   1 -
 lib/ThemeContext.tsx                              |  72 -----
 lib/email.ts                                      |  91 +++++-
 lib/themes.ts                                     |  38 ---
 prisma/schema.prisma                              | 161 +++++++++-
 tailwind.config.ts                                |  42 +--
 35 files changed, 1193 insertions(+), 750 deletions(-)

## New files (untracked)
NEW_DEVELOPMENTS.md
app/(main)/cart/page.tsx
app/(main)/checkout/page.tsx
app/(main)/checkout/success/page.tsx
app/(main)/digital-products/page.tsx
app/(main)/shop/[slug]/page.tsx
app/(main)/shop/page.tsx
app/(user)/dashboard/orders/[orderNumber]/page.tsx
app/(user)/dashboard/orders/page.tsx
app/admin/content/legal/page.tsx
app/admin/content/pricing/page.tsx
app/admin/orders/page.tsx
app/api/admin/orders/route.ts
app/api/cart/[itemId]/route.ts
app/api/cart/route.ts
app/api/checkout/route.ts
app/api/content/pricing/route.ts
app/api/content/privacy-policy/route.ts
app/api/content/terms/route.ts
app/api/orders/[orderNumber]/fulfill/route.ts
app/api/orders/[orderNumber]/route.ts
app/api/orders/route.ts
app/api/payment/manual/confirm/route.ts
app/api/shop/products/[slug]/route.ts
app/api/shop/products/route.ts
components/VibeyBackdrop.tsx
components/cart/CartIcon.tsx
components/cart/CartItem.tsx
components/shop/LicenseSelector.tsx
components/shop/PriceDisplay.tsx
components/shop/ProductCard.tsx
components/shop/ProductGrid.tsx
components/ui/ProgressBar.tsx
components/ui/YearPicker.tsx
lib/cart.ts
lib/currency.ts
lib/email/order-emails.ts
lib/order-fulfillment.ts
lib/order-number.ts
lib/payment/providers/base.ts
lib/payment/providers/index.ts
lib/payment/providers/manual.ts
pricing-map.example.json
public/content/pricing.json
scripts/generate-prices-to-review.ts
scripts/generate-pricing-review.ts
scripts/migrate-content-to-db.ts
scripts/update-prices.ts

## Renames / deletes (name-status)
M	README.md
M	app/(main)/layout.tsx
M	app/(main)/legal/privacy-policy/page.tsx
M	app/(main)/legal/terms/page.tsx
M	app/(main)/page.tsx
M	app/(user)/dashboard/layout.tsx
M	app/(user)/dashboard/page.tsx
M	app/(user)/dashboard/settings/page.tsx
M	app/(user)/layout.tsx
M	app/Providers.tsx
M	app/admin/content/about/page.tsx
M	app/admin/layout.tsx
M	app/admin/settings/page.tsx
M	app/api/admin/settings/email/route.ts
M	app/api/content/request-form/route.ts
M	app/api/content/services/route.ts
M	app/api/digital-products/[slug]/download/route.ts
M	app/globals.css
M	app/layout.tsx
M	components/AdminHeader.tsx
M	components/Footer.tsx
M	components/Header.tsx
M	components/ProjectCard.tsx
D	components/ThemeSelector.tsx
M	components/home/HeroFormal.tsx
M	components/home/HeroVibey.tsx
M	components/preferences/PreferencesPanel.tsx
M	components/ui/Button.tsx
M	components/ui/Input.tsx
M	docs/preferences.md
D	lib/ThemeContext.tsx
M	lib/email.ts
D	lib/themes.ts
M	prisma/schema.prisma
M	tailwind.config.ts

## Full diff (patch)
diff --git a/README.md b/README.md
index a88a059..50ff5ed 100644
--- a/README.md
+++ b/README.md
@@ -1,15 +1,11 @@
 # Kashi Kweyu Portfolio
 
-A modern, full-stack portfolio website built with Next.js 14, featuring a JSON-based CMS for content management, VS Code-inspired themes, and a complete admin dashboard.
+A modern, full-stack portfolio website built with Next.js 14, featuring a JSON-based CMS for content management, preference-driven theming, and a complete admin dashboard.
 
 ## Features
 
 ### Core Features
-- **VS Code Theme System**: 4 professionally designed themes inspired by popular VS Code color schemes
-  - One Dark Pro (Default) 🌙
-  - Tokyo Night 🌃
-  - Monokai Pro 🎨
-  - GitHub Light ☀️
+- **Preferences Theming**: Formal or vibey modes with system, light, and dark theme support
 - **Automated Screenshot Capture**: Capture project screenshots automatically using Playwright
   - Auto-capture screenshots from live URLs at 1920x1080 @2x resolution
   - Full page screenshot option for entire scrollable content
@@ -18,7 +14,7 @@ A modern, full-stack portfolio website built with Next.js 14, featuring a JSON-b
 - **JSON-based CMS**: Simple file-based content management without database overhead
 - **Admin Content Editor**: Edit About, Services, and Request Form content via intuitive UI
 - **Responsive Design**: Fully responsive across all devices with mobile-first approach
-- **Theme Persistence**: Automatic theme saving with localStorage
+- **Preference Persistence**: Automatic saving with localStorage
 - **Modern UI**: Clean, accessible interface with Lucide icons
 - **Type-Safe**: Full TypeScript implementation with strict mode
 
@@ -36,9 +32,8 @@ A modern, full-stack portfolio website built with Next.js 14, featuring a JSON-b
 - **Button**: Enhanced with icon support, loading states, and 4 variants (primary, secondary, outline, ghost)
 - **Input**: Form input with label support and theme integration
 - **Card**: Flexible card component with hover effects
-- **Header**: Navigation with VS Code theme switcher and mobile menu
+- **Header**: Navigation with a responsive mobile menu
 - **Footer**: Site footer with social links (GitHub, LinkedIn, Instagram, WhatsApp)
-- **ThemeSelector**: Dropdown theme picker with icons
 
 ## Tech Stack
 
@@ -120,7 +115,7 @@ my-portfolio/
 │   ├── api/                      # API routes
 │   │   └── content/              # Content API
 │   │       └── about/            # About content endpoint
-│   ├── layout.tsx                # Root layout with ThemeProvider
+│   ├── layout.tsx                # Root layout with Providers
 │   ├── page.tsx                  # Home page
 │   ├── icon.tsx                  # Custom favicon generator
 │   └── globals.css               # Global styles & theme definitions
@@ -130,10 +125,7 @@ my-portfolio/
 │   │   └── Input.tsx             # Input component
 │   ├── Header.tsx                # Site header with navigation
 │   ├── Footer.tsx                # Site footer with social links
-│   └── ThemeSelector.tsx         # Theme switcher dropdown
 ├── lib/                          # Utilities & helpers
-│   ├── themes.ts                 # Theme definitions & types
-│   └── ThemeContext.tsx          # React context for theme state
 ├── public/                       # Static assets
 │   └── content/                  # JSON CMS files
 │       ├── about.json            # About page content
@@ -144,67 +136,9 @@ my-portfolio/
 └── package.json                  # Dependencies
 ```
 
-## Theme System
+## Preferences and Theming
 
-The portfolio features 4 VS Code-inspired themes with instant switching and persistence:
-
-### Available Themes
-
-1. **One Dark Pro** (Default) 🌙
-   - Dark theme with professional appearance
-   - Primary: Blue (`#61afef`)
-   - Accent: Green (`#98c379`)
-
-2. **Tokyo Night** 🌃
-   - Modern dark theme with vibrant colors
-   - Primary: Purple-blue (`#7aa2f7`)
-   - Accent: Green (`#9ece6a`)
-
-3. **Monokai Pro** 🎨
-   - Classic dark theme with high contrast
-   - Primary: Pink-red (`#ff6188`)
-   - Accent: Green (`#a9dc76`)
-
-4. **GitHub Light** ☀️
-   - Clean light theme for daytime coding
-   - Primary: Blue (`#0969da`)
-   - Accent: Green (`#1a7f37`)
-
-### Theme Architecture
-
-Themes use CSS custom properties for dynamic switching:
-
-```css
-/* Theme definition in globals.css */
-[data-theme='onedark'] {
-  --color-background: 40 44 52;
-  --color-foreground: 171 178 191;
-  --color-primary: 97 175 239;
-  --color-secondary: 198 120 221;
-  --color-accent: 152 195 121;
-  --color-border: 59 64 74;
-  /* ... more color variables */
-}
-```
-
-Tailwind integration with alpha channel support:
-
-```typescript
-// tailwind.config.ts
-colors: {
-  background: 'rgb(var(--color-background) / <alpha-value>)',
-  foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
-  primary: 'rgb(var(--color-primary) / <alpha-value>)',
-  // ... more colors
-}
-```
-
-### Theme Persistence
-
-- **Storage**: localStorage
-- **Key**: `theme`
-- **Hydration**: `suppressHydrationWarning` prevents flash
-- **Context**: React Context API for global state
+The UI uses a preference-driven theming model with formal or vibey modes and a system, light, or dark theme. See `docs/preferences.md` for the data attributes and token variables used by the theme system.
 
 ## JSON-Based CMS
 
diff --git a/app/(main)/layout.tsx b/app/(main)/layout.tsx
index 69b41cf..3b390fe 100644
--- a/app/(main)/layout.tsx
+++ b/app/(main)/layout.tsx
@@ -3,6 +3,7 @@
 import Header from '@/components/Header'
 import Footer from '@/components/Footer'
 import { SessionProvider } from 'next-auth/react'
+import { VibeyBackdrop } from '@/components/VibeyBackdrop'
 
 export default function MainLayout({
   children,
@@ -11,13 +12,13 @@ export default function MainLayout({
 }) {
   return (
     <SessionProvider>
-      <div className="min-h-screen flex flex-col">
+      <VibeyBackdrop className="min-h-screen flex flex-col">
         <Header />
         <main className="flex-1 container mx-auto px-6 md:px-8 lg:px-12 py-8">
           {children}
         </main>
         <Footer />
-      </div>
+      </VibeyBackdrop>
     </SessionProvider>
   )
 }
diff --git a/app/(main)/legal/privacy-policy/page.tsx b/app/(main)/legal/privacy-policy/page.tsx
index bc34518..efc3ce2 100644
--- a/app/(main)/legal/privacy-policy/page.tsx
+++ b/app/(main)/legal/privacy-policy/page.tsx
@@ -245,7 +245,7 @@ export default function PrivacyPage() {
       </div>
 
       <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
-        <div dangerouslySetInnerHTML={{ __html: content.content.replace(/\n/g, '<br />') }} />
+        <div dangerouslySetInnerHTML={{ __html: content.content }} />
       </div>
     </div>
   )
diff --git a/app/(main)/legal/terms/page.tsx b/app/(main)/legal/terms/page.tsx
index bc3f9eb..9d263e4 100644
--- a/app/(main)/legal/terms/page.tsx
+++ b/app/(main)/legal/terms/page.tsx
@@ -212,7 +212,7 @@ export default function TermsPage() {
       </div>
 
       <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
-        <div dangerouslySetInnerHTML={{ __html: content.content.replace(/\n/g, '<br />') }} />
+        <div dangerouslySetInnerHTML={{ __html: content.content }} />
       </div>
     </div>
   )
diff --git a/app/(main)/page.tsx b/app/(main)/page.tsx
index d685c1c..090b7dd 100644
--- a/app/(main)/page.tsx
+++ b/app/(main)/page.tsx
@@ -74,7 +74,7 @@ export default async function HomePage() {
       {/* Features */}
       <section className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
-          <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all">
+          <div className="vibey-card text-center p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all">
             <div className="inline-block p-4 bg-primary/20 rounded-xl mb-4">
               <Code2 className="text-primary" size={32} />
             </div>
@@ -84,7 +84,7 @@ export default async function HomePage() {
             </p>
           </div>
 
-          <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all">
+          <div className="vibey-card text-center p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all">
             <div className="inline-block p-4 bg-primary/20 rounded-xl mb-4">
               <Palette className="text-primary" size={32} />
             </div>
@@ -94,7 +94,7 @@ export default async function HomePage() {
             </p>
           </div>
 
-          <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all">
+          <div className="vibey-card text-center p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all">
             <div className="inline-block p-4 bg-primary/20 rounded-xl mb-4">
               <Zap className="text-primary" size={32} />
             </div>
@@ -110,10 +110,10 @@ export default async function HomePage() {
       <section className="container mx-auto px-4">
         <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-12 md:p-20 text-center text-white shadow-xl">
           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Ready to start your project?</h2>
-          <p className="text-xl md:text-2xl mb-10 font-medium max-w-3xl mx-auto text-white/95 drop-shadow-md">
+          <p className="text-xl md:text-2xl mb-10 font-medium max-w-3xl mx-auto text-white drop-shadow-md">
             Let's work together to bring your ideas to life
           </p>
-          <Link href="/request">
+          <Link href="/request" className="no-underline">
             <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:scale-105 transition-transform font-semibold">
               Get Started Today
             </Button>
diff --git a/app/(user)/dashboard/layout.tsx b/app/(user)/dashboard/layout.tsx
index 1c5a409..d87ca37 100644
--- a/app/(user)/dashboard/layout.tsx
+++ b/app/(user)/dashboard/layout.tsx
@@ -5,7 +5,6 @@ import { useRouter, usePathname } from 'next/navigation'
 import Link from 'next/link'
 import { Home, Download, FileText, Settings, ArrowLeft, Menu, X, User, AlertTriangle } from 'lucide-react'
 import { useState, useEffect } from 'react'
-import { ThemeSelector } from '@/components/ThemeSelector'
 import { ToastProvider } from '@/components/ui/Toast'
 import { Spinner } from '@/components/ui/Spinner'
 
@@ -90,8 +89,6 @@ export default function DashboardLayout({
 
               {/* Right Actions */}
               <div className="flex items-center gap-3">
-                <ThemeSelector />
-
                 {/* User Info */}
                 <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                   <User size={16} className="text-primary" />
diff --git a/app/(user)/dashboard/page.tsx b/app/(user)/dashboard/page.tsx
index 66dffaf..fad751d 100644
--- a/app/(user)/dashboard/page.tsx
+++ b/app/(user)/dashboard/page.tsx
@@ -6,6 +6,7 @@ import Link from 'next/link'
 import { Download, FileText, ArrowRight, Package, Clock } from 'lucide-react'
 import { useToast } from '@/components/ui/Toast'
 import { Spinner } from '@/components/ui/Spinner'
+import { ProgressBar } from '@/components/ui/ProgressBar'
 
 interface DashboardStats {
   totalDownloads: number
@@ -222,15 +223,15 @@ export default function DashboardPage() {
       <div className="bg-card rounded-2xl border border-border p-6">
         <div className="flex items-center justify-between mb-4">
           <div>
-            <h2 className="text-xl font-bold text-foreground">Usage Limits</h2>
-            <p className="text-sm text-muted-foreground">
+            <h2 className="text-xl font-bold text-app">Usage Limits</h2>
+            <p className="text-sm text-muted">
               Current period credit usage for your membership
             </p>
           </div>
           {membership && (
             <div className="text-right">
-              <p className="text-sm text-muted-foreground">Membership</p>
-              <p className="font-medium text-foreground">
+              <p className="text-sm text-muted">Membership</p>
+              <p className="font-medium text-app">
                 {membership.tier} · {membership.status}
               </p>
             </div>
@@ -239,43 +240,42 @@ export default function DashboardPage() {
 
         {membership ? (
           <div className="space-y-4">
-            <div className="flex items-center justify-between text-sm">
-              <span className="text-muted-foreground">Credits used this period</span>
-              <span className="font-medium text-foreground">
-                {membership.usedCredits} / {membership.totalCredits}
+            <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
+              <span className="text-muted">Credits used this period</span>
+              <span className="font-medium text-app">
+                {membership.usedCredits} / {membership.totalCredits} (
+                {membership.totalCredits > 0
+                  ? Math.round(
+                      (membership.usedCredits / membership.totalCredits) * 100
+                    )
+                  : 0}
+                %)
               </span>
             </div>
-            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
-              <div
-                className="h-full bg-primary transition-all"
-                style={{
-                  width: `${
-                    membership.totalCredits > 0
-                      ? Math.min(
-                          100,
-                          (membership.usedCredits / membership.totalCredits) * 100
-                        )
-                      : 0
-                  }%`,
-                }}
-              />
-            </div>
-            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
+            <ProgressBar
+              label="Credits used"
+              value={
+                membership.totalCredits > 0
+                  ? (membership.usedCredits / membership.totalCredits) * 100
+                  : 0
+              }
+            />
+            <div className="flex flex-wrap gap-4 text-sm text-muted mt-2">
               <span>
                 Credits remaining:{' '}
-                <span className="font-medium text-foreground">
+                <span className="font-medium text-app">
                   {membership.remainingCredits}
                 </span>
               </span>
               <span>
                 Resets in{' '}
-                <span className="font-medium text-foreground">
+                <span className="font-medium text-app">
                   {formatResetsIn(membership.endDate)}
                 </span>
               </span>
-              <span className="text-muted-foreground">
+              <span>
                 Weekly limits:{' '}
-                <span className="font-medium text-foreground">
+                <span className="font-medium text-app">
                   Not enforced yet
                 </span>
               </span>
@@ -283,7 +283,7 @@ export default function DashboardPage() {
           </div>
         ) : (
           <div className="space-y-4">
-            <p className="text-sm text-muted-foreground">
+            <p className="text-sm text-muted">
               You don&apos;t have an active membership yet. Credits and usage limits will appear here once a membership is assigned to your account.
             </p>
             <Link
@@ -305,7 +305,7 @@ export default function DashboardPage() {
         >
           <FileText size={32} className="mb-4" />
           <h3 className="text-xl font-bold mb-2">Request a Service</h3>
-          <p className="text-white/90 mb-4">
+          <p className="text-white mb-4">
             Need help with a project? Submit a service request and I'll get back to you.
           </p>
           <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
diff --git a/app/(user)/dashboard/settings/page.tsx b/app/(user)/dashboard/settings/page.tsx
index b1d5797..a779b99 100644
--- a/app/(user)/dashboard/settings/page.tsx
+++ b/app/(user)/dashboard/settings/page.tsx
@@ -1,8 +1,8 @@
 'use client'
 
 import { useEffect, useRef, useState } from 'react'
-import { useTheme } from '@/lib/ThemeContext'
-import { defaultTheme, ThemeName } from '@/lib/themes'
+import { usePreferences } from '@/lib/preferences/PreferencesContext'
+import type { ThemePref } from '@/lib/preferences/types'
 import { useToast } from '@/components/ui/Toast'
 import { Spinner } from '@/components/ui/Spinner'
 import ConfirmModal from '@/components/ui/ConfirmModal'
@@ -48,14 +48,14 @@ interface NotificationsResponse {
   }
 }
 
-function mapUserThemeToAppTheme(theme: UserThemePreference): ThemeName {
-  if (theme === 'LIGHT') return 'ayulight'
-  if (theme === 'DARK') return 'dracula'
-  return defaultTheme
+function mapUserThemeToPref(theme: UserThemePreference): ThemePref {
+  if (theme === 'LIGHT') return 'light'
+  if (theme === 'DARK') return 'dark'
+  return 'system'
 }
 
 export default function SettingsPage() {
-  const { theme, setTheme } = useTheme()
+  const { preferences, setTheme: setThemePref } = usePreferences()
   const { showToast } = useToast()
   const { update: updateSession } = useSession()
 
@@ -110,11 +110,9 @@ export default function SettingsPage() {
             setEmailNotifications(Boolean(data.emailNotifications))
             setHasPassword(Boolean(data.hasPassword))
 
-            const appTheme = mapUserThemeToAppTheme(
-              data.theme || 'SYSTEM'
-            ) as ThemeName
-            if (theme !== appTheme) {
-              setTheme(appTheme)
+            const preferredTheme = mapUserThemeToPref(data.theme || 'SYSTEM')
+            if (preferences.theme !== preferredTheme) {
+              setThemePref(preferredTheme)
             }
           }
         } else {
@@ -144,7 +142,7 @@ export default function SettingsPage() {
     return () => {
       cancelled = true
     }
-  }, [setTheme, showToast, theme])
+  }, [preferences.theme, setThemePref, showToast])
 
   useEffect(() => {
     return () => {
@@ -242,9 +240,9 @@ export default function SettingsPage() {
         return
       }
 
-      const appTheme = mapUserThemeToAppTheme(themePreference)
-      if (theme !== appTheme) {
-        setTheme(appTheme)
+      const preferredTheme = mapUserThemeToPref(themePreference)
+      if (preferences.theme !== preferredTheme) {
+        setThemePref(preferredTheme)
       }
 
       // Refresh NextAuth session so Header shows new avatar/name immediately
diff --git a/app/(user)/layout.tsx b/app/(user)/layout.tsx
index cbb6773..e1353a4 100644
--- a/app/(user)/layout.tsx
+++ b/app/(user)/layout.tsx
@@ -1,12 +1,18 @@
 'use client'
 
 import { SessionProvider } from 'next-auth/react'
+import { VibeyBackdrop } from '@/components/VibeyBackdrop'
 
 export default function UserLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
-  return <SessionProvider>{children}</SessionProvider>
+  return (
+    <SessionProvider>
+      <VibeyBackdrop className="min-h-screen">
+        {children}
+      </VibeyBackdrop>
+    </SessionProvider>
+  )
 }
-
diff --git a/app/Providers.tsx b/app/Providers.tsx
index 3ece892..a1a62f9 100644
--- a/app/Providers.tsx
+++ b/app/Providers.tsx
@@ -1,7 +1,6 @@
 'use client'
 
 import type { ReactNode } from 'react'
-import { ThemeProvider } from '@/lib/ThemeContext'
 import { PreferencesProvider } from '@/lib/preferences/PreferencesContext'
 import { PreferencesGate } from '@/components/preferences/PreferencesGate'
 import { ToastProvider } from '@/components/ui/Toast'
@@ -9,12 +8,10 @@ import { ToastProvider } from '@/components/ui/Toast'
 export function Providers({ children }: { children: ReactNode }) {
   return (
     <PreferencesProvider>
-      <ThemeProvider>
-        <ToastProvider>
-          <PreferencesGate />
-          {children}
-        </ToastProvider>
-      </ThemeProvider>
+      <ToastProvider>
+        <PreferencesGate />
+        {children}
+      </ToastProvider>
     </PreferencesProvider>
   )
 }
diff --git a/app/admin/content/about/page.tsx b/app/admin/content/about/page.tsx
index a3bad06..40c1a76 100644
--- a/app/admin/content/about/page.tsx
+++ b/app/admin/content/about/page.tsx
@@ -3,8 +3,9 @@
 import { useState, useEffect } from 'react'
 import { Button } from '@/components/ui/Button'
 import { Input } from '@/components/ui/Input'
-import { Plus, Trash2, Save, AlertCircle } from 'lucide-react'
+import { Plus, Trash2, Save, AlertCircle, Briefcase, GraduationCap } from 'lucide-react'
 import { ImageUploadCrop } from '@/components/ImageUploadCrop'
+import { YearPicker } from '@/components/ui/YearPicker'
 
 interface AboutData {
   hero: {
@@ -243,18 +244,18 @@ export default function AboutEditorPage() {
             value={data.hero.nickname}
             onChange={(e) => setData({ ...data, hero: { ...data.hero, nickname: e.target.value } })}
           />
-          <Input
-            label="Title"
-            value={data.hero.title}
-            onChange={(e) => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
-          />
-          <ImageUploadCrop
-            label="Avatar Image"
-            currentImage={data.hero.avatarUrl}
-            aspectRatio={1}
-            onImageCropped={(url) => setData({ ...data, hero: { ...data.hero, avatarUrl: url } })}
-          />
         </div>
+        <Input
+          label="Title"
+          value={data.hero.title}
+          onChange={(e) => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
+        />
+        <ImageUploadCrop
+          label="Avatar Image"
+          currentImage={data.hero.avatarUrl}
+          aspectRatio={1}
+          onImageCropped={(url) => setData({ ...data, hero: { ...data.hero, avatarUrl: url } })}
+        />
         <Input
           label="Tagline"
           value={data.hero.tagline}
@@ -354,23 +355,48 @@ export default function AboutEditorPage() {
         </div>
         <div className="space-y-4">
           {data.timeline.map((item) => (
-            <div key={item.id} className="border border-border rounded-lg p-4 space-y-3">
+            <div key={item.id} className="border border-border rounded-xl p-5 space-y-4 bg-card hover:border-border/80 transition-colors">
               <div className="flex items-center justify-between">
-                <select
-                  value={item.type}
-                  onChange={(e) => updateTimelineItem(item.id, 'type', e.target.value)}
-                  className="px-3 py-1 bg-muted border border-border rounded-lg text-sm"
-                >
-                  <option value="work">Work</option>
-                  <option value="education">Education</option>
-                </select>
+                {/* Category Pill Selector */}
+                <div className="flex gap-2">
+                  <button
+                    type="button"
+                    onClick={() => updateTimelineItem(item.id, 'type', 'work')}
+                    className={`
+                      flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all
+                      ${item.type === 'work'
+                        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30'
+                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
+                      }
+                    `}
+                  >
+                    <Briefcase size={14} />
+                    Work
+                  </button>
+                  <button
+                    type="button"
+                    onClick={() => updateTimelineItem(item.id, 'type', 'education')}
+                    className={`
+                      flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all
+                      ${item.type === 'education'
+                        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30'
+                        : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
+                      }
+                    `}
+                  >
+                    <GraduationCap size={14} />
+                    Education
+                  </button>
+                </div>
+
                 <button
                   onClick={() => removeTimelineItem(item.id)}
-                  className="text-destructive hover:text-destructive/80 p-2"
+                  className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                 >
-                  <Trash2 size={20} />
+                  <Trash2 size={18} />
                 </button>
               </div>
+
               <div className="grid grid-cols-2 gap-3">
                 <Input
                   label="Title"
@@ -383,19 +409,22 @@ export default function AboutEditorPage() {
                   onChange={(e) => updateTimelineItem(item.id, 'organization', e.target.value)}
                 />
               </div>
-              <Input
+
+              <YearPicker
                 label="Period"
                 value={item.period}
-                onChange={(e) => updateTimelineItem(item.id, 'period', e.target.value)}
-                placeholder="2024 - Present"
+                onChange={(value) => updateTimelineItem(item.id, 'period', value)}
+                placeholder="Select year or range"
+                allowRange={true}
               />
+
               <div>
                 <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                 <textarea
                   value={item.description}
                   onChange={(e) => updateTimelineItem(item.id, 'description', e.target.value)}
                   rows={3}
-                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
+                  className="w-full px-4 py-2.5 bg-muted border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none text-sm"
                 />
               </div>
             </div>
diff --git a/app/admin/layout.tsx b/app/admin/layout.tsx
index f2f09f5..a0cb2ff 100644
--- a/app/admin/layout.tsx
+++ b/app/admin/layout.tsx
@@ -40,34 +40,34 @@ export default function AdminLayout({
   return (
     <SessionProvider>
       <ToastProvider>
-        <div className="min-h-screen bg-background">
+        <div className="min-h-screen bg-app text-app">
         <AdminHeader />
 
         <div className="flex">
           {/* Sidebar */}
-          <aside className="w-64 min-h-[calc(100vh-73px)] bg-card border-r border-border sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
-            <div className="p-6">
-              <h2 className="text-lg font-bold text-foreground mb-6">Navigation</h2>
+          <aside className="w-64 min-h-[calc(100vh-65px)] surface-app border-r border-app sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto backdrop-blur-sm">
+            <div className="p-5">
+              <h2 className="text-xs font-bold text-muted-app uppercase tracking-wider mb-4 px-3">Navigation</h2>
 
-              <nav className="space-y-2">
+              <nav className="space-y-1">
                 {navItems.map((item) => (
                   <Link
                     key={item.href}
                     href={item.href}
-                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
+                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-app opacity-80 hover:opacity-100 hover:bg-app hover:text-[color:rgb(var(--primary))] transition-all group"
                   >
-                    <item.icon size={20} />
+                    <item.icon size={18} className="text-muted-app group-hover:text-[color:rgb(var(--primary))] transition-colors" />
                     <span>{item.label}</span>
                   </Link>
                 ))}
               </nav>
 
-              <div className="mt-8 pt-8 border-t border-border">
+              <div className="mt-6 pt-6 border-t border-app">
                 <Link
                   href="/"
-                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
+                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-app opacity-80 hover:opacity-100 hover:bg-app hover:text-[color:rgb(var(--primary))] transition-all group"
                 >
-                  <LogOut size={20} />
+                  <LogOut size={18} className="text-muted-app group-hover:text-[color:rgb(var(--primary))] transition-colors" />
                   <span>Back to Site</span>
                 </Link>
               </div>
@@ -75,8 +75,8 @@ export default function AdminLayout({
           </aside>
 
           {/* Main Content */}
-          <main className="flex-1 p-8 bg-background">
-            <div className="pointer-events-auto">
+          <main className="flex-1 p-6 bg-app max-w-[1600px]">
+            <div className="pointer-events-auto space-y-6">
               {children}
             </div>
           </main>
@@ -86,14 +86,14 @@ export default function AdminLayout({
         {showScrollButton && (
           <button
             onClick={scrollToTop}
-            className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 active:scale-95 z-50"
+            className="fixed bottom-6 right-6 w-11 h-11 bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 z-50 flex items-center justify-center"
             aria-label="Scroll to top"
           >
-            <ArrowUp size={24} />
+            <ArrowUp size={20} />
           </button>
         )}
       </div>
     </ToastProvider>
     </SessionProvider>
   )
-}
\ No newline at end of file
+}
diff --git a/app/admin/settings/page.tsx b/app/admin/settings/page.tsx
index 10861d7..03a8b5c 100644
--- a/app/admin/settings/page.tsx
+++ b/app/admin/settings/page.tsx
@@ -17,6 +17,64 @@ interface AdminAdsSettings {
   placements: Record<string, boolean>
 }
 
+type EmailProvider = 'gmail' | 'outlook' | 'yahoo' | 'icloud' | 'custom'
+
+const emailProviders: { value: EmailProvider; label: string }[] = [
+  { value: 'gmail', label: 'Gmail' },
+  { value: 'outlook', label: 'Outlook' },
+  { value: 'yahoo', label: 'Yahoo' },
+  { value: 'icloud', label: 'iCloud' },
+  { value: 'custom', label: 'Custom' },
+]
+
+const providerPresets: Record<
+  EmailProvider,
+  { host: string; port: string; secure: boolean; help: string }
+> = {
+  gmail: {
+    host: 'smtp.gmail.com',
+    port: '587',
+    secure: false,
+    help: 'Gmail requires an app password when 2-step verification is enabled. Create one in Google Account security settings.',
+  },
+  outlook: {
+    host: 'smtp.office365.com',
+    port: '587',
+    secure: false,
+    help: 'Outlook and Office 365 use SMTP auth. If MFA is enabled, create an app password in your Microsoft account.',
+  },
+  yahoo: {
+    host: 'smtp.mail.yahoo.com',
+    port: '587',
+    secure: false,
+    help: 'Yahoo Mail requires an app password. Generate one in Yahoo Account Security.',
+  },
+  icloud: {
+    host: 'smtp.mail.me.com',
+    port: '587',
+    secure: false,
+    help: 'iCloud Mail needs an app-specific password from your Apple ID security settings.',
+  },
+  custom: {
+    host: '',
+    port: '',
+    secure: false,
+    help: 'Enter the SMTP host, port, and security settings provided by your email provider.',
+  },
+}
+
+const detectProvider = (email: string): EmailProvider => {
+  const domain = email.split('@')[1]?.trim().toLowerCase()
+  if (!domain) return 'custom'
+  if (domain === 'gmail.com' || domain === 'googlemail.com') return 'gmail'
+  if (['outlook.com', 'hotmail.com', 'live.com', 'msn.com'].includes(domain)) {
+    return 'outlook'
+  }
+  if (domain === 'yahoo.com') return 'yahoo'
+  if (['icloud.com', 'me.com', 'mac.com'].includes(domain)) return 'icloud'
+  return 'custom'
+}
+
 export default function AdminSettingsPage() {
   const { showToast } = useToast()
   const [saving, setSaving] = useState(false)
@@ -40,8 +98,13 @@ export default function AdminSettingsPage() {
     smtpHost: 'smtp.gmail.com',
     smtpPort: '587',
     smtpUsername: 'your-email@gmail.com',
-    smtpPassword: ''
+    smtpPassword: '',
+    smtpSecure: false,
   })
+  const [emailProvider, setEmailProvider] = useState<EmailProvider>('gmail')
+  const [showEmailAdvanced, setShowEmailAdvanced] = useState(false)
+  const [hasManualHostOverride, setHasManualHostOverride] = useState(false)
+  const [hasManualPortOverride, setHasManualPortOverride] = useState(false)
 
   const [securitySettings, setSecuritySettings] = useState({
     sessionTimeout: '30',
@@ -67,6 +130,11 @@ export default function AdminSettingsPage() {
           adsProvider: string
           adsClientId: string | null
           adsPlacements: Record<string, boolean> | null
+          smtpHost?: string | null
+          smtpPort?: number | null
+          smtpUsername?: string | null
+          smtpPassword?: string | null
+          smtpSecure?: boolean | null
         }
 
         setSiteSettings({
@@ -85,6 +153,39 @@ export default function AdminSettingsPage() {
             ...prev.placements,
           },
         }))
+
+        const resolvedHost = data.smtpHost || emailSettings.smtpHost
+        const resolvedPort =
+          data.smtpPort !== null && data.smtpPort !== undefined
+            ? String(data.smtpPort)
+            : emailSettings.smtpPort
+        const resolvedUsername =
+          data.smtpUsername || emailSettings.smtpUsername
+        const resolvedPassword =
+          data.smtpPassword || emailSettings.smtpPassword
+        const resolvedSecure =
+          data.smtpSecure ?? emailSettings.smtpSecure
+
+        setEmailSettings(prev => ({
+          ...prev,
+          smtpHost: resolvedHost,
+          smtpPort: resolvedPort,
+          smtpUsername: resolvedUsername,
+          smtpPassword: resolvedPassword,
+          smtpSecure: resolvedSecure,
+        }))
+
+        const detectedProvider = detectProvider(resolvedUsername)
+        setEmailProvider(detectedProvider)
+        if (detectedProvider === 'custom') {
+          setHasManualHostOverride(false)
+          setHasManualPortOverride(false)
+        } else {
+          const preset = providerPresets[detectedProvider]
+          setHasManualHostOverride(resolvedHost !== preset.host)
+          setHasManualPortOverride(resolvedPort !== preset.port)
+        }
+        setShowEmailAdvanced(false)
       } catch (error) {
         console.error('Error loading site settings:', error)
         if (!cancelled) {
@@ -100,6 +201,41 @@ export default function AdminSettingsPage() {
     }
   }, [showToast])
 
+  useEffect(() => {
+    const detected = detectProvider(emailSettings.smtpUsername)
+    setEmailProvider(prev => (prev === detected ? prev : detected))
+  }, [emailSettings.smtpUsername])
+
+  useEffect(() => {
+    if (emailProvider === 'custom') return
+    const preset = providerPresets[emailProvider]
+    setEmailSettings(prev => ({
+      ...prev,
+      smtpHost: hasManualHostOverride ? prev.smtpHost : preset.host,
+      smtpPort: hasManualPortOverride ? prev.smtpPort : preset.port,
+      smtpSecure: preset.secure,
+    }))
+    if (!hasManualHostOverride && !hasManualPortOverride) {
+      setShowEmailAdvanced(false)
+    }
+  }, [emailProvider, hasManualHostOverride, hasManualPortOverride])
+
+  useEffect(() => {
+    if (hasManualPortOverride) return
+    setEmailSettings(prev => {
+      const currentPort = prev.smtpPort.trim()
+      const isDefaultPort = currentPort === '587' || currentPort === '465'
+      if (!isDefaultPort) return prev
+      if (prev.smtpSecure && currentPort !== '465') {
+        return { ...prev, smtpPort: '465' }
+      }
+      if (!prev.smtpSecure && currentPort !== '587') {
+        return { ...prev, smtpPort: '587' }
+      }
+      return prev
+    })
+  }, [emailSettings.smtpSecure, hasManualPortOverride])
+
   const handleSaveSite = async () => {
     try {
       setSaving(true)
@@ -231,6 +367,16 @@ export default function AdminSettingsPage() {
     showToast('All data cleared successfully', 'success')
   }
 
+  const handleProviderSelect = (provider: EmailProvider) => {
+    setHasManualHostOverride(false)
+    setHasManualPortOverride(false)
+    setEmailProvider(provider)
+  }
+
+  const isCustomProvider = emailProvider === 'custom'
+  const isEmailLocked = !isCustomProvider && !showEmailAdvanced
+  const providerHelp = providerPresets[emailProvider].help
+
   return (
     <div className="space-y-6">
       {/* Header */}
@@ -425,78 +571,166 @@ export default function AdminSettingsPage() {
       {/* Email Settings */}
       <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
         <div className="flex items-center gap-3">
-          <div className="p-2 bg-primary/10 rounded-lg">
-            <Mail className="text-primary" size={20} />
+          <div className="p-2 bg-[color:rgb(var(--primary)/0.12)] rounded-lg">
+            <Mail className="text-[color:rgb(var(--primary))]" size={20} />
           </div>
           <div>
-            <h2 className="text-xl font-bold text-foreground">Email Settings</h2>
-            <p className="text-sm text-muted-foreground">SMTP configuration for notifications</p>
+            <h2 className="text-xl font-bold text-app">Email Settings</h2>
+            <p className="text-sm text-muted">SMTP configuration for notifications</p>
           </div>
         </div>
 
+        <div className="space-y-3">
+          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
+            Provider
+          </p>
+          <div className="flex flex-wrap gap-2">
+            {emailProviders.map(option => (
+              <button
+                key={option.value}
+                type="button"
+                onClick={() => handleProviderSelect(option.value)}
+                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 ring-app ring-offset-2 ring-offset-app ${
+                  emailProvider === option.value
+                    ? 'bg-accent text-white border-accent shadow-sm'
+                    : 'surface-app border-app text-app hover:bg-app'
+                }`}
+                aria-pressed={emailProvider === option.value}
+              >
+                {option.label}
+              </button>
+            ))}
+          </div>
+          <p className="text-sm text-muted">{providerHelp}</p>
+          {!isCustomProvider && (
+            <button
+              type="button"
+              onClick={() => setShowEmailAdvanced(value => !value)}
+              className="text-sm font-medium text-app underline-offset-4 hover:underline"
+              aria-expanded={showEmailAdvanced}
+            >
+              {showEmailAdvanced ? 'Hide advanced settings' : 'Advanced settings'}
+            </button>
+          )}
+        </div>
+
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
-            <label className="block text-sm font-medium text-foreground mb-2">
+            <label className="block text-sm font-medium text-app mb-2">
               SMTP Host
             </label>
             <input
               type="text"
               value={emailSettings.smtpHost}
-              onChange={(e) => setEmailSettings({ ...emailSettings, smtpHost: e.target.value })}
-              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
+              onChange={(e) => {
+                setHasManualHostOverride(true)
+                setEmailSettings({
+                  ...emailSettings,
+                  smtpHost: e.target.value,
+                })
+              }}
+              readOnly={isEmailLocked}
+              aria-readonly={isEmailLocked}
+              className={`w-full px-4 py-2 surface-app border border-app rounded-lg text-sm text-app placeholder:text-[color:rgb(var(--muted)/0.75)] focus:border-[color:rgb(var(--ring)/0.6)] focus:ring-2 focus:ring-[color:rgb(var(--ring)/0.35)] outline-none transition ${
+                isEmailLocked ? 'opacity-60 cursor-not-allowed' : ''
+              }`}
             />
           </div>
 
           <div>
-            <label className="block text-sm font-medium text-foreground mb-2">
+            <label className="block text-sm font-medium text-app mb-2">
               SMTP Port
             </label>
             <input
               type="text"
               value={emailSettings.smtpPort}
-              onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
-              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
+              onChange={(e) => {
+                setHasManualPortOverride(true)
+                setEmailSettings({
+                  ...emailSettings,
+                  smtpPort: e.target.value,
+                })
+              }}
+              readOnly={isEmailLocked}
+              aria-readonly={isEmailLocked}
+              className={`w-full px-4 py-2 surface-app border border-app rounded-lg text-sm text-app placeholder:text-[color:rgb(var(--muted)/0.75)] focus:border-[color:rgb(var(--ring)/0.6)] focus:ring-2 focus:ring-[color:rgb(var(--ring)/0.35)] outline-none transition ${
+                isEmailLocked ? 'opacity-60 cursor-not-allowed' : ''
+              }`}
             />
           </div>
 
           <div>
-            <label className="block text-sm font-medium text-foreground mb-2">
+            <label className="block text-sm font-medium text-app mb-2">
               SMTP Username
             </label>
             <input
               type="email"
               value={emailSettings.smtpUsername}
-              onChange={(e) => setEmailSettings({ ...emailSettings, smtpUsername: e.target.value })}
-              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
+              onChange={(e) =>
+                setEmailSettings({
+                  ...emailSettings,
+                  smtpUsername: e.target.value,
+                })
+              }
+              className="w-full px-4 py-2 surface-app border border-app rounded-lg text-sm text-app placeholder:text-[color:rgb(var(--muted)/0.75)] focus:border-[color:rgb(var(--ring)/0.6)] focus:ring-2 focus:ring-[color:rgb(var(--ring)/0.35)] outline-none transition"
             />
           </div>
 
           <div>
-            <label className="block text-sm font-medium text-foreground mb-2">
+            <label className="block text-sm font-medium text-app mb-2">
               SMTP Password
             </label>
             <input
               type="password"
               value={emailSettings.smtpPassword}
-              onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
+              onChange={(e) =>
+                setEmailSettings({
+                  ...emailSettings,
+                  smtpPassword: e.target.value,
+                })
+              }
               placeholder="••••••••"
-              className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
+              className="w-full px-4 py-2 surface-app border border-app rounded-lg text-sm text-app placeholder:text-[color:rgb(var(--muted)/0.75)] focus:border-[color:rgb(var(--ring)/0.6)] focus:ring-2 focus:ring-[color:rgb(var(--ring)/0.35)] outline-none transition"
             />
           </div>
+
+          <div className="md:col-span-2">
+            <label className="flex items-center justify-between gap-4 rounded-lg border border-app surface-app px-4 py-3">
+              <div>
+                <p className="text-sm font-medium text-app">
+                  Secure connection
+                </p>
+                <p className="text-xs text-muted">
+                  Port 587 uses STARTTLS. Port 465 uses SSL or TLS.
+                </p>
+              </div>
+              <input
+                type="checkbox"
+                checked={emailSettings.smtpSecure}
+                onChange={(e) =>
+                  setEmailSettings({
+                    ...emailSettings,
+                    smtpSecure: e.target.checked,
+                  })
+                }
+                className="h-4 w-4 rounded border-app text-[color:rgb(var(--primary))] focus:ring-2 focus:ring-[color:rgb(var(--ring)/0.35)]"
+              />
+            </label>
+          </div>
         </div>
 
         <div className="flex gap-3">
           <button
             onClick={handleSaveEmail}
             disabled={saving}
-            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
+            className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition disabled:opacity-50"
           >
             <Save size={20} />
             {saving ? 'Saving...' : 'Save Email Settings'}
           </button>
           <button
             onClick={handleTestEmail}
-            className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/70 transition border border-border"
+            className="flex items-center gap-2 px-6 py-3 surface-app text-app rounded-lg hover:bg-app transition border border-app"
           >
             <Mail size={20} />
             Test Email
diff --git a/app/api/admin/settings/email/route.ts b/app/api/admin/settings/email/route.ts
index 69fbf7b..d74bc47 100644
--- a/app/api/admin/settings/email/route.ts
+++ b/app/api/admin/settings/email/route.ts
@@ -1,6 +1,7 @@
 import { NextRequest, NextResponse } from 'next/server'
-import { sendEmail, getEmailTemplate } from '@/lib/email'
+import { getEmailConfigFromEnv, sendEmail, getEmailTemplate } from '@/lib/email'
 import { getServerSession } from '@/lib/auth'
+import { prisma } from '@/lib/prisma'
 
 // POST /api/admin/settings/email - Save email settings and send test
 export async function POST(request: NextRequest) {
@@ -15,35 +16,84 @@ export async function POST(request: NextRequest) {
     }
 
     const body = await request.json()
-    const { smtpHost, smtpPort, smtpUsername, smtpPassword, testEmail } = body
+    const {
+      smtpHost,
+      smtpPort,
+      smtpUsername,
+      smtpPassword,
+      smtpSecure,
+      testEmail
+    } = body
 
-    if (!smtpHost || !smtpPort || !smtpUsername || !smtpPassword) {
-      return NextResponse.json(
-        { success: false, error: 'All fields are required' },
-        { status: 400 }
-      )
-    }
+    const secure =
+      typeof smtpSecure === 'boolean'
+        ? smtpSecure
+        : typeof smtpSecure === 'string'
+          ? smtpSecure === 'true'
+          : false
 
-    // If testEmail is provided, send a test email
+    // If testEmail is provided, send a test email using saved settings first.
     if (testEmail) {
-      const template = getEmailTemplate('test')
-      const result = await sendEmail(
-        {
-          host: smtpHost,
-          port: parseInt(smtpPort),
-          user: smtpUsername,
-          pass: smtpPassword
-        },
-        {
-          to: testEmail,
-          subject: template.subject,
-          html: template.html
+      const settings = await prisma.siteSettings.findUnique({
+        where: { id: 'site_settings_singleton' },
+      })
+
+      const hasStoredSettings =
+        !!settings?.smtpHost &&
+        typeof settings.smtpPort === 'number' &&
+        !!settings.smtpUsername &&
+        !!settings.smtpPassword
+
+      let config:
+        | {
+            host: string
+            port: number
+            user: string
+            pass: string
+            from?: string
+            secure?: boolean
+          }
+        | null = null
+
+      if (hasStoredSettings) {
+        config = {
+          host: settings!.smtpHost!,
+          port: settings!.smtpPort!,
+          user: settings!.smtpUsername!,
+          pass: settings!.smtpPassword!,
+          from: settings!.smtpUsername!,
+          secure: settings!.smtpSecure ?? false,
         }
-      )
+      } else {
+        try {
+          config = getEmailConfigFromEnv()
+        } catch (envError) {
+          return NextResponse.json(
+            {
+              success: false,
+              error: 'Email not configured in Admin settings',
+              details:
+                process.env.NODE_ENV !== 'production' ? envError : undefined,
+            },
+            { status: 400 }
+          )
+        }
+      }
+
+      const template = getEmailTemplate('test')
+      const result = await sendEmail(config, {
+        to: testEmail,
+        subject: template.subject,
+        html: template.html
+      })
 
       if (!result.success) {
         return NextResponse.json(
-          { success: false, error: result.error },
+          {
+            success: false,
+            error: result.error || 'Failed to send test email',
+            details: result.details
+          },
           { status: 500 }
         )
       }
@@ -54,16 +104,53 @@ export async function POST(request: NextRequest) {
       })
     }
 
-    // TODO: Save email settings to database or environment variables
-    // For now, just return success
+    if (!smtpHost || !smtpPort || !smtpUsername || !smtpPassword) {
+      return NextResponse.json(
+        { success: false, error: 'All fields are required' },
+        { status: 400 }
+      )
+    }
+
+    const parsedPort = Number(smtpPort)
+    if (!Number.isFinite(parsedPort) || parsedPort <= 0) {
+      return NextResponse.json(
+        { success: false, error: 'SMTP port must be a valid number' },
+        { status: 400 }
+      )
+    }
+
+    await prisma.siteSettings.upsert({
+      where: { id: 'site_settings_singleton' },
+      update: {
+        smtpHost,
+        smtpPort: parsedPort,
+        smtpUsername,
+        smtpPassword,
+        smtpSecure: secure,
+      },
+      create: {
+        id: 'site_settings_singleton',
+        smtpHost,
+        smtpPort: parsedPort,
+        smtpUsername,
+        smtpPassword,
+        smtpSecure: secure,
+      },
+    })
+
     return NextResponse.json({
       success: true,
       message: 'Email settings saved successfully'
     })
   } catch (error) {
     console.error('Error in email settings:', error)
+    const message = error instanceof Error ? error.message : 'Failed to process request'
     return NextResponse.json(
-      { success: false, error: 'Failed to process request' },
+      {
+        success: false,
+        error: message,
+        details: process.env.NODE_ENV !== 'production' ? error : undefined
+      },
       { status: 500 }
     )
   }
diff --git a/app/api/content/request-form/route.ts b/app/api/content/request-form/route.ts
index f770c3b..09aa24b 100644
--- a/app/api/content/request-form/route.ts
+++ b/app/api/content/request-form/route.ts
@@ -1,12 +1,26 @@
 import { NextRequest, NextResponse } from 'next/server'
+import { PrismaClient } from '@prisma/client'
+import { revalidatePath } from 'next/cache'
 import fs from 'fs/promises'
 import path from 'path'
 
-const CONTENT_PATH = path.join(process.cwd(), 'public/content/request-form.json')
+const prisma = new PrismaClient()
+const FALLBACK_PATH = path.join(process.cwd(), 'public/content/request-form.json')
 
 export async function GET() {
   try {
-    const fileContent = await fs.readFile(CONTENT_PATH, 'utf-8')
+    // Try to read from database first
+    const pageContent = await prisma.pageContent.findUnique({
+      where: { slug: 'request-form' }
+    })
+
+    if (pageContent) {
+      return NextResponse.json(pageContent.data)
+    }
+
+    // Fallback to JSON file if DB entry doesn't exist
+    console.warn('Request form content not found in DB, falling back to JSON file')
+    const fileContent = await fs.readFile(FALLBACK_PATH, 'utf-8')
     const data = JSON.parse(fileContent)
 
     return NextResponse.json(data)
@@ -48,12 +62,23 @@ export async function PUT(request: NextRequest) {
       }
     }
 
-    // Write to file with pretty formatting
-    await fs.writeFile(
-      CONTENT_PATH,
-      JSON.stringify(updatedContent, null, 2),
-      'utf-8'
-    )
+    // Write to database
+    const result = await prisma.pageContent.upsert({
+      where: { slug: 'request-form' },
+      create: {
+        slug: 'request-form',
+        data: updatedContent,
+        version: updatedContent.metadata.version
+      },
+      update: {
+        data: updatedContent,
+        version: updatedContent.metadata.version
+      }
+    })
+
+    // Revalidate the request page cache
+    revalidatePath('/request')
+    revalidatePath('/admin/content/request-form')
 
     return NextResponse.json({
       success: true,
@@ -70,5 +95,7 @@ export async function PUT(request: NextRequest) {
       },
       { status: 500 }
     )
+  } finally {
+    await prisma.$disconnect()
   }
 }
diff --git a/app/api/content/services/route.ts b/app/api/content/services/route.ts
index d62c034..432fee2 100644
--- a/app/api/content/services/route.ts
+++ b/app/api/content/services/route.ts
@@ -1,12 +1,26 @@
 import { NextRequest, NextResponse } from 'next/server'
+import { PrismaClient } from '@prisma/client'
+import { revalidatePath } from 'next/cache'
 import fs from 'fs/promises'
 import path from 'path'
 
-const CONTENT_PATH = path.join(process.cwd(), 'public/content/services.json')
+const prisma = new PrismaClient()
+const FALLBACK_PATH = path.join(process.cwd(), 'public/content/services.json')
 
 export async function GET() {
   try {
-    const fileContent = await fs.readFile(CONTENT_PATH, 'utf-8')
+    // Try to read from database first
+    const pageContent = await prisma.pageContent.findUnique({
+      where: { slug: 'services' }
+    })
+
+    if (pageContent) {
+      return NextResponse.json(pageContent.data)
+    }
+
+    // Fallback to JSON file if DB entry doesn't exist
+    console.warn('Services content not found in DB, falling back to JSON file')
+    const fileContent = await fs.readFile(FALLBACK_PATH, 'utf-8')
     const data = JSON.parse(fileContent)
 
     return NextResponse.json(data)
@@ -48,12 +62,23 @@ export async function PUT(request: NextRequest) {
       }
     }
 
-    // Write to file with pretty formatting
-    await fs.writeFile(
-      CONTENT_PATH,
-      JSON.stringify(updatedContent, null, 2),
-      'utf-8'
-    )
+    // Write to database
+    const result = await prisma.pageContent.upsert({
+      where: { slug: 'services' },
+      create: {
+        slug: 'services',
+        data: updatedContent,
+        version: updatedContent.metadata.version
+      },
+      update: {
+        data: updatedContent,
+        version: updatedContent.metadata.version
+      }
+    })
+
+    // Revalidate the services page cache
+    revalidatePath('/services')
+    revalidatePath('/admin/content/services')
 
     return NextResponse.json({
       success: true,
@@ -70,5 +95,7 @@ export async function PUT(request: NextRequest) {
       },
       { status: 500 }
     )
+  } finally {
+    await prisma.$disconnect()
   }
 }
diff --git a/app/api/digital-products/[slug]/download/route.ts b/app/api/digital-products/[slug]/download/route.ts
index 0d44f47..c5f4246 100644
--- a/app/api/digital-products/[slug]/download/route.ts
+++ b/app/api/digital-products/[slug]/download/route.ts
@@ -10,7 +10,7 @@ import {
   createDownloadToken,
 } from '@/lib/downloads'
 import { detectDownloadAbuse, flagLicenseAbuse } from '@/lib/license'
-import { getEmailTemplate, sendEmail } from '@/lib/email'
+import { getEmailConfigFromEnv, getEmailTemplate, sendEmail } from '@/lib/email'
 
 function getClientIp(req: NextRequest): string | null {
   const headerList = headers()
@@ -151,28 +151,23 @@ export async function POST(
       })
 
       // Send abuse detection email
-      if (user && process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
-        const emailTemplate = getEmailTemplate('license-abuse-detected', {
-          productName: product.name,
-          licenseKey: license.licenseKey,
-          abuseReason: abuseCheck.reason,
-        })
-
-        await sendEmail(
-          {
-            host: process.env.EMAIL_HOST,
-            port: parseInt(process.env.EMAIL_PORT || '587'),
-            user: process.env.EMAIL_USER,
-            pass: process.env.EMAIL_PASS,
-          },
-          {
+      if (user) {
+        try {
+          const emailTemplate = getEmailTemplate('license-abuse-detected', {
+            productName: product.name,
+            licenseKey: license.licenseKey,
+            abuseReason: abuseCheck.reason,
+          })
+
+          const emailConfig = getEmailConfigFromEnv()
+          await sendEmail(emailConfig, {
             to: user.email,
             subject: emailTemplate.subject,
             html: emailTemplate.html,
-          }
-        ).catch((err) => {
+          })
+        } catch (err) {
           console.error('Failed to send abuse detection email:', err)
-        })
+        }
       }
 
       return NextResponse.json(
diff --git a/app/globals.css b/app/globals.css
index 3cab861..d0abe05 100644
--- a/app/globals.css
+++ b/app/globals.css
@@ -3,211 +3,91 @@
 @tailwind utilities;
 
 @layer base {
-  /* ============================================
-     MIDNIGHT PURPLE (Default)
-     ============================================ */
-  :root,
-  [data-legacy-theme='dracula'] {
-    --color-primary: 189 147 249;        /* Purple */
-    --color-primary-foreground: 40 42 54;
-    --color-secondary: 255 121 198;      /* Pink */
-    --color-secondary-foreground: 40 42 54;
-    --color-accent: 80 250 123;          /* Green */
-    --color-accent-secondary: 241 250 140; /* Yellow */
-    --color-accent-foreground: 40 42 54;
-
-    --color-background: 40 42 54;        /* #282A36 */
-    --color-background-secondary: 33 34 44;
-    --color-foreground: 248 248 242;
-    --color-foreground-muted: 152 166 173;
-
-    --color-border: 68 71 90;
-    --color-border-light: 98 114 164;
-    --color-card: 33 34 44;
-    --color-card-hover: 68 71 90;
-    --color-muted: 68 71 90;
-
-    --color-destructive: 255 85 85;
-    --color-success: 80 250 123;
-    --color-warning: 241 250 140;
-    --color-info: 139 233 253;
-  }
-
-  /* ============================================
-     DESERT DAWN
-     ============================================ */
-  [data-legacy-theme='ayulight'] {
-    --color-primary: 65 137 223;         /* Blue */
-    --color-primary-foreground: 255 255 255;
-    --color-secondary: 250 116 34;       /* Orange */
-    --color-secondary-foreground: 255 255 255;
-    --color-accent: 134 182 91;          /* Green */
-    --color-accent-secondary: 228 181 89; /* Yellow */
-    --color-accent-foreground: 255 255 255;
-
-    --color-background: 250 251 252;     /* #FAFBFC */
-    --color-background-secondary: 242 243 245;
-    --color-foreground: 90 98 114;
-    --color-foreground-muted: 142 152 170;
-
-    --color-border: 207 214 224;
-    --color-border-light: 230 234 239;
-    --color-card: 255 255 255;
-    --color-card-hover: 242 243 245;
-    --color-muted: 230 234 239;
-
-    --color-destructive: 242 88 93;
-    --color-success: 134 182 91;
-    --color-warning: 228 181 89;
-    --color-info: 65 137 223;
-  }
-
-  /* ============================================
-     CLEAN SLATE
-     ============================================ */
-  [data-legacy-theme='quietlight'] {
-    --color-primary: 0 119 170;          /* Blue */
-    --color-primary-foreground: 255 255 255;
-    --color-secondary: 166 38 164;       /* Purple */
-    --color-secondary-foreground: 255 255 255;
-    --color-accent: 0 128 0;             /* Green */
-    --color-accent-secondary: 152 104 1;  /* Brown */
-    --color-accent-foreground: 255 255 255;
-
-    --color-background: 246 246 246;     /* #F6F6F6 - Soft gray */
-    --color-background-secondary: 237 237 237;
-    --color-foreground: 51 51 51;
-    --color-foreground-muted: 102 102 102;
-
-    --color-border: 212 212 212;
-    --color-border-light: 227 227 227;
-    --color-card: 255 255 255;
-    --color-card-hover: 237 237 237;
-    --color-muted: 227 227 227;
-
-    --color-destructive: 164 0 0;
-    --color-success: 0 128 0;
-    --color-warning: 152 104 1;
-    --color-info: 0 119 170;
-  }
-
-  /* ============================================
-     OCEAN DEEP
-     ============================================ */
-  [data-legacy-theme='material'] {
-    --color-primary: 130 170 255;        /* Blue */
-    --color-primary-foreground: 255 255 255;
-    --color-secondary: 199 146 234;      /* Purple */
-    --color-secondary-foreground: 255 255 255;
-    --color-accent: 195 232 141;         /* Green */
-    --color-accent-secondary: 255 203 107; /* Yellow */
-    --color-accent-foreground: 38 50 56;
-
-    --color-background: 38 50 56;        /* #263238 - Ocean blue */
-    --color-background-secondary: 30 39 46;
-    --color-foreground: 236 239 244;
-    --color-foreground-muted: 144 164 174;
-
-    --color-border: 55 71 79;
-    --color-border-light: 84 110 122;
-    --color-card: 30 39 46;
-    --color-card-hover: 55 71 79;
-    --color-muted: 55 71 79;
-
-    --color-destructive: 255 83 112;
-    --color-success: 195 232 141;
-    --color-warning: 255 203 107;
-    --color-info: 137 221 255;
-  }
-
-  /* ============================================
-     PREFERENCES TOKENS (FORMAL + VIBEY)
-     ============================================ */
   :root {
-    --bg: rgb(var(--color-background));
-    --surface: rgb(var(--color-card));
-    --border: rgb(var(--color-border));
-    --text: rgb(var(--color-foreground));
-    --muted: rgb(var(--color-foreground-muted));
-    --primary: rgb(var(--color-primary));
-    --primary2: rgb(var(--color-secondary));
-    --ring: rgb(var(--color-primary));
+    --bg: 250 250 250;
+    --surface: 255 255 255;
+    --border: 228 228 231;
+    --text: 24 24 27;
+    --muted: 70 70 78;
+    --primary: 37 99 235;
+    --primary2: 71 85 105;
+    --ring: var(--primary);
   }
 
   [data-theme='light'] {
-    --bg: theme('colors.zinc.50');
-    --surface: theme('colors.white');
-    --border: theme('colors.zinc.200');
-    --text: theme('colors.zinc.900');
-    --muted: theme('colors.zinc.600');
+    --bg: 250 250 250;
+    --surface: 255 255 255;
+    --border: 228 228 231;
+    --text: 24 24 27;
+    --muted: 70 70 78;
   }
 
   [data-theme='dark'] {
-    --bg: theme('colors.zinc.950');
-    --surface: theme('colors.zinc.900');
-    --border: theme('colors.zinc.800');
-    --text: theme('colors.zinc.50');
-    --muted: theme('colors.zinc.300');
+    --bg: 9 9 11;
+    --surface: 24 24 27;
+    --border: 39 39 42;
+    --text: 250 250 250;
+    --muted: 161 161 170;
   }
 
   [data-mode='formal'][data-theme='light'] {
-    --primary: theme('colors.blue.600');
-    --primary2: theme('colors.slate.600');
-    --ring: theme('colors.blue.600');
+    --primary: 37 99 235;
+    --primary2: 71 85 105;
+    --ring: var(--primary);
   }
 
   [data-mode='formal'][data-theme='dark'] {
-    --primary: theme('colors.blue.400');
-    --primary2: theme('colors.slate.400');
-    --ring: theme('colors.blue.400');
+    --primary: 96 165 250;
+    --primary2: 148 163 184;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='grape'][data-theme='light'] {
-    --primary: theme('colors.violet.600');
-    --primary2: theme('colors.fuchsia.500');
-    --ring: theme('colors.violet.600');
+    --primary: 124 58 237;
+    --primary2: 217 70 239;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='grape'][data-theme='dark'] {
-    --primary: theme('colors.violet.400');
-    --primary2: theme('colors.fuchsia.400');
-    --ring: theme('colors.violet.400');
+    --primary: 167 139 250;
+    --primary2: 232 121 249;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='ocean'][data-theme='light'] {
-    --primary: theme('colors.cyan.600');
-    --primary2: theme('colors.teal.500');
-    --ring: theme('colors.cyan.600');
+    --primary: 8 145 178;
+    --primary2: 20 184 166;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='ocean'][data-theme='dark'] {
-    --primary: theme('colors.cyan.400');
-    --primary2: theme('colors.teal.400');
-    --ring: theme('colors.cyan.400');
+    --primary: 34 211 238;
+    --primary2: 45 212 191;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='peach'][data-theme='light'] {
-    --primary: theme('colors.orange.400');
-    --primary2: theme('colors.purple.500');
-    --ring: theme('colors.orange.400');
+    --primary: 251 146 60;
+    --primary2: 168 85 247;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='peach'][data-theme='dark'] {
-    --primary: theme('colors.orange.300');
-    --primary2: theme('colors.purple.400');
-    --ring: theme('colors.orange.300');
+    --primary: 253 186 116;
+    --primary2: 192 132 252;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='neon'][data-theme='light'] {
-    --primary: theme('colors.lime.500');
-    --primary2: theme('colors.emerald.500');
-    --ring: theme('colors.lime.500');
+    --primary: 132 204 22;
+    --primary2: 16 185 129;
+    --ring: var(--primary);
   }
 
   [data-mode='vibey'][data-vibey='neon'][data-theme='dark'] {
-    --primary: theme('colors.lime.400');
-    --primary2: theme('colors.emerald.400');
-    --ring: theme('colors.lime.400');
+    --primary: 163 230 53;
+    --primary2: 52 211 153;
+    --ring: var(--primary);
   }
 
   /* ============================================
@@ -219,9 +99,14 @@
 
   body {
     @apply bg-background text-foreground antialiased;
-    background-color: var(--bg, rgb(var(--color-background)));
-    color: var(--text, rgb(var(--color-foreground)));
-    caret-color: var(--primary, rgb(var(--color-primary)));
+    background-color: rgb(var(--bg));
+    color: rgb(var(--text));
+    caret-color: rgb(var(--primary));
+    transition: background-color 220ms ease, color 220ms ease;
+  }
+
+  html {
+    transition: background-color 220ms ease, color 220ms ease;
   }
 
   h1, h2, h3, h4, h5, h6 {
@@ -233,7 +118,118 @@
   }
 
   a {
-    @apply text-primary hover:underline transition-colors;
+    color: rgb(var(--primary));
+    @apply hover:underline transition-colors;
+  }
+
+  a:hover {
+    color: rgb(var(--primary2));
+  }
+
+  button,
+  a {
+    transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
+  }
+
+  .surface-app,
+  .bg-app,
+  .bg-card,
+  .bg-background,
+  .bg-muted,
+  .bg-background-secondary {
+    transition: background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
+  }
+
+  .border-app,
+  .border-border {
+    transition: border-color 200ms ease;
+  }
+
+  .vibey-zone {
+    position: relative;
+    isolation: isolate;
+  }
+
+  .vibey-content {
+    position: relative;
+    z-index: 1;
+  }
+
+  .vibey-backdrop,
+  .vibey-noise {
+    position: absolute;
+    inset: 0;
+    pointer-events: none;
+    opacity: 0;
+    z-index: 0;
+  }
+
+  [data-mode='vibey'] .vibey-zone .vibey-backdrop {
+    opacity: 0.5;
+    background:
+      radial-gradient(620px 460px at 12% 8%, color-mix(in srgb, rgb(var(--primary2)) 18%, transparent) 0%, transparent 70%),
+      radial-gradient(520px 380px at 85% 12%, color-mix(in srgb, rgb(var(--primary)) 14%, transparent) 0%, transparent 70%),
+      radial-gradient(760px 560px at 35% 92%, color-mix(in srgb, rgb(var(--primary2)) 10%, transparent) 0%, transparent 75%);
+  }
+
+  [data-mode='vibey'] .vibey-zone .vibey-noise {
+    opacity: 0.08;
+    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
+    mix-blend-mode: soft-light;
+  }
+
+  [data-mode='vibey'] .vibey-zone .hero-title {
+    font-size: clamp(2.8rem, 5vw + 1rem, 4.5rem);
+    font-weight: 800;
+  }
+
+  @media (min-width: 768px) {
+    [data-mode='vibey'] .vibey-zone .hero-title {
+      font-size: clamp(3.6rem, 4vw + 1.5rem, 5.5rem);
+    }
+  }
+
+  [data-mode='vibey'] .vibey-zone .vibey-card {
+    transition: transform 200ms ease, filter 200ms ease, border-color 200ms ease;
+  }
+
+  [data-mode='vibey'] .vibey-zone .vibey-card:hover {
+    transform: translateY(-4px);
+    filter: drop-shadow(0 16px 28px rgb(var(--primary2) / 0.18));
+    border-color: rgb(var(--primary2));
+  }
+
+  [data-mode='vibey'] .vibey-zone main a:not(.no-underline) {
+    text-decoration: none;
+    background-image: linear-gradient(transparent, transparent), linear-gradient(rgb(var(--primary)), rgb(var(--primary)));
+    background-size: 100% 0.12em, 0% 0.12em;
+    background-position: 0 100%, 0 100%;
+    background-repeat: no-repeat;
+    transition: background-size 200ms ease, color 200ms ease;
+  }
+
+  [data-mode='vibey'] .vibey-zone main a:not(.no-underline):hover,
+  [data-mode='vibey'] .vibey-zone main a:not(.no-underline):focus-visible {
+    text-decoration: none;
+    background-size: 100% 0.12em, 100% 0.12em;
+  }
+
+  @media (prefers-reduced-motion: reduce) {
+    html,
+    body,
+    button,
+    a,
+    .surface-app,
+    .bg-app,
+    .bg-card,
+    .bg-background,
+    .bg-muted,
+    .bg-background-secondary,
+    .border-app,
+    .border-border,
+    .vibey-card {
+      transition: none !important;
+    }
   }
 
   code {
@@ -280,46 +276,58 @@
   }
 
   .bg-app {
-    background-color: var(--bg);
+    background-color: rgb(var(--bg) / 1);
   }
 
   .surface-app {
-    background-color: var(--surface);
+    background-color: rgb(var(--surface) / 1);
   }
 
   .border-app {
-    border-color: var(--border);
+    border-color: rgb(var(--border) / 1);
   }
 
   .text-app {
-    color: var(--text);
+    color: rgb(var(--text) / 1);
+  }
+
+  .text-muted {
+    color: rgb(var(--muted) / 1);
   }
 
   .text-muted-app {
-    color: var(--muted);
+    color: rgb(var(--muted) / 1);
   }
 
   .accent {
-    color: var(--primary);
+    color: rgb(var(--primary) / 1);
   }
 
   .accent-2 {
-    color: var(--primary2);
+    color: rgb(var(--primary2) / 1);
   }
 
   .bg-accent {
-    background-color: var(--primary);
+    background-color: rgb(var(--primary) / 1);
   }
 
   .bg-accent-soft {
-    background-color: color-mix(in srgb, var(--primary) 15%, transparent);
+    background-color: color-mix(in srgb, rgb(var(--primary)) 15%, transparent);
   }
 
   .border-accent {
-    border-color: var(--primary);
+    border-color: rgb(var(--primary) / 1);
+  }
+
+  .border-accent-2 {
+    border-color: rgb(var(--primary2) / 1);
   }
 
   .ring-app {
-    --tw-ring-color: var(--ring);
+    --tw-ring-color: rgb(var(--ring) / 0.35);
+  }
+
+  .ring-offset-app {
+    --tw-ring-offset-color: rgb(var(--bg) / 1);
   }
 }
diff --git a/app/layout.tsx b/app/layout.tsx
index 9c8d308..1e1f836 100644
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -23,7 +23,6 @@ export default function RootLayout({
       suppressHydrationWarning
       data-theme="light"
       data-mode="formal"
-      data-legacy-theme="dracula"
     >
       <body className={inter.className}>
         <Providers>{children}</Providers>
diff --git a/components/AdminHeader.tsx b/components/AdminHeader.tsx
index a67c6a7..a67ddd3 100644
--- a/components/AdminHeader.tsx
+++ b/components/AdminHeader.tsx
@@ -1,56 +1,110 @@
 'use client'
 
 import Link from 'next/link'
-import { Home, User, LogOut } from 'lucide-react'
-import { ThemeSelector } from './ThemeSelector'
+import { Home, LogOut, Sparkles } from 'lucide-react'
 import { useSession, signOut } from 'next-auth/react'
+import { usePreferences } from '@/lib/preferences/PreferencesContext'
+import type { VibeyTheme } from '@/lib/preferences/types'
+
+const vibeyOptions: { value: VibeyTheme; label: string }[] = [
+  { value: 'grape', label: 'Grape' },
+  { value: 'ocean', label: 'Ocean' },
+  { value: 'peach', label: 'Peach' },
+  { value: 'neon', label: 'Neon' },
+]
 
 export default function AdminHeader() {
   const { data: session } = useSession()
+  const { preferences, setVibeyTheme } = usePreferences()
+
+  const getInitials = (name?: string | null) => {
+    if (!name) return 'A'
+    return name
+      .split(' ')
+      .map(n => n[0])
+      .join('')
+      .toUpperCase()
+      .slice(0, 2)
+  }
+
+  // Calculate active pill position for sliding background
+  const activeIndex = vibeyOptions.findIndex(opt => opt.value === preferences.vibeyTheme)
 
   return (
-    <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm">
-      <div className="px-6 py-4">
+    <header className="sticky top-0 z-50 border-b border-app backdrop-blur-xl surface-app shadow-sm">
+      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
+
+      <div className="relative px-6 py-3.5">
         <div className="flex items-center justify-between">
-          {/* Left: Admin Title */}
-          <div className="flex items-center gap-4">
-            <Link href="/admin" className="flex items-center gap-2">
-              <div className="p-2 bg-primary/10 rounded-lg">
-                <span className="text-2xl font-bold text-primary">A</span>
-              </div>
-              <div>
-                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
-                <p className="text-xs text-muted-foreground">Portfolio Management</p>
+          {/* Left: Premium Brand */}
+          <Link href="/admin" className="flex items-center gap-3 group">
+            <div className="relative">
+              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-colors" />
+              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all group-hover:scale-105">
+                <Sparkles className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
               </div>
-            </Link>
-          </div>
+            </div>
+            <div className="flex flex-col">
+              <h1 className="text-base font-bold text-app tracking-tight">Admin Dashboard</h1>
+              <p className="text-[11px] text-muted font-medium">Portfolio Management</p>
+            </div>
+          </Link>
 
           {/* Right: Actions */}
-          <div className="flex items-center gap-3">
-            <ThemeSelector />
+          <div className="flex items-center gap-2.5">
+            {/* Vibey Theme Pills with Sliding Background */}
+            <div className="hidden md:flex items-center relative rounded-full border border-app surface-app p-1">
+              {/* Sliding background indicator */}
+              <div
+                className="absolute top-1 bottom-1 rounded-full bg-accent shadow-lg shadow-accent/30 transition-all duration-300 ease-out"
+                style={{
+                  width: '56px',
+                  left: `calc(4px + ${activeIndex * 56}px)`
+                }}
+              />
+
+              {vibeyOptions.map((option) => (
+                <button
+                  key={option.value}
+                  type="button"
+                  onClick={() => setVibeyTheme(option.value)}
+                  className={`relative z-10 w-14 rounded-full py-1.5 text-[11px] font-bold transition-colors duration-200 ${
+                    preferences.vibeyTheme === option.value
+                      ? 'text-white'
+                      : 'text-app hover:text-app/80'
+                  } focus-visible:outline-none focus-visible:ring-2 ring-accent ring-offset-2 ring-offset-app`}
+                  aria-pressed={preferences.vibeyTheme === option.value}
+                >
+                  {option.label}
+                </button>
+              ))}
+            </div>
 
             <Link
               href="/"
-              className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full hover:bg-muted transition text-sm font-medium text-foreground"
+              className="flex items-center gap-2 h-9 px-4 surface-app border border-app rounded-full hover:bg-app transition-all text-xs font-semibold text-app hover:shadow-sm"
             >
-              <Home size={16} />
+              <Home size={14} />
               <span className="hidden md:inline">View Site</span>
             </Link>
 
             {session?.user && (
               <>
-                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
-                  <User size={16} className="text-primary" />
-                  <span className="text-sm font-medium text-primary">
-                    {session.user.name || session.user.email}
+                {/* User Avatar Pill */}
+                <div className="flex items-center gap-2 h-9 pl-1.5 pr-4 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/15 transition-all group cursor-pointer shadow-sm">
+                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-[10px] font-extrabold text-primary-foreground shadow-md">
+                    {getInitials(session.user.name)}
+                  </div>
+                  <span className="text-xs font-bold text-primary max-w-[100px] truncate">
+                    {session.user.name || session.user.email?.split('@')[0]}
                   </span>
                 </div>
 
                 <button
                   onClick={() => signOut({ callbackUrl: '/login' })}
-                  className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full hover:bg-red-500/20 transition text-sm font-medium text-red-600 dark:text-red-400"
+                  className="flex items-center gap-2 h-9 px-4 bg-destructive/10 border border-destructive/20 rounded-full hover:bg-destructive/15 hover:border-destructive/30 transition-all text-xs font-bold text-destructive shadow-sm"
                 >
-                  <LogOut size={16} />
+                  <LogOut size={14} />
                   <span className="hidden md:inline">Logout</span>
                 </button>
               </>
diff --git a/components/Footer.tsx b/components/Footer.tsx
index e6cd333..6af8836 100644
--- a/components/Footer.tsx
+++ b/components/Footer.tsx
@@ -8,6 +8,15 @@ export default function Footer() {
   const currentYear = new Date().getFullYear()
   const pathname = usePathname()
   const showPreferences = !pathname?.startsWith('/admin')
+  const isActive = (href: string) =>
+    pathname === href || (href !== '/' && pathname?.startsWith(href))
+
+  const linkClass = (href: string) =>
+    `transition text-sm ${
+      isActive(href)
+        ? 'text-[color:rgb(var(--primary))] font-medium'
+        : 'text-muted hover:text-[color:rgb(var(--primary))]'
+    }`
 
   return (
     <footer className="surface-app border-t border-app mt-auto">
@@ -16,7 +25,7 @@ export default function Footer() {
           {/* Brand */}
           <div>
             <h3 className="text-xl font-bold accent mb-3">Kashi Kweyu</h3>
-            <p className="text-muted-app text-sm">
+            <p className="text-muted text-sm">
               Junior Developer
             </p>
           </div>
@@ -26,22 +35,22 @@ export default function Footer() {
             <h4 className="font-semibold text-app mb-3">Quick Links</h4>
             <ul className="space-y-2">
               <li>
-                <Link href="/projects" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
+                <Link href="/projects" className={linkClass('/projects')}>
                   Projects
                 </Link>
               </li>
               <li>
-                <Link href="/services" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
+                <Link href="/services" className={linkClass('/services')}>
                   Services
                 </Link>
               </li>
               <li>
-                <Link href="/about" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
+                <Link href="/about" className={linkClass('/about')}>
                   About
                 </Link>
               </li>
               <li>
-                <Link href="/request" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
+                <Link href="/request" className={linkClass('/request')}>
                   Request Service
                 </Link>
               </li>
@@ -53,12 +62,12 @@ export default function Footer() {
             <h4 className="font-semibold text-app mb-3">Legal</h4>
             <ul className="space-y-2">
               <li>
-                <Link href="/legal/privacy-policy" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
+                <Link href="/legal/privacy-policy" className={linkClass('/legal/privacy-policy')}>
                   Privacy Policy
                 </Link>
               </li>
               <li>
-                <Link href="/legal/terms" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
+                <Link href="/legal/terms" className={linkClass('/legal/terms')}>
                   Terms of Service
                 </Link>
               </li>
@@ -125,7 +134,7 @@ export default function Footer() {
         </div>
 
         <div className="mt-8 pt-8 border-t border-app text-center">
-          <p className="text-muted-app text-sm">
+          <p className="text-muted text-sm">
             © {currentYear} Kashi Kweyu. Built with Next.js & Tailwind CSS.
           </p>
         </div>
diff --git a/components/Header.tsx b/components/Header.tsx
index 6776c3a..87d12f0 100644
--- a/components/Header.tsx
+++ b/components/Header.tsx
@@ -3,7 +3,6 @@
 import Link from 'next/link'
 import { useEffect, useRef, useState } from 'react'
 import { useSession, signOut } from 'next-auth/react'
-import { ThemeSelector } from './ThemeSelector'
 import { Code2, Menu, X, ChevronDown, LogOut, Settings, User as UserIcon } from 'lucide-react'
 import { UserAvatar } from './ui/UserAvatar'
 
@@ -73,7 +72,7 @@ export default function Header() {
               <Link
                 key={link.href}
                 href={link.href}
-                className="text-app hover:text-[color:var(--primary)] transition font-medium"
+                className="text-app hover:text-[color:rgb(var(--primary))] transition font-medium"
               >
                 {link.label}
               </Link>
@@ -81,12 +80,11 @@ export default function Header() {
           </div>
 
           <div className="flex items-center gap-3">
-            <ThemeSelector />
 
             {!isAuthed ? (
               <Link
                 href="/login"
-                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-accent-soft text-[color:var(--primary)] hover:opacity-90 transition font-medium"
+                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-accent-soft text-[color:rgb(var(--primary))] hover:opacity-90 transition font-medium"
               >
                 <UserIcon size={16} className="accent" />
                 <span className="text-sm">Login</span>
@@ -170,7 +168,7 @@ export default function Header() {
                   key={link.href}
                   href={link.href}
                   onClick={() => setMobileMenuOpen(false)}
-                  className="px-4 py-2 text-app hover:text-[color:var(--primary)] hover:bg-app rounded-lg transition font-medium"
+                  className="px-4 py-2 text-app hover:text-[color:rgb(var(--primary))] hover:bg-app rounded-lg transition font-medium"
                 >
                   {link.label}
                 </Link>
diff --git a/components/ProjectCard.tsx b/components/ProjectCard.tsx
index 8f2218a..a78da52 100644
--- a/components/ProjectCard.tsx
+++ b/components/ProjectCard.tsx
@@ -25,7 +25,7 @@ export function ProjectCard({ project, variant = 'public', onEdit }: ProjectCard
   const isPublic = variant === 'public'
 
   return (
-    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
+    <div className="group vibey-card bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-accent-2 transition-all">
       {/* Image */}
       <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
         {project.image ? (
diff --git a/components/ThemeSelector.tsx b/components/ThemeSelector.tsx
deleted file mode 100644
index 65514f4..0000000
--- a/components/ThemeSelector.tsx
+++ /dev/null
@@ -1,85 +0,0 @@
-'use client'
-
-import { useState, useRef, useEffect } from 'react'
-import { useTheme } from '@/lib/ThemeContext'
-import { themes, ThemeName } from '@/lib/themes'
-import { ChevronDown } from 'lucide-react'
-
-export function ThemeSelector() {
-  const { theme, setTheme } = useTheme()
-  const [isOpen, setIsOpen] = useState(false)
-  const dropdownRef = useRef<HTMLDivElement>(null)
-
-  const currentTheme = themes[theme]
-  const Icon = currentTheme.icon
-
-  useEffect(() => {
-    function handleClickOutside(event: MouseEvent) {
-      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
-        setIsOpen(false)
-      }
-    }
-    document.addEventListener('mousedown', handleClickOutside)
-    return () => document.removeEventListener('mousedown', handleClickOutside)
-  }, [])
-
-  return (
-    <div ref={dropdownRef} className="relative">
-      {/* Desktop Button: Full theme name + icon */}
-      <button
-        onClick={() => setIsOpen(!isOpen)}
-        className="hidden md:flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:bg-card-hover transition shadow-sm min-w-[180px] justify-between"
-      >
-        <div className="flex items-center gap-2">
-          <Icon size={18} className="text-foreground" />
-          <span className="text-sm font-medium text-foreground truncate max-w-[120px]">
-            {currentTheme.name}
-          </span>
-        </div>
-        <ChevronDown size={16} className="text-foreground-muted flex-shrink-0" />
-      </button>
-
-      {/* Mobile Button: Icon only */}
-      <button
-        onClick={() => setIsOpen(!isOpen)}
-        className="md:hidden flex items-center justify-center p-2 bg-card border border-border rounded-full hover:bg-card-hover transition shadow-sm"
-        aria-label="Select theme"
-      >
-        <Icon size={20} className="text-foreground" />
-      </button>
-
-      {/* Dropdown Menu */}
-      {isOpen && (
-        <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
-          {Object.entries(themes).map(([key, t]) => {
-            const ThemeIcon = t.icon
-            const isActive = theme === key
-            
-            return (
-              <button
-                key={key}
-                onClick={() => {
-                  setTheme(key as ThemeName)
-                  setIsOpen(false)
-                }}
-                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition ${
-                  isActive
-                    ? 'bg-primary/10 text-primary font-medium'
-                    : 'text-foreground hover:bg-muted'
-                }`}
-              >
-                <ThemeIcon size={20} />
-                <span className="text-sm">{t.name}</span>
-                {isActive && (
-                  <svg className="ml-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
-                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
-                  </svg>
-                )}
-              </button>
-            )
-          })}
-        </div>
-      )}
-    </div>
-  )
-}
\ No newline at end of file
diff --git a/components/home/HeroFormal.tsx b/components/home/HeroFormal.tsx
index 56e29d0..72220a1 100644
--- a/components/home/HeroFormal.tsx
+++ b/components/home/HeroFormal.tsx
@@ -28,19 +28,19 @@ export function HeroFormal({
           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-app">
             Available for new projects
           </p>
-          <h1 className="text-4xl md:text-6xl font-bold text-app leading-tight">
+          <h1 className="hero-title text-4xl md:text-6xl font-bold text-app leading-tight">
             {title} <span className="accent">{highlight}</span>
           </h1>
           <p className="text-lg md:text-xl text-muted-app max-w-xl">
             {subtitle}
           </p>
           <div className="flex flex-wrap gap-4">
-            <Link href={primaryCtaHref}>
+            <Link href={primaryCtaHref} className="no-underline">
               <Button variant="primary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                 {primaryCtaLabel}
               </Button>
             </Link>
-            <Link href={secondaryCtaHref}>
+            <Link href={secondaryCtaHref} className="no-underline">
               <Button variant="outline" size="lg">
                 {secondaryCtaLabel}
               </Button>
diff --git a/components/home/HeroVibey.tsx b/components/home/HeroVibey.tsx
index 96c0348..6220eb9 100644
--- a/components/home/HeroVibey.tsx
+++ b/components/home/HeroVibey.tsx
@@ -33,7 +33,7 @@ export function HeroVibey({
             <span className="rounded-full border border-app bg-app px-3 py-1">Bold builds</span>
           </div>
 
-          <h1 className="text-4xl md:text-6xl font-bold text-app leading-tight">
+          <h1 className="hero-title text-4xl md:text-6xl font-bold text-app leading-tight">
             {title} <span className="accent">{highlight}</span>
           </h1>
           <p className="text-lg md:text-2xl text-muted-app max-w-2xl">
@@ -41,12 +41,12 @@ export function HeroVibey({
           </p>
 
           <div className="flex flex-wrap gap-4">
-            <Link href={primaryCtaHref}>
+            <Link href={primaryCtaHref} className="no-underline">
               <Button variant="primary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                 {primaryCtaLabel}
               </Button>
             </Link>
-            <Link href={secondaryCtaHref}>
+            <Link href={secondaryCtaHref} className="no-underline">
               <Button variant="outline" size="lg">
                 {secondaryCtaLabel}
               </Button>
diff --git a/components/preferences/PreferencesPanel.tsx b/components/preferences/PreferencesPanel.tsx
index 3b9ce0d..dfa48db 100644
--- a/components/preferences/PreferencesPanel.tsx
+++ b/components/preferences/PreferencesPanel.tsx
@@ -1,12 +1,13 @@
 'use client'
 
 import { useEffect, useRef, useState } from 'react'
+import { Monitor, Moon, Sun } from 'lucide-react'
 import { usePreferences } from '@/lib/preferences/PreferencesContext'
 
 const themeOptions = [
-  { value: 'system', label: 'System' },
-  { value: 'light', label: 'Light' },
-  { value: 'dark', label: 'Dark' },
+  { value: 'light', label: 'Light', icon: Sun },
+  { value: 'dark', label: 'Dark', icon: Moon },
+  { value: 'system', label: 'System', icon: Monitor },
 ] as const
 
 const modeOptions = [
@@ -61,7 +62,11 @@ export function PreferencesPanel() {
         ref={buttonRef}
         type="button"
         onClick={() => setIsOpen((open) => !open)}
-        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-card-hover transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
+        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-app ring-offset-app ${
+          isOpen
+            ? 'border-accent bg-accent-soft text-[color:rgb(var(--primary))]'
+            : 'border-app surface-app text-app hover:bg-app'
+        }`}
         aria-expanded={isOpen}
         aria-controls="preferences-panel"
       >
@@ -75,46 +80,48 @@ export function PreferencesPanel() {
           role="dialog"
           aria-label="Site preferences"
           tabIndex={-1}
-          className="absolute right-0 mt-3 w-72 rounded-2xl border border-border bg-card p-4 shadow-xl focus:outline-none"
+          className="absolute right-0 mt-3 w-72 rounded-2xl border border-app surface-app p-4 shadow-xl focus:outline-none"
         >
           <div className="space-y-4">
             <div>
-              <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-2">
+              <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                 Theme
               </p>
-              <div className="flex rounded-full border border-border bg-muted p-1">
+              <div className="flex items-center gap-2">
                 {themeOptions.map((option) => (
                   <button
                     key={option.value}
                     type="button"
                     onClick={() => setTheme(option.value)}
-                    className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
+                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-app ring-offset-app ${
                       preferences.theme === option.value
-                        ? 'bg-primary text-primary-foreground shadow-sm'
-                        : 'text-foreground hover:bg-card'
+                        ? 'bg-accent text-white shadow-sm border-accent'
+                        : 'text-app border-app hover:bg-app'
                     }`}
                     aria-pressed={preferences.theme === option.value}
+                    aria-label={`${option.label} theme`}
                   >
-                    {option.label}
+                    <option.icon size={16} aria-hidden="true" />
+                    <span className="sr-only">{option.label}</span>
                   </button>
                 ))}
               </div>
             </div>
 
             <div>
-              <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-2">
+              <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                 Mode
               </p>
-              <div className="flex rounded-full border border-border bg-muted p-1">
+              <div className="flex rounded-full border border-app bg-app p-1">
                 {modeOptions.map((option) => (
                   <button
                     key={option.value}
                     type="button"
                     onClick={() => setMode(option.value)}
-                    className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
+                    className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-app ring-offset-app ${
                       preferences.mode === option.value
-                        ? 'bg-primary text-primary-foreground shadow-sm'
-                        : 'text-foreground hover:bg-card'
+                        ? 'bg-accent text-white shadow-sm'
+                        : 'text-app hover:bg-app'
                     }`}
                     aria-pressed={preferences.mode === option.value}
                   >
@@ -126,7 +133,7 @@ export function PreferencesPanel() {
 
             {preferences.mode === 'vibey' && (
               <div>
-                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-2">
+                <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                   Vibey theme
                 </p>
                 <div className="grid grid-cols-2 gap-2">
@@ -135,10 +142,10 @@ export function PreferencesPanel() {
                       key={option.value}
                       type="button"
                       onClick={() => setVibeyTheme(option.value)}
-                      className={`rounded-xl border px-3 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
+                      className={`rounded-xl border px-3 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-app ring-offset-app ${
                         preferences.vibeyTheme === option.value
-                          ? 'border-primary bg-primary/10 text-primary'
-                          : 'border-border text-foreground hover:border-primary/50 hover:bg-muted'
+                          ? 'border-accent bg-accent-soft text-[color:rgb(var(--primary))]'
+                          : 'border-app text-app hover:border-accent-2 hover:bg-app'
                       }`}
                       aria-pressed={preferences.vibeyTheme === option.value}
                     >
diff --git a/components/ui/Button.tsx b/components/ui/Button.tsx
index 0c7ac84..5675312 100644
--- a/components/ui/Button.tsx
+++ b/components/ui/Button.tsx
@@ -20,13 +20,13 @@ export function Button({
   disabled,
   ...props
 }: ButtonProps) {
-  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
+  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-app ring-offset-app disabled:opacity-50 disabled:cursor-not-allowed'
   
   const variants = {
-    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary shadow-sm hover:shadow-md',
-    secondary: 'bg-card text-foreground border-2 border-border hover:bg-muted focus:ring-primary shadow-sm',
-    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary',
-    ghost: 'bg-transparent text-muted-foreground hover:bg-muted focus:ring-primary'
+    primary: 'bg-accent text-white hover:opacity-90 shadow-sm hover:shadow-md',
+    secondary: 'surface-app text-app border-2 border-app hover:bg-app shadow-sm',
+    outline: 'bg-transparent text-[color:rgb(var(--primary))] border-2 border-accent hover:bg-accent hover:text-white',
+    ghost: 'bg-transparent text-muted hover:bg-app'
   }
   
   const sizes = {
@@ -49,4 +49,4 @@ export function Button({
       {!loading && icon && iconPosition === 'right' && icon}
     </button>
   )
-}
\ No newline at end of file
+}
diff --git a/components/ui/Input.tsx b/components/ui/Input.tsx
index 5d40f4f..306ab61 100644
--- a/components/ui/Input.tsx
+++ b/components/ui/Input.tsx
@@ -8,25 +8,25 @@ interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
 export const Input = forwardRef<HTMLInputElement, InputProps>(
   ({ label, error, className = '', ...props }, ref) => {
     return (
-      <div className="space-y-1">
+      <div className="space-y-2">
         {label && (
-          <label className="block text-sm font-medium text-foreground">
+          <label className="block text-sm font-medium text-muted">
             {label}
           </label>
         )}
         <input
           ref={ref}
-          className={`w-full px-4 py-2 bg-muted border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition ${
-            error ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'
+          className={`w-full h-10 px-4 surface-app border border-app rounded-lg text-sm text-app focus:outline-none focus:ring-2 focus:ring-[color:rgb(var(--ring)/0.35)] transition placeholder:text-[color:rgb(var(--muted)/0.75)] ${
+            error ? 'border-destructive focus:border-destructive' : 'focus:border-[color:rgb(var(--ring)/0.6)]'
           } ${className}`}
           {...props}
         />
         {error && (
-          <span className="text-destructive text-sm">{error}</span>
+          <span className="text-destructive text-xs font-medium">{error}</span>
         )}
       </div>
     )
   }
 )
 
-Input.displayName = 'Input'
\ No newline at end of file
+Input.displayName = 'Input'
diff --git a/docs/preferences.md b/docs/preferences.md
index 237650c..0fae517 100644
--- a/docs/preferences.md
+++ b/docs/preferences.md
@@ -20,7 +20,6 @@ The client gate applies resolved attributes on `<html>`:
 
 If mode is `formal`, the gate removes `data-vibey`.
 
-Legacy theme selection still sets `data-legacy-theme` to avoid conflicts.
 
 ## Token variables
 
diff --git a/lib/ThemeContext.tsx b/lib/ThemeContext.tsx
deleted file mode 100644
index f90a3dd..0000000
--- a/lib/ThemeContext.tsx
+++ /dev/null
@@ -1,72 +0,0 @@
-'use client'
-
-import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
-import { ThemeName } from './themes'
-import { track } from '@vercel/analytics'
-
-interface ThemeContextType {
-  theme: ThemeName
-  setTheme: (theme: ThemeName) => void
-}
-
-const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
-
-export function ThemeProvider({ children }: { children: ReactNode }) {
-  const [theme, setThemeState] = useState<ThemeName>('dracula')
-  const [mounted, setMounted] = useState(false)
-
-  // Load theme from localStorage on mount
-  useEffect(() => {
-    setMounted(true)
-    const savedTheme = localStorage.getItem('kashikweyu-theme') as ThemeName
-    if (savedTheme && ['dracula', 'ayulight', 'quietlight', 'material'].includes(savedTheme)) {
-      setThemeState(savedTheme)
-    }
-  }, [])
-
-  // Apply theme to document
-  useEffect(() => {
-    if (!mounted) return
-
-    const root = document.documentElement
-    
-    // Set legacy theme attribute to avoid clobbering preferences theme.
-    root.setAttribute('data-legacy-theme', theme)
-    
-    // Save to localStorage
-    localStorage.setItem('kashikweyu-theme', theme)
-    
-    // Debug logs
-    console.log('🎨 Theme set to:', theme)
-    console.log('📍 data-legacy-theme attr:', root.getAttribute('data-legacy-theme'))
-  }, [theme, mounted])
-
-  const setTheme = (newTheme: ThemeName) => {
-    console.log('🔄 Changing theme to:', newTheme)
-    setThemeState(newTheme)
-
-    // Track theme change with analytics
-    if (mounted) {
-      track('theme_change', {
-        themeName: newTheme,
-        previousTheme: theme,
-        timestamp: new Date().toISOString()
-      })
-      console.log('📊 Analytics: Theme change tracked')
-    }
-  }
-
-  return (
-    <ThemeContext.Provider value={{ theme, setTheme }}>
-      {children}
-    </ThemeContext.Provider>
-  )
-}
-
-export function useTheme() {
-  const context = useContext(ThemeContext)
-  if (!context) {
-    throw new Error('useTheme must be used within ThemeProvider')
-  }
-  return context
-}
diff --git a/lib/email.ts b/lib/email.ts
index 11f4bcb..b75a3a1 100644
--- a/lib/email.ts
+++ b/lib/email.ts
@@ -5,42 +5,123 @@ interface EmailConfig {
   port: number
   user: string
   pass: string
+  secure?: boolean
+  from?: string
+  fromName?: string
 }
 
 interface EmailOptions {
   to: string
   subject: string
   html: string
+  replyTo?: string
+}
+
+export function getEmailConfigFromEnv(): EmailConfig {
+  const missing: string[] = []
+
+  if (!process.env.EMAIL_HOST) missing.push('EMAIL_HOST')
+  if (!process.env.EMAIL_PORT) missing.push('EMAIL_PORT')
+  if (!process.env.EMAIL_USER) missing.push('EMAIL_USER')
+  if (!process.env.EMAIL_PASS) missing.push('EMAIL_PASS')
+
+  if (missing.length > 0) {
+    throw new Error(`Missing email configuration: ${missing.join(', ')}`)
+  }
+
+  const port = Number(process.env.EMAIL_PORT)
+  if (!Number.isFinite(port) || port <= 0) {
+    throw new Error('EMAIL_PORT must be a valid number')
+  }
+
+  return {
+    host: process.env.EMAIL_HOST!,
+    port,
+    user: process.env.EMAIL_USER!,
+    pass: process.env.EMAIL_PASS!,
+    from: process.env.EMAIL_FROM,
+    fromName: process.env.EMAIL_FROM_NAME,
+  }
 }
 
 export async function sendEmail(config: EmailConfig, options: EmailOptions) {
   try {
+    if (process.env.NEXT_RUNTIME === 'edge') {
+      throw new Error('SMTP transport is not supported in the Edge runtime. Use a Node.js runtime or provider API.')
+    }
+
+    const missing: string[] = []
+    if (!config.host) missing.push('host')
+    if (!config.port) missing.push('port')
+    if (!config.user) missing.push('user')
+    if (!config.pass) missing.push('pass')
+    if (missing.length > 0) {
+      throw new Error(`Missing email configuration: ${missing.join(', ')}`)
+    }
+
     const transporter = nodemailer.createTransport({
       host: config.host,
       port: config.port,
-      secure: config.port === 465,
+      secure: config.secure ?? config.port === 465,
       auth: {
         user: config.user,
         pass: config.pass
       }
     })
 
+    const fromAddress = config.from || config.user
+    const fromName = config.fromName || 'Kashi Kweyu'
+
     const info = await transporter.sendMail({
-      from: `"Kashi Kweyu" <${config.user}>`,
+      from: `"${fromName}" <${fromAddress}>`,
       to: options.to,
       subject: options.subject,
-      html: options.html
+      html: options.html,
+      replyTo: options.replyTo
     })
 
+    if (process.env.NODE_ENV !== 'production') {
+      console.log('Email sent:', {
+        messageId: info.messageId,
+        response: info.response,
+        accepted: info.accepted,
+        rejected: info.rejected,
+      })
+    }
+
     return {
       success: true,
-      messageId: info.messageId
+      messageId: info.messageId,
+      response: info.response
     }
   } catch (error: any) {
+    const rawMessage = error?.message || 'Failed to send email'
+    let friendlyMessage = rawMessage
+
+    if (
+      error?.code === 'EAUTH' ||
+      error?.responseCode === 535 ||
+      /auth|authentication|invalid login|bad credentials/i.test(rawMessage)
+    ) {
+      friendlyMessage = 'Authentication failed'
+    } else if (
+      error?.code === 'ENOTFOUND' ||
+      /getaddrinfo|host not found/i.test(rawMessage)
+    ) {
+      friendlyMessage = 'SMTP host not found'
+    } else if (
+      error?.code === 'ECONNECTION' ||
+      error?.code === 'ETIMEDOUT' ||
+      /connect|timed out/i.test(rawMessage)
+    ) {
+      friendlyMessage = 'Unable to connect to SMTP server'
+    }
+
     console.error('Email error:', error)
     return {
       success: false,
-      error: error.message || 'Failed to send email'
+      error: friendlyMessage,
+      details: error
     }
   }
 }
diff --git a/lib/themes.ts b/lib/themes.ts
deleted file mode 100644
index 293982f..0000000
--- a/lib/themes.ts
+++ /dev/null
@@ -1,38 +0,0 @@
-import { Sparkles, Sun, BookOpen, Gem, LucideIcon } from 'lucide-react'
-
-export type ThemeName =
-  | 'dracula'
-  | 'ayulight'
-  | 'quietlight'
-  | 'material'
-
-export interface Theme {
-  name: string
-  value: ThemeName
-  icon: LucideIcon
-}
-
-export const themes: Record<ThemeName, Theme> = {
-  dracula: {
-    name: 'Midnight Purple',
-    value: 'dracula',
-    icon: Sparkles,
-  },
-  ayulight: {
-    name: 'Desert Dawn',
-    value: 'ayulight',
-    icon: Sun,
-  },
-  quietlight: {
-    name: 'Clean Slate',
-    value: 'quietlight',
-    icon: BookOpen,
-  },
-  material: {
-    name: 'Ocean Deep',
-    value: 'material',
-    icon: Gem,
-  },
-}
-
-export const defaultTheme: ThemeName = 'dracula'
\ No newline at end of file
diff --git a/prisma/schema.prisma b/prisma/schema.prisma
index a47f34f..8e9972f 100644
--- a/prisma/schema.prisma
+++ b/prisma/schema.prisma
@@ -61,6 +61,8 @@ model User {
   creditTransactions      CreditTransaction[]
   auditLogs               AuditLog[]
   adConsent               UserAdConsent?
+  cart                    Cart?
+  orders                  Order[]
 
   @@index([email])
   @@index([accountStatus])
@@ -304,8 +306,11 @@ model DigitalProduct {
   tags        String[]
 
   // Pricing
-  price    Decimal @db.Decimal(10, 2)
-  currency String  @default("USD")
+  price       Decimal  @db.Decimal(10, 2)
+  currency    String   @default("USD")
+  usdPrice    Decimal? @db.Decimal(10, 2) // USD price (base currency)
+  ugxPrice    Decimal? @db.Decimal(10, 2) // UGX price
+  creditPrice Int? // Credits required for this product
 
   // Files
   fileUrl       String // Secure download URL
@@ -338,9 +343,11 @@ model DigitalProduct {
   updatedAt DateTime @updatedAt
 
   // Relations
-  purchases DigitalProductPurchase[]
-  licenses  License[]
-  downloads Download[]
+  purchases  DigitalProductPurchase[]
+  licenses   License[]
+  downloads  Download[]
+  cartItems  CartItem[]
+  orderItems OrderItem[]
 
   @@index([slug])
   @@index([category])
@@ -415,6 +422,7 @@ model License {
   // Relations
   downloads       Download[]
   seatAssignments LicenseSeatAssignment[]
+  orderItem       OrderItem?
 
   @@index([userId])
   @@index([productId])
@@ -505,6 +513,109 @@ model DownloadResetRequest {
   @@map("download_reset_requests")
 }
 
+// ============================================
+// CART & ORDER MODELS
+// ============================================
+
+model Cart {
+  id        String     @id @default(cuid())
+  userId    String     @unique
+  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)
+  items     CartItem[]
+  createdAt DateTime   @default(now())
+  updatedAt DateTime   @updatedAt
+
+  @@map("carts")
+}
+
+model CartItem {
+  id          String         @id @default(cuid())
+  cartId      String
+  cart        Cart           @relation(fields: [cartId], references: [id], onDelete: Cascade)
+  productId   String
+  product     DigitalProduct @relation(fields: [productId], references: [id], onDelete: Cascade)
+  licenseType LicenseType
+  quantity    Int            @default(1)
+  createdAt   DateTime       @default(now())
+
+  @@unique([cartId, productId, licenseType])
+  @@index([cartId])
+  @@index([productId])
+  @@map("cart_items")
+}
+
+model Order {
+  id          String @id @default(cuid())
+  orderNumber String @unique // Format: ORD-YYYYMMDD-XXXXX
+  userId      String
+  user        User   @relation(fields: [userId], references: [id])
+
+  // Financials
+  subtotal Decimal @db.Decimal(10, 2)
+  tax      Decimal @default(0) @db.Decimal(10, 2)
+  total    Decimal @db.Decimal(10, 2)
+  currency String  @default("USD")
+
+  // Payment
+  paymentStatus   PaymentStatus @default(PENDING)
+  paymentMethod   String?
+  paymentProvider String?
+  transactionId   String?
+
+  // Purchase type
+  purchaseType OrderPurchaseType
+  creditsUsed  Int?
+  membershipId String?
+  membership   Membership?       @relation(fields: [membershipId], references: [id])
+
+  // Status
+  status      OrderStatus @default(PENDING)
+  fulfilledAt DateTime?
+
+  // Legal
+  termsAccepted Boolean @default(false)
+  termsVersion  String?
+
+  // Contact snapshot
+  customerEmail String
+  customerName  String?
+
+  items     OrderItem[]
+  createdAt DateTime    @default(now())
+  updatedAt DateTime    @updatedAt
+
+  @@index([userId])
+  @@index([orderNumber])
+  @@index([paymentStatus])
+  @@index([status])
+  @@map("orders")
+}
+
+model OrderItem {
+  id        String         @id @default(cuid())
+  orderId   String
+  order     Order          @relation(fields: [orderId], references: [id], onDelete: Cascade)
+  productId String
+  product   DigitalProduct @relation(fields: [productId], references: [id])
+
+  // Product snapshot
+  productName String
+  productSlug String
+  licenseType LicenseType
+  price       Decimal     @db.Decimal(10, 2)
+  currency    String
+
+  // Issued license
+  licenseId String?  @unique
+  license   License? @relation(fields: [licenseId], references: [id])
+
+  createdAt DateTime @default(now())
+
+  @@index([orderId])
+  @@index([productId])
+  @@map("order_items")
+}
+
 // ============================================
 // SERVICES MODELS
 // ============================================
@@ -632,6 +743,7 @@ model Membership {
   // Relations
   users        User[]
   transactions CreditTransaction[]
+  orders       Order[]
 
   @@index([status])
   @@map("memberships")
@@ -745,6 +857,26 @@ model ContentPage {
   @@map("content_pages")
 }
 
+model PageContent {
+  id String @id @default(cuid())
+
+  // Page identification
+  slug String @unique // 'services', 'request-form', etc.
+
+  // Content stored as JSON
+  data Json
+
+  // Metadata
+  version String @default("1.0")
+
+  // Timestamps
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+
+  @@index([slug])
+  @@map("page_contents")
+}
+
 // ============================================
 // SYSTEM CONFIGURATION MODELS
 // ============================================
@@ -758,6 +890,11 @@ model SiteSettings {
   adsProvider          String  @default("")
   adsClientId          String?
   adsPlacements        Json?
+  smtpHost             String?
+  smtpPort             Int?
+  smtpUsername         String?
+  smtpPassword         String?
+  smtpSecure           Boolean @default(false)
 
   updatedAt DateTime @updatedAt
 
@@ -952,6 +1089,20 @@ enum PaymentStatus {
   REFUNDED
 }
 
+enum OrderPurchaseType {
+  ONE_TIME
+  CREDITS
+}
+
+enum OrderStatus {
+  PENDING
+  PROCESSING
+  COMPLETED
+  FAILED
+  CANCELLED
+  REFUNDED
+}
+
 enum ResetRequestStatus {
   PENDING
   APPROVED
diff --git a/tailwind.config.ts b/tailwind.config.ts
index 5829484..28325b8 100644
--- a/tailwind.config.ts
+++ b/tailwind.config.ts
@@ -15,37 +15,37 @@ const config: Config = {
         pixel: ['var(--font-ibm-plex)', 'IBM Plex Mono', 'monospace'],
       },
       colors: {
-        background: 'rgb(var(--color-background) / <alpha-value>)',
-        'background-secondary': 'rgb(var(--color-background-secondary) / <alpha-value>)',
-        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
-        'foreground-muted': 'rgb(var(--color-foreground-muted) / <alpha-value>)',
-        'muted-foreground': 'rgb(var(--color-foreground-muted) / <alpha-value>)',
+        background: 'rgb(var(--bg) / <alpha-value>)',
+        'background-secondary': 'rgb(var(--surface) / <alpha-value>)',
+        foreground: 'rgb(var(--text) / <alpha-value>)',
+        'foreground-muted': 'rgb(var(--muted) / <alpha-value>)',
+        'muted-foreground': 'rgb(var(--muted) / <alpha-value>)',
         primary: {
-          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
-          foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
+          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
+          foreground: 'rgb(255 255 255 / <alpha-value>)',
         },
         secondary: {
-          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
-          foreground: 'rgb(var(--color-secondary-foreground) / <alpha-value>)',
+          DEFAULT: 'rgb(var(--primary2) / <alpha-value>)',
+          foreground: 'rgb(255 255 255 / <alpha-value>)',
         },
         accent: {
-          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
-          foreground: 'rgb(var(--color-accent-foreground) / <alpha-value>)',
-          secondary: 'rgb(var(--color-accent-secondary) / <alpha-value>)',
+          DEFAULT: 'rgb(var(--primary2) / <alpha-value>)',
+          foreground: 'rgb(255 255 255 / <alpha-value>)',
+          secondary: 'rgb(var(--primary) / <alpha-value>)',
         },
         border: {
-          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
-          light: 'rgb(var(--color-border-light) / <alpha-value>)',
+          DEFAULT: 'rgb(var(--border) / <alpha-value>)',
+          light: 'rgb(var(--border) / <alpha-value>)',
         },
         card: {
-          DEFAULT: 'rgb(var(--color-card) / <alpha-value>)',
-          hover: 'rgb(var(--color-card-hover) / <alpha-value>)',
+          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
+          hover: 'rgb(var(--surface) / <alpha-value>)',
         },
-        muted: 'rgb(var(--color-muted) / <alpha-value>)',
-        destructive: 'rgb(var(--color-destructive) / <alpha-value>)',
-        success: 'rgb(var(--color-success) / <alpha-value>)',
-        warning: 'rgb(var(--color-warning) / <alpha-value>)',
-        info: 'rgb(var(--color-info) / <alpha-value>)',
+        muted: 'rgb(var(--surface) / <alpha-value>)',
+        destructive: 'rgb(239 68 68 / <alpha-value>)',
+        success: 'rgb(34 197 94 / <alpha-value>)',
+        warning: 'rgb(234 179 8 / <alpha-value>)',
+        info: 'rgb(59 130 246 / <alpha-value>)',
       },
     },
   },
