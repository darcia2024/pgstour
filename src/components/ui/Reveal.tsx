import { clsx } from "clsx";

/**
 * Content wrapper. Applies a gentle one-shot fade-up on scroll via a pure-CSS
 * scroll-driven animation where supported; everywhere else the content is
 * simply visible. No JavaScript, no hidden-by-default state, so the page reads
 * correctly with or without scripting.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** kept for call-site compatibility; ignored */
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section";
}) {
  return <Tag className={clsx("reveal", className)}>{children}</Tag>;
}
