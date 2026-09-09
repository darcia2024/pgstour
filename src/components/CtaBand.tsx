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
    <section className="bg-ink-2 py-12 text-paper-2 sm:py-16">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light" className="mb-4">
            Konsultasi Gratis
          </Eyebrow>
          <h2 className="headline text-[1.85rem] leading-[1.05] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-3.5 max-w-md text-xs leading-relaxed text-paper-2/75 sm:text-sm">
            {body}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-5 py-2.5 text-xs font-semibold text-ink transition-transform duration-200 hover:-translate-y-px sm:text-sm"
            >
              Konsultasi
              <ArrowUpRight size={14} weight="bold" />
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-paper-2/25 bg-paper-2/5 px-5 py-2.5 text-xs font-semibold text-paper-2 transition-colors hover:bg-paper-2/15 sm:text-sm"
            >
              <WhatsappLogo size={15} weight="fill" />
              {site.contact.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
