"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Camera,
  MapPin,
  X,
  CaretLeft,
  CaretRight,
  ArrowsOut,
  ShieldCheck,
  ArrowRight,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { waLink } from "@/lib/site";

export type GalleryPhoto = {
  id: number;
  src: string;
  hdSrc: string;
  location: string;
  city: string;
  category: "all" | "haram" | "nabawi" | "keluarga";
  categoryLabel: string;
  title: string;
  description: string;
  aspect: "landscape" | "portrait";
  tag: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: "/img/galeri/jamaah-3.webp",
    hdSrc: "/img/galeri/jamaah-3.jpg",
    location: "Mataf Ka'bah, Masjidil Haram",
    city: "Makkah",
    category: "haram",
    categoryLabel: "Masjidil Haram",
    title: "Khidmat di Hadapan Baitullah",
    description:
      "Momen penuh haru dan rasa syukur rombongan keluarga jamaah PGS Tour dalam balutan kain ihram tepat di depan Ka'bah Al-Musyarrafah.",
    aspect: "landscape",
    tag: "Puncak Ibadah",
  },
  {
    id: 2,
    src: "/img/galeri/jamaah-4.webp",
    hdSrc: "/img/galeri/jamaah-4.jpg",
    location: "Pelataran Kubah Hijau, Masjid Nabawi",
    city: "Madinah",
    category: "nabawi",
    categoryLabel: "Masjid Nabawi",
    title: "Pelayanan Kursi Roda Jamaah Sepuh",
    description:
      "Fasilitas kursi roda dan pendampingan penuh staf PGS Tour untuk jamaah lansia agar dapat beribadah dan berziarah ke makam Rasulullah SAW dengan tenang dan nyaman.",
    aspect: "portrait",
    tag: "Ramah Lansia",
  },
  {
    id: 3,
    src: "/img/galeri/jamaah-7.webp",
    hdSrc: "/img/galeri/jamaah-7.jpg",
    location: "Pelataran Ka'bah (Mataf Malam)",
    city: "Makkah",
    category: "haram",
    categoryLabel: "Masjidil Haram",
    title: "Senyum Bahagia di Malam Penuh Berkah",
    description:
      "Satu keluarga jamaah PGS Tour mengabadikan rasa syukur setelah menyelesaikan rangkaian ibadah di bawah kemegahan lampu pelataran Ka'bah.",
    aspect: "portrait",
    tag: "Keluarga Jamaah",
  },
  {
    id: 4,
    src: "/img/galeri/jamaah-6.webp",
    hdSrc: "/img/galeri/jamaah-6.jpg",
    location: "Mataf & Menara Jam Zamzam",
    city: "Makkah",
    category: "haram",
    categoryLabel: "Masjidil Haram",
    title: "Munajat & Kontemplasi Spiritual",
    description:
      "Detik-detik hening seorang jamaah memandang langsung Ka'bah Al-Musyarrafah. Pengalaman batin yang tak terlupakan seumur hidup.",
    aspect: "portrait",
    tag: "Spiritual",
  },
  {
    id: 5,
    src: "/img/galeri/jamaah-5.webp",
    hdSrc: "/img/galeri/jamaah-5.jpg",
    location: "Pelataran Masjid Quba",
    city: "Madinah",
    category: "nabawi",
    categoryLabel: "Masjid Nabawi",
    title: "Ziarah Umroh Private Keluarga",
    description:
      "Rombongan Umroh Private Keluarga YPS Kang Sarjan bersama PGS Tour di Masjid Quba. Layanan grup privat dengan jadwal fleksibel dan pendampingan personal.",
    aspect: "landscape",
    tag: "Izin Resmi PPIU",
  },
  {
    id: 6,
    src: "/img/galeri/jamaah-2.webp",
    hdSrc: "/img/galeri/jamaah-2.jpg",
    location: "Restoran Hotel Bintang 5",
    city: "Madinah",
    category: "keluarga",
    categoryLabel: "Kebersamaan",
    title: "Santap Bersama & Ramah Tamah",
    description:
      "Keceriaan jamaah cilik bersyal resmi PGS Tour saat menikmati hidangan prasmanan lezat bersama ustadz pembimbing di hotel bintang lima dekat masjid.",
    aspect: "landscape",
    tag: "Fasilitas Hotel",
  },
  {
    id: 7,
    src: "/img/galeri/jamaah-1.webp",
    hdSrc: "/img/galeri/jamaah-1.jpg",
    location: "Kawasan Pegunungan Taif",
    city: "Taif",
    category: "keluarga",
    categoryLabel: "Kebersamaan",
    title: "City Tour & Napak Tilas Taif",
    description:
      "Menikmati udara sejuk pegunungan Taif, napak tilas sejarah dakwah Rasulullah SAW, dan keakraban antar-jamaah selama perjalanan.",
    aspect: "landscape",
    tag: "City Tour",
  },
];

const categories = [
  { id: "all", label: "Semua Momen (7)" },
  { id: "haram", label: "Masjidil Haram & Ka'bah" },
  { id: "nabawi", label: "Masjid Nabawi & Quba" },
  { id: "keluarga", label: "Keluarga & Bimbingan" },
] as const;

