import Link from "next/link";
import { clsx } from "clsx";

/*
  PGS Tour logo, redrawn as SVG from the brand mark: a pointed arch, a wide
  navy swoosh, the Kaaba, and a departing plane.

  TODO(pgs): if you prefer the exact logo file, save a WHITE / knockout version
  (the mark sits on dark navy here) to /public/img/logo-white.svg and swap the
  <LogoMark/> below for <img src="/img/logo-white.svg" .../>.
*/

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 132 108"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* pointed arch */}
      <path
        d="M14 100C10 44 33 10 66 5c33 5 56 39 52 95"
        stroke="#5cc0ee"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* navy swoosh */}
      <path
        d="M2 92C66 48 130 92 130 92C90 74 66 71 66 71C66 71 42 74 2 92Z"
        fill="#a9c2ee"
      />
      {/* Kaaba */}
      <path d="M66 24 46 16 66 8 86 16Z" fill="#eaf4fd" />
      <path d="M66 24 46 16v36l20 8Z" fill="#cfe4fa" />
      <path d="M66 24 86 16v36l-20 8Z" fill="#bcd7f5" />
      <path d="M46 21 66 29l20-8" stroke="#5cc0ee" strokeWidth="2.4" />
      {/* plane */}
      <path
        d="M122 7c1.4.5 1.8 2.3.8 3.6l-6.6 8.7 1 7.4-2.3 1.6-2.7-6.6-4.7 5.4-2.4-1.2 1.8-6.2-7.7 1.1-1.4-2.6 9.7-4.2 3.3-7.9 2.6.7-.2 5.1 5.9-3z"
        fill="#c9d6f4"
      />
    </svg>
  );
}

export function Logo({
  tone = "light",
  compact = false,
  className,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  const text = tone === "dark" ? "text-ink" : "text-paper-2";
  const sub = tone === "dark" ? "text-ink-faint" : "text-paper-2/55";

  return (
    <Link
      href="/"
      aria-label="PGS Tour & Travel - beranda"
      className={clsx("group inline-flex items-center gap-2.5", className)}
    >
      <LogoMark className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={clsx(
            "font-display text-lg font-extrabold uppercase tracking-tight",
            text,
          )}
        >
          {compact ? "PGS Tour" : "PGS Tour & Travel"}
        </span>
        {compact ? null : (
          <span
            className={clsx(
              "mt-1 text-[10px] font-semibold uppercase tracking-[0.2em]",
              sub,
            )}
          >
            Amanah &amp; Terpercaya
          </span>
        )}
      </span>
    </Link>
  );
}
