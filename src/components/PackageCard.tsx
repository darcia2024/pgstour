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
          "relative shrink-0 overflow-hidden bg-[#dbeafe]",
          featured ? "h-60 md:h-auto md:w-[42%]" : "h-48",
        )}
      >
        <Photo
          src={pkg.image}
          label={pkg.name}
          alt={`Poster ${pkg.name}`}
          bare
          fill
          imgClassName="object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
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
