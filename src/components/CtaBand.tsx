import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, waLink } from "@/lib/site";

/** Closing call to action. Dark block, big grotesk. Reused across pages. */
export function CtaBand({
  title = "Siap memulai perjalanan?",
  body = "Ceritakan rencana Anda. Kami bantu memilih paket, mengatur jadwal, dan menyiapkan segala sesuatunya.",
}: {
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="bg-ink-2 py-24 text-paper-2 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light" className="mb-6">
            Konsultasi Gratis
          </Eyebrow>
          <h2 className="headline text-[2.2rem] leading-[1.02] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper-2/70">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-6 py-3 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-px"
            >
              Konsultasi
              <ArrowUpRight size={15} weight="bold" />
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper-2/25 px-6 py-3 text-sm font-medium text-paper-2 transition-colors hover:bg-paper-2/10"
            >
              <WhatsappLogo size={16} weight="fill" />
              {site.contact.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
