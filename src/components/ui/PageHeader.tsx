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
    <section className="relative m-1.5 overflow-hidden rounded-[16px] bg-ink-2 text-paper-2 sm:m-2.5 sm:rounded-[24px] lg:m-3">
      <div className="absolute inset-0 bg-[radial-gradient(130%_130%_at_15%_0%,#2b6250_0%,#173a2f_48%,#0d1a15_100%)]" />
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

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        {eyebrow ? (
          <Eyebrow tone="light" className="mb-6">
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h1 className="headline max-w-[20ch] text-[2rem] text-paper-2 sm:text-[3rem] lg:text-[3.6rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-paper-2/75 sm:text-base">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
