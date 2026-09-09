import { clsx } from "clsx";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

/**
 * Section header: optional eyebrow, a big bold grotesk headline (accepts a
 * ReactNode so words can be de-emphasised with <span className="text-muted">),
 * optional intro, optional link. Vertical stack, no split-header.
 */
export function SectionHeading({
  eyebrow,
  eyebrowTone = "dark",
  title,
  intro,
  link,
  align = "left",
  className,
}: {
  eyebrow?: string;
  eyebrowTone?: "dark" | "light";
  title: React.ReactNode;
  intro?: React.ReactNode;
  link?: { href: string; label: string };
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow
          tone={eyebrowTone}
          className={clsx("mb-2.5 sm:mb-5", align === "center" && "justify-center")}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="headline text-2xl sm:text-[2.6rem] md:text-5xl leading-[1.08] sm:leading-[1.02]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-2.5 sm:mt-5 max-w-2xl text-pretty text-xs sm:text-base leading-relaxed text-ink-soft">
          {intro}
        </p>
      ) : null}
      {link ? (
        <Link
          href={link.href}
          className="group mt-6 inline-flex items-center gap-2 border-b border-line-strong pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
        >
          <ArrowRight size={15} weight="bold" />
          {link.label}
        </Link>
      ) : null}
    </Reveal>
  );
}
