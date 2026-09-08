import type { ComponentType } from "react";
import {
  Compass,
  HandsPraying,
  ShieldCheck,
  UsersThree,
  BookOpen,
  Heart,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values, type Value } from "@/content/site-content";

type IconCmp = ComponentType<{
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}>;

const iconMap: Record<Value["icon"], IconCmp> = {
  compass: Compass,
  hands: HandsPraying,
  shield: ShieldCheck,
  users: UsersThree,
  book: BookOpen,
  heart: Heart,
};

/** Two-column feature list. Icon + text, separated by hairlines, no cards. */
export function Values() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          title="Yang membuat jamaah merasa ditemani"
          intro="Kami mengukur keberhasilan bukan dari jumlah keberangkatan, tapi dari jamaah yang pulang dengan hati lebih tenang dan ibadah yang mereka pahami."
        />

        <div className="mt-14 grid gap-x-12 gap-y-0 md:grid-cols-2">
          {values.map((v, i) => {
            const Ico = iconMap[v.icon];
            return (
              <Reveal
                key={v.title}
                delay={(i % 2) * 0.05}
                className="flex gap-5 border-t border-line py-7"
              >
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand text-brand">
                  <Ico size={22} weight="light" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
