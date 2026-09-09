import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/*
  Angka dari poster resmi Umroh Mahabbah dan data izin.
*/
const stats = [
  {
    value: "9",
    label: "Hari program",
    note: "Madinah dan Makkah, dengan umroh dua kali.",
  },
  {
    value: "2x",
    label: "Umroh per keberangkatan",
    note: "Miqat di Bir Ali dan At-Tan'im, dipandu penuh oleh muthawif.",
  },
  {
    value: "3x",
    label: "Pelatihan manasik",
    note: "Sebelum berangkat, agar jamaah paham setiap rukun.",
  },
  {
    value: "PPIU",
    label: "Izin resmi Kemenag",
    note: "No. 0910230162686860001, terdaftar di SISKOPATUH.",
  },
];

export function Stats() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Eyebrow>Komitmen &amp; Rekam Jejak</Eyebrow>
          <span className="text-xs text-ink-faint">Data operasional perjalanan</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal
              key={s.label}
              className="rounded-xl border border-line bg-paper-2 p-4.5 transition-all duration-200 hover:border-line-strong hover:shadow-xs"
            >
              <p className="headline text-3xl text-brand-deep sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs font-bold text-ink sm:text-sm">{s.label}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-soft sm:text-xs">
                {s.note}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
