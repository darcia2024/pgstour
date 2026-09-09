import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/*
  Bright, centered hero: soft sky gradient, pill badge, large centered headline,
  one primary CTA, and a Kaaba cutout rising from the bottom edge.
*/

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a6cfee] via-[#d6e8f7] to-[#e9f1fa]" />
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(255,255,255,0.75),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-5 pt-32 text-center sm:px-8 sm:pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3.5 py-1.5 text-[12px] font-semibold text-ink shadow-[0_2px_10px_-2px_rgba(12,16,48,0.12)] backdrop-blur-sm">
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

      {/* Ka'bah rising from the bottom */}
      <div className="relative mt-8 flex h-[clamp(190px,42vw,340px)] w-full items-end justify-center sm:mt-12">
        {/* soft ground shadow */}
        <div className="absolute bottom-[8%] left-1/2 h-10 w-[min(24rem,72vw)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(12,16,48,0.28),transparent)] blur-md" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/kaaba.webp"
          alt="Ka'bah di Masjidil Haram"
          width={900}
          height={781}
          className="relative w-[min(23rem,70vw)] translate-y-[12%] drop-shadow-[0_24px_36px_rgba(12,16,48,0.22)]"
        />
      </div>
    </section>
  );
}
