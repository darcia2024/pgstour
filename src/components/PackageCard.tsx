import Link from "next/link";
import { ArrowRight, MapPin, CalendarBlank, Moon } from "@phosphor-icons/react/dist/ssr";
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
        "group relative flex overflow-hidden rounded-xl border border-line bg-paper-2 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        featured
          ? "flex-col md:flex-row"
          : "flex-col",
      )}
    >
      <div
        className={clsx(
          "relative shrink-0 overflow-hidden bg-sand",
          featured ? "h-56 md:h-auto md:w-[46%]" : "h-52",
        )}
      >
        <Photo
          label={pkg.image}
          alt={`Suasana ${pkg.cities.join(", ")}`}
          fill
          imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {pkg.badges.slice(0, featured ? 2 : 1).map((b) => (
            <span
              key={b}
              className="rounded-full bg-paper-2/92 px-2.5 py-1 text-[11px] font-medium text-brand-deep backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
          {pkg.subtitle}
        </p>
        <h3 className="mt-2 font-display text-2xl text-ink">{pkg.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {featured ? pkg.summary : truncate(pkg.summary, 120)}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-ink-soft">
          <li className="inline-flex items-center gap-1.5">
            <CalendarBlank size={15} className="text-brand-bright" />
            {pkg.durationDays} hari
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Moon size={15} className="text-brand-bright" />
            {pkg.nightsMakkah}M Makkah / {pkg.nightsMadinah}M Madinah
          </li>
          <li className="inline-flex items-center gap-1.5">
            <MapPin size={15} className="text-brand-bright" />
            {pkg.cities.length} kota
          </li>
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-ink-faint">
              Mulai dari
            </p>
            <p className="font-display text-xl text-brand-deep">
              {formatIDR(pkg.priceFrom)}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-transform duration-200 group-hover:translate-x-0.5">
            Lihat detail
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n).trimEnd() + "..." : s;
}
