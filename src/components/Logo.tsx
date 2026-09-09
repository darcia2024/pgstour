import Link from "next/link";
import { clsx } from "clsx";

/*
  Official PGS Tour lockup (mark + "PGS TOUR" + "AMANAH & TERPERCAYA").
  - tone "white" (default): knockout version, for dark backgrounds
  - tone "color": full-colour version, for light backgrounds (e.g. the bright hero)
*/

const W = 1731;
const H = 1449;

export function Logo({
  size = "md",
  tone = "white",
  className,
}: {
  /** md = header, lg = footer */
  size?: "sm" | "md" | "lg";
  tone?: "white" | "color";
  className?: string;
}) {
  const h =
    size === "lg" ? "h-14 sm:h-16" : size === "sm" ? "h-9" : "h-11 sm:h-12";
  const src = tone === "color" ? "/img/logo-color.png" : "/img/logo-white.png";

  return (
    <Link
      href="/"
      aria-label="PGS Tour & Travel - beranda"
      className={clsx("inline-flex shrink-0 items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="PGS Tour - Amanah & Terpercaya"
        width={W}
        height={H}
        className={clsx("w-auto", h)}
      />
    </Link>
  );
}
