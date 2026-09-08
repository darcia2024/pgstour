import { clsx } from "clsx";
import { Reveal } from "./Reveal";

/**
 * Vertical-stack section header: optional small label, headline, optional intro.
 * No split-header (big headline left / paragraph right) anywhere on the site.
 * Use the `label` prop sparingly - at most one per three sections per page.
 */
export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  className,
}: {
  label?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? (
        <p
          className={clsx(
            "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent",
            align === "center" && "flex justify-center",
          )}
        >
          {label}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-[1.15] text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
