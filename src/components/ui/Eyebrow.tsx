import { clsx } from "clsx";

/** Small uppercase label preceded by a terracotta square marker. */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "mkr inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em]",
        tone === "dark" ? "text-ink-soft" : "text-paper-2/70",
        className,
      )}
    >
      {children}
    </span>
  );
}
