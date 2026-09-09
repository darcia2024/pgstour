import Link from "next/link";
import {
  ArrowUpRight,
  CalendarBlank,
  Moon,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import { Photo } from "@/components/ui/Photo";
import { formatIDR, type UmrahPackage } from "@/content/packages";

export function PackageCard({
  pkg,
  featured = false,
}: {
  pkg: UmrahPackage;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/perjalanan/${pkg.slug}`}
      className={clsx(
        "group flex overflow-hidden rounded-xl border border-line bg-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-xs",
        featured ? "flex-col md:flex-row" : "flex-col",
      )}
    >
      <div
        className={clsx(
          "relative shrink-0 overflow-hidden bg-gradient-to-b from-sand/70 to-sand/40 flex items-center justify-center p-3 sm:p-4",
          featured ? "w-full md:w-[42%] lg:w-[38%] min-h-[260px] md:min-h-[380px]" : "h-64",
        )}
      >
        {/* Atmospheric blurred backdrop */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-xl opacity-25 scale-110"
        />

        {/* Full, uncropped poster */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={`Poster ${pkg.name}`}
          loading="lazy"
          className="relative z-10 max-h-[360px] md:max-h-[400px] w-auto max-w-full object-contain rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <div className="absolute top-2.5 left-2.5 z-20 rounded-full bg-paper/90 backdrop-blur-xs px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand shadow-xs">
          Brosur Resmi
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="mkr text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          {pkg.subtitle}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
          {pkg.name}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-[13px]">
          {featured ? pkg.summary : truncate(pkg.summary, 105)}
        </p>

        <ul className="mt-3.5 flex flex-wrap gap-x-3.5 gap-y-1 text-xs text-ink-soft">
          <li className="inline-flex items-center gap-1">
            <CalendarBlank size={14} className="text-brand-bright" />
            {pkg.durationDays} hari
          </li>
          <li className="inline-flex items-center gap-1">
            <Moon size={14} className="text-brand-bright" />
            {pkg.nightsMakkah}M / {pkg.nightsMadinah}M
          </li>
          <li className="inline-flex items-center gap-1">
            <MapPin size={14} className="text-brand-bright" />
            {pkg.cities.length} kota
          </li>
        </ul>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-line pt-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-ink-faint">
              Mulai dari
            </p>
            <p className="font-display text-lg font-bold tracking-tight text-brand-deep sm:text-xl">
              {formatIDR(pkg.priceFrom)}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand transition-transform duration-200 group-hover:translate-x-0.5">
            Detail
            <ArrowUpRight size={14} weight="bold" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n).trimEnd() + "..." : s;
}
