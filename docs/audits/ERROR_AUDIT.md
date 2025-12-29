# ERROR AUDIT REPORT
**Next.js App Router Codebase**
**Generated:** 2025-12-26
**Updated:** 2025-12-29 (Theme Switching Audit)
**Framework:** Next.js 14.2.0 (App Router)
**Database:** PostgreSQL (Prisma ORM)

---

## 1. Executive Summary

### Overview
- **Confirmed Issues:** 6 (+1 from theme audit)
- **High-Risk Patterns:** 3
- **Needs Verification:** 2
- **Critical Severity:** 2
- **High Severity:** 4 (+1 from theme audit)
- **Medium Severity:** 2

### Top 6 Must-Fix First
1. **[ISSUE-001]** Multiple Prisma Client instances causing connection pool exhaustion (CRITICAL)
2. **[ISSUE-002]** Multiple SessionProvider instances causing auth state inconsistencies (CRITICAL)
3. **[ISSUE-003]** TypeScript compilation error preventing production builds (HIGH)
4. **[ISSUE-004]** Middleware redirect loop risk for 2FA setup (HIGH)
5. **[ISSUE-005]** Upload route missing authentication check (HIGH)
6. **[ISSUE-006]** Theme switching uses inverted DaisyUI token semantics (HIGH) ⚡ NEW

---

## 2. Confirmed Errors

### ISSUE-001: Multiple Prisma Client Instances

**Severity:** Critical
**Category:** Data | Config

**Evidence**

**File:** `lib/auth-options.ts`
**Line:** 10

```typescript
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()  // ❌ Direct instantiation

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // ...
}
```

**File:** `lib/prisma.ts`
**Lines:** 7-13

```typescript
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

**Why it's an issue:**
- Creates multiple Prisma Client instances instead of using the singleton pattern
- Each instance maintains its own connection pool
- Will cause "Too many connections" errors under load
- Violates Prisma best practices for serverless/edge environments

**How it fails:**
- Production: Database connection pool exhaustion
- Development: Multiple warning messages about Prisma client instances
- Serverless: Lambda cold starts create duplicate connections

**Fix**

**Minimal fix:**
```typescript
// lib/auth-options.ts
import { prisma } from "@/lib/prisma"  // ✅ Import singleton

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // ...
}
```

**Verification**
```bash
# Search for all PrismaClient instantiations
rg "new PrismaClient" -n

# Should only appear in lib/prisma.ts
```

---

### ISSUE-002: Multiple SessionProvider Instances

**Severity:** Critical
**Category:** Auth | Build

**Evidence**

**File:** `app/(main)/layout.tsx`
**Lines:** 22-30

```typescript
'use client'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>  {/* ❌ SessionProvider #1 */}
      <VibeyBackdrop className="min-h-screen flex flex-col">
        {/* ... */}
      </VibeyBackdrop>
    </SessionProvider>
  )
}
```

**File:** `app/(user)/layout.tsx`
**Lines:** 12-17

```typescript
export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>  {/* ❌ SessionProvider #2 */}
      <VibeyBackdrop className="min-h-screen">
        {children}
      </VibeyBackdrop>
    </SessionProvider>
  )
}
```

**File:** `app/admin/layout.tsx`
**Lines:** 42-98

```typescript
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>  {/* ❌ SessionProvider #3 */}
      <ToastProvider>
        {/* ... */}
      </ToastProvider>
    </SessionProvider>
  )
}
```

**Why it's an issue:**
- Multiple SessionProvider instances can cause auth state inconsistencies
- React context is duplicated across route groups
- Session updates may not propagate correctly
- Violates Next.js + NextAuth best practices

**How it fails:**
- User logs in on one route, session not reflected on another
- Token refresh may fail or behave inconsistently
- Potential hydration mismatches

**Fix**

**Safer fix (recommended):**

Add SessionProvider to root Providers:

```typescript
// app/Providers.tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import type { ReactNode } from 'react'
import { PreferencesProvider } from '@/lib/preferences/PreferencesContext'
import { ToastProvider } from '@/components/ui/Toast'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>  {/* ✅ Single instance */}
      <PreferencesProvider>
        <ToastProvider>
          <PreferencesGate />
          {children}
        </ToastProvider>
      </PreferencesProvider>
    </SessionProvider>
  )
}
```

Then remove from all route group layouts:

```typescript
// app/(main)/layout.tsx
'use client'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <VibeyBackdrop className="min-h-screen flex flex-col">
      {!cinemaActive && <Header />}
      <main className={mainClassName}>
        {children}
      </main>
      {!cinemaActive && <Footer />}
    </VibeyBackdrop>
  )
}
```

**Verification**
```bash
# Find all SessionProvider usage
rg "SessionProvider" app -n

