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
        "group flex overflow-hidden rounded-2xl border border-line bg-paper transition-colors duration-300 hover:border-line-strong",
        featured ? "flex-col md:flex-row" : "flex-col",
      )}
    >
      <div
        className={clsx(
          "relative shrink-0 overflow-hidden bg-sand",
          featured ? "h-60 md:h-auto md:w-1/2" : "h-48",
        )}
      >
        <Photo
          label={pkg.image}
          alt={`Suasana ${pkg.cities.join(", ")}`}
          bare
          fill
          imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {pkg.badges.slice(0, featured ? 2 : 1).map((b) => (
            <span
              key={b}
              className="rounded-full bg-paper-2/92 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mkr text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          {pkg.subtitle}
        </p>
        <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">
          {pkg.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {featured ? pkg.summary : truncate(pkg.summary, 116)}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-ink-soft">
          <li className="inline-flex items-center gap-1.5">
            <CalendarBlank size={15} className="text-brand-bright" />
            {pkg.durationDays} hari
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Moon size={15} className="text-brand-bright" />
            {pkg.nightsMakkah}M / {pkg.nightsMadinah}M
          </li>
          <li className="inline-flex items-center gap-1.5">
            <MapPin size={15} className="text-brand-bright" />
            {pkg.cities.length} kota
          </li>
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-ink-faint">
              Mulai dari
            </p>
            <p className="font-display text-xl tracking-tight text-ink">
              {formatIDR(pkg.priceFrom)}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-transform duration-200 group-hover:translate-x-0.5">
            Detail
            <ArrowUpRight size={16} weight="bold" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n).trimEnd() + "..." : s;
}
