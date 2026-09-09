import Link from "next/link";
import { clsx } from "clsx";

/*
  Official PGS Tour lockup (mark + "PGS TOUR" + "AMANAH & TERPERCAYA").
  The white/knockout file is used because the header and footer sit on dark navy.
  Source files also kept at /public/img/logo-color.png for light contexts.
*/

const SRC = "/img/logo-white.png";
const W = 1731;
const H = 1449;

export function Logo({
  size = "md",
  className,
}: {
  /** md = header, lg = footer */
  size?: "sm" | "md" | "lg";
  /** kept for call-site compatibility */
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  const h =
    size === "lg" ? "h-14 sm:h-16" : size === "sm" ? "h-9" : "h-11 sm:h-12";

  return (
    <Link
      href="/"
      aria-label="PGS Tour & Travel - beranda"
      className={clsx("inline-flex shrink-0 items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SRC}
        alt="PGS Tour - Amanah & Terpercaya"
        width={W}
        height={H}
        className={clsx("w-auto", h)}
      />
    </Link>
  );
}
