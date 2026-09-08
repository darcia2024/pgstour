import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { belief } from "@/content/site-content";

/** Full-width editorial quote. The brand's stated belief, set large and quiet. */
export function BeliefQuote() {
  return (
    <section className="border-y border-line bg-paper-2 py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {belief.label}
          </p>
          <blockquote className="mt-8 font-display text-2xl leading-[1.45] text-ink text-balance sm:text-[1.75rem] sm:leading-[1.5]">
            &ldquo;{belief.quote}&rdquo;
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
