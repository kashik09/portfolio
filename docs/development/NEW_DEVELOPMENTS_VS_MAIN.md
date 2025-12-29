# New developments vs origin/main

Generated: 2025-12-24 11:53:55 UTC

## Commits ahead
693a9e0 feat: add profile picture to about page
7dc1de7 docs: document preferences and theming model
e7512d2 refactor: adopt css tokens in shared components
b2c6b76 feat: add mode-specific hero layouts
62f2685 feat: add footer preferences panel
20f7623 feat: add preference theme tokens
8826204 feat: add preferences context and storage
aa8a0ce chore: cleanup and minor content updates
8a3b609 refactor: simplify image cropper to square-only for avatars
038f7a6 refactor: convert image crop to modal interface
654e93b feat: add project problem field and image upload with cropping
0ba0437 style: make digital product form full width
769d925 feat: implement complete analytics system with database storage
23fb36e feat: add subtle bounce animation to membership CTA arrow
972475b chore: remove historical migration scripts
37141da feat: remove freelance availability badge from homepage
ed407d6 chore: remove orphaned pages cms prisma models
b0d8ebe chore: remove unused markdown dependencies
003df08 chore: remove orphaned pages cms renderer and registry
e0e0ab2 chore: disable orphaned pages cms api routes
5725362 docs: add membership implementation gap analysis
ce55dab feat: enhance OAuth profile data fetching
2274322 feat: improve homepage layout and CTA visibility
dfebd39 feat: add pricing navigation and membership CTA
e000aad feat: add membership purchase system with three tiers
cdbd946 chore: remove global css test outline
442f0d5 fix: set default data-theme on html
8f9ab23 fix: include lib in tailwind content
fb55793 test: add global css visual outline

## File summary
 .gitignore                                         |    4 +-
 app/(main)/memberships/page.tsx                    |  190 +++
 app/(main)/page.tsx                                |   57 +-
 app/(user)/dashboard/page.tsx                      |   15 +-
 app/Providers.tsx                                  |   20 +
 app/admin/analytics/page.tsx                       |  153 +-
 app/admin/content/about/page.tsx                   |   10 +-
 app/admin/digital-products/new/page.tsx            |    2 +-
 app/admin/projects/new/page.tsx                    |   16 +
 app/api/admin/analytics/route.ts                   |  147 ++
 app/api/analytics/track/route.ts                   |   44 +
 app/api/memberships/purchase/route.ts              |  145 ++
 app/api/pages/[slug]/route.ts                      |  114 +-
 app/api/pages/[slug]/sections/route.ts             |  100 +-
 app/api/pages/route.ts                             |   99 +-
 app/api/upload/avatar/route.ts                     |   57 +
 app/globals.css                                    |  162 +-
 app/layout.tsx                                     |   19 +-
 components/FeaturedProjects.tsx                    |    2 +-
 components/Footer.tsx                              |   59 +-
 components/Header.tsx                              |   38 +-
 components/ImageUploadCrop.tsx                     |  288 ++++
 components/PageRenderer.tsx                        |  134 --
 components/admin/section-forms/CTAForm.tsx         |   58 -
 components/admin/section-forms/CardsForm.tsx       |  117 --
 .../admin/section-forms/ContactBlockForm.tsx       |   59 -
 components/admin/section-forms/FAQForm.tsx         |   95 --
 components/admin/section-forms/HeroForm.tsx        |   36 -
 components/admin/section-forms/ProjectGridForm.tsx |   50 -
 components/admin/section-forms/RichTextForm.tsx    |   25 -
 components/admin/section-forms/index.ts            |    7 -
 components/home/HeroFormal.tsx                     |   68 +
 components/home/HeroSwitch.tsx                     |   25 +
 components/home/HeroVibey.tsx                      |   66 +
 components/home/MemberHomeTop.tsx                  |  170 +++
 components/preferences/PreferencesGate.tsx         |   50 +
 components/preferences/PreferencesPanel.tsx        |  156 ++
 components/sections/CTA.tsx                        |   66 -
 components/sections/Cards.tsx                      |   61 -
 components/sections/ContactBlock.tsx               |  110 --
 components/sections/FAQ.tsx                        |   70 -
 components/sections/Hero.tsx                       |   38 -
 components/sections/ProjectGrid.tsx                |   84 -
 components/sections/RichText.tsx                   |   30 -
 components/ui/Card.tsx                             |    6 +-
 docs/membership-implementation-gaps.md             |  285 ++++
 docs/preferences.md                                |   47 +
 lib/ThemeContext.tsx                               |    8 +-
 lib/auth-options.ts                                |   18 +
 lib/membership-plans.ts                            |   81 +
 lib/preferences/PreferencesContext.tsx             |   52 +
 lib/preferences/storage.ts                         |   42 +
 lib/preferences/types.ts                           |   15 +
 lib/sections/registry.ts                           |  134 --
 lib/sections/types.ts                              |  103 --
 lib/useAnalytics.ts                                |  115 +-
 package-lock.json                                  | 1600 +-------------------
 package.json                                       |    3 +-
 prisma/schema.prisma                               |  125 +-
 public/content/about.json                          |   42 +-
 scripts/add-moringa-projects.ts                    |  173 ---
 scripts/add-photography-project.ts                 |   52 -
 scripts/migrate-pages.ts                           |  323 ----
 tailwind.config.ts                                 |    3 +-
 64 files changed, 2661 insertions(+), 3882 deletions(-)

## Name status
M	.gitignore
A	app/(main)/memberships/page.tsx
M	app/(main)/page.tsx
M	app/(user)/dashboard/page.tsx
A	app/Providers.tsx
M	app/admin/analytics/page.tsx
M	app/admin/content/about/page.tsx
M	app/admin/digital-products/new/page.tsx
M	app/admin/projects/new/page.tsx
A	app/api/admin/analytics/route.ts
A	app/api/analytics/track/route.ts
A	app/api/memberships/purchase/route.ts
M	app/api/pages/[slug]/route.ts
M	app/api/pages/[slug]/sections/route.ts
M	app/api/pages/route.ts
A	app/api/upload/avatar/route.ts
M	app/globals.css
M	app/layout.tsx
M	components/FeaturedProjects.tsx
M	components/Footer.tsx
M	components/Header.tsx
A	components/ImageUploadCrop.tsx
D	components/PageRenderer.tsx
D	components/admin/section-forms/CTAForm.tsx
D	components/admin/section-forms/CardsForm.tsx
D	components/admin/section-forms/ContactBlockForm.tsx
D	components/admin/section-forms/FAQForm.tsx
D	components/admin/section-forms/HeroForm.tsx
D	components/admin/section-forms/ProjectGridForm.tsx
D	components/admin/section-forms/RichTextForm.tsx
D	components/admin/section-forms/index.ts
A	components/home/HeroFormal.tsx
A	components/home/HeroSwitch.tsx
A	components/home/HeroVibey.tsx
A	components/home/MemberHomeTop.tsx
A	components/preferences/PreferencesGate.tsx
A	components/preferences/PreferencesPanel.tsx
D	components/sections/CTA.tsx
D	components/sections/Cards.tsx
D	components/sections/ContactBlock.tsx
D	components/sections/FAQ.tsx
D	components/sections/Hero.tsx
D	components/sections/ProjectGrid.tsx
D	components/sections/RichText.tsx
M	components/ui/Card.tsx
A	docs/membership-implementation-gaps.md
A	docs/preferences.md
M	lib/ThemeContext.tsx
M	lib/auth-options.ts
A	lib/membership-plans.ts
A	lib/preferences/PreferencesContext.tsx
A	lib/preferences/storage.ts
A	lib/preferences/types.ts
D	lib/sections/registry.ts
D	lib/sections/types.ts
M	lib/useAnalytics.ts
M	package-lock.json
M	package.json
M	prisma/schema.prisma
M	public/content/about.json
D	scripts/add-moringa-projects.ts
D	scripts/add-photography-project.ts
D	scripts/migrate-pages.ts
M	tailwind.config.ts

## Patch
diff --git a/.gitignore b/.gitignore
index d16e732..f181cde 100644
--- a/.gitignore
+++ b/.gitignore
@@ -35,7 +35,7 @@ yarn-error.log*
 .claude
 docs/
 sh-files/
-
+backups/
 
 # vercel
 .vercel
@@ -44,8 +44,6 @@ sh-files/
 *.tsbuildinfo
 next-env.d.ts
 
-https://www.instagram.com/p/DRwh226D0i-/ - Attah and Alfred
-https://www.instagram.com/p/DRzplqIiO3U/ - Alfred
 # Uploads (keep directory structure but ignore uploaded files)
 public/uploads/**/*
 !public/uploads/.gitkeep