export function JamaahGallery({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos = galleryPhotos
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .slice(0, limit ?? galleryPhotos.length);

  const activePhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % filteredPhotos.length);
  }, [selectedIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [selectedIndex, filteredPhotos.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  return (
    <section className="border-t border-line bg-paper py-10 sm:py-20 lg:py-24">
      <Container>
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-12">
            <SectionHeading
              eyebrow="Dokumentasi Nyata"
              title={
                <>
                  Momen Perjalanan{" "}
                  <span className="text-brand-bright">Jamaah PGS Tour</span>
                </>
              }
              intro="Bukan sekadar foto ilustrasi. Inilah senyum tulus, kehangatan keluarga, dan kekhusyukan ibadah jamaah yang kami dampingi langsung di Tanah Suci."
              className="max-w-2xl"
            />

            <Reveal className="shrink-0">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-line bg-paper-2/80 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs text-ink-soft">
                <ShieldCheck size={15} weight="fill" className="text-brand-bright" />
                <span className="font-semibold text-ink">100% Foto Asli Rombongan</span>
              </div>
            </Reveal>
          </div>
        )}

        {/* Minimalist Filter Navigation — Anti-box Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-4 sm:pb-8 border-b border-line">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCategory(c.id);
                setSelectedIndex(null);
              }}
              className={clsx(
                "rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-all duration-150",
                activeCategory === c.id
                  ? "bg-ink text-paper shadow-xs"
                  : "bg-transparent text-ink-soft hover:bg-paper-2 hover:text-ink"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Editorial Photo Masonry — 2 columns on mobile, 3 on desktop */}
        <div className="mt-6 sm:mt-10 columns-2 lg:columns-3 gap-3 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-4 sm:mb-7 opacity-100"
            >
              <div
                onClick={() => setSelectedIndex(index)}
                className="group cursor-pointer transition-all duration-300"
              >
                {/* 1. Clean Unobstructed Photo Frame */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-sand/20 shadow-xs transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                  <picture>
                    <source srcSet={photo.src} type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.hdSrc}
                      alt={photo.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </picture>

                  {/* Discrete City Pill in Corner */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 pointer-events-none">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-ink shadow-xs">
                      <MapPin size={10} weight="fill" className="text-brand-bright" />
                      {photo.city}
                    </span>
                  </div>

                  {/* Discrete Expand Icon on Hover */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-ink shadow-xs">
                      <ArrowsOut size={12} weight="bold" />
                    </span>
                  </div>
                </div>

                {/* 2. Elegant Editorial Caption Underneath — Never Overlaps Photo */}
                <div className="pt-2 sm:pt-3 px-0.5">
                  <div className="flex items-center justify-between gap-1 text-[9px] sm:text-[11px]">
                    <span className="font-bold uppercase tracking-[0.12em] text-brand">
                      {photo.tag}
                    </span>
                    <span className="text-ink-faint truncate hidden sm:inline-block">
                      {photo.location}
                    </span>
                  </div>

                  <h3 className="mt-1 font-display text-xs sm:text-base font-bold text-ink group-hover:text-brand transition-colors leading-snug">
                    {photo.title}
                  </h3>

                  <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-ink-soft line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Banner & Consultation CTA */}
        <div className="mt-14 border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-xs text-ink-soft">
            <strong className="font-semibold text-ink">Foto dokumentasi asli</strong> rombongan Umroh PGS Tour &amp; Travel.
            Bukan rekayasa atau model komersial.
          </div>

          <a
            href={waLink("Halo PGS Tour, saya melihat foto-foto dokumentasi jamaah di website. Saya ingin berkonsultasi mengenai paket keberangkatan terdekat.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:underline"
          >
            <span>Konsultasi Perjalanan Anda Bersama Kami</span>
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </Container>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 sm:p-6"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Tutup foto"
            className="absolute top-4 right-4 z-50 rounded-full bg-paper/10 p-2.5 text-paper transition-colors hover:bg-paper/25"
          >
            <X size={20} weight="bold" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-3 sm:left-6 z-50 rounded-full bg-paper/10 p-3 text-paper transition-colors hover:bg-paper/25"
          >
            <CaretLeft size={22} weight="bold" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Foto selanjutnya"
            className="absolute right-3 sm:right-6 z-50 rounded-full bg-paper/10 p-3 text-paper transition-colors hover:bg-paper/25"
          >
            <CaretRight size={22} weight="bold" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative flex flex-col items-center max-h-[92vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full HD Image Display */}
            <div className="relative flex items-center justify-center max-h-[72vh] w-full overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.hdSrc}
                alt={activePhoto.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Editorial Caption Bar */}
            <div className="mt-4 w-full rounded-xl bg-paper/10 backdrop-blur-md p-4 sm:p-5 text-paper border border-paper/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="rounded-full bg-brand/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-soft">
                      {activePhoto.tag}
                    </span>
                    <span className="text-[11px] text-paper/70 flex items-center gap-1">
                      <MapPin size={12} weight="fill" className="text-brand-bright" />
                      {activePhoto.location}
                    </span>
                    <span className="text-[11px] text-paper/50">
                      • {selectedIndex! + 1} dari {filteredPhotos.length}
                    </span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-paper">
                    {activePhoto.title}
                  </h4>
                  <p className="mt-1 text-xs text-paper/85 max-w-3xl leading-relaxed">
                    {activePhoto.description}
                  </p>
                </div>

                <a
                  href={waLink(`Halo PGS Tour, saya tertarik dengan perjalanan di foto "${activePhoto.title}". Bisa konsultasi jadwal rombongan berikutnya?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  <WhatsappLogo size={15} weight="fill" className="text-emerald-600" />
                  <span>Tanya Rombongan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
