import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarBlank,
  CheckCircle,
  Clock,
  MapPin,
  Moon,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { clsx } from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mainPackage, formatIDR } from "@/content/packages";
import { waLink } from "@/lib/site";

export function FeaturedPackages() {
  const waPackageLink = waLink(
    `Halo PGS Tour, saya ingin konsultasi mengenai ${mainPackage.name}. Apakah kursi untuk rombongan masih tersedia?`
  );

  return (
    <section className="bg-paper-2 py-10 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <SectionHeading
            eyebrow="Paket Umroh Terdekat"
            title={
              <>
                Keberangkatan{" "}
                <span className="text-brand-bright">Pilihan Jamaah</span>
              </>
            }
            intro="Umroh Mahabbah 9 Hari di Madinah dan Makkah. Penerbangan langsung Garuda Indonesia / Saudia, hotel dekat pelataran masjid, dan bimbingan umroh 2 kali."
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href="/perjalanan"
              className="inline-flex items-center gap-1.5 border-b border-line-strong pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:text-brand"
            >
              <span>Lihat Detail Program &amp; Brosur</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </Reveal>
        </div>

        {/* Integrated Editorial Showcase — No Detached Box Grids */}
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-2xl border border-line bg-paper shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column: Uncropped Poster Presentation */}
            <div className="relative flex items-center justify-center bg-gradient-to-b from-sand/50 to-sand/20 p-6 sm:p-8 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-line">
              <div className="relative w-full max-w-sm">
                {/* Subtle blurred backdrop */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mainPackage.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover blur-xl opacity-20 scale-105"
                />

                <Link
                  href="/perjalanan"
                  className="group block relative z-10 overflow-hidden rounded-xl border border-line/80 shadow-md transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mainPackage.image}
                    alt={`Brosur Resmi ${mainPackage.name}`}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
                    <span className="rounded-full bg-paper/95 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm">
                      Buka Brosur HD
                    </span>
                  </div>
                </Link>

                <div className="mt-3 flex items-center justify-between text-[11px] text-ink-faint px-1">
                  <span className="inline-flex items-center gap-1 font-semibold text-brand">
                    <ShieldCheck size={14} weight="fill" />
                    Brosur Resmi Kemenag
                  </span>
                  <span>Klik poster untuk rincian</span>
                </div>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="flex flex-col justify-between p-4 sm:p-8 lg:p-10 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                    {mainPackage.subtitle}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-ink-faint">
                    Penerbangan Langsung CGK — JED
                  </span>
                </div>

                <h3 className="mt-2.5 font-display text-xl sm:text-3xl font-bold tracking-tight text-ink">
                  {mainPackage.name}
                </h3>

                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-soft">
                  {mainPackage.summary}
                </p>

                {/* Specification Badges Strip — 3 columns */}
                <div className="mt-4 sm:mt-5 grid grid-cols-3 gap-1.5 sm:gap-4 border-t border-line/80 pt-3 sm:pt-4 text-[10px] sm:text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5">
                    <CalendarBlank size={14} className="text-brand-bright shrink-0" />
                    <span className="truncate"><strong className="font-semibold text-ink">{mainPackage.durationDays} Hari</strong> Total</span>
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5">
                    <Moon size={14} className="text-brand-bright shrink-0" />
                    <span className="truncate">Madinah {mainPackage.nightsMadinah}M / {mainPackage.nightsMakkah}M</span>
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5">
                    <MapPin size={14} className="text-brand-bright shrink-0" />
                    <span className="truncate">{mainPackage.cities.join(" & ")}</span>
                  </span>
                </div>

                {/* Seamless Room Pricing Strip — Responsive: stacked rows on mobile, 3-column on tablet/desktop */}
                <div className="mt-4 sm:mt-6 border-y border-line py-3 sm:py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 sm:mb-3">
                    <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint">
                      Pilihan Kamar &amp; Biaya per Jamaah
                    </span>
                    <span className="text-[9px] sm:text-[11px] font-medium text-brand">
                      All-In Termasuk Visa &amp; Handling
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line text-left">
                    {mainPackage.rooms.map((r, i) => (
                      <div
                        key={r.type}
                        className={clsx(
                          "py-2 sm:py-0 first:pt-0 last:pb-0 flex items-center justify-between sm:block",
                          i === 0 ? "sm:pr-3 lg:pr-4" : i === 2 ? "sm:pl-3 lg:pl-4" : "sm:px-3 lg:px-4"
                        )}
                      >
                        <div>
                          <span className="block text-xs font-semibold text-ink sm:text-ink-soft">
                            Kamar {r.type.split(" - ")[0]}
                          </span>
                          <span className="block text-[10px] text-ink-faint mt-0.5">
                            {r.type.split(" - ")[1] || "per jamaah"}
                          </span>
                        </div>
                        <div className="text-right sm:text-left sm:mt-1">
                          <p className="font-display text-sm sm:text-lg lg:text-xl font-bold text-brand-deep tracking-tight whitespace-nowrap">
                            {formatIDR(r.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Inclusions Highlights */}
                <div className="mt-3.5 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-ink-soft">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={13} weight="fill" className="text-brand shrink-0" />
                    <span className="truncate">Hotel Dekat Pelataran</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={13} weight="fill" className="text-brand shrink-0" />
                    <span className="truncate">Kereta Cepat Haramain</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={13} weight="fill" className="text-brand shrink-0" />
                    <span className="truncate">Umroh 2x Bimbingan Muthawwif</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={13} weight="fill" className="text-brand shrink-0" />
                    <span className="truncate">Katering Masakan Nusantara 3x</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-line/80">
                <Link
                  href="/perjalanan"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-paper transition-transform duration-200 hover:-translate-y-px hover:bg-brand sm:text-sm"
                >
                  <span>Detail Jadwal &amp; Itinerary</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>

                <a
                  href={waPackageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-paper px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand sm:text-sm"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                  <span>Tanya Kursi Tersedia</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
