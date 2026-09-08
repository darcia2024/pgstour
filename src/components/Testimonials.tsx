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
    <section className="border-t border-line bg-paper-2 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Pengalaman Jamaah" title={heading} intro={intro} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-paper p-6 sm:p-7"
            >
              <p className="text-[15px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-baseline justify-between gap-3 border-t border-line pt-4">
                <p className="font-display text-base tracking-tight text-ink">
                  {t.name}
                </p>
                <p className="text-right text-[12px] text-ink-faint">
                  {t.role} &middot; {t.trip}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
