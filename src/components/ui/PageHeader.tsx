import { Container } from "./Container";

/** Interior-page header. Sits directly under the sticky nav on a paper ground. */
export function PageHeader({
  label,
  title,
  intro,
  children,
}: {
  label?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line bg-paper-2">
      <Container className="pb-14 pt-16 sm:pb-16 sm:pt-20">
        {label ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {label}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl leading-[1.12] text-ink sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </header>
  );
}
