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
    <section className="relative m-1.5 overflow-hidden rounded-[16px] bg-ink-2 text-paper-2 sm:m-2.5 sm:rounded-[24px] lg:m-3">
      {/* <img src="/img/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_18%_0%,#2f6fb8_0%,#1c2a7e_46%,#0c1030_100%)]" />
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 h-[72%] w-auto text-accent-soft/[0.08]"
        viewBox="0 0 460 520"
        fill="none"
        preserveAspectRatio="xMaxYMax slice"
      >
        <path d="M230 20C124 20 40 104 40 210v320h380V210C420 104 336 20 230 20Z" stroke="currentColor" strokeWidth="2" />
        <path d="M230 150c-62 0-112 50-112 112v268h224V262c0-62-50-112-112-112Z" stroke="currentColor" strokeWidth="2" />
        <path d="M230 250c-40 0-72 32-72 72v206h144V322c0-40-32-72-72-72Z" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-2/70 via-transparent to-ink-2/50" />

      <div className="relative mx-auto flex min-h-[clamp(500px,74vh,860px)] w-full max-w-7xl flex-col px-5 pb-9 pt-28 sm:px-8 sm:pt-32">
        <div>
          <Eyebrow tone="light">Travel Umrah Berizin Resmi</Eyebrow>
          <h1 className="headline mt-6 text-[2.3rem] text-paper-2 sm:text-[3.4rem] lg:text-6xl xl:text-[4.6rem]">
            Mengantar
            <br />
            Langkah, Memaknai
            <br />
            Ibadah.
          </h1>
        </div>

        <div className="mt-auto grid gap-8 pt-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="order-2 flex flex-wrap gap-x-8 gap-y-2 text-sm text-paper-2/55 lg:order-1">
            {process.map((p) => (
              <span key={p}>
                <span className="mr-1.5 text-paper-2/40">+</span>
                {p}
              </span>
            ))}
          </div>

          <div className="order-1 max-w-sm lg:order-2 lg:text-right">
            <p className="text-[15px] leading-relaxed text-paper-2/80">
              Umrah Reguler, Umrah Plus Turki &amp; Aqsa, dan Umrah Ramadhan.
              Untuk keluarga, perorangan, dan rombongan.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 lg:justify-end">
              <Link
                href="/perjalanan"
                className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-px"
              >
                Lihat Paket
                <ArrowUpRight size={15} weight="bold" />
              </Link>
              <Link
                href="/konsultasi"
                className="inline-flex items-center gap-1.5 rounded-full border border-paper-2/30 px-5 py-2.5 text-sm font-medium text-paper-2 transition-colors hover:bg-paper-2/10"
              >
                Konsultasi
                <ArrowUpRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
