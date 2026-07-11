import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avrasya-karot.vercel.app"),

  title: {
    default:
      "AVRASYA KAROT | İstanbul Karot Delme, Beton Kesme ve Kanalizasyon Hizmetleri",
    template: "%s | AVRASYA KAROT",
  },

  description:
    "İstanbul Avrupa ve Anadolu Yakası'nda karot delme, beton kesme, duvar kesme, kanalizasyon görüntüleme ve kanalizasyon temizleme hizmetleri. Hızlı teklif ve profesyonel çözümler.",

  keywords: [
    "İstanbul karot",
    "karot delme",
    "beton kesme",
    "duvar kesme",
    "beton delme",
    "kanalizasyon görüntüleme",
    "kanalizasyon temizleme",
    "robotla kanal açma",
    "gider kamerası",
    "karot firması",
    "İstanbul karotçu",
  ],

  applicationName: "AVRASYA KAROT",

  authors: [
    {
      name: "AVRASYA KAROT",
    },
  ],

  creator: "AVRASYA KAROT",
  publisher: "AVRASYA KAROT",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "AVRASYA KAROT",
    description:
      "İstanbul'da karot delme, beton kesme, duvar kesme, kanalizasyon görüntüleme ve kanalizasyon temizleme hizmetleri.",
    url: "/",
    siteName: "AVRASYA KAROT",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.png",
        alt: "AVRASYA KAROT logosu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AVRASYA KAROT",
    description:
      "Karot delme, beton kesme, duvar kesme ve kanalizasyon hizmetleri.",
    images: ["/images/logo/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}