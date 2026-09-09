import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { PackageCard } from "@/components/PackageCard";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { mainPackage, formatIDR } from "@/content/packages";

export const metadata: Metadata = {
  title: "Paket Umroh Mahabbah",
  description:
    "Paket Umroh Mahabbah PGS Tour: 9 hari Madinah dan Makkah, umroh 2x, hotel dekat masjid. Kamar Quad Rp 35,5 juta, Triple Rp 38,5 juta, Double Rp 41,5 juta.",
};

export default function PerjalananPage() {
  return (
    <>
      <PageHeader
        eyebrow="Paket Umroh"
        title="Umroh Mahabbah, keberangkatan terdekat"
        intro="Program 9 hari Madinah dan Makkah dengan penerbangan langsung dan hotel dekat masjid. Yang membedakan biaya hanya pilihan kamar."
      />

      <section className="py-10 sm:py-14">
        <Container>
          <Reveal>
            <PackageCard pkg={mainPackage} featured />
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {mainPackage.rooms.map((r) => (
              <Reveal
                key={r.type}
                className="rounded-xl border border-line bg-paper-2 p-5 text-center"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                  {r.type}
                </p>
                <p className="mt-2 font-display text-xl font-bold text-brand-deep">
                  {formatIDR(r.price)}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/perjalanan/${mainPackage.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-paper-2 transition-transform duration-200 hover:-translate-y-px hover:bg-brand-deep sm:text-sm"
            >
              Lihat rincian lengkap
            </Link>
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-soft sm:mt-8 sm:text-sm">
            Harga di atas belum termasuk pembuatan paspor, vaksin meningitis dan
            polio, serta keperluan pribadi. Harga final dikunci saat pendaftaran
            mengikuti kurs dan ketentuan maskapai. Pembayaran hanya melalui
            rekening resmi PGS.
          </p>
        </Container>
      </section>

      <div className="border-t border-line bg-paper-2">
        <Faq />
      </div>

      <CtaBand
        title="Siap berangkat bersama rombongan berikutnya?"
        body="Sampaikan jumlah jamaah dan pilihan kamar. Kami bantu proses pendaftaran sampai keberangkatan."
      />
    </>
  );
}
