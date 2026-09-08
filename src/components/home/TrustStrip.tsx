import { Container } from "@/components/ui/Container";

/*
  Trust strip. Instead of client logos (an umrah agency has jamaah, not brand
  clients) this states what every departure guarantees.
  TODO(pgs): confirm the "500+" figure or replace with a real number.
*/
const guarantees = [
  "Izin PPIU resmi",
  "Visa umrah legal",
  "Maskapai terjadwal",
  "Hotel dekat masjid",
  "Pembimbing menetap",
];

export function TrustStrip() {
  return (
    <div className="border-b border-line bg-paper-2">
      <Container className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="mkr max-w-xs text-[13px] font-medium uppercase leading-snug tracking-[0.1em] text-ink-soft">
          Lebih dari 500 jamaah telah kami dampingi
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {guarantees.map((g) => (
            <li
              key={g}
              className="text-[13px] font-medium text-ink-faint"
            >
              {g}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
