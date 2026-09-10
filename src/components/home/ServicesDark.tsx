import Link from "next/link";
import {
  ArrowUpRight,
  AirplaneTilt,
  FileText,
  UsersThree,
  GraduationCap,
  Handshake,
  ChatCircleDots,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    icon: AirplaneTilt,
    title: "Program Umroh Mahabbah",
    desc: "Program 9 hari Madinah dan Makkah, penerbangan langsung, hotel dekat masjid, dan umroh 2x.",
    href: "/perjalanan",
    tag: "Keberangkatan Terdekat",
  },
  {
    icon: FileText,
    title: "Layanan Visa Umroh",
    desc: "Pengurusan visa umroh resmi perorangan maupun rombongan, termasuk opsi longstay hingga 85 hari.",
    href: "/visa-umroh",
    tag: "Proses Cepat",
  },
  {
    icon: UsersThree,
    title: "Umroh Rombongan & Khusus",
    desc: "Paket keberangkatan khusus bagi majelis taklim, instansi, sekolah, maupun keluarga besar.",
    href: "/konsultasi",
    tag: "Custom Jadwal",
  },
  {
    icon: GraduationCap,
    title: "Bimbingan Manasik Intensif",
    desc: "3x pelatihan manasik komprehensif (teori, simulasi thawaf/sa'i, dan bimbingan kesehatan).",
    href: "/tentang-kami",
    tag: "3x Pelatihan",
  },
  {
    icon: Handshake,
    title: "Kemitraan & Perwakilan",
    desc: "Kesempatan bertumbuh bersama PGS Travel sebagai mitra syiar di kota dan daerah Anda.",
    href: "/kemitraan",
    tag: "Syiar Bersama",
  },
  {
    icon: ChatCircleDots,
    title: "Konsultasi Ibadah Bebas Biaya",
    desc: "Diskusi langsung bersama tim konsultan kami mengenai tanggal, rincian biaya, dan persiapan teknis.",
    href: "/konsultasi",
    tag: "Gratis",
  },
];

export function ServicesDark() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-10 sm:py-20 lg:py-24 text-paper-2">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <Container className="relative">
        {/* Section Header (Clean, No Weird Pill Rectangle) */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
              Layanan Terintegrasi
            </div>
            <h2 className="headline text-xl sm:text-3xl lg:text-[2.35rem] font-bold tracking-tight text-paper-2">
              Solusi Lengkap Perjalanan Ibadah
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xs leading-relaxed text-paper-2/75 sm:text-sm">
              Kami menangani seluruh rangkaian perjalanan ibadah: bimbingan manasik, legalitas visa, operasional di Tanah Suci, hingga kepulangan.
            </p>
          </Reveal>
        </div>

        {/* 6 Harmonious Service Cards — 2 columns on mobile, 3 on desktop */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.05}>
              <Link
                href={s.href}
                className="group flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-paper-2/10 bg-paper-2/[0.04] p-3 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-paper-2/30 hover:bg-paper-2/[0.08] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-paper-2/10 text-accent-soft transition-colors group-hover:bg-accent group-hover:text-ink">
                      <s.icon size={16} weight="duotone" className="sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <span className="hidden sm:inline-block rounded-full bg-paper-2/10 px-2.5 py-0.5 text-[10px] font-semibold text-paper-2/80">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-display mt-2.5 sm:mt-4 text-xs sm:text-lg font-bold text-paper-2 leading-tight">
                    {s.title}
                  </h3>

                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-[13px] leading-relaxed text-paper-2/70 line-clamp-2 sm:line-clamp-none">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-3 sm:mt-5 flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-accent-soft transition-colors group-hover:text-paper-2 pt-2 sm:pt-3 border-t border-paper-2/10">
                  <span>Lihat Detail</span>
                  <ArrowUpRight
                    size={12}
                    weight="bold"
                    className="sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
