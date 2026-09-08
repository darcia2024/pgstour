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
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title="Empat cara menuju Baitullah"
            intro="Dari paket inti sembilan hari untuk yang pertama kali, sampai penyempurnaan ke Al-Aqsa dan Istanbul."
            className="max-w-xl"
          />
          <Reveal>
            <a
              href="/perjalanan"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-deep"
            >
              Semua paket
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5">
          <Reveal>
            <PackageCard pkg={featured} featured />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
