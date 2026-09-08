import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/site-content";

/** Quote grid. Short snippets, clean attribution, no avatars. */
export function Testimonials({
  heading = "Cerita yang dibawa pulang",
  intro = "Yang kami bawa pulang bukan hanya foto atau oleh-oleh, tapi cerita dan pengalaman yang terus hidup jauh setelah perjalanan berakhir.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="border-t border-line bg-paper-2 py-24 sm:py-28">
      <Container>
        <SectionHeading title={heading} intro={intro} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 0.06}
              className="flex flex-col rounded-xl border border-line bg-paper p-6 sm:p-7"
            >
              <p className="text-[15px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="font-display text-lg text-ink">{t.name}</p>
                <p className="text-[13px] text-ink-soft">
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
