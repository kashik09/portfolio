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
