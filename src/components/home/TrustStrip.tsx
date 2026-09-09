import { Container } from "@/components/ui/Container";
import { Check, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

/*
  Trust strip: Jaminan fasilitas dan legalitas resmi keberangkatan PGS Tour.
  - Background: Putih polos (bg-white).
  - Layout: Presisi dan estetik, simetris 2 kolom pada mobile tanpa pemotongan teks (no truncate).
*/
const guarantees = [
  "Penerbangan langsung",
  "Kereta cepat Haramain",
  "Bimbingan umroh 2×",
  "Visa & Siskopatuh resmi",
  "Pembimbing ibadah menetap",
  "Hotel bintang 4 dekat masjid",
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-slate-100 py-3.5 sm:py-4">
      <Container className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* Official Credential Badge */}
        <div className="flex items-center justify-between sm:justify-start gap-3 shrink-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/70 px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink shadow-2xs">
            <ShieldCheck size={15} weight="fill" className="text-brand-bright shrink-0" />
            <span>Izin PPIU 09102301626860001</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-medium text-ink-faint">
            • Resmi Kemenag RI
          </span>
        </div>

        {/* Hairline Divider on Desktop */}
        <div className="hidden lg:block h-4.5 w-px bg-slate-200 shrink-0" />

        {/* Balanced & Aesthetic 6 Items Grid (No Truncate) */}
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-3 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2">
          {guarantees.map((g) => (
            <li
              key={g}
              className="flex items-start gap-2 text-[12px] sm:text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand-bright/10 text-brand-bright mt-0.5">
                <Check size={10} weight="bold" />
              </div>
              <span className="leading-snug">{g}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
