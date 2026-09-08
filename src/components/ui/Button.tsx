import Link from "next/link";
import { clsx } from "clsx";

/*
  Shape system for the site:
  - Buttons: full pill (rounded-full)
  - Cards / images / inputs: rounded-xl (12-14px)
  Keep to these two and nothing else.
*/

type Variant = "primary" | "outline" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 active:translate-y-px disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-bright focus-visible:ring-offset-paper";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-paper-2 hover:bg-brand-deep shadow-[0_10px_30px_-12px_rgba(20,58,47,0.55)]",
  outline:
    "border border-line-strong text-ink hover:border-brand hover:text-brand bg-transparent",
  ghost: "text-ink hover:bg-sand",
  onDark:
    "bg-paper-2 text-brand-deep hover:bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

function cls(variant: Variant, size: Size, className?: string) {
  return clsx(base, variants[variant], sizes[size], className);
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cls(variant, size, className)}>
      {children}
    </Link>
  );
}

export function ButtonExternal({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls(variant, size, className)}
    >
      {children}
    </a>
  );
}
