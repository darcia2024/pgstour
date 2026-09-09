import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationSteps } from "@/content/site-content";

/** Process row: four steps, big numbers, dashed dividers. */
export function Steps() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Prosesnya"
          title={
            <>
              Dari niat sampai berangkat,{" "}
              <span className="text-muted">empat langkah</span>
            </>
          }
          intro="Tidak berbelit. Anda cukup memutuskan untuk berangkat, sisanya kami yang mengurus."
        />

        <ol className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {registrationSteps.map((s) => (
            <Reveal
              key={s.n}
              as="li"
              className="flex flex-col justify-between rounded-xl border border-line bg-paper-2 p-4.5 transition-all duration-200 hover:border-line-strong hover:shadow-xs"
            >
              <div>
                <span className="headline text-3xl font-bold text-brand-bright sm:text-4xl">{s.n}</span>
                <h3 className="mt-2.5 font-display text-base font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
