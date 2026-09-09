import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Sparkle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const destinations = [
  {
    name: "Madinah Al-Munawwarah",
    place: "Masjid Nabawi & Raudhah",
    tagline: "Kota Suci Penuh Ketenangan & Cinta",
    blurb:
      "Menikmati sholat berjamaah di Masjid Nabawi, berziarah ke Makam Rasulullah SAW, serta bermunajat di Raudhah Syarifah dengan jadwal tasreh resmi.",
    hotel: "Hotel Astoneast Taiba (Dekat Pintu Masjid)",
    image: "/img/nabawi.jpg",
  },
  {
    name: "Makkah Al-Mukarramah",
    place: "Masjidil Haram & Ka'bah",
    tagline: "Pusat Kiblat & Puncak Ibadah",
    blurb:
      "Memandang langsung Ka'bah Al-Musyarafah, melaksanakan ibadah Umroh 2x dengan miqat di Bir Ali dan At-Tan'im, serta napak tilas sejarah Islam.",
    hotel: "Hotel Maysan Al Mashaer (*4 Dekat Haram)",
    image: "/img/makkah.jpg",
  },
];

export function MomentsStrip() {
  return (
    <section className="bg-paper py-10 sm:py-20 lg:py-24">
      <Container className="mb-5 sm:mb-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
                Destinasi Ibadah
              </div>
              <h2 className="headline text-xl sm:text-3xl lg:text-[2.35rem] font-bold tracking-tight text-ink">
                Dua Kota Suci, Satu Perjalanan Hati
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-ink-soft sm:text-sm">
              Program Umroh Mahabbah membagi waktu secara seimbang antara Madinah dan Makkah dengan hotel pilihan dekat pelataran masjid.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8">
          {destinations.map((d, idx) => (
            <Reveal key={d.name} delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-xl sm:rounded-3xl bg-sand/30 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Image Frame */}
                <div className="relative aspect-[3/4] sm:aspect-[16/11] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={`${d.name} - ${d.place}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-2/95 via-ink-2/40 to-transparent" />

                  {/* Floating Tag */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-paper/90 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-bold text-ink backdrop-blur-md shadow-xs">
                    <MapPin size={11} weight="fill" className="text-brand-bright sm:w-3.5 sm:h-3.5" />
                    <span className="truncate">{d.place.split("&")[0]}</span>
                  </div>

                  {/* Caption & Content */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 text-paper-2">
                    <span className="text-[8px] sm:text-[11px] font-bold uppercase tracking-wider text-accent-soft block truncate">
                      {d.tagline}
                    </span>
                    <h3 className="font-display text-sm sm:text-2xl font-bold text-paper-2 mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {d.name}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-[13px] leading-relaxed text-paper-2/80 line-clamp-2 hidden sm:block">
                      {d.blurb}
                    </p>

                    <div className="mt-2 sm:mt-4 flex items-center justify-between border-t border-paper-2/15 pt-2 sm:pt-3 text-[10px] sm:text-xs text-paper-2/90">
                      <span className="font-medium text-accent-soft/90 truncate text-[9px] sm:text-xs">
                        {d.hotel.split("(")[0]}
                      </span>
                      <Link
                        href="/perjalanan"
                        className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-paper-2 hover:text-accent-soft transition-colors"
                      >
                        Lihat Program &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
