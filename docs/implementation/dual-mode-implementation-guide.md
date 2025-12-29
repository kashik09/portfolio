# Dual-Mode Website Implementation Guide

**Version**: 1.0
**Date**: 2025-12-23
**Status**: Implementation-Ready

---

## 1. Concept Overview

### What This Is

A single website that presents itself in two distinct voices:

- **Formal Mode**: Professional, restrained, recruiter-safe. Think LinkedIn profile.
- **Vibey Mode**: Playful, personality-forward, emoji-rich. Think personal brand.

### What This Is NOT

❌ **Not** two separate websites
❌ **Not** two separate codebases
❌ **Not** two separate route structures
❌ **Not** conditional rendering of entire pages

### Why This Matters

**Maintenance Hell Avoided**:
- One set of routes: `/projects`, `/about`, `/contact`
- One data structure: same project schema, same content models
- One deployment: changes affect both modes simultaneously
- One test suite: behavior is identical, only presentation differs

**What Changes By Mode**:
- Microcopy (button labels, CTAs, section headings)
- Tone (formal vs conversational)
- Styling (subtle vs expressive)
- Emoji usage (none vs strategic)

**What Stays Identical**:
- Routes and URLs
- Data structure (projects, blog posts, metadata)
- Functionality (forms, navigation, interactions)
- Core layout structure

---

## 2. High-Level Architecture

### Mental Model

```
User Visit
    ↓
Mode Detection (cookie/localStorage)
    ↓
Mode Provider (React Context)
    ↓
Pages consume mode-aware content
    ↓
Render with mode-specific:
    - Copy from content system
    - Styles from CSS variables
    - Components from mode-aware wrappers
```

### Flow Diagram

```
[Cookie/Storage] → [ModeContext] → [Page Components]
                         ↓
                    [Content System]
                         ↓
                    [Mode-Aware Copy]
```

### Key Principles

1. **Mode is a global state** - Available everywhere via Context
2. **Content lives in structured objects** - Not hardcoded in JSX
3. **Styling uses CSS variables** - Mode toggles root-level classes
4. **Pages are dumb consumers** - They request content, don't generate it

---

## 3. File & Folder Structure

### Proposed Structure

```
lib/
  mode/
    ModeContext.tsx          # React Context + Provider
    modeStorage.ts           # Cookie/localStorage utilities
    types.ts                 # Mode enum + types

content/
  mode-data/
    homepage.ts              # Homepage content (Formal + Vibey)
    about.ts                 # About page content
    projects.ts              # Projects page copy
    shared.ts                # Shared labels (nav, footer, buttons)

components/
  mode/
    ModeToggle.tsx           # Toggle component
    ModeAwareText.tsx        # Helper for mode-based copy (optional)

app/
  layout.tsx                 # Wraps app in ModeProvider
  (main)/
    page.tsx                 # Consumes homepage content
    about/page.tsx           # Consumes about content

styles/
  globals.css                # Mode-specific CSS variables
  mode-formal.css            # Formal overrides (optional)
  mode-vibey.css             # Vibey overrides (optional)
```

### File Purposes

| File | Purpose |
|------|---------|
| `ModeContext.tsx` | Provides `mode` state and `toggleMode()` function |
| `modeStorage.ts` | Reads/writes mode preference to storage |
| `homepage.ts` | Single source of truth for homepage copy |
| `ModeToggle.tsx` | UI component to switch modes |
| `layout.tsx` | Wraps app, initializes mode, applies root class |
| `globals.css` | Defines CSS variables per mode |

### Rules

- **Content files** export structured objects, never JSX
- **Context** is the only place mode state lives
- **Storage utilities** are pure functions, no side effects
- **Components** consume content via imports, not props drilling

---

## 4. Content System ("Data Centers")

### Shared Content Schema

Every content object has this shape:

```typescript
interface ModeContent<T> {
  formal: T
  vibey: T
}

interface PageContent {
  hero: {
    title: ModeContent<string>
    subtitle: ModeContent<string>
    cta: ModeContent<string>
  }
  // ... other sections
}
```

### Example: Homepage Content

