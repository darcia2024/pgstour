import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CalendarBlank, Moon, GraduationCap, SealCheck } from "@phosphor-icons/react/dist/ssr";

const stats = [
  {
    icon: CalendarBlank,
    value: "9",
    unit: "Hari",
    label: "Program Ibadah",
    note: "Alokasi seimbang 4 malam di Makkah dan 3 malam di Madinah.",
  },
  {
    icon: Moon,
    value: "2x",
    unit: "Ibadah Umroh",
    label: "Miqat Resmi",
    note: "Didampingi muthawif dengan miqat Bir Ali dan At-Tan'im.",
  },
  {
    icon: GraduationCap,
    value: "3x",
    unit: "Pelatihan",
    label: "Manasik Intensif",
    note: "Pembekalan teori, praktik ibadah, dan bimbingan kesehatan.",
  },
  {
    icon: SealCheck,
    value: "PPIU",
    unit: "Resmi",
    label: "Izin Kemenag RI",
    note: "No. 09102301626860001, terdaftar resmi di SISKOPATUH.",
  },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-paper-2/40 py-8 sm:py-16">
      <Container>
        <Reveal>
          <div className="mb-5 sm:mb-8 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright">
                Komitmen &amp; Rekam Jejak
              </span>
              <h2 className="headline text-lg sm:text-2xl font-bold text-ink mt-0.5 sm:mt-1">
                Standar Pelayanan Ibadah PGS Tour
              </h2>
            </div>
            <span className="text-[11px] sm:text-xs text-ink-faint">
              Data operasional &amp; legalitas resmi
            </span>
          </div>

          {/* Seamless Minimalist Metric Grid — 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-8 divide-y-0 sm:divide-y-0 sm:divide-x divide-line">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className={`rounded-xl border border-line/70 bg-paper/60 p-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 ${idx > 0 ? "sm:pl-6 lg:pl-8" : ""}`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <s.icon size={16} weight="duotone" className="text-brand-bright sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-ink-faint truncate">
                    {s.label}
                  </span>
                </div>

                <div className="mt-1 sm:mt-2 flex items-baseline gap-1 sm:gap-1.5">
                  <span className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-brand-deep">
                    {s.value}
                  </span>
                  <span className="font-display text-xs sm:text-lg font-semibold text-accent">
                    {s.unit}
                  </span>
                </div>

                <p className="mt-1 sm:mt-2 text-[10px] sm:text-[13px] leading-relaxed text-ink-soft line-clamp-2 sm:line-clamp-none">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
