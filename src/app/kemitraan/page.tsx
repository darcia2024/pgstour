import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PartnershipSection } from "@/components/PartnershipSection";

export const metadata: Metadata = {
  title: "Kemitraan - Mari Bertumbuh Bersama PGS Travel",
  description:
    "Jalin Kemitraan Bersama PGS TRAVEL. Tumbuh Bersama, Mengantar Langkah, Memaknai Ibadah. Download dokumen resmi Syarat & Ketentuan Kemitraan.",
};

export default function KemitraanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jalin Kemitraan Bersama PGS TRAVEL"
        title="Mari Bertumbuh Bersama PGS TRAVEL"
        intro="Tumbuh Bersama, Mengantar Langkah, Memaknai Ibadah."
      />

      <main>
        <PartnershipSection />
      </main>
    </>
  );
}
