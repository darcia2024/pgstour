/**
 * Price list layanan Visa Umroh PGS Travel.
 * Sumber data: poster resmi "PRICE LIST VISA UMROH BY PGS TRAVEL".
 *
 * Catatan: singkatan pada poster (BIS, BRN, Istidofah) ditulis apa adanya.
 * TODO(pgs): tambahkan penjelasan singkat tiap layanan bila perlu.
 */

export type VisaTier = {
  label: string;
  price: string;
};

export type VisaService = {
  name: string;
  badge?: string;
  popular?: boolean;
  /** Harga tunggal, mis. "Rp 2.500.000". Kosongkan bila memakai `tiers`. */
  price?: string;
  /** Harga awal untuk layanan bertingkat / tiers, mis. "130 USD" */
  startingPrice?: string;
  unit?: string;
  /** Keterangan singkat di atas daftar tarif berjenjang. */
  note?: string;
  tiers?: VisaTier[];
  requirements?: string[];
};

export const visaServices: VisaService[] = [
  {
    name: "Visa Umroh Only",
    badge: "Individu / Mandiri",
    popular: true,
    price: "Rp 2.500.000",
    unit: "/ orang",
    requirements: ["Paspor aktif min. 7 bulan", "Tiket penerbangan pulang-pergi", "Confirmation Letter (CL) Hotel"],
  },
  {
    name: "Visa Umroh + BIS",
    badge: "Rombongan / Grup",
    startingPrice: "130 USD",
    unit: "/ pax",
    note: "Harga per PAX mengikuti kapasitas rombongan",
    tiers: [
      { label: "45 – 49 PAX", price: "130 USD / PAX" },
      { label: "40 – 44 PAX", price: "132 USD / PAX" },
      { label: "35 – 39 PAX", price: "133 USD / PAX" },
    ],
  },
  {
    name: "Visa Umroh + BRN",
    badge: "Durasi Fleksibel",
    startingPrice: "Rp 2.850.000",
    unit: "/ orang",
    note: "Harga bertingkat mengikuti durasi tinggal",
    tiers: [
      { label: "1 – 7 hari", price: "Rp 2.850.000" },
      { label: "8 – 12 hari", price: "Rp 2.990.000" },
      { label: "13 – 17 hari", price: "Rp 3.150.000" },
      { label: "18 – 22 hari", price: "Rp 3.200.000" },
      { label: "23 – 27 hari", price: "Rp 3.350.000" },
      { label: "28 – 32 hari", price: "Rp 3.600.000" },
    ],
  },
  {
    name: "Visa Umroh Longstay 85 Hari",
    badge: "Longstay Mandiri",
    price: "Rp 4.500.000",
    unit: "/ 85 hari",
    requirements: ["KTP WNI asli / fotokopi", "Paspor aktif min. 7 bulan", "Tiket penerbangan berangkat"],
  },
  {
    name: "Visa Umroh Longstay + Penginapan 85 Hari",
    badge: "Paket Menginap",
    popular: true,
    price: "Rp 7.500.000",
    unit: "/ 85 hari",
    requirements: ["KTP WNI asli / fotokopi", "Paspor aktif min. 7 bulan", "Tiket penerbangan berangkat"],
  },
  {
    name: "Visa Umroh Istidofah 85 Hari",
    badge: "Jalur Penjamin",
    price: "Rp 4.500.000",
    unit: "/ 85 hari",
    requirements: ["Tiket kepulangan PP", "Paspor aktif", "Iqomah penjamin Arab Saudi", "ID Absheer penjamin"],
  },
];

export const visaHighlights = [
  "Aman dan terpercaya",
  "Pelayanan profesional",
  "Pilihan layanan lengkap",
];
