import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationSteps } from "@/content/site-content";

/** Process row: four steps, big numbers, dashed dividers. */
export function Steps() {
  return (
    <section className="py-24 sm:py-28">
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

        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {registrationSteps.map((s) => (
            <Reveal
              key={s.n}
              as="li"
              className="border-t border-dashed border-line-strong pt-5"
            >
              <span className="headline text-4xl text-brand-bright">{s.n}</span>
              <h3 className="mt-3 font-display text-lg tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
