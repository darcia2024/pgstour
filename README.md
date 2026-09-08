# PGS Tour & Travel

Situs baru PGS Tour & Travel (Pesona Global Syiarbaitullah), travel umrah dari
Serang, Banten. Dibangun ulang dari nol menggantikan situs WordPress lama.

## Teknologi

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS v4**
- Font: **Hanken Grotesk** (satu keluarga, judul tebal + teks)
- Ikon: Phosphor Icons
- Tanpa database. Formulir konsultasi mengarah ke WhatsApp.

## Gaya visual

Layout editorial ala agensi: seluruh halaman dibingkai kartu sudut membulat
warna **navy** (dari logo PGS Tour), hero gelap membulat di setiap halaman,
judul grotesk tebal, penanda kotak **cyan** sebelum label, strip foto
full-bleed, blok angka besar bergaris putus-putus, selang-seling section
terang/gelap. Palet diambil dari logo: navy `#223089`, cyan `#26a8e0`, navy
gelap `#0c1030`. Semua token di `src/app/globals.css` (blok `@theme`).

**Logo**: digambar ulang sebagai SVG di `src/components/Logo.tsx` (lengkung +
Ka'bah + pesawat). Untuk memakai file logo asli, simpan versi PUTIH / knockout
ke `public/img/logo-white.svg` lalu ganti `<LogoMark/>` dengan `<img>` di file
itu (logo tampil di atas latar navy gelap).

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

- **Foto**. Semua gambar memakai placeholder (gradient + motif lengkung; sebagian
  bertuliskan "FOTO CONTOH"). Ganti `<Photo label=... />` dengan
  `<Photo src="/img/nama.jpg" ... />` setelah menaruh file di `public/img/`.
  Untuk hero, isi `/public/img/hero.jpg` lalu buka komentar `<img>` di
  `src/components/home/Hero.tsx`.
- **Angka "500+"** di hero, trust strip, dan blok "Dalam Angka" masih perkiraan.
- **Harga paket** di `src/content/packages.ts` masih estimasi.
- **Nomor izin PPIU, NIB, akta** di `src/lib/site.ts` (`site.legal`).
- **Link Facebook / TikTok / YouTube** di `src/lib/site.ts` (`site.social`).
- **Jam operasional & tahun berdiri** (dipakai di Tentang Kami).
- **Favicon & gambar Open Graph** (`src/app/favicon.ico`, tambahkan `opengraph-image`).
- `next.config.ts`: hapus `images.unoptimized` setelah foto asli masuk dan
  deploy di lingkungan tanpa proxy TLS, agar optimasi gambar Next aktif lagi.

## Deploy

Paling mudah ke Vercel: `npx vercel`. Semua halaman ter-render statis.
