import { Container } from "@/components/ui/Container";

/*
  Trust strip: what every keberangkatan Umroh Mahabbah menjamin.
*/
const guarantees = [
  "Penerbangan langsung",
  "Hotel bintang 4 dekat masjid",
  "Umroh 2x",
  "Kereta cepat Haramain",
  "Pembimbing menetap",
];

export function TrustStrip() {
  return (
    <div className="border-b border-line bg-paper-2">
      <Container className="flex flex-col gap-3 py-3.5 sm:py-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <p className="mkr max-w-xs text-xs font-semibold uppercase leading-snug tracking-[0.1em] text-ink-soft">
          Izin PPIU 09102301626860001
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
          {guarantees.map((g) => (
            <li
              key={g}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-faint"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
              {g}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
