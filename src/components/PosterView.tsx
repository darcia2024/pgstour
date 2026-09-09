import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Menampilkan poster resmi (webp) di dalam bingkai, dengan tautan membuka
 * ukuran penuh di tab baru.
 */
export function PosterView({
  src,
  alt,
  width,
  height,
  eyebrow = "Poster Resmi",
  title,
  note,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  eyebrow?: string;
  title: string;
  note?: string;
}) {
  return (
    <section className="border-t border-line bg-paper-2 py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-3 justify-center">{eyebrow}</Eyebrow>
          <h2 className="headline text-[1.75rem] leading-[1.05] text-ink sm:text-3xl">
            {title}
          </h2>
          {note ? (
            <p className="mx-auto mt-2.5 max-w-xl text-xs leading-relaxed text-ink-soft sm:text-sm">
              {note}
            </p>
          ) : null}
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-2xl">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-line bg-paper shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
              className="h-auto w-full"
            />
          </a>
          <p className="mt-3 text-center">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand transition-colors hover:text-brand-deep"
            >
              Buka ukuran penuh
              <ArrowUpRight size={13} weight="bold" />
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
