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
import { PosterView } from "@/components/PosterView";
import { packages, getPackage, formatIDR } from "@/content/packages";
import { site, waLink } from "@/lib/site";

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
      <section className="relative w-full overflow-hidden bg-ink-2 text-paper-2">
        <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_85%_0%,var(--color-brand-mid)_0%,var(--color-brand)_46%,var(--color-ink-2)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32">
          <Link
            href="/perjalanan"
            className="inline-flex items-center gap-1.5 text-xs text-paper-2/70 transition-colors hover:text-paper-2 sm:text-sm"
          >
            <ArrowLeft size={14} />
            Ringkasan paket
          </Link>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {pkg.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-paper-2/20 bg-paper-2/10 px-2.5 py-0.5 text-[11px] font-medium text-paper-2/90 backdrop-blur-xs"
              >
                {b}
              </span>
            ))}
          </div>
          <h1 className="headline mt-3 max-w-2xl text-[1.85rem] leading-[1.05] text-paper-2 sm:text-4xl lg:text-[2.8rem]">
            {pkg.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-accent-soft sm:text-base">{pkg.subtitle}</p>
          <p className="mt-3.5 max-w-2xl text-xs leading-relaxed text-paper-2/80 sm:text-sm">
            {pkg.summary}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
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
                  Harga per jenis kamar
                </p>
                <ul className="mt-2 divide-y divide-line border-y border-line">
                  {pkg.rooms.map((r) => (
                    <li
                      key={r.type}
                      className="flex items-center justify-between gap-3 py-2.5"
                    >
                      <span className="text-sm text-ink-soft">
                        {r.type.split(" - ")[0]}
                      </span>
                      <span className="font-display text-base font-bold text-brand-deep">
                        {formatIDR(r.price)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 space-y-2.5 text-sm text-ink-soft">
                  <Row label="Durasi" value={`${pkg.durationDays} hari`} />
                  <Row label="Kota" value={pkg.cities.join(", ")} />
                  <Row label="Keberangkatan" value="Terdekat" />
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
                  Harga belum termasuk paspor dan vaksin. Pembayaran hanya melalui{" "}
                  {site.payment.bank} {site.payment.accountNumber} a.n.{" "}
                  {site.payment.accountName}.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {pkg.slug === "umroh-mahabbah" ? (
        <PosterView
          src="/img/poster-umroh-mahabbah.webp"
          alt="Poster resmi Umroh Mahabbah PGS Tour"
          width={1600}
          height={2270}
          title="Poster resmi paket ini"
          note="Semua rincian di halaman ini diambil dari poster berikut."
        />
      ) : null}

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
