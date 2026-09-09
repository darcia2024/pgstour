import type { Metadata } from "next";
import {
  Check,
  ShieldCheck,
  Headset,
  ListChecks,
  ArrowUpRight,
  WhatsappLogo,
  SealCheck,
  Info,
} from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { PosterView } from "@/components/PosterView";
import { visaServices } from "@/content/visa";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Price List Visa Umroh Resmi",
  description:
    "Daftar harga layanan visa umroh resmi PGS Travel: Visa Umroh Only, Visa + BIS, Visa + BRN, Longstay 85 hari, dan Istidofah terdaftar SISKOPATUH Kemenag RI.",
};

const perks = [
  {
    icon: ShieldCheck,
    title: "Aman & Terverifikasi",
    desc: "Izin resmi PPIU Kemenag RI & terintegrasi langsung di SISKOPATUH.",
  },
  {
    icon: Headset,
    title: "Pendampingan Profesional",
    desc: "Bimbingan kelengkapan dokumen dan asistensi cepat hingga visa terbit.",
  },
  {
    icon: ListChecks,
    title: "Pilihan Layanan Lengkap",
    desc: "Tersedia opsi mandiri, rombongan, durasi fleksibel, hingga longstay 85 hari.",
  },
];

export default function VisaUmrohPage() {
  return (
    <>
      <PageHeader
        eyebrow="Price List Resmi"
        title="Layanan Visa Umroh by PGS Travel"
        intro="Pengurusan visa umroh resmi berizin Kemenag untuk perorangan, keluarga, maupun rombongan, termasuk visa longstay hingga 85 hari dengan transparansi biaya tanpa kejutan."
      />

      {/* Main Visa Grid Section */}
      <section className="bg-slate-50/50 py-14 sm:py-20">
        <Container>
          {/* Section Header */}
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright block">
              Pilihan Paket Visa
            </span>
            <h2 className="headline mt-2 text-2xl font-bold text-ink sm:text-3xl lg:text-[2.2rem]">
              Tarif Resmi &amp; Persyaratan Dokumen
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
              Pilih jenis visa yang sesuai dengan rencana ibadah Anda. Seluruh proses pengurusan dilakukan secara legal dan terpantau.
            </p>
          </div>

          {/* 6 Clean & Elegant Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {visaServices.map((v) => {
              const waHref = waLink(
                `Assalamu'alaikum PGS Tour, saya ingin konsultasi mengenai pengurusan ${v.name}. Mohon informasi persyaratan dan prosedurnya.`
              );

              return (
                <Reveal
                  key={v.name}
                  className={clsx(
                    "relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 transition-all duration-300",
                    "border shadow-2xs hover:-translate-y-1 hover:shadow-soft",
                    v.popular
                      ? "border-brand/40 ring-1 ring-brand/15"
                      : "border-slate-200/80 hover:border-brand/30"
                  )}
                >
                  {/* Top Metadata */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-slate-100/90 border border-slate-200/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                        {v.badge}
                      </span>
                      {v.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                          <SealCheck size={13} weight="fill" />
                          Populer
                        </span>
                      )}
                    </div>

                    {/* Clean Headline Without Cyan Square */}
                    <h3 className="headline mt-4 text-lg sm:text-xl font-bold tracking-tight text-ink">
                      {v.name}
                    </h3>

                    {/* Harmonized Price Anchor */}
                    <div className="mt-3 pb-4 border-b border-slate-100">
                      <div className="flex items-baseline gap-1.5">
                        {v.startingPrice ? (
                          <span className="text-xs font-semibold text-ink-faint">Mulai</span>
                        ) : null}
                        <span className="font-display text-2xl sm:text-[1.75rem] font-bold tracking-tight text-brand-deep">
                          {v.price || v.startingPrice}
                        </span>
                        {v.unit ? (
                          <span className="text-xs font-medium text-ink-faint">
                            {v.unit}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* Tiered Table or Requirements Checklist */}
                    {v.tiers ? (
                      <div className="mt-4">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mb-2">
                          {v.note || "Rincian Tarif"}
                        </p>
                        <div className="rounded-xl border border-slate-150 bg-slate-50/60 divide-y divide-slate-150 overflow-hidden">
                          {v.tiers.map((t) => (
                            <div
                              key={t.label}
                              className="flex items-center justify-between px-3.5 py-2 text-xs"
                            >
                              <span className="font-medium text-ink-soft">{t.label}</span>
                              <span className="font-semibold text-ink">{t.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {v.requirements ? (
                      <div className="mt-4">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint mb-2.5">
                          Dokumen Persyaratan
                        </p>
                        <ul className="space-y-2">
                          {v.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2.5 text-xs text-ink-soft">
                              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 mt-0.5">
                                <Check size={10} weight="bold" />
                              </div>
                              <span className="leading-snug">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  {/* Clean Direct CTA Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-2.5 text-xs font-semibold text-ink transition-all duration-200 hover:bg-brand hover:text-white hover:border-brand hover:shadow-xs active:scale-[0.99]"
                    >
                      <WhatsappLogo
                        size={15}
                        weight="fill"
                        className="text-emerald-600 group-hover/btn:text-white transition-colors"
                      />
                      <span>Konsultasi Visa</span>
                      <ArrowUpRight
                        size={13}
                        weight="bold"
                        className="text-ink-faint group-hover/btn:text-white transition-colors"
                      />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Refined 3-Column Trust Strip */}
          <div className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-3 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/5 text-brand border border-brand/10">
                  <p.icon size={20} weight="fill" className="text-brand-bright" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink">{p.title}</h4>
                  <p className="mt-1 text-xs text-ink-soft leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Official Bank Account Security Notice */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-xs text-ink-soft">
            <Info size={18} weight="fill" className="text-brand-bright shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Harga dapat berubah sewaktu-waktu mengikuti kebijakan otoritas Arab Saudi dan kurs mata uang. Pembayaran resmi hanya melalui rekening perusahaan: <strong className="text-ink font-semibold">{site.payment.bank} {site.payment.accountNumber}</strong> a.n. <strong className="text-ink font-semibold">{site.payment.accountName}</strong>.
            </p>
          </div>
        </Container>
      </section>

      {/* Official Poster View */}
      <PosterView
        src="/img/poster-visa-umroh.webp"
        alt="Poster resmi Price List Visa Umroh by PGS Travel"
        width={1600}
        height={2000}
        title="Poster Price List Visa Umroh"
        note="Seluruh tarif dan persyaratan di halaman ini mengikuti rilis poster resmi PGS Travel."
      />

      <CtaBand
        title="Butuh pengurusan visa umroh?"
        body="Sampaikan jenis visa, jumlah jamaah, dan rencana tanggal. Tim kami siap membantu proses dan kelengkapan dokumen Anda."
      />
    </>
  );
}
