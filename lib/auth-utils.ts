export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== 'string') return null

  const email = value.trim().toLowerCase()
  return email.length ? email : null
}

export function getNonEmptyString(value: unknown): string | null {
  if (typeof value !== 'string') return null

  const trimmed = value.trim()
  return trimmed.length ? trimmed : null
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_EMAIL_LENGTH = 254
const MIN_PASSWORD_LENGTH = 8
const MAX_PASSWORD_LENGTH = 72

export function isValidEmail(value: string): boolean {
  if (!value) return false
  if (value.length > MAX_EMAIL_LENGTH) return false
  return EMAIL_PATTERN.test(value)
}

export function isValidPassword(value: string): boolean {
  if (!value) return false
  if (value.length < MIN_PASSWORD_LENGTH) return false
  if (value.length > MAX_PASSWORD_LENGTH) return false
  return true
}
