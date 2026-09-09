import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

/*
  Dark hero block, inset inside the framed card, rounded to match.

  TODO(pgs): swap the background for a real photo of the Masjidil Haram or a
  PGS group. Drop it in /public/img/hero.jpg and uncomment the <img>. Keep the
  dark overlay so the headline stays legible. Recommended 2400x1600, subject
  toward the right.
*/

const process = ["Bimbingan", "Keberangkatan", "Kepulangan"];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink-2 text-paper-2">
      {/* Real background photography with multi-layer contrast overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/hero.jpg"
        alt="Masjidil Haram Makkah"
        className="absolute inset-0 h-full w-full object-cover object-right sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-2/95 via-ink-2/80 to-ink-2/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-ink-2/60" />
      
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[65%] w-auto text-accent-soft/[0.07]"
        viewBox="0 0 460 520"
        fill="none"
        preserveAspectRatio="xMaxYMax slice"
      >
        <path d="M230 20C124 20 40 104 40 210v320h380V210C420 104 336 20 230 20Z" stroke="currentColor" strokeWidth="2" />
        <path d="M230 150c-62 0-112 50-112 112v268h224V262c0-62-50-112-112-112Z" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto flex min-h-[520px] w-full max-w-7xl flex-col px-5 pb-10 pt-28 sm:min-h-[560px] sm:px-8 sm:pb-12 sm:pt-34 lg:min-h-[580px]">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <Eyebrow tone="light">Travel Umroh Berizin Resmi</Eyebrow>
            <span className="inline-flex items-center gap-1 rounded-full bg-paper-2/15 px-2.5 py-0.5 text-[11px] font-medium text-paper-2/90 backdrop-blur-md">
              <span className="text-accent-soft">•</span> Terdaftar SISKOPATUH Kemenag
            </span>
          </div>

          <h1 className="headline mt-4 text-[2rem] leading-[1.05] text-paper-2 sm:text-[3rem] lg:text-[3.6rem] xl:text-[4rem]">
            Mengantar Langkah,
            <br />
            Memaknai Ibadah.
          </h1>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-paper-2/80 sm:text-[15px]">
            Satu paket Umroh Mahabbah 9 hari Madinah &amp; Makkah, ditambah
            layanan pengurusan visa umroh. Pembimbing menetap, kuota terbatas.
          </p>
        </div>

        <div className="mt-auto grid gap-6 pt-8 sm:pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="order-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-paper-2/65 sm:text-sm lg:order-1">
            {process.map((p) => (
              <span key={p} className="inline-flex items-center">
                <span className="mr-1.5 font-bold text-accent-soft">+</span>
                {p}
              </span>
            ))}
          </div>

          <div className="order-1 flex flex-wrap gap-2.5 lg:order-2 lg:justify-end">
            <Link
              href="/perjalanan"
              className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-4.5 py-2 text-xs font-semibold text-ink transition-transform duration-200 hover:-translate-y-px hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Lihat Paket
              <ArrowUpRight size={14} weight="bold" />
            </Link>
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-1.5 rounded-full border border-paper-2/30 bg-paper-2/5 px-4.5 py-2 text-xs font-semibold text-paper-2 backdrop-blur-xs transition-colors hover:bg-paper-2/15 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Konsultasi
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
