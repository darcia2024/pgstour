import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Konsultasi",
  description:
    "Ceritakan rencana perjalanan umrah Anda. Tim PGS Tour di Serang, Banten siap membantu memilih paket dan mengatur jadwal.",
};

export default function KonsultasiPage() {
  return (
    <>
      <PageHeader
        label="Konsultasi"
        title="Ceritakan perjalanan yang Anda niatkan"
        intro="Isi formulir di bawah atau hubungi kami langsung. Tidak ada biaya untuk berkonsultasi, dan Anda tidak terikat apa pun sampai memutuskan mendaftar."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-10">
            <div className="min-w-0">
              <ConsultationForm />
            </div>

            <aside className="space-y-8">
              <div>
                <h2 className="font-display text-xl text-ink">Kontak langsung</h2>
                <ul className="mt-4 space-y-4 text-sm text-ink-soft">
                  <li className="flex gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                      {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <EnvelopeSimple size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                    <a href={`mailto:${site.contact.email}`} className="hover:text-ink">
                      {site.contact.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <InstagramLogo size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                    <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                      {site.social.instagramHandle}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl text-ink">Kantor</h2>
                <ul className="mt-4 space-y-4 text-sm text-ink-soft">
                  <li className="flex gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                    <span>{site.contact.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-brand-bright" />
                    <span>{site.contact.hours}</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  title="Peta lokasi kantor PGS Tour"
                  src="https://www.google.com/maps?q=Kaligandu,+Kota+Serang,+Banten&output=embed"
                  className="h-52 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
