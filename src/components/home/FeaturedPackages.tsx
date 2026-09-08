import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/content/packages";

export function FeaturedPackages() {
  const featured = packages.find((p) => p.featured) ?? packages[0];
  const rest = packages.filter((p) => p.slug !== featured.slug);

  return (
    <section className="border-t border-line bg-paper-2 py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Paket Umrah"
            title={
              <>
                Empat cara menuju{" "}
                <span className="text-muted">Baitullah</span>
              </>
            }
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href="/perjalanan"
              className="inline-flex items-center gap-2 border-b border-line-strong pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
            >
              <ArrowRight size={15} weight="bold" />
              Semua paket
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4">
          <Reveal>
            <PackageCard pkg={featured} featured />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {rest.map((p) => (
              <Reveal key={p.slug}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
