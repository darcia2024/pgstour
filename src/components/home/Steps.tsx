import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationSteps } from "@/content/site-content";

/** Process row: four steps, connected on desktop, stacked on mobile. */
export function Steps() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          title="Dari niat sampai berangkat, empat langkah"
          intro="Tidak berbelit. Anda cukup memutuskan untuk berangkat, sisanya kami yang mengurus."
        />

        <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          {registrationSteps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 0.06} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl text-accent">{s.n}</span>
                <span className="h-px flex-1 bg-line md:hidden" />
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
              {i < registrationSteps.length - 1 ? (
                <span className="absolute -right-3 top-4 hidden h-px w-6 bg-line md:block" />
              ) : null}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
