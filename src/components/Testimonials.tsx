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
            <span className="text-ink-faint">• Ulasan Asli Google Maps</span>
          </div>
        </div>

        {/* Clean Editorial Testimonials Grid — 1 column on mobile, 3 on desktop */}
        <div className="mt-6 sm:mt-14 border-y border-line grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {testimonials.map((t) => (
            <Reveal
              key={t.name}
              className="flex flex-col justify-between bg-paper-2 p-5 sm:py-10 sm:px-6 lg:px-8"
            >
              <div>
                <div
                  className="flex items-center gap-0.5 sm:gap-1 text-amber-500 mb-3 sm:mb-4"
                  aria-label="Rating 5 bintang"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} weight="fill" className="sm:w-[13px] sm:h-[13px]" />
                  ))}
                </div>

                <p className="text-xs sm:text-[13.5px] leading-relaxed text-ink/85 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-line/60">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-display text-xs sm:text-sm font-bold tracking-tight text-ink truncate">
                    {t.name}
                  </p>
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-md bg-white border border-line px-1.5 py-0.5 text-[10px] font-semibold text-ink-soft shadow-2xs">
                    <svg className="w-3 h-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Google</span>
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] sm:text-[11px] text-ink-faint truncate">
                  {t.role}
                </p>
                <span className="mt-1 inline-block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-brand truncate">
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
