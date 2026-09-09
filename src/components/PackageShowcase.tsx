"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AirplaneTilt,
  Buildings,
  Train,
  Moon,
  CalendarBlank,
  Sparkle,
  WhatsappLogo,
  ArrowRight,
  Check,
  X,
  MagnifyingGlassPlus,
  DownloadSimple,
  ShieldCheck,
  CheckCircle,
  Copy,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site, waLink } from "@/lib/site";
import { formatIDR, type UmrahPackage } from "@/content/packages";
import { ItinerarySection } from "@/components/ItinerarySection";

export function PackageShowcase({ pkg }: { pkg: UmrahPackage }) {
  const [selectedRoomIdx, setSelectedRoomIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const selectedRoom = pkg.rooms[selectedRoomIdx] || pkg.rooms[0];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      }
    };
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(site.payment.accountNumber.replace(/\s+/g, ""));
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  // Pre-filled WA message based on selected room
  const bookingWaLink = waLink(
    `Assalamu'alaikum PGS Tour, saya ingin berkonsultasi & mendaftar Paket ${pkg.name} (${pkg.subtitle}) untuk tipe ${selectedRoom.type} (${formatIDR(selectedRoom.price)}). Mohon informasi ketersediaan seat dan jadwal keberangkatan terdekat. Terima kasih.`
  );

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* ============================================================ */}
        {/* TOP BREADCRUMB & METADATA LINE (CLEAN, NO BOXES) */}
        {/* ============================================================ */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 text-xs text-ink-soft">
          <div className="flex items-center gap-2 text-ink-faint">
            <Link href="/" className="transition-colors hover:text-ink">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/perjalanan" className="transition-colors hover:text-ink">
              Paket Umroh
            </Link>
            <span>/</span>
            <span className="font-semibold text-ink">{pkg.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-brand">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Izin PPIU : 09102301626860001
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN SHOWCASE: POSTER (LEFT) & EDITORIAL CONSOLE (RIGHT) */}
        {/* ============================================================ */}
        <div className="grid gap-10 lg:grid-cols-[40%_1fr] lg:gap-14 xl:grid-cols-[38%_1fr] xl:gap-16 items-start">
          {/* LEFT: POSTER (CLEAN FRAMELESS PRESENTATION, 100% UNCROPPED) */}
          <div className="lg:sticky lg:top-24">
            <div className="group relative">
              {/* Clean poster presentation without heavy enclosing borders */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative cursor-zoom-in overflow-hidden rounded-2xl shadow-xl shadow-ink/10 transition-all duration-300 hover:shadow-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pkg.image}
                  alt={`Poster Resmi ${pkg.name} PGS Tour`}
                  width={1600}
                  height={2270}
                  loading="eager"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Subtle Hover Pill */}
                <div className="absolute inset-0 flex items-center justify-center bg-ink/20 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-4 py-2 text-xs font-semibold text-ink shadow-md backdrop-blur-xs">
                    <MagnifyingGlassPlus size={16} weight="bold" className="text-brand" />
                    Lihat Ukuran Penuh (HD)
                  </span>
                </div>
              </div>

              {/* Minimalist Action Links Under Poster */}
              <div className="mt-3 flex items-center justify-between px-1 text-xs text-ink-soft">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 font-medium hover:text-brand transition-colors cursor-pointer"
                >
                  <MagnifyingGlassPlus size={15} weight="bold" className="text-brand" />
                  Perbesar Poster HD
                </button>

                <a
                  href={pkg.image}
                  download="Poster_Umroh_Mahabbah_PGS_Tour.webp"
                  className="inline-flex items-center gap-1.5 font-medium text-brand hover:text-brand-deep transition-colors"
                >
                  <DownloadSimple size={15} weight="bold" />
                  Unduh Brosur
                </a>
              </div>
            </div>

            {/* Rekening Pembayaran Resmi (Clean Minimal Bar) */}
            <div className="mt-6 border-t border-line pt-4 text-xs text-ink-soft">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-semibold text-ink">
                  <ShieldCheck size={16} weight="fill" className="text-brand-bright" />
                  Rekening Resmi Pembayaran
                </span>
                <button
                  type="button"
                  onClick={handleCopyAccount}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand hover:underline cursor-pointer"
                >
                  <Copy size={13} />
                  {copiedBank ? "Tersalin!" : "Salin No. Rek"}
                </button>
              </div>
              <p className="mt-1 text-[13px] font-medium text-ink">
                Bank {site.payment.bank} • <span className="tracking-wider">{site.payment.accountNumber}</span>
              </p>
              <p className="text-[11px] text-ink-faint">
                a.n. {site.payment.accountName}
              </p>
            </div>
          </div>

          {/* RIGHT: EDITORIAL PACKAGE DETAILS (AIRY, CLEAN, NO BOX CLUTTER) */}
          <div className="min-w-0">
            {/* Header & Tagline */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright">
                {pkg.subtitle}
              </span>

              <h1 className="headline mt-1.5 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                {pkg.name}
              </h1>

              <p className="mt-3 text-xs leading-relaxed text-ink-soft sm:text-sm max-w-2xl">
                {pkg.summary}
              </p>
            </div>

            {/* Clean Metadata Metric Strip (Zero Box Clutter) */}
            <div className="my-6 grid grid-cols-2 gap-4 border-y border-line py-4 sm:grid-cols-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
                  Durasi
                </span>
                <p className="mt-0.5 text-sm font-bold text-ink sm:text-base">
                  {pkg.durationDays} Hari
                </p>
                <p className="text-[11px] text-ink-soft">
                  {pkg.nightsMakkah}M Makkah, {pkg.nightsMadinah}M Madinah
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
                  Penerbangan
                </span>
                <p className="mt-0.5 text-sm font-bold text-ink sm:text-base">
                  Direct Flight
                </p>
                <p className="text-[11px] text-ink-soft truncate">
                  Garuda / Saudia (PP)
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
                  Transportasi
                </span>
                <p className="mt-0.5 text-sm font-bold text-ink sm:text-base">
                  Kereta Cepat
                </p>
                <p className="text-[11px] text-ink-soft">
                  Haramain HHR (~2 Jam)
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
                  Ibadah
                </span>
                <p className="mt-0.5 text-sm font-bold text-ink sm:text-base">
                  Umroh 2x
                </p>
                <p className="text-[11px] text-ink-soft">
                  3x Pelatihan Manasik
                </p>
              </div>
            </div>

            {/* ======================================================== */}
            {/* PILIHAN KAMAR & HARGA (CLEAN SEAMLESS ROW LIST) */}
            {/* ======================================================== */}
            <div className="mt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h2 className="headline text-lg font-bold text-ink sm:text-xl">
                  Pilihan Tipe Kamar
                </h2>
                <span className="text-xs text-ink-faint">
                  *Perbedaan biaya hanya pada jenis kamar
                </span>
              </div>

              {/* Minimalist interactive list separated by subtle hairlines */}
              <div className="divide-y divide-line border-y border-line">
                {pkg.rooms.map((room, idx) => {
                  const isSelected = idx === selectedRoomIdx;
                  const roomTypeName = room.type.split(" - ")[0];
                  const roomDesc = room.type.split(" - ")[1] || "";
                  const isPopular = roomTypeName.toLowerCase().includes("quad");

                  return (
                    <div
                      key={room.type}
                      onClick={() => setSelectedRoomIdx(idx)}
                      className={`flex cursor-pointer items-center justify-between py-4 px-3 rounded-xl transition-all duration-200 ${
                        isSelected
                          ? "bg-sand/70 -mx-1"
                          : "hover:bg-sand/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isSelected
                              ? "border-brand bg-brand text-paper-2"
                              : "border-line-strong bg-transparent"
                          }`}
                        >
                          {isSelected ? <Check size={10} weight="bold" /> : null}
                        </span>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-ink">
                              {roomTypeName}
                            </span>
                            {isPopular ? (
                              <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold text-brand">
                                Terlaris
                              </span>
                            ) : null}
                          </div>
                          <p className="text-xs text-ink-soft capitalize">
                            {roomDesc}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="font-display text-base font-bold text-brand-deep sm:text-lg">
                          {formatIDR(room.price)}
                        </p>
                        <p className="text-[10px] text-ink-faint">/ jamaah</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Booking Action Row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={bookingWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold text-paper-2 shadow-xs transition-all duration-200 hover:-translate-y-px hover:bg-brand-deep hover:shadow-md sm:text-sm"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Daftar Kamar {selectedRoom.type.split(" - ")[0]} via WhatsApp
                </a>

                <Link
                  href="/konsultasi"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-3 text-xs font-semibold text-ink transition-colors hover:bg-sand sm:text-sm"
                >
                  Konsultasi Gratis
                </Link>
              </div>

              <p className="mt-2 text-[11px] text-ink-faint">
                Harga belum termasuk paspor dan vaksin. Pembayaran aman hanya via rekening resmi PGS Tour.
              </p>
            </div>

            {/* ======================================================== */}
            {/* KEUNGGULAN UTAMA (EDITORIAL 2-COLUMN, NO CARDS) */}
            {/* ======================================================== */}
            <div className="mt-12 border-t border-line pt-8">
              <h2 className="headline text-lg font-bold text-ink sm:text-xl">
                Keunggulan &amp; Fasilitas Utama
              </h2>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-3">
                  <AirplaneTilt size={22} weight="duotone" className="shrink-0 text-brand-bright mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-ink">Penerbangan Langsung (Direct)</h3>
                    <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                      Garuda Indonesia / Saudia PP langsung tanpa transit yang melelahkan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Buildings size={22} weight="duotone" className="shrink-0 text-brand-bright mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-ink">Jarak Hotel Dekat ke Masjid</h3>
                    <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                      Makkah: Maysan Al Mashaer &amp; Madinah: Astoneast Taiba.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Train size={22} weight="duotone" className="shrink-0 text-brand-bright mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-ink">Kereta Cepat Haramain (HHR)</h3>
                    <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                      Perjalanan Madinah - Makkah hanya ~2 jam dalam kenyamanan modern.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Sparkle size={22} weight="duotone" className="shrink-0 text-brand-bright mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-ink">Umroh 2x &amp; 3x Manasik</h3>
                    <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                      Miqat Bir Ali &amp; At-Tan'im dengan bimbingan intensif muthawif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TRANSPARANSI FASILITAS (CLEAN 2-COLUMN, NO ENCLOSING BOXES) */}
        {/* ============================================================ */}
        <div className="mt-16 border-t border-line pt-12 sm:mt-20 sm:pt-16">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright">
              Transparansi Fasilitas
            </span>
            <h2 className="headline mt-1.5 text-xl font-bold text-ink sm:text-2xl lg:text-3xl">
              Rincian Fasilitas Paket
            </h2>
            <p className="mt-1 text-xs text-ink-soft sm:text-sm">
              Semua fasilitas yang Anda dapatkan tercantum transparan tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
            {/* Fasilitas Sudah Termasuk */}
            <div>
              <div className="flex items-center gap-2 border-b border-line pb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  Fasilitas Sudah Termasuk
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-ink-soft">
                {pkg.includes.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Biaya Belum Termasuk */}
            <div>
              <div className="flex items-center gap-2 border-b border-line pb-3">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  Biaya Belum Termasuk
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-ink-soft">
                {pkg.excludes.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <X size={15} weight="bold" className="mt-0.5 shrink-0 text-ink-faint" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ITINERARY 9 HARI (RICH INTERACTIVE TIMELINE & SPOTLIGHT)      */}
        {/* ============================================================ */}
        <ItinerarySection />
      </Container>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL FOR FULLSCREEN POSTER VIEW */}
      {/* ============================================================ */}
      {lightboxOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-2/90 backdrop-blur-md p-2 sm:p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-h-[96vh] max-w-4xl w-full rounded-2xl bg-paper overflow-hidden shadow-2xl border border-paper-2/20"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line px-4 py-3 bg-paper-2">
              <span className="text-xs sm:text-sm font-bold text-ink truncate">
                Poster Resmi {pkg.name} - HD 1600 × 2270
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={pkg.image}
                  download="Poster_Umroh_Mahabbah_PGS_Tour.webp"
                  className="inline-flex items-center gap-1 rounded-full bg-sand px-3 py-1 text-xs font-semibold text-brand hover:bg-sand/80"
                >
                  <DownloadSimple size={14} weight="bold" />
                  Unduh
                </a>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-sand text-ink-soft hover:bg-line-strong hover:text-ink cursor-pointer"
                  aria-label="Tutup"
                >
                  <X size={16} weight="bold" />
                </button>
              </div>
            </div>

            {/* Modal Content / Scrollable Image */}
            <div className="flex-1 overflow-auto p-2 sm:p-4 text-center bg-sand/20 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pkg.image}
                alt={`Poster HD ${pkg.name}`}
                className="max-h-[82vh] w-auto object-contain mx-auto rounded-lg shadow-md"
              />
            </div>

            {/* Modal Footer */}
            <div className="border-t border-line px-4 py-2.5 bg-paper-2 flex flex-wrap items-center justify-between text-xs text-ink-soft">
              <span>Tekan <kbd className="rounded border border-line bg-paper px-1 py-0.5 text-[10px]">ESC</kbd> untuk menutup</span>
              <a
                href={bookingWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand hover:underline"
              >
                Pesan via WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
