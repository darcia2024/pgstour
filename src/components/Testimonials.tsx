import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/site-content";

export function Testimonials({
  heading = "Cerita yang Dibawa Pulang",
  intro = "Bagi kami, kesuksesan perjalanan bukan sekadar tiba di Tanah Suci, melainkan ketenangan ibadah dan kenangan mendalam yang terus membekas di hati setiap jamaah.",
}: {
  heading?: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-t border-line bg-paper-2 py-10 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-6">
          <SectionHeading
            eyebrow="Pengalaman Jamaah"
            title={heading}
            intro={intro}
            className="max-w-2xl"
          />
          <div className="shrink-0 flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-ink-soft">
            <div className="flex items-center gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} weight="fill" className="sm:w-3.5 sm:h-3.5" />
              ))}
            </div>
            <span className="font-semibold text-ink">5.0 / 5.0</span>
            <span className="text-ink-faint">• 100% Kepuasan Jamaah</span>
          </div>
        </div>

        {/* Clean Editorial Testimonials Grid — 2 columns on mobile, 4 on desktop */}
        <div className="mt-6 sm:mt-14 border-y border-line grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {testimonials.map((t) => (
            <Reveal
              key={t.name}
              className="flex flex-col justify-between bg-paper-2 p-3 sm:py-10 sm:px-6 lg:px-8"
            >
              <div>
                <div
                  className="flex items-center gap-0.5 sm:gap-1 text-amber-500 mb-2 sm:mb-4"
                  aria-label="Rating 5 bintang"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} weight="fill" className="sm:w-[13px] sm:h-[13px]" />
                  ))}
                </div>

                <p className="text-[10px] sm:text-[13px] leading-relaxed text-ink/85 italic line-clamp-4 sm:line-clamp-none">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-line/60">
                <p className="font-display text-xs sm:text-sm font-bold tracking-tight text-ink truncate">
                  {t.name}
                </p>
                <p className="mt-0.5 text-[9px] sm:text-[11px] text-ink-faint truncate">
                  {t.role}
                </p>
                <span className="mt-1 inline-block text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-brand truncate">
                  {t.trip}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
