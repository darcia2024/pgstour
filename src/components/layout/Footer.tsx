import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { nav, primaryCta, site, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-2 text-paper-2">
      <Container className="py-10 sm:py-12">
        <p className="headline mb-8 max-w-2xl text-2xl leading-[1.05] text-paper-2 sm:mb-10 sm:text-3xl">
          Mengantar langkah,{" "}
          <span className="text-paper-2/45">memaknai ibadah.</span>
        </p>
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-3.5 text-xs leading-relaxed text-paper-2/70 sm:text-sm">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={site.social.instagram} label="Instagram">
                <InstagramLogo size={18} weight="fill" />
              </SocialLink>
              <SocialLink href={site.social.facebook} label="Facebook">
                <FacebookLogo size={18} weight="fill" />
              </SocialLink>
              <SocialLink href={site.social.tiktok} label="TikTok">
                <TiktokLogo size={18} weight="fill" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-2/50">
              Jelajahi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper-2/80 transition-colors hover:text-paper-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={primaryCta.href}
                  className="text-paper-2/80 transition-colors hover:text-paper-2"
                >
                  {primaryCta.label}
                </Link>
              </li>
            </ul>

            <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-paper-2/50">
              Pembayaran
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-paper-2/80">
              {site.payment.bank} {site.payment.accountNumber}
              <br />
              <span className="text-paper-2/55">a.n. {site.payment.accountName}</span>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-2/50">
              Hubungi
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-paper-2/80">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent-soft" />
                <span>{site.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent-soft" />
                <span>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-paper-2"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                  <br />
                  <a
                    href={`tel:+${site.contact.phoneAltE164}`}
                    className="hover:text-paper-2"
                  >
                    {site.contact.phoneAltDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <EnvelopeSimple
                  size={18}
                  className="mt-0.5 shrink-0 text-accent-soft"
                />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-paper-2"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-paper-2/50">
              {site.contact.hours}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2.5 border-t border-paper-2/12 pt-5 text-xs text-paper-2/50 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. {site.legalName}.
          </p>
          <p>{site.legal.ppiu}</p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-2/15 text-paper-2/80 transition-colors hover:border-accent-soft hover:text-paper-2"
    >
      {children}
    </a>
  );
}
