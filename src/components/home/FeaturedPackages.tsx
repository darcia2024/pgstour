import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { mainPackage, formatIDR } from "@/content/packages";

export function FeaturedPackages() {
  return (
    <section className="border-t border-line bg-paper-2 py-12 sm:py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <SectionHeading
            eyebrow="Paket Umroh"
            title={
              <>
                Keberangkatan{" "}
                <span className="text-muted">terdekat</span>
              </>
            }
            intro="Umroh Mahabbah, 9 hari Madinah dan Makkah. Perbedaan harga hanya pada pilihan kamar."
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href={`/perjalanan/${mainPackage.slug}`}
              className="inline-flex items-center gap-1.5 border-b border-line-strong pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
            >
              <ArrowRight size={14} weight="bold" />
              Lihat detail
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 sm:mt-10">
          <Reveal>
            <PackageCard pkg={mainPackage} featured />
          </Reveal>

          <div className="mt-3.5 grid gap-3.5 sm:mt-4 sm:grid-cols-3">
            {mainPackage.rooms.map((r) => (
              <Reveal
                key={r.type}
                className="rounded-xl border border-line bg-paper p-4 text-center"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                  {r.type.split(" - ")[0]}
                </p>
                <p className="mt-1.5 font-display text-xl font-bold text-brand-deep">
                  {formatIDR(r.price)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
