import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { destinations } from "@/content/site-content";

/*
  Image strip: scrolls horizontally on small screens (images bleed off the
  edge), settles into a 5-up row on desktop.
  TODO(pgs): replace placeholders with real photography.
*/
export function MomentsStrip() {
  return (
    <section className="overflow-hidden border-y border-line bg-paper-2 py-14 sm:py-16">
      <Container className="mb-9">
        <Reveal>
          <Eyebrow className="mb-5">Destinasi</Eyebrow>
          <h2 className="headline text-[2rem] leading-[1.02] sm:text-[2.6rem] md:text-5xl">
            Tempat-tempat yang kami tuju
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Dua kota suci sebagai inti, dengan pilihan menyempurnakan perjalanan
            ke Al-Quds, Istanbul, atau Cairo.
          </p>
        </Reveal>
      </Container>

      <div className="flex snap-x gap-1 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {destinations.map((d) => (
          <figure
            key={d.name}
            className="group relative w-[62%] shrink-0 snap-start sm:w-[38%] lg:w-auto"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <Photo
                label={d.image}
                alt={`${d.name} - ${d.place}`}
                bare
                fill
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-2/85 to-transparent p-4 pt-12">
                <figcaption className="text-paper-2">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-paper-2/60">
                    {d.place}
                  </span>
                  <span className="font-display text-lg">{d.name}</span>
                </figcaption>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