# Should only appear in app/Providers.tsx
```

---

### ISSUE-003: TypeScript Compilation Error - Missing Prisma Field

**Severity:** High
**Category:** Build | TypeScript

**Evidence**

**File:** `app/(main)/page.tsx`
**Lines:** 10-15

```typescript
const siteSettings = await prisma.siteSettings.findUnique({
  where: { id: 'site_settings_singleton' },
  select: { avatarUrl: true },  // ❌ TypeScript error
})

const avatarUrl = siteSettings?.avatarUrl ?? null  // ❌ TypeScript error
```

**TypeScript Output:**
```
app/(main)/page.tsx(12,15): error TS2353: Object literal may only specify known properties, and 'avatarUrl' does not exist in type 'SiteSettingsSelect<DefaultArgs>'.
app/(main)/page.tsx(15,35): error TS2339: Property 'avatarUrl' does not exist on type '{ ... }'.
```

**Why it's an issue:**
- Prisma schema defines `avatarUrl` on `SiteSettings` model (line 898 of schema.prisma)
- TypeScript cannot find this field in generated Prisma client types
- Indicates Prisma client is out of sync with schema

**How it fails:**
- `npm run build` will fail with TypeScript errors
- Production deployment blocked
- Type safety compromised

**Fix**

**Minimal fix:**
```bash
# Regenerate Prisma client
npx prisma generate

# Verify schema is pushed to database
npx prisma db push
```

**If issue persists:**
```bash
# Clear Prisma cache
rm -rf node_modules/.prisma
rm -rf node_modules/@prisma

# Reinstall and regenerate
npm install
npx prisma generate
```

**Verification**
```bash
# Run TypeScript check
npx tsc --noEmit

# Should complete with no errors
```

---

### ISSUE-004: Middleware Redirect Loop Risk for 2FA

**Severity:** High
**Category:** Auth | Routing

**Evidence**

**File:** `middleware.ts`
**Lines:** 23-32

```typescript
// Enforce 2FA for admin users
// @ts-ignore
const has2FA = token.twoFactorEnabled === true && token.twoFactorVerified === true
if (!has2FA && !path.startsWith("/admin/setup-2fa")) {
  return NextResponse.redirect(new URL("/admin/setup-2fa", req.url))
}

// Redirect away from setup if already configured
if (has2FA && path.startsWith("/admin/setup-2fa")) {
  return NextResponse.redirect(new URL("/admin", req.url))
}
```

**Why it's an issue:**
- If `/admin/setup-2fa` route fails or throws error, users get stuck in redirect loop
- No escape hatch for admins who cannot complete 2FA setup
- `@ts-ignore` suppresses important type safety

**How it fails:**
- User enters admin area without 2FA → redirects to `/admin/setup-2fa`
- If setup page crashes, middleware still redirects there
- Infinite redirect loop, user locked out

**Fix**

**Safer fix:**
```typescript
// Enforce 2FA for admin users
const has2FA = Boolean(
  (token as any).twoFactorEnabled === true &&
  (token as any).twoFactorVerified === true
)

// Allow /admin/setup-2fa access without 2FA
if (!has2FA && !path.startsWith("/admin/setup-2fa")) {
  return NextResponse.redirect(new URL("/admin/setup-2fa", req.url))
}

