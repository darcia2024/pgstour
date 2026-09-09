import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { destinations } from "@/content/site-content";

/*
  Two-city image strip (Madinah, Makkah).
  TODO(pgs): replace placeholders with real photography.
*/
export function MomentsStrip() {
  return (
    <section className="overflow-hidden bg-paper-2 py-10 sm:py-12">
      <Container className="mb-6 sm:mb-8">
        <Reveal>
          <Eyebrow className="mb-3">Destinasi</Eyebrow>
          <h2 className="headline text-[1.75rem] leading-[1.05] sm:text-[2.2rem] md:text-4xl">
            Dua kota, sembilan hari
          </h2>
          <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-ink-soft sm:text-sm">
            Program Umroh Mahabbah membagi waktu antara Madinah dan Makkah, dengan
            hotel yang dipilih dekat masjid di kedua kota.
          </p>
        </Reveal>
      </Container>

      <Container>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {destinations.map((d) => (
            <figure
              key={d.name}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Photo
                  src={d.image}
                  alt={`${d.name} - ${d.place}`}
                  bare
                  fill
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-2/92 via-ink-2/45 to-transparent p-4 pt-12">
                  <figcaption className="text-paper-2">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-soft">
                      {d.place}
                    </span>
                    <span className="font-display text-lg font-bold sm:text-xl">
                      {d.name}
                    </span>
                    <p className="mt-1 max-w-sm text-xs leading-relaxed text-paper-2/80">
                      {d.blurb}
                    </p>
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
