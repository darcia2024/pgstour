import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { JamaahGallery } from "@/components/home/JamaahGallery";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Galeri Jamaah - Bukan Sekedar Itinerary, Tapi Momen yang Penuh Arti - PGS Tour",
  description:
    "Sebab, pada akhirnya, yang kita bawa pulang bukan hanya foto, oleh-oleh, atau daftar tempat yang pernah dikunjungi. Kita membawa cerita, perasaan, pengalaman, dan kenangan yang akan terus hidup jauh setelah perjalanan berakhir.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dokumentasi Perjalanan"
        title="Bukan Sekedar Itinerary, Tapi Momen yang Penuh Arti"
        intro="Sebab, pada akhirnya, yang kita bawa pulang bukan hanya foto, oleh-oleh, atau daftar tempat yang pernah dikunjungi. Kita membawa cerita, perasaan, pengalaman, dan kenangan yang akan terus hidup jauh setelah perjalanan berakhir."
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
