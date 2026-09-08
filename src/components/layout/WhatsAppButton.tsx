import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waLink } from "@/lib/site";

/** Persistent WhatsApp entry point. Lives above the footer z-order, below the mobile menu. */
export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp PGS Tour"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-paper-2 shadow-lift transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <WhatsappLogo size={22} weight="fill" />
      <span className="hidden sm:inline">Chat kami</span>
    </a>
  );
}
