import type { Metadata } from "next";
import { InstagramLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pengalaman Jamaah",
  description:
    "Momen dan cerita jamaah PGS Tour. Bukan sekadar itinerary, tapi pengalaman yang terus hidup setelah perjalanan berakhir.",
};

// Placeholder gallery. TODO(pgs): ganti dengan dokumentasi asli rombongan.
const gallery = [
  { src: "/img/gallery-2.jpg", label: "Pelataran Masjid Nabawi", span: "sm:col-span-2 sm:row-span-2", ratio: "aspect-square", alt: "Jamaah di pelataran Masjid Nabawi" },
  { src: "/img/gallery-1.jpg", label: "Manasik & Tawaf", span: "", ratio: "aspect-square", alt: "Bimbingan manasik sebelum keberangkatan" },
  { src: "/img/gallery-3.jpg", label: "Madinah Al-Munawwarah", span: "", ratio: "aspect-square", alt: "Ziarah Madinah" },
  { src: "/img/gallery-4.jpg", label: "Menuju Miqat", span: "sm:col-span-2", ratio: "aspect-[2/1]", alt: "Rombongan menuju miqat" },
  { src: "/img/makkah.jpg", label: "Tawaf di Makkah", span: "", ratio: "aspect-square", alt: "Suasana tawaf di Masjidil Haram" },
  { src: "/img/gallery-6.jpg", label: "Kebersamaan Jamaah", span: "", ratio: "aspect-square", alt: "Kebersamaan rombongan jamaah" },
  { src: "/img/gallery-5.jpg", label: "City Tour Makkah", span: "sm:col-span-2", ratio: "aspect-[2/1]", alt: "City tour Makkah" },
];

export default function PengalamanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pengalaman Jamaah"
        title="Bukan sekadar itinerary, tapi momen yang penuh arti"
        intro="Ada hal-hal yang tidak tertulis dalam itinerary. Perjalanan umrah adalah kesempatan untuk kembali dengan hati yang berbeda: lebih tenang, lebih dekat kepada Allah, lebih mencintai Rasulullah, dan lebih peduli kepada sesama."
      />

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3.5">
            {gallery.map((g, i) => (
              <Reveal
                key={g.label}
                delay={(i % 4) * 0.04}
                className={`${g.span} overflow-hidden rounded-xl bg-sand shadow-2xs`}
              >
                <div className={`relative ${g.ratio} h-full w-full`}>
                  <Photo
                    src={g.src}
                    label={g.label}
                    alt={g.alt}
                    fill
                    imgClassName="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-2/80 via-ink-2/30 to-transparent p-2.5 pt-8 sm:p-3">
                    <p className="text-[11px] font-medium text-paper-2 sm:text-xs">{g.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      <section className="py-12 text-center sm:py-16">
        <Container>
          <Reveal className="mx-auto max-w-xl">
            <InstagramLogo size={32} weight="light" className="mx-auto text-brand" />
            <h2 className="mt-4 font-display text-3xl text-ink">
              Ikuti keseharian rombongan
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Kabar keberangkatan, dokumentasi harian, dan pengumuman jadwal kami
              bagikan lebih dulu di Instagram.
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {site.social.instagramHandle}
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
