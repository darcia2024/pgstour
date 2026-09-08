import Link from "next/link";
import { clsx } from "clsx";

/**
 * Wordmark: a simple pointed-arch (mihrab) mark plus the PGS lettering.
 * Single geometric mark, drawn once here. `tone` swaps colours for use on
 * the light header vs the dark footer.
 */
export function Logo({
  tone = "dark",
  compact = false,
  className,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  const text = tone === "dark" ? "text-ink" : "text-paper-2";
  const sub = tone === "dark" ? "text-ink-faint" : "text-paper-2/60";
  const mark = tone === "dark" ? "text-brand" : "text-accent-soft";

  return (
    <Link
      href="/"
      aria-label={`${"PGS Tour & Travel"} - beranda`}
      className={clsx("group inline-flex items-center gap-3", className)}
    >
      <svg
        viewBox="0 0 32 40"
        className={clsx("h-9 w-auto", mark)}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 1C7.716 1 1 7.716 1 16v23h30V16C31 7.716 24.284 1 16 1Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M16 9c-4.418 0-8 3.582-8 8v14h16V17c0-4.418-3.582-8-8-8Z"
          fill="currentColor"
          opacity="0.14"
        />
        <path
          d="m16 12 1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5L16 12Z"
          fill="currentColor"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={clsx(
            "font-display text-xl tracking-tight",
            text,
          )}
        >
          PGS Tour &amp; Travel
        </span>
        {compact ? null : (
          <span
            className={clsx(
              "mt-1 text-[10px] font-medium uppercase tracking-[0.2em]",
              sub,
            )}
          >
            Pesona Global Syiarbaitullah
          </span>
        )}
      </span>
    </Link>
  );
}
