# Kashi Kweyu Portfolio

A modern, full-stack portfolio and business platform built with Next.js 14, featuring membership tiers, digital product marketplace, credit system, and comprehensive admin dashboard.

## Project Status

**Current Version:** 1.1.0-dev
**Status:** ⚠️ **NOT Production Ready**
**Last Updated:** 2026-01-07

### Production Blockers

**Critical blockers preventing production launch:**

1. **Payment Integration** - NOT IMPLEMENTED
   - Currently operating in demo mode only
   - No real payment processing (Stripe/Flutterwave integration required)
   - Manual payment confirmation via admin API only
   - Location: `app/api/memberships/purchase/route.ts:38`

2. **Credit System Pricing** - UNDEFINED
   - Credit allocation implemented ✅
   - Credit tracking implemented ✅
   - Credit deduction implemented ✅
   - **Credit pricing NOT defined** ❌
   - Decision required: What does 1 credit equal in USD?

3. **Email Notifications** - PARTIALLY IMPLEMENTED
   - Infrastructure exists but many TODOs remain
   - Order fulfillment emails missing
   - Membership expiration warnings missing
   - Credit usage alerts missing

**See:** [`docs/audits/comprehensive-audit-summary.md`](docs/audits/comprehensive-audit-summary.md) for full analysis.

---

## Features

### Membership System ✅
- **Basic Access** - $299/year, 750 credits, digital products only
- **Pro** - $1,499/2 years, 1,500 credits, includes 1 service request
- **Managed** - $499/month, 500 credits/month, ongoing support
- Credit tracking and usage limits
- Membership expiration handling
- Rollover credit calculations

### Digital Product Marketplace ✅
- Product catalog with categories
- License tiers (Personal, Team, Enterprise)
- Instant digital delivery via license keys
- Shopping cart with credit/USD pricing
- Order management and fulfillment
- Admin product management

