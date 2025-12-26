// components/ui/Badge.tsx
import * as React from "react";

type BadgeVariant = "default" | "secondary" | "outline";

export function Badge({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border";

  const variants: Record<BadgeVariant, string> = {
    default:
      "bg-[color:hsl(var(--p)/0.12)] text-[color:hsl(var(--bc))] border-[color:hsl(var(--p)/0.25)]",
    secondary:
      "bg-[color:hsl(var(--b2))] text-[color:hsl(var(--bc))] border-[color:hsl(var(--b3))]",
    outline:
      "bg-transparent text-[color:hsl(var(--bc))] border-[color:hsl(var(--b3))]",
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}

export default Badge;
