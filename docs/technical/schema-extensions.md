# Database Schema Extensions for Platform Integration

## Overview
This document outlines the database schema extensions needed to integrate the digital products and services platform into the portfolio website.

## Core Principles
- Products and services are separate systems
- Security-first design
- Audit everything
- Role-based access control
- No data resale

---

## 1. USER MODEL EXTENSIONS

### Add to existing User model:
```prisma
// Account status
accountStatus     AccountStatus  @default(ACTIVE)
accountLockedAt   DateTime?
accountLockedReason String?      @db.Text

// Age verification (for minors)
birthDate         DateTime?
guardianEmail     String?
isMinor           Boolean        @default(false)

// Security
twoFactorEnabled  Boolean        @default(false)
twoFactorSecret   String?

// Membership
membershipId      String?
membership        Membership?    @relation(fields: [membershipId], references: [id])

// Relations (new)
digitalProducts   DigitalProductPurchase[]
licenses          License[]
downloads         Download[]
serviceProjects   ServiceProject[]
creditTransactions CreditTransaction[]
auditLogs         AuditLog[]
```

---

## 2. DIGITAL PRODUCTS SYSTEM

### DigitalProduct
```prisma
model DigitalProduct {
  id              String   @id @default(cuid())

  // Product info
  name            String
  slug            String   @unique
  description     String   @db.Text
  category        ProductCategory
  tags            String[]

  // Pricing
  price           Decimal  @db.Decimal(10, 2)
  currency        String   @default("USD")

  // Files
  fileUrl         String   // Secure download URL
  fileSize        Int      // in bytes
  fileType        String   // zip, pdf, etc.
  thumbnailUrl    String?
  previewImages   String[] // Array of preview image URLs

  // License types offered
  personalLicense Boolean  @default(true)
  commercialLicense Boolean @default(true)
  teamLicense     Boolean  @default(false)

  // Metadata
  version         String   @default("1.0.0")
  changelog       String?  @db.Text
  documentation   String?  @db.Text

  // Publishing
  published       Boolean  @default(false)
  publishedAt     DateTime?
  featured        Boolean  @default(false)

  // Stats
  downloadCount   Int      @default(0)
  purchaseCount   Int      @default(0)

  // Timestamps
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  // Relations
  purchases       DigitalProductPurchase[]
  licenses        License[]
  downloads       Download[]

  @@index([slug])
  @@index([category])
  @@index([published])
  @@map("digital_products")
}
```

### DigitalProductPurchase
```prisma
model DigitalProductPurchase {
  id              String   @id @default(cuid())

  // Buyer
  userId          String
  user            User     @relation(fields: [userId], references: [id])

  // Product
  productId       String
  product         DigitalProduct @relation(fields: [productId], references: [id])

  // Purchase details
  licenseType     LicenseType
  price           Decimal  @db.Decimal(10, 2)
  currency        String

  // Payment
  paymentStatus   PaymentStatus @default(PENDING)
  paymentMethod   String?
  transactionId   String?  @unique

  // Timestamps
  purchasedAt     DateTime @default(now())

  @@index([userId])
  @@index([productId])
  @@index([paymentStatus])
  @@map("digital_product_purchases")
}
```

### License
```prisma
model License {
  id              String   @id @default(cuid())

  // Owner
  userId          String
  user            User     @relation(fields: [userId], references: [id])

  // Product
  productId       String
  product         DigitalProduct @relation(fields: [productId], references: [id])

  // License details
  licenseKey      String   @unique
  licenseType     LicenseType
  status          LicenseStatus @default(ACTIVE)

  // Usage limits (for team licenses)
  maxUsers        Int      @default(1)
  currentUsers    Int      @default(0)

  // Abuse tracking
  abuseDetected   Boolean  @default(false)
  abuseReason     String?  @db.Text
  revokedAt       DateTime?
  revokedReason   String?  @db.Text

  // Timestamps
  issuedAt        DateTime @default(now())
  expiresAt       DateTime? // null = lifetime

  // Relations
  downloads       Download[]

  @@index([userId])
  @@index([productId])
  @@index([licenseKey])
  @@index([status])
  @@map("licenses")
}
```

### Download
```prisma
model Download {
  id              String   @id @default(cuid())

  // User & Product
  userId          String
  user            User     @relation(fields: [userId], references: [id])

  productId       String
  product         DigitalProduct @relation(fields: [productId], references: [id])

  licenseId       String
  license         License  @relation(fields: [licenseId], references: [id])

  // Download tracking
  successful      Boolean  @default(false)
  ipHash          String   // Hashed IP for security
  deviceFingerprint String?
  userAgent       String?  @db.Text

  // Download window tracking (3 downloads in 14 days)
  downloadedAt    DateTime @default(now())

  @@index([userId])
  @@index([productId])
  @@index([licenseId])
  @@index([downloadedAt])
  @@map("downloads")
}
```

