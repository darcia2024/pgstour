"use client";

import { useState } from "react";
import {
  CaretLeft,
  CaretRight,
  MapPin,
  Sparkle,
  CheckCircle,
  AirplaneTilt,
  Train,
  Moon,
  Compass,
  ListBullets,
  Eye,
  CalendarBlank,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/Reveal";

export interface ItineraryItem {
  day: string;
  dayNum: string;
  phase: string;
  city: string;
  cityType: "madinah" | "travel" | "makkah" | "return";
  title: string;
  detail: string;
  image: string;
  caption: string;
  quote: string;
  highlights: string[];
}

export const ITINERARY_DATA: ItineraryItem[] = [
  {
    day: "Hari 1 – 2",
    dayNum: "01 – 02",
    phase: "Keberangkatan & Ziarah Awal",
    city: "Madinah Al-Munawwarah",
    cityType: "madinah",
    title: "Tanah Air menuju Madinah Al-Munawwarah",
    detail:
      "Berkumpul di Bandara Soekarno-Hatta untuk briefing manasik singkat, pelepasan jamaah, dan doa safar bersama. Penerbangan langsung (direct flight) menuju Madinah dengan maskapai Garuda Indonesia / Saudia. Setibanya di Madinah, jamaah dijemput dengan bus eksekutif, check-in Hotel Astoneast Taiba (dekat pintu Masjid Nabawi), istirahat sejenak, lalu mulai menikmati sholat berjamaah dan salam awal kepada Rasulullah SAW.",
    image: "/img/gallery-1.jpg",
    caption: "Kubah Hijau & Pelataran Masjid Nabawi, Madinah",
    quote: "Labbaik Allahumma Labbaik, melangkahkan kaki menyapa kota kekasih Allah.",
    highlights: [
      "Penerbangan langsung (direct flight) tanpa transit yang melelahkan",
      "Check-in Hotel Astoneast Taiba (jarak sangat dekat ke Masjid Nabawi)",
      "Bimbingan sholat berjamaah & orientasi sekitar pelataran Masjid Nabawi",
    ],
  },
  {
    day: "Hari 3",
    dayNum: "03",
    phase: "Raudhah & Ziarah Sejarah",
    city: "Madinah Al-Munawwarah",
    cityType: "madinah",
    title: "Madinah — Masuk Raudhah Syarifah & Ziarah Kota",
    detail:
      "Memasuki Raudhah Syarifah sesuai jadwal tasreh resmi dari Muassasah untuk sholat sunnah dan bermunajat di taman surga. Dilanjutkan ziarah ke Makam Rasulullah SAW, Makam Sayyidina Abu Bakar, Sayyidina Umar, dan Pemakaman Baqi. Siang hingga sore, ziarah napak tilas ke Masjid Quba (sholat sunnah senilai pahala umroh), Jabal Uhud, Makam Syuhada Uhud, Museum Madinah, Museum Wahyu, dan medan Perang Badar.",
    image: "/img/masjid-quba.webp",
    caption: "Ziarah Masjid Quba & Napak Tilas Sejarah Madinah",
    quote: "Antara rumahku dan mimbarku adalah taman dari taman-taman surga.",
    highlights: [
      "Ibadah di Raudhah Syarifah dengan kepastian jadwal tasreh resmi",
      "Ziarah Masjid Quba, Jabal Uhud, dan Makam Syuhada Uhud",
      "Kunjungan edukatif ke Museum Madinah, Museum Wahyu & Ziarah Badar",
    ],
  },
  {
    day: "Hari 4",
    dayNum: "04",
    phase: "Perjalanan Menuju Makkah",
    city: "Madinah ke Makkah",
    cityType: "travel",
    title: "Mengambil Miqat di Bir Ali & Kereta Cepat Haramain (HHR)",
    detail:
      "Persiapan menuju Makkah: mandi sunnah ihram dan mengenakan pakaian ihram dari hotel di Madinah. Rombongan bertolak ke Masjid Miqat Bir Ali (Dzul Hulaifah) untuk sholat sunnah dan melafalkan niat ihram umroh dipimpin muthawif. Melanjutkan perjalanan menuju Makkah menggunakan Kereta Cepat Haramain (HHR) berkecepatan 300 km/jam (~2 jam perjalanan nyaman). Tiba di Makkah, check-in Hotel Maysan Al Mashaer (*4), istirahat sejenak, lalu bersama-sama melaksanakan Umroh Pertama (Thawaf, Sa'i, dan Tahallul).",
    image: "/img/kereta-haramain.webp",
    caption: "Kereta Cepat Haramain (HHR) Menuju Makkah",
    quote: "Menanggalkan pakaian duniawi, menyambut panggilan suci di Baitullah.",
    highlights: [
      "Pengambilan Miqat di Masjid Bir Ali dibimbing langsung oleh muthawif",
      "Perjalanan super cepat dan nyaman dengan Kereta Cepat Haramain (HHR)",
      "Pelaksanaan Umroh Pertama bersama-sama dengan pendampingan penuh hingga tahallul",
    ],
  },
  {
    day: "Hari 5 – 7",
    dayNum: "05 – 07",
    phase: "Ibadah Makkah & Umroh Kedua",
    city: "Makkah Al-Mukarramah",
    cityType: "makkah",
    title: "Makkah — Memperbanyak Ibadah, City Tour & Umroh Kedua",
    detail:
      "Hari-hari penuh berkah di kota suci Makkah. Jamaah memperbanyak shalat fardhu dan thawaf sunnah di depan Ka'bah di Masjidil Haram. Mengikuti program City Tour Makkah: napak tilas sejarah ke Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, dan Mina. Mengambil miqat di Masjid At-Tan'im / Ji'ranah untuk melaksanakan ibadah Umroh Kedua bagi jamaah yang berkehendak, didampingi muthawif.",
    image: "/img/makkah.jpg",
    caption: "Kemegahan Ka'bah & Multazam, Masjidil Haram",
    quote: "Satu kali sholat di Masjidil Haram lebih utama dari 100.000 sholat di tempat lain.",
    highlights: [
      "Fokus memperbanyak ibadah di Masjidil Haram dekat hotel (*4)",
      "City tour Makkah: Jabal Tsur, Padang Arafah, Mina, dan Jabal Rahmah",
      "Kesempatan Umroh Kedua dengan miqat di At-Tan'im",
    ],
  },
  {
    day: "Hari 8 – 9",
    dayNum: "08 – 09",
    phase: "Tawaf Wada & Kepulangan",
    city: "Makkah ke Indonesia",
    cityType: "return",
    title: "Tawaf Wada & Kembali ke Tanah Air",
    detail:
      "Melaksanakan Tawaf Wada' (tawaf perpisahan) dengan penuh khidmat dan haru, memohon agar ibadah diterima dan kelak dapat kembali berkunjung ke Baitullah. Persiapan check-out hotel, menuju bandara internasional, dan penerbangan langsung kembali ke tanah air. Tiba di Indonesia dengan membawa air Zam-Zam 5 liter, kenangan suci, dan semoga meraih predikat Umroh yang Mabrur.",
    image: "/img/tawaf-kaaba.webp",
    caption: "Khidmat Tawaf Wada & Thawaf Perpisahan di Baitullah",
    quote: "Semoga setiap tetes keringat dan langkah menjadi saksi kemabruran ibadah.",
    highlights: [
      "Bimbingan Tawaf Wada' (thawaf perpisahan) dengan khusyuk",
      "Penerbangan langsung kembali ke Indonesia dengan nyaman",
      "Mendapatkan air Zam-Zam 5 liter resmi untuk keluarga di rumah",
    ],
  },
];

export function ItinerarySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "full">("spotlight");

  const current = ITINERARY_DATA[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : ITINERARY_DATA.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < ITINERARY_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="mt-16 border-t border-line pt-12 sm:mt-20 sm:pt-16">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright">
            Langkah Demi Langkah
          </span>
          <h2 className="headline mt-1.5 text-xl font-bold text-ink sm:text-2xl lg:text-3xl">
            Rencana Perjalanan (Itinerary 9 Hari)
          </h2>
          <p className="mt-1 text-xs text-ink-soft sm:text-sm max-w-xl">
            Agenda ibadah dan ziarah dirancang khusyuk, teratur, dan tidak terburu-buru agar setiap momen ibadah bermakna.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-1 rounded-full bg-sand/60 p-1 border border-line self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode("spotlight")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
              viewMode === "spotlight"
                ? "bg-paper text-brand shadow-xs"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            <Compass size={14} weight="bold" />
            Fokus Harian
          </button>

          <button
            type="button"
            onClick={() => setViewMode("full")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
              viewMode === "full"
                ? "bg-paper text-brand shadow-xs"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            <ListBullets size={14} weight="bold" />
            Semua Hari
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* VIEW MODE 1: SPOTLIGHT (INTERACTIVE DAY CAROUSEL / HIGHLIGHT) */}
      {/* ============================================================ */}
      {viewMode === "spotlight" ? (
        <div className="mt-8">
          {/* Day Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {ITINERARY_DATA.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.day}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand text-paper-2 shadow-xs ring-2 ring-brand/20"
                      : "bg-paper-2 border border-line text-ink-soft hover:border-line-strong hover:text-ink hover:bg-sand/40"
                  }`}
                >
                  <span>{item.day}</span>
                  <span className="opacity-60 text-[10px] hidden sm:inline">•</span>
                  <span className="hidden sm:inline opacity-80 font-normal">
                    {item.city.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Day Card (Editorial Split with Visual Anchor) */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[44%_1fr] lg:gap-10 items-stretch">
            {/* Left: Atmospheric Stage Photo */}
            <div className="relative overflow-hidden rounded-2xl bg-sand/30 shadow-md min-h-[260px] lg:min-h-[380px] group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={current.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* City Tag Floating Pill */}
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink-2/80 px-3 py-1 text-[11px] font-semibold text-paper-2 backdrop-blur-md shadow-xs">
                <MapPin size={13} weight="fill" className="text-accent-soft" />
                {current.city}
              </div>

              {/* Bottom Quote Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-2/95 via-ink-2/60 to-transparent p-4 sm:p-5 text-paper-2">
                <p className="text-xs italic leading-relaxed text-paper-2/90 font-serif">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-accent-soft">
                  {current.caption}
                </p>
              </div>
            </div>

            {/* Right: Narrative Details & Activity Highlights */}
            <div className="flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono text-[11px] font-bold text-accent">
                    HARI {current.dayNum}
                  </span>
                  <span className="text-ink-faint">•</span>
                  <span className="text-brand font-medium">
                    {current.phase}
                  </span>
                </div>

                <h3 className="headline mt-2 text-xl font-bold text-ink sm:text-2xl">
                  {current.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {current.detail}
                </p>

                {/* Key Activities Highlight */}
                <div className="mt-5 border-t border-line pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                    Agenda &amp; Fasilitas Hari Ini:
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {current.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-ink sm:text-[13px]">
                        <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-brand-bright" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Navigation Bar (Prev / Next & Dots) */}
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold text-ink-soft hover:bg-sand/60 hover:text-ink transition-colors cursor-pointer"
                >
                  <CaretLeft size={14} weight="bold" />
                  Hari Sebelumnya
                </button>

                {/* Step indicators */}
                <div className="flex items-center gap-1.5">
                  {ITINERARY_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeIdx ? "w-6 bg-brand" : "w-2 bg-line-strong hover:bg-ink-faint"
                      }`}
                      aria-label={`Pindah ke hari ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold text-brand hover:bg-brand/10 hover:text-brand-deep transition-colors cursor-pointer"
                >
                  Hari Berikutnya
                  <CaretRight size={14} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ============================================================ */
        /* VIEW MODE 2: FULL JOURNEY TIMELINE (RICH VISUAL LIST)        */
        /* ============================================================ */
        <div className="mt-8 space-y-8 max-w-4xl">
          {ITINERARY_DATA.map((item, idx) => (
            <div
              key={item.day}
              className="grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-6 border-b border-line pb-8 last:border-b-0"
            >
              {/* Left Day Pill & City */}
              <div>
                <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                  {item.day}
                </span>
                <p className="mt-2 text-xs font-semibold text-ink">
                  {item.city}
                </p>
                <p className="text-[11px] text-ink-faint">
                  {item.phase}
                </p>
              </div>

              {/* Right Content & Highlights */}
              <div>
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {item.detail}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-md bg-sand/60 px-2.5 py-1 text-[11px] text-ink-soft"
                    >
                      <Sparkle size={11} weight="fill" className="text-brand-bright" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
