import { Eyebrow } from "./Eyebrow";

/**
 * Dark interior-page hero. Sits under the overlaying nav, rounded to match the
 * framed card, same language as the homepage hero.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-ink-2 text-paper-2">
      <div className="absolute inset-0 bg-[radial-gradient(130%_130%_at_15%_0%,var(--color-brand-mid)_0%,var(--color-brand)_46%,var(--color-ink-2)_100%)]" />
      <svg
        aria-hidden
        className="absolute bottom-0 right-0 h-[80%] w-auto text-accent-soft/[0.07]"
        viewBox="0 0 460 460"
        fill="none"
        preserveAspectRatio="xMaxYMax slice"
      >
        <path d="M230 20C124 20 40 104 40 210v240h380V210C420 104 336 20 230 20Z" stroke="currentColor" strokeWidth="2" />
        <path d="M230 150c-62 0-112 50-112 112v188h224V262c0-62-50-112-112-112Z" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-9 pt-28 sm:px-8 sm:pb-12 sm:pt-32">
        {eyebrow ? (
          <Eyebrow tone="light" className="mb-3">
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h1 className="headline max-w-[24ch] text-[1.75rem] leading-[1.08] text-paper-2 sm:text-[2.4rem] lg:text-[2.8rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-3.5 max-w-2xl text-pretty text-xs leading-relaxed text-paper-2/80 sm:text-sm">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
