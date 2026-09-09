import type { Metadata } from "next";
import { ShieldCheck, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { about } from "@/content/site-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "PGS Tour & Travel - Pesona Global Syiarbaitullah. Travel umrah keluarga dari Serang, Banten dengan rombongan kecil dan biaya terbuka.",
};

export default function TentangKamiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Menyampaikan syiar Baitullah, bukan sekadar menjual perjalanan"
        intro={`${site.legalName}, dikenal sebagai ${site.name}. Berkantor di Kota Serang, Banten.`}
      />

      {/* Cerita + gambar */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xs">
                <Photo
                  src="/img/gallery-2.jpg"
                  label="Rombongan PGS di Madinah"
                  alt="Rombongan jamaah PGS Tour di Madinah"
                  fill
                />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                Berawal dari satu keresahan
              </h2>
              <div className="mt-4 space-y-3.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                {about.story.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-bold text-brand-deep sm:text-3xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-[11px] leading-snug text-ink-soft sm:text-xs">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Prinsip */}
      <section className="border-y border-line bg-paper-2 py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Empat hal yang tidak kami kompromikan"
            intro="Ini bukan slogan pemasaran. Empat hal ini yang paling sering ditanyakan jamaah, dan jawabannya selalu sama."
          />
          <div className="mt-8 grid gap-x-8 gap-y-0 sm:mt-10 sm:grid-cols-2">
            {about.principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 2) * 0.05}
                className="border-t border-line py-5"
              >
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Legalitas */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="rounded-xl border border-line bg-paper-2 p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <ShieldCheck size={28} weight="light" className="mt-1 shrink-0 text-brand" />
              <div>
                <h2 className="font-display text-2xl text-ink">
                  Legalitas dan perizinan
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  PGS Tour & Travel beroperasi sebagai Penyelenggara Perjalanan
                  Ibadah Umrah (PPIU) berizin. Nomor izin resmi dapat diverifikasi
                  melalui kanal Kementerian Agama Republik Indonesia.
                </p>
                <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                  <li className="flex items-center gap-2.5 rounded-xl bg-paper px-4 py-3">
                    <SealCheck size={18} weight="fill" className="shrink-0 text-brand-bright" />
                    <span className="text-ink">{site.legal.ppiu}</span>
                  </li>
                  <li className="flex items-center gap-2.5 rounded-xl bg-paper px-4 py-3">
                    <SealCheck size={18} weight="fill" className="shrink-0 text-brand-bright" />
                    <span className="text-ink">NIB &amp; akta perusahaan (menunggu data)</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-ink-faint">
                  Catatan build: lengkapi nomor SK PPIU, NIB, dan dokumen legal
                  lain melalui berkas dari klien.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Testimonials
        heading="Sebagian besar jamaah datang dari cerita jamaah lain"
        intro="Kepercayaan tidak bisa diiklankan. Ia tumbuh dari rombongan yang pulang dengan pengalaman yang mereka ceritakan ulang."
      />

      <CtaBand />
    </>
  );
}
