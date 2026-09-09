import type { Metadata } from "next";
import { Check, ShieldCheck, Headset, ListChecks } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { PosterView } from "@/components/PosterView";
import { visaServices } from "@/content/visa";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Price List Visa Umroh",
  description:
    "Daftar harga layanan visa umroh PGS Travel: Visa Umroh Only, Visa + BIS, Visa + BRN, Longstay 85 hari, dan Istidofah.",
};

const perks = [
  { icon: ShieldCheck, label: "Aman dan terpercaya" },
  { icon: Headset, label: "Pelayanan profesional" },
  { icon: ListChecks, label: "Pilihan layanan lengkap" },
];

export default function VisaUmrohPage() {
  return (
    <>
      <PageHeader
        eyebrow="Price List"
        title="Layanan Visa Umroh by PGS Travel"
        intro="Pengurusan visa umroh untuk perorangan maupun rombongan, termasuk visa longstay hingga 85 hari. Harga dan persyaratan mengikuti poster resmi PGS Travel."
      />

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visaServices.map((v) => (
              <Reveal
                key={v.name}
                className="flex flex-col rounded-xl border border-line bg-paper-2 p-5 transition-all duration-200 hover:border-line-strong hover:shadow-xs sm:p-6"
              >
                <h2 className="mkr font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                  {v.name}
                </h2>

                {v.price ? (
                  <p className="mt-3 font-display text-2xl font-bold text-brand-deep">
                    {v.price}
                  </p>
                ) : null}

                {v.note ? (
                  <p className="mt-3 text-xs text-ink-soft">{v.note}</p>
                ) : null}

                {v.tiers ? (
                  <ul className="mt-2 divide-y divide-line border-y border-line">
                    {v.tiers.map((t) => (
                      <li
                        key={t.label}
                        className="flex items-center justify-between gap-3 py-2 text-sm"
                      >
                        <span className="text-ink-soft">{t.label}</span>
                        <span className="font-semibold text-ink">{t.price}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {v.requirements ? (
                  <div className="mt-4 border-t border-line pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                      Persyaratan
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {v.requirements.map((r) => (
                        <li
                          key={r}
                          className="flex gap-2 text-sm text-ink-soft"
                        >
                          <Check
                            size={15}
                            weight="bold"
                            className="mt-0.5 shrink-0 text-brand-bright"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 rounded-xl border border-line bg-paper-2 px-5 py-4 sm:mt-10">
            {perks.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 text-sm text-ink-soft"
              >
                <p.icon size={17} weight="duotone" className="text-brand-bright" />
                {p.label}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-soft sm:text-sm">
            Harga dapat berubah sewaktu-waktu mengikuti kebijakan otoritas Arab
            Saudi dan kurs mata uang. Pembayaran hanya melalui rekening resmi{" "}
            {site.payment.bank} {site.payment.accountNumber} a.n.{" "}
            {site.payment.accountName}. Hubungi kami untuk kepastian harga dan
            ketersediaan.
          </p>
        </Container>
      </section>

      <PosterView
        src="/img/poster-visa-umroh.webp"
        alt="Poster resmi Price List Visa Umroh by PGS Travel"
        width={1600}
        height={2000}
        title="Poster Price List Visa Umroh"
        note="Seluruh tarif dan persyaratan di halaman ini mengikuti poster resmi PGS Travel."
      />

      <CtaBand
        title="Butuh pengurusan visa umroh?"
        body="Sampaikan jenis visa, jumlah jamaah, dan rencana tanggal. Tim kami bantu proses dan dokumennya."
      />
    </>
  );
}
