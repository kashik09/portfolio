interface ProgressBarProps {
  value: number
  className?: string
  label?: string
}

export function ProgressBar({ value, className = '', label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div className={className}>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full rounded-full bg-[color:hsl(var(--b3))] overflow-hidden"
      >
        <div
          className="h-full bg-[color:hsl(var(--p))] transition-[width] duration-200 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
