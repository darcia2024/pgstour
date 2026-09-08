import type { Metadata } from "next";
import {
  Storefront,
  UsersThree,
  Handshake,
  ChartLineUp,
  Megaphone,
  GraduationCap,
  Receipt,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kemitraan",
  description:
    "Jadi mitra PGS Tour: buka perwakilan di kota Anda, jadi agen referral, atau berangkatkan jamaah komunitas dengan dukungan penuh.",
};

const models = [
  {
    icon: Storefront,
    title: "Mitra Perwakilan",
    body: "Buka kantor perwakilan PGS di kota Anda. Anda mengurus pemasaran dan pendampingan lokal, kami menyediakan sistem, izin, dan operasional di Arab Saudi.",
  },
  {
    icon: Handshake,
    title: "Agen Referral",
    body: "Cocok untuk perorangan. Rekomendasikan paket PGS kepada keluarga dan lingkungan Anda, dapatkan komisi yang disepakati di awal untuk setiap jamaah yang berangkat.",
  },
  {
    icon: UsersThree,
    title: "Kolaborasi Komunitas",
    body: "Untuk majelis taklim, pengurus masjid, sekolah, atau kantor yang ingin memberangkatkan jamaah sendiri dengan jadwal dan pembimbing tersendiri.",
  },
];

const benefits = [
  { icon: Receipt, title: "Harga dan komisi transparan", body: "Struktur harga mitra dibuka penuh. Tidak ada margin tersembunyi yang membebani jamaah Anda." },
  { icon: GraduationCap, title: "Manasik dan pembimbing disediakan", body: "Anda tidak perlu menyiapkan pembimbing ibadah. Tim PGS yang menangani manasik dan pendampingan selama perjalanan." },
  { icon: Megaphone, title: "Dukungan materi pemasaran", body: "Brosur, konten media sosial, dan template penawaran siap pakai atas nama perwakilan Anda." },
  { icon: ChartLineUp, title: "Tanpa beban izin PPIU sendiri", body: "Perjalanan berjalan di bawah izin PPIU PGS Tour. Anda fokus membangun jamaah, legalitas menjadi urusan kami." },
];

const steps = [
  { n: "01", title: "Perkenalan", body: "Hubungi kami dan ceritakan latar belakang serta model kemitraan yang Anda minati." },
  { n: "02", title: "Kesepakatan", body: "Kami bahas skema komisi, wilayah, dan dukungan. Semua dituangkan dalam perjanjian tertulis." },
  { n: "03", title: "Pembekalan", body: "Anda mendapat materi produk, alur pendaftaran, dan kontak tim pendukung." },
  { n: "04", title: "Mulai jalan", body: "Jamaah pertama Anda berangkat bersama rombongan PGS dengan pendampingan penuh." },
];

export default function KemitraanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kemitraan"
        title="Berangkatkan lebih banyak jamaah, tanpa menanggung operasionalnya sendiri"
        intro="Kami membuka kemitraan untuk perorangan, komunitas, dan calon perwakilan daerah. Anda membangun kepercayaan di lingkungan Anda, kami yang menjalankan perjalanannya."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title="Tiga bentuk kerja sama" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {models.map((m, i) => (
              <Reveal
                key={m.title}
                delay={i * 0.06}
                className="rounded-xl border border-line bg-paper-2 p-7"
              >
                <m.icon size={26} weight="light" className="text-brand" />
                <h3 className="mt-4 font-display text-xl text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {m.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-2 py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="Yang Anda dapatkan sebagai mitra"
            intro="Kemitraan ini dirancang supaya Anda bisa mulai tanpa modal besar dan tanpa keahlian teknis penyelenggaraan umrah."
          />
          <div className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delay={(i % 2) * 0.05}
                className="flex gap-4 border-t border-line py-7"
              >
                <b.icon size={22} weight="light" className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-lg text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title="Cara memulai" />
          <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 0.06}>
                <span className="font-display text-3xl text-accent">{s.n}</span>
                <h3 className="mt-2 font-display text-lg text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        title="Tertarik menjadi mitra?"
        body="Ceritakan sedikit tentang Anda dan lingkungan jamaah yang ingin Anda bangun. Kami hubungi kembali untuk berdiskusi."
      />
    </>
  );
}