```typescript
// content/mode-data/homepage.ts
export const homepageContent = {
  hero: {
    title: {
      formal: "Software Engineer & Problem Solver",
      vibey: "Code Wizard ✨ | Building Cool Stuff"
    },
    subtitle: {
      formal: "Crafting efficient, scalable solutions for modern web applications.",
      vibey: "I turn caffeine into code and bugs into features 🚀"
    },
    cta: {
      formal: "View Portfolio",
      vibey: "Check Out My Work →"
    }
  },
  about: {
    heading: {
      formal: "About Me",
      vibey: "The Origin Story 📖"
    }
  }
}
```

### Rules for Content Objects

**MUST be identical**:
- Object structure (both modes have same keys)
- Data types (both strings, both arrays, etc.)
- Number of items (if it's a list, same length)

**CAN differ**:
- Copy (formal vs conversational tone)
- Emoji usage (none vs strategic)
- Punctuation style (periods vs exclamation)

**CANNOT differ**:
- Links (URLs must be identical)
- IDs (used for anchors, tracking)
- Route structure

### Anti-Pattern Example

❌ **Wrong** (different structure):
```typescript
{
  formal: { title: "Hello" },
  vibey: { title: "Yo!", subtitle: "Extra text" } // ← breaks symmetry
}
```

✅ **Correct** (same structure):
```typescript
{
  title: {
    formal: "Hello",
    vibey: "Yo! 👋"
  },
  subtitle: {
    formal: "Welcome to my site.",
    vibey: "Welcome to my site." // ← can be identical if tone works
  }
}
```

---

## 5. Mode State Management

### Storage Strategy

**Use Cookie** (recommended):
- Persists across sessions
- Available server-side (SSR-friendly)
- Expires after 1 year

**Fallback to localStorage**:
- If cookies disabled
- Client-side only

### Implementation

```typescript
// lib/mode/types.ts
export enum Mode {
  FORMAL = 'formal',
  VIBEY = 'vibey'
}

export const DEFAULT_MODE = Mode.FORMAL
```

```typescript
// lib/mode/modeStorage.ts
import Cookies from 'js-cookie'

const MODE_COOKIE_KEY = 'site-mode'
const MODE_STORAGE_KEY = 'site-mode'

export function getStoredMode(): Mode | null {
  // Try cookie first
  const cookie = Cookies.get(MODE_COOKIE_KEY)
  if (cookie === Mode.FORMAL || cookie === Mode.VIBEY) {
    return cookie
  }

  // Fallback to localStorage
  const stored = localStorage.getItem(MODE_STORAGE_KEY)
  if (stored === Mode.FORMAL || stored === Mode.VIBEY) {
    return stored
  }

  return null
}

export function setStoredMode(mode: Mode): void {
  // Set cookie (1 year expiry)
  Cookies.set(MODE_COOKIE_KEY, mode, { expires: 365 })

  // Set localStorage as backup
  localStorage.setItem(MODE_STORAGE_KEY, mode)
}
```

### Context Provider

```typescript
// lib/mode/ModeContext.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface ModeContextValue {
  mode: Mode
  toggleMode: () => void
  setMode: (mode: Mode) => void
}

const ModeContext = createContext<ModeContextValue | undefined>(undefined)

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>(DEFAULT_MODE)
  const [mounted, setMounted] = useState(false)

  // Initialize mode on mount
  useEffect(() => {
    const stored = getStoredMode()
    if (stored) {
      setModeState(stored)
    }
    setMounted(true)
  }, [])

  const setMode = (newMode: Mode) => {
    setModeState(newMode)
    setStoredMode(newMode)
  }

  const toggleMode = () => {
    const newMode = mode === Mode.FORMAL ? Mode.VIBEY : Mode.FORMAL
    setMode(newMode)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null // or a loading skeleton
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error('useMode must be used within ModeProvider')
  }
  return context
}
```

### Initialization Flow

1. User visits site
2. `ModeProvider` mounts
3. Reads cookie/localStorage
4. If found, applies stored mode
5. If not found, defaults to `FORMAL`
6. Applies mode class to `<html>` or `<body>`

### Preventing Hydration Mismatch

**Problem**: Server renders with default mode, client hydrates with stored mode.

**Solution**: Return `null` or skeleton until mounted:
```typescript
if (!mounted) return null
```

**Alternative**: Use `suppressHydrationWarning` on root element.

---

## 6. Mode Toggle Component

### UX Rules

**Where it appears**:
- Header/nav (subtle icon or text)
- Footer (if header is too crowded)
- **Not** on every page section (annoying)

**Visibility**:
- Always visible, never hidden
- Small and unobtrusive
- Clear iconography (💼 vs 🎨, or similar)

**Interaction**:
- Single click to toggle
- No confirmation modal (instant switch)
- Visual feedback (icon change, animation)

### Implementation

```typescript
// components/mode/ModeToggle.tsx
'use client'

import { useMode } from '@/lib/mode/ModeContext'
import { Mode } from '@/lib/mode/types'

export function ModeToggle() {
  const { mode, toggleMode } = useMode()

  return (
    <button
      onClick={toggleMode}
      className="mode-toggle"
      aria-label={`Switch to ${mode === Mode.FORMAL ? 'vibey' : 'formal'} mode`}
      title={mode === Mode.FORMAL ? 'Switch to Vibey Mode' : 'Switch to Formal Mode'}
    >
      {mode === Mode.FORMAL ? (
        <span className="icon">💼</span> // Formal icon
      ) : (
        <span className="icon">🎨</span> // Vibey icon
      )}
      <span className="sr-only">
        Current mode: {mode}
      </span>
    </button>
  )
}
```

### Accessibility

- `aria-label` describes action
- `title` provides tooltip
- `sr-only` text announces current mode
- Keyboard accessible (button element)
- Focus visible (outline on `:focus`)

### When NOT to Show Toggle

- During onboarding flow (picks mode first)
- On error pages (mode doesn't matter)
- In print stylesheets (hidden)

---

## 7. Styling by Mode

### Approach: CSS Variables + Root Class

**Step 1**: Apply mode class to root element

```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  const { mode } = useMode()

  return (
    <html lang="en" className={mode} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
```

**Step 2**: Define CSS variables per mode

```css
/* styles/globals.css */

/* Formal Mode */
.formal {
  --color-primary: #2563eb;      /* Professional blue */
  --font-heading: 'Inter', sans-serif;
  --spacing-section: 5rem;
  --border-radius: 0.5rem;
  --emoji-display: none;         /* Hide emojis */
}

/* Vibey Mode */
.vibey {
  --color-primary: #8b5cf6;      /* Playful purple */
  --font-heading: 'Poppins', sans-serif;
  --spacing-section: 3rem;
  --border-radius: 1rem;
  --emoji-display: inline;       /* Show emojis */
}

/* Usage */
h1 {
  font-family: var(--font-heading);
  color: var(--color-primary);
}

.emoji {
  display: var(--emoji-display);
}
```

### Mode-Specific Styling Rules

| Aspect | Formal | Vibey |
|--------|--------|-------|
| **Typography** | Serif or neutral sans-serif | Playful sans-serif, rounded |
| **Colors** | Blues, grays, blacks | Purples, pinks, gradients |
| **Spacing** | Generous padding, breathing room | Tighter, more dynamic |
| **Motion** | Minimal, subtle fades | Playful animations, bounces |
| **Borders** | Sharp corners, thin lines | Rounded corners, thick borders |
| **Emojis** | None (hidden via CSS) | Strategic use in headings |

### Motion Examples

**Formal**:
```css
.formal .card {
  transition: transform 0.2s ease;
}
.formal .card:hover {
  transform: translateY(-4px); /* Subtle lift */
}
```

**Vibey**:
```css
.vibey .card {
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.vibey .card:hover {
  transform: translateY(-8px) rotate(2deg); /* Playful bounce */
}
```

### Emoji Handling

**Option 1**: CSS visibility
```css
.emoji {
  display: var(--emoji-display);
}
```

**Option 2**: Conditional rendering
```tsx
{mode === Mode.VIBEY && <span className="emoji">🚀</span>}
```

**Recommendation**: Use CSS for inline emojis, conditional rendering for structural changes.

---

## 8. Page-Level Usage

### Consuming Mode-Aware Content

**Before** (hardcoded):
```tsx
export default function HomePage() {
  return (
    <section>
      <h1>Software Engineer & Problem Solver</h1>
      <p>Crafting efficient solutions...</p>
    </section>
  )
}
```

**After** (mode-aware):
```tsx
import { useMode } from '@/lib/mode/ModeContext'
import { homepageContent } from '@/content/mode-data/homepage'

export default function HomePage() {
  const { mode } = useMode()
  const content = homepageContent.hero

  return (
    <section>
      <h1>{content.title[mode]}</h1>
      <p>{content.subtitle[mode]}</p>
    </section>
  )
}
```

### Refactoring Checklist

For each page:

1. ✅ Identify all hardcoded text
2. ✅ Move to content object in `/content/mode-data/`
3. ✅ Replace JSX text with `content.key[mode]`
4. ✅ Test both modes for identical structure
5. ✅ Verify links/IDs are unchanged

### Common Pitfalls

❌ **Pitfall 1**: Inconsistent structure
```tsx
// Breaks if vibey has extra keys
{mode === Mode.FORMAL ? (
  <div>{content.title}</div>
) : (
  <div>{content.title}<span>{content.extra}</span></div>
)}
```

✅ **Fix**: Keep structure identical, vary only text
```tsx
<div>
  {content.title[mode]}
  <span>{content.extra[mode]}</span> {/* Both modes have this */}
</div>
```

❌ **Pitfall 2**: Hardcoded URLs
```tsx
// Wrong: different links per mode
<a href={mode === Mode.FORMAL ? '/portfolio' : '/work'}>
```

✅ **Fix**: Same URL, different label
```tsx
<a href="/projects">{content.cta[mode]}</a>
```

❌ **Pitfall 3**: Conditional components
```tsx
// Wrong: different components per mode
{mode === Mode.FORMAL ? <FormalHero /> : <VibeyHero />}
```

✅ **Fix**: Single component, styled by mode
```tsx
<Hero title={content.title[mode]} className={mode} />
```

### Server Components vs Client Components

**Server Components**:
- Cannot use `useMode()` directly
- Pass mode as prop from parent client component
- Or fetch mode from cookies server-side

**Client Components**:
- Use `useMode()` hook freely
- Wrap in `'use client'` directive

---

## 9. Analytics / Interaction Tracking

### What to Track

**Essential Events**:
1. Mode selection on first visit
2. Mode toggle clicks
3. Page views with mode attached

**Event Schema**:
```typescript
{
  event: 'mode_toggled',
  properties: {
    from_mode: 'formal',
    to_mode: 'vibey',
    page: '/about',
    timestamp: '2025-12-23T10:30:00Z'
  }
}
```

### Implementation (Simple)

```typescript
// lib/mode/analytics.ts
export function trackModeToggle(fromMode: Mode, toMode: Mode) {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'mode_toggle', {
      from_mode: fromMode,
      to_mode: toMode,
      page_path: window.location.pathname
    })
  }

  // Plausible (if using)
  if (window.plausible) {
    window.plausible('Mode Toggle', {
      props: { from: fromMode, to: toMode }
    })
  }
}
```

### Privacy-First Approach

- Do NOT track mode preference in user profiles
- Do NOT use mode to fingerprint users
- Anonymize all analytics
- Respect DNT headers

### Minimal, Non-Invasive

- Track toggle clicks, not every page view
- No A/B testing without consent
- No session replay on mode changes

---

## 10. Git & Workflow Strategy

### Branching Strategy

**Feature Branch**:
```bash
git checkout -b feature/dual-mode-system
```

**Implementation Order**:
1. Create types + utilities (`lib/mode/types.ts`, `modeStorage.ts`)
2. Add Context + Provider (`ModeContext.tsx`)
3. Wrap app in Provider (`app/layout.tsx`)
4. Create one content file (`content/mode-data/homepage.ts`)
5. Refactor one page to consume content (`app/page.tsx`)
6. Add toggle component (`components/mode/ModeToggle.tsx`)
7. Add CSS variables (`styles/globals.css`)
8. Test in both modes
9. Repeat for remaining pages

**Commits** (atomic, descriptive):
```
feat: add mode context and storage utilities
feat: create homepage mode-aware content
feat: refactor homepage to use mode content
feat: add mode toggle component
feat: implement mode-based CSS variables
```

### Merging Safely

**Pre-Merge Checklist**:
- ✅ All pages render in both modes
- ✅ No broken links
- ✅ No console errors
- ✅ Mode persists on refresh
- ✅ Toggle works in header
- ✅ Styles apply correctly
- ✅ Lighthouse score unchanged

**Merge Strategy**:
- Squash commits or keep atomic history (team preference)
- Deploy to staging first
- QA both modes thoroughly
- Deploy to production

### Avoiding Regressions

**Automated Tests**:
```typescript
describe('Mode System', () => {
  it('persists mode across page reloads', () => {
    cy.visit('/')
    cy.contains('Switch to Vibey Mode').click()
    cy.reload()
    cy.get('.mode-toggle').should('have.text', '💼') // Shows formal icon
  })

  it('renders identical structure in both modes', () => {
    cy.visit('/')
    const formalLinks = cy.get('a').its('length')

    cy.contains('Switch to Vibey Mode').click()
    cy.get('a').its('length').should('equal', formalLinks)
  })
})
```

**Manual QA**:
1. Toggle mode on every major page
2. Verify no layout shifts
3. Check mobile + desktop
4. Test with JS disabled (should default to Formal)

---

## 11. Future Extensions

### A/B Testing Readiness

**Current System**: User picks mode via toggle

**A/B Test Scenario**: Automatically assign mode on first visit

**Implementation**:
```typescript
// lib/mode/modeStorage.ts
export function initializeModeWithABTest(): Mode {
  const stored = getStoredMode()
  if (stored) return stored

  // 50/50 split
  const assigned = Math.random() < 0.5 ? Mode.FORMAL : Mode.VIBEY
  setStoredMode(assigned)

  // Track assignment
  trackModeAssignment(assigned)

  return assigned
}
```

**Data to Collect**:
- Bounce rate by mode
- Time on site by mode
- Conversion rate by mode

### Adding a Third Mode

**Example**: "Minimal Mode" (ultra-simple, fast-loading)

**Steps**:
1. Add `MINIMAL` to `Mode` enum
2. Add `minimal` key to all content objects
3. Add `.minimal` CSS variables
4. Update toggle UI (cycle through 3 modes)

**Constraint**: Every content object must have all 3 modes.

### Evolving Layouts Without Duplication

**Problem**: Want different layouts per mode (e.g., Formal = grid, Vibey = masonry)

**Anti-Pattern**: Duplicate entire page components

**Solution**: Layout components that accept mode as prop
```tsx
// components/layouts/ProjectGrid.tsx
export function ProjectGrid({ mode }: { mode: Mode }) {
  const Layout = mode === Mode.FORMAL ? GridLayout : MasonryLayout
  return <Layout>{/* children */}</Layout>
}
```

**Keep**:
- Same data
- Same routing
- Same functionality

**Vary**:
- Layout engine
- Visual presentation

---

## Implementation Summary

### What You're Building

✅ Single codebase
✅ Two presentation modes
✅ Mode persists via cookie
✅ Content in structured objects
✅ Styling via CSS variables
✅ Toggle component in header

### What You're Avoiding

❌ Two websites
❌ Conditional route rendering
❌ Hardcoded copy in JSX
❌ Mode-specific logic scattered everywhere

### Success Criteria

- User can toggle between modes instantly
- Mode persists across page reloads
- All pages work in both modes
- No duplicate page components
- Maintenance is centralized in content files

---

## Quick Start Checklist

For the engineer implementing this:

1. [ ] Create `lib/mode/` folder with types, storage, context
2. [ ] Wrap app in `ModeProvider` in `app/layout.tsx`
3. [ ] Create first content file: `content/mode-data/homepage.ts`
4. [ ] Refactor homepage to consume mode-aware content
5. [ ] Add `ModeToggle` component to header
6. [ ] Define CSS variables for both modes in `globals.css`
7. [ ] Test toggle functionality
8. [ ] Repeat for remaining pages
9. [ ] Deploy to staging, QA both modes
10. [ ] Ship to production

---

**End of Document**

**Questions?** Refer to sections 4-8 for implementation details.
**Blockers?** Check section 10 for workflow guidance.
**Future needs?** See section 11 for extensibility patterns.
