# 🔒 Final Master Prompt

Security-first blueprint for a dual-mode platform that delivers digital products and scoped services while protecting founder time and enforcing license, credit, and admin policies.

## 1. Digital Products (Separate System)
- Product types: templates, themes, UI kits, code snippets, documentation, downloadable assets, licenses/memberships.
- Lives in its own section and flow, distinct from services.
- Delivery: instant after confirmed payment; access gated by account + active license; products visible only to logged-in owners.
- Download control: each product grants 3 successful downloads within 14 days; failed downloads do not reduce the quota; resets require manual admin approval.
- Tracking per download: account ID, product ID, timestamp, device/session fingerprint, hashed IP (security only).

## 2. Licenses & Abuse Rules
- Paid licenses only; personal and commercial options; team usage allowed up to 5 users; no reselling/redistribution.
- Abuse response: revoke license, lock account, block sessions/devices, flag for admin review, send factual notice.
- Security tracking only: account ID, session/device fingerprint, hashed IP, download/access events. No invasive tracking or data sales.

## 3. Services & Scope Control (Client-Facing)
- Phased projects (visible in dashboard): Design (layout/theme/fonts/structure/wireframes), Build (implementation of approved scope + integrations only), Post-launch (bug fixes, minor tweaks, stabilization).
- Revisions: Design 2, Build 1, Post-launch bug fixes only; extra changes become paid add-ons.
- Maintenance includes bug/security fixes after issue specified & dependency update guidance; excludes new pages/features/design changes/integrations/content edits (paid only).
- Timeline pauses automatically if payment is late or scope changes occur.

## 4. Credit System (Locked)
- Credits measure time/effort for services only.
- Credits packaged into memberships, renew per membership rules, expire if unused, limited rollover, top-ups available only for Pro and Managed tiers.
- Memberships:
  - Basic Access: 6–12 months, 500–1000 credits total, no renewals, no rush work, docs-only support.
  - Pro: 2-year term, 1500 credits/year, yearly renewal, capped rollover, discounted add-ons, priority reset requests.
  - Managed: monthly or annual, credits renew monthly, hosting management, faster response, downgrade/pause allowed.
- Credit usage examples: extra revision 250, content edit batch 150, support call 300, rush delivery 500, emergency fix 400, reopen stalled project 600.
- When credits hit zero: user must top up, upgrade, or wait for renewal—no free exceptions.

## 5. Client Dashboard (Logged-In UI)
- Show current phase, revisions remaining, credits remaining (bar), maintenance status, available add-ons, clear included vs paid boundaries.
- When revisions or credits are exhausted, requests route automatically to paid add-ons to block scope creep.

## 6. Admin System
- Roles: Owner, Admin, Editor, Viewer, Basic User (RBAC everywhere).
- Admin powers: approve/reject requests, revoke licenses, lock accounts, ban sessions/devices, reset downloads, manage credits, audit logs, toggle maintenance mode, unpublish site, toggle business availability.
- Admin dashboard includes: workflow tracker (new → contacted → quoted → accepted → in progress → delivered → archived), contacted count, rejected count, charging meter (incl. maintenance fees), in-app notification center.

## 7. Environments & Feature Flags
- Environments: Dev, Staging, Production. Production rules: no direct edits, CI deploys, Owner approval required.
- Feature flags govern payments, admin tools, client previews.
- Maintenance mode: disables purchases & writes, shows “site under edits” page, keeps admin reachable.

## 8. Backups & Disaster Recovery
- Automated biweekly backups plus manual backup before major changes.
- Database always backed up; uploaded files/config/audit logs require explicit permission.
- Restore access limited to admins.
- Panic button freezes writes and rolls back to last stable backup.

## 9. Pricing, Promos & Currency
- Tier-based pricing with display-only currency converter (round down rule); final charge currency determined by payment method.
- Referrals tracked automatically but require manual approval; no promo stacking by default; loyalty promos unlock after 6–12 months active use.

## 10. Minors
- Minimum age 15 with guardian email consent.
- Reduced pricing, limited features, spending caps, restricted uploads, manual approval mandatory.
- Minors may use products commercially for their business but cannot resell/redistribute.

## 11. Security Posture
- Enforce server-side validation, rate limiting (login, requests, downloads, account creation), secure sessions (httpOnly cookies, CSRF protection), optional 2FA, RBAC, audit logs, abuse flagging.
- VPN detection is signal only (never auto-ban).
- Defense-in-depth, monitored, with clear rollback paths.

## End Goal
Deliver a platform that cleanly separates products from services, enforces scope, protects founder time, remains secure/auditable, and stays resilient at scale.
