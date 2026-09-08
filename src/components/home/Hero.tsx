import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/*
  Hero background is a layered green field with a faint arch motif. No photo
  dependency, so it renders instantly and offline.

  TODO(pgs): to use a real photograph of the Masjidil Haram instead, drop the
  file in /public/img/hero.jpg and uncomment the <img> below. Keep the dark
  gradient overlay so the text stays readable. Recommended: 2400x1600, subject
  slightly right of centre.
*/
export function Hero() {
  return (
    <section className="relative isolate flex h-[86vh] max-h-[860px] min-h-[560px] items-center overflow-hidden bg-brand-deep">
      {/* <img src="/img/hero.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" /> */}

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_120%_at_12%_8%,#357a63_0%,#1b4135_46%,#122f27_100%)]" />
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 -z-10 h-[78%] w-auto text-accent-soft/[0.09]"
        viewBox="0 0 460 520"
        fill="none"
        preserveAspectRatio="xMaxYMax slice"
      >
        <path
          d="M230 20C124 20 40 104 40 210v320h380V210C420 104 336 20 230 20Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M230 150c-62 0-112 50-112 112v268h224V262c0-62-50-112-112-112Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M230 250c-40 0-72 32-72 72v206h144V322c0-40-32-72-72-72Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <Container className="py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            {site.meaning}
          </p>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.1] text-paper-2 sm:text-5xl md:text-[3.4rem]">
            Mengantar langkah,
            <br />
            <span className="italic text-accent-soft">memaknai ibadah.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper-2/85 sm:text-base">
            Travel umrah dari Serang dengan kelompok kecil, pembimbing yang
            menemani, dan biaya yang terbuka sejak awal.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/konsultasi" size="lg" variant="onDark">
              Konsultasi
            </Button>
            <Button
              href="/perjalanan"
              size="lg"
              variant="ghost"
              className="text-paper-2 hover:bg-paper-2/10"
            >
              Lihat paket umrah
              <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
