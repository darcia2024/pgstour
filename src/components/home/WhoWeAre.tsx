import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/** Big statement of purpose. Key phrases in ink, connective words de-emphasised. */
export function WhoWeAre() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow className="mb-6">Siapa Kami</Eyebrow>
          <h2 className="headline max-w-[20ch] text-[2rem] leading-[1.05] sm:text-4xl lg:text-[3.1rem]">
            Kami mendampingi setiap{" "}
            <span className="text-muted">tamu Allah agar pulang dengan</span>{" "}
            hati yang lebih tenang{" "}
            <span className="text-muted">dan</span> ibadah yang benar-benar
            dipahami.
          </h2>
          <Link
            href="/tentang-kami"
            className="mt-10 inline-flex items-center gap-2 border-b border-line-strong pb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
          >
            <ArrowRight size={15} weight="bold" />
            Tentang PGS Tour
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