### DownloadResetRequest
```prisma
model DownloadResetRequest {
  id              String   @id @default(cuid())

  userId          String
  productId       String

  // Request details
  reason          String   @db.Text
  status          ResetRequestStatus @default(PENDING)

  // Admin review
  reviewedBy      String?
  reviewedAt      DateTime?
  reviewNotes     String?  @db.Text

  // Timestamps
  createdAt       DateTime @default(now())

  @@index([userId])
  @@index([status])
  @@map("download_reset_requests")
}
```

---

## 3. SERVICES SYSTEM

### ServiceProject
```prisma
model ServiceProject {
  id              String   @id @default(cuid())

  // Client
  userId          String
  user            User     @relation(fields: [userId], references: [id])

  // Project info
  name            String
  description     String   @db.Text
  category        ServiceCategory

  // Current phase
  currentPhase    ProjectPhase @default(DESIGN)

  // Revisions tracking
  designRevisions Int      @default(0)
  designRevisionsMax Int   @default(2)
  buildRevisions  Int      @default(0)
  buildRevisionsMax Int    @default(1)

  // Scope
  approvedFeatures String[] // List of approved features
  scope           String?  @db.Text

  // Timeline
  startDate       DateTime?
  deadline        DateTime?
  isPaused        Boolean  @default(false)
  pauseReason     String?  @db.Text
  pausedAt        DateTime?

  // Status
  status          ServiceStatus @default(ACTIVE)

  // Timestamps
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  completedAt     DateTime?

  // Relations
  phases          ProjectPhaseHistory[]
  addOns          ServiceAddOn[]

  @@index([userId])
  @@index([currentPhase])
  @@index([status])
  @@map("service_projects")
}
```

### ProjectPhaseHistory
```prisma
model ProjectPhaseHistory {
  id              String   @id @default(cuid())

  projectId       String
  project         ServiceProject @relation(fields: [projectId], references: [id])

  phase           ProjectPhase
  startedAt       DateTime @default(now())
  completedAt     DateTime?

  notes           String?  @db.Text

  @@index([projectId])
  @@map("project_phase_history")
}
```

### ServiceAddOn
```prisma
model ServiceAddOn {
  id              String   @id @default(cuid())

  projectId       String
  project         ServiceProject @relation(fields: [projectId], references: [id])

  // Add-on details
  type            AddOnType
  description     String   @db.Text
  creditCost      Int

  // Status
  status          AddOnStatus @default(PENDING)

  // Timestamps
  requestedAt     DateTime @default(now())
  approvedAt      DateTime?
  completedAt     DateTime?

  @@index([projectId])
  @@index([status])
  @@map("service_add_ons")
}
```

---

## 4. CREDIT & MEMBERSHIP SYSTEM

### Membership
```prisma
model Membership {
  id              String   @id @default(cuid())

  // User
  users           User[]

  // Tier
  tier            MembershipTier

  // Credits
  totalCredits    Int      // Total credits for this period
  usedCredits     Int      @default(0)
  remainingCredits Int     // Computed: totalCredits - usedCredits
  rolloverCredits Int      @default(0)
  rolloverCap     Int      // Max credits that can roll over

  // Validity
  startDate       DateTime @default(now())
  endDate         DateTime
  renewalDate     DateTime?
  autoRenew       Boolean  @default(false)

  // Status
  status          MembershipStatus @default(ACTIVE)

  // Timestamps
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  // Relations
  transactions    CreditTransaction[]

  @@index([status])
  @@map("memberships")
}
```

### CreditTransaction
```prisma
model CreditTransaction {
  id              String   @id @default(cuid())

  // User & Membership
  userId          String
  user            User     @relation(fields: [userId], references: [id])

  membershipId    String
  membership      Membership @relation(fields: [membershipId], references: [id])

  // Transaction details
  type            CreditTransactionType
  amount          Int      // Positive = added, Negative = spent
  balance         Int      // Credits remaining after transaction

  // Description
  description     String
  reference       String?  // Related entity ID (project, add-on, etc.)

  // Timestamp
  createdAt       DateTime @default(now())

  @@index([userId])
  @@index([membershipId])
  @@index([createdAt])
  @@map("credit_transactions")
}
```

---

## 5. SECURITY & AUDIT SYSTEM

### AuditLog
```prisma
model AuditLog {
  id              String   @id @default(cuid())

  // Actor
  userId          String?
  user            User?    @relation(fields: [userId], references: [id])

  // Action
  action          AuditAction
  resource        String   // e.g., "License", "Download", "ServiceProject"
  resourceId      String

  // Details
  details         Json?    // Additional context
  ipHash          String?
  userAgent       String?  @db.Text

  // Timestamp
  createdAt       DateTime @default(now())

  @@index([userId])
  @@index([action])
  @@index([resource])
  @@index([createdAt])
  @@map("audit_logs")
}
```

### DeviceSession
```prisma
model DeviceSession {
  id              String   @id @default(cuid())

  userId          String

  deviceFingerprint String
  ipHash          String
  userAgent       String?  @db.Text

  // Status
  blocked         Boolean  @default(false)
  blockedReason   String?  @db.Text

  // Timestamps
  firstSeen       DateTime @default(now())
  lastSeen        DateTime @default(now())

  @@index([userId])
  @@index([blocked])
  @@map("device_sessions")
}
```

