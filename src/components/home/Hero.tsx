import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { waLink } from "@/lib/site";

/*
  Bright centered hero over a Masjidil Haram photo.
  The photo sits at the bottom, feathered at the top so it blends into the sky.
  It is nudged slightly left so the Ka'bah lands under the centred headline.
*/

const bookingWa = waLink(
  "Assalamu'alaikum PGS Tour, saya ingin booking paket Umroh Mahabbah. Mohon informasi jadwal dan cara pendaftarannya.",
);

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#bcd8ee]">
      {/* Sky, matched to the photo's own sky tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b3d3ec] via-[#c9def0] to-paper-2" />

      {/* Photo at the bottom. It is pre-cropped so the Ka'bah corner sits at the
          file's centre, so plain centring aligns it under the headline.
          Width per breakpoint is the "zoom" control. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/hero-kaaba.webp"
        alt="Ka'bah di Masjidil Haram, Makkah"
        width={1512}
        height={941}
        className="pointer-events-none absolute bottom-0 left-1/2 w-[190%] max-w-none -translate-x-1/2 select-none [mask-image:linear-gradient(to_bottom,transparent,#000_22%)] sm:w-[130%] lg:w-full"
      />

      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper-2 via-paper-2/70 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 pb-[56vw] pt-32 text-center sm:px-8 sm:pb-[34vw] sm:pt-40 lg:pb-[24rem]">
        <h1 className="headline mx-auto max-w-3xl text-[2.4rem] leading-[1.05] text-ink sm:text-[3.3rem] lg:text-[3.9rem]">
          Selamat Datang di
          <br />
          PGS Tour &amp; Travel
        </h1>
        <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-brand sm:text-sm">
          Amanah &amp; Terpercaya
        </p>

        {/* Hadis keutamaan umrah */}
        <figure className="mx-auto mt-7 max-w-2xl">
          <p
            dir="rtl"
            lang="ar"
            className="text-[1.35rem] leading-[1.9] text-ink sm:text-[1.6rem]"
          >
            الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالْحَجُّ
            الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ
          </p>
          <blockquote className="mt-3 text-pretty text-[14px] italic leading-relaxed text-ink-soft sm:text-[15px]">
            &ldquo;Dari satu umrah ke umrah berikutnya menjadi penghapus dosa di
            antara keduanya, dan haji mabrur tidak ada balasan baginya selain
            surga.&rdquo;
          </blockquote>
          <figcaption className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            HR. Bukhari no. 1773 &amp; Muslim no. 1349
          </figcaption>
        </figure>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={bookingWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-paper-2 shadow-[0_12px_30px_-10px_rgba(12,16,48,0.5)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            <WhatsappLogo size={17} weight="fill" />
            Booking Sekarang
          </a>
          <Link
            href="/perjalanan"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink/20 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:bg-white sm:w-auto"
          >
            Lihat Paket Umroh
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
