import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/*
  Bright centered hero over a Masjidil Haram photo.
  The photo sits at the bottom; its blue sky blends into the gradient above it
  and its misty base blends into the page below. Mobile widens the photo so the
  Ka'bah stays large and centred instead of being edge-cropped by object-cover.
*/

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Sky, matched to the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a9d0ee] via-[#c7e0f2] to-paper-2" />

      {/* Photo at the bottom. Width scales per breakpoint = the "zoom" control. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/hero-kaaba.webp"
        alt="Ka'bah di Masjidil Haram, Makkah"
        width={1672}
        height={941}
        className="pointer-events-none absolute bottom-0 left-1/2 w-[215%] max-w-none -translate-x-1/2 select-none sm:w-[135%] lg:w-full"
      />

      {/* Legibility scrim over the headline area */}
      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/60 via-white/25 to-transparent" />
      {/* Blend the misty base into the page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper-2 via-paper-2/70 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 pb-[52vw] pt-28 text-center sm:px-8 sm:pb-[32vw] sm:pt-36 lg:pb-[23rem]">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3.5 py-1.5 text-[12px] font-semibold text-ink shadow-[0_2px_10px_-2px_rgba(12,16,48,0.12)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
          Terdaftar SISKOPATUH Kementerian Agama
        </span>

        <h1 className="headline mx-auto mt-7 max-w-3xl text-[2.5rem] leading-[1.02] text-ink sm:text-[3.6rem] lg:text-[4.25rem]">
          Mengantar Langkah,
          <br />
          Memaknai Ibadah.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
          Paket Umroh Mahabbah 9 hari Madinah dan Makkah untuk keberangkatan
          terdekat, ditambah layanan pengurusan visa umroh. Pembimbing menetap,
          kuota terbatas.
        </p>

        <div className="mt-9 flex items-center justify-center">
          <Link
            href="/perjalanan"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-3.5 text-sm font-semibold text-paper-2 shadow-[0_12px_30px_-10px_rgba(12,16,48,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Lihat Paket Umroh
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
