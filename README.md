# PGS Tour & Travel

Situs baru PGS Tour & Travel (Pesona Global Syiarbaitullah), travel umrah dari
Serang, Banten. Dibangun ulang dari nol menggantikan situs WordPress lama.

## Teknologi

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS v4**
- Font: EB Garamond (judul) + Plus Jakarta Sans (teks)
- Ikon: Phosphor Icons
- Tanpa database. Formulir konsultasi mengarah ke WhatsApp.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm start        # jalankan hasil build
```

## Struktur

```
src/
  app/                    Halaman (routing berbasis folder)
    page.tsx              Beranda
    perjalanan/           Daftar paket + /perjalanan/[slug] detail paket
    pengalaman/           Galeri & testimoni jamaah
    kemitraan/            Info menjadi mitra / agen
    tentang-kami/         Profil, prinsip, legalitas
    konsultasi/           Formulir + kontak
  components/             Komponen UI
  content/                >>> SUNTING TEKS DI SINI <<<
    packages.ts           Paket umrah: harga, itinerary, fasilitas
    site-content.ts       Nilai, destinasi, testimoni, FAQ, profil
  lib/site.ts             Alamat, telepon, email, media sosial, izin
```

Untuk mengubah teks, harga, atau menambah paket: cukup edit file di `src/content/`
dan `src/lib/site.ts`. Tidak perlu menyentuh komponen.

## Yang masih placeholder (perlu data dari klien)

- **Foto**. Semua gambar memakai placeholder bertuliskan "FOTO CONTOH".
  Ganti komponen `<Photo label=... />` dengan `<Photo src="/img/nama.jpg" ... />`
  setelah menaruh file di `public/img/`.
- **Harga paket** di `src/content/packages.ts` masih estimasi.
- **Nomor izin PPIU, NIB, akta** di `src/lib/site.ts` (`site.legal`).
- **Link Facebook / TikTok / YouTube** di `src/lib/site.ts` (`site.social`).
- **Jam operasional & tahun berdiri** (dipakai di Tentang Kami).
- **Favicon & gambar Open Graph** (`src/app/favicon.ico`, tambahkan `opengraph-image`).
- `next.config.ts`: hapus `images.unoptimized` setelah foto asli masuk dan
  deploy di lingkungan tanpa proxy TLS, agar optimasi gambar Next aktif lagi.

## Deploy

Paling mudah ke Vercel: `npx vercel`. Semua halaman ter-render statis.