---

## 6. SYSTEM CONFIGURATION

### FeatureFlag
```prisma
model FeatureFlag {
  id              String   @id @default(cuid())

  name            String   @unique
  description     String?  @db.Text
  enabled         Boolean  @default(false)

  // Environment-specific
  environment     Environment @default(PRODUCTION)

  // Metadata
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@map("feature_flags")
}
```

### SystemBackup
```prisma
model SystemBackup {
  id              String   @id @default(cuid())

  // Backup info
  type            BackupType
  description     String?

  // Storage
  storageUrl      String   // Backup file location
  size            Int      // Size in bytes

  // What's included
  includesDatabase Boolean @default(true)
  includesFiles   Boolean @default(false)
  includesConfig  Boolean @default(false)
  includesAuditLogs Boolean @default(false)

  // Status
  status          BackupStatus @default(PENDING)

  // Timestamps
  createdAt       DateTime @default(now())
  completedAt     DateTime?

  @@index([status])
  @@index([createdAt])
  @@map("system_backups")
}
```

---

## 7. NEW ENUMS

```prisma
enum AccountStatus {
  ACTIVE
  LOCKED
  BANNED
  SUSPENDED
}

enum ProductCategory {
  TEMPLATE
  THEME
  UI_KIT
  CODE_SNIPPET
  DOCUMENTATION
  ASSET
  LICENSE
  OTHER
}

enum LicenseType {
  PERSONAL
  COMMERCIAL
  TEAM
}

enum LicenseStatus {
  ACTIVE
  EXPIRED
  REVOKED
  SUSPENDED
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

enum ResetRequestStatus {
  PENDING
  APPROVED
  REJECTED
}

enum ServiceCategory {
  WEB_DESIGN
  WEB_DEVELOPMENT
  MOBILE_APP
  CUSTOM_SOFTWARE
  CONSULTING
  MAINTENANCE
}

enum ProjectPhase {
  DESIGN
  BUILD
  POST_LAUNCH
  COMPLETED
  PAUSED
}

enum ServiceStatus {
  ACTIVE
  PAUSED
  COMPLETED
  CANCELLED
}

enum AddOnType {
  EXTRA_REVISION
  CONTENT_EDIT
  SUPPORT_CALL
  RUSH_DELIVERY
  EMERGENCY_FIX
  REOPEN_PROJECT
  CUSTOM
}

enum AddOnStatus {
  PENDING
  APPROVED
  IN_PROGRESS
  COMPLETED
  REJECTED
}

enum MembershipTier {
  BASIC_ACCESS
  PRO
  MANAGED
}

enum MembershipStatus {
  ACTIVE
  EXPIRED
  CANCELLED
  PAUSED
}

enum CreditTransactionType {
  INITIAL_ALLOCATION
  RENEWAL
  TOP_UP
  USAGE
  REFUND
  ROLLOVER
  ADJUSTMENT
}

enum AuditAction {
  USER_LOGIN
  USER_LOGOUT
  LICENSE_ISSUED
  LICENSE_REVOKED
  DOWNLOAD_ATTEMPTED
  DOWNLOAD_SUCCEEDED
  DOWNLOAD_FAILED
  ABUSE_DETECTED
  ACCOUNT_LOCKED
  ACCOUNT_UNLOCKED
  CREDIT_USED
  MEMBERSHIP_CREATED
  MEMBERSHIP_RENEWED
  PROJECT_CREATED
  PROJECT_PHASE_CHANGED
  ADD_ON_REQUESTED
  SETTINGS_CHANGED
}

enum Environment {
  DEVELOPMENT
  STAGING
  PRODUCTION
}

enum BackupType {
  SCHEDULED
  MANUAL
  PRE_DEPLOYMENT
}

enum BackupStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  FAILED
}
```

---

## 8. ROLE ENUM EXTENSION

Update existing Role enum:
```prisma
enum Role {
  USER
  VIEWER      // New: Can view data
  EDITOR      // New: Can edit content
  ADMIN
  MODERATOR
  OWNER       // New: Full control
}
```

---

## Implementation Notes

1. **Migration Strategy**: Create migrations incrementally
   - Start with enums and core models
   - Add relations in subsequent migrations
   - Test each migration in dev environment

2. **Indexes**: Add indexes for frequently queried fields
   - User foreign keys
   - Status fields
   - Timestamps
   - Unique identifiers

3. **Data Integrity**:
   - Use `onDelete: Cascade` for user-owned records
   - Use `onDelete: SetNull` for soft references
   - Add database-level constraints where needed

4. **Security**:
   - Hash IPs before storage
   - Never store raw payment details
   - Encrypt sensitive fields (2FA secrets, license keys)

5. **Performance**:
   - Use `@db.Text` for large text fields
   - Consider partitioning audit logs by date
   - Add pagination to all list queries
