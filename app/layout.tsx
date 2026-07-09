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
  title: "AVRASYA KAROT | İstanbul Karot Delme, Beton Kesme, Duvar Kesme",
  description:
    "İstanbul Avrupa ve Anadolu Yakası'nda karot delme, beton kesme ve duvar kesme hizmetleri. WhatsApp üzerinden hızlı teklif alın.",
  keywords: [
    "İstanbul karot",
    "karot delme",
    "beton kesme",
    "duvar kesme",
    "karot firması",
    "İstanbul karotçu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
