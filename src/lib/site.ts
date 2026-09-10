/**
 * Central site configuration: identity, contact, navigation.
 * Edit values here once and they propagate across every page.
 *
 * TODO(pgs): confirm items marked PLACEHOLDER with the client before launch.
 */

export const site = {
  name: "PGS Tour & Travel",
  shortName: "PGS Tour",
  // TODO(pgs): konfirmasi. Diambil dari nama rekening resmi pada poster.
  legalName: "PT Permana Group Sejahtera",
  tagline: "Mengantar Langkah, Memaknai Ibadah",
  motto: "Amanah & Terpercaya",
  meaning: "Pesona Global Syiarbaitullah",
  description:
    "Travel umrah dari Serang, Banten yang mendampingi setiap tamu Allah menjalani ibadah dengan tenang, nyaman, khusyuk, dan penuh makna.",
  url: "https://pgstravel.id",

  contact: {
    address:
      "Depan Gerbang Perumahan Mutiara Indah Satu, Kaligandu, Kec. Serang, Kota Serang, Banten 42111",
    addressShort: "Kaligandu, Kota Serang, Banten",
    phoneDisplay: "+62 813 2955 2371",
    phoneE164: "6281329552371",
    phoneAltDisplay: "+62 838 1921 0924",
    phoneAltE164: "6283819210924",
    email: "salam@pgstravel.id",
    // Office hours, PLACEHOLDER
    hours: "Senin - Sabtu, 09.00 - 17.00 WIB",
  },

  // Rekening pembayaran resmi (dari poster). Pembayaran hanya melalui rekening ini.
  payment: {
    bank: "BCA",
    accountNumber: "5411 42 2071",
    // TODO(pgs): konfirmasi nama entitas resmi (poster menulis penerima pembayaran).
    accountName: "PT. Permana Group Sejahtera",
  },

  social: {
    instagram: "https://www.instagram.com/pgstravel.id",
    instagramHandle: "@pgstravel.id",
    facebook: "https://www.facebook.com/pgstravel.id", // PLACEHOLDER
    tiktok: "https://www.tiktok.com/@pgstravel.id", // PLACEHOLDER
    youtube: "", // PLACEHOLDER
  },

  // Legalitas / perizinan (dari poster resmi).
  legal: {
    // TODO(pgs): verifikasi digit nomor izin dengan SK asli.
    ppiu: "Izin PPIU No. 09102301626860001",
    ppiuShort: "Izin Umroh PPIU: 09102301626860001",
    iata: "", // jika ada
    kanNib: "", // NIB
  },
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Beranda", href: "/" },
  { label: "Program Umroh", href: "/perjalanan" },
  { label: "Visa Umroh", href: "/visa-umroh" },
  { label: "Galeri Jamaah", href: "/galeri" },
  { label: "Kemitraan", href: "/kemitraan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

export const primaryCta = { label: "Konsultasi", href: "/konsultasi" };

/** Pre-filled WhatsApp link for the floating button and CTAs. */
export function waLink(message?: string): string {
  const text =
    message ??
    "Assalamu'alaikum PGS Tour, saya ingin berkonsultasi tentang perjalanan umrah.";
  return `https://wa.me/${site.contact.phoneE164}?text=${encodeURIComponent(text)}`;
}
