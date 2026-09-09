import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationSteps } from "@/content/site-content";

const stepMeta = [
  { detail: "WhatsApp / Tatap Muka di Kantor", tag: "Langkah 01" },
  { detail: "Quad, Triple, atau Double", tag: "Langkah 02" },
  { detail: "Manasik Intensif & Serah Koper", tag: "Langkah 03" },
  { detail: "Pendampingan Lengkap hingga Pulang", tag: "Langkah 04" },
];

export function Steps() {
  return (
    <section className="border-t border-line bg-paper py-10 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Proses Pendaftaran"
            title={
              <>
                Dari niat hingga keberangkatan,{" "}
                <span className="text-brand-bright">empat langkah terarah</span>
              </>
            }
            intro="Proses pendaftaran yang transparan, terstruktur, dan didampingi langsung oleh staf PGS Tour dari hari pertama hingga kepulangan."
          />
        </div>

        {/* Seamless Editorial Step Flow — 2 columns on mobile, 4 on desktop */}
        <div className="mt-6 sm:mt-16 border-y border-line">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {registrationSteps.map((s, idx) => (
              <Reveal
                key={s.n}
                className="group flex flex-col justify-between bg-paper p-3 sm:py-10 sm:px-6 lg:px-8 transition-colors duration-200 hover:bg-paper-2/30"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-1 sm:gap-2">
                    <span className="font-display text-2xl sm:text-5xl font-light tracking-tight text-ink/25 transition-colors duration-300 group-hover:text-brand-bright">
                      {s.n}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-brand/80">
                      {stepMeta[idx]?.tag || `Tahap ${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="mt-2 sm:mt-4 font-display text-xs sm:text-xl font-bold tracking-tight text-ink leading-snug">
                    {s.title}
                  </h3>

                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-[13px] leading-relaxed text-ink-soft line-clamp-3 sm:line-clamp-none">
                    {s.body}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-line/60">
                  <span className="text-[9px] sm:text-[11px] font-medium text-ink-faint truncate block">
                    {stepMeta[idx]?.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
