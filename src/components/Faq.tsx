import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/site-content";

/** Native <details> accordion. No JavaScript, fully keyboard accessible. */
export function Faq({
  heading = "Pertanyaan yang sering diajukan",
}: {
  heading?: string;
}) {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading title={heading} />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="font-display text-lg text-ink">{f.q}</h3>
                <Plus
                  size={18}
                  className="mt-1 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
