import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/site";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Travel Umrah Serang, Banten`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  keywords: [
    "travel umrah",
    "umrah Serang",
    "umrah Banten",
    "paket umrah",
    "umrah plus turki",
    "PGS Tour",
    "Pesona Global Syiarbaitullah",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: `${site.name} - Mengantar Langkah, Memaknai Ibadah`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${hanken.variable} h-full antialiased`}>
      <body className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
