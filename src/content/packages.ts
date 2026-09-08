/**
 * Paket perjalanan umrah.
 *
 * CATATAN untuk klien (PGS):
 * - Semua harga di bawah adalah ESTIMASI dan masih menunggu konfirmasi resmi
 *   (kurs, harga tiket maskapai, dan harga hotel per musim berubah).
 * - Jadwal keberangkatan, nama hotel, dan maskapai silakan disesuaikan.
 * - Foto masih menggunakan placeholder sampai aset asli tersedia.
 */

export type ItineraryDay = {
  day: string;
  title: string;
  detail: string;
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
  featured?: boolean;
  badges: string[];
  cities: string[];
  airline: string;
  hotelMakkah: string;
  hotelMadinah: string;
  departure: string;
  quota: string;
  /** Placeholder label until a real photo lands in /public. */
  image: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
};

export const packages: UmrahPackage[] = [
  {
    slug: "umrah-barokah-9-hari",
    name: "Umrah Barokah",
    subtitle: "9 Hari - Madinah & Makkah",
    summary:
      "Paket inti untuk pertama kali berangkat. Ritme perjalanan yang tenang, hotel dekat area masjid, dan pembimbing yang mendampingi dari tanah air hingga kembali.",
    durationDays: 9,
    nightsMakkah: 4,
    nightsMadinah: 3,
    priceFrom: 30_900_000,
    priceNote: "estimasi per jamaah, kamar quad (berempat)",
    featured: true,
    badges: ["Keberangkatan tiap bulan", "Cocok untuk pemula", "Manasik gratis"],
    cities: ["Madinah", "Makkah"],
    airline: "Saudia atau Garuda Indonesia (direct / 1x transit)",
    hotelMakkah: "Dar Al Eiman Grand atau setaraf (±200 m dari Masjidil Haram)",
    hotelMadinah: "Dallah Taibah atau setaraf (depan pelataran Masjid Nabawi)",
    departure: "Setiap bulan sepanjang tahun (di luar musim haji)",
    quota: "40 jamaah per keberangkatan",
    image: "Masjid Nabawi, Madinah",
    highlights: [
      "Ziarah Raudhah dengan pendampingan pembimbing wanita dan pria",
      "City tour Madinah: Masjid Quba, Jabal Uhud, Masjid Qiblatain",
      "City tour Makkah: Jabal Rahmah, Jabal Tsur, Ji'ranah",
      "Bimbingan ibadah harian dalam kelompok kecil",
    ],
    includes: [
      "Tiket pesawat pulang-pergi kelas ekonomi",
      "Visa umrah dan biaya pengurusannya",
      "Hotel bintang 4 di Makkah dan Madinah",
      "Makan 3x sehari menu Indonesia",
      "Transportasi bus AC selama di Arab Saudi",
      "Pembimbing ibadah dan tour leader berpengalaman",
      "Perlengkapan: koper, tas, kain ihram / mukena, buku panduan",
      "Air zamzam sesuai ketentuan maskapai",
      "Manasik umrah sebelum keberangkatan",
    ],
    excludes: [
      "Pembuatan paspor",
      "Suntik meningitis dan vaksin yang diwajibkan",
      "Kelebihan bagasi di luar ketentuan maskapai",
      "Pengeluaran pribadi (laundry, telepon, oleh-oleh)",
      "Biaya dam atau denda pelanggaran ihram",
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Jakarta - Madinah",
        detail:
          "Berkumpul di bandara, pengarahan terakhir, lalu terbang menuju Madinah. Selama penerbangan pembimbing memandu niat safar dan doa.",
      },
      {
        day: "Hari 2",
        title: "Tiba di Madinah",
        detail:
          "Check-in hotel, istirahat, kemudian shalat berjamaah di Masjid Nabawi. Pengenalan area dan titik kumpul.",
      },
      {
        day: "Hari 3",
        title: "Madinah - Raudhah & ziarah kota",
        detail:
          "Masuk Raudhah sesuai jadwal tasreh, ziarah Baqi, dilanjutkan Masjid Quba, Kebun Kurma, Jabal Uhud, dan Masjid Qiblatain.",
      },
      {
        day: "Hari 4",
        title: "Madinah - Makkah (miqat Bir Ali)",
        detail:
          "Persiapan ihram, mengambil miqat di Bir Ali, perjalanan darat ke Makkah sambil bertalbiyah, tiba dan melaksanakan umrah pertama dengan bimbingan penuh.",
      },
      {
        day: "Hari 5",
        title: "Makkah - ibadah mandiri",
        detail:
          "Memperbanyak tawaf sunnah, shalat berjamaah di Masjidil Haram, dan kajian singkat bersama pembimbing.",
      },
      {
        day: "Hari 6",
        title: "Makkah - city tour",
        detail:
          "Mengunjungi Jabal Rahmah, Padang Arafah, Muzdalifah, Mina, Jabal Tsur, dan Ji'ranah untuk mengambil miqat umrah kedua (opsional).",
      },
      {
        day: "Hari 7",
        title: "Makkah - ibadah mandiri",
        detail:
          "Hari penuh untuk ibadah pribadi, muhasabah, dan memperbanyak doa di Multazam serta Hijir Ismail.",
      },
      {
        day: "Hari 8",
        title: "Tawaf wada & kepulangan",
        detail:
          "Melaksanakan tawaf wada, check-out, lalu menuju bandara Jeddah untuk penerbangan kembali ke tanah air.",
      },
      {
        day: "Hari 9",
        title: "Tiba di Jakarta",
        detail:
          "Tiba di tanah air. Pembimbing memandu doa syukur dan sesi silaturahmi pasca-perjalanan.",
      },
    ],
  },
  {
    slug: "umrah-plus-turki-12-hari",
    name: "Umrah Plus Turki",
    subtitle: "12 Hari - Madinah, Makkah, Istanbul",
    summary:
      "Menyempurnakan umrah dengan menapaki jejak peradaban Islam di Istanbul: Masjid Sultan Ahmed, Hagia Sophia, dan selat Bosphorus.",
    durationDays: 12,
    nightsMakkah: 4,
    nightsMadinah: 3,
    priceFrom: 42_500_000,
    priceNote: "estimasi per jamaah, kamar double / triple",
    badges: ["4 malam di Istanbul", "Keberangkatan terbatas"],
    cities: ["Madinah", "Makkah", "Istanbul"],
    airline: "Turkish Airlines (1x transit Istanbul)",
    hotelMakkah: "Sofwah Orchid atau setaraf (kawasan Jabal Omar)",
    hotelMadinah: "Frontel Al Harithia atau setaraf",
    departure: "Februari, Juni, September, Desember (indikatif)",
    quota: "30 jamaah per keberangkatan",
    image: "Masjid Sultan Ahmed, Istanbul",
    highlights: [
      "Umrah lengkap dengan pola 9 hari Madinah - Makkah",
      "Blue Mosque, Hagia Sophia, Topkapi, dan Grand Bazaar",
      "Menyusuri selat Bosphorus dengan kapal",
      "Ziarah Masjid Eyup Sultan",
    ],
    includes: [
      "Seluruh komponen paket Umrah Barokah",
      "Tiket dan hotel bintang 4 selama di Istanbul",
      "Tur kota Istanbul dengan pemandu lokal berbahasa Indonesia",
      "Makan 3x sehari selama di Turki",
      "Tiket masuk objek wisata sesuai program",
    ],
    excludes: [
      "Pembuatan paspor dan vaksin wajib",
      "Kelebihan bagasi",
      "Pengeluaran pribadi dan tips pemandu lokal",
      "Biaya dam",
    ],
    itinerary: [
      {
        day: "Hari 1 - 2",
        title: "Jakarta - Madinah",
        detail:
          "Penerbangan menuju Madinah via Istanbul, tiba dan check-in, mulai ibadah di Masjid Nabawi.",
      },
      {
        day: "Hari 3 - 4",
        title: "Madinah - Raudhah & ziarah",
        detail:
          "Program Raudhah dan ziarah kota Madinah, dilanjutkan persiapan menuju Makkah.",
      },
      {
        day: "Hari 5",
        title: "Madinah - Makkah",
        detail: "Miqat di Bir Ali dan pelaksanaan umrah pertama di Makkah.",
      },
      {
        day: "Hari 6 - 8",
        title: "Makkah - ibadah & city tour",
        detail:
          "Ibadah mandiri di Masjidil Haram, city tour Makkah, dan umrah kedua opsional.",
      },
      {
        day: "Hari 9",
        title: "Makkah - Istanbul",
        detail:
          "Tawaf wada, penerbangan menuju Istanbul, tiba malam hari dan check-in hotel.",
      },
      {
        day: "Hari 10 - 11",
        title: "Istanbul - jejak peradaban",
        detail:
          "Sultan Ahmed Mosque, Hagia Sophia, Hippodrome, Topkapi, Grand Bazaar, dan pelayaran Bosphorus. Ziarah Eyup Sultan.",
      },
      {
        day: "Hari 12",
        title: "Istanbul - Jakarta",
        detail: "Penerbangan kembali ke tanah air dan doa syukur bersama.",
      },
    ],
  },
  {
    slug: "umrah-plus-aqsa-cairo-13-hari",
    name: "Umrah Plus Aqsa & Cairo",
    subtitle: "13 Hari - Tiga Masjid & Mesir",
    summary:
      "Menghimpun shalat di tiga masjid yang dimuliakan, ditambah menelusuri sejarah para nabi di Mesir. Program ini mengikuti kebijakan akses Al-Aqsa yang berlaku.",
    durationDays: 13,
    nightsMakkah: 4,
    nightsMadinah: 3,
    priceFrom: 49_900_000,
    priceNote: "estimasi per jamaah, kamar double / triple",
    badges: ["Masjidil Aqsa", "Cairo & Sungai Nil", "Kuota sangat terbatas"],
    cities: ["Amman / Al-Quds", "Madinah", "Makkah", "Cairo"],
    airline: "Royal Jordanian & Saudia (indikatif)",
    hotelMakkah: "Makkah Towers atau setaraf (Zamzam / Clock Tower)",
    hotelMadinah: "Dallah Taibah atau setaraf",
    departure: "Kuartal - kuota kecil, konfirmasi minimal 3 bulan sebelumnya",
    quota: "20 jamaah per keberangkatan",
    image: "Kubah Sakhrah, Al-Quds",
    highlights: [
      "Shalat di Masjidil Aqsa dan Kubah Sakhrah",
      "Ziarah kota tua Al-Quds",
      "Umrah lengkap Madinah - Makkah",
      "Cairo: Piramida Giza, Sphinx, Museum, dan Masjid Al-Azhar",
      "Menyeberang Sungai Nil",
    ],
    includes: [
      "Seluruh komponen paket Umrah Barokah",
      "Hotel dan program di Yordania / Al-Quds dan Cairo",
      "Handling perbatasan dan pemandu lokal",
      "Makan 3x sehari sepanjang program",
      "Tiket masuk objek bersejarah sesuai itinerary",
    ],
    excludes: [
      "Pembuatan paspor dan vaksin wajib",
      "Kelebihan bagasi",
      "Pengeluaran pribadi dan tips pemandu lokal",
      "Biaya dam",
      "Biaya bila terjadi perubahan rute akibat kebijakan otoritas setempat",
    ],
    itinerary: [
      {
        day: "Hari 1 - 2",
        title: "Jakarta - Amman - Al-Quds",
        detail:
          "Penerbangan menuju Amman, perjalanan darat melintasi perbatasan menuju Al-Quds, check-in hotel.",
      },
      {
        day: "Hari 3",
        title: "Al-Quds - Masjidil Aqsa",
        detail:
          "Shalat di kompleks Masjidil Aqsa, ziarah Kubah Sakhrah, Masjid Qibli, dan kota tua Yerusalem.",
      },
      {
        day: "Hari 4",
        title: "Al-Quds - Amman - Madinah",
        detail: "Kembali ke Amman, penerbangan menuju Madinah.",
      },
      {
        day: "Hari 5 - 7",
        title: "Madinah",
        detail: "Program Raudhah, ziarah kota, dan ibadah di Masjid Nabawi.",
      },
      {
        day: "Hari 8",
        title: "Madinah - Makkah",
        detail: "Miqat di Bir Ali dan umrah pertama.",
      },
      {
        day: "Hari 9 - 10",
        title: "Makkah",
        detail: "Ibadah mandiri, city tour Makkah, umrah kedua opsional.",
      },
      {
        day: "Hari 11",
        title: "Makkah - Cairo",
        detail: "Tawaf wada, penerbangan menuju Cairo.",
      },
      {
        day: "Hari 12",
        title: "Cairo",
        detail:
          "Piramida Giza, Sphinx, Museum Mesir, Masjid Al-Azhar, dan pasar Khan el-Khalili.",
      },
      {
        day: "Hari 13",
        title: "Cairo - Jakarta",
        detail: "Penerbangan kembali ke tanah air.",
      },
    ],
  },
  {
    slug: "umrah-ramadhan-10-malam",
    name: "Umrah Ramadhan",
    subtitle: "14 Hari - 10 Malam Terakhir",
    summary:
      "Menghabiskan sepuluh malam terakhir Ramadhan di Makkah untuk i'tikaf dan memburu Lailatul Qadar. Hotel dipilih sedekat mungkin dengan Masjidil Haram.",
    durationDays: 14,
    nightsMakkah: 8,
    nightsMadinah: 4,
    priceFrom: 44_000_000,
    priceNote: "estimasi per jamaah, kamar quad. Harga puncak Ramadhan menyusul",
    badges: ["Lailatul Qadar", "Hotel dekat Haram", "Kuota cepat penuh"],
    cities: ["Madinah", "Makkah"],
    airline: "Saudia atau Garuda Indonesia",
    hotelMakkah: "Kawasan Ajyad / Misfalah, radius jalan kaki ke Masjidil Haram",
    hotelMadinah: "Area Markaziyah, depan pelataran Masjid Nabawi",
    departure: "Sekali setahun, sepuluh hari terakhir Ramadhan",
    quota: "40 jamaah, pendaftaran dibuka jauh hari",
    image: "Masjidil Haram di malam hari",
    highlights: [
      "Delapan malam penuh di Makkah untuk i'tikaf",
      "Jadwal ibadah yang menyesuaikan tarawih dan qiyamul lail",
      "Buka puasa dan sahur menu Indonesia di hotel",
      "Kajian Ramadhan harian bersama pembimbing",
    ],
    includes: [
      "Seluruh komponen paket Umrah Barokah",
      "Tambahan malam menginap sesuai durasi 14 hari",
      "Paket sahur dan buka puasa selama di Arab Saudi",
      "Pendampingan khusus untuk program i'tikaf",
    ],
    excludes: [
      "Pembuatan paspor dan vaksin wajib",
      "Kelebihan bagasi",
      "Pengeluaran pribadi",
      "Biaya dam",
    ],
    itinerary: [
      {
        day: "Hari 1 - 2",
        title: "Jakarta - Madinah",
        detail: "Keberangkatan menuju Madinah, check-in, mulai ibadah di Masjid Nabawi.",
      },
      {
        day: "Hari 3 - 5",
        title: "Madinah - Raudhah & ziarah",
        detail: "Program Raudhah, ziarah kota, tarawih di Masjid Nabawi.",
      },
      {
        day: "Hari 6",
        title: "Madinah - Makkah",
        detail: "Miqat di Bir Ali dan umrah pertama.",
      },
      {
        day: "Hari 7 - 13",
        title: "Makkah - i'tikaf 10 malam terakhir",
        detail:
          "Ibadah intensif: tarawih, qiyamul lail, tadarus, dan i'tikaf di Masjidil Haram. Pembimbing menyusun jadwal istirahat agar jamaah tetap sehat.",
      },
      {
        day: "Hari 14",
        title: "Tawaf wada - Jakarta",
        detail: "Tawaf wada, perjalanan ke Jeddah, penerbangan kembali ke tanah air.",
      },
    ],
  },
];

export function getPackage(slug: string): UmrahPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

export function formatIDR(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