// Redirect away from setup if already configured
if (has2FA && path.startsWith("/admin/setup-2fa")) {
  return NextResponse.redirect(new URL("/admin", req.url))
}
```

**Better approach:**
Add JWT typing to prevent `@ts-ignore`:

```typescript
// lib/auth-options.ts - Add proper types
declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
    twoFactorEnabled: boolean
    twoFactorVerified: boolean
    rememberMe: boolean
  }
}
```

**Verification**
```bash
# Test 2FA flow manually:
# 1. Create admin user without 2FA
# 2. Try to access /admin → should redirect to /admin/setup-2fa
# 3. Complete setup → should redirect to /admin
# 4. Try to access /admin/setup-2fa again → should redirect to /admin
```

---

### ISSUE-005: Upload Route Missing Authentication Check

**Severity:** High
**Category:** Security | API

**Evidence**

**File:** `app/api/upload/route.ts`
**Lines:** 9-58

```typescript
export async function POST(req: Request) {
  try {
    const form = await req.formData()  // ❌ No auth check
    const file = form.get('file')

    // ... file validation and upload logic

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'projects')
    await fs.mkdir(uploadDir, { recursive: true })

    const filePath = path.join(uploadDir, filename)
    await fs.writeFile(filePath, buffer)  // ❌ Anyone can upload

    return NextResponse.json({ url }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
```

**Why it's an issue:**
- No authentication check before accepting file uploads
- Any unauthenticated user can upload files to your server
- No rate limiting
- No storage quota enforcement

**How it fails:**
- Malicious actors can fill your disk with arbitrary files
- Potential for abuse (hosting malware, phishing pages, etc.)
- Vercel/hosting bills spike from storage usage

**Fix**

**Minimal fix:**
```typescript
import { getServerSession } from '@/lib/auth'

export async function POST(req: Request) {
  // ✅ Require authentication
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ✅ Optionally require admin role for project uploads
  if (!['ADMIN', 'OWNER', 'EDITOR'].includes(session.user.role)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const form = await req.formData()
    const file = form.get('file')
    // ... rest of upload logic
  } catch (e) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
```

**Verification**
```bash
# Test without authentication
curl -X POST http://localhost:3000/api/upload \
  -F "file=@test.jpg" \
  -v

# Should return 401 Unauthorized
```

---

### ISSUE-006: Theme Switching Uses Inverted DaisyUI Token Semantics ⚡ NEW

**Severity:** High
**Category:** UX | Theming
**Audit Date:** 2025-12-29

**Evidence**

**File:** `components/home/HomeCanvas.tsx`
**Lines:** 604, 664, 711-712, 791, 833, 844, 852, 858, 869, 880, 887, 895, 904

**13 Instances of Inverted Token Usage:**

```typescript
// ❌ WRONG: Using text color as background
<div className="bg-base-content/60 text-base-100">  // Line 833

// ❌ WRONG: Using background color as text
<Link className="text-base-100/90 hover:text-base-100">  // Line 869

// Examples of all instances:
Line 604:  from-base-content/30 via-base-content/50 to-base-content/70
Line 664:  bg-base-content/50
Line 711:  bg-base-content/40
Line 712:  bg-base-content/50
Line 791:  bg-base-content/60
Line 833:  bg-base-content/60 ... text-base-100
Line 844:  bg-base-content/70
Line 852:  bg-base-content/70 ... text-base-100
Line 858:  text-base-100 hover:bg-base-100/10
Line 869:  text-base-100/90 hover:text-base-100
Line 880:  text-base-100/90 hover:text-base-100
Line 887:  text-base-100/90 hover:text-base-100
Line 895:  text-base-100/90 hover:text-base-100
```

**DaisyUI Token Semantics:**
- `base-100`, `base-200`, `base-300` = Background colors (light in light themes, dark in dark themes)
- `base-content` = Text color on base backgrounds (dark in light themes, light in dark themes)

**Why it's an issue:**
- Using `bg-base-content` creates "dark overlay" effect in both light and dark themes
- Using `text-base-100` creates "light text" in both light and dark themes
- When switching between light themes (moss → pearl), both have:
  - `base-100`: ~#f5f5f5 (light)
  - `base-content`: ~#0a0a0a (dark)
- Inversion masks the actual theme colors (green vs purple)
- User sees **minimal visual change** when switching themes

**How it fails:**
- User switches from moss theme to pearl theme
- Expected: Light green backgrounds → Light purple backgrounds
- Actual: Dark overlay → Dark overlay (generic dark look)
- Theme switching appears "broken" to users

**Impact:**
- **User Experience**: Theme switching has no visible effect on landing page
- **Scope**: Affects entire home page (100% of landing surface)
- **Verified**: Theme switching mechanism works, DaisyUI is loaded, only semantics are inverted

**Fix**

**Minimal fix (13 replacements):**

```typescript
// ✅ CORRECT: Background Inversions (6 instances)
Line 604:  from-base-content/30 → from-base-200/30
Line 664:  bg-base-content/50 → bg-base-200/90
Line 711:  bg-base-content/40 → bg-base-200/80
Line 712:  bg-base-content/50 → bg-base-200/90
Line 791:  bg-base-content/60 → bg-base-200/95
Line 833:  bg-base-content/60 → bg-base-200/95

// ✅ CORRECT: Text Inversions (6 instances)
Line 833:  text-base-100 → text-base-content
Line 858:  text-base-100 → text-base-content
Line 869:  text-base-100/90 → text-base-content/90
Line 880:  text-base-100/90 → text-base-content/90
Line 887:  text-base-100/90 → text-base-content/90
Line 895:  text-base-100/90 → text-base-content/90

// ✅ Overlay can stay dark (1 instance)
Line 844:  bg-base-content/70 → bg-base-content/20 (reduce opacity)
```

**Verification**

After fix, verify theme switching works:

```bash
# 1. Open landing page (/)
# 2. Open preferences panel (via footer or menu)
# 3. Switch themes: moss → pearl → dracula → forest
# 4. Verify backgrounds, text, and accents change visibly

# Expected results:
# - moss: Light green backgrounds, dark text, green accents
# - pearl: Light purple backgrounds, dark text, purple accents
# - dracula: Dark purple backgrounds, light text, pink accents
# - forest: Dark green backgrounds, light text, green accents
```

**Detailed Documentation:**
See `docs/audits/theme-switching-audit-verified.md` for:
- Complete audit findings with evidence
- Line-by-line breakdown of all 13 instances
- Visual impact explanation
- Technical implementation details
- Full verification checklist

---

## 3. Needs Verification

### NV-001: Admin Routes Not Protected by Middleware

**Severity:** Medium
**Category:** Auth | Routing

**Evidence**

**File:** `middleware.ts`
**Lines:** 62-64

```typescript
export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
}
```

**File:** Found admin routes in file tree:
- `app/admin/settings/page.tsx`
- `app/admin/content/page.tsx` (and many others)

**Why this needs verification:**
- Middleware only runs on paths matching the matcher
- If routes exist outside `/admin` that render admin functionality, they're unprotected
- Need to verify all admin functionality is under `/admin/:path*`

**How to verify locally:**
```bash
# 1. Find all admin-related pages
find app -name "*.tsx" -path "*/admin/*" -o -name "*admin*.tsx"

# 2. Check if any admin functionality exists outside /admin route group
rg "requireAdmin|isAdmin|role.*ADMIN" app --type tsx

# 3. Test accessing admin routes without auth
# - Log out
# - Try to access http://localhost:3000/admin/users
# - Should redirect to /login with callbackUrl
```

**Potential issue:**
If admin components are rendered in non-admin routes without server-side checks, users could access admin features.

---

### NV-002: Missing Error Handling for Prisma Queries

**Severity:** Medium
**Category:** Data | UX

**Evidence**

Found 40+ Prisma queries without explicit try-catch or error handling:

```typescript
// Examples from various API routes:
const order = await prisma.order.findUnique({ ... })  // Could be null
const user = await prisma.user.findUnique({ ... })    // Could be null
const product = await prisma.digitalProduct.findUnique({ ... })  // Could be null
```

**Why this needs verification:**
- Some queries may return null and cause crashes
- Need to check each for proper null handling
- Database connection errors could crash routes

**How to verify locally:**
```bash
# 1. Find all Prisma queries
rg "await prisma\." app/api --type ts -A 2

# 2. For each query, verify:
#    - Is result null-checked before use?
#    - Is query wrapped in try-catch?
#    - Does route return proper error response?

# 3. Test with invalid IDs
curl http://localhost:3000/api/orders/INVALID_ORDER_ID

# Should return 404, not crash
```

**Pattern to check:**
```typescript
// ❌ Bad - crashes if null
const user = await prisma.user.findUnique({ where: { id } })
console.log(user.email)  // TypeError if user is null

// ✅ Good - null check
const user = await prisma.user.findUnique({ where: { id } })
if (!user) {
  return NextResponse.json({ error: 'User not found' }, { status: 404 })
}
```

---

## 4. Recommended Quality Gates

### Daily/Pre-commit Checks

```bash
# 1. TypeScript type checking
npm run typecheck
# or
npx tsc --noEmit

# 2. Linting
npm run lint

# 3. Prisma schema validation
npx prisma validate

# 4. Prisma client generation (if schema changed)
npx prisma generate
```

### Pre-deployment Checks

```bash
# 1. Full build test
npm run build

# 2. Check for hardcoded secrets
rg "password|secret|key.*=.*['\"]" --type ts --type tsx | grep -v ".env"

# 3. Verify environment variables
node -e "
const required = ['DATABASE_URL', 'NEXTAUTH_SECRET', 'NEXTAUTH_URL'];
required.forEach(key => {
  if (!process.env[key]) console.error('Missing:', key);
});
"

# 4. Route integrity check
# Verify all links point to existing pages
rg "href=\"/[^\"]+\"" app --type tsx -o | sort -u > links.txt
# Then manually check against route structure
```

### Automated Testing Script

Create `scripts/pre-deploy-check.sh`:

```bash
#!/bin/bash

echo "🔍 Running pre-deployment checks..."

echo "✓ Type checking..."
npx tsc --noEmit || exit 1

echo "✓ Linting..."
npm run lint || exit 1

echo "✓ Prisma validation..."
npx prisma validate || exit 1

echo "✓ Build test..."
npm run build || exit 1

echo "✅ All checks passed!"
```

---

## 5. Appendix

### Assumptions

1. **Prisma Client Generation**: Assumed `npx prisma generate` has been run. If not, ISSUE-003 may be a generation issue rather than schema issue.

2. **Environment Variables**: Assumed all required env vars are set in production. Did not verify runtime env var usage.

3. **NextAuth Configuration**: Assumed `NEXTAUTH_SECRET` and `NEXTAUTH_URL` are properly set.

4. **Database State**: Could not verify if database schema matches Prisma schema without access to actual database.

5. **Component Imports**: Assumed all imported components (`Button`, `Input`, `Spinner`, etc.) exist and are properly exported from `@/components/ui/*`.

### Files Not Provided That Limit Certainty

1. **Components Library**: Full `components/` directory contents not examined in detail
   - Could contain client/server boundary violations
   - May have missing imports

2. **Lock File**: `package-lock.json` or `pnpm-lock.yaml` not analyzed
   - Could have dependency version conflicts
   - Security vulnerabilities not checked

3. **Vercel Configuration**: `vercel.json` or deployment config not reviewed
   - May have environment variable issues
   - Serverless function timeouts unknown

4. **Test Files**: No test coverage analysis
   - Cannot verify critical paths are tested
   - Integration test coverage unknown

5. **Database State**: Cannot verify actual PostgreSQL schema matches Prisma
   - Migration history unknown
   - Potential for drift between schema and DB

### Search Commands Used

```bash
# TypeScript errors
npx tsc --noEmit 2>&1 | head -100

# Find all route files
find app -name "*.tsx" -name "*.ts"

# Find Prisma queries
rg "await.*findFirst|await.*findUnique|await.*findMany" app/api --type ts

# Find SessionProvider usage
rg "SessionProvider" app -n

# Find new PrismaClient
rg "new PrismaClient" -n

# Find redirect usage
rg "redirect\(" app --type ts
```

---

## Quick Action Checklist

**Critical (Do Today):**
- [ ] Fix ISSUE-001: Import prisma singleton in `lib/auth-options.ts`
- [ ] Fix ISSUE-002: Move SessionProvider to root Providers
- [ ] Fix ISSUE-003: Run `npx prisma generate`
- [ ] Fix ISSUE-005: Add auth check to upload route

**High Priority (This Week):**
- [ ] Fix ISSUE-004: Add proper JWT typing, remove `@ts-ignore`
- [ ] Fix ISSUE-006: Replace 13 inverted DaisyUI tokens in `components/home/HomeCanvas.tsx` ⚡ NEW
- [ ] Verify NV-001: Test all admin routes with logged-out user
- [ ] Verify NV-002: Audit Prisma queries for null handling

**Nice to Have:**
- [ ] Set up pre-commit hooks for `npm run typecheck`
- [ ] Add API route integration tests
- [ ] Document required environment variables
- [ ] Add rate limiting to public API routes

---

**End of Report**
