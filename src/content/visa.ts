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
  /** Harga tunggal, mis. "Rp 2.500.000". Kosongkan bila memakai `tiers`. */
  price?: string;
  /** Keterangan singkat di atas daftar tarif berjenjang. */
  note?: string;
  tiers?: VisaTier[];
  requirements?: string[];
};

export const visaServices: VisaService[] = [
  {
    name: "Visa Umroh Only",
    price: "Rp 2.500.000",
    requirements: ["Paspor", "Tiket pulang-pergi", "Confirmation Letter (CL) Hotel"],
  },
  {
    name: "Visa Umroh + BIS",
    note: "Harga per PAX, mengikuti jumlah rombongan",
    tiers: [
      { label: "45 - 49 PAX", price: "130 USD / PAX" },
      { label: "40 - 44 PAX", price: "132 USD / PAX" },
      { label: "35 - 39 PAX", price: "133 USD / PAX" },
    ],
  },
  {
    name: "Visa Umroh + BRN",
    note: "Harga mengikuti durasi tinggal",
    tiers: [
      { label: "1 - 7 hari", price: "Rp 2.850.000" },
      { label: "8 - 12 hari", price: "Rp 2.990.000" },
      { label: "13 - 17 hari", price: "Rp 3.150.000" },
      { label: "18 - 22 hari", price: "Rp 3.200.000" },
      { label: "23 - 27 hari", price: "Rp 3.350.000" },
      { label: "28 - 32 hari", price: "Rp 3.600.000" },
    ],
  },
  {
    name: "Visa Umroh Longstay 85 Hari",
    price: "Rp 4.500.000",
    requirements: ["KTP", "Paspor", "Tiket berangkat"],
  },
  {
    name: "Visa Umroh Longstay + Penginapan 85 Hari",
    price: "Rp 7.500.000",
    requirements: ["KTP", "Paspor", "Tiket berangkat"],
  },
  {
    name: "Visa Umroh Istidofah 85 Hari",
    price: "Rp 4.500.000",
    requirements: ["Tiket pulang-pergi", "Paspor", "Iqomah penjamin", "ID Absheer"],
  },
];

export const visaHighlights = [
  "Aman dan terpercaya",
  "Pelayanan profesional",
  "Pilihan layanan lengkap",
];
