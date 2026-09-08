import { Phone } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ButtonExternal } from "@/components/ui/Button";
import { site, waLink } from "@/lib/site";

/** Closing call to action. Dark brand band, centred. Reused across pages. */
export function CtaBand({
  title = "Siap memulai perjalanan?",
  body = "Ceritakan rencana Anda. Kami bantu memilih paket, mengatur jadwal, dan menyiapkan segala sesuatunya.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-deep py-20 text-paper-2 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-paper-2/75">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/konsultasi" size="lg" variant="onDark">
              Konsultasi
            </Button>
            <ButtonExternal
              href={waLink()}
              size="lg"
              variant="ghost"
              className="text-paper-2 hover:bg-paper-2/10"
            >
              <Phone size={17} weight="fill" />
              {site.contact.phoneDisplay}
            </ButtonExternal>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
