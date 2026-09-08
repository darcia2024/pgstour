import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/*
  TODO(pgs): confirm these figures with real data (jamaah count, ratio, etc.).
*/
const stats = [
  {
    value: "500+",
    label: "Jamaah didampingi",
    note: "Dari perorangan sampai rombongan keluarga dan majelis taklim.",
  },
  {
    value: "40",
    label: "Maksimal per rombongan",
    note: "Kuota sengaja dijaga kecil agar setiap jamaah tetap terpantau.",
  },
  {
    value: "9-14",
    label: "Hari per perjalanan",
    note: "Dari umrah reguler sembilan hari hingga Umrah Ramadhan.",
  },
  {
    value: "4",
    label: "Negara tujuan",
    note: "Arab Saudi sebagai inti, plus Palestina, Turki, dan Mesir.",
  },
];

export function Stats() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Eyebrow className="mb-12">Dalam Angka</Eyebrow>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="border-t border-dashed border-line-strong pt-5">
              <p className="headline text-5xl text-ink sm:text-6xl">{s.value}</p>
              <p className="mt-3 text-sm font-semibold text-ink">{s.label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {s.note}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