### Credit System ✅ (Infrastructure Complete)
- Virtual currency allocated through memberships
- Credit deduction tracking
- Credit transaction logs
- Rollover calculations for renewals
- **Pricing definitions:** ⚠️ TBD (see blocker #2)

### Authentication & Authorization ✅
- NextAuth.js with multiple providers (Google, GitHub, Credentials)
- Two-factor authentication (2FA) with TOTP
- Role-based access control (USER, ADMIN, OWNER)
- Trusted device management
- Session management

### Admin Dashboard ✅
- Complete CMS for content management
- Project, service, and product management
- Order and membership administration
- User management and role assignment
- Service request review and processing
- Complaint/feedback management

### Service Request System ✅
- Custom service request forms
- Admin review and acceptance workflow
- Credit-based service quotas
- Request status tracking

### UI/UX Features ✅
- Preference-driven theming (formal/vibey modes)
- System, light, and dark theme support
- Multi-currency display (USD/UGX)
- Responsive design across all devices
- Wishlist functionality
- Automated screenshot capture with Playwright

---

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS + DaisyUI
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

### Backend
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** NextAuth.js v5
- **2FA:** OTP (Time-based One-Time Password)
- **File Upload:** Custom upload handlers

### Security & Validation
- **Password Hashing:** bcrypt (10 rounds - ⚠️ should be 12+)
- **Schema Validation:** Zod
- **Rate Limiting:** ⚠️ NOT IMPLEMENTED (critical gap)
- **CSRF Protection:** ⚠️ NOT IMPLEMENTED (critical gap)

### Development
- **Package Manager:** npm/yarn/pnpm
- **Linting:** ESLint
- **Type Checking:** TypeScript compiler
- **Version Control:** Git
- **Testing:** ⚠️ Zero test coverage (0%)

---

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (or Supabase account)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kashik09/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/myportfolio"
POSTGRES_PRISMA_URL="postgresql://user:password@localhost:5432/myportfolio?schema=public"
POSTGRES_URL_NON_POOLING="postgresql://user:password@localhost:5432/myportfolio"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth Providers (optional)
GITHUB_ID="your-github-oauth-id"
GITHUB_SECRET="your-github-oauth-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (for notifications - optional)
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-email@example.com"
SMTP_PASSWORD="your-smtp-password"
EMAIL_FROM="noreply@example.com"
```

4. **Set up the database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma db push

# Seed initial data
npm run db:seed
```

5. **Set up Playwright (for screenshot capture)**
```bash
npx playwright install chromium
```

6. **Run the development server**
```bash
npm run dev
```

7. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### First-Time Setup

After installation, you'll need to:

1. Create an admin account (first user is automatically OWNER)
2. Configure site settings in admin dashboard
3. Add projects, services, and products via CMS
4. Set up payment integration (see blocker #1)
5. Define credit pricing (see blocker #2)

---

## Project Structure

```
my-portfolio/
├── app/                          # Next.js 14 App Router
│   ├── (main)/                   # Public pages (home, about, projects, services)
│   ├── (admin)/                  # Admin dashboard and CMS
│   ├── api/                      # API routes
│   │   ├── auth/                 # NextAuth configuration
│   │   ├── memberships/          # Membership purchase/management
│   │   ├── products/             # Product catalog
│   │   ├── cart/                 # Shopping cart
│   │   └── admin/                # Admin-only APIs
│   └── globals.css               # Global styles & theme definitions
├── components/                   # React components
│   ├── ui/                       # UI primitives (Button, Input, Card, etc.)
│   ├── features/                 # Feature-specific components
│   └── layouts/                  # Layout components
├── lib/                          # Utilities, helpers, and business logic
│   ├── auth.ts                   # NextAuth configuration
│   ├── credits.ts                # Credit system logic
│   ├── membership-plans.ts       # Membership tier definitions
│   ├── cart.ts                   # Shopping cart logic
│   └── license.ts                # License generation and validation
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Database seeding script
├── public/
│   ├── uploads/                  # User-uploaded files
│   └── content/                  # JSON CMS content
├── docs/                         # Comprehensive documentation
│   ├── audits/                   # Security, performance, code quality audits
│   ├── pricing/                  # Pricing strategy and product catalog
│   └── reference/                # Technical reference documents
└── scripts/                      # Utility scripts (screenshot capture, etc.)
```

---

## Documentation

### Key Documentation Files

- **[MASTER_PRICING_GUIDE.md](docs/pricing/MASTER_PRICING_GUIDE.md)** - Complete pricing strategy, membership tiers, and product catalog
- **[comprehensive-audit-summary.md](docs/audits/comprehensive-audit-summary.md)** - Full codebase audit with scores and recommendations
- **[FINDINGS.md](docs/audits/FINDINGS.md)** - Comprehensive feature inventory and implementation status
- **[security-audit.md](docs/audits/security-audit.md)** - OWASP Top 10 analysis and security roadmap
- **[performance-audit.md](docs/audits/performance-audit.md)** - Bundle size, Core Web Vitals, optimization plan

### Audit Scores (as of 2026-01-07)

| Area | Score | Status |
|------|-------|--------|
| **Security** | 68/100 | ⚠️ Medium-High Risk |
| **Performance** | 62/100 | ⚠️ Needs Improvement |
| **Code Quality** | 72/100 | ✅ Good (Room for Improvement) |
| **Business Logic** | 85/100 | ✅ Well-Designed |
| **Overall** | 67/100 | ⚠️ Not Production-Ready |

**Critical Security Issues:**
- No CSRF protection (CVSS 8.8)
- No rate limiting (CVSS 8.2)
- Missing security headers (CVSS 7.4)
- Path traversal in file upload (CVSS 8.6)
- Weak bcrypt rounds (CVSS 7.8)

**Performance Issues:**
- 5.8MB main bundle
- Force-dynamic on homepage
- No image optimization
- 977-line HomeCanvas component

**Code Quality Issues:**
- 153 `any` type usages
- Zero test coverage (0%)
- 200+ lines of duplicated fetch logic

---

## Database Schema

The application uses a comprehensive Prisma schema with 20+ models:

### Core Models
- **User** - User accounts with roles and authentication
- **Account** - OAuth account linking
- **Session** - NextAuth session management
- **TwoFactorSecret** - 2FA TOTP secrets
- **TrustedDevice** - Trusted device tracking

### Business Models
- **Membership** - Membership subscriptions
- **Credit** - Credit allocation and tracking
- **CreditTransaction** - Credit usage logs
- **Product** - Digital product catalog
- **License** - Product licenses
- **Order** - Purchase orders
- **Cart** / **CartItem** - Shopping cart

### Content Models
- **Project** - Portfolio projects
- **Service** - Service offerings
- **ServiceRequest** - Client service requests
- **Feedback** / **Complaint** - User feedback

See `prisma/schema.prisma` for full schema.

---

## API Reference

### Public APIs
- `GET /api/projects` - List portfolio projects
- `GET /api/services` - List services
- `GET /api/products` - List digital products
- `POST /api/cart` - Manage shopping cart
- `POST /api/memberships/purchase` - Purchase membership (⚠️ demo mode)

### Admin APIs (Authentication Required)
- `/api/admin/projects` - CRUD operations for projects
- `/api/admin/products` - CRUD operations for products
- `/api/admin/orders` - Order management
- `/api/admin/memberships` - Membership administration
- `/api/admin/users` - User management

### Authentication APIs
- `/api/auth/*` - NextAuth endpoints
- `POST /api/auth/2fa/setup` - Enable 2FA
- `POST /api/auth/2fa/verify` - Verify 2FA token
- `POST /api/auth/devices/trust` - Trust current device

---

## Scripts

```bash
# Development
npm run dev              # Start dev server on localhost:3000

# Building
npm run build            # Build for production
npm run start            # Start production server

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema changes to database
npm run db:seed          # Seed database with initial data

# Code Quality
npm run lint             # Run ESLint

# Screenshot Capture
npx tsx scripts/capture-screenshot.ts <url> [filename]
```

---

## Roadmap to Production

### Phase 0: Critical Blockers (20-40 hours)
- [ ] Integrate Stripe or Flutterwave payment processing
- [ ] Define credit system pricing (decision required)
- [ ] Implement payment webhooks
- [ ] Complete email notification system

### Phase 1: Security Hardening (40-60 hours)
- [ ] Add CSRF protection
- [ ] Implement rate limiting (Upstash)
- [ ] Add security headers
- [ ] Fix path traversal vulnerability
- [ ] Increase bcrypt rounds to 12+
- [ ] Input validation and sanitization

### Phase 2: Performance Optimization (20-30 hours)
- [ ] Reduce bundle size (code splitting)
- [ ] Enable ISR on homepage
- [ ] Convert images to WebP
- [ ] Add API response caching
- [ ] Split HomeCanvas into smaller components

### Phase 3: Code Quality (80+ hours)
- [ ] Replace 153 `any` types with proper types
- [ ] Extract API client (DRY up fetch logic)
- [ ] Add test coverage (target: 80%)
- [ ] Set up CI/CD pipeline

**Estimated Time to Production:** 160-210 hours

---

## Known Issues

### Critical
- ❌ No payment integration (demo mode only)
- ❌ Credit pricing undefined
- ❌ No CSRF protection
- ❌ No rate limiting

### High Priority
- ⚠️ Missing email notifications for key events
- ⚠️ 5.8MB bundle size (performance impact)
- ⚠️ Zero test coverage
- ⚠️ 153 `any` type usages

### Medium Priority
- Theme-aware favicon not implemented
- OAuth provider display in login form missing
- Error page randomization not implemented
- Wishlist not linked in header

See [`docs/audits/FINDINGS.md`](docs/audits/FINDINGS.md) for complete list.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (follow `.claude-preferences` guidelines)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Commit Guidelines:**
- Follow existing commit history patterns
- Write clean, accurate commit messages
- No AI attribution in commits
- See `.claude-preferences` for full standards

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

This project is proprietary software. All rights reserved.

---

## Contact

- **GitHub:** [@kashik09](https://github.com/kashik09)
- **LinkedIn:** [Kashi Kweyu](https://linkedin.com/in/kashi-kweyu)
- **Instagram:** [@kashi_kweyu](https://instagram.com/kashi_kweyu)
- **WhatsApp:** [+256 760 637783](https://wa.me/256760637783)

---

## Acknowledgments

- Next.js team for the amazing framework
- Prisma for the excellent ORM
- NextAuth.js for authentication
- Supabase for PostgreSQL hosting
- Tailwind CSS + DaisyUI for styling
- Lucide for beautiful icons

---

**Built by [Kashi Kweyu](https://github.com/kashik09)**

**Note:** This is a complex business application currently in active development. See production blockers above before attempting deployment.
