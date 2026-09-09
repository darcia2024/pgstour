import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/site";

// Plus Jakarta Sans keeps body text covered (ES Rebond trial has no Regular).
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// ES Rebond Grotesque (TRIAL) - display / headings.
// NOTE(pgs): trial licence, evaluation only. Beli lisensi penuh sebelum produksi.
const rebond = localFont({
  variable: "--font-rebond",
  display: "swap",
  src: [
    { path: "./fonts/ESRebondGrotesque-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/ESRebondGrotesque-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/ESRebondGrotesque-Bold.otf", weight: "700", style: "normal" },
  ],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${rebond.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
