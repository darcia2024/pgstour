import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    title: "Paket Umroh Mahabbah",
    desc: "Program 9 hari Madinah dan Makkah, umroh 2x, hotel dekat masjid, pembimbing menetap.",
    href: "/perjalanan/umroh-mahabbah",
  },
  {
    title: "Layanan Visa Umroh",
    desc: "Pengurusan visa umroh perorangan dan rombongan, termasuk longstay hingga 85 hari.",
    href: "/visa-umroh",
  },
  {
    title: "Umroh Rombongan",
    desc: "Keberangkatan bersama majelis taklim, masjid, sekolah, atau keluarga besar.",
    href: "/konsultasi",
  },
  {
    title: "Bimbingan Manasik",
    desc: "3x pelatihan manasik, materi bacaan, dan grup diskusi sebelum berangkat.",
    href: "/tentang-kami",
  },
  {
    title: "Kemitraan & Perwakilan",
    desc: "Tumbuh bersama PGS sebagai mitra atau perwakilan di daerah Anda.",
    href: "/kemitraan",
  },
  {
    title: "Konsultasi Perjalanan",
    desc: "Tanya jadwal, harga, dan persiapan langsung ke tim kami tanpa biaya.",
    href: "/konsultasi",
  },
];

export function ServicesDark() {
  return (
    <section className="bg-ink-2 py-12 text-paper-2 sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
          <Reveal>
            <Eyebrow tone="light" className="mb-3">
              Layanan
            </Eyebrow>
            <h2 className="headline flex flex-wrap items-center gap-x-3 text-[1.75rem] leading-[1.05] sm:text-[2.2rem] md:text-4xl">
              Layanan
              <span
                aria-hidden
                className="inline-block h-[0.7em] w-[1.3em] rounded-md bg-[linear-gradient(120deg,var(--color-brand-bright),var(--color-accent-soft))] align-middle"
              />
              Kami
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xs leading-relaxed text-paper-2/70 sm:text-sm">
              Kami menangani seluruh rangkaian perjalanan: bimbingan
              manasik, operasional di Tanah Suci, hingga kepulangan.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Reveal key={s.title}>
              <Link
                href={s.href}
                className="group flex h-full flex-col justify-between rounded-xl border border-paper-2/10 bg-paper-2/[0.03] p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-paper-2/25 hover:bg-paper-2/[0.07]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-paper-2 sm:text-lg">
                      {s.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      className="shrink-0 text-paper-2/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                    />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-paper-2/65">
                    {s.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
