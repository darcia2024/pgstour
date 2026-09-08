import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { PackageCard } from "@/components/PackageCard";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { packages } from "@/content/packages";

export const metadata: Metadata = {
  title: "Paket Umrah",
  description:
    "Pilihan paket umrah PGS Tour: Umrah Barokah 9 hari, Umrah Plus Turki, Umrah Plus Aqsa & Cairo, dan Umrah Ramadhan.",
};

export default function PerjalananPage() {
  return (
    <>
      <PageHeader
        label="Paket Umrah"
        title="Pilih perjalanan yang sesuai dengan niat Anda"
        intro="Setiap paket memakai pola dasar yang sama: kelompok kecil, pembimbing yang menemani, dan biaya yang terbuka. Yang membedakan adalah durasi dan kota yang ditambahkan."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.05}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Harga yang tertera adalah estimasi mulai dari untuk kamar berempat.
            Harga final bergantung pada tanggal keberangkatan, pilihan kamar, dan
            kurs saat pendaftaran. Semua rincian dijelaskan tanpa biaya
            tersembunyi.
          </p>
        </Container>
      </section>

      <div className="border-t border-line bg-paper-2">
        <Faq />
      </div>

      <CtaBand
        title="Belum yakin paket yang mana?"
        body="Sampaikan rencana, jumlah rombongan, dan perkiraan tanggal. Kami bantu menimbang pilihan yang paling pas."
      />
    </>
  );
}
