import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/site-content";

/** Quote grid. Short snippets, clean attribution, no avatars. */
export function Testimonials({
  heading = "Cerita yang dibawa pulang",
  intro = "Yang kami bawa pulang bukan hanya foto atau oleh-oleh, tapi cerita dan pengalaman yang terus hidup jauh setelah perjalanan berakhir.",
}: {
  heading?: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-t border-line bg-paper-2 py-12 sm:py-16">
      <Container>
        <SectionHeading eyebrow="Pengalaman Jamaah" title={heading} intro={intro} />

        <div className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal
              key={t.name}
              className="flex flex-col justify-between rounded-xl border border-line bg-paper p-4.5 transition-all duration-200 hover:border-line-strong hover:shadow-xs sm:p-5"
            >
              <div>
                <div
                  className="mb-2 flex items-center gap-0.5 text-amber-500"
                  aria-label="Rating 5 dari 5"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} weight="fill" />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-ink/90 sm:text-[13px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <p className="font-display text-sm font-bold tracking-tight text-ink">
                  {t.name}
                </p>
                <p className="mt-0.5 text-[11px] text-ink-faint">
                  {t.role}, {t.trip}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
