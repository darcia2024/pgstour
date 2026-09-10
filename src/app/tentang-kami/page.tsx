import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ShieldCheck,
  UsersThree,
  Buildings,
  SealCheck,
  MapPin,
  Clock,
  WhatsappLogo,
  CheckCircle,
  ArrowRight,
  Phone,
  Bank,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami - Profil & Amanah PGS Tour",
  description:
    "Profil resmi PGS Tour & Travel (PT Permana Group Sejahtera). Travel umrah berizin resmi PPIU Kemenag dari Serang, Banten dengan bimbingan menetap, biaya terbuka, dan rombongan khidmat.",
};

const principles = [
  {
    num: "01",
    title: "Pembimbing Menetap dari Tanah Air",
    desc: "Muthawif dan tour leader mendampingi langsung sejak manasik di tanah air, selama di Madinah dan Makkah, hingga tiba kembali di Indonesia. Kami tidak menyerahkan jamaah ke pemandu lepas di bandara.",
  },
  {
    num: "02",
    title: "Biaya Jujur & Transparan",
    desc: "Seluruh rincian biaya penerbangan langsung, hotel dekat masjid, visa resmi, kereta cepat Haramain, dan perlengkapan dibuka sejak awal. Tidak ada biaya tersembunyi atau pungutan mendadak di kemudian hari.",
  },
  {
    num: "03",
    title: "Rombongan Proporsional & Terpantau",
    desc: "Kuota tiap keberangkatan dijaga proporsional agar jamaah lansia, pengguna kursi roda, maupun yang baru pertama kali ke Tanah Suci tetap terpantau dan mendapatkan bimbingan intensif.",
  },
  {
    num: "04",
    title: "Jarak Hotel Dekat ke Masjid",
    desc: "Memilih hotel berkualitas dalam jarak jalan kaki yang nyaman ke pelataran Masjid Nabawi (Madinah) dan Masjidil Haram (Makkah) agar jamaah dapat memaksimalkan sholat fardhu 5 waktu di masjid.",
  },
];

