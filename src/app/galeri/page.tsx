import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { JamaahGallery } from "@/components/home/JamaahGallery";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Galeri Jamaah - Dokumentasi Nyata Perjalanan PGS Tour",
  description:
    "Lihat dokumentasi autentik perjalanan umroh jamaah PGS Tour di Makkah, Madinah, dan Masjidil Haram. Momen ibadah nyata keluarga, bimbingan lansia, dan kebersamaan di Tanah Suci.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dokumentasi Perjalanan"
        title="Galeri Jamaah PGS Tour"
        intro="Momen-momen nyata, rasa syukur, dan kehangatan ibadah jamaah kami di Makkah, Madinah, dan tempat-tempat bersejarah di Tanah Suci."
      />

      <main>
        <JamaahGallery showHeading={false} />
      </main>

      <CtaBand
        title="Ingin Mengabadikan Momen Suci Anda Bersama Kami?"
        body="Rencanakan perjalanan umroh bersama keluarga. Tim PGS Tour siap mendampingi dengan penuh amanah dan kenyamanan."
      />
    </>
  );
}
