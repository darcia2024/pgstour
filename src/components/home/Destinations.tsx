import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/content/site-content";

/*
  Horizontal scroll-snap gallery of tall image cards. Pure CSS, no JS.
  Handles 5 destinations without a cramped 5-up grid.
*/
export function Destinations() {
  return (
    <section className="overflow-hidden bg-paper-2 py-24 sm:py-28">
      <Container>
        <SectionHeading
          title="Tempat-tempat yang kami tuju"
          intro="Dua kota suci sebagai inti, dengan pilihan menyempurnakan perjalanan ke Al-Quds, Istanbul, atau Cairo."
        />
      </Container>

      <div className="mt-12">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="shrink-0 sm:w-[max(0px,calc((100vw-72rem)/2))]" aria-hidden />
          {destinations.map((d) => (
            <article
              key={d.name}
              className="group relative flex h-[26rem] w-[17rem] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-xl sm:w-[19rem]"
            >
              <Photo
                label={d.image}
                alt={`${d.name} - ${d.place}`}
                fill
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/25 to-transparent" />
              <div className="relative p-5 text-paper-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent-soft">
                  {d.place}
                </p>
                <h3 className="mt-1 font-display text-2xl">{d.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-paper-2/80">
                  {d.blurb}
                </p>
              </div>
            </article>
          ))}
          <div className="w-5 shrink-0 sm:w-8" aria-hidden />
        </div>
      </div>
    </section>
  );
}
