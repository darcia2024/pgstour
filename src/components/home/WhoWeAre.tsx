import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight, Compass, ShieldCheck, UsersThree, SealCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: Compass,
    title: "Pembimbing Menetap",
    desc: "Mendampingi jamaah langsung sejak manasik di tanah air, selama di Tanah Suci, hingga kembali ke Indonesia.",
  },
  {
    icon: ShieldCheck,
    title: "Biaya Transparan & Pasti",
    desc: "Seluruh rincian fasilitas dibuka transparan sejak awal tanpa komponen biaya tersembunyi atau kejutan di kemudian hari.",
  },
  {
    icon: UsersThree,
    title: "Rombongan Terjaga & Khidmat",
    desc: "Kuota tiap rombongan dijaga proporsional agar jamaah lansia, keluarga, dan yang baru pertama kali tetap terpantau optimal.",
  },
];

export function WhoWeAre() {
  return (
    <section className="bg-white py-10 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-6 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Editorial Narrative */}
          <Reveal>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
              Sekilas Tentang Kami
            </div>

            <h2 className="headline text-xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15]">
              Bukan Sekedar Program Umrah, Kami Menyampaikan Syiar
            </h2>

            <div className="mt-3.5 sm:mt-5 space-y-2.5 sm:space-y-3.5 text-xs leading-relaxed text-ink-soft sm:text-[15px]">
              <p>
                <strong className="text-ink font-semibold">{site.name}</strong> adalah travel umroh resmi berizin Kemenag RI yang beroperasi di bawah naungan{" "}
                <strong className="text-ink font-semibold">{site.legalName}</strong> dari Kota Serang, Banten.
              </p>
              <p>
                Nama <span className="italic text-ink font-medium">Pesona Global Syiarbaitullah</span> kami pilih sebagai pengingat amanah: tugas utama kami adalah menghantarkan setiap tamu Allah menuju Baitullah dengan tenang, aman, dan penuh makna spiritual.
              </p>
            </div>

            {/* Legal Credential Badge */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-line bg-paper px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs text-ink-soft shadow-xs">
                <SealCheck size={15} weight="fill" className="text-brand-bright" />
                <span className="font-semibold text-ink">{site.legal.ppiuShort}</span>
              </div>

              <span className="text-[11px] sm:text-xs text-ink-faint">Terdaftar Resmi SISKOPATUH</span>
            </div>

            <div className="mt-5 sm:mt-7">
              <Link
                href="/tentang-kami"
                className="group inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-brand transition-colors hover:text-brand-deep"
              >
                <span>Pelajari Selengkapnya Tentang Kami</span>
                <ArrowRight size={13} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Right Column: 3 Editorial Pillars (Pure Clean & Borderless) */}
          <Reveal delay={0.08} className="space-y-6 sm:space-y-8">
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className="group flex items-start gap-4 sm:gap-5 border-b border-line/40 pb-6 sm:pb-7 last:border-b-0 last:pb-0 transition-colors"
              >
                {/* Elegant Minimalist Numeral */}
                <span className="font-serif text-2xl sm:text-3xl font-light text-accent/75 tracking-tight select-none pt-0.5 group-hover:text-accent transition-colors">
                  0{idx + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5">
                    <p.icon size={20} weight="regular" className="text-brand-bright shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-ink group-hover:text-brand transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-[13.5px] leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
