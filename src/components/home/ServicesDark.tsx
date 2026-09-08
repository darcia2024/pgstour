import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    title: "Umrah Reguler",
    desc: "Paket inti 9 hari, Madinah dan Makkah, untuk yang pertama kali berangkat.",
    href: "/perjalanan/umrah-barokah-9-hari",
  },
  {
    title: "Umrah Plus",
    desc: "Menyempurnakan umrah dengan Istanbul, atau Al-Quds dan Cairo.",
    href: "/perjalanan/umrah-plus-turki-12-hari",
  },
  {
    title: "Umrah Ramadhan",
    desc: "Sepuluh malam terakhir di Makkah untuk i'tikaf dan Lailatul Qadar.",
    href: "/perjalanan/umrah-ramadhan-10-malam",
  },
  {
    title: "Rombongan & Carter",
    desc: "Keberangkatan khusus untuk majelis taklim, masjid, sekolah, atau kantor.",
    href: "/konsultasi",
  },
  {
    title: "Bimbingan Manasik",
    desc: "Kelas persiapan, materi bacaan, dan grup diskusi sebelum berangkat.",
    href: "/tentang-kami",
  },
  {
    title: "Kemitraan & Perwakilan",
    desc: "Buka perwakilan PGS di kota Anda atau jadi agen referral.",
    href: "/kemitraan",
  },
];

export function ServicesDark() {
  return (
    <section className="bg-ink-2 py-24 text-paper-2 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end">
          <Reveal>
            <Eyebrow tone="light" className="mb-5">
              Layanan
            </Eyebrow>
            <h2 className="headline flex flex-wrap items-center gap-x-4 text-[2rem] leading-[1.02] sm:text-[2.6rem] md:text-5xl">
              Layanan
              <span
                aria-hidden
                className="inline-block h-[0.78em] w-[1.5em] rounded-md bg-[linear-gradient(120deg,#1f7ec4,#86d0f2)] align-middle"
              />
              Kami
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-[15px] leading-relaxed text-paper-2/70">
              Kami menangani seluruh rangkaian perjalanan: dari bimbingan
              sebelum berangkat, operasional di Arab Saudi, sampai kepulangan.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-paper-2/12 border-y border-paper-2/12">
          {services.map((s) => (
            <Reveal key={s.title}>
              <Link
                href={s.href}
                className="group flex items-start justify-between gap-6 py-6 transition-colors hover:bg-paper-2/[0.03]"
              >
                <div className="max-w-xl">
                  <h3 className="font-display text-xl text-paper-2 sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-2/60">
                    {s.desc}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  className="mt-1 shrink-0 text-paper-2/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
