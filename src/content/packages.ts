/**
 * Paket perjalanan umrah PGS Tour.
 *
 * Sumber data: poster resmi "UMROH MAHABBAH" dari PGS Tour.
 * Ini adalah paket keberangkatan terdekat. Perbedaan harga hanya pada jenis
 * kamar (Double / Triple / Quad).
 *
 * TODO(pgs):
 * - Isi tanggal keberangkatan pasti pada field `departure`.
 * - Konfirmasi rincian itinerary harian (poster tidak memuat itinerary).
 */

export type ItineraryDay = {
  day: string;
  title: string;
  detail: string;
};

export type RoomPrice = {
  type: string;
  price: number;
};

export type UmrahPackage = {
  slug: string;
  name: string;
  subtitle: string;
  summary: string;
  durationDays: number;
  nightsMakkah: number;
  nightsMadinah: number;
  priceFrom: number;
  priceNote: string;
  /** Harga per jenis kamar (dari poster). */
  rooms: RoomPrice[];
  featured?: boolean;
  badges: string[];
  cities: string[];
  airline: string;
  hotelMakkah: string;
  hotelMadinah: string;
  departure: string;
  quota: string;
  image: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
};

export const packages: UmrahPackage[] = [
  {
    slug: "umroh-mahabbah",
    name: "Umroh Mahabbah",
    subtitle: "9 Hari - Madinah & Makkah",
    summary:
      "Paket keberangkatan terdekat PGS Tour. Sembilan hari di Madinah dan Makkah, penerbangan langsung, hotel dekat masjid, umroh dua kali, dan pembimbing yang menemani dari manasik hingga kembali ke tanah air.",
    durationDays: 9,
    nightsMakkah: 4,
    nightsMadinah: 3,
    priceFrom: 35_500_000,
    priceNote: "harga kamar Quad (berempat), belum termasuk pembuatan paspor dan vaksin",
    rooms: [
      { type: "Quad - sekamar berempat", price: 35_500_000 },
      { type: "Triple - sekamar bertiga", price: 38_500_000 },
      { type: "Double - sekamar berdua", price: 41_500_000 },
    ],
    featured: true,
    badges: ["Program 9 Hari", "Umroh 2x", "Manasik 3x"],
    cities: ["Madinah", "Makkah"],
    airline: "Garuda Indonesia / Saudia (penerbangan langsung)",
    hotelMakkah: "Maysan Al Mashaer, dekat Masjidil Haram",
    hotelMadinah: "Astoneast Taiba, dekat Masjid Nabawi",
    departure: "Keberangkatan terdekat - hubungi kami untuk tanggal pastinya",
    quota: "Kuota terbatas per keberangkatan",
    image: "/img/poster-umroh-mahabbah.webp",
    highlights: [
      "Umroh 2x dengan miqat di Bir Ali dan At-Tan'im",
      "Kereta cepat Haramain (HHR) Makkah - Madinah",
      "City tour Makkah dan Madinah",
      "3x pelatihan manasik umroh sebelum berangkat",
      "Ziarah: Museum Madinah, Museum Wahyu, Jabal Malaikat, dan Ziarah Badar",
      "Tour leader dan muthawif berpengalaman",
    ],
    includes: [
      "Hotel Makkah: Maysan Al Mashaer (dekat masjid)",
      "Hotel Madinah: Astoneast Taiba",
      "Penerbangan langsung Garuda Indonesia / Saudia (PP)",
      "Visa umroh",
      "Makan 3x sehari",
      "Air Zam-Zam 5 liter",
      "Kereta cepat Haramain (HHR)",
      "Umroh 2x, miqat Bir Ali dan At-Tan'im",
      "City tour Makkah dan Madinah",
      "Transportasi dan snack selama di Arab Saudi",
      "Tour leader dan muthawif berpengalaman",
      "Perlengkapan umroh",
      "Asuransi perjalanan",
      "3x pelatihan manasik umroh",
    ],
    excludes: [
      "Pembuatan paspor",
      "Vaksin meningitis dan polio",
      "Keperluan dan transportasi pribadi dari daerah masing-masing",
      "Kelebihan bagasi di luar ketentuan maskapai",
      "Biaya dam atau denda pelanggaran ihram",
    ],
    itinerary: [
      {
        day: "Hari 1 - 2",
        title: "Tanah air - Madinah",
        detail:
          "Berkumpul di bandara dan pengarahan terakhir, lalu terbang langsung menuju Madinah. Tiba, check-in hotel, dan mulai ibadah di Masjid Nabawi.",
      },
      {
        day: "Hari 3",
        title: "Madinah - Raudhah dan ziarah kota",
        detail:
          "Program Raudhah sesuai jadwal tasreh, ziarah Baqi, Museum Madinah, Museum Wahyu, Jabal Malaikat, dan medan Perang Badar.",
      },
      {
        day: "Hari 4",
        title: "Madinah - Makkah (miqat Bir Ali)",
        detail:
          "Persiapan ihram, mengambil miqat di Bir Ali, perjalanan menuju Makkah, tiba dan melaksanakan umroh pertama dengan bimbingan penuh.",
      },
      {
        day: "Hari 5 - 7",
        title: "Makkah - ibadah dan city tour",
        detail:
          "Memperbanyak ibadah di Masjidil Haram, city tour Makkah, dan umroh kedua dengan miqat di At-Tan'im.",
      },
      {
        day: "Hari 8 - 9",
        title: "Tawaf wada - tanah air",
        detail:
          "Melaksanakan tawaf wada, menuju bandara, penerbangan kembali ke tanah air, dan doa syukur bersama.",
      },
    ],
  },
];

export function getPackage(slug: string): UmrahPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

/** Paket keberangkatan terdekat. */
export const mainPackage = packages[0];

export function formatIDR(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
