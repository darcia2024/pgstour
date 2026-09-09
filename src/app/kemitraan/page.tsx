import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PartnershipSection } from "@/components/PartnershipSection";

export const metadata: Metadata = {
  title: "Kemitraan - Tumbuh Bersama PGS Travel",
  description:
    "Jalin Kemitraan Bersama PGS TRAVEL. Tumbuh Bersama, Mengantar Langkah, Memaknai Ibadah. Unduh dokumen resmi Syarat & Ketentuan Kemitraan.",
};

export default function KemitraanPage() {
  return (
    <>
      <PageHeader
        containerClassName="max-w-3xl"
        eyebrow="Jalin Kemitraan Bersama PGS TRAVEL"
        title="Tumbuh Bersama, Mengantar Langkah, Memaknai Ibadah"
        intro="Mari bertumbuh bersama, saling menguatkan, mengantar langkah para tamu Allah, dan memaknai setiap perjalanan sebagai bagian dari ibadah."
      />

      <main>
        <PartnershipSection />
      </main>
    </>
  );
}