export default function TentangKamiPage() {
  const waContactLink = waLink(
    "Assalamu'alaikum PGS Tour, saya ingin berkonsultasi mengenai perjalanan umroh dan informasi kantor PGS Tour."
  );

  return (
    <>
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <PageHeader
        eyebrow="Tentang Kami"
        title="Mengantar Setiap Langkah Anda untuk Meresapi Makna Ibadah"
        intro={`${site.legalName} (${site.name}). Berakar dari Kota Serang, Banten, melayani dengan prinsip bahwa setiap jamaah adalah tamu Allah yang harus didampingi dengan keikhlasan, keterbukaan, dan standar terbaik.`}
      />

      {/* ============================================================ */}
      {/* SECTION 1: CERITA & FILOSOFI (CLEAN EDITORIAL, NO BOXES) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-paper">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[42%_1fr] lg:gap-16">
            {/* Left: Atmospheric Authentic Photography */}
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-sand/30 shadow-lg shadow-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/tentang-kami-jamaah.webp"
                  alt="Dokumentasi doa bersama rombongan jamaah dan pembimbing ibadah PGS Tour di bandara sebelum keberangkatan"
                  className="w-full h-auto object-cover object-[center_40%]"
                />
              </div>
              <p className="mt-3 text-xs text-ink-faint leading-relaxed">
                Dokumentasi doa bersama rombongan jamaah dan pembimbing ibadah PGS Tour di bandara menjelang keberangkatan ke Tanah Suci.
              </p>
            </Reveal>

            {/* Right: Narrative Essay & Pull Quote */}
            <Reveal delay={0.05} className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright block">
                Awal Mula Ikhtiar
              </span>

              <h2 className="headline mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.2rem] lg:leading-tight">
                Berawal dari Satu Keresahan Sederhana
              </h2>

              <p className="mt-6 font-display text-lg italic leading-relaxed text-brand-deep border-l-2 border-brand-bright pl-5 sm:text-xl">
                &ldquo;Tugas kami adalah menyampaikan syiar rumah Allah, bukan sekadar menjual tiket dan kursi pesawat.&rdquo;
              </p>

              <div className="mt-6 space-y-4 text-xs leading-relaxed text-ink-soft sm:text-sm">
                <p>
                  PGS Tour &amp; Travel lahir di Kota Serang, Banten, dari sebuah keresahan nyata: terlalu banyak perjalanan umrah yang diperlakukan seperti tur wisata biasa yang ditempeli ibadah. Jamaah sering merasa tergesa-gesa, tidak paham makna rukun yang dikerjakan, atau dikejutkan oleh biaya-biaya tambahan tak terduga.
                </p>
                <p>
                  Nama <strong className="text-ink font-semibold">Pesona Global Syiarbaitullah</strong> kami pilih sebagai pengingat moral. Kami ingin mengembalikan marwah ibadah ke esensi sejatinya: rombongan dijaga tetap proporsional agar terpantau, pembimbing ibadah menemani langsung dari manasik hingga kembali ke tanah air, dan biaya dibuka transparan sejak hari pertama.
                </p>
                <p>
                  Sampai hari ini kami tetap menjaga suasana hangat kekeluargaan yang mengenal jamaahnya satu per satu. Keberkahan terbesar kami adalah saat jamaah yang telah pulang kembali mempercayakan keberangkatan orang tua, anak, dan sanak saudaranya bersama PGS Tour.
                </p>
              </div>

              {/* Seamless Metric Line (No Boxes) */}
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-6">
                <div>
                  <span className="font-display text-2xl font-bold text-brand-deep sm:text-3xl block">
                    100%
                  </span>
                  <span className="mt-1 text-xs text-ink-soft block">
                    Biaya Transparan
                  </span>
                </div>

                <div>
                  <span className="font-display text-2xl font-bold text-brand-deep sm:text-3xl block">
                    3x
                  </span>
                  <span className="mt-1 text-xs text-ink-soft block">
                    Manasik Intensif
                  </span>
                </div>

                <div>
                  <span className="font-display text-2xl font-bold text-brand-deep sm:text-3xl block">
                    Resmi
                  </span>
                  <span className="mt-1 text-xs text-ink-soft block">
                    Izin PPIU Kemenag
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: EMPAT PRINSIP UTAMA (CLEAN NUMBERED LIST, ZERO BOXES) */}
      {/* ============================================================ */}
      <section className="border-t border-line bg-paper-2/40 py-16 sm:py-24">
        <Container>
          <Reveal className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright block">
              Nilai &amp; Standar
            </span>
            <h2 className="headline mt-2 text-2xl font-bold text-ink sm:text-3xl lg:text-[2.2rem]">
              Empat Hal yang Tidak Pernah Kami Kompromikan
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
              Ini bukan materi promosi. Empat hal ini adalah komitmen nyata yang paling sering ditanyakan jamaah, dan jawaban kami selalu konsisten.
            </p>
          </Reveal>

          {/* Clean Numbered Editorial Rows (Separated by Hairlines, No Box Borders) */}
          <div className="divide-y divide-line border-y border-line">
            {principles.map((p) => (
              <Reveal key={p.num} className="py-8 sm:py-10 grid gap-4 sm:grid-cols-[80px_1fr_1.5fr] sm:gap-8 items-baseline">
                <span className="font-mono text-2xl font-bold text-accent sm:text-3xl">
                  {p.num}
                </span>

                <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                  {p.title}
                </h3>

                <p className="text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: LEGALITAS & KEAMANAN (SEAMLESS 3-COLUMN METRIC STRIP) */}
      {/* ============================================================ */}
      <section className="border-t border-line bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright block">
              Kepatuhan &amp; Akuntabilitas
            </span>
            <h2 className="headline mt-2 text-2xl font-bold text-ink sm:text-3xl lg:text-[2.2rem]">
              Legalitas Resmi &amp; Keamanan Transaksi
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
              Seluruh perizinan dan transaksi operasional berada dalam payung hukum yang sah demi kenyamanan dan perlindungan seluruh jamaah.
            </p>
          </Reveal>

          {/* 3 Columns Divided by Delicate Hairlines (No Enclosing Boxes) */}
          <div className="grid gap-8 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line pt-4">
            {/* Col 1 */}
            <Reveal className="pt-6 sm:pt-0 sm:pr-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint block">
                Izin Resmi PPIU Kemenag
              </span>
              <p className="mt-2 text-lg font-bold text-ink">
                {site.legal.ppiuShort}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                Beroperasi resmi sebagai Penyelenggara Perjalanan Ibadah Umrah dengan izin terverifikasi di Kementerian Agama RI dan terintegrasi di SISKOPATUH.
              </p>
            </Reveal>

            {/* Col 2 */}
            <Reveal delay={0.05} className="pt-6 sm:pt-0 sm:px-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint block">
                Badan Hukum Perusahaan
              </span>
              <p className="mt-2 text-lg font-bold text-ink">
                {site.legalName}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                Perseroan terbatas yang sah dan terdaftar resmi di Kemenkumham RI, berdomisili operasional di Kota Serang, Banten.
              </p>
            </Reveal>

            {/* Col 3 */}
            <Reveal delay={0.1} className="pt-6 sm:pt-0 sm:pl-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint block">
                Rekening Resmi Perusahaan
              </span>
              <p className="mt-2 text-lg font-bold text-brand-deep">
                {site.payment.bank} : {site.payment.accountNumber}
              </p>
              <p className="mt-0.5 text-xs font-medium text-ink">
                a.n. {site.payment.accountName}
              </p>
              <p className="mt-2 text-[11px] text-rose-600 font-medium">
                * Waspada penipuan: Pembayaran resmi tidak pernah menggunakan rekening pribadi.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: KANTOR & HUBUNGI KAMI (AIRY EDITORIAL SPREAD) */}
      {/* ============================================================ */}
      <section className="border-t border-line bg-paper-2/40 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 items-start">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright block">
                Silaturahmi &amp; Konsultasi Langsung
              </span>
              <h2 className="headline mt-2 text-2xl font-bold text-ink sm:text-3xl">
                Kantor Layanan di Kota Serang
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft sm:text-sm max-w-xl">
                Pintu kantor kami selalu terbuka bagi Anda yang ingin berdiskusi langsung, melihat perlengkapan umroh, atau berkonsultasi seputar persiapan ibadah.
              </p>

              <div className="mt-6 space-y-3 text-xs text-ink-soft sm:text-sm">
                <p className="text-ink">
                  <strong className="text-ink-faint font-semibold uppercase text-[11px] block">Alamat Kantor:</strong>
                  {site.contact.address}
                </p>

                <p className="text-ink">
                  <strong className="text-ink-faint font-semibold uppercase text-[11px] block">Jam Operasional:</strong>
                  {site.contact.hours}
                </p>

                <p className="text-ink">
                  <strong className="text-ink-faint font-semibold uppercase text-[11px] block">Telepon / WhatsApp:</strong>
                  {site.contact.phoneDisplay} / {site.contact.phoneAltDisplay}
                </p>
              </div>
            </div>

            {/* Clean Action Column */}
            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={waContactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-semibold text-paper-2 shadow-xs transition-all duration-200 hover:-translate-y-px hover:bg-brand-deep hover:shadow-md sm:text-sm"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Konsultasi via WhatsApp</span>
              </a>

              <Link
                href="/perjalanan"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line-strong bg-paper px-7 py-3 text-xs font-semibold text-ink transition-colors hover:bg-sand sm:text-sm"
              >
                <span>Lihat Program Umroh Mahabbah</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: TESTIMONI JAMAAH */}
      {/* ============================================================ */}
      <Testimonials
        heading="Sebagian Besar Jamaah Datang dari Cerita Jamaah Lain"
        intro="Kepercayaan tidak bisa diiklankan. Ia tumbuh dari rombongan yang pulang dengan rasa syukur, kedamaian, dan cerita indah yang mereka bagikan kepada keluarga."
      />

      {/* ============================================================ */}
      {/* SECTION 6: BOTTOM CTA BAND */}
      {/* ============================================================ */}
      <CtaBand
        title="Siap Melangkah Menuju Baitullah Bersama Kami?"
        body="Diskusikan rencana keberangkatan Anda bersama tim PGS Tour. Kami siap mendampingi dari niat awal hingga kepulangan."
      />
    </>
  );
}
