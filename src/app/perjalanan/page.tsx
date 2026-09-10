import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PackageShowcase } from "@/components/PackageShowcase";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { mainPackage } from "@/content/packages";

export const metadata: Metadata = {
  title: "Program Umroh Mahabbah 9 Hari - PGS Tour",
  description:
    "Program Umroh Mahabbah PGS Tour: 9 hari Madinah dan Makkah, penerbangan langsung, hotel dekat masjid. Brosur resmi, rincian biaya kamar Quad, Triple, Double, dan itinerary lengkap.",
};

export default function PerjalananPage() {
  return (
    <>
      <PageHeader
        eyebrow="Program Umroh &amp; Brosur Resmi"
        title="Program Umroh Mahabbah 9 Hari"
        intro="Program keberangkatan terdekat PGS Tour. Penerbangan langsung Garuda Indonesia / Saudia, hotel dekat masjid, dan bimbingan ibadah intensif."
      />

      <main>
        <PackageShowcase pkg={mainPackage} />
      </main>

      <div className="border-t border-line bg-paper-2">
        <Faq heading="Pertanyaan Seputar Program Umroh Mahabbah" />
      </div>

      <CtaBand
        title="Siap Berangkat Bersama Rombongan Terdekat?"
        body="Sampaikan jumlah jamaah dan tipe kamar pilihan Anda. Tim PGS Tour siap mendampingi pendaftaran hingga keberangkatan."
      />
    </>
  );
}
