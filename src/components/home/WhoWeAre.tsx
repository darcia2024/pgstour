import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight, Compass, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const pillars = [
  {
    icon: Compass,
    title: "Pembimbing Menetap",
    desc: "Mendampingi jamaah sejak manasik di tanah air hingga kembali ke Indonesia.",
  },
  {
    icon: ShieldCheck,
    title: "Biaya Transparan",
    desc: "Komponen harga dirinci sejak awal tanpa biaya kejutan di kemudian hari.",
  },
  {
    icon: UsersThree,
    title: "Satu Rombongan",
    desc: "Satu jadwal keberangkatan dengan kuota terbatas agar setiap jamaah tetap terpantau.",
  },
];

export function WhoWeAre() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal>
            <Eyebrow className="mb-4">Siapa Kami</Eyebrow>
            <h2 className="headline max-w-[22ch] text-[1.75rem] leading-[1.1] sm:text-3xl lg:text-[2.35rem]">
              Kami mendampingi setiap{" "}
              <span className="text-muted">tamu Allah agar pulang dengan</span>{" "}
              hati yang lebih tenang{" "}
              <span className="text-muted">dan</span> ibadah yang benar-benar
              dipahami.
            </h2>
            <Link
              href="/tentang-kami"
              className="mt-6 inline-flex items-center gap-2 border-b border-line-strong pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
            >
              <ArrowRight size={14} weight="bold" />
              Tentang PGS Tour
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-3 sm:grid-cols-1">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-3.5 rounded-xl border border-line bg-paper-2 p-4 transition-colors hover:border-line-strong"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper text-brand-bright">
                  <p.icon size={18} weight="duotone" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