diff --git a/app/(main)/memberships/page.tsx b/app/(main)/memberships/page.tsx
new file mode 100644
index 0000000..e717bf5
--- /dev/null
+++ b/app/(main)/memberships/page.tsx
@@ -0,0 +1,190 @@
+'use client'
+
+import { useState } from 'react'
+import { useSession } from 'next-auth/react'
+import { useRouter } from 'next/navigation'
+import Link from 'next/link'
+import { Check, Star, ArrowRight, Sparkles } from 'lucide-react'
+import { MEMBERSHIP_PLANS } from '@/lib/membership-plans'
+import { useToast } from '@/components/ui/Toast'
+import { Spinner } from '@/components/ui/Spinner'
+
+export default function MembershipsPage() {
+  const { data: session, status } = useSession()
+  const router = useRouter()
+  const { showToast } = useToast()
+  const [loading, setLoading] = useState<string | null>(null)
+
+  const handlePurchase = async (tierName: string) => {
+    if (status !== 'authenticated') {
+      showToast('Please login to purchase a membership', 'error')
+      router.push('/login')
+      return
+    }
+
+    setLoading(tierName)
+
+    try {
+      const response = await fetch('/api/memberships/purchase', {
+        method: 'POST',
+        headers: {
+          'Content-Type': 'application/json',
+        },
+        body: JSON.stringify({ tier: tierName }),
+      })
+
+      const data = await response.json()
+
+      if (!response.ok) {
+        throw new Error(data.error || 'Failed to purchase membership')
+      }
+
+      showToast('Membership purchased successfully!', 'success')
+      router.push('/dashboard')
+    } catch (error: any) {
+      console.error('Error purchasing membership:', error)
+      showToast(error.message || 'Failed to purchase membership', 'error')
+    } finally {
+      setLoading(null)
+    }
+  }
+
+  return (
+    <div className="min-h-screen py-16">
+      <div className="container mx-auto px-4">
+        {/* Header */}
+        <div className="text-center max-w-3xl mx-auto mb-16">
+          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
+            <Sparkles className="text-primary" size={16} />
+            <span className="text-sm text-primary font-medium">Choose Your Plan</span>
+          </div>
+          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
+            Simple, Transparent Pricing
+          </h1>
+          <p className="text-xl text-muted-foreground">
+            Select a membership plan that fits your needs. All plans include credits for services and rollover unused credits.
+          </p>
+        </div>
+
+        {/* Pricing Cards */}
+        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
+          {MEMBERSHIP_PLANS.map((plan) => (
+            <div
+              key={plan.tier}
+              className={`relative bg-card rounded-2xl border-2 p-8 transition-all ${
+                plan.popular
+                  ? 'border-primary shadow-xl scale-105'
+                  : 'border-border hover:border-primary/50 hover:shadow-lg'
+              }`}
+            >
+              {/* Popular Badge */}
+              {plan.popular && (
+                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
+                  <div className="flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
+                    <Star size={14} fill="currentColor" />
+                    Most Popular
+                  </div>
+                </div>
+              )}
+
+              {/* Plan Header */}
+              <div className="text-center mb-6">
+                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
+                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
+                <div className="flex items-baseline justify-center gap-1">
+                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
+                  <span className="text-muted-foreground">/month</span>
+                </div>
+              </div>
+
+              {/* Credits Info */}
+              <div className="bg-muted rounded-lg p-4 mb-6">
+                <div className="flex items-center justify-between mb-2">
+                  <span className="text-sm text-muted-foreground">Monthly Credits</span>
+                  <span className="text-lg font-bold text-foreground">{plan.credits}</span>
+                </div>
+                <div className="flex items-center justify-between">
+                  <span className="text-sm text-muted-foreground">Rollover Cap</span>
+                  <span className="text-sm font-medium text-foreground">Up to {plan.rolloverCap}</span>
+                </div>
+              </div>
+
+              {/* Features */}
+              <ul className="space-y-3 mb-8">
+                {plan.features.map((feature, index) => (
+                  <li key={index} className="flex items-start gap-3">
+                    <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
+                    <span className="text-sm text-foreground">{feature}</span>
+                  </li>
+                ))}
+              </ul>
+
+              {/* CTA Button */}
+              <button
+                onClick={() => handlePurchase(plan.tier)}
+                disabled={loading === plan.tier}
+                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
+                  plan.popular
+                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md'
+                    : 'bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
+                }`}
+              >
+                {loading === plan.tier ? (
+                  <Spinner size="sm" />
+                ) : (
+                  <>
+                    Get Started
+                    <ArrowRight size={18} />
+                  </>
+                )}
+              </button>
+            </div>
+          ))}
+        </div>
+
+        {/* FAQ Section */}
+        <div className="mt-20 max-w-3xl mx-auto">
+          <h2 className="text-3xl font-bold text-foreground text-center mb-10">
+            Frequently Asked Questions
+          </h2>
+          <div className="space-y-6">
+            <div className="bg-card rounded-xl border border-border p-6">
+              <h3 className="text-lg font-bold text-foreground mb-2">What are credits?</h3>
+              <p className="text-muted-foreground">
+                Credits are used to access services on the platform. Different services consume different amounts of credits based on complexity and time required.
+              </p>
+            </div>
+
+            <div className="bg-card rounded-xl border border-border p-6">
+              <h3 className="text-lg font-bold text-foreground mb-2">What happens to unused credits?</h3>
+              <p className="text-muted-foreground">
+                Unused credits can roll over to the next month up to your plan's rollover cap. This ensures you don't lose credits if you don't use them all in a given month.
+              </p>
+            </div>
+
+            <div className="bg-card rounded-xl border border-border p-6">
+              <h3 className="text-lg font-bold text-foreground mb-2">Can I upgrade or downgrade my plan?</h3>
+              <p className="text-muted-foreground">
+                Yes! You can change your plan at any time. Contact support for assistance with plan changes, and we'll help you transition smoothly.
+              </p>
+            </div>
+          </div>
+        </div>
+
+        {/* CTA Section */}
+        <div className="mt-16 text-center">
+          <p className="text-muted-foreground mb-4">
+            Need a custom plan or have questions?
+          </p>
+          <Link
+            href="/request"
+            className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium"
+          >
+            Contact Us
+            <ArrowRight size={18} />
+          </Link>
+        </div>
+      </div>
+    </div>
+  )
+}
diff --git a/app/(main)/page.tsx b/app/(main)/page.tsx
index a0bfa72..d685c1c 100644
--- a/app/(main)/page.tsx
+++ b/app/(main)/page.tsx
@@ -1,10 +1,12 @@
 import Link from 'next/link'
 import { Button } from '@/components/ui/Button'
-import { Code2, Palette, Zap, ArrowRight } from 'lucide-react'
+import { Code2, Palette, Zap } from 'lucide-react'
 import { AdSlot } from '@/components/AdSlot'
 import { FeaturedProjects } from '@/components/FeaturedProjects'
 import { ProjectCardData } from '@/components/ProjectCard'
 import { prisma } from '@/lib/prisma'
+import { MemberHomeTop } from '@/components/home/MemberHomeTop'
+import { HeroSwitch } from '@/components/home/HeroSwitch'
 
 export default async function HomePage() {
   // Fetch featured projects
@@ -46,33 +48,18 @@ export default async function HomePage() {
   }))
   return (
     <div className="space-y-20 py-12">
-      {/* Hero Section */}
-      <section className="max-w-6xl mx-auto px-4">
-        <div className="text-center space-y-6 py-12">
-          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
-            <span className="text-primary">✨ Available for freelance projects</span>
-          </div>
-          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
-            Hi, I'm <span className="text-primary">Kashi</span>
-          </h1>
-          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto px-4">
-            A Junior Developer building innovative solutions with modern web technologies
-          </p>
-          <div className="flex gap-4 justify-center mt-8">
-            <Link href="/projects">
-              <Button variant="primary" size="lg">
-                View My Work
-                <ArrowRight size={20} />
-              </Button>
-            </Link>
-            <Link href="/request">
-              <Button variant="outline" size="lg">
-                Hire Me
-              </Button>
-            </Link>
-          </div>
-        </div>
-      </section>
+      {/* Member Dashboard Strip (only shows for logged-in users) */}
+      <MemberHomeTop />
+
+      <HeroSwitch
+        title="Hi, I'm"
+        highlight="Kashi"
+        subtitle="A Junior Developer building innovative solutions with modern web technologies"
+        primaryCtaLabel="View My Work"
+        primaryCtaHref="/projects"
+        secondaryCtaLabel="Hire Me"
+        secondaryCtaHref="/request"
+      />
 
       {/* Optional personalized ad below hero */}
       <section className="max-w-6xl mx-auto px-4">
@@ -85,8 +72,8 @@ export default async function HomePage() {
       )}
 
       {/* Features */}
-      <section className="max-w-6xl mx-auto px-4">
-        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
+      <section className="container mx-auto px-4">
+        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all">
             <div className="inline-block p-4 bg-primary/20 rounded-xl mb-4">
               <Code2 className="text-primary" size={32} />
@@ -120,14 +107,14 @@ export default async function HomePage() {
       </section>
 
       {/* CTA Section */}
-      <section className="px-4">
-        <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-12 md:p-20 text-center text-white shadow-xl max-w-7xl mx-auto">
-          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start your project?</h2>
-          <p className="text-xl md:text-2xl mb-10 font-medium max-w-3xl mx-auto">
+      <section className="container mx-auto px-4">
+        <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-12 md:p-20 text-center text-white shadow-xl">
+          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Ready to start your project?</h2>
+          <p className="text-xl md:text-2xl mb-10 font-medium max-w-3xl mx-auto text-white/95 drop-shadow-md">
             Let's work together to bring your ideas to life
           </p>
           <Link href="/request">
-            <Button variant="outline" size="lg" className="bg-white/10 border-white hover:bg-white hover:text-primary">
+            <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:scale-105 transition-transform font-semibold">
               Get Started Today
             </Button>
           </Link>
diff --git a/app/(user)/dashboard/page.tsx b/app/(user)/dashboard/page.tsx
index eda3c17..66dffaf 100644
--- a/app/(user)/dashboard/page.tsx
+++ b/app/(user)/dashboard/page.tsx
@@ -282,9 +282,18 @@ export default function DashboardPage() {
             </div>
           </div>
         ) : (
-          <p className="text-sm text-muted-foreground">
-            You don&apos;t have an active membership yet. Credits and usage limits will appear here once a membership is assigned to your account.
-          </p>
+          <div className="space-y-4">
+            <p className="text-sm text-muted-foreground">
+              You don&apos;t have an active membership yet. Credits and usage limits will appear here once a membership is assigned to your account.
+            </p>
+            <Link
+              href="/memberships"
+              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
+            >
+              Browse Membership Plans
+              <ArrowRight size={18} className="animate-arrow-bounce" />
+            </Link>
+          </div>
         )}
       </div>
 
diff --git a/app/Providers.tsx b/app/Providers.tsx
new file mode 100644
index 0000000..3ece892
--- /dev/null
+++ b/app/Providers.tsx
@@ -0,0 +1,20 @@
+'use client'
+
+import type { ReactNode } from 'react'
+import { ThemeProvider } from '@/lib/ThemeContext'
+import { PreferencesProvider } from '@/lib/preferences/PreferencesContext'
+import { PreferencesGate } from '@/components/preferences/PreferencesGate'
+import { ToastProvider } from '@/components/ui/Toast'
+
+export function Providers({ children }: { children: ReactNode }) {
+  return (
+    <PreferencesProvider>
+      <ThemeProvider>
+        <ToastProvider>
+          <PreferencesGate />
+          {children}
+        </ToastProvider>
+      </ThemeProvider>
+    </PreferencesProvider>
+  )
+}
diff --git a/app/admin/analytics/page.tsx b/app/admin/analytics/page.tsx
index 28b8b8e..e070b95 100644
--- a/app/admin/analytics/page.tsx
+++ b/app/admin/analytics/page.tsx
@@ -17,38 +17,38 @@ interface AnalyticsData {
 export default function AnalyticsPage() {
   const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | 'all'>('7d')
   const [loading, setLoading] = useState(true)
+  const [error, setError] = useState<string | null>(null)
+  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
 
-  // TODO: Fetch from Vercel Analytics API or your database
-  const [analytics] = useState<AnalyticsData>({
-    totalViews: 1247,
-    uniqueVisitors: 892,
-    avgTimeOnSite: 145, // seconds
-    topPages: [
-      { page: 'Projects', views: 456 },
-      { page: 'Home', views: 389 },
-      { page: 'About', views: 234 },
-      { page: 'Contact', views: 168 }
-    ],
-    devices: [
-      { type: 'desktop', count: 623 },
-      { type: 'mobile', count: 421 },
-      { type: 'tablet', count: 48 }
-    ],
-    popularProjects: [
-      { title: 'JS Calculator', views: 234 },
-      { title: 'Portfolio Website', views: 189 },
-      { title: 'React Todo App', views: 156 }
-    ],
-    recentEvents: [
-      { action: 'project_view', timestamp: '2024-01-20T10:30:00Z', data: { projectTitle: 'JS Calculator' } },
-      { action: 'form_submit', timestamp: '2024-01-20T10:25:00Z', data: { formName: 'Contact Form' } },
-      { action: 'theme_change', timestamp: '2024-01-20T10:20:00Z', data: { themeName: 'midnight' } }
-    ]
-  })
-
+  // Fetch analytics data from API
   useEffect(() => {
-    // Simulate loading
-    setTimeout(() => setLoading(false), 1000)
+    const fetchAnalytics = async () => {
+      try {
+        setLoading(true)
+        setError(null)
+
+        const response = await fetch(`/api/admin/analytics?range=${timeRange}`)
+
+        if (!response.ok) {
+          throw new Error('Failed to fetch analytics data')
+        }
+
+        const json = await response.json()
+
+        if (json.success && json.data) {
+          setAnalytics(json.data)
+        } else {
+          throw new Error(json.error || 'Failed to load analytics')
+        }
+      } catch (err) {
+        console.error('Analytics fetch error:', err)
+        setError(err instanceof Error ? err.message : 'Failed to load analytics')
+      } finally {
+        setLoading(false)
+      }
+    }
+
+    fetchAnalytics()
   }, [timeRange])
 
   const formatTime = (seconds: number) => {
@@ -74,6 +74,28 @@ export default function AnalyticsPage() {
     )
   }
 
+  if (error) {
+    return (
+      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
+        <p className="text-red-600 dark:text-red-400 text-lg">{error}</p>
+        <button
+          onClick={() => window.location.reload()}
+          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
+        >
+          Retry
+        </button>
+      </div>
+    )
+  }
+
+  if (!analytics) {
+    return (
+      <div className="flex items-center justify-center min-h-[60vh]">
+        <p className="text-muted-foreground">No analytics data available</p>
+      </div>
+    )
+  }
+
   return (
     <div className="space-y-6">
       {/* Header */}
@@ -107,10 +129,6 @@ export default function AnalyticsPage() {
             <Eye className="text-blue-600 dark:text-blue-400" size={20} />
           </div>
           <p className="text-3xl font-bold text-foreground">{analytics.totalViews.toLocaleString()}</p>
-          <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
-            <TrendingUp size={12} />
-            +12% from last period
-          </p>
         </div>
 
         <div className="bg-card rounded-xl border border-border p-6">
@@ -119,9 +137,8 @@ export default function AnalyticsPage() {
             <Users className="text-purple-600 dark:text-purple-400" size={20} />
           </div>
           <p className="text-3xl font-bold text-foreground">{analytics.uniqueVisitors.toLocaleString()}</p>
-          <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
-            <TrendingUp size={12} />
-            +8% from last period
+          <p className="text-xs text-muted-foreground mt-2">
+            Approximate (based on device/referrer)
           </p>
         </div>
 
@@ -131,21 +148,16 @@ export default function AnalyticsPage() {
             <Clock className="text-orange-600 dark:text-orange-400" size={20} />
           </div>
           <p className="text-3xl font-bold text-foreground">{formatTime(analytics.avgTimeOnSite)}</p>
-          <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
-            <TrendingUp size={12} />
-            +5% from last period
-          </p>
         </div>
 
         <div className="bg-card rounded-xl border border-border p-6">
           <div className="flex items-center justify-between mb-2">
-            <p className="text-muted-foreground text-sm">Engagement Rate</p>
+            <p className="text-muted-foreground text-sm">Total Events</p>
             <MousePointer className="text-green-600 dark:text-green-400" size={20} />
           </div>
-          <p className="text-3xl font-bold text-foreground">68%</p>
-          <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
-            <TrendingUp size={12} />
-            +3% from last period
+          <p className="text-3xl font-bold text-foreground">{analytics.recentEvents.length}</p>
+          <p className="text-xs text-muted-foreground mt-2">
+            Recent activity tracked
           </p>
         </div>
       </div>
@@ -158,7 +170,10 @@ export default function AnalyticsPage() {
             Top Pages
           </h2>
           <div className="space-y-4">
-            {analytics.topPages.map((page, index) => {
+            {analytics.topPages.length === 0 ? (
+              <p className="text-center text-muted-foreground py-8">No page views yet</p>
+            ) : (
+              analytics.topPages.map((page, index) => {
               const maxViews = analytics.topPages[0].views
               const percentage = (page.views / maxViews) * 100
 
@@ -175,8 +190,8 @@ export default function AnalyticsPage() {
                     />
                   </div>
                 </div>
-              )
-            })}
+              ))
+            )}
           </div>
         </div>
 
@@ -187,7 +202,10 @@ export default function AnalyticsPage() {
             Device Breakdown
           </h2>
           <div className="space-y-4">
-            {analytics.devices.map((device) => {
+            {analytics.devices.length === 0 ? (
+              <p className="text-center text-muted-foreground py-8">No device data yet</p>
+            ) : (
+              analytics.devices.map((device) => {
               const total = analytics.devices.reduce((sum, d) => sum + d.count, 0)
               const percentage = ((device.count / total) * 100).toFixed(1)
 
@@ -207,8 +225,8 @@ export default function AnalyticsPage() {
                     />
                   </div>
                 </div>
-              )
-            })}
+              ))
+            )}
           </div>
         </div>
 
@@ -219,7 +237,10 @@ export default function AnalyticsPage() {
             Popular Projects
           </h2>
           <div className="space-y-3">
-            {analytics.popularProjects.map((project, index) => (
+            {analytics.popularProjects.length === 0 ? (
+              <p className="text-center text-muted-foreground py-8">No project views yet</p>
+            ) : (
+              analytics.popularProjects.map((project, index) => (
               <div
                 key={project.title}
                 className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition"
@@ -230,7 +251,8 @@ export default function AnalyticsPage() {
                 </div>
                 <span className="text-muted-foreground text-sm">{project.views} views</span>
               </div>
-            ))}
+              ))
+            )}
           </div>
         </div>
 
@@ -241,7 +263,10 @@ export default function AnalyticsPage() {
             Recent Activity
           </h2>
           <div className="space-y-3">
-            {analytics.recentEvents.map((event, index) => (
+            {analytics.recentEvents.length === 0 ? (
+              <p className="text-center text-muted-foreground py-8">No recent events</p>
+            ) : (
+              analytics.recentEvents.map((event, index) => (
               <div
                 key={index}
                 className="flex items-start gap-3 p-3 bg-muted rounded-lg"
@@ -261,25 +286,19 @@ export default function AnalyticsPage() {
                   )}
                 </div>
               </div>
-            ))}
+              ))
+            )}
           </div>
         </div>
       </div>
 
       {/* Info Banner */}
       <div className="bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
-        <h3 className="text-lg font-bold text-foreground mb-2">📊 Analytics Powered by Vercel</h3>
+        <h3 className="text-lg font-bold text-foreground mb-2">📊 Analytics Overview</h3>
         <p className="text-foreground/80 text-sm">
-          These analytics are tracked in real-time using Vercel Analytics. View more detailed insights in your{' '}
-          <a
-            href="https://vercel.com/dashboard/analytics"
-            target="_blank"
-            rel="noopener noreferrer"
-            className="text-primary hover:underline font-medium"
-          >
-            Vercel Dashboard
-          </a>
-          .
+          Analytics are tracked using a custom implementation with Postgres database storage. Data is collected
+          client-side and stored securely. Unique visitor counts are approximated based on device and referrer
+          combinations.
         </p>
       </div>
     </div>
diff --git a/app/admin/content/about/page.tsx b/app/admin/content/about/page.tsx
index 29445fc..a3bad06 100644
--- a/app/admin/content/about/page.tsx
+++ b/app/admin/content/about/page.tsx
@@ -4,6 +4,7 @@ import { useState, useEffect } from 'react'
 import { Button } from '@/components/ui/Button'
 import { Input } from '@/components/ui/Input'
 import { Plus, Trash2, Save, AlertCircle } from 'lucide-react'
+import { ImageUploadCrop } from '@/components/ImageUploadCrop'
 
 interface AboutData {
   hero: {
@@ -247,10 +248,11 @@ export default function AboutEditorPage() {
             value={data.hero.title}
             onChange={(e) => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
           />
-          <Input
-            label="Avatar URL"
-            value={data.hero.avatarUrl}
-            onChange={(e) => setData({ ...data, hero: { ...data.hero, avatarUrl: e.target.value } })}
+          <ImageUploadCrop
+            label="Avatar Image"
+            currentImage={data.hero.avatarUrl}
+            aspectRatio={1}
+            onImageCropped={(url) => setData({ ...data, hero: { ...data.hero, avatarUrl: url } })}
           />
         </div>
         <Input
diff --git a/app/admin/digital-products/new/page.tsx b/app/admin/digital-products/new/page.tsx
index 2de45d0..f00d73d 100644
--- a/app/admin/digital-products/new/page.tsx
+++ b/app/admin/digital-products/new/page.tsx
@@ -120,7 +120,7 @@ export default function NewDigitalProductPage() {
   }
 
   return (
-    <div className="max-w-4xl space-y-6">
+    <div className="space-y-6">
       {/* Header */}
       <div className="flex items-center gap-4">
         <Link
diff --git a/app/admin/projects/new/page.tsx b/app/admin/projects/new/page.tsx
index bf5e55f..a65a3e5 100644
--- a/app/admin/projects/new/page.tsx
+++ b/app/admin/projects/new/page.tsx
@@ -22,6 +22,7 @@ export default function NewProjectPage() {
     title: '',
     slug: '',
     description: '',
+    problem: '',
     category: '',
     githubUrl: '',
     liveUrl: '',
@@ -176,6 +177,21 @@ export default function NewProjectPage() {
             />
           </div>
 
+          {/* Problem/Purpose */}
+          <div>
+            <label className="block text-sm font-medium text-foreground mb-2">
+              Problem / Purpose
+              <span className="text-muted-foreground text-xs ml-2">(What problem does this solve?)</span>
+            </label>
+            <textarea
+              value={formData.problem}
+              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
+              rows={3}
+              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none text-foreground"
+              placeholder="e.g., This calculator helps students quickly perform complex calculations without needing physical hardware..."
+            />
+          </div>
+
           {/* Category & URLs */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div>
diff --git a/app/api/admin/analytics/route.ts b/app/api/admin/analytics/route.ts
new file mode 100644
index 0000000..9019fd3
--- /dev/null
+++ b/app/api/admin/analytics/route.ts
@@ -0,0 +1,147 @@
+import { NextRequest, NextResponse } from 'next/server'
+import { getServerSession } from 'next-auth'
+import { authOptions } from '@/lib/auth-options'
+import { prisma } from '@/lib/prisma'
+
+export async function GET(req: NextRequest) {
+  try {
+    // Require admin authentication
+    const session = await getServerSession(authOptions)
+
+    if (!session?.user) {
+      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
+    }
+
+    // Check if user has admin role
+    const user = await prisma.user.findUnique({
+      where: { email: session.user.email! },
+      select: { role: true },
+    })
+
+    if (!user || (user.role !== 'ADMIN' && user.role !== 'OWNER')) {
+      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
+    }
+
+    // Get time range from query params (default to 7 days)
+    const { searchParams } = new URL(req.url)
+    const rangeParam = searchParams.get('range') || '7d'
+
+    let startDate: Date
+    const now = new Date()
+
+    switch (rangeParam) {
+      case '24h':
+        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000)
+        break
+      case '7d':
+        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
+        break
+      case '30d':
+        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
+        break
+      case 'all':
+        startDate = new Date(0) // Beginning of time
+        break
+      default:
+        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
+    }
+
+    // Query analytics events
+    const events = await prisma.analyticsEvent.findMany({
+      where: {
+        createdAt: {
+          gte: startDate,
+        },
+      },
+      orderBy: {
+        createdAt: 'desc',
+      },
+    })
+
+    // Calculate total page views
+    const totalViews = events.filter((e) => e.action === 'page_view').length
+
+    // Approximate unique visitors
+    // Assumption: We use device + referrer combination as a proxy for unique visitors
+    // This is not perfect but works without user tracking
+    const uniqueDevices = new Set(
+      events
+        .filter((e) => e.action === 'page_view')
+        .map((e) => `${e.device || 'unknown'}-${e.referrer || 'direct'}`)
+    )
+    const uniqueVisitors = uniqueDevices.size
+
+    // Calculate average time on site (from time_on_page events)
+    const timeOnPageEvents = events.filter((e) => e.action === 'time_on_page')
+    const totalTimeSpent = timeOnPageEvents.reduce((sum, e) => sum + (e.value || 0), 0)
+    const avgTimeOnSite = timeOnPageEvents.length > 0
+      ? Math.round(totalTimeSpent / timeOnPageEvents.length)
+      : 0
+
+    // Get top pages
+    const pageViews = events.filter((e) => e.action === 'page_view' && e.page)
+    const pageViewCounts = pageViews.reduce((acc, e) => {
+      const page = e.page!
+      acc[page] = (acc[page] || 0) + 1
+      return acc
+    }, {} as Record<string, number>)
+
+    const topPages = Object.entries(pageViewCounts)
+      .map(([page, views]) => ({ page, views }))
+      .sort((a, b) => b.views - a.views)
+      .slice(0, 10)
+
+    // Get device breakdown
+    const deviceCounts = events
+      .filter((e) => e.device)
+      .reduce((acc, e) => {
+        const device = e.device!
+        acc[device] = (acc[device] || 0) + 1
+        return acc
+      }, {} as Record<string, number>)
+
+    const devices = Object.entries(deviceCounts).map(([type, count]) => ({
+      type,
+      count,
+    }))
+
+    // Get popular projects (from project_view events)
+    const projectViews = events.filter((e) => e.action === 'project_view')
+    const projectViewCounts = projectViews.reduce((acc, e) => {
+      const title = (e.data as any)?.projectTitle || 'Unknown'
+      acc[title] = (acc[title] || 0) + 1
+      return acc
+    }, {} as Record<string, number>)
+
+    const popularProjects = Object.entries(projectViewCounts)
+      .map(([title, views]) => ({ title, views }))
+      .sort((a, b) => b.views - a.views)
+      .slice(0, 10)
+
+    // Get recent events (last 20)
+    const recentEvents = events.slice(0, 20).map((e) => ({
+      action: e.action,
+      timestamp: e.createdAt.toISOString(),
+      data: e.data,
+    }))
+
+    return NextResponse.json({
+      success: true,
+      data: {
+        totalViews,
+        uniqueVisitors,
+        avgTimeOnSite,
+        topPages,
+        devices,
+        popularProjects,
+        recentEvents,
+      },
+    })
+  } catch (error) {
+    console.error('Admin analytics error:', error)
+    return NextResponse.json(
+      { success: false, error: 'Failed to fetch analytics' },
+      { status: 500 }
+    )
+  }
+}
diff --git a/app/api/analytics/track/route.ts b/app/api/analytics/track/route.ts
new file mode 100644
index 0000000..ebab35c
--- /dev/null
+++ b/app/api/analytics/track/route.ts
@@ -0,0 +1,44 @@
+import { NextRequest, NextResponse } from 'next/server'
+import { prisma } from '@/lib/prisma'
+
+// Allow anonymous access - no authentication required
+export async function POST(req: NextRequest) {
+  try {
+    const body = await req.json()
+
+    // Minimal validation - only action is required
+    const { action, page, category, label, value, device, referrer, data } = body
+
+    if (!action || typeof action !== 'string') {
+      return NextResponse.json(
+        { success: false, error: 'Action is required and must be a string' },
+        { status: 400 }
+      )
+    }
+
+    // Insert analytics event into database
+    await prisma.analyticsEvent.create({
+      data: {
+        action,
+        page: page || null,
+        category: category || null,
+        label: label || null,
+        value: value ? parseInt(value) : null,
+        device: device || null,
+        referrer: referrer || null,
+        data: data || null,
+      },
+    })
+
+    return NextResponse.json({ success: true }, { status: 201 })
+  } catch (error) {
+    // Fail gracefully - never throw uncaught errors
+    console.error('Analytics tracking error:', error)
+
+    // Return success even on error to avoid blocking client UI
+    return NextResponse.json(
+      { success: false, error: 'Failed to track event' },
+      { status: 200 }
+    )
+  }
+}
diff --git a/app/api/memberships/purchase/route.ts b/app/api/memberships/purchase/route.ts
new file mode 100644
index 0000000..c1883eb
--- /dev/null
+++ b/app/api/memberships/purchase/route.ts
@@ -0,0 +1,145 @@
+import { NextRequest, NextResponse } from 'next/server'
+import { getServerSession } from '@/lib/auth'
+import { prisma } from '@/lib/prisma'
+import { getMembershipPlan } from '@/lib/membership-plans'
+import { MembershipTier, MembershipStatus, CreditTransactionType, AuditAction } from '@prisma/client'
+
+export async function POST(request: NextRequest) {
+  try {
+    // Check authentication
+    const session = await getServerSession()
+    if (!session) {
+      return NextResponse.json(
+        { error: 'Unauthorized' },
+        { status: 401 }
+      )
+    }
+
+    // Parse request body
+    const body = await request.json()
+    const { tier } = body
+
+    if (!tier || !Object.values(MembershipTier).includes(tier)) {
+      return NextResponse.json(
+        { error: 'Invalid membership tier' },
+        { status: 400 }
+      )
+    }
+
+    // Get membership plan details
+    const plan = getMembershipPlan(tier as MembershipTier)
+    if (!plan) {
+      return NextResponse.json(
+        { error: 'Membership plan not found' },
+        { status: 404 }
+      )
+    }
+
+    // TODO: PAYMENT INTEGRATION REQUIRED
+    // Before creating the membership, you need to:
+    // 1. Integrate a payment provider (Stripe, PayPal, etc.)
+    // 2. Create a payment intent/session
+    // 3. Verify payment completion
+    // 4. Only then create the membership
+    //
+    // Example with Stripe:
+    // const paymentIntent = await stripe.paymentIntents.create({
+    //   amount: plan.price * 100, // Convert to cents
+    //   currency: 'usd',
+    //   metadata: { userId: session.user.id, tier: plan.tier }
+    // })
+    //
+    // For now, this is a demo implementation that creates memberships without payment
+
+    // Check if user already has an active membership
+    const existingUser = await prisma.user.findUnique({
+      where: { id: session.user.id },
+      include: { membership: true },
+    })
+
+    if (existingUser?.membership && existingUser.membership.status === MembershipStatus.ACTIVE) {
+      return NextResponse.json(
+        { error: 'You already have an active membership. Please cancel or wait for it to expire before purchasing a new one.' },
+        { status: 400 }
+      )
+    }
+
+    // Calculate membership dates
+    const startDate = new Date()
+    const endDate = new Date()
+    endDate.setDate(endDate.getDate() + plan.durationDays)
+
+    // Create membership and assign to user in a transaction
+    const membership = await prisma.$transaction(async (tx) => {
+      // Create membership
+      const newMembership = await tx.membership.create({
+        data: {
+          tier: plan.tier,
+          totalCredits: plan.credits,
+          usedCredits: 0,
+          remainingCredits: plan.credits,
+          rolloverCredits: 0,
+          rolloverCap: plan.rolloverCap,
+          startDate,
+          endDate,
+          autoRenew: false,
+          status: MembershipStatus.ACTIVE,
+        },
+      })
+
+      // Assign membership to user
+      await tx.user.update({
+        where: { id: session.user.id },
+        data: { membershipId: newMembership.id },
+      })
+
+      // Create initial credit transaction
+      await tx.creditTransaction.create({
+        data: {
+          userId: session.user.id,
+          membershipId: newMembership.id,
+          type: CreditTransactionType.INITIAL_ALLOCATION,
+          amount: plan.credits,
+          balance: plan.credits,
+          description: `Initial credit allocation for ${plan.name} membership`,
+        },
+      })
+
+      // Create audit log
+      await tx.auditLog.create({
+        data: {
+          userId: session.user.id,
+          action: AuditAction.MEMBERSHIP_CREATED,
+          resource: 'Membership',
+          resourceId: newMembership.id,
+          details: {
+            tier: plan.tier,
+            credits: plan.credits,
+            price: plan.price,
+          },
+        },
+      })
+
+      return newMembership
+    })
+
+    return NextResponse.json({
+      success: true,
+      membership: {
+        id: membership.id,
+        tier: membership.tier,
+        totalCredits: membership.totalCredits,
+        remainingCredits: membership.remainingCredits,
+        startDate: membership.startDate.toISOString(),
+        endDate: membership.endDate.toISOString(),
+        status: membership.status,
+      },
+    })
+  } catch (error: any) {
+    console.error('Error creating membership:', error)
+    return NextResponse.json(
+      { error: error.message || 'Failed to create membership' },
+      { status: 500 }
+    )
+  }
+}
diff --git a/app/api/pages/[slug]/route.ts b/app/api/pages/[slug]/route.ts
index 8f0339e..55a8b7f 100644
--- a/app/api/pages/[slug]/route.ts
+++ b/app/api/pages/[slug]/route.ts
@@ -1,121 +1,31 @@
 import { NextRequest, NextResponse } from 'next/server'
-import { getServerSession } from 'next-auth'
-import { authOptions } from '@/lib/auth-options'
-import { prisma } from '@/lib/prisma'
 
-// GET /api/pages/[slug] - Get a single page with sections
+// DISABLED: Pages CMS has been removed
+const goneResponse = () => NextResponse.json(
+  {
+    success: false,
+    error: 'This endpoint has been removed. Pages CMS is no longer available.'
+  },
+  { status: 410 }
+)
+
 export async function GET(
   request: NextRequest,
   { params }: { params: { slug: string } }
 ) {
-  try {
-    const session = await getServerSession(authOptions)
-    const isAdmin = session?.user?.role && ['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)
-
-    const where: any = { slug: params.slug }
-
-    // Public users only see published pages
-    if (!isAdmin) {
-      where.status = 'PUBLISHED'
-    }
-
-    const page = await prisma.page.findFirst({
-      where,
-      include: {
-        sections: {
-          orderBy: { order: 'asc' }
-        }
-      }
-    })
-
-    if (!page) {
-      return NextResponse.json(
-        { success: false, error: 'Page not found' },
-        { status: 404 }
-      )
-    }
-
-    return NextResponse.json({
-      success: true,
-      data: page
-    })
-  } catch (error: any) {
-    console.error('Error fetching page:', error)
-    return NextResponse.json(
-      { success: false, error: error.message || 'Failed to fetch page' },
-      { status: 500 }
-    )
-  }
+  return goneResponse()
 }
 
-// PATCH /api/pages/[slug] - Update a page
 export async function PATCH(
   request: NextRequest,
   { params }: { params: { slug: string } }
 ) {
-  try {
-    const session = await getServerSession(authOptions)
-
-    if (!session?.user?.role || !['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)) {
-      return NextResponse.json(
-        { success: false, error: 'Unauthorized' },
-        { status: 401 }
-      )
-    }
-
-    const body = await request.json()
-
-    const page = await prisma.page.update({
-      where: { slug: params.slug },
-      data: {
-        title: body.title,
-        status: body.status,
-        seoTitle: body.seoTitle,
-        seoDescription: body.seoDescription,
-      }
-    })
-
-    return NextResponse.json({
-      success: true,
-      data: page
-    })
-  } catch (error: any) {
-    console.error('Error updating page:', error)
-    return NextResponse.json(
-      { success: false, error: error.message || 'Failed to update page' },
-      { status: 500 }
-    )
-  }
+  return goneResponse()
 }
 
-// DELETE /api/pages/[slug] - Delete a page
 export async function DELETE(
   request: NextRequest,
   { params }: { params: { slug: string } }
 ) {
-  try {
-    const session = await getServerSession(authOptions)
-
-    if (!session?.user?.role || !['ADMIN', 'OWNER'].includes(session.user.role)) {
-      return NextResponse.json(
-        { success: false, error: 'Unauthorized' },
-        { status: 401 }
-      )
-    }
-
-    await prisma.page.delete({
-      where: { slug: params.slug }
-    })
-
-    return NextResponse.json({
-      success: true,
-      message: 'Page deleted successfully'
-    })
-  } catch (error: any) {
-    console.error('Error deleting page:', error)
-    return NextResponse.json(
-      { success: false, error: error.message || 'Failed to delete page' },
-      { status: 500 }
-    )
-  }
+  return goneResponse()
 }
diff --git a/app/api/pages/[slug]/sections/route.ts b/app/api/pages/[slug]/sections/route.ts
index fb5e047..31f2103 100644
--- a/app/api/pages/[slug]/sections/route.ts
+++ b/app/api/pages/[slug]/sections/route.ts
@@ -1,102 +1,24 @@
 import { NextRequest, NextResponse } from 'next/server'
-import { getServerSession } from 'next-auth'
-import { authOptions } from '@/lib/auth-options'
-import { prisma } from '@/lib/prisma'
 
-// POST /api/pages/[slug]/sections - Add a section to a page
+// DISABLED: Pages CMS has been removed
+const goneResponse = () => NextResponse.json(
+  {
+    success: false,
+    error: 'This endpoint has been removed. Pages CMS is no longer available.'
+  },
+  { status: 410 }
+)
+
 export async function POST(
   request: NextRequest,
   { params }: { params: { slug: string } }
 ) {
-  try {
-    const session = await getServerSession(authOptions)
-
-    if (!session?.user?.role || !['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)) {
-      return NextResponse.json(
-        { success: false, error: 'Unauthorized' },
-        { status: 401 }
-      )
-    }
-
-    const body = await request.json()
-
-    // Find the page
-    const page = await prisma.page.findUnique({
-      where: { slug: params.slug },
-      include: { sections: true }
-    })
-
-    if (!page) {
-      return NextResponse.json(
-        { success: false, error: 'Page not found' },
-        { status: 404 }
-      )
-    }
-
-    // Create the section
-    const section = await prisma.pageSection.create({
-      data: {
-        pageId: page.id,
-        type: body.type,
-        data: body.data || {},
-        order: body.order ?? page.sections.length
-      }
-    })
-
-    return NextResponse.json({
-      success: true,
-      data: section
-    })
-  } catch (error: any) {
-    console.error('Error creating section:', error)
-    return NextResponse.json(
-      { success: false, error: error.message || 'Failed to create section' },
-      { status: 500 }
-    )
-  }
+  return goneResponse()
 }
 
-// PATCH /api/pages/[slug]/sections - Update sections order or bulk update
 export async function PATCH(
   request: NextRequest,
   { params }: { params: { slug: string } }
 ) {
-  try {
-    const session = await getServerSession(authOptions)
-
-    if (!session?.user?.role || !['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)) {
-      return NextResponse.json(
-        { success: false, error: 'Unauthorized' },
-        { status: 401 }
-      )
-    }
-
-    const body = await request.json()
-    const { sections } = body // Array of { id, order, data?, type? }
-
-    // Update sections in bulk
-    await Promise.all(
-      sections.map((section: any) =>
-        prisma.pageSection.update({
-          where: { id: section.id },
-          data: {
-            order: section.order,
-            ...(section.data && { data: section.data }),
-            ...(section.type && { type: section.type })
-          }
-        })
-      )
-    )
-
-    return NextResponse.json({
-      success: true,
-      message: 'Sections updated successfully'
-    })
-  } catch (error: any) {
-    console.error('Error updating sections:', error)
-    return NextResponse.json(
-      { success: false, error: error.message || 'Failed to update sections' },
-      { status: 500 }
-    )
-  }
+  return goneResponse()
 }
diff --git a/app/api/pages/route.ts b/app/api/pages/route.ts
index 8cd83e0..6df44bd 100644
--- a/app/api/pages/route.ts
+++ b/app/api/pages/route.ts
@@ -1,90 +1,23 @@
 import { NextRequest, NextResponse } from 'next/server'
-import { getServerSession } from 'next-auth'
-import { authOptions } from '@/lib/auth-options'
-import { prisma } from '@/lib/prisma'
 
-// GET /api/pages - List all pages
+// DISABLED: Pages CMS has been removed
+// This endpoint is no longer available
 export async function GET(request: NextRequest) {
-  try {
-    const session = await getServerSession(authOptions)
-    const { searchParams } = new URL(request.url)
-    const status = searchParams.get('status')
-
-    const isAdmin = session?.user?.role && ['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)
-
-    const where: any = {}
-
-    // Public users only see published pages
-    if (!isAdmin) {
-      where.status = 'PUBLISHED'
-    } else if (status) {
-      where.status = status
-    }
-
-    const pages = await prisma.page.findMany({
-      where,
-      orderBy: { updatedAt: 'desc' },
-      select: {
-        id: true,
-        slug: true,
-        title: true,
-        status: true,
-        seoTitle: true,
-        seoDescription: true,
-        createdAt: true,
-        updatedAt: true,
-        _count: {
-          select: { sections: true }
-        }
-      }
-    })
-
-    return NextResponse.json({
-      success: true,
-      data: pages
-    })
-  } catch (error: any) {
-    console.error('Error fetching pages:', error)
-    return NextResponse.json(
-      { success: false, error: error.message || 'Failed to fetch pages' },
-      { status: 500 }
-    )
-  }
+  return NextResponse.json(
+    {
+      success: false,
+      error: 'This endpoint has been removed. Pages CMS is no longer available.'
+    },
+    { status: 410 } // 410 Gone
+  )
 }
 
-// POST /api/pages - Create a new page
 export async function POST(request: NextRequest) {
-  try {
-    const session = await getServerSession(authOptions)
-
-    if (!session?.user?.role || !['ADMIN', 'OWNER', 'MODERATOR', 'EDITOR'].includes(session.user.role)) {
-      return NextResponse.json(
-        { success: false, error: 'Unauthorized' },
-        { status: 401 }
-      )
-    }
-
-    const body = await request.json()
-
-    const page = await prisma.page.create({
-      data: {
-        slug: body.slug,
-        title: body.title,
-        status: body.status || 'DRAFT',
-        seoTitle: body.seoTitle || null,
-        seoDescription: body.seoDescription || null,
-      }
-    })
-
-    return NextResponse.json({
-      success: true,
-      data: page
-    })
-  } catch (error: any) {
-    console.error('Error creating page:', error)
-    return NextResponse.json(
-      { success: false, error: error.message || 'Failed to create page' },
-      { status: 500 }
-    )
-  }
+  return NextResponse.json(
+    {
+      success: false,
+      error: 'This endpoint has been removed. Pages CMS is no longer available.'
+    },
+    { status: 410 } // 410 Gone
+  )
 }
diff --git a/app/api/upload/avatar/route.ts b/app/api/upload/avatar/route.ts
new file mode 100644
index 0000000..c59f439
--- /dev/null
+++ b/app/api/upload/avatar/route.ts
@@ -0,0 +1,57 @@
+import { NextRequest, NextResponse } from 'next/server'
+import { writeFile, mkdir } from 'fs/promises'
+import path from 'path'
+import { existsSync } from 'fs'
+
+export async function POST(req: NextRequest) {
+  try {
+    const formData = await req.formData()
+    const file = formData.get('image') as File
+
+    if (!file) {
+      return NextResponse.json(
+        { success: false, error: 'No image provided' },
+        { status: 400 }
+      )
+    }
+
+    // Validate file type
+    if (!file.type.startsWith('image/')) {
+      return NextResponse.json(
+        { success: false, error: 'File must be an image' },
+        { status: 400 }
+      )
+    }
+
+    // Create uploads directory if it doesn't exist
+    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'avatars')
+    if (!existsSync(uploadsDir)) {
+      await mkdir(uploadsDir, { recursive: true })
+    }
+
+    // Generate unique filename
+    const timestamp = Date.now()
+    const ext = file.name.split('.').pop() || 'jpg'
+    const filename = `avatar-${timestamp}.${ext}`
+    const filepath = path.join(uploadsDir, filename)
+
+    // Convert file to buffer and save
+    const bytes = await file.arrayBuffer()
+    const buffer = Buffer.from(bytes)
+    await writeFile(filepath, buffer)
+
+    // Return public URL
+    const publicUrl = `/uploads/avatars/${filename}`
+
+    return NextResponse.json({
+      success: true,
+      url: publicUrl,
+    })
+  } catch (error) {
+    console.error('Avatar upload error:', error)
+    return NextResponse.json(
+      { success: false, error: 'Failed to upload image' },
+      { status: 500 }
+    )
+  }
+}
diff --git a/app/globals.css b/app/globals.css
index 54c9762..3cab861 100644
--- a/app/globals.css
+++ b/app/globals.css
@@ -7,7 +7,7 @@
      MIDNIGHT PURPLE (Default)
      ============================================ */
   :root,
-  [data-theme='dracula'] {
+  [data-legacy-theme='dracula'] {
     --color-primary: 189 147 249;        /* Purple */
     --color-primary-foreground: 40 42 54;
     --color-secondary: 255 121 198;      /* Pink */
@@ -36,7 +36,7 @@
   /* ============================================
      DESERT DAWN
      ============================================ */
-  [data-theme='ayulight'] {
+  [data-legacy-theme='ayulight'] {
     --color-primary: 65 137 223;         /* Blue */
     --color-primary-foreground: 255 255 255;
     --color-secondary: 250 116 34;       /* Orange */
@@ -65,7 +65,7 @@
   /* ============================================
      CLEAN SLATE
      ============================================ */
-  [data-theme='quietlight'] {
+  [data-legacy-theme='quietlight'] {
     --color-primary: 0 119 170;          /* Blue */
     --color-primary-foreground: 255 255 255;
     --color-secondary: 166 38 164;       /* Purple */
@@ -94,7 +94,7 @@
   /* ============================================
      OCEAN DEEP
      ============================================ */
-  [data-theme='material'] {
+  [data-legacy-theme='material'] {
     --color-primary: 130 170 255;        /* Blue */
     --color-primary-foreground: 255 255 255;
     --color-secondary: 199 146 234;      /* Purple */
@@ -120,6 +120,96 @@
     --color-info: 137 221 255;
   }
 
+  /* ============================================
+     PREFERENCES TOKENS (FORMAL + VIBEY)
+     ============================================ */
+  :root {
+    --bg: rgb(var(--color-background));
+    --surface: rgb(var(--color-card));
+    --border: rgb(var(--color-border));
+    --text: rgb(var(--color-foreground));
+    --muted: rgb(var(--color-foreground-muted));
+    --primary: rgb(var(--color-primary));
+    --primary2: rgb(var(--color-secondary));
+    --ring: rgb(var(--color-primary));
+  }
+
+  [data-theme='light'] {
+    --bg: theme('colors.zinc.50');
+    --surface: theme('colors.white');
+    --border: theme('colors.zinc.200');
+    --text: theme('colors.zinc.900');
+    --muted: theme('colors.zinc.600');
+  }
+
+  [data-theme='dark'] {
+    --bg: theme('colors.zinc.950');
+    --surface: theme('colors.zinc.900');
+    --border: theme('colors.zinc.800');
+    --text: theme('colors.zinc.50');
+    --muted: theme('colors.zinc.300');
+  }
+
+  [data-mode='formal'][data-theme='light'] {
+    --primary: theme('colors.blue.600');
+    --primary2: theme('colors.slate.600');
+    --ring: theme('colors.blue.600');
+  }
+
+  [data-mode='formal'][data-theme='dark'] {
+    --primary: theme('colors.blue.400');
+    --primary2: theme('colors.slate.400');
+    --ring: theme('colors.blue.400');
+  }
+
+  [data-mode='vibey'][data-vibey='grape'][data-theme='light'] {
+    --primary: theme('colors.violet.600');
+    --primary2: theme('colors.fuchsia.500');
+    --ring: theme('colors.violet.600');
+  }
+
+  [data-mode='vibey'][data-vibey='grape'][data-theme='dark'] {
+    --primary: theme('colors.violet.400');
+    --primary2: theme('colors.fuchsia.400');
+    --ring: theme('colors.violet.400');
+  }
+
+  [data-mode='vibey'][data-vibey='ocean'][data-theme='light'] {
+    --primary: theme('colors.cyan.600');
+    --primary2: theme('colors.teal.500');
+    --ring: theme('colors.cyan.600');
+  }
+
+  [data-mode='vibey'][data-vibey='ocean'][data-theme='dark'] {
+    --primary: theme('colors.cyan.400');
+    --primary2: theme('colors.teal.400');
+    --ring: theme('colors.cyan.400');
+  }
+
+  [data-mode='vibey'][data-vibey='peach'][data-theme='light'] {
+    --primary: theme('colors.orange.400');
+    --primary2: theme('colors.purple.500');
+    --ring: theme('colors.orange.400');
+  }
+
+  [data-mode='vibey'][data-vibey='peach'][data-theme='dark'] {
+    --primary: theme('colors.orange.300');
+    --primary2: theme('colors.purple.400');
+    --ring: theme('colors.orange.300');
+  }
+
+  [data-mode='vibey'][data-vibey='neon'][data-theme='light'] {
+    --primary: theme('colors.lime.500');
+    --primary2: theme('colors.emerald.500');
+    --ring: theme('colors.lime.500');
+  }
+
+  [data-mode='vibey'][data-vibey='neon'][data-theme='dark'] {
+    --primary: theme('colors.lime.400');
+    --primary2: theme('colors.emerald.400');
+    --ring: theme('colors.lime.400');
+  }
+
   /* ============================================
      BASE STYLES
      ============================================ */
@@ -129,7 +219,9 @@
 
   body {
     @apply bg-background text-foreground antialiased;
-    caret-color: rgb(var(--color-primary));
+    background-color: var(--bg, rgb(var(--color-background)));
+    color: var(--text, rgb(var(--color-foreground)));
+    caret-color: var(--primary, rgb(var(--color-primary)));
   }
 
   h1, h2, h3, h4, h5, h6 {
@@ -172,4 +264,62 @@
   .text-balance {
     text-wrap: balance;
   }
-}
\ No newline at end of file
+
+  /* Subtle arrow bounce animation */
+  @keyframes arrow-bounce {
+    0%, 100% {
+      transform: translateX(0);
+    }
+    50% {
+      transform: translateX(4px);
+    }
+  }
+
+  .animate-arrow-bounce {
+    animation: arrow-bounce 2s ease-in-out infinite;
+  }
+
+  .bg-app {
+    background-color: var(--bg);
+  }
+
+  .surface-app {
+    background-color: var(--surface);
+  }
+
+  .border-app {
+    border-color: var(--border);
+  }
+
+  .text-app {
+    color: var(--text);
+  }
+
+  .text-muted-app {
+    color: var(--muted);
+  }
+
+  .accent {
+    color: var(--primary);
+  }
+
+  .accent-2 {
+    color: var(--primary2);
+  }
+
+  .bg-accent {
+    background-color: var(--primary);
+  }
+
+  .bg-accent-soft {
+    background-color: color-mix(in srgb, var(--primary) 15%, transparent);
+  }
+
+  .border-accent {
+    border-color: var(--primary);
+  }
+
+  .ring-app {
+    --tw-ring-color: var(--ring);
+  }
+}
diff --git a/app/layout.tsx b/app/layout.tsx
index 2369b8b..9c8d308 100644
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -1,10 +1,9 @@
 import type { Metadata } from 'next'
 import { Inter } from 'next/font/google'
-import { ThemeProvider } from '@/lib/ThemeContext'
-import { ToastProvider } from '@/components/ui/Toast'
 import { CookieNotice } from '@/components/CookieNotice'
 import './globals.css'
 import { Analytics } from "@vercel/analytics/next"
+import { Providers } from './Providers'
 
 const inter = Inter({ subsets: ['latin'] })
 
@@ -19,16 +18,18 @@ export default function RootLayout({
   children: React.ReactNode
 }) {
   return (
-    <html lang="en" suppressHydrationWarning>
+    <html
+      lang="en"
+      suppressHydrationWarning
+      data-theme="light"
+      data-mode="formal"
+      data-legacy-theme="dracula"
+    >
       <body className={inter.className}>
-        <ThemeProvider>
-          <ToastProvider>
-            {children}
-          </ToastProvider>
-        </ThemeProvider>
+        <Providers>{children}</Providers>
         <Analytics />
         <CookieNotice />
       </body>
     </html>
   )
-}
\ No newline at end of file
+}
diff --git a/components/FeaturedProjects.tsx b/components/FeaturedProjects.tsx
index cb56f92..6cbc449 100644
--- a/components/FeaturedProjects.tsx
+++ b/components/FeaturedProjects.tsx
@@ -20,7 +20,7 @@ export function FeaturedProjects({
   }
 
   return (
-    <section className="py-16">
+    <section>
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="flex items-center justify-between mb-8">
diff --git a/components/Footer.tsx b/components/Footer.tsx
index 9065002..e6cd333 100644
--- a/components/Footer.tsx
+++ b/components/Footer.tsx
@@ -1,41 +1,47 @@
+'use client'
+
 import Link from 'next/link'
+import { usePathname } from 'next/navigation'
+import { PreferencesPanel } from '@/components/preferences/PreferencesPanel'
 
 export default function Footer() {
   const currentYear = new Date().getFullYear()
+  const pathname = usePathname()
+  const showPreferences = !pathname?.startsWith('/admin')
 
   return (
-    <footer className="bg-background-secondary border-t border-border mt-auto">
+    <footer className="surface-app border-t border-app mt-auto">
       <div className="container mx-auto px-4 py-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {/* Brand */}
           <div>
-            <h3 className="text-xl font-bold text-primary mb-3">Kashi Kweyu</h3>
-            <p className="text-foreground-muted text-sm">
+            <h3 className="text-xl font-bold accent mb-3">Kashi Kweyu</h3>
+            <p className="text-muted-app text-sm">
               Junior Developer
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
-            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
+            <h4 className="font-semibold text-app mb-3">Quick Links</h4>
             <ul className="space-y-2">
               <li>
-                <Link href="/projects" className="text-foreground-muted hover:text-primary transition text-sm">
+                <Link href="/projects" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
                   Projects
                 </Link>
               </li>
               <li>
-                <Link href="/services" className="text-foreground-muted hover:text-primary transition text-sm">
+                <Link href="/services" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
                   Services
                 </Link>
               </li>
               <li>
-                <Link href="/about" className="text-foreground-muted hover:text-primary transition text-sm">
+                <Link href="/about" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
                   About
                 </Link>
               </li>
               <li>
-                <Link href="/request" className="text-foreground-muted hover:text-primary transition text-sm">
+                <Link href="/request" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
                   Request Service
                 </Link>
               </li>
@@ -44,15 +50,15 @@ export default function Footer() {
 
           {/* Legal */}
           <div>
-            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
+            <h4 className="font-semibold text-app mb-3">Legal</h4>
             <ul className="space-y-2">
               <li>
-                <Link href="/legal/privacy-policy" className="text-foreground-muted hover:text-primary transition text-sm">
+                <Link href="/legal/privacy-policy" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
                   Privacy Policy
                 </Link>
               </li>
               <li>
-                <Link href="/legal/terms" className="text-foreground-muted hover:text-primary transition text-sm">
+                <Link href="/legal/terms" className="text-muted-app hover:text-[color:var(--primary)] transition text-sm">
                   Terms of Service
                 </Link>
               </li>
@@ -61,16 +67,16 @@ export default function Footer() {
 
           {/* Social */}
           <div>
-            <h4 className="font-semibold text-foreground mb-3">Connect</h4>
+            <h4 className="font-semibold text-app mb-3">Connect</h4>
             <div className="flex flex-wrap gap-3">
               <a
                 href="https://github.com/kashik09"
                 target="_blank"
                 rel="noopener noreferrer"
-                className="p-2 bg-primary rounded-lg border border-border hover:border-primary hover:bg-primary/90 transition"
+                className="p-2 bg-accent rounded-lg border border-accent hover:opacity-90 transition"
                 aria-label="GitHub"
               >
-                <svg className="w-5 h-5 text-primary-foreground" fill="white" viewBox="0 0 24 24">
+                <svg className="w-5 h-5 text-white" fill="white" viewBox="0 0 24 24">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                 </svg>
               </a>
@@ -78,10 +84,10 @@ export default function Footer() {
                 href="https://linkedin.com/in/kashi-kweyu"
                 target="_blank"
                 rel="noopener noreferrer"
-                className="p-2 bg-primary rounded-lg border border-border hover:border-primary hover:bg-primary/90 transition"
+                className="p-2 bg-accent rounded-lg border border-accent hover:opacity-90 transition"
                 aria-label="LinkedIn"
               >
-                <svg className="w-5 h-5 text-primary-foreground" fill="white" viewBox="0 0 24 24">
+                <svg className="w-5 h-5 text-white" fill="white" viewBox="0 0 24 24">
                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                 </svg>
               </a>
@@ -89,10 +95,10 @@ export default function Footer() {
                 href="https://instagram.com/kashi_kweyu"
                 target="_blank"
                 rel="noopener noreferrer"
-                className="p-2 bg-primary rounded-lg border border-border hover:border-primary hover:bg-primary/90 transition"
+                className="p-2 bg-accent rounded-lg border border-accent hover:opacity-90 transition"
                 aria-label="Instagram"
               >
-                <svg className="w-5 h-5 text-primary-foreground" fill="white" viewBox="0 0 24 24">
+                <svg className="w-5 h-5 text-white" fill="white" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </a>
@@ -100,23 +106,30 @@ export default function Footer() {
                 href="https://wa.me/256760637783"
                 target="_blank"
                 rel="noopener noreferrer"
-                className="p-2 bg-primary rounded-lg border border-border hover:border-primary hover:bg-primary/90 transition"
+                className="p-2 bg-accent rounded-lg border border-accent hover:opacity-90 transition"
                 aria-label="WhatsApp"
               >
-                <svg className="w-5 h-5 text-primary-foreground" fill="white" viewBox="0 0 24 24">
+                <svg className="w-5 h-5 text-white" fill="white" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
               </a>
             </div>
+
+            {showPreferences && (
+              <div className="mt-6">
+                <h4 className="font-semibold text-app mb-3">Preferences</h4>
+                <PreferencesPanel />
+              </div>
+            )}
           </div>
         </div>
 
-        <div className="mt-8 pt-8 border-t border-border text-center">
-          <p className="text-foreground-muted text-sm">
+        <div className="mt-8 pt-8 border-t border-app text-center">
+          <p className="text-muted-app text-sm">
             © {currentYear} Kashi Kweyu. Built with Next.js & Tailwind CSS.
           </p>
         </div>
       </div>
     </footer>
   )
-}
\ No newline at end of file
+}
diff --git a/components/Header.tsx b/components/Header.tsx
index 4d2a964..6776c3a 100644
--- a/components/Header.tsx
+++ b/components/Header.tsx
@@ -18,6 +18,7 @@ export default function Header() {
   const publicLinks = [
     { href: '/projects', label: 'Projects' },
     { href: '/services', label: 'Services' },
+    { href: '/memberships', label: 'Pricing' },
     { href: '/about', label: 'About' },
     { href: '/request', label: 'Request' },
   ]
@@ -25,6 +26,7 @@ export default function Header() {
   const authedLinks = [
     { href: '/dashboard', label: 'Dashboard' },
     { href: '/services', label: 'Services' },
+    { href: '/memberships', label: 'Pricing' },
     { href: '/about-developer', label: 'About Developer' },
     { href: '/request', label: 'Request' },
   ]
@@ -55,15 +57,15 @@ export default function Header() {
   }, [])
 
   return (
-    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
+    <header className="sticky top-0 z-50 bg-app backdrop-blur-md border-b border-app shadow-sm">
       <nav className="container mx-auto px-6 md:px-8 lg:px-12 py-4">
         <div className="flex items-center justify-between">
           <Link
             href="/"
-            className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition"
+            className="flex items-center gap-2 text-2xl font-bold accent hover:opacity-80 transition"
           >
-            <Code2 size={28} className="text-primary" />
-            <span className="text-primary">Kashi Kweyu</span>
+            <Code2 size={28} className="accent" />
+            <span className="accent">Kashi Kweyu</span>
           </Link>
 
           <div className="hidden md:flex items-center gap-6">
@@ -71,7 +73,7 @@ export default function Header() {
               <Link
                 key={link.href}
                 href={link.href}
-                className="text-foreground hover:text-primary transition font-medium"
+                className="text-app hover:text-[color:var(--primary)] transition font-medium"
               >
                 {link.label}
               </Link>
@@ -84,17 +86,17 @@ export default function Header() {
             {!isAuthed ? (
               <Link
                 href="/login"
-                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 transition font-medium"
+                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-accent-soft text-[color:var(--primary)] hover:opacity-90 transition font-medium"
               >
-                <UserIcon size={16} className="text-primary" />
-                <span className="text-sm text-primary">Login</span>
+                <UserIcon size={16} className="accent" />
+                <span className="text-sm">Login</span>
               </Link>
             ) : (
               <div className="hidden md:block relative" ref={dropdownRef}>
                 <button
                   type="button"
                   onClick={() => setDropdownOpen((v) => !v)}
-                  className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-full hover:bg-card-hover transition font-medium"
+                  className="flex items-center gap-2 px-3 py-2 surface-app border border-app rounded-full hover:bg-app transition font-medium text-app"
                   aria-haspopup="menu"
                   aria-expanded={dropdownOpen}
                 >
@@ -114,12 +116,12 @@ export default function Header() {
                 {dropdownOpen && (
                   <div
                     role="menu"
-                    className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-lg"
+                    className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-app surface-app shadow-lg"
                   >
                     <Link
                       href="/dashboard"
                       onClick={() => setDropdownOpen(false)}
-                      className="flex items-center gap-2 px-4 py-3 hover:bg-muted transition text-sm"
+                      className="flex items-center gap-2 px-4 py-3 hover:bg-app transition text-sm text-app"
                       role="menuitem"
                     >
                       <UserIcon size={16} />
@@ -129,7 +131,7 @@ export default function Header() {
                     <Link
                       href="/dashboard/settings"
                       onClick={() => setDropdownOpen(false)}
-                      className="flex items-center gap-2 px-4 py-3 hover:bg-muted transition text-sm"
+                      className="flex items-center gap-2 px-4 py-3 hover:bg-app transition text-sm text-app"
                       role="menuitem"
                     >
                       <Settings size={16} />
@@ -152,7 +154,7 @@ export default function Header() {
 
             <button
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
-              className="md:hidden p-2 rounded-lg bg-card border border-border hover:bg-card-hover transition"
+              className="md:hidden p-2 rounded-lg surface-app border border-app hover:bg-app transition text-app"
               aria-label="Toggle menu"
             >
               {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
@@ -161,14 +163,14 @@ export default function Header() {
         </div>
 
         {mobileMenuOpen && (
-          <div className="md:hidden mt-4 pt-4 border-t border-border">
+          <div className="md:hidden mt-4 pt-4 border-t border-app">
             <div className="flex flex-col gap-3">
               {navLinks.map((link) => (
                 <Link
                   key={link.href}
                   href={link.href}
                   onClick={() => setMobileMenuOpen(false)}
-                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-card rounded-lg transition font-medium"
+                  className="px-4 py-2 text-app hover:text-[color:var(--primary)] hover:bg-app rounded-lg transition font-medium"
                 >
                   {link.label}
                 </Link>
@@ -178,7 +180,7 @@ export default function Header() {
                 <Link
                   href="/login"
                   onClick={() => setMobileMenuOpen(false)}
-                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-center"
+                  className="px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition font-medium text-center"
                 >
                   Login
                 </Link>
@@ -187,7 +189,7 @@ export default function Header() {
                   <Link
                     href="/dashboard"
                     onClick={() => setMobileMenuOpen(false)}
-                    className="px-4 py-2 bg-card border border-border rounded-lg transition font-medium text-center"
+                    className="px-4 py-2 surface-app border border-app rounded-lg transition font-medium text-center text-app"
                   >
                     Dashboard
                   </Link>
@@ -195,7 +197,7 @@ export default function Header() {
                   <Link
                     href="/dashboard/settings"
                     onClick={() => setMobileMenuOpen(false)}
-                    className="px-4 py-2 bg-card border border-border rounded-lg transition font-medium text-center"
+                    className="px-4 py-2 surface-app border border-app rounded-lg transition font-medium text-center text-app"
                   >
                     Settings
                   </Link>
diff --git a/components/ImageUploadCrop.tsx b/components/ImageUploadCrop.tsx
new file mode 100644
index 0000000..a946c5b
--- /dev/null
+++ b/components/ImageUploadCrop.tsx
@@ -0,0 +1,288 @@
+'use client'
+
+import { useState, useCallback, useRef, useEffect } from 'react'
+import Cropper from 'react-easy-crop'
+import { Upload, Crop, X, Check } from 'lucide-react'
+import { Spinner } from './ui/Spinner'
+
+interface Point {
+  x: number
+  y: number
+}
+
+interface Area {
+  x: number
+  y: number
+  width: number
+  height: number
+}
+
+interface ImageUploadCropProps {
+  onImageCropped: (imageUrl: string) => void
+  currentImage?: string
+  aspectRatio?: number // 1 for square, 16/9 for landscape, etc.
+  label?: string
+}
+
+// Helper function to create cropped image
+const createCroppedImage = async (
+  imageSrc: string,
+  pixelCrop: Area
+): Promise<Blob> => {
+  const image = new Image()
+  image.src = imageSrc
+  await new Promise((resolve) => {
+    image.onload = resolve
+  })
+
+  const canvas = document.createElement('canvas')
+  const ctx = canvas.getContext('2d')!
+
+  canvas.width = pixelCrop.width
+  canvas.height = pixelCrop.height
+
+  ctx.drawImage(
+    image,
+    pixelCrop.x,
+    pixelCrop.y,
+    pixelCrop.width,
+    pixelCrop.height,
+    0,
+    0,
+    pixelCrop.width,
+    pixelCrop.height
+  )
+
+  return new Promise((resolve) => {
+    canvas.toBlob((blob) => {
+      resolve(blob!)
+    }, 'image/jpeg', 0.95)
+  })
+}
+
+export function ImageUploadCrop({
+  onImageCropped,
+  currentImage,
+  aspectRatio = 1, // Always square for avatars
+  label = 'Upload Image'
+}: ImageUploadCropProps) {
+  const [isOpen, setIsOpen] = useState(false)
+  const [imageSrc, setImageSrc] = useState<string | null>(null)
+  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
+  const [zoom, setZoom] = useState(1)
+  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
+  const [uploading, setUploading] = useState(false)
+  const fileInputRef = useRef<HTMLInputElement>(null)
+
+  // Lock body scroll when modal is open
+  useEffect(() => {
+    if (isOpen) {
+      document.body.style.overflow = 'hidden'
+    } else {
+      document.body.style.overflow = 'unset'
+    }
+    return () => {
+      document.body.style.overflow = 'unset'
+    }
+  }, [isOpen])
+
+  const onCropComplete = useCallback(
+    (croppedArea: Area, croppedAreaPixels: Area) => {
+      setCroppedAreaPixels(croppedAreaPixels)
+    },
+    []
+  )
+
+  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
+    const file = e.target.files?.[0]
+    if (file) {
+      if (file.size > 10 * 1024 * 1024) {
+        alert('Image must be less than 10MB')
+        return
+      }
+
+      const reader = new FileReader()
+      reader.onload = () => {
+        setImageSrc(reader.result as string)
+        setIsOpen(true)
+      }
+      reader.readAsDataURL(file)
+    }
+  }
+
+  const handleOpenModal = () => {
+    fileInputRef.current?.click()
+  }
+
+  const handleCropSave = async () => {
+    if (!imageSrc || !croppedAreaPixels) return
+
+    setUploading(true)
+
+    try {
+      // Create cropped image blob
+      const croppedBlob = await createCroppedImage(imageSrc, croppedAreaPixels)
+
+      // Upload to server
+      const formData = new FormData()
+      formData.append('image', croppedBlob, 'avatar.jpg')
+
+      const response = await fetch('/api/upload/avatar', {
+        method: 'POST',
+        body: formData,
+      })
+
+      const data = await response.json()
+
+      if (data.success) {
+        onImageCropped(data.url)
+        setImageSrc(null)
+        setCrop({ x: 0, y: 0 })
+        setZoom(1)
+        setIsOpen(false)
+      } else {
+        alert('Failed to upload image')
+      }
+    } catch (error) {
+      console.error('Error uploading image:', error)
+      alert('Failed to upload image')
+    } finally {
+      setUploading(false)
+    }
+  }
+
+  const handleCancel = () => {
+    setImageSrc(null)
+    setCrop({ x: 0, y: 0 })
+    setZoom(1)
+    setIsOpen(false)
+  }
+
+  return (
+    <>
+      <div className="space-y-4">
+        <label className="block text-sm font-medium text-foreground mb-2">
+          {label}
+        </label>
+
+        {/* Current Image Preview */}
+        {currentImage && (
+          <div className="relative inline-block">
+            <img
+              src={currentImage}
+              alt="Current avatar"
+              className="w-32 h-32 rounded-full object-cover border-2 border-border"
+            />
+          </div>
+        )}
+
+        {/* Upload Button */}
+        <div>
+          <input
+            ref={fileInputRef}
+            type="file"
+            accept="image/*"
+            onChange={handleFileChange}
+            className="hidden"
+          />
+          <button
+            type="button"
+            onClick={handleOpenModal}
+            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
+          >
+            <Upload size={18} />
+            {currentImage ? 'Change Image' : 'Upload Image'}
+          </button>
+          <p className="text-xs text-muted-foreground mt-2">
+            Max size: 10MB. Supported formats: JPG, PNG, GIF
+          </p>
+        </div>
+      </div>
+
+      {/* Modal */}
+      {isOpen && imageSrc && (
+        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
+          <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
+            {/* Modal Header */}
+            <div className="flex items-center justify-between p-6 border-b border-border">
+              <div>
+                <h2 className="text-2xl font-bold text-foreground">Crop Image</h2>
+                <p className="text-sm text-muted-foreground mt-1">
+                  Adjust the crop area and zoom to get the perfect image
+                </p>
+              </div>
+              <button
+                onClick={handleCancel}
+                className="p-2 hover:bg-muted rounded-lg transition"
+              >
+                <X size={24} />
+              </button>
+            </div>
+
+            {/* Modal Body */}
+            <div className="p-6 space-y-6 max-h-[calc(90vh-180px)] overflow-y-auto">
+              {/* Cropper */}
+              <div className="relative w-full h-[500px] bg-background rounded-lg overflow-hidden border border-border">
+                <Cropper
+                  image={imageSrc}
+                  crop={crop}
+                  zoom={zoom}
+                  aspect={1}
+                  onCropChange={setCrop}
+                  onZoomChange={setZoom}
+                  onCropComplete={onCropComplete}
+                  cropShape="round"
+                />
+              </div>
+
+              {/* Zoom Slider */}
+              <div className="space-y-2">
+                <label className="text-sm font-medium text-foreground">Zoom: {zoom.toFixed(1)}x</label>
+                <input
+                  type="range"
+                  min={1}
+                  max={3}
+                  step={0.1}
+                  value={zoom}
+                  onChange={(e) => setZoom(Number(e.target.value))}
+                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
+                />
+              </div>
+            </div>
+
+            {/* Modal Footer */}
+            <div className="flex gap-3 p-6 border-t border-border bg-muted/30">
+              <button
+                type="button"
+                onClick={handleCropSave}
+                disabled={uploading}
+                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition disabled:opacity-50 font-medium"
+              >
+                {uploading ? (
+                  <>
+                    <Spinner size="sm" />
+                    Uploading...
+                  </>
+                ) : (
+                  <>
+                    <Check size={20} />
+                    Save Cropped Image
+                  </>
+                )}
+              </button>
+              <button
+                type="button"
+                onClick={handleCancel}
+                disabled={uploading}
+                className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/70 transition disabled:opacity-50 font-medium"
+              >
+                <X size={20} />
+                Cancel
+              </button>
+            </div>
+          </div>
+        </div>
+      )}
+    </>
+  )
+}
diff --git a/components/PageRenderer.tsx b/components/PageRenderer.tsx
deleted file mode 100644
index 80a24db..0000000
--- a/components/PageRenderer.tsx
+++ /dev/null
@@ -1,134 +0,0 @@
-'use client'
-
-import { useEffect, useState } from 'react'
-import { Spinner } from '@/components/ui/Spinner'
-import { Hero } from '@/components/sections/Hero'
-import { RichText } from '@/components/sections/RichText'
-import { ProjectGrid } from '@/components/sections/ProjectGrid'
-import { CTA } from '@/components/sections/CTA'
-import { FAQ } from '@/components/sections/FAQ'
-import { ContactBlock } from '@/components/sections/ContactBlock'
-import { Cards } from '@/components/sections/Cards'
-
-interface PageSection {
-  id: string
-  type: string
-  data: any
-  order: number
-}
-
-interface Page {
-  id: string
-  slug: string
-  title: string
-  status: string
-  seoTitle?: string | null
-  seoDescription?: string | null
-  sections: PageSection[]
-}
-
-interface PageRendererProps {
-  slug: string
-}
-
-export function PageRenderer({ slug }: PageRendererProps) {
-  const [page, setPage] = useState<Page | null>(null)
-  const [loading, setLoading] = useState(true)
-  const [error, setError] = useState<string | null>(null)
-
-  useEffect(() => {
-    fetchPage()
-  }, [slug])
-
-  const fetchPage = async () => {
-    try {
-      setLoading(true)
-      setError(null)
-      const response = await fetch(`/api/pages/${slug}`)
-      const data = await response.json()
-
-      if (data.success) {
-        setPage(data.data)
-
-        // Set page title and meta tags
-        if (data.data.seoTitle) {
-          document.title = data.data.seoTitle
-        } else {
-          document.title = data.data.title
-        }
-
-        if (data.data.seoDescription) {
-          const metaDescription = document.querySelector('meta[name="description"]')
-          if (metaDescription) {
-            metaDescription.setAttribute('content', data.data.seoDescription)
-          }
-        }
-      } else {
-        setError(data.error || 'Page not found')
-      }
-    } catch (err) {
-      console.error('Error fetching page:', err)
-      setError('Failed to load page')
-    } finally {
-      setLoading(false)
-    }
-  }
-
-  const renderSection = (section: PageSection) => {
-    switch (section.type) {
-      case 'HERO':
-        return <Hero key={section.id} data={section.data} />
-      case 'RICH_TEXT':
-        return <RichText key={section.id} data={section.data} />
-      case 'PROJECT_GRID':
-        return <ProjectGrid key={section.id} data={section.data} />
-      case 'CTA':
-        return <CTA key={section.id} data={section.data} />
-      case 'FAQ':
-        return <FAQ key={section.id} data={section.data} />
-      case 'CONTACT_BLOCK':
-        return <ContactBlock key={section.id} data={section.data} />
-      case 'CARDS':
-        return <Cards key={section.id} data={section.data} />
-      default:
-        console.warn(`Unknown section type: ${section.type}`)
-        return null
-    }
-  }
-
-  if (loading) {
-    return (
-      <div className="flex items-center justify-center min-h-[60vh]">
-        <Spinner size="lg" />
-      </div>
-    )
-  }
-
-  if (error || !page) {
-    return (
-      <div className="flex items-center justify-center min-h-[60vh]">
-        <div className="text-center">
-          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
-          <p className="text-xl text-muted-foreground mb-6">
-            {error || 'Page not found'}
-          </p>
-          <a
-            href="/"
-            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg
-              font-semibold hover:bg-primary/90 transition-colors"
-          >
-            Go Home
-          </a>
-        </div>
-      </div>
-    )
-  }
-
-  return (
-    <div className="min-h-screen">
-      {page.sections
-        .sort((a, b) => a.order - b.order)
-        .map((section) => renderSection(section))}
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/CTAForm.tsx b/components/admin/section-forms/CTAForm.tsx
deleted file mode 100644
index ec6a1dd..0000000
--- a/components/admin/section-forms/CTAForm.tsx
+++ /dev/null
@@ -1,58 +0,0 @@
-'use client'
-
-import { SectionFormProps, CTAData } from '@/lib/sections/types'
-import { Input } from '@/components/ui/Input'
-import { StyledSelect } from '@/components/ui/StyledSelect'
-
-export function CTAForm({ data, onChange }: SectionFormProps<CTAData>) {
-  return (
-    <div className="space-y-4">
-      <Input
-        label="Title"
-        value={data.title}
-        onChange={(e) => onChange({ ...data, title: e.target.value })}
-        required
-        placeholder="e.g., Ready to start your project?"
-      />
-
-      <div>
-        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
-          Description
-        </label>
-        <textarea
-          value={data.description || ''}
-          onChange={(e) => onChange({ ...data, description: e.target.value })}
-          rows={3}
-          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 text-sm"
-          placeholder="Optional description"
-        />
-      </div>
-
-      <Input
-        label="Button Text"
-        value={data.buttonText}
-        onChange={(e) => onChange({ ...data, buttonText: e.target.value })}
-        required
-        placeholder="e.g., Get Started"
-      />
-
-      <Input
-        label="Button Link"
-        value={data.buttonLink}
-        onChange={(e) => onChange({ ...data, buttonLink: e.target.value })}
-        required
-        placeholder="e.g., /request"
-      />
-
-      <StyledSelect
-        label="Variant"
-        value={data.variant || 'primary'}
-        onChange={(e) => onChange({ ...data, variant: e.target.value as 'primary' | 'secondary' | 'gradient' })}
-      >
-        <option value="primary">Primary (Blue accent)</option>
-        <option value="secondary">Secondary (Gray accent)</option>
-        <option value="gradient">Gradient (Bold blue gradient with decorative effects)</option>
-      </StyledSelect>
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/CardsForm.tsx b/components/admin/section-forms/CardsForm.tsx
deleted file mode 100644
index 52ab513..0000000
--- a/components/admin/section-forms/CardsForm.tsx
+++ /dev/null
@@ -1,117 +0,0 @@
-'use client'
-
-import { SectionFormProps, CardsData, Card } from '@/lib/sections/types'
-import { Input } from '@/components/ui/Input'
-import { StyledSelect } from '@/components/ui/StyledSelect'
-import { Button } from '@/components/ui/Button'
-import { Trash2, Plus } from 'lucide-react'
-
-export function CardsForm({ data, onChange }: SectionFormProps<CardsData>) {
-  const addCard = () => {
-    onChange({
-      ...data,
-      cards: [...data.cards, { title: '', description: '', icon: '', link: '' }],
-    })
-  }
-
-  const removeCard = (index: number) => {
-    onChange({
-      ...data,
-      cards: data.cards.filter((_, i) => i !== index),
-    })
-  }
-
-  const updateCard = (index: number, field: keyof Card, value: string) => {
-    const newCards = [...data.cards]
-    newCards[index] = { ...newCards[index], [field]: value }
-    onChange({ ...data, cards: newCards })
-  }
-
-  return (
-    <div className="space-y-4">
-      <Input
-        label="Section Title"
-        value={data.title || ''}
-        onChange={(e) => onChange({ ...data, title: e.target.value })}
-        placeholder="e.g., Our Services"
-      />
-
-      <StyledSelect
-        label="Columns"
-        value={data.columns?.toString() || '3'}
-        onChange={(e) => onChange({ ...data, columns: parseInt(e.target.value) as 2 | 3 | 4 })}
-      >
-        <option value="2">2 Columns</option>
-        <option value="3">3 Columns</option>
-        <option value="4">4 Columns</option>
-      </StyledSelect>
-
-      <div className="space-y-4">
-        <div className="flex items-center justify-between">
-          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
-            Cards
-          </label>
-          <Button onClick={addCard} variant="outline" size="sm">
-            <Plus className="w-4 h-4 mr-1" />
-            Add Card
-          </Button>
-        </div>
-
-        {data.cards.map((card, index) => (
-          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-3">
-            <div className="flex items-center justify-between mb-2">
-              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
-                Card {index + 1}
-              </span>
-              <button
-                onClick={() => removeCard(index)}
-                className="text-red-600 hover:text-red-700 dark:text-red-400"
-              >
-                <Trash2 className="w-4 h-4" />
-              </button>
-            </div>
-
-            <Input
-              label="Title"
-              value={card.title}
-              onChange={(e) => updateCard(index, 'title', e.target.value)}
-              required
-            />
-
-            <div>
-              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
-                Description
-              </label>
-              <textarea
-                value={card.description}
-                onChange={(e) => updateCard(index, 'description', e.target.value)}
-                rows={3}
-                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 text-sm"
-              />
-            </div>
-
-            <Input
-              label="Icon (optional)"
-              value={card.icon || ''}
-              onChange={(e) => updateCard(index, 'icon', e.target.value)}
-              placeholder="e.g., ✨"
-            />
-
-            <Input
-              label="Link (optional)"
-              value={card.link || ''}
-              onChange={(e) => updateCard(index, 'link', e.target.value)}
-              placeholder="e.g., /services/web"
-            />
-          </div>
-        ))}
-
-        {data.cards.length === 0 && (
-          <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
-            No cards yet. Click "Add Card" to get started.
-          </p>
-        )}
-      </div>
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/ContactBlockForm.tsx b/components/admin/section-forms/ContactBlockForm.tsx
deleted file mode 100644
index 9a71e3f..0000000
--- a/components/admin/section-forms/ContactBlockForm.tsx
+++ /dev/null
@@ -1,59 +0,0 @@
-'use client'
-
-import { SectionFormProps, ContactBlockData } from '@/lib/sections/types'
-import { Input } from '@/components/ui/Input'
-
-export function ContactBlockForm({ data, onChange }: SectionFormProps<ContactBlockData>) {
-  return (
-    <div className="space-y-4">
-      <Input
-        label="Section Title"
-        value={data.title || ''}
-        onChange={(e) => onChange({ ...data, title: e.target.value })}
-        placeholder="e.g., Get in Touch"
-      />
-
-      <div>
-        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
-          Description
-        </label>
-        <textarea
-          value={data.description || ''}
-          onChange={(e) => onChange({ ...data, description: e.target.value })}
-          rows={3}
-          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 text-sm"
-          placeholder="Optional description"
-        />
-      </div>
-
-      <Input
-        label="Email"
-        type="email"
-        value={data.email || ''}
-        onChange={(e) => onChange({ ...data, email: e.target.value })}
-        placeholder="your@email.com"
-      />
-
-      <Input
-        label="Phone"
-        type="tel"
-        value={data.phone || ''}
-        onChange={(e) => onChange({ ...data, phone: e.target.value })}
-        placeholder="+1 (555) 123-4567"
-      />
-
-      <div className="flex items-center gap-2">
-        <input
-          type="checkbox"
-          id="showForm"
-          checked={data.showForm !== false}
-          onChange={(e) => onChange({ ...data, showForm: e.target.checked })}
-          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
-        />
-        <label htmlFor="showForm" className="text-sm text-gray-700 dark:text-gray-300">
-          Show contact form
-        </label>
-      </div>
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/FAQForm.tsx b/components/admin/section-forms/FAQForm.tsx
deleted file mode 100644
index 7cbead5..0000000
--- a/components/admin/section-forms/FAQForm.tsx
+++ /dev/null
@@ -1,95 +0,0 @@
-'use client'
-
-import { SectionFormProps, FAQData, FAQItem } from '@/lib/sections/types'
-import { Input } from '@/components/ui/Input'
-import { Button } from '@/components/ui/Button'
-import { Trash2, Plus } from 'lucide-react'
-
-export function FAQForm({ data, onChange }: SectionFormProps<FAQData>) {
-  const addItem = () => {
-    onChange({
-      ...data,
-      items: [...data.items, { question: '', answer: '' }],
-    })
-  }
-
-  const removeItem = (index: number) => {
-    onChange({
-      ...data,
-      items: data.items.filter((_, i) => i !== index),
-    })
-  }
-
-  const updateItem = (index: number, field: keyof FAQItem, value: string) => {
-    const newItems = [...data.items]
-    newItems[index] = { ...newItems[index], [field]: value }
-    onChange({ ...data, items: newItems })
-  }
-
-  return (
-    <div className="space-y-4">
-      <Input
-        label="Section Title"
-        value={data.title || ''}
-        onChange={(e) => onChange({ ...data, title: e.target.value })}
-        placeholder="e.g., Frequently Asked Questions"
-      />
-
-      <div className="space-y-4">
-        <div className="flex items-center justify-between">
-          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
-            Questions & Answers
-          </label>
-          <Button onClick={addItem} variant="outline" size="sm">
-            <Plus className="w-4 h-4 mr-1" />
-            Add FAQ
-          </Button>
-        </div>
-
-        {data.items.map((item, index) => (
-          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-3">
-            <div className="flex items-center justify-between mb-2">
-              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
-                FAQ {index + 1}
-              </span>
-              <button
-                onClick={() => removeItem(index)}
-                className="text-red-600 hover:text-red-700 dark:text-red-400"
-              >
-                <Trash2 className="w-4 h-4" />
-              </button>
-            </div>
-
-            <Input
-              label="Question"
-              value={item.question}
-              onChange={(e) => updateItem(index, 'question', e.target.value)}
-              required
-              placeholder="What is your question?"
-            />
-
-            <div>
-              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
-                Answer
-              </label>
-              <textarea
-                value={item.answer}
-                onChange={(e) => updateItem(index, 'answer', e.target.value)}
-                rows={4}
-                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 text-sm"
-                placeholder="Provide a detailed answer..."
-                required
-              />
-            </div>
-          </div>
-        ))}
-
-        {data.items.length === 0 && (
-          <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
-            No FAQs yet. Click "Add FAQ" to get started.
-          </p>
-        )}
-      </div>
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/HeroForm.tsx b/components/admin/section-forms/HeroForm.tsx
deleted file mode 100644
index a4f2480..0000000
--- a/components/admin/section-forms/HeroForm.tsx
+++ /dev/null
@@ -1,36 +0,0 @@
-'use client'
-
-import { SectionFormProps, HeroData } from '@/lib/sections/types'
-import { Input } from '@/components/ui/Input'
-
-export function HeroForm({ data, onChange }: SectionFormProps<HeroData>) {
-  return (
-    <div className="space-y-4">
-      <Input
-        label="Title"
-        value={data.title}
-        onChange={(e) => onChange({ ...data, title: e.target.value })}
-        required
-        placeholder="Enter hero title"
-      />
-      <Input
-        label="Subtitle"
-        value={data.subtitle || ''}
-        onChange={(e) => onChange({ ...data, subtitle: e.target.value })}
-        placeholder="Optional subtitle"
-      />
-      <Input
-        label="CTA Button Text"
-        value={data.ctaText || ''}
-        onChange={(e) => onChange({ ...data, ctaText: e.target.value })}
-        placeholder="e.g., Get Started"
-      />
-      <Input
-        label="CTA Button Link"
-        value={data.ctaLink || ''}
-        onChange={(e) => onChange({ ...data, ctaLink: e.target.value })}
-        placeholder="e.g., /contact"
-      />
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/ProjectGridForm.tsx b/components/admin/section-forms/ProjectGridForm.tsx
deleted file mode 100644
index 0a20ee9..0000000
--- a/components/admin/section-forms/ProjectGridForm.tsx
+++ /dev/null
@@ -1,50 +0,0 @@
-'use client'
-
-import { SectionFormProps, ProjectGridData } from '@/lib/sections/types'
-import { Input } from '@/components/ui/Input'
-import { StyledSelect } from '@/components/ui/StyledSelect'
-
-export function ProjectGridForm({ data, onChange }: SectionFormProps<ProjectGridData>) {
-  return (
-    <div className="space-y-4">
-      <Input
-        label="Section Title"
-        value={data.title || ''}
-        onChange={(e) => onChange({ ...data, title: e.target.value })}
-        placeholder="e.g., Featured Projects"
-      />
-
-      <StyledSelect
-        label="Filter by Category"
-        value={data.filter || 'ALL'}
-        onChange={(e) => onChange({ ...data, filter: e.target.value as 'ALL' | 'WEB' | 'MOBILE' | 'DESIGN' })}
-      >
-        <option value="ALL">All Projects</option>
-        <option value="WEB">Web Projects</option>
-        <option value="MOBILE">Mobile Projects</option>
-        <option value="DESIGN">Design Projects</option>
-      </StyledSelect>
-
-      <Input
-        label="Limit (optional)"
-        type="number"
-        value={data.limit?.toString() || ''}
-        onChange={(e) => onChange({ ...data, limit: e.target.value ? parseInt(e.target.value) : undefined })}
-        placeholder="Leave empty for all"
-      />
-
-      <div className="flex items-center gap-2">
-        <input
-          type="checkbox"
-          id="includeDigitalProducts"
-          checked={data.includeDigitalProducts || false}
-          onChange={(e) => onChange({ ...data, includeDigitalProducts: e.target.checked })}
-          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
-        />
-        <label htmlFor="includeDigitalProducts" className="text-sm text-gray-700 dark:text-gray-300">
-          Include digital products
-        </label>
-      </div>
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/RichTextForm.tsx b/components/admin/section-forms/RichTextForm.tsx
deleted file mode 100644
index 83de8f3..0000000
--- a/components/admin/section-forms/RichTextForm.tsx
+++ /dev/null
@@ -1,25 +0,0 @@
-'use client'
-
-import { SectionFormProps, RichTextData } from '@/lib/sections/types'
-
-export function RichTextForm({ data, onChange }: SectionFormProps<RichTextData>) {
-  return (
-    <div className="space-y-4">
-      <div>
-        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
-          Content (Markdown)
-        </label>
-        <textarea
-          value={data.content}
-          onChange={(e) => onChange({ ...data, content: e.target.value })}
-          rows={12}
-          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 font-mono text-sm"
-          placeholder="Enter markdown content..."
-        />
-        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
-          Supports GitHub Flavored Markdown: headings, lists, code blocks, links, etc.
-        </p>
-      </div>
-    </div>
-  )
-}
diff --git a/components/admin/section-forms/index.ts b/components/admin/section-forms/index.ts
deleted file mode 100644
index f5ad1b3..0000000
--- a/components/admin/section-forms/index.ts
+++ /dev/null
@@ -1,7 +0,0 @@
-export { HeroForm } from './HeroForm'
-export { RichTextForm } from './RichTextForm'
-export { ProjectGridForm } from './ProjectGridForm'
-export { CardsForm } from './CardsForm'
-export { CTAForm } from './CTAForm'
-export { FAQForm } from './FAQForm'
-export { ContactBlockForm } from './ContactBlockForm'
diff --git a/components/home/HeroFormal.tsx b/components/home/HeroFormal.tsx
new file mode 100644
index 0000000..56e29d0
--- /dev/null
+++ b/components/home/HeroFormal.tsx
@@ -0,0 +1,68 @@
+import Link from 'next/link'
+import { ArrowRight } from 'lucide-react'
+import { Button } from '@/components/ui/Button'
+
+interface HeroProps {
+  title: string
+  highlight: string
+  subtitle: string
+  primaryCtaLabel: string
+  primaryCtaHref: string
+  secondaryCtaLabel: string
+  secondaryCtaHref: string
+}
+
+export function HeroFormal({
+  title,
+  highlight,
+  subtitle,
+  primaryCtaLabel,
+  primaryCtaHref,
+  secondaryCtaLabel,
+  secondaryCtaHref,
+}: HeroProps) {
+  return (
+    <section className="max-w-6xl mx-auto px-4">
+      <div className="grid items-center gap-10 rounded-3xl border border-app surface-app px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-12">
+        <div className="space-y-6">
+          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-app">
+            Available for new projects
+          </p>
+          <h1 className="text-4xl md:text-6xl font-bold text-app leading-tight">
+            {title} <span className="accent">{highlight}</span>
+          </h1>
+          <p className="text-lg md:text-xl text-muted-app max-w-xl">
+            {subtitle}
+          </p>
+          <div className="flex flex-wrap gap-4">
+            <Link href={primaryCtaHref}>
+              <Button variant="primary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
+                {primaryCtaLabel}
+              </Button>
+            </Link>
+            <Link href={secondaryCtaHref}>
+              <Button variant="outline" size="lg">
+                {secondaryCtaLabel}
+              </Button>
+            </Link>
+          </div>
+        </div>
+
+        <div className="space-y-4">
+          <div className="rounded-2xl border border-app bg-app px-5 py-4">
+            <p className="text-sm font-semibold text-app">Focus areas</p>
+            <p className="text-sm text-muted-app mt-2">
+              Web apps, product UI, and dependable engineering handoffs.
+            </p>
+          </div>
+          <div className="rounded-2xl border border-app bg-app px-5 py-4">
+            <p className="text-sm font-semibold text-app">Working style</p>
+            <p className="text-sm text-muted-app mt-2">
+              Clear milestones, calm communication, and polished delivery.
+            </p>
+          </div>
+        </div>
+      </div>
+    </section>
+  )
+}
diff --git a/components/home/HeroSwitch.tsx b/components/home/HeroSwitch.tsx
new file mode 100644
index 0000000..f866360
--- /dev/null
+++ b/components/home/HeroSwitch.tsx
@@ -0,0 +1,25 @@
+'use client'
+
+import { usePreferences } from '@/lib/preferences/PreferencesContext'
+import { HeroFormal } from './HeroFormal'
+import { HeroVibey } from './HeroVibey'
+
+interface HeroSwitchProps {
+  title: string
+  highlight: string
+  subtitle: string
+  primaryCtaLabel: string
+  primaryCtaHref: string
+  secondaryCtaLabel: string
+  secondaryCtaHref: string
+}
+
+export function HeroSwitch(props: HeroSwitchProps) {
+  const { preferences } = usePreferences()
+
+  if (preferences.mode === 'vibey') {
+    return <HeroVibey {...props} />
+  }
+
+  return <HeroFormal {...props} />
+}
diff --git a/components/home/HeroVibey.tsx b/components/home/HeroVibey.tsx
new file mode 100644
index 0000000..96c0348
--- /dev/null
+++ b/components/home/HeroVibey.tsx
@@ -0,0 +1,66 @@
+import Link from 'next/link'
+import { ArrowRight } from 'lucide-react'
+import { Button } from '@/components/ui/Button'
+
+interface HeroProps {
+  title: string
+  highlight: string
+  subtitle: string
+  primaryCtaLabel: string
+  primaryCtaHref: string
+  secondaryCtaLabel: string
+  secondaryCtaHref: string
+}
+
+export function HeroVibey({
+  title,
+  highlight,
+  subtitle,
+  primaryCtaLabel,
+  primaryCtaHref,
+  secondaryCtaLabel,
+  secondaryCtaHref,
+}: HeroProps) {
+  return (
+    <section className="max-w-6xl mx-auto px-4">
+      <div className="relative overflow-hidden rounded-3xl border border-app bg-gradient-to-br from-primary/10 via-transparent to-primary/30 px-6 py-14 md:px-12">
+        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
+        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
+
+        <div className="relative z-10 space-y-6">
+          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-muted-app">
+            <span className="rounded-full border border-app bg-app px-3 py-1">Fresh ideas</span>
+            <span className="rounded-full border border-app bg-app px-3 py-1">Bold builds</span>
+          </div>
+
+          <h1 className="text-4xl md:text-6xl font-bold text-app leading-tight">
+            {title} <span className="accent">{highlight}</span>
+          </h1>
+          <p className="text-lg md:text-2xl text-muted-app max-w-2xl">
+            {subtitle}
+          </p>
+
+          <div className="flex flex-wrap gap-4">
+            <Link href={primaryCtaHref}>
+              <Button variant="primary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
+                {primaryCtaLabel}
+              </Button>
+            </Link>
+            <Link href={secondaryCtaHref}>
+              <Button variant="outline" size="lg">
+                {secondaryCtaLabel}
+              </Button>
+            </Link>
+          </div>
+
+          <div className="flex flex-wrap gap-3 text-sm text-muted-app">
+            <span className="rounded-full border border-app bg-app px-3 py-1">Next.js</span>
+            <span className="rounded-full border border-app bg-app px-3 py-1">Tailwind</span>
+            <span className="rounded-full border border-app bg-app px-3 py-1">Product Design</span>
+            <span className="rounded-full border border-app bg-app px-3 py-1">Performance</span>
+          </div>
+        </div>
+      </div>
+    </section>
+  )
+}
diff --git a/components/home/MemberHomeTop.tsx b/components/home/MemberHomeTop.tsx
new file mode 100644
index 0000000..1138057
--- /dev/null
+++ b/components/home/MemberHomeTop.tsx
@@ -0,0 +1,170 @@
+'use client'
+
+import { useSession } from 'next-auth/react'
+import { useState, useEffect } from 'react'
+import Link from 'next/link'
+import { ArrowRight, Clock, CreditCard, FileText } from 'lucide-react'
+import { Spinner } from '@/components/ui/Spinner'
+
+interface MembershipSummary {
+  tier: string
+  status: string
+  totalCredits: number
+  usedCredits: number
+  remainingCredits: number
+  endDate: string
+}
+
+interface MeSummaryData {
+  stats: {
+    licensesCount: number
+    requestsCount: number
+    pendingRequestsCount: number
+  }
+  membership: MembershipSummary | null
+}
+
+function formatResetsIn(endDate?: string | null): string {
+  if (!endDate) return 'Unknown'
+  const end = new Date(endDate)
+  const now = new Date()
+  const diffTime = end.getTime() - now.getTime()
+  if (diffTime <= 0) return 'Expired'
+  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
+  if (diffDays === 1) return '1 day'
+  if (diffDays < 30) return `${diffDays} days`
+  const diffMonths = Math.round(diffDays / 30)
+  return `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`
+}
+
+export function MemberHomeTop() {
+  const { data: session, status } = useSession()
+  const [data, setData] = useState<MeSummaryData | null>(null)
+  const [loading, setLoading] = useState(true)
+
+  useEffect(() => {
+    if (status === 'authenticated') {
+      fetch('/api/me/summary')
+        .then((res) => res.json())
+        .then((json) => {
+          if (json.success && json.data) {
+            setData(json.data)
+          }
+        })
+        .catch((err) => {
+          console.error('Failed to fetch member summary:', err)
+        })
+        .finally(() => {
+          setLoading(false)
+        })
+    } else if (status === 'unauthenticated') {
+      setLoading(false)
+    }
+  }, [status])
+
+  // Return null if not authenticated (show normal homepage)
+  if (status !== 'authenticated') {
+    return null
+  }
+
+  const firstName = session?.user?.name?.split(' ')[0] || 'there'
+
+  return (
+    <section className="max-w-6xl mx-auto px-4 mb-12">
+      <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
+        {loading ? (
+          <div className="flex items-center justify-center py-8">
+            <Spinner size="sm" />
+          </div>
+        ) : (
+          <div className="space-y-6">
+            {/* Welcome Header */}
+            <div>
+              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
+                Welcome back, {firstName}!
+              </h2>
+              <p className="text-muted-foreground">
+                Here's a quick overview of your account
+              </p>
+            </div>
+
+            {/* Status Pills */}
+            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
+              {/* Pending Requests */}
+              <div className="bg-muted rounded-xl p-4">
+                <div className="flex items-center gap-3">
+                  <div className="p-2 bg-primary/10 rounded-lg">
+                    <FileText className="text-primary" size={20} />
+                  </div>
+                  <div>
+                    <p className="text-sm text-muted-foreground">Pending Requests</p>
+                    <p className="text-xl font-bold text-foreground">
+                      {data?.stats.pendingRequestsCount ?? 0}
+                    </p>
+                  </div>
+                </div>
+              </div>
+
+              {/* Credits Remaining */}
+              <div className="bg-muted rounded-xl p-4">
+                <div className="flex items-center gap-3">
+                  <div className="p-2 bg-primary/10 rounded-lg">
+                    <CreditCard className="text-primary" size={20} />
+                  </div>
+                  <div>
+                    <p className="text-sm text-muted-foreground">Credits</p>
+                    <p className="text-xl font-bold text-foreground">
+                      {data?.membership?.remainingCredits ?? 'Not set'}
+                    </p>
+                  </div>
+                </div>
+              </div>
+
+              {/* Resets In */}
+              <div className="bg-muted rounded-xl p-4">
+                <div className="flex items-center gap-3">
+                  <div className="p-2 bg-primary/10 rounded-lg">
+                    <Clock className="text-primary" size={20} />
+                  </div>
+                  <div>
+                    <p className="text-sm text-muted-foreground">Resets In</p>
+                    <p className="text-xl font-bold text-foreground">
+                      {data?.membership
+                        ? formatResetsIn(data.membership.endDate)
+                        : 'No plan'}
+                    </p>
+                  </div>
+                </div>
+              </div>
+            </div>
+
+            {/* Quick Actions */}
+            <div className="flex flex-wrap gap-3">
+              <Link href="/dashboard">
+                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
+                  Dashboard
+                  <ArrowRight size={16} />
+                </button>
+              </Link>
+              <Link href="/dashboard/requests">
+                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg hover:bg-muted transition font-medium text-foreground">
+                  Requests
+                </button>
+              </Link>
+              <Link href="/dashboard/downloads">
+                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg hover:bg-muted transition font-medium text-foreground">
+                  Downloads
+                </button>
+              </Link>
+              <Link href="/request">
+                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg hover:bg-muted transition font-medium text-foreground">
+                  Request Service
+                </button>
+              </Link>
+            </div>
+          </div>
+        )}
+      </div>
+    </section>
+  )
+}
diff --git a/components/preferences/PreferencesGate.tsx b/components/preferences/PreferencesGate.tsx
new file mode 100644
index 0000000..e669771
--- /dev/null
+++ b/components/preferences/PreferencesGate.tsx
@@ -0,0 +1,50 @@
+'use client'
+
+import { useEffect, useState } from 'react'
+import { usePreferences } from '@/lib/preferences/PreferencesContext'
+
+type ResolvedTheme = 'light' | 'dark'
+
+const getSystemTheme = (media: MediaQueryList): ResolvedTheme =>
+  media.matches ? 'dark' : 'light'
+
+export function PreferencesGate() {
+  const { preferences } = usePreferences()
+  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('light')
+
+  useEffect(() => {
+    if (typeof window === 'undefined') return
+
+    const media = window.matchMedia('(prefers-color-scheme: dark)')
+    const update = () => setSystemTheme(getSystemTheme(media))
+
+    update()
+
+    if (typeof media.addEventListener === 'function') {
+      media.addEventListener('change', update)
+      return () => media.removeEventListener('change', update)
+    }
+
+    media.addListener(update)
+    return () => media.removeListener(update)
+  }, [])
+
+  useEffect(() => {
+    if (typeof document === 'undefined') return
+
+    const resolvedTheme =
+      preferences.theme === 'system' ? systemTheme : preferences.theme
+
+    const root = document.documentElement
+    root.setAttribute('data-mode', preferences.mode)
+    root.setAttribute('data-theme', resolvedTheme)
+
+    if (preferences.mode === 'vibey') {
+      root.setAttribute('data-vibey', preferences.vibeyTheme)
+    } else {
+      root.removeAttribute('data-vibey')
+    }
+  }, [preferences.mode, preferences.theme, preferences.vibeyTheme, systemTheme])
+
+  return null
+}
diff --git a/components/preferences/PreferencesPanel.tsx b/components/preferences/PreferencesPanel.tsx
new file mode 100644
index 0000000..3b9ce0d
--- /dev/null
+++ b/components/preferences/PreferencesPanel.tsx
@@ -0,0 +1,156 @@
+'use client'
+
+import { useEffect, useRef, useState } from 'react'
+import { usePreferences } from '@/lib/preferences/PreferencesContext'
+
+const themeOptions = [
+  { value: 'system', label: 'System' },
+  { value: 'light', label: 'Light' },
+  { value: 'dark', label: 'Dark' },
+] as const
+
+const modeOptions = [
+  { value: 'formal', label: 'Formal' },
+  { value: 'vibey', label: 'Vibey' },
+] as const
+
+const vibeyOptions = [
+  { value: 'grape', label: 'Grape Soda' },
+  { value: 'ocean', label: 'Ocean Pop' },
+  { value: 'peach', label: 'Peach Ice' },
+  { value: 'neon', label: 'Neon Mint' },
+] as const
+
+export function PreferencesPanel() {
+  const { preferences, setMode, setTheme, setVibeyTheme } = usePreferences()
+  const [isOpen, setIsOpen] = useState(false)
+  const panelRef = useRef<HTMLDivElement>(null)
+  const buttonRef = useRef<HTMLButtonElement>(null)
+
+  useEffect(() => {
+    if (!isOpen) return
+
+    const handleKeyDown = (event: KeyboardEvent) => {
+      if (event.key === 'Escape') {
+        setIsOpen(false)
+        buttonRef.current?.focus()
+      }
+    }
+
+    const handleMouseDown = (event: MouseEvent) => {
+      if (!panelRef.current && !buttonRef.current) return
+      if (panelRef.current?.contains(event.target as Node)) return
+      if (buttonRef.current?.contains(event.target as Node)) return
+      setIsOpen(false)
+    }
+
+    document.addEventListener('keydown', handleKeyDown)
+    document.addEventListener('mousedown', handleMouseDown)
+
+    panelRef.current?.focus()
+
+    return () => {
+      document.removeEventListener('keydown', handleKeyDown)
+      document.removeEventListener('mousedown', handleMouseDown)
+    }
+  }, [isOpen])
+
+  return (
+    <div className="relative">
+      <button
+        ref={buttonRef}
+        type="button"
+        onClick={() => setIsOpen((open) => !open)}
+        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-card-hover transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
+        aria-expanded={isOpen}
+        aria-controls="preferences-panel"
+      >
+        Preferences
+      </button>
+
+      {isOpen && (
+        <div
+          id="preferences-panel"
+          ref={panelRef}
+          role="dialog"
+          aria-label="Site preferences"
+          tabIndex={-1}
+          className="absolute right-0 mt-3 w-72 rounded-2xl border border-border bg-card p-4 shadow-xl focus:outline-none"
+        >
+          <div className="space-y-4">
+            <div>
+              <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-2">
+                Theme
+              </p>
+              <div className="flex rounded-full border border-border bg-muted p-1">
+                {themeOptions.map((option) => (
+                  <button
+                    key={option.value}
+                    type="button"
+                    onClick={() => setTheme(option.value)}
+                    className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
+                      preferences.theme === option.value
+                        ? 'bg-primary text-primary-foreground shadow-sm'
+                        : 'text-foreground hover:bg-card'
+                    }`}
+                    aria-pressed={preferences.theme === option.value}
+                  >
+                    {option.label}
+                  </button>
+                ))}
+              </div>
+            </div>
+
+            <div>
+              <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-2">
+                Mode
+              </p>
+              <div className="flex rounded-full border border-border bg-muted p-1">
+                {modeOptions.map((option) => (
+                  <button
+                    key={option.value}
+                    type="button"
+                    onClick={() => setMode(option.value)}
+                    className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
+                      preferences.mode === option.value
+                        ? 'bg-primary text-primary-foreground shadow-sm'
+                        : 'text-foreground hover:bg-card'
+                    }`}
+                    aria-pressed={preferences.mode === option.value}
+                  >
+                    {option.label}
+                  </button>
+                ))}
+              </div>
+            </div>
+
+            {preferences.mode === 'vibey' && (
+              <div>
+                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-2">
+                  Vibey theme
+                </p>
+                <div className="grid grid-cols-2 gap-2">
+                  {vibeyOptions.map((option) => (
+                    <button
+                      key={option.value}
+                      type="button"
+                      onClick={() => setVibeyTheme(option.value)}
+                      className={`rounded-xl border px-3 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
+                        preferences.vibeyTheme === option.value
+                          ? 'border-primary bg-primary/10 text-primary'
+                          : 'border-border text-foreground hover:border-primary/50 hover:bg-muted'
+                      }`}
+                      aria-pressed={preferences.vibeyTheme === option.value}
+                    >
+                      {option.label}
+                    </button>
+                  ))}
+                </div>
+              </div>
+            )}
+          </div>
+        </div>
+      )}
+    </div>
+  )
+}
diff --git a/components/sections/CTA.tsx b/components/sections/CTA.tsx
deleted file mode 100644
index 07e0605..0000000
--- a/components/sections/CTA.tsx
+++ /dev/null
@@ -1,66 +0,0 @@
-import { ArrowRight } from 'lucide-react'
-
-interface CTAData {
-  title: string
-  description?: string
-  buttonText: string
-  buttonLink: string
-  variant?: 'primary' | 'secondary' | 'gradient'
-}
-
-interface CTAProps {
-  data: CTAData
-}
-
-export function CTA({ data }: CTAProps) {
-  const isPrimary = data.variant === 'primary' || !data.variant
-  const isGradient = data.variant === 'gradient'
-
-  return (
-    <section className={`relative py-20 md:py-32 overflow-hidden ${
-      isGradient
-        ? 'bg-gradient-to-br from-primary via-primary/80 to-primary/60'
-        : isPrimary
-        ? 'bg-primary/10 border-y-2 border-primary/20'
-        : 'bg-card'
-    }`}>
-      {/* Decorative blur circles for gradient variant */}
-      {isGradient && (
-        <>
-          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
-          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
-        </>
-      )}
-
-      <div className="container mx-auto px-4 relative z-10">
-        <div className="max-w-3xl mx-auto text-center">
-          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
-            isGradient ? 'text-white' : 'text-foreground'
-          }`}>
-            {data.title}
-          </h2>
-          {data.description && (
-            <p className={`text-xl md:text-2xl mb-10 ${
-              isGradient ? 'text-white/90' : 'text-muted-foreground'
-            }`}>
-              {data.description}
-            </p>
-          )}
-          <a
-            href={data.buttonLink}
-            className={`inline-flex items-center gap-2 px-10 py-5 rounded-lg text-lg font-semibold transition-all hover:scale-105 active:scale-95 ${
-              isGradient
-                ? 'bg-white text-primary hover:bg-white/90 shadow-2xl'
-                : isPrimary
-                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
-                : 'bg-primary text-primary-foreground hover:bg-primary/90'
-            }`}
-          >
-            {data.buttonText}
-            <ArrowRight size={20} />
-          </a>
-        </div>
-      </div>
-    </section>
-  )
-}
diff --git a/components/sections/Cards.tsx b/components/sections/Cards.tsx
deleted file mode 100644
index 064470b..0000000
--- a/components/sections/Cards.tsx
+++ /dev/null
@@ -1,61 +0,0 @@
-interface Card {
-  title: string
-  description: string
-  icon?: string
-  link?: string
-}
-
-interface CardsData {
-  title?: string
-  cards: Card[]
-  columns?: 2 | 3 | 4
-}
-
-interface CardsProps {
-  data: CardsData
-}
-
-export function Cards({ data }: CardsProps) {
-  const columns = data.columns || 3
-
-  return (
-    <section className="py-16 md:py-24 bg-background">
-      <div className="container mx-auto px-4">
-        {data.title && (
-          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
-            {data.title}
-          </h2>
-        )}
-
-        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 max-w-6xl mx-auto`}>
-          {data.cards.map((card, index) => (
-            <div
-              key={index}
-              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
-            >
-              {card.icon && (
-                <div className="text-4xl mb-4">
-                  {card.icon}
-                </div>
-              )}
-              <h3 className="text-xl font-semibold text-foreground mb-3">
-                {card.title}
-              </h3>
-              <p className="text-muted-foreground mb-4">
-                {card.description}
-              </p>
-              {card.link && (
-                <a
-                  href={card.link}
-                  className="text-primary hover:underline font-medium"
-                >
-                  Learn more →
-                </a>
-              )}
-            </div>
-          ))}
-        </div>
-      </div>
-    </section>
-  )
-}
diff --git a/components/sections/ContactBlock.tsx b/components/sections/ContactBlock.tsx
deleted file mode 100644
index 579fac6..0000000
--- a/components/sections/ContactBlock.tsx
+++ /dev/null
@@ -1,110 +0,0 @@
-interface ContactBlockData {
-  title?: string
-  description?: string
-  showForm?: boolean
-  email?: string
-  phone?: string
-}
-
-interface ContactBlockProps {
-  data: ContactBlockData
-}
-
-export function ContactBlock({ data }: ContactBlockProps) {
-  return (
-    <section className="py-16 md:py-24 bg-card">
-      <div className="container mx-auto px-4">
-        <div className="max-w-4xl mx-auto">
-          {data.title && (
-            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
-              {data.title}
-            </h2>
-          )}
-          {data.description && (
-            <p className="text-lg text-muted-foreground text-center mb-12">
-              {data.description}
-            </p>
-          )}
-
-          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
-            {/* Contact Info */}
-            <div className="space-y-6">
-              <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
-              {data.email && (
-                <div>
-                  <p className="text-sm text-muted-foreground mb-1">Email</p>
-                  <a
-                    href={`mailto:${data.email}`}
-                    className="text-primary hover:underline"
-                  >
-                    {data.email}
-                  </a>
-                </div>
-              )}
-              {data.phone && (
-                <div>
-                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
-                  <a
-                    href={`tel:${data.phone}`}
-                    className="text-primary hover:underline"
-                  >
-                    {data.phone}
-                  </a>
-                </div>
-              )}
-            </div>
-
-            {/* Contact Form */}
-            {data.showForm && (
-              <div>
-                <h3 className="text-xl font-semibold text-foreground mb-4">Send a Message</h3>
-                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
-                  <div>
-                    <label className="block text-sm font-medium text-foreground mb-2">
-                      Name
-                    </label>
-                    <input
-                      type="text"
-                      className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg
-                        focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
-                      placeholder="Your name"
-                    />
-                  </div>
-                  <div>
-                    <label className="block text-sm font-medium text-foreground mb-2">
-                      Email
-                    </label>
-                    <input
-                      type="email"
-                      className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg
-                        focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
-                      placeholder="your@email.com"
-                    />
-                  </div>
-                  <div>
-                    <label className="block text-sm font-medium text-foreground mb-2">
-                      Message
-                    </label>
-                    <textarea
-                      rows={4}
-                      className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg
-                        focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
-                      placeholder="Your message..."
-                    />
-                  </div>
-                  <button
-                    type="submit"
-                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg
-                      font-semibold hover:bg-primary/90 transition-colors"
-                  >
-                    Send Message
-                  </button>
-                </form>
-              </div>
-            )}
-          </div>
-        </div>
-      </div>
-    </section>
-  )
-}
diff --git a/components/sections/FAQ.tsx b/components/sections/FAQ.tsx
deleted file mode 100644
index c763643..0000000
--- a/components/sections/FAQ.tsx
+++ /dev/null
@@ -1,70 +0,0 @@
-'use client'
-
-import { useState } from 'react'
-import { ChevronDown } from 'lucide-react'
-
-interface FAQItem {
-  question: string
-  answer: string
-}
-
-interface FAQData {
-  title?: string
-  items: FAQItem[]
-}
-
-interface FAQProps {
-  data: FAQData
-}
-
-export function FAQ({ data }: FAQProps) {
-  const [openIndex, setOpenIndex] = useState<number | null>(null)
-
-  const toggleItem = (index: number) => {
-    setOpenIndex(openIndex === index ? null : index)
-  }
-
-  return (
-    <section className="py-16 md:py-24 bg-background">
-      <div className="container mx-auto px-4">
-        <div className="max-w-3xl mx-auto">
-          {data.title && (
-            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
-              {data.title}
-            </h2>
-          )}
-
-          <div className="space-y-4">
-            {data.items.map((item, index) => (
-              <div
-                key={index}
-                className="bg-card border border-border rounded-lg overflow-hidden"
-              >
-                <button
-                  onClick={() => toggleItem(index)}
-                  className="w-full px-6 py-4 flex items-center justify-between text-left
-                    hover:bg-card/80 transition-colors"
-                >
-                  <span className="font-semibold text-foreground pr-4">
-                    {item.question}
-                  </span>
-                  <ChevronDown
-                    size={20}
-                    className={`text-muted-foreground flex-shrink-0 transition-transform ${
-                      openIndex === index ? 'rotate-180' : ''
-                    }`}
-                  />
-                </button>
-                {openIndex === index && (
-                  <div className="px-6 pb-4 pt-2 text-muted-foreground">
-                    {item.answer}
-                  </div>
-                )}
-              </div>
-            ))}
-          </div>
-        </div>
-      </div>
-    </section>
-  )
-}
diff --git a/components/sections/Hero.tsx b/components/sections/Hero.tsx
deleted file mode 100644
index d4e892e..0000000
--- a/components/sections/Hero.tsx
+++ /dev/null
@@ -1,38 +0,0 @@
-interface HeroData {
-  title: string
-  subtitle?: string
-  ctaText?: string
-  ctaLink?: string
-}
-
-interface HeroProps {
-  data: HeroData
-}
-
-export function Hero({ data }: HeroProps) {
-  return (
-    <section className="py-20 md:py-32">
-      <div className="container mx-auto px-4">
-        <div className="max-w-4xl mx-auto text-center">
-          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
-            {data.title}
-          </h1>
-          {data.subtitle && (
-            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
-              {data.subtitle}
-            </p>
-          )}
-          {data.ctaText && data.ctaLink && (
-            <a
-              href={data.ctaLink}
-              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg
-                font-semibold hover:bg-primary/90 transition-colors"
-            >
-              {data.ctaText}
-            </a>
-          )}
-        </div>
-      </div>
-    </section>
-  )
-}
diff --git a/components/sections/ProjectGrid.tsx b/components/sections/ProjectGrid.tsx
deleted file mode 100644
index ecd34af..0000000
--- a/components/sections/ProjectGrid.tsx
+++ /dev/null
@@ -1,84 +0,0 @@
-'use client'
-
-import { useEffect, useState } from 'react'
-import { PortfolioCard } from '@/components/PortfolioCard'
-import { PortfolioItem } from '@/lib/portfolio/types'
-import { Spinner } from '@/components/ui/Spinner'
-
-interface ProjectGridData {
-  title?: string
-  filter?: 'ALL' | 'WEB' | 'MOBILE' | 'DESIGN'
-  limit?: number
-  includeDigitalProducts?: boolean
-}
-
-interface ProjectGridProps {
-  data: ProjectGridData
-}
-
-export function ProjectGrid({ data }: ProjectGridProps) {
-  const [items, setItems] = useState<PortfolioItem[]>([])
-  const [loading, setLoading] = useState(true)
-
-  useEffect(() => {
-    fetchPortfolioItems()
-  }, [data.filter, data.limit, data.includeDigitalProducts])
-
-  const fetchPortfolioItems = async () => {
-    try {
-      setLoading(true)
-      const params = new URLSearchParams()
-
-      if (data.filter && data.filter !== 'ALL') {
-        params.append('category', data.filter)
-      }
-
-      if (data.limit) {
-        params.append('limit', data.limit.toString())
-      }
-
-      if (data.includeDigitalProducts) {
-        params.append('includeDigitalProducts', 'true')
-      }
-
-      const response = await fetch(`/api/portfolio?${params}`)
-      const result = await response.json()
-
-      if (result.success) {
-        setItems(result.data)
-      }
-    } catch (error) {
-      console.error('Error fetching portfolio items:', error)
-    } finally {
-      setLoading(false)
-    }
-  }
-
-  return (
-    <section className="py-16 md:py-24 bg-background">
-      <div className="container mx-auto px-4">
-        {data.title && (
-          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
-            {data.title}
-          </h2>
-        )}
-
-        {loading ? (
-          <div className="flex justify-center py-12">
-            <Spinner size="lg" />
-          </div>
-        ) : items.length === 0 ? (
-          <p className="text-center text-muted-foreground py-12">
-            No items found
-          </p>
-        ) : (
-          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
-            {items.map((item) => (
-              <PortfolioCard key={item.slug} item={item} variant="public" />
-            ))}
-          </div>
-        )}
-      </div>
-    </section>
-  )
-}
diff --git a/components/sections/RichText.tsx b/components/sections/RichText.tsx
deleted file mode 100644
index 5974b7f..0000000
--- a/components/sections/RichText.tsx
+++ /dev/null
@@ -1,30 +0,0 @@
-'use client'
-
-import ReactMarkdown from 'react-markdown'
-import remarkGfm from 'remark-gfm'
-
-interface RichTextData {
-  content: string
-}
-
-interface RichTextProps {
-  data: RichTextData
-}
-
-export function RichText({ data }: RichTextProps) {
-  return (
-    <section className="py-16 md:py-24">
-      <div className="container mx-auto px-4">
-        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert
-          prose-headings:text-foreground prose-p:text-muted-foreground
-          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
-          prose-strong:text-foreground prose-code:text-foreground
-          prose-pre:bg-card prose-pre:border prose-pre:border-border">
-          <ReactMarkdown remarkPlugins={[remarkGfm]}>
-            {data.content}
-          </ReactMarkdown>
-        </div>
-      </div>
-    </section>
-  )
-}
diff --git a/components/ui/Card.tsx b/components/ui/Card.tsx
index f135a59..cac5d3f 100644
--- a/components/ui/Card.tsx
+++ b/components/ui/Card.tsx
@@ -7,7 +7,7 @@ interface CardProps extends HTMLAttributes<HTMLDivElement> {
 export function Card({ children, className = '', ...props }: CardProps) {
   return (
     <div 
-      className={`bg-secondary rounded-2xl shadow-lg border border-border overflow-hidden ${className}`}
+      className={`surface-app rounded-2xl shadow-lg border border-app overflow-hidden ${className}`}
       {...props}
     >
       {children}
@@ -17,7 +17,7 @@ export function Card({ children, className = '', ...props }: CardProps) {
 
 export function CardHeader({ children, className = '', ...props }: CardProps) {
   return (
-    <div className={`px-6 py-4 border-b border-border ${className}`} {...props}>
+    <div className={`px-6 py-4 border-b border-app ${className}`} {...props}>
       {children}
     </div>
   )
@@ -29,4 +29,4 @@ export function CardContent({ children, className = '', ...props }: CardProps) {
       {children}
     </div>
   )
-}
\ No newline at end of file
+}
diff --git a/docs/membership-implementation-gaps.md b/docs/membership-implementation-gaps.md
new file mode 100644
index 0000000..999db24
--- /dev/null
+++ b/docs/membership-implementation-gaps.md
@@ -0,0 +1,285 @@
+# Membership System Implementation - Gap Analysis
+
+**Date**: 2025-12-23
+**Status**: Development Complete | Production Pending
+
+## Executive Summary
+
+The membership purchase system has been successfully implemented with a complete UI, API endpoints, and database integration. The system is **functionally complete for development/testing** but requires payment integration before production deployment.
+
+---
+
+## ✅ Issues Found & Fixed
+
+### 1. Missing Navigation Links
+**Status**: ✅ FIXED
+
+- **Gap Identified**: No way for users to discover the memberships page from the main navigation
+- **Impact**: Users couldn't easily find where to purchase memberships
+- **Resolution**:
+  - Added "Pricing" link to public navigation menu
+  - Added "Pricing" link to authenticated user navigation menu
+  - **Location**: `components/Header.tsx:21, 29`
+
+### 2. Missing Payment Integration
+**Status**: ⚠️ DOCUMENTED (CRITICAL)
+
+- **Gap Identified**: System creates memberships WITHOUT actual payment processing
+- **Impact**: Currently operates in demo mode - memberships are created for free
+- **Resolution**:
+  - Added comprehensive TODO comments with implementation guidance
+  - Included example Stripe integration code
+  - Documented requirements for production deployment
+  - **Location**: `app/api/memberships/purchase/route.ts:38-52`
+
+**Required Before Production**:
+```typescript
+// TODO: PAYMENT INTEGRATION REQUIRED
+// 1. Integrate a payment provider (Stripe, PayPal, etc.)
+// 2. Create a payment intent/session
+// 3. Verify payment completion
+// 4. Only then create the membership
+```
+
+### 3. No Dashboard Call-to-Action
+**Status**: ✅ FIXED
+
+- **Gap Identified**: Users without membership had no clear path to purchase one
+- **Impact**: Poor user experience and conversion funnel
+- **Resolution**:
+  - Added "Browse Membership Plans" button in Usage Limits section
+  - Button appears when user has no active membership
+  - **Location**: `app/(user)/dashboard/page.tsx:289-296`
+
+---
+
+## ✅ Verified Working
+
+### 1. Component Dependencies
+- ✅ Toast component exists and properly imported
+- ✅ Spinner component exists and properly imported
+- **Location**: `components/ui/Toast.tsx`, `components/ui/Spinner.tsx`
+
+### 2. TypeScript Types
+- ✅ No type errors in membership configuration file
+- ✅ All Prisma types correctly referenced
+- ✅ Membership plan interface properly typed
+- **Verified Files**:
+  - `lib/membership-plans.ts`
+  - `app/(main)/memberships/page.tsx`
+  - `app/api/memberships/purchase/route.ts`
+
+### 3. Build Process
+- ✅ Membership pages compile successfully
+- ✅ No membership-specific build errors
+- ✅ All imports resolve correctly
+- **Build Status**: Passing (membership files only)
+
+### 4. Database Schema
+- ✅ MembershipTier enum properly defined
+- ✅ MembershipStatus enum properly defined
+- ✅ Membership model structure correct
+- ✅ Credit transaction system integrated
+- **Schema Location**: `prisma/schema.prisma:576-608`
+
+---
+
+## 📁 Files Created
+
+| File | Purpose | Status |
+|------|---------|--------|
+| `lib/membership-plans.ts` | Membership tier configuration and pricing | ✅ Complete |
+| `app/(main)/memberships/page.tsx` | Public-facing membership purchase UI | ✅ Complete |
+| `app/api/memberships/purchase/route.ts` | Membership purchase API endpoint | ⚠️ Needs payment |
+
+## 📝 Files Modified
+
+| File | Changes | Status |
+|------|---------|--------|
+| `components/Header.tsx` | Added "Pricing" navigation links | ✅ Complete |
+| `app/(user)/dashboard/page.tsx` | Added CTA button for non-members | ✅ Complete |
+
+---
+
+## 💳 Payment Integration Requirements
+
+### Critical: Must Complete Before Production
+
+**Recommended Provider**: Stripe
+
+**Implementation Steps**:
+
+1. **Install Stripe SDK**
+   ```bash
+   npm install stripe @stripe/stripe-js
+   ```
+
+2. **Configure Environment Variables**
+   ```env
+   STRIPE_SECRET_KEY=sk_test_...
+   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
+   ```
+
+3. **Create Payment Intent** (in purchase API route)
+   ```typescript
+   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
+
+   const paymentIntent = await stripe.paymentIntents.create({
+     amount: plan.price * 100, // Convert to cents
+     currency: 'usd',
+     metadata: {
+       userId: session.user.id,
+       tier: plan.tier
+     }
+   })
+   ```
+
+4. **Verify Payment Before Membership Creation**
+   - Wait for payment confirmation
+   - Handle webhook events
+   - Only create membership after successful payment
+
+5. **Handle Edge Cases**
+   - Payment failures
+   - Partial payments
+   - Refunds
+   - Chargebacks
+
+---
+
+## 🎯 Membership Tiers
+
+Based on requirements from `docs/FINAL_MASTER_PROMPT.md`:
+
+| Tier | Price | Credits | Duration | Rollover Cap | Key Features |
+|------|-------|---------|----------|--------------|--------------|
+| **Basic Access** | $299 | 750 | 12 months | None | Entry-level, no renewals, docs-only support |
+| **Pro** | $1,499 | 1,500/year | 2 years | 300 | Yearly renewal, discounted add-ons, priority queue |
+| **Managed** | $499/mo | 500/month | Monthly | 100 | Hosting management, 24/7 support, pause/downgrade allowed |
+
+---
+
+## 🚀 Deployment Checklist
+
+### Before Going Live:
+
+- [ ] Integrate payment provider (Stripe/PayPal)
+- [ ] Test payment flow end-to-end
+- [ ] Configure production payment credentials
+- [ ] Set up webhook endpoints for payment events
+- [ ] Implement refund handling
+- [ ] Add payment failure recovery flow
+- [ ] Test edge cases (failed payments, expired cards, etc.)
+- [ ] Add email notifications for successful purchases
+- [ ] Implement receipt generation
+- [ ] Add membership cancellation flow
+- [ ] Set up monitoring for payment failures
+- [ ] Review and test security measures
+- [ ] Legal review of terms and pricing
+- [ ] Load test the purchase flow
+
+### Nice to Have:
+
+- [ ] Promo code system
+- [ ] Annual billing option with discount
+- [ ] Upgrade/downgrade flow
+- [ ] Trial period implementation
+- [ ] Usage analytics dashboard
+- [ ] Automated renewal reminders
+
+---
+
+## 📊 Testing Status
+
+| Test Category | Status | Notes |
+|--------------|--------|-------|
+| UI Components | ✅ Pass | All components render correctly |
+| Type Safety | ✅ Pass | No TypeScript errors |
+| Build Process | ✅ Pass | Compiles without errors |
+| Navigation | ✅ Pass | Links working correctly |
+| API Routes | ⚠️ Partial | Works but missing payment |
+| Database Operations | ✅ Pass | Membership creation works |
+| Credit System | ✅ Pass | Credits allocated correctly |
+| User Flow | ⚠️ Partial | Works in demo mode |
+
+---
+
+## 🔒 Security Considerations
+
+### Currently Implemented:
+- ✅ Authentication checks before purchase
+- ✅ Session validation
+- ✅ Duplicate membership prevention
+- ✅ Audit logging for all membership operations
+
+### Required for Production:
+- [ ] Payment data encryption
+- [ ] PCI compliance (via Stripe)
+- [ ] Rate limiting on purchase endpoint
+- [ ] CSRF protection
+- [ ] Input validation and sanitization
+- [ ] Webhook signature verification
+
+---
+
+## 📖 User Journey
+
+### Current Flow (Demo Mode):
+
+1. User visits `/memberships`
+2. Reviews available plans
+3. Clicks "Get Started" on desired plan
+4. System checks authentication
+5. **DEMO**: Membership created immediately (no payment)
+6. User redirected to dashboard
+7. Credits appear in usage limits
+
+### Production Flow (After Payment Integration):
+
+1. User visits `/memberships`
+2. Reviews available plans
+3. Clicks "Get Started" on desired plan
+4. System checks authentication
+5. **NEW**: Payment modal appears
+6. **NEW**: User enters payment details
+7. **NEW**: Payment processed via Stripe
+8. **NEW**: Payment confirmed
+9. Membership created with credits
+10. User redirected to dashboard
+11. Receipt sent via email
+
+---
+
+## 🐛 Known Issues
+
+### None Currently
+
+All identified gaps have been either:
+- ✅ Fixed and deployed
+- ⚠️ Documented with implementation guidance
+
+---
+
+## 📞 Support & Questions
+
+For questions about this implementation:
+- Review the code comments in `app/api/memberships/purchase/route.ts`
+- Check the Stripe documentation for payment integration
+- Refer to the membership configuration in `lib/membership-plans.ts`
+
+---
+
+## 🔄 Change Log
+
+| Date | Change | Impact |
+|------|--------|--------|
+| 2025-12-23 | Initial implementation | Complete membership system created |
+| 2025-12-23 | Gap analysis completed | Identified payment integration requirement |
+| 2025-12-23 | Navigation updated | Added pricing links to header |
+| 2025-12-23 | Dashboard CTA added | Improved user conversion funnel |
+
+---
+
+**Last Updated**: 2025-12-23
+**Next Review**: Before production deployment
+**Priority**: Complete payment integration before launch
diff --git a/docs/preferences.md b/docs/preferences.md
new file mode 100644
index 0000000..237650c
--- /dev/null
+++ b/docs/preferences.md
@@ -0,0 +1,47 @@
+# Preferences and Theming
+
+## Model
+
+The preferences model lives in `lib/preferences` and is stored in localStorage under `site-preferences-v1`.
+
+- mode: `formal` or `vibey`
+- theme: `system`, `light`, or `dark`
+- vibeyTheme: `grape`, `ocean`, `peach`, or `neon` (used only when mode is `vibey`)
+
+Defaults are defined in `lib/preferences/types.ts` as `DEFAULT_PREFERENCES`.
+
+## Data attributes contract
+
+The client gate applies resolved attributes on `<html>`:
+
+- `data-mode="formal|vibey"`
+- `data-theme="light|dark"` (resolved when theme is `system`)
+- `data-vibey="grape|ocean|peach|neon"` only when mode is `vibey`
+
+If mode is `formal`, the gate removes `data-vibey`.
+
+Legacy theme selection still sets `data-legacy-theme` to avoid conflicts.
+
+## Token variables
+
+Token variables are defined in `app/globals.css`:
+
+- Neutrals from `data-theme`: `--bg`, `--surface`, `--border`, `--text`, `--muted`
+- Accents from `data-mode` and `data-vibey`: `--primary`, `--primary2`, `--ring`
+
+Utility helpers are also defined for shared components:
+
+- `bg-app`, `surface-app`, `border-app`
+- `text-app`, `text-muted-app`, `accent`, `accent-2`
+- `bg-accent`, `bg-accent-soft`, `border-accent`, `ring-app`
+
+## Adding future themes
+
+To add a new vibey theme:
+
+1) Extend `VibeyTheme` and `DEFAULT_PREFERENCES` in `lib/preferences/types.ts`.
+2) Update validation in `lib/preferences/storage.ts`.
+3) Add the new selectors to `app/globals.css` for both light and dark.
+4) Add a button in `components/preferences/PreferencesPanel.tsx`.
+
+To add new neutral themes beyond light or dark, update the `data-theme` selectors and the logic in `components/preferences/PreferencesGate.tsx` that resolves system theme.
diff --git a/lib/ThemeContext.tsx b/lib/ThemeContext.tsx
index 963ba32..f90a3dd 100644
--- a/lib/ThemeContext.tsx
+++ b/lib/ThemeContext.tsx
@@ -30,15 +30,15 @@ export function ThemeProvider({ children }: { children: ReactNode }) {
 
     const root = document.documentElement
     
-    // Set data-theme attribute
-    root.setAttribute('data-theme', theme)
+    // Set legacy theme attribute to avoid clobbering preferences theme.
+    root.setAttribute('data-legacy-theme', theme)
     
     // Save to localStorage
     localStorage.setItem('kashikweyu-theme', theme)
     
     // Debug logs
     console.log('🎨 Theme set to:', theme)
-    console.log('📍 data-theme attr:', root.getAttribute('data-theme'))
+    console.log('📍 data-legacy-theme attr:', root.getAttribute('data-legacy-theme'))
   }, [theme, mounted])
 
   const setTheme = (newTheme: ThemeName) => {
@@ -69,4 +69,4 @@ export function useTheme() {
     throw new Error('useTheme must be used within ThemeProvider')
   }
   return context
-}
\ No newline at end of file
+}
diff --git a/lib/auth-options.ts b/lib/auth-options.ts
index 6540838..e11e180 100644
--- a/lib/auth-options.ts
+++ b/lib/auth-options.ts
@@ -57,11 +57,29 @@ export const authOptions: NextAuthOptions = {
     GoogleProvider({
       clientId: process.env.GOOGLE_CLIENT_ID || "",
       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
+      profile(profile) {
+        return {
+          id: profile.sub,
+          name: profile.name,
+          email: profile.email,
+          image: profile.picture, // Explicitly get the Google profile picture
+          role: "USER",
+        }
+      },
     }),
 
     GitHubProvider({
       clientId: process.env.GITHUB_ID || "",
       clientSecret: process.env.GITHUB_SECRET || "",
+      profile(profile) {
+        return {
+          id: profile.id.toString(),
+          name: profile.name || profile.login,
+          email: profile.email,
+          image: profile.avatar_url, // Explicitly get the GitHub profile picture
+          role: "USER",
+        }
+      },
     }),
 
     EmailProvider({
diff --git a/lib/membership-plans.ts b/lib/membership-plans.ts
new file mode 100644
index 0000000..2b1434b
--- /dev/null
+++ b/lib/membership-plans.ts
@@ -0,0 +1,81 @@
+import { MembershipTier } from '@prisma/client'
+
+export interface MembershipPlan {
+  tier: MembershipTier
+  name: string
+  description: string
+  price: number
+  credits: number
+  rolloverCap: number
+  features: string[]
+  popular?: boolean
+  durationDays: number
+}
+
+export const MEMBERSHIP_PLANS: MembershipPlan[] = [
+  {
+    tier: 'BASIC_ACCESS',
+    name: 'Basic Access',
+    description: 'Essential access for single projects',
+    price: 299,
+    credits: 750,
+    rolloverCap: 0,
+    durationDays: 365, // 12 months
+    features: [
+      '750 credits total (6-12 month term)',
+      'No rollover credits',
+      'No renewals',
+      'Documentation-only support',
+      'No rush work available',
+      'Standard response time',
+      'Access to basic services',
+    ],
+  },
+  {
+    tier: 'PRO',
+    name: 'Pro',
+    description: 'Best for professionals and growing businesses',
+    price: 1499,
+    credits: 1500,
+    rolloverCap: 300,
+    durationDays: 730, // 2 years
+    features: [
+      '1500 credits per year (2-year term)',
+      'Up to 300 credits rollover',
+      'Yearly renewal option',
+      'Discounted add-ons',
+      'Priority service queue',
+      'Priority reset requests',
+      'Advanced features access',
+      'Faster response time',
+    ],
+  },
+  {
+    tier: 'MANAGED',
+    name: 'Managed',
+    description: 'Full-service solution with monthly renewal',
+    price: 499,
+    credits: 500,
+    rolloverCap: 100,
+    durationDays: 30, // Monthly
+    features: [
+      '500 credits per month',
+      'Up to 100 credits rollover',
+      'Monthly or annual terms',
+      'Hosting management included',
+      'Dedicated project manager',
+      '24/7 priority support',
+      'Fastest response time',
+      'Downgrade/pause allowed',
+      'Custom service requests',
+    ],
+  },
+]
+
+export function getMembershipPlan(tier: MembershipTier): MembershipPlan | undefined {
+  return MEMBERSHIP_PLANS.find(plan => plan.tier === tier)
+}
+
+export function getMembershipPlanByName(name: string): MembershipPlan | undefined {
+  return MEMBERSHIP_PLANS.find(plan => plan.name.toLowerCase() === name.toLowerCase())
+}
diff --git a/lib/preferences/PreferencesContext.tsx b/lib/preferences/PreferencesContext.tsx
new file mode 100644
index 0000000..a978c43
--- /dev/null
+++ b/lib/preferences/PreferencesContext.tsx
@@ -0,0 +1,52 @@
+'use client'
+
+import type { Dispatch, ReactNode, SetStateAction } from 'react'
+import { createContext, useContext, useEffect, useMemo, useState } from 'react'
+import { DEFAULT_PREFERENCES, Mode, Preferences, ThemePref, VibeyTheme } from './types'
+import { loadPreferences, savePreferences } from './storage'
+
+interface PreferencesContextValue {
+  preferences: Preferences
+  setPreferences: Dispatch<SetStateAction<Preferences>>
+  setMode: (mode: Mode) => void
+  setTheme: (theme: ThemePref) => void
+  setVibeyTheme: (vibeyTheme: VibeyTheme) => void
+}
+
+const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined)
+
+export function PreferencesProvider({ children }: { children: ReactNode }) {
+  const [preferences, setPreferences] = useState<Preferences>(DEFAULT_PREFERENCES)
+  const [isHydrated, setIsHydrated] = useState(false)
+
+  useEffect(() => {
+    setPreferences(loadPreferences())
+    setIsHydrated(true)
+  }, [])
+
+  useEffect(() => {
+    if (!isHydrated) return
+    savePreferences(preferences)
+  }, [preferences, isHydrated])
+
+  const value = useMemo<PreferencesContextValue>(
+    () => ({
+      preferences,
+      setPreferences,
+      setMode: (mode) => setPreferences((prev) => ({ ...prev, mode })),
+      setTheme: (theme) => setPreferences((prev) => ({ ...prev, theme })),
+      setVibeyTheme: (vibeyTheme) => setPreferences((prev) => ({ ...prev, vibeyTheme })),
+    }),
+    [preferences]
+  )
+
+  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
+}
+
+export function usePreferences() {
+  const context = useContext(PreferencesContext)
+  if (!context) {
+    throw new Error('usePreferences must be used within PreferencesProvider')
+  }
+  return context
+}
diff --git a/lib/preferences/storage.ts b/lib/preferences/storage.ts
new file mode 100644
index 0000000..1cd9091
--- /dev/null
+++ b/lib/preferences/storage.ts
@@ -0,0 +1,42 @@
+import { DEFAULT_PREFERENCES, Preferences, Mode, ThemePref, VibeyTheme } from './types'
+
+const STORAGE_KEY = 'site-preferences-v1'
+
+const MODES: Mode[] = ['formal', 'vibey']
+const THEME_PREFS: ThemePref[] = ['system', 'light', 'dark']
+const VIBEY_THEMES: VibeyTheme[] = ['grape', 'ocean', 'peach', 'neon']
+
+const isBrowser = () => typeof window !== 'undefined'
+
+const isMode = (value: unknown): value is Mode => MODES.includes(value as Mode)
+const isThemePref = (value: unknown): value is ThemePref => THEME_PREFS.includes(value as ThemePref)
+const isVibeyTheme = (value: unknown): value is VibeyTheme => VIBEY_THEMES.includes(value as VibeyTheme)
+
+export function loadPreferences(): Preferences {
+  if (!isBrowser()) return DEFAULT_PREFERENCES
+
+  try {
+    const raw = window.localStorage.getItem(STORAGE_KEY)
+    if (!raw) return DEFAULT_PREFERENCES
+
+    const parsed = JSON.parse(raw) as Partial<Preferences>
+
+    return {
+      mode: isMode(parsed.mode) ? parsed.mode : DEFAULT_PREFERENCES.mode,
+      theme: isThemePref(parsed.theme) ? parsed.theme : DEFAULT_PREFERENCES.theme,
+      vibeyTheme: isVibeyTheme(parsed.vibeyTheme) ? parsed.vibeyTheme : DEFAULT_PREFERENCES.vibeyTheme,
+    }
+  } catch {
+    return DEFAULT_PREFERENCES
+  }
+}
+
+export function savePreferences(prefs: Preferences): void {
+  if (!isBrowser()) return
+
+  try {
+    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
+  } catch {
+    // Ignore storage errors (private mode, quota, etc).
+  }
+}
diff --git a/lib/preferences/types.ts b/lib/preferences/types.ts
new file mode 100644
index 0000000..9748cf0
--- /dev/null
+++ b/lib/preferences/types.ts
@@ -0,0 +1,15 @@
+export type Mode = 'formal' | 'vibey'
+export type ThemePref = 'system' | 'light' | 'dark'
+export type VibeyTheme = 'grape' | 'ocean' | 'peach' | 'neon'
+
+export interface Preferences {
+  mode: Mode
+  theme: ThemePref
+  vibeyTheme: VibeyTheme
+}
+
+export const DEFAULT_PREFERENCES: Preferences = {
+  mode: 'formal',
+  theme: 'system',
+  vibeyTheme: 'grape',
+}
diff --git a/lib/sections/registry.ts b/lib/sections/registry.ts
deleted file mode 100644
index f4b984d..0000000
--- a/lib/sections/registry.ts
+++ /dev/null
@@ -1,134 +0,0 @@
-import {
-  SectionType,
-  SectionRegistry,
-  HeroData,
-  RichTextData,
-  ProjectGridData,
-  CardsData,
-  CTAData,
-  FAQData,
-  ContactBlockData,
-} from './types'
-
-// Import section components
-import { Hero } from '@/components/sections/Hero'
-import { RichText } from '@/components/sections/RichText'
-import { ProjectGrid } from '@/components/sections/ProjectGrid'
-import { Cards } from '@/components/sections/Cards'
-import { CTA } from '@/components/sections/CTA'
-import { FAQ } from '@/components/sections/FAQ'
-import { ContactBlock } from '@/components/sections/ContactBlock'
-
-// Import form components
-import {
-  HeroForm,
-  RichTextForm,
-  ProjectGridForm,
-  CardsForm,
-  CTAForm,
-  FAQForm,
-  ContactBlockForm,
-} from '@/components/admin/section-forms'
-
-export const sectionRegistry: SectionRegistry = {
-  [SectionType.HERO]: {
-    type: SectionType.HERO,
-    label: 'Hero',
-    description: 'Large hero section with title, subtitle, and CTA button',
-    component: Hero,
-    formComponent: HeroForm,
-    defaultData: {
-      title: 'Welcome',
-      subtitle: '',
-      ctaText: '',
-      ctaLink: '',
-    } as HeroData,
-    icon: '🎯',
-  },
-  [SectionType.RICH_TEXT]: {
-    type: SectionType.RICH_TEXT,
-    label: 'Rich Text',
-    description: 'Markdown content with full formatting support',
-    component: RichText,
-    formComponent: RichTextForm,
-    defaultData: {
-      content: '',
-    } as RichTextData,
-    icon: '📝',
-  },
-  [SectionType.PROJECT_GRID]: {
-    type: SectionType.PROJECT_GRID,
-    label: 'Project Grid',
-    description: 'Display projects in a grid layout with filtering',
-    component: ProjectGrid,
-    formComponent: ProjectGridForm,
-    defaultData: {
-      title: 'Projects',
-      filter: 'ALL',
-      includeDigitalProducts: false,
-    } as ProjectGridData,
-    icon: '🗂️',
-  },
-  [SectionType.CARDS]: {
-    type: SectionType.CARDS,
-    label: 'Cards',
-    description: 'Grid of cards with icons and descriptions',
-    component: Cards,
-    formComponent: CardsForm,
-    defaultData: {
-      title: '',
-      cards: [],
-      columns: 3,
-    } as CardsData,
-    icon: '🃏',
-  },
-  [SectionType.CTA]: {
-    type: SectionType.CTA,
-    label: 'Call to Action',
-    description: 'Prominent CTA section with button',
-    component: CTA,
-    formComponent: CTAForm,
-    defaultData: {
-      title: '',
-      description: '',
-      buttonText: 'Get Started',
-      buttonLink: '/request',
-      variant: 'primary',
-    } as CTAData,
-    icon: '📢',
-  },
-  [SectionType.FAQ]: {
-    type: SectionType.FAQ,
-    label: 'FAQ',
-    description: 'Accordion-style frequently asked questions',
-    component: FAQ,
-    formComponent: FAQForm,
-    defaultData: {
-      title: 'FAQ',
-      items: [],
-    } as FAQData,
-    icon: '❓',
-  },
-  [SectionType.CONTACT_BLOCK]: {
-    type: SectionType.CONTACT_BLOCK,
-    label: 'Contact Block',
-    description: 'Contact information with optional form',
-    component: ContactBlock,
-    formComponent: ContactBlockForm,
-    defaultData: {
-      title: 'Get in Touch',
-      showForm: true,
-    } as ContactBlockData,
-    icon: '📧',
-  },
-}
-
-// Helper to get registry entry by type
-export function getSectionRegistryEntry(type: SectionType) {
-  return sectionRegistry[type]
-}
-
-// Get all section types as an array
-export function getAllSectionTypes(): SectionType[] {
-  return Object.values(SectionType)
-}
diff --git a/lib/sections/types.ts b/lib/sections/types.ts
deleted file mode 100644
index e65a72f..0000000
--- a/lib/sections/types.ts
+++ /dev/null
@@ -1,103 +0,0 @@
-import { ComponentType } from 'react'
-
-// Section data types matching existing components
-export interface HeroData {
-  title: string
-  subtitle?: string
-  ctaText?: string
-  ctaLink?: string
-}
-
-export interface RichTextData {
-  content: string
-}
-
-export interface ProjectGridData {
-  title?: string
-  filter?: 'ALL' | 'WEB' | 'MOBILE' | 'DESIGN'
-  limit?: number
-  includeDigitalProducts?: boolean
-}
-
-export interface Card {
-  title: string
-  description: string
-  icon?: string
-  link?: string
-}
-
-export interface CardsData {
-  title?: string
-  cards: Card[]
-  columns?: 2 | 3 | 4
-}
-
-export interface CTAData {
-  title: string
-  description?: string
-  buttonText: string
-  buttonLink: string
-  variant?: 'primary' | 'secondary' | 'gradient'
-}
-
-export interface FAQItem {
-  question: string
-  answer: string
-}
-
-export interface FAQData {
-  title?: string
-  items: FAQItem[]
-}
-
-export interface ContactBlockData {
-  title?: string
-  description?: string
-  showForm?: boolean
-  email?: string
-  phone?: string
-}
-
-// Union type for all section data
-export type SectionData =
-  | HeroData
-  | RichTextData
-  | ProjectGridData
-  | CardsData
-  | CTAData
-  | FAQData
-  | ContactBlockData
-
-// Section types matching Prisma enum
-export enum SectionType {
-  HERO = 'HERO',
-  RICH_TEXT = 'RICH_TEXT',
-  PROJECT_GRID = 'PROJECT_GRID',
-  CARDS = 'CARDS',
-  CTA = 'CTA',
-  FAQ = 'FAQ',
-  CONTACT_BLOCK = 'CONTACT_BLOCK',
-}
-
-// Registry entry for each section type
-export interface SectionRegistryEntry<T = any> {
-  type: SectionType
-  label: string
-  description: string
-  component: ComponentType<{ data: T }>
-  formComponent: ComponentType<SectionFormProps<T>>
-  defaultData: T
-  icon: string
-}
-
-// Props for section form components
-export interface SectionFormProps<T = any> {
-  data: T
-  onChange: (data: T) => void
-  errors?: Record<string, string>
-}
-
-// Registry type
-export type SectionRegistry = {
-  [K in SectionType]: SectionRegistryEntry
-}
diff --git a/lib/useAnalytics.ts b/lib/useAnalytics.ts
index 233f557..7696692 100644
--- a/lib/useAnalytics.ts
+++ b/lib/useAnalytics.ts
@@ -16,70 +16,170 @@ interface EventData {
   value?: number
 }
 
+// Helper function to send analytics to our database (non-blocking)
+const sendToDatabase = async (eventData: any) => {
+  try {
+    await fetch('/api/analytics/track', {
+      method: 'POST',
+      headers: { 'Content-Type': 'application/json' },
+      body: JSON.stringify(eventData),
+    })
+  } catch (error) {
+    // Silent fail - don't block UI
+    console.debug('Analytics tracking failed:', error)
+  }
+}
+
 export function useAnalytics() {
   // Track page view
   const trackPageView = (data: PageViewData) => {
+    const eventData = {
+      action: 'page_view',
+      page: data.page,
+      referrer: data.referrer || document.referrer,
+      device: getDeviceType(),
+      data: { timestamp: new Date().toISOString() }
+    }
+
+    // Send to Vercel Analytics
     track('page_view', {
       page: data.page,
       referrer: data.referrer || document.referrer,
       device: getDeviceType(),
       timestamp: new Date().toISOString()
     })
+
+    // Send to our database (non-blocking)
+    sendToDatabase(eventData)
   }
 
   // Track custom events
   const trackEvent = (data: EventData) => {
+    const eventData = {
+      action: data.action,
+      category: data.category,
+      label: data.label,
+      value: data.value,
+      device: getDeviceType(),
+      data: { timestamp: new Date().toISOString() }
+    }
+
+    // Send to Vercel Analytics
     track(data.action, {
       category: data.category,
       label: data.label,
       value: data.value,
       timestamp: new Date().toISOString()
     })
+
+    // Send to our database (non-blocking)
+    sendToDatabase(eventData)
   }
 
   // Track project view
   const trackProjectView = (projectId: string, projectTitle: string) => {
+    const eventData = {
+      action: 'project_view',
+      category: 'projects',
+      label: projectTitle,
+      device: getDeviceType(),
+      data: { projectId, projectTitle, timestamp: new Date().toISOString() }
+    }
+
+    // Send to Vercel Analytics
     track('project_view', {
       projectId,
       projectTitle,
       device: getDeviceType(),
       timestamp: new Date().toISOString()
     })
+
+    // Send to our database (non-blocking)
+    sendToDatabase(eventData)
   }
 
   // Track button clicks
   const trackClick = (buttonName: string, location: string) => {
+    const eventData = {
+      action: 'button_click',
+      category: 'interaction',
+      label: buttonName,
+      device: getDeviceType(),
+      data: { buttonName, location, timestamp: new Date().toISOString() }
+    }
+
+    // Send to Vercel Analytics
     track('button_click', {
       buttonName,
       location,
       timestamp: new Date().toISOString()
     })
+
+    // Send to our database (non-blocking)
+    sendToDatabase(eventData)
   }
 
   // Track form submissions
   const trackFormSubmit = (formName: string, success: boolean) => {
+    const eventData = {
+      action: 'form_submit',
+      category: 'forms',
+      label: formName,
+      value: success ? 1 : 0,
+      device: getDeviceType(),
+      data: { formName, success, timestamp: new Date().toISOString() }
+    }
+
+    // Send to Vercel Analytics
     track('form_submit', {
       formName,
       success,
       timestamp: new Date().toISOString()
     })
+
+    // Send to our database (non-blocking)
+    sendToDatabase(eventData)
   }
 
   // Track downloads
   const trackDownload = (fileName: string, fileType: string) => {
+    const eventData = {
+      action: 'download',
+      category: 'downloads',
+      label: fileName,
+      device: getDeviceType(),
+      data: { fileName, fileType, timestamp: new Date().toISOString() }
+    }
+
+    // Send to Vercel Analytics
     track('download', {
       fileName,
       fileType,
       timestamp: new Date().toISOString()
     })
+
+    // Send to our database (non-blocking)
+    sendToDatabase(eventData)
   }
 
   // Track theme changes
   const trackThemeChange = (themeName: string) => {
+    const eventData = {
+      action: 'theme_change',
+      category: 'settings',
+      label: themeName,
+      device: getDeviceType(),
+      data: { themeName, timestamp: new Date().toISOString() }
+    }
+
+    // Send to Vercel Analytics
     track('theme_change', {
       themeName,
       timestamp: new Date().toISOString()
     })
+
+    // Send to our database (non-blocking)
+    sendToDatabase(eventData)
   }
 
   // Helper: Get device type
@@ -118,14 +218,27 @@ export function usePageTracking(pageName: string) {
 
     // Track time on page
     const startTime = Date.now()
-    
+
     return () => {
       const timeSpent = Math.round((Date.now() - startTime) / 1000) // in seconds
+
+      const eventData = {
+        action: 'time_on_page',
+        page: pageName,
+        value: timeSpent,
+        device: getDeviceType(),
+        data: { page: pageName, seconds: timeSpent, timestamp: new Date().toISOString() }
+      }
+
+      // Send to Vercel Analytics
       track('time_on_page', {
         page: pageName,
         seconds: timeSpent,
         timestamp: new Date().toISOString()
       })
+
+      // Send to our database (non-blocking)
+      sendToDatabase(eventData)
     }
   }, [pageName, trackPageView])
 }
diff --git a/package-lock.json b/package-lock.json
index 177fde5..6fc5cb1 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -27,9 +27,8 @@
         "qrcode": "^1.5.4",
         "react": "^18.3.1",
         "react-dom": "^18.3.1",
+        "react-easy-crop": "^5.5.6",
         "react-icons": "^5.5.0",
-        "react-markdown": "^10.1.0",
-        "remark-gfm": "^4.0.1",
         "resend": "^6.6.0",
         "tailwind-merge": "^2.2.0"
       },
@@ -2725,39 +2724,13 @@
       "integrity": "sha512-9xlo6R2qDs5uixm0bcIqCeMCE6HiQsIyel9KQySStiyqNl2tnj2mP3DX1Nf56MD6KMenNNlBBsy3LJ7gUEQPXQ==",
       "license": "MIT"
     },
-    "node_modules/@types/debug": {
-      "version": "4.1.12",
-      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.12.tgz",
-      "integrity": "sha512-vIChWdVG3LG1SMxEvI/AK+FWJthlrqlTu7fbrlywTkkaONwk/UAGaULXRlf8vkzFBLVm0zkMdCquhL5aOjhXPQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/ms": "*"
-      }
-    },
     "node_modules/@types/estree": {
       "version": "1.0.8",
       "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
       "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
+      "dev": true,
       "license": "MIT"
     },
-    "node_modules/@types/estree-jsx": {
-      "version": "1.0.5",
-      "resolved": "https://registry.npmjs.org/@types/estree-jsx/-/estree-jsx-1.0.5.tgz",
-      "integrity": "sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/estree": "*"
-      }
-    },
-    "node_modules/@types/hast": {
-      "version": "3.0.4",
-      "resolved": "https://registry.npmjs.org/@types/hast/-/hast-3.0.4.tgz",
-      "integrity": "sha512-WPs+bbQw5aCj+x6laNGWLH3wviHtoCv/P3+otBhbOhJgG8qtpdAMlTCxLtsTWA7LH1Oh/bFCHsBn0TPS5m30EQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "*"
-      }
-    },
     "node_modules/@types/json-schema": {
       "version": "7.0.15",
       "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
@@ -2772,21 +2745,6 @@
       "dev": true,
       "license": "MIT"
     },
-    "node_modules/@types/mdast": {
-      "version": "4.0.4",
-      "resolved": "https://registry.npmjs.org/@types/mdast/-/mdast-4.0.4.tgz",
-      "integrity": "sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "*"
-      }
-    },
-    "node_modules/@types/ms": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
-      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
-      "license": "MIT"
-    },
     "node_modules/@types/node": {
       "version": "20.19.27",
       "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.27.tgz",
@@ -2810,6 +2768,7 @@
       "version": "15.7.15",
       "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.15.tgz",
       "integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
+      "dev": true,
       "license": "MIT"
     },
     "node_modules/@types/qrcode": {
@@ -2825,6 +2784,7 @@
       "version": "18.3.27",
       "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.27.tgz",
       "integrity": "sha512-cisd7gxkzjBKU2GgdYrTdtQx1SORymWyaAFhaxQPK9bYO9ot3Y5OikQRvY0VYQtvwjeQnizCINJAenh/V7MK2w==",
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "@types/prop-types": "*",
@@ -2841,12 +2801,6 @@
         "@types/react": "^18.0.0"
       }
     },
-    "node_modules/@types/unist": {
-      "version": "3.0.3",
-      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
-      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==",
-      "license": "MIT"
-    },
     "node_modules/@typescript-eslint/eslint-plugin": {
       "version": "8.50.0",
       "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.50.0.tgz",
@@ -3116,12 +3070,6 @@
         "url": "https://opencollective.com/typescript-eslint"
       }
     },
-    "node_modules/@ungap/structured-clone": {
-      "version": "1.3.0",
-      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
-      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
-      "license": "ISC"
-    },
     "node_modules/@unrs/resolver-binding-android-arm-eabi": {
       "version": "1.11.1",
       "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
@@ -3788,16 +3736,6 @@
         "node": ">= 0.4"
       }
     },
-    "node_modules/bail": {
-      "version": "2.0.2",
-      "resolved": "https://registry.npmjs.org/bail/-/bail-2.0.2.tgz",
-      "integrity": "sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/balanced-match": {
       "version": "1.0.2",
       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
@@ -4011,16 +3949,6 @@
       ],
       "license": "CC-BY-4.0"
     },
-    "node_modules/ccount": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/ccount/-/ccount-2.0.1.tgz",
-      "integrity": "sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/chalk": {
       "version": "4.1.2",
       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
@@ -4038,46 +3966,6 @@
         "url": "https://github.com/chalk/chalk?sponsor=1"
       }
     },
-    "node_modules/character-entities": {
-      "version": "2.0.2",
-      "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-2.0.2.tgz",
-      "integrity": "sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
-    "node_modules/character-entities-html4": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/character-entities-html4/-/character-entities-html4-2.1.0.tgz",
-      "integrity": "sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
-    "node_modules/character-entities-legacy": {
-      "version": "3.0.0",
-      "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-3.0.0.tgz",
-      "integrity": "sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
-    "node_modules/character-reference-invalid": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-2.0.1.tgz",
-      "integrity": "sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/chokidar": {
       "version": "3.6.0",
       "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
@@ -4160,16 +4048,6 @@
       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
       "license": "MIT"
     },
-    "node_modules/comma-separated-tokens": {
-      "version": "2.0.3",
-      "resolved": "https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-2.0.3.tgz",
-      "integrity": "sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/commander": {
       "version": "4.1.1",
       "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
@@ -4235,6 +4113,7 @@
       "version": "3.2.3",
       "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
       "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
+      "dev": true,
       "license": "MIT"
     },
     "node_modules/damerau-levenshtein": {
@@ -4302,6 +4181,7 @@
       "version": "4.4.3",
       "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
       "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "ms": "^2.1.3"
@@ -4324,19 +4204,6 @@
         "node": ">=0.10.0"
       }
     },
-    "node_modules/decode-named-character-reference": {
-      "version": "1.2.0",
-      "resolved": "https://registry.npmjs.org/decode-named-character-reference/-/decode-named-character-reference-1.2.0.tgz",
-      "integrity": "sha512-c6fcElNV6ShtZXmsgNgFFV5tVX2PaV4g+MOAkb8eXHvn6sryJBrZa9r0zV6+dtTyoCKxtDy5tyQ5ZwQuidtd+Q==",
-      "license": "MIT",
-      "dependencies": {
-        "character-entities": "^2.0.0"
-      },
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/deep-is": {
       "version": "0.1.4",
       "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
@@ -4380,28 +4247,6 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/dequal": {
-      "version": "2.0.3",
-      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
-      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
-      "license": "MIT",
-      "engines": {
-        "node": ">=6"
-      }
-    },
-    "node_modules/devlop": {
-      "version": "1.1.0",
-      "resolved": "https://registry.npmjs.org/devlop/-/devlop-1.1.0.tgz",
-      "integrity": "sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==",
-      "license": "MIT",
-      "dependencies": {
-        "dequal": "^2.0.0"
-      },
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/didyoumean": {
       "version": "1.2.2",
       "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
@@ -5139,16 +4984,6 @@
         "node": ">=4.0"
       }
     },
-    "node_modules/estree-util-is-identifier-name": {
-      "version": "3.0.0",
-      "resolved": "https://registry.npmjs.org/estree-util-is-identifier-name/-/estree-util-is-identifier-name-3.0.0.tgz",
-      "integrity": "sha512-hFtqIDZTIUZ9BXLb8y4pYGyk6+wekIivNVTcmvk8NoOh+VeRn5y6cEHzbURrWbfp1fIqdVipilzj+lfaadNZmg==",
-      "license": "MIT",
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
     "node_modules/esutils": {
       "version": "2.0.3",
       "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
@@ -5159,12 +4994,6 @@
         "node": ">=0.10.0"
       }
     },
-    "node_modules/extend": {
-      "version": "3.0.2",
-      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
-      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
-      "license": "MIT"
-    },
     "node_modules/fast-deep-equal": {
       "version": "3.1.3",
       "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
@@ -5682,46 +5511,6 @@
         "node": ">= 0.4"
       }
     },
-    "node_modules/hast-util-to-jsx-runtime": {
-      "version": "2.3.6",
-      "resolved": "https://registry.npmjs.org/hast-util-to-jsx-runtime/-/hast-util-to-jsx-runtime-2.3.6.tgz",
-      "integrity": "sha512-zl6s8LwNyo1P9uw+XJGvZtdFF1GdAkOg8ujOw+4Pyb76874fLps4ueHXDhXWdk6YHQ6OgUtinliG7RsYvCbbBg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/estree": "^1.0.0",
-        "@types/hast": "^3.0.0",
-        "@types/unist": "^3.0.0",
-        "comma-separated-tokens": "^2.0.0",
-        "devlop": "^1.0.0",
-        "estree-util-is-identifier-name": "^3.0.0",
-        "hast-util-whitespace": "^3.0.0",
-        "mdast-util-mdx-expression": "^2.0.0",
-        "mdast-util-mdx-jsx": "^3.0.0",
-        "mdast-util-mdxjs-esm": "^2.0.0",
-        "property-information": "^7.0.0",
-        "space-separated-tokens": "^2.0.0",
-        "style-to-js": "^1.0.0",
-        "unist-util-position": "^5.0.0",
-        "vfile-message": "^4.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/hast-util-whitespace": {
-      "version": "3.0.0",
-      "resolved": "https://registry.npmjs.org/hast-util-whitespace/-/hast-util-whitespace-3.0.0.tgz",
-      "integrity": "sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/hast": "^3.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
     "node_modules/hermes-estree": {
       "version": "0.25.1",
       "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
@@ -5739,16 +5528,6 @@
         "hermes-estree": "0.25.1"
       }
     },
-    "node_modules/html-url-attributes": {
-      "version": "3.0.1",
-      "resolved": "https://registry.npmjs.org/html-url-attributes/-/html-url-attributes-3.0.1.tgz",
-      "integrity": "sha512-ol6UPyBWqsrO6EJySPz2O7ZSr856WDrEzM5zMqp+FJJLGMW35cLYmmZnl0vztAZxRUoNZJFTCohfjuIJ8I4QBQ==",
-      "license": "MIT",
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
     "node_modules/ignore": {
       "version": "5.3.2",
       "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
@@ -5786,12 +5565,6 @@
         "node": ">=0.8.19"
       }
     },
-    "node_modules/inline-style-parser": {
-      "version": "0.2.7",
-      "resolved": "https://registry.npmjs.org/inline-style-parser/-/inline-style-parser-0.2.7.tgz",
-      "integrity": "sha512-Nb2ctOyNR8DqQoR0OwRG95uNWIC0C1lCgf5Naz5H6Ji72KZ8OcFZLz2P5sNgwlyoJ8Yif11oMuYs5pBQa86csA==",
-      "license": "MIT"
-    },
     "node_modules/internal-slot": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
@@ -5807,30 +5580,6 @@
         "node": ">= 0.4"
       }
     },
-    "node_modules/is-alphabetical": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-2.0.1.tgz",
-      "integrity": "sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
-    "node_modules/is-alphanumerical": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-2.0.1.tgz",
-      "integrity": "sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==",
-      "license": "MIT",
-      "dependencies": {
-        "is-alphabetical": "^2.0.0",
-        "is-decimal": "^2.0.0"
-      },
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/is-array-buffer": {
       "version": "3.0.5",
       "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
@@ -6002,16 +5751,6 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/is-decimal": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/is-decimal/-/is-decimal-2.0.1.tgz",
-      "integrity": "sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/is-extglob": {
       "version": "2.1.1",
       "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
@@ -6080,16 +5819,6 @@
         "node": ">=0.10.0"
       }
     },
-    "node_modules/is-hexadecimal": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-2.0.1.tgz",
-      "integrity": "sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/is-map": {
       "version": "2.0.3",
       "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
@@ -6143,18 +5872,6 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/is-plain-obj": {
-      "version": "4.1.0",
-      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
-      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
-      "license": "MIT",
-      "engines": {
-        "node": ">=12"
-      },
-      "funding": {
-        "url": "https://github.com/sponsors/sindresorhus"
-      }
-    },
     "node_modules/is-regex": {
       "version": "1.2.1",
       "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
@@ -6520,16 +6237,6 @@
       "dev": true,
       "license": "MIT"
     },
-    "node_modules/longest-streak": {
-      "version": "3.1.0",
-      "resolved": "https://registry.npmjs.org/longest-streak/-/longest-streak-3.1.0.tgz",
-      "integrity": "sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/loose-envify": {
       "version": "1.4.0",
       "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
@@ -6561,16 +6268,6 @@
         "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
       }
     },
-    "node_modules/markdown-table": {
-      "version": "3.0.4",
-      "resolved": "https://registry.npmjs.org/markdown-table/-/markdown-table-3.0.4.tgz",
-      "integrity": "sha512-wiYz4+JrLyb/DqW2hkFJxP7Vd7JuTDm77fvbM8VfEQdmSMqcImWeeRbHwZjBjIFki/VaMK2BhFi7oUUZeM5bqw==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/math-intrinsics": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
@@ -6581,924 +6278,80 @@
         "node": ">= 0.4"
       }
     },
-    "node_modules/mdast-util-find-and-replace": {
-      "version": "3.0.2",
-      "resolved": "https://registry.npmjs.org/mdast-util-find-and-replace/-/mdast-util-find-and-replace-3.0.2.tgz",
-      "integrity": "sha512-Tmd1Vg/m3Xz43afeNxDIhWRtFZgM2VLyaf4vSTYwudTyeuTneoL3qtWMA5jeLyz/O1vDJmmV4QuScFCA2tBPwg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "escape-string-regexp": "^5.0.0",
-        "unist-util-is": "^6.0.0",
-        "unist-util-visit-parents": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp": {
-      "version": "5.0.0",
-      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-5.0.0.tgz",
-      "integrity": "sha512-/veY75JbMK4j1yjvuUxuVsiS/hr/4iHs9FTT6cgTexxdE0Ly/glccBAkloH/DofkjRbZU3bnoj38mOmhkZ0lHw==",
+    "node_modules/merge2": {
+      "version": "1.4.1",
+      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
+      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
+      "dev": true,
       "license": "MIT",
       "engines": {
-        "node": ">=12"
-      },
-      "funding": {
-        "url": "https://github.com/sponsors/sindresorhus"
+        "node": ">= 8"
       }
     },
-    "node_modules/mdast-util-from-markdown": {
-      "version": "2.0.2",
-      "resolved": "https://registry.npmjs.org/mdast-util-from-markdown/-/mdast-util-from-markdown-2.0.2.tgz",
-      "integrity": "sha512-uZhTV/8NBuw0WHkPTrCqDOl0zVe1BIng5ZtHoDk49ME1qqcjYmmLmOf0gELgcRMxN4w2iuIeVso5/6QymSrgmA==",
+    "node_modules/micromatch": {
+      "version": "4.0.8",
+      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
+      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
+      "dev": true,
       "license": "MIT",
       "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "@types/unist": "^3.0.0",
-        "decode-named-character-reference": "^1.0.0",
-        "devlop": "^1.0.0",
-        "mdast-util-to-string": "^4.0.0",
-        "micromark": "^4.0.0",
-        "micromark-util-decode-numeric-character-reference": "^2.0.0",
-        "micromark-util-decode-string": "^2.0.0",
-        "micromark-util-normalize-identifier": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0",
-        "unist-util-stringify-position": "^4.0.0"
+        "braces": "^3.0.3",
+        "picomatch": "^2.3.1"
       },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
+      "engines": {
+        "node": ">=8.6"
       }
     },
-    "node_modules/mdast-util-gfm": {
-      "version": "3.1.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-gfm/-/mdast-util-gfm-3.1.0.tgz",
-      "integrity": "sha512-0ulfdQOM3ysHhCJ1p06l0b0VKlhU0wuQs3thxZQagjcjPrlFRqY215uZGHHJan9GEAXd9MbfPjFJz+qMkVR6zQ==",
-      "license": "MIT",
+    "node_modules/minimatch": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
+      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
+      "dev": true,
+      "license": "ISC",
       "dependencies": {
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-gfm-autolink-literal": "^2.0.0",
-        "mdast-util-gfm-footnote": "^2.0.0",
-        "mdast-util-gfm-strikethrough": "^2.0.0",
-        "mdast-util-gfm-table": "^2.0.0",
-        "mdast-util-gfm-task-list-item": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0"
+        "brace-expansion": "^1.1.7"
       },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
+      "engines": {
+        "node": "*"
       }
     },
-    "node_modules/mdast-util-gfm-autolink-literal": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/mdast-util-gfm-autolink-literal/-/mdast-util-gfm-autolink-literal-2.0.1.tgz",
-      "integrity": "sha512-5HVP2MKaP6L+G6YaxPNjuL0BPrq9orG3TsrZ9YXbA3vDw/ACI4MEsnoDpn6ZNm7GnZgtAcONJyPhOP8tNJQavQ==",
+    "node_modules/minimist": {
+      "version": "1.2.8",
+      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
+      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
+      "dev": true,
       "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "ccount": "^2.0.0",
-        "devlop": "^1.0.0",
-        "mdast-util-find-and-replace": "^3.0.0",
-        "micromark-util-character": "^2.0.0"
-      },
       "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/mdast-util-gfm-footnote": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-gfm-footnote/-/mdast-util-gfm-footnote-2.1.0.tgz",
-      "integrity": "sha512-sqpDWlsHn7Ac9GNZQMeUzPQSMzR6Wv0WKRNvQRg0KqHh02fpTz69Qc1QSseNX29bhz1ROIyNyxExfawVKTm1GQ==",
+    "node_modules/motion-dom": {
+      "version": "12.23.23",
+      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.23.23.tgz",
+      "integrity": "sha512-n5yolOs0TQQBRUFImrRfs/+6X4p3Q4n1dUEqt/H58Vx7OW6RF+foWEgmTVDhIWJIMXOuNNL0apKH2S16en9eiA==",
       "license": "MIT",
       "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "devlop": "^1.1.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0",
-        "micromark-util-normalize-identifier": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
+        "motion-utils": "^12.23.6"
       }
     },
-    "node_modules/mdast-util-gfm-strikethrough": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-gfm-strikethrough/-/mdast-util-gfm-strikethrough-2.0.0.tgz",
-      "integrity": "sha512-mKKb915TF+OC5ptj5bJ7WFRPdYtuHv0yTRxK2tJvi+BDqbkiG7h7u/9SI89nRAYcmap2xHQL9D+QG/6wSrTtXg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-gfm-table": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-gfm-table/-/mdast-util-gfm-table-2.0.0.tgz",
-      "integrity": "sha512-78UEvebzz/rJIxLvE7ZtDd/vIQ0RHv+3Mh5DR96p7cS7HsBhYIICDBCu8csTNWNO6tBWfqXPWekRuj2FNOGOZg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "devlop": "^1.0.0",
-        "markdown-table": "^3.0.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-gfm-task-list-item": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-gfm-task-list-item/-/mdast-util-gfm-task-list-item-2.0.0.tgz",
-      "integrity": "sha512-IrtvNvjxC1o06taBAVJznEnkiHxLFTzgonUdy8hzFVeDun0uTjxxrRGVaNFqkU1wJR3RBPEfsxmU6jDWPofrTQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "devlop": "^1.0.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-mdx-expression": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/mdast-util-mdx-expression/-/mdast-util-mdx-expression-2.0.1.tgz",
-      "integrity": "sha512-J6f+9hUp+ldTZqKRSg7Vw5V6MqjATc+3E4gf3CFNcuZNWD8XdyI6zQ8GqH7f8169MM6P7hMBRDVGnn7oHB9kXQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/estree-jsx": "^1.0.0",
-        "@types/hast": "^3.0.0",
-        "@types/mdast": "^4.0.0",
-        "devlop": "^1.0.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-mdx-jsx": {
-      "version": "3.2.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-mdx-jsx/-/mdast-util-mdx-jsx-3.2.0.tgz",
-      "integrity": "sha512-lj/z8v0r6ZtsN/cGNNtemmmfoLAFZnjMbNyLzBafjzikOM+glrjNHPlf6lQDOTccj9n5b0PPihEBbhneMyGs1Q==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/estree-jsx": "^1.0.0",
-        "@types/hast": "^3.0.0",
-        "@types/mdast": "^4.0.0",
-        "@types/unist": "^3.0.0",
-        "ccount": "^2.0.0",
-        "devlop": "^1.1.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0",
-        "parse-entities": "^4.0.0",
-        "stringify-entities": "^4.0.0",
-        "unist-util-stringify-position": "^4.0.0",
-        "vfile-message": "^4.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-mdxjs-esm": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/mdast-util-mdxjs-esm/-/mdast-util-mdxjs-esm-2.0.1.tgz",
-      "integrity": "sha512-EcmOpxsZ96CvlP03NghtH1EsLtr0n9Tm4lPUJUBccV9RwUOneqSycg19n5HGzCf+10LozMRSObtVr3ee1WoHtg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/estree-jsx": "^1.0.0",
-        "@types/hast": "^3.0.0",
-        "@types/mdast": "^4.0.0",
-        "devlop": "^1.0.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "mdast-util-to-markdown": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-phrasing": {
-      "version": "4.1.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-phrasing/-/mdast-util-phrasing-4.1.0.tgz",
-      "integrity": "sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "unist-util-is": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-to-hast": {
-      "version": "13.2.1",
-      "resolved": "https://registry.npmjs.org/mdast-util-to-hast/-/mdast-util-to-hast-13.2.1.tgz",
-      "integrity": "sha512-cctsq2wp5vTsLIcaymblUriiTcZd0CwWtCbLvrOzYCDZoWyMNV8sZ7krj09FSnsiJi3WVsHLM4k6Dq/yaPyCXA==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/hast": "^3.0.0",
-        "@types/mdast": "^4.0.0",
-        "@ungap/structured-clone": "^1.0.0",
-        "devlop": "^1.0.0",
-        "micromark-util-sanitize-uri": "^2.0.0",
-        "trim-lines": "^3.0.0",
-        "unist-util-position": "^5.0.0",
-        "unist-util-visit": "^5.0.0",
-        "vfile": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-to-markdown": {
-      "version": "2.1.2",
-      "resolved": "https://registry.npmjs.org/mdast-util-to-markdown/-/mdast-util-to-markdown-2.1.2.tgz",
-      "integrity": "sha512-xj68wMTvGXVOKonmog6LwyJKrYXZPvlwabaryTjLh9LuvovB/KAH+kvi8Gjj+7rJjsFi23nkUxRQv1KqSroMqA==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "@types/unist": "^3.0.0",
-        "longest-streak": "^3.0.0",
-        "mdast-util-phrasing": "^4.0.0",
-        "mdast-util-to-string": "^4.0.0",
-        "micromark-util-classify-character": "^2.0.0",
-        "micromark-util-decode-string": "^2.0.0",
-        "unist-util-visit": "^5.0.0",
-        "zwitch": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/mdast-util-to-string": {
-      "version": "4.0.0",
-      "resolved": "https://registry.npmjs.org/mdast-util-to-string/-/mdast-util-to-string-4.0.0.tgz",
-      "integrity": "sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/merge2": {
-      "version": "1.4.1",
-      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
-      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
-      "dev": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">= 8"
-      }
-    },
-    "node_modules/micromark": {
-      "version": "4.0.2",
-      "resolved": "https://registry.npmjs.org/micromark/-/micromark-4.0.2.tgz",
-      "integrity": "sha512-zpe98Q6kvavpCr1NPVSCMebCKfD7CA2NqZ+rykeNhONIJBpc1tFKt9hucLGwha3jNTNI8lHpctWJWoimVF4PfA==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "@types/debug": "^4.0.0",
-        "debug": "^4.0.0",
-        "decode-named-character-reference": "^1.0.0",
-        "devlop": "^1.0.0",
-        "micromark-core-commonmark": "^2.0.0",
-        "micromark-factory-space": "^2.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-chunked": "^2.0.0",
-        "micromark-util-combine-extensions": "^2.0.0",
-        "micromark-util-decode-numeric-character-reference": "^2.0.0",
-        "micromark-util-encode": "^2.0.0",
-        "micromark-util-normalize-identifier": "^2.0.0",
-        "micromark-util-resolve-all": "^2.0.0",
-        "micromark-util-sanitize-uri": "^2.0.0",
-        "micromark-util-subtokenize": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-core-commonmark": {
-      "version": "2.0.3",
-      "resolved": "https://registry.npmjs.org/micromark-core-commonmark/-/micromark-core-commonmark-2.0.3.tgz",
-      "integrity": "sha512-RDBrHEMSxVFLg6xvnXmb1Ayr2WzLAWjeSATAoxwKYJV94TeNavgoIdA0a9ytzDSVzBy2YKFK+emCPOEibLeCrg==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "decode-named-character-reference": "^1.0.0",
-        "devlop": "^1.0.0",
-        "micromark-factory-destination": "^2.0.0",
-        "micromark-factory-label": "^2.0.0",
-        "micromark-factory-space": "^2.0.0",
-        "micromark-factory-title": "^2.0.0",
-        "micromark-factory-whitespace": "^2.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-chunked": "^2.0.0",
-        "micromark-util-classify-character": "^2.0.0",
-        "micromark-util-html-tag-name": "^2.0.0",
-        "micromark-util-normalize-identifier": "^2.0.0",
-        "micromark-util-resolve-all": "^2.0.0",
-        "micromark-util-subtokenize": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-extension-gfm": {
-      "version": "3.0.0",
-      "resolved": "https://registry.npmjs.org/micromark-extension-gfm/-/micromark-extension-gfm-3.0.0.tgz",
-      "integrity": "sha512-vsKArQsicm7t0z2GugkCKtZehqUm31oeGBV/KVSorWSy8ZlNAv7ytjFhvaryUiCUJYqs+NoE6AFhpQvBTM6Q4w==",
-      "license": "MIT",
-      "dependencies": {
-        "micromark-extension-gfm-autolink-literal": "^2.0.0",
-        "micromark-extension-gfm-footnote": "^2.0.0",
-        "micromark-extension-gfm-strikethrough": "^2.0.0",
-        "micromark-extension-gfm-table": "^2.0.0",
-        "micromark-extension-gfm-tagfilter": "^2.0.0",
-        "micromark-extension-gfm-task-list-item": "^2.0.0",
-        "micromark-util-combine-extensions": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/micromark-extension-gfm-autolink-literal": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-autolink-literal/-/micromark-extension-gfm-autolink-literal-2.1.0.tgz",
-      "integrity": "sha512-oOg7knzhicgQ3t4QCjCWgTmfNhvQbDDnJeVu9v81r7NltNCVmhPy1fJRX27pISafdjL+SVc4d3l48Gb6pbRypw==",
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-sanitize-uri": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/micromark-extension-gfm-footnote": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-footnote/-/micromark-extension-gfm-footnote-2.1.0.tgz",
-      "integrity": "sha512-/yPhxI1ntnDNsiHtzLKYnE3vf9JZ6cAisqVDauhp4CEHxlb4uoOTxOCJ+9s51bIB8U1N1FJ1RXOKTIlD5B/gqw==",
-      "license": "MIT",
-      "dependencies": {
-        "devlop": "^1.0.0",
-        "micromark-core-commonmark": "^2.0.0",
-        "micromark-factory-space": "^2.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-normalize-identifier": "^2.0.0",
-        "micromark-util-sanitize-uri": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/micromark-extension-gfm-strikethrough": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-strikethrough/-/micromark-extension-gfm-strikethrough-2.1.0.tgz",
-      "integrity": "sha512-ADVjpOOkjz1hhkZLlBiYA9cR2Anf8F4HqZUO6e5eDcPQd0Txw5fxLzzxnEkSkfnD0wziSGiv7sYhk/ktvbf1uw==",
-      "license": "MIT",
-      "dependencies": {
-        "devlop": "^1.0.0",
-        "micromark-util-chunked": "^2.0.0",
-        "micromark-util-classify-character": "^2.0.0",
-        "micromark-util-resolve-all": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/micromark-extension-gfm-table": {
-      "version": "2.1.1",
-      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-table/-/micromark-extension-gfm-table-2.1.1.tgz",
-      "integrity": "sha512-t2OU/dXXioARrC6yWfJ4hqB7rct14e8f7m0cbI5hUmDyyIlwv5vEtooptH8INkbLzOatzKuVbQmAYcbWoyz6Dg==",
-      "license": "MIT",
-      "dependencies": {
-        "devlop": "^1.0.0",
-        "micromark-factory-space": "^2.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/micromark-extension-gfm-tagfilter": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-tagfilter/-/micromark-extension-gfm-tagfilter-2.0.0.tgz",
-      "integrity": "sha512-xHlTOmuCSotIA8TW1mDIM6X2O1SiX5P9IuDtqGonFhEK0qgRI4yeC6vMxEV2dgyr2TiD+2PQ10o+cOhdVAcwfg==",
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-types": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/micromark-extension-gfm-task-list-item": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-task-list-item/-/micromark-extension-gfm-task-list-item-2.1.0.tgz",
-      "integrity": "sha512-qIBZhqxqI6fjLDYFTBIa4eivDMnP+OZqsNwmQ3xNLE4Cxwc+zfQEfbs6tzAo2Hjq+bh6q5F+Z8/cksrLFYWQQw==",
-      "license": "MIT",
-      "dependencies": {
-        "devlop": "^1.0.0",
-        "micromark-factory-space": "^2.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/micromark-factory-destination": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-factory-destination/-/micromark-factory-destination-2.0.1.tgz",
-      "integrity": "sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-factory-label": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-factory-label/-/micromark-factory-label-2.0.1.tgz",
-      "integrity": "sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "devlop": "^1.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-factory-space": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-factory-space/-/micromark-factory-space-2.0.1.tgz",
-      "integrity": "sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-factory-title": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-factory-title/-/micromark-factory-title-2.0.1.tgz",
-      "integrity": "sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-factory-space": "^2.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-factory-whitespace": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-factory-whitespace/-/micromark-factory-whitespace-2.0.1.tgz",
-      "integrity": "sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-factory-space": "^2.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-character": {
-      "version": "2.1.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-character/-/micromark-util-character-2.1.1.tgz",
-      "integrity": "sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-chunked": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-chunked/-/micromark-util-chunked-2.0.1.tgz",
-      "integrity": "sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-symbol": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-classify-character": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-classify-character/-/micromark-util-classify-character-2.0.1.tgz",
-      "integrity": "sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-combine-extensions": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-combine-extensions/-/micromark-util-combine-extensions-2.0.1.tgz",
-      "integrity": "sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-chunked": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-decode-numeric-character-reference": {
-      "version": "2.0.2",
-      "resolved": "https://registry.npmjs.org/micromark-util-decode-numeric-character-reference/-/micromark-util-decode-numeric-character-reference-2.0.2.tgz",
-      "integrity": "sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-symbol": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-decode-string": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-decode-string/-/micromark-util-decode-string-2.0.1.tgz",
-      "integrity": "sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "decode-named-character-reference": "^1.0.0",
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-decode-numeric-character-reference": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-encode": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-encode/-/micromark-util-encode-2.0.1.tgz",
-      "integrity": "sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT"
-    },
-    "node_modules/micromark-util-html-tag-name": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-html-tag-name/-/micromark-util-html-tag-name-2.0.1.tgz",
-      "integrity": "sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT"
-    },
-    "node_modules/micromark-util-normalize-identifier": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-normalize-identifier/-/micromark-util-normalize-identifier-2.0.1.tgz",
-      "integrity": "sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-symbol": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-resolve-all": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-resolve-all/-/micromark-util-resolve-all-2.0.1.tgz",
-      "integrity": "sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-sanitize-uri": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-sanitize-uri/-/micromark-util-sanitize-uri-2.0.1.tgz",
-      "integrity": "sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "micromark-util-character": "^2.0.0",
-        "micromark-util-encode": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-subtokenize": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/micromark-util-subtokenize/-/micromark-util-subtokenize-2.1.0.tgz",
-      "integrity": "sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT",
-      "dependencies": {
-        "devlop": "^1.0.0",
-        "micromark-util-chunked": "^2.0.0",
-        "micromark-util-symbol": "^2.0.0",
-        "micromark-util-types": "^2.0.0"
-      }
-    },
-    "node_modules/micromark-util-symbol": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/micromark-util-symbol/-/micromark-util-symbol-2.0.1.tgz",
-      "integrity": "sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT"
-    },
-    "node_modules/micromark-util-types": {
-      "version": "2.0.2",
-      "resolved": "https://registry.npmjs.org/micromark-util-types/-/micromark-util-types-2.0.2.tgz",
-      "integrity": "sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==",
-      "funding": [
-        {
-          "type": "GitHub Sponsors",
-          "url": "https://github.com/sponsors/unifiedjs"
-        },
-        {
-          "type": "OpenCollective",
-          "url": "https://opencollective.com/unified"
-        }
-      ],
-      "license": "MIT"
-    },
-    "node_modules/micromatch": {
-      "version": "4.0.8",
-      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
-      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
-      "dev": true,
-      "license": "MIT",
-      "dependencies": {
-        "braces": "^3.0.3",
-        "picomatch": "^2.3.1"
-      },
-      "engines": {
-        "node": ">=8.6"
-      }
-    },
-    "node_modules/minimatch": {
-      "version": "3.1.2",
-      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
-      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
-      "dev": true,
-      "license": "ISC",
-      "dependencies": {
-        "brace-expansion": "^1.1.7"
-      },
-      "engines": {
-        "node": "*"
-      }
-    },
-    "node_modules/minimist": {
-      "version": "1.2.8",
-      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
-      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
-      "dev": true,
-      "license": "MIT",
-      "funding": {
-        "url": "https://github.com/sponsors/ljharb"
-      }
-    },
-    "node_modules/motion-dom": {
-      "version": "12.23.23",
-      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.23.23.tgz",
-      "integrity": "sha512-n5yolOs0TQQBRUFImrRfs/+6X4p3Q4n1dUEqt/H58Vx7OW6RF+foWEgmTVDhIWJIMXOuNNL0apKH2S16en9eiA==",
-      "license": "MIT",
-      "dependencies": {
-        "motion-utils": "^12.23.6"
-      }
-    },
-    "node_modules/motion-utils": {
-      "version": "12.23.6",
-      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.23.6.tgz",
-      "integrity": "sha512-eAWoPgr4eFEOFfg2WjIsMoqJTW6Z8MTUCgn/GZ3VRpClWBdnbjryiA3ZSNLyxCTmCQx4RmYX6jX1iWHbenUPNQ==",
-      "license": "MIT"
-    },
-    "node_modules/ms": {
-      "version": "2.1.3",
-      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
-      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
-      "license": "MIT"
-    },
-    "node_modules/mz": {
-      "version": "2.7.0",
-      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
-      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
-      "dev": true,
+    "node_modules/motion-utils": {
+      "version": "12.23.6",
+      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.23.6.tgz",
+      "integrity": "sha512-eAWoPgr4eFEOFfg2WjIsMoqJTW6Z8MTUCgn/GZ3VRpClWBdnbjryiA3ZSNLyxCTmCQx4RmYX6jX1iWHbenUPNQ==",
+      "license": "MIT"
+    },
+    "node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/mz": {
+      "version": "2.7.0",
+      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
+      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "any-promise": "^1.0.0",
@@ -7683,6 +6536,12 @@
         "node": ">=0.10.0"
       }
     },
+    "node_modules/normalize-wheel": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/normalize-wheel/-/normalize-wheel-1.0.1.tgz",
+      "integrity": "sha512-1OnlAPZ3zgrk8B91HyRj+eVv+kS5u+Z0SCsak6Xil/kmgEia50ga7zfkumayonZrImffAxPU/5WcyGhzetHNPA==",
+      "license": "BSD-3-Clause"
+    },
     "node_modules/oauth": {
       "version": "0.9.15",
       "resolved": "https://registry.npmjs.org/oauth/-/oauth-0.9.15.tgz",
@@ -7964,31 +6823,6 @@
         "node": ">=6"
       }
     },
-    "node_modules/parse-entities": {
-      "version": "4.0.2",
-      "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-4.0.2.tgz",
-      "integrity": "sha512-GG2AQYWoLgL877gQIKeRPGO1xF9+eG1ujIb5soS5gPvLQ1y2o8FL90w2QWNdf9I361Mpp7726c+lj3U0qK1uGw==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^2.0.0",
-        "character-entities-legacy": "^3.0.0",
-        "character-reference-invalid": "^2.0.0",
-        "decode-named-character-reference": "^1.0.0",
-        "is-alphanumerical": "^2.0.0",
-        "is-decimal": "^2.0.0",
-        "is-hexadecimal": "^2.0.0"
-      },
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
-    "node_modules/parse-entities/node_modules/@types/unist": {
-      "version": "2.0.11",
-      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
-      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
-      "license": "MIT"
-    },
     "node_modules/path-exists": {
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
@@ -8441,16 +7275,6 @@
         "react-is": "^16.13.1"
       }
     },
-    "node_modules/property-information": {
-      "version": "7.1.0",
-      "resolved": "https://registry.npmjs.org/property-information/-/property-information-7.1.0.tgz",
-      "integrity": "sha512-TwEZ+X+yCJmYfL7TPUOcvBZ4QfoT5YenQiJuX//0th53DE6w0xxLEtfK3iyryQFddXuvkIk51EEgrJQ0WJkOmQ==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/punycode": {
       "version": "2.3.1",
       "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
@@ -8530,6 +7354,20 @@
         "react": "^18.3.1"
       }
     },
+    "node_modules/react-easy-crop": {
+      "version": "5.5.6",
+      "resolved": "https://registry.npmjs.org/react-easy-crop/-/react-easy-crop-5.5.6.tgz",
+      "integrity": "sha512-Jw3/ozs8uXj3NpL511Suc4AHY+mLRO23rUgipXvNYKqezcFSYHxe4QXibBymkOoY6oOtLVMPO2HNPRHYvMPyTw==",
+      "license": "MIT",
+      "dependencies": {
+        "normalize-wheel": "^1.0.1",
+        "tslib": "^2.0.1"
+      },
+      "peerDependencies": {
+        "react": ">=16.4.0",
+        "react-dom": ">=16.4.0"
+      }
+    },
     "node_modules/react-icons": {
       "version": "5.5.0",
       "resolved": "https://registry.npmjs.org/react-icons/-/react-icons-5.5.0.tgz",
@@ -8546,33 +7384,6 @@
       "dev": true,
       "license": "MIT"
     },
-    "node_modules/react-markdown": {
-      "version": "10.1.0",
-      "resolved": "https://registry.npmjs.org/react-markdown/-/react-markdown-10.1.0.tgz",
-      "integrity": "sha512-qKxVopLT/TyA6BX3Ue5NwabOsAzm0Q7kAPwq6L+wWDwisYs7R8vZ0nRXqq6rkueboxpkjvLGU9fWifiX/ZZFxQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/hast": "^3.0.0",
-        "@types/mdast": "^4.0.0",
-        "devlop": "^1.0.0",
-        "hast-util-to-jsx-runtime": "^2.0.0",
-        "html-url-attributes": "^3.0.0",
-        "mdast-util-to-hast": "^13.0.0",
-        "remark-parse": "^11.0.0",
-        "remark-rehype": "^11.0.0",
-        "unified": "^11.0.0",
-        "unist-util-visit": "^5.0.0",
-        "vfile": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      },
-      "peerDependencies": {
-        "@types/react": ">=18",
-        "react": ">=18"
-      }
-    },
     "node_modules/read-cache": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
@@ -8640,72 +7451,6 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/remark-gfm": {
-      "version": "4.0.1",
-      "resolved": "https://registry.npmjs.org/remark-gfm/-/remark-gfm-4.0.1.tgz",
-      "integrity": "sha512-1quofZ2RQ9EWdeN34S79+KExV1764+wCUGop5CPL1WGdD0ocPpu91lzPGbwWMECpEpd42kJGQwzRfyov9j4yNg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "mdast-util-gfm": "^3.0.0",
-        "micromark-extension-gfm": "^3.0.0",
-        "remark-parse": "^11.0.0",
-        "remark-stringify": "^11.0.0",
-        "unified": "^11.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/remark-parse": {
-      "version": "11.0.0",
-      "resolved": "https://registry.npmjs.org/remark-parse/-/remark-parse-11.0.0.tgz",
-      "integrity": "sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "mdast-util-from-markdown": "^2.0.0",
-        "micromark-util-types": "^2.0.0",
-        "unified": "^11.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/remark-rehype": {
-      "version": "11.1.2",
-      "resolved": "https://registry.npmjs.org/remark-rehype/-/remark-rehype-11.1.2.tgz",
-      "integrity": "sha512-Dh7l57ianaEoIpzbp0PC9UKAdCSVklD8E5Rpw7ETfbTl3FqcOOgq5q2LVDhgGCkaBv7p24JXikPdvhhmHvKMsw==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/hast": "^3.0.0",
-        "@types/mdast": "^4.0.0",
-        "mdast-util-to-hast": "^13.0.0",
-        "unified": "^11.0.0",
-        "vfile": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/remark-stringify": {
-      "version": "11.0.0",
-      "resolved": "https://registry.npmjs.org/remark-stringify/-/remark-stringify-11.0.0.tgz",
-      "integrity": "sha512-1OSmLd3awB/t8qdoEOMazZkNsfVTeY4fTsgzcQFdXNq8ToTN4ZGwrMnlda4K6smTFKD+GRV6O48i6Z4iKgPPpw==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/mdast": "^4.0.0",
-        "mdast-util-to-markdown": "^2.0.0",
-        "unified": "^11.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
     "node_modules/require-directory": {
       "version": "2.1.1",
       "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
@@ -9060,16 +7805,6 @@
         "node": ">=0.10.0"
       }
     },
-    "node_modules/space-separated-tokens": {
-      "version": "2.0.2",
-      "resolved": "https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-2.0.2.tgz",
-      "integrity": "sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/stable-hash": {
       "version": "0.0.5",
       "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
@@ -9232,20 +7967,6 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/stringify-entities": {
-      "version": "4.0.4",
-      "resolved": "https://registry.npmjs.org/stringify-entities/-/stringify-entities-4.0.4.tgz",
-      "integrity": "sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==",
-      "license": "MIT",
-      "dependencies": {
-        "character-entities-html4": "^2.0.0",
-        "character-entities-legacy": "^3.0.0"
-      },
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/strip-ansi": {
       "version": "6.0.1",
       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
@@ -9293,24 +8014,6 @@
       ],
       "license": "MIT"
     },
-    "node_modules/style-to-js": {
-      "version": "1.1.21",
-      "resolved": "https://registry.npmjs.org/style-to-js/-/style-to-js-1.1.21.tgz",
-      "integrity": "sha512-RjQetxJrrUJLQPHbLku6U/ocGtzyjbJMP9lCNK7Ag0CNh690nSH8woqWH9u16nMjYBAok+i7JO1NP2pOy8IsPQ==",
-      "license": "MIT",
-      "dependencies": {
-        "style-to-object": "1.0.14"
-      }
-    },
-    "node_modules/style-to-object": {
-      "version": "1.0.14",
-      "resolved": "https://registry.npmjs.org/style-to-object/-/style-to-object-1.0.14.tgz",
-      "integrity": "sha512-LIN7rULI0jBscWQYaSswptyderlarFkjQ+t79nzty8tcIAceVomEVlLzH5VP4Cmsv6MtKhs7qaAiwlcp+Mgaxw==",
-      "license": "MIT",
-      "dependencies": {
-        "inline-style-parser": "0.2.7"
-      }
-    },
     "node_modules/styled-jsx": {
       "version": "5.1.1",
       "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.1.tgz",
@@ -9599,26 +8302,6 @@
         "node": ">=8.0"
       }
     },
-    "node_modules/trim-lines": {
-      "version": "3.0.1",
-      "resolved": "https://registry.npmjs.org/trim-lines/-/trim-lines-3.0.1.tgz",
-      "integrity": "sha512-kRj8B+YHZCc9kQYdWfJB2/oUl9rA99qbowYYBtr4ui4mZyAQ2JpvVBd/6U2YloATfqBhBTSMhTpgBHtU0Mf3Rg==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
-    "node_modules/trough": {
-      "version": "2.2.0",
-      "resolved": "https://registry.npmjs.org/trough/-/trough-2.2.0.tgz",
-      "integrity": "sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
-    },
     "node_modules/ts-api-utils": {
       "version": "2.1.0",
       "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
@@ -9845,93 +8528,6 @@
       "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
       "license": "MIT"
     },
-    "node_modules/unified": {
-      "version": "11.0.5",
-      "resolved": "https://registry.npmjs.org/unified/-/unified-11.0.5.tgz",
-      "integrity": "sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0",
-        "bail": "^2.0.0",
-        "devlop": "^1.0.0",
-        "extend": "^3.0.0",
-        "is-plain-obj": "^4.0.0",
-        "trough": "^2.0.0",
-        "vfile": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/unist-util-is": {
-      "version": "6.0.1",
-      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-6.0.1.tgz",
-      "integrity": "sha512-LsiILbtBETkDz8I9p1dQ0uyRUWuaQzd/cuEeS1hoRSyW5E5XGmTzlwY1OrNzzakGowI9Dr/I8HVaw4hTtnxy8g==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/unist-util-position": {
-      "version": "5.0.0",
-      "resolved": "https://registry.npmjs.org/unist-util-position/-/unist-util-position-5.0.0.tgz",
-      "integrity": "sha512-fucsC7HjXvkB5R3kTCO7kUjRdrS0BJt3M/FPxmHMBOm8JQi2BsHAHFsy27E0EolP8rp0NzXsJ+jNPyDWvOJZPA==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/unist-util-stringify-position": {
-      "version": "4.0.0",
-      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-4.0.0.tgz",
-      "integrity": "sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/unist-util-visit": {
-      "version": "5.0.0",
-      "resolved": "https://registry.npmjs.org/unist-util-visit/-/unist-util-visit-5.0.0.tgz",
-      "integrity": "sha512-MR04uvD+07cwl/yhVuVWAtw+3GOR/knlL55Nd/wAdblk27GCVt3lqpTivy/tkJcZoNPzTwS1Y+KMojlLDhoTzg==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0",
-        "unist-util-is": "^6.0.0",
-        "unist-util-visit-parents": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/unist-util-visit-parents": {
-      "version": "6.0.2",
-      "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-6.0.2.tgz",
-      "integrity": "sha512-goh1s1TBrqSqukSc8wrjwWhL0hiJxgA8m4kFxGlQ+8FYQ3C/m11FcTs4YYem7V664AhHVvgoQLk890Ssdsr2IQ==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0",
-        "unist-util-is": "^6.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
     "node_modules/unrs-resolver": {
       "version": "1.11.1",
       "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
@@ -10034,34 +8630,6 @@
         "uuid": "dist/bin/uuid"
       }
     },
-    "node_modules/vfile": {
-      "version": "6.0.3",
-      "resolved": "https://registry.npmjs.org/vfile/-/vfile-6.0.3.tgz",
-      "integrity": "sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0",
-        "vfile-message": "^4.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
-    "node_modules/vfile-message": {
-      "version": "4.0.3",
-      "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-4.0.3.tgz",
-      "integrity": "sha512-QTHzsGd1EhbZs4AsQ20JX1rC3cOlt/IWJruk893DfLRr57lcnOeMaWG4K0JrRta4mIJZKth2Au3mM3u03/JWKw==",
-      "license": "MIT",
-      "dependencies": {
-        "@types/unist": "^3.0.0",
-        "unist-util-stringify-position": "^4.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/unified"
-      }
-    },
     "node_modules/which": {
       "version": "2.0.2",
       "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
@@ -10332,16 +8900,6 @@
       "peerDependencies": {
         "zod": "^3.25.0 || ^4.0.0"
       }
-    },
-    "node_modules/zwitch": {
-      "version": "2.0.4",
-      "resolved": "https://registry.npmjs.org/zwitch/-/zwitch-2.0.4.tgz",
-      "integrity": "sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==",
-      "license": "MIT",
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/wooorm"
-      }
     }
   }
 }
diff --git a/package.json b/package.json
index dda5c0e..3f10f9a 100644
--- a/package.json
+++ b/package.json
@@ -36,9 +36,8 @@
     "qrcode": "^1.5.4",
     "react": "^18.3.1",
     "react-dom": "^18.3.1",
+    "react-easy-crop": "^5.5.6",
     "react-icons": "^5.5.0",
-    "react-markdown": "^10.1.0",
-    "remark-gfm": "^4.0.1",
     "resend": "^6.6.0",
     "tailwind-merge": "^2.2.0"
   },
diff --git a/prisma/schema.prisma b/prisma/schema.prisma
index d7f26cd..a47f34f 100644
--- a/prisma/schema.prisma
+++ b/prisma/schema.prisma
@@ -36,11 +36,11 @@ model User {
   isMinor       Boolean   @default(false)
 
   // Security
-  password         String? // For credentials-based auth
-  twoFactorEnabled Boolean @default(false)
-  twoFactorSecret  String?
+  password          String? // For credentials-based auth
+  twoFactorEnabled  Boolean @default(false)
+  twoFactorSecret   String?
   twoFactorVerified Boolean @default(false)
-  backupCodes      Json?
+  backupCodes       Json?
 
   // Membership
   membershipId String?
@@ -190,6 +190,7 @@ model Project {
 
   // Additional content
   content String? @db.Text // Markdown content for detailed case study
+  problem String? @db.Text // What problem this project solves / purpose
 
   // Metrics
   featured  Boolean @default(false)
@@ -259,6 +260,35 @@ model Visit {
   @@map("visits")
 }
 
+model AnalyticsEvent {
+  id String @id @default(cuid())
+
+  // Event details
+  action   String
+  page     String?
+  category String?
+  label    String?
+  value    Int?
+
+  // Device information
+  device   String?
+  referrer String?
+
+  // Flexible data storage
+  data Json?
+
+  // Timestamp
+  createdAt DateTime @default(now())
+
+  // Indexes for efficient queries
+  @@index([action])
+  @@index([page])
+  @@index([createdAt])
+  @@index([action, createdAt])
+  @@index([page, createdAt])
+  @@map("analytics_events")
+}
+
 // ============================================
 // DIGITAL PRODUCTS MODELS
 // ============================================
@@ -370,20 +400,20 @@ model License {
   currentUsers Int @default(0)
 
   // Abuse tracking
-  abuseDetected   Boolean   @default(false)
-  abuseReason     String?   @db.Text
-  abuseFlagged Boolean   @default(false)
-  abuseFlaggedAt  DateTime?
-  abuseFlaggedBy  String?
-  revokedAt       DateTime?
-  revokedReason   String?   @db.Text
+  abuseDetected  Boolean   @default(false)
+  abuseReason    String?   @db.Text
+  abuseFlagged   Boolean   @default(false)
+  abuseFlaggedAt DateTime?
+  abuseFlaggedBy String?
+  revokedAt      DateTime?
+  revokedReason  String?   @db.Text
 
   // Timestamps
   issuedAt  DateTime  @default(now())
   expiresAt DateTime? // null = lifetime
 
   // Relations
-  downloads     Download[]
+  downloads       Download[]
   seatAssignments LicenseSeatAssignment[]
 
   @@index([userId])
@@ -407,10 +437,10 @@ model LicenseSeatAssignment {
 
   // Assignment details
   assignedBy String // Admin or license owner user ID
-  assignedAt DateTime @default(now())
+  assignedAt DateTime  @default(now())
   revokedAt  DateTime?
   revokedBy  String?
-  active     Boolean  @default(true)
+  active     Boolean   @default(true)
 
   // Timestamps
   createdAt DateTime @default(now())
@@ -696,7 +726,7 @@ model ContentPage {
   id String @id @default(cuid())
 
   // Page identification
-  slug  String @unique
+  slug  String          @unique
   title String
   type  ContentPageType
 
@@ -722,12 +752,12 @@ model ContentPage {
 model SiteSettings {
   id String @id @default("site_settings_singleton")
 
-  maintenanceMode     Boolean @default(false)
+  maintenanceMode      Boolean @default(false)
   availableForBusiness Boolean @default(true)
-  adsEnabled          Boolean @default(false)
-  adsProvider         String  @default("")
-  adsClientId         String?
-  adsPlacements       Json?
+  adsEnabled           Boolean @default(false)
+  adsProvider          String  @default("")
+  adsClientId          String?
+  adsPlacements        Json?
 
   updatedAt DateTime @updatedAt
 
@@ -788,51 +818,15 @@ model UserAdConsent {
   userId String @unique
   user   User   @relation(fields: [userId], references: [id])
 
-  personalizedAds Boolean  @default(false)
+  personalizedAds Boolean   @default(false)
   consentedAt     DateTime?
-  updatedAt       DateTime @updatedAt
+  updatedAt       DateTime  @updatedAt
 
   @@map("user_ad_consents")
 }
 
 // ============================================
 // PAGES CMS MODELS
-// ============================================
-
-model Page {
-  id          String   @id @default(cuid())
-  slug        String   @unique
-  title       String
-  status      PageStatus @default(DRAFT)
-  seoTitle    String?
-  seoDescription String? @db.Text
-  sections    PageSection[]
-  
-  createdAt   DateTime @default(now())
-  updatedAt   DateTime @updatedAt
-  
-  @@index([slug])
-  @@index([status])
-  @@map("pages")
-}
-
-model PageSection {
-  id        String   @id @default(cuid())
-  pageId    String
-  page      Page     @relation(fields: [pageId], references: [id], onDelete: Cascade)
-  type      SectionType
-  data      Json
-  order     Int      @default(0)
-  
-  createdAt DateTime @default(now())
-  updatedAt DateTime @updatedAt
-  
-  @@index([pageId])
-  @@index([order])
-  @@map("page_sections")
-}
-
-
 // ============================================
 // ENUMS
 // ============================================
@@ -1087,18 +1081,3 @@ enum ContentPageType {
   ABOUT
   OTHER
 }
-
-enum PageStatus {
-  DRAFT
-  PUBLISHED
-}
-
-enum SectionType {
-  HERO
-  RICH_TEXT
-  CARDS
-  CTA
-  FAQ
-  CONTACT_BLOCK
-  PROJECT_GRID
-}
diff --git a/public/content/about.json b/public/content/about.json
index b635787..dd008d5 100644
--- a/public/content/about.json
+++ b/public/content/about.json
@@ -4,7 +4,7 @@
     "nickname": "Kashi",
     "title": "Junior Developer",
     "tagline": "Building innovative solutions with modern web technologies and AI",
-    "avatarUrl": "/avatar.jpg"
+    "avatarUrl": "/uploads/avatars/avatar-1766558399327.jpg"
   },
   "story": [
     {
@@ -24,22 +24,48 @@
     {
       "category": "Frontend",
       "icon": "Palette",
-      "items": ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"]
+      "items": [
+        "React",
+        "Next.js",
+        "TypeScript",
+        "Tailwind CSS",
+        "JavaScript",
+        "HTML/CSS"
+      ]
     },
     {
       "category": "Backend",
       "icon": "Database",
-      "items": ["Node.js", "PostgreSQL", "Prisma", "API Design", "RESTful Services", "Authentication"]
+      "items": [
+        "Node.js",
+        "PostgreSQL",
+        "Prisma",
+        "API Design",
+        "RESTful Services",
+        "Authentication"
+      ]
     },
     {
       "category": "Tools",
       "icon": "Code2",
-      "items": ["Git", "VS Code", "Vercel", "Figma", "GitHub", "npm/yarn"]
+      "items": [
+        "Git",
+        "VS Code",
+        "Vercel",
+        "Figma",
+        "GitHub",
+        "npm/yarn"
+      ]
     },
     {
-      "category": "Other",
+      "category": "People-Skills",
       "icon": "Zap",
-      "items": ["Problem Solving", "UI/UX Design", "Team Collaboration", "Agile Methodology"]
+      "items": [
+        "Problem Solving",
+        "UI/UX Design",
+        "Team Collaboration",
+        "Agile Methodology"
+      ]
     }
   ],
   "timeline": [
@@ -98,7 +124,7 @@
     "email": "kashiku789@gmail.com"
   },
   "metadata": {
-    "lastUpdated": "2025-12-13T00:00:00Z",
+    "lastUpdated": "2025-12-24T06:40:08.982Z",
     "version": "1.0"
   }
-}
+}
\ No newline at end of file
diff --git a/scripts/add-moringa-projects.ts b/scripts/add-moringa-projects.ts
deleted file mode 100644
index a8b9b3e..0000000
--- a/scripts/add-moringa-projects.ts
+++ /dev/null
@@ -1,173 +0,0 @@
-import { PrismaClient } from '@prisma/client';
-
-const prisma = new PrismaClient();
-
-async function main() {
-  // 1. Akan Name Generator (Featured)
-  const akanProject = await prisma.project.create({
-    data: {
-      title: "Akan Name Generator",
-      slug: "akan-name-generator",
-      description: "Discover your Akan name! This web application calculates the day of the week you were born based on your date of birth and assigns you an Akan name according to Ghanaian naming traditions.",
-      content: `## Overview
-
-The Akan Name Generator is a simple, user-friendly web application that celebrates Ghanaian culture while providing users a fun way to explore their potential Akan name.
-
-## How It Works
-
-- Calculates the day of the week you were born based on the date you provide
-- Assigns you a traditional Akan name from Ghana based on your gender and birth day
-
-## Features
-
-- **Date Input**: Use a calendar to select your birthdate in a clear dd/mm/yyyy format
-- **Gender Selection**: Choose your gender from a dropdown menu for personalized naming
-- **Responsive Design**: Fully responsive for mobile, tablet, and desktop users
-- **Cultural Insight**: Learn about Akan naming traditions through the app
-
-## Usage
-
-1. Open the app in your browser
-2. Enter your date of birth using the calendar picker
-3. Select your gender from the dropdown menu
-4. Click the "Find My Akan Name" button
-5. Your Akan name will be displayed below the form`,
-      features: [
-        "Date input with calendar picker",
-        "Gender selection dropdown",
-        "Responsive design for all devices",
-        "Cultural insight into Akan naming traditions",
-        "Day of the week calculation algorithm"
-      ],
-      category: "WEB_DEVELOPMENT",
-      tags: ["HTML", "CSS", "JavaScript", "Cultural", "Interactive", "Responsive Design"],
-      techStack: ["HTML5", "CSS3", "JavaScript (ES6)"],
-      githubUrl: "https://github.com/kashik09/akan-name-generator",
-      liveUrl: "https://kashik09.github.io/AkanNameGenerator/",
-      published: true,
-      featured: true,
-    },
-  });
-
-  console.log('✅ Project 1 created:', akanProject.title);
-
-  // 2. CreativeAds Agency (Featured)
-  const creativeAdsProject = await prisma.project.create({
-    data: {
-      title: "Mock CreativeAds Agency",
-      slug: "creativeads-agency",
-      description: "A mock website for a creative ads agency showcasing web development skills with a user-friendly design, fast performance, and professional layout. Demonstrates ability to create business-focused websites.",
-      content: `## Overview
-
-This is a mock website for a creative ads agency called CreativeAds Agency, showcasing professional web development capabilities and design skills.
-
-## Features
-
-- **User-Friendly Design**: Intuitive and responsive layout that guides visitors seamlessly
-- **Fast Performance**: Optimized for quick load times and smooth user experience
-- **Professional Structure**: Multi-page website with homepage, about page, and contact page
-- **Hosted on GitHub Pages**: Free and accessible hosting solution
-
-## Project Structure
-
-The website includes:
-- Homepage: Main landing page for the ad agency
-- About Page: Information about the agency
-- Contact Page: Contact form and agency details
-
-## Deployment
-
-This website is deployed using GitHub Pages, with updates automatically reflected on the live site.`,
-      features: [
-        "Multi-page website structure",
-        "User-friendly and intuitive design",
-        "Fast load times and performance optimization",
-        "Responsive layout for all devices",
-        "Professional business presentation"
-      ],
-      category: "WEB_DEVELOPMENT",
-      tags: ["HTML", "CSS", "Business Website", "Mock Project", "GitHub Pages"],
-      techStack: ["HTML5", "CSS3"],
-      githubUrl: "https://github.com/kashik09/CreativeAds-Agency",
-      liveUrl: "https://kashik09.github.io/CreativeAds-Agency/",
-      published: true,
-      featured: true,
-    },
-  });
-
-  console.log('✅ Project 2 created:', creativeAdsProject.title);
-
-  // 3. Shopkeeper Calculator (Not Featured)
-  const shopkeeperProject = await prisma.project.create({
-    data: {
-      title: "Shopkeeper Calculator",
-      slug: "shopkeeper-calculator",
-      description: "A beautiful, interactive web app that helps shopkeepers calculate discounts, profits, and losses instantly. Built with vanilla HTML, CSS, and JavaScript featuring real-time calculations and profit/loss analysis.",
-      content: `## Overview
-
-A beautiful, interactive web app designed to help shopkeepers make quick financial calculations for their business operations.
-
-## How It Works
-
-### Discount Calculation
-- Enter your item name, cost price, and discount percentage
-- The app calculates:
-  - Discount amount: costPrice × (discount / 100)
-  - Final price after discount: costPrice - discountAmount
-
-### Profit/Loss Analysis
-- Enter your selling price
-- The app determines:
-  - **Profit**: When sellingPrice > costPrice
-  - **Loss**: When sellingPrice < costPrice
-  - **Break-even**: When sellingPrice = costPrice
-
-### Test Scenarios
-- Try different selling prices without changing your main calculation
-- See instant results with percentage gains or losses
-
-## Features
-
-- **Real-time Calculations**: Instantly calculate discount amounts and final prices
-- **Profit/Loss Analysis**: Automatically determines if you're making profit, loss, or breaking even
-- **Scenario Testing**: Test different selling prices to optimize your pricing strategy
-- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
-- **Clean UI**: Modern, gradient-based design with smooth animations
-
-## Technologies
-
-Built with vanilla JavaScript, CSS Grid, Flexbox, and CSS Variables for a modern, maintainable codebase.`,
-      features: [
-        "Real-time discount calculations",
-        "Profit and loss analysis",
-        "Scenario testing functionality",
-        "Responsive design for all devices",
-        "Modern gradient-based UI",
-        "Smooth animations"
-      ],
-      category: "WEB_DEVELOPMENT",
-      tags: ["HTML", "CSS", "JavaScript", "Calculator", "Business Tool", "Responsive Design"],
-      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "CSS Grid", "Flexbox"],
-      githubUrl: "https://github.com/kashik09/shopkeeper-calc",
-      liveUrl: "https://shopkeeper-calc.vercel.app",
-      published: true,
-      featured: false,
-    },
-  });
-
-  console.log('✅ Project 3 created:', shopkeeperProject.title);
-
-  console.log('\n🎉 All projects added successfully!');
-  console.log('📊 Summary:');
-  console.log('  - Featured projects: 2');
-  console.log('  - Regular projects: 1');
-}
-
-main()
-  .catch((e) => {
-    console.error('❌ Error creating projects:', e);
-    process.exit(1);
-  })
-  .finally(async () => {
-    await prisma.$disconnect();
-  });
diff --git a/scripts/add-photography-project.ts b/scripts/add-photography-project.ts
deleted file mode 100644
index ad4e1fd..0000000
--- a/scripts/add-photography-project.ts
+++ /dev/null
@@ -1,52 +0,0 @@
-import { PrismaClient } from '@prisma/client';
-
-const prisma = new PrismaClient();
-
-async function main() {
-  const project = await prisma.project.create({
-    data: {
-      title: "My Photography Site",
-      slug: "my-photography-site",
-      description: "A personal photography website showcasing my mock portfolio while demonstrating my coding skills. Features a clean, user-friendly design with an interactive gallery and contact form.",
-      content: `## About the Project
-This website is designed to display my photography portfolio in a clean and user-friendly manner. It includes a gallery section, contact form, and responsive design to ensure optimal viewing on various devices.
-
-## Features
-- Responsive design for seamless viewing on desktops, tablets, and mobile devices (currently working on this)
-- Interactive gallery showcasing selected photographs
-- Contact form for inquiries and feedback
-- Custom favicon for brand identity
-
-## Pages
-- **Home** - Introduction and photography story
-- **Gallery** - Showcase of photography work
-- **Contact** - Contact form for inquiries`,
-      features: [
-        "Responsive design for all devices",
-        "Interactive photo gallery",
-        "Contact form integration",
-        "Custom branding with favicon"
-      ],
-      category: "WEB_DEVELOPMENT",
-      tags: ["HTML", "CSS", "Photography", "Portfolio", "Responsive Design"],
-      techStack: ["HTML5", "CSS3"],
-      githubUrl: "https://github.com/kashik09/my-photography-site",
-      liveUrl: "https://kashik09.github.io/my-photography-site/",
-      published: true,
-      featured: false,
-    },
-  });
-
-  console.log('✅ Project created successfully:', project.title);
-  console.log('📍 Slug:', project.slug);
-  console.log('🔗 Live URL:', project.liveUrl);
-}
-
-main()
-  .catch((e) => {
-    console.error('❌ Error creating project:', e);
-    process.exit(1);
-  })
-  .finally(async () => {
-    await prisma.$disconnect();
-  });
diff --git a/scripts/migrate-pages.ts b/scripts/migrate-pages.ts
deleted file mode 100644
index dea8ea8..0000000
--- a/scripts/migrate-pages.ts
+++ /dev/null
@@ -1,323 +0,0 @@
-import { prisma } from '../lib/prisma'
-
-async function migratePagesToDatabase() {
-  console.log('🚀 Starting page migration to database...\n')
-
-  // Define pages to migrate
-  const pagesToMigrate = [
-    {
-      slug: 'home',
-      title: 'Home',
-      status: 'PUBLISHED' as const,
-      seoTitle: 'Kashi Kweyu | Junior Developer',
-      seoDescription: 'Portfolio of Kashi Kweyu - Junior Developer specializing in web development',
-      sections: [
-        {
-          type: 'HERO' as const,
-          data: {
-            title: 'Hi, I\'m Kashi Kweyu',
-            subtitle: 'Junior Developer passionate about creating amazing web experiences',
-            ctaText: 'View Projects',
-            ctaLink: '/projects'
-          },
-          order: 0
-        },
-        {
-          type: 'PROJECT_GRID' as const,
-          data: {
-            title: 'Featured Projects',
-            filter: 'ALL',
-            limit: 6
-          },
-          order: 1
-        }
-      ]
-    },
-    {
-      slug: 'about',
-      title: 'About Me',
-      status: 'PUBLISHED' as const,
-      seoTitle: 'About Kashi Kweyu | Junior Developer',
-      seoDescription: 'Learn more about Kashi Kweyu, a passionate junior developer',
-      sections: [
-        {
-          type: 'HERO' as const,
-          data: {
-            title: 'About Me',
-            subtitle: 'Passionate developer building for the web'
-          },
-          order: 0
-        },
-        {
-          type: 'RICH_TEXT' as const,
-          data: {
-            content: `# Who I Am
-
-I'm Kashi Kweyu, a junior developer with a passion for creating beautiful and functional web applications. I specialize in modern web technologies and love learning new things.
-
-## My Journey
-
-I started my journey in web development with a curiosity about how websites work. This curiosity led me to dive deep into programming, and I haven't looked back since.
-
-## Skills & Technologies
-
-- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
-- **Backend**: Node.js, PostgreSQL, Prisma
-- **Tools**: Git, VS Code, Vercel
-
-## What I Do
-
-I build full-stack web applications with a focus on user experience and clean code. I believe in writing code that is both efficient and maintainable.`
-          },
-          order: 1
-        },
-        {
-          type: 'CTA' as const,
-          data: {
-            title: 'Let\'s Work Together',
-            description: 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
-            buttonText: 'Get in Touch',
-            buttonLink: '/request'
-          },
-          order: 2
-        }
-      ]
-    },
-    {
-      slug: 'services',
-      title: 'Services',
-      status: 'PUBLISHED' as const,
-      seoTitle: 'Services | Kashi Kweyu',
-      seoDescription: 'Web development services offered by Kashi Kweyu',
-      sections: [
-        {
-          type: 'HERO' as const,
-          data: {
-            title: 'Services',
-            subtitle: 'What I can help you with'
-          },
-          order: 0
-        },
-        {
-          type: 'CARDS' as const,
-          data: {
-            title: 'What I Offer',
-            columns: 3,
-            cards: [
-              {
-                title: 'Web Development',
-                description: 'Custom websites and web applications built with modern technologies',
-                icon: '🌐'
-              },
-              {
-                title: 'Frontend Development',
-                description: 'Beautiful, responsive user interfaces with React and Next.js',
-                icon: '🎨'
-              },
-              {
-                title: 'Backend Development',
-                description: 'Robust APIs and server-side logic with Node.js and databases',
-                icon: '⚙️'
-              },
-              {
-                title: 'UI/UX Design',
-                description: 'User-centered design with focus on usability and aesthetics',
-                icon: '✨'
-              },
-              {
-                title: 'Database Design',
-                description: 'Efficient database architecture and optimization',
-                icon: '🗄️'
-              },
-              {
-                title: 'Consulting',
-                description: 'Technical guidance and code reviews for your projects',
-                icon: '💡'
-              }
-            ]
-          },
-          order: 1
-        },
-        {
-          type: 'CTA' as const,
-          data: {
-            title: 'Ready to Start Your Project?',
-            description: 'Let\'s discuss your requirements and build something amazing together.',
-            buttonText: 'Request a Service',
-            buttonLink: '/request'
-          },
-          order: 2
-        }
-      ]
-    },
-    {
-      slug: 'privacy-policy',
-      title: 'Privacy Policy',
-      status: 'PUBLISHED' as const,
-      seoTitle: 'Privacy Policy | Kashi Kweyu',
-      seoDescription: 'Privacy policy and data protection information',
-      sections: [
-        {
-          type: 'HERO' as const,
-          data: {
-            title: 'Privacy Policy',
-            subtitle: 'How we protect your data'
-          },
-          order: 0
-        },
-        {
-          type: 'RICH_TEXT' as const,
-          data: {
-            content: `# Privacy Policy
-
-Last updated: ${new Date().toLocaleDateString()}
-
-## Introduction
-
-This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
-
-## Information We Collect
-
-We collect information that you provide directly to us, including:
-- Name and email address
-- Profile information
-- Project requests and communications
-- Usage data and analytics
-
-## How We Use Your Information
-
-We use the information we collect to:
-- Provide and maintain our services
-- Respond to your requests
-- Send you updates and notifications
-- Improve our services
-
-## Data Protection
-
-We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
-
-## Your Rights
-
-You have the right to:
-- Access your personal data
-- Correct inaccurate data
-- Request deletion of your data
-- Opt-out of marketing communications
-
-## Contact Us
-
-If you have any questions about this Privacy Policy, please contact us through our website.`
-          },
-          order: 1
-        }
-      ]
-    },
-    {
-      slug: 'terms',
-      title: 'Terms of Service',
-      status: 'PUBLISHED' as const,
-      seoTitle: 'Terms of Service | Kashi Kweyu',
-      seoDescription: 'Terms and conditions for using our services',
-      sections: [
-        {
-          type: 'HERO' as const,
-          data: {
-            title: 'Terms of Service',
-            subtitle: 'Please read these terms carefully'
-          },
-          order: 0
-        },
-        {
-          type: 'RICH_TEXT' as const,
-          data: {
-            content: `# Terms of Service
-
-Last updated: ${new Date().toLocaleDateString()}
-
-## Acceptance of Terms
-
-By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
-
-## Use License
-
-Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.
-
-## Disclaimer
-
-The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
-
-## Limitations
-
-In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
-
-## Revisions
-
-We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
-
-## Governing Law
-
-These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`
-          },
-          order: 1
-        }
-      ]
-    }
-  ]
-
-  let created = 0
-  let errors = 0
-
-  for (const pageData of pagesToMigrate) {
-    try {
-      console.log(`📄 Creating page: ${pageData.title} (/${pageData.slug})`)
-
-      // Check if page already exists
-      const existing = await prisma.page.findUnique({
-        where: { slug: pageData.slug }
-      })
-
-      if (existing) {
-        console.log(`   ⚠️  Page already exists, skipping...`)
-        continue
-      }
-
-      // Create page with sections
-      const page = await prisma.page.create({
-        data: {
-          slug: pageData.slug,
-          title: pageData.title,
-          status: pageData.status,
-          seoTitle: pageData.seoTitle,
-          seoDescription: pageData.seoDescription,
-          sections: {
-            create: pageData.sections
-          }
-        },
-        include: {
-          sections: true
-        }
-      })
-
-      console.log(`   ✅ Created with ${page.sections.length} sections`)
-      created++
-    } catch (error) {
-      console.error(`   ❌ Error creating page ${pageData.title}:`, error)
-      errors++
-    }
-  }
-
-  console.log(`\n✨ Migration complete!`)
-  console.log(`   Created: ${created} pages`)
-  console.log(`   Errors: ${errors}`)
-  console.log(`   Skipped: ${pagesToMigrate.length - created - errors} (already exist)`)
-}
-
-migratePagesToDatabase()
-  .then(() => {
-    console.log('\n🎉 All done!')
-    process.exit(0)
-  })
-  .catch((error) => {
-    console.error('\n❌ Migration failed:', error)
-    process.exit(1)
-  })
diff --git a/tailwind.config.ts b/tailwind.config.ts
index b5d07eb..5829484 100644
--- a/tailwind.config.ts
+++ b/tailwind.config.ts
@@ -5,6 +5,7 @@ const config: Config = {
     './pages/**/*.{js,ts,jsx,tsx,mdx}',
     './components/**/*.{js,ts,jsx,tsx,mdx}',
     './app/**/*.{js,ts,jsx,tsx,mdx}',
+    './lib/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   
   theme: {
@@ -51,4 +52,4 @@ const config: Config = {
   plugins: [],
 }
 
-export default config
\ No newline at end of file
+export default config
