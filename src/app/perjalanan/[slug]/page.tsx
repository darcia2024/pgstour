import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Check,
  X,
  Sparkle,
  AirplaneTilt,
  Buildings,
  CalendarBlank,
  UsersThree,
  ArrowLeft,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { ButtonExternal, Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/CtaBand";
import { packages, getPackage, formatIDR } from "@/content/packages";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/perjalanan/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} - ${pkg.subtitle}`,
    description: pkg.summary,
  };
}

export default async function PackageDetailPage({
  params,
}: PageProps<"/perjalanan/[slug]">) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const wa = waLink(
    `Assalamu'alaikum PGS Tour, saya tertarik dengan paket ${pkg.name} (${pkg.subtitle}). Boleh minta informasinya?`,
  );

  return (
    <>
      <section className="relative m-1.5 overflow-hidden rounded-[16px] bg-ink-2 text-paper-2 sm:m-2.5 sm:rounded-[24px] lg:m-3">
        <div className="absolute inset-0 bg-[radial-gradient(130%_130%_at_85%_0%,#2b6250_0%,#173a2f_48%,#0d1a15_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-36">
          <Link
            href="/perjalanan"
            className="inline-flex items-center gap-1.5 text-sm text-paper-2/70 transition-colors hover:text-paper-2"
          >
            <ArrowLeft size={15} />
            Semua paket
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {pkg.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-paper-2/20 px-3 py-1 text-xs text-paper-2/85"
              >
                {b}
              </span>
            ))}
          </div>
          <h1 className="headline mt-5 max-w-2xl text-[2.2rem] text-paper-2 sm:text-5xl lg:text-[3.4rem]">
            {pkg.name}
          </h1>
          <p className="mt-3 text-lg text-accent-soft">{pkg.subtitle}</p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-paper-2/80">
            {pkg.summary}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-10">
            <div className="min-w-0">
              {/* Fakta ringkas */}
              <div className="grid gap-x-6 gap-y-5 rounded-xl border border-line bg-paper-2 p-6 sm:grid-cols-2">
                <Fact icon={<AirplaneTilt size={18} />} label="Maskapai" value={pkg.airline} />
                <Fact icon={<CalendarBlank size={18} />} label="Keberangkatan" value={pkg.departure} />
                <Fact icon={<Buildings size={18} />} label="Hotel Makkah" value={pkg.hotelMakkah} />
                <Fact icon={<Buildings size={18} />} label="Hotel Madinah" value={pkg.hotelMadinah} />
                <Fact icon={<UsersThree size={18} />} label="Kuota" value={pkg.quota} />
                <Fact
                  icon={<CalendarBlank size={18} />}
                  label="Durasi"
                  value={`${pkg.durationDays} hari - ${pkg.nightsMakkah} malam Makkah, ${pkg.nightsMadinah} malam Madinah`}
                />
              </div>

              {/* Highlight */}
              <h2 className="mt-12 font-display text-2xl text-ink">
                Yang istimewa dari paket ini
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <Sparkle size={17} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Itinerary */}
              <h2 className="mt-12 font-display text-2xl text-ink">
                Rencana perjalanan
              </h2>
              <ol className="mt-6 border-l border-line">
                {pkg.itinerary.map((d) => (
                  <li key={d.day} className="relative pb-8 pl-6 last:pb-0">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {d.day}
                    </p>
                    <h3 className="mt-1 font-display text-lg text-ink">{d.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {d.detail}
                    </p>
                  </li>
                ))}
              </ol>

              {/* Includes / excludes */}
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-xl text-ink">Sudah termasuk</h2>
                  <ul className="mt-4 space-y-2.5">
                    {pkg.includes.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-ink-soft">
                        <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-brand-bright" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-xl text-ink">Belum termasuk</h2>
                  <ul className="mt-4 space-y-2.5">
                    {pkg.excludes.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-ink-soft">
                        <X size={16} weight="bold" className="mt-0.5 shrink-0 text-ink-faint" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar harga */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-line bg-paper-2 p-6 shadow-soft">
                <p className="text-[11px] uppercase tracking-wide text-ink-faint">
                  Mulai dari
                </p>
                <p className="mt-1 font-display text-3xl text-brand-deep">
                  {formatIDR(pkg.priceFrom)}
                </p>
                <p className="mt-1 text-[13px] text-ink-soft">/ {pkg.priceNote}</p>

                <div className="mt-5 space-y-2.5 border-t border-line pt-5 text-sm text-ink-soft">
                  <Row label="Durasi" value={`${pkg.durationDays} hari`} />
                  <Row label="Kota" value={pkg.cities.join(", ")} />
                  <Row label="Kuota" value={pkg.quota} />
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <ButtonExternal href={wa} size="lg" className="w-full">
                    Tanya via WhatsApp
                  </ButtonExternal>
                  <Button href="/konsultasi" variant="outline" size="lg" className="w-full">
                    Konsultasi
                  </Button>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink-faint">
                  Harga estimasi, belum final. Dikunci saat pendaftaran sesuai
                  kurs, pilihan kamar, dan tanggal keberangkatan.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Amankan kursi untuk ${pkg.name}`}
        body="Kuota tiap keberangkatan dijaga kecil. Hubungi kami untuk mengecek ketersediaan tanggal."
      />
    </>
  );
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-brand-bright">{icon}</span>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-ink-faint">{label}</p>
        <p className="mt-0.5 text-sm text-ink">{value}</p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-ink-faint">{label}</span>
      <span className="text-right text-ink">{value}</span>
    </div>
  );
}
