import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "AVRASYA KAROT | Karot, Beton Kesme ve Kanalizasyon Hizmetleri",
    template: "%s | AVRASYA KAROT",
  },
  description: siteConfig.description,
  keywords: [
    "İstanbul karot",
    "karot delme",
    "beton kesme",
    "duvar kesme",
    "kanalizasyon görüntüleme",
    "kanalizasyon temizleme",
    "kanalizasyon tıkanıklık açma",
    "gider kamerası",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AVRASYA KAROT",
    description: siteConfig.description,
    url: "/",
    siteName: "AVRASYA KAROT",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero/team-van.png",
        width: 1536,
        height: 1024,
        alt: "Avrasya Karot ekibi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVRASYA KAROT",
    description: siteConfig.description,
    images: ["/images/hero/team-van.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.company,
    url: siteConfig.siteUrl,
    telephone: `+${siteConfig.operation.phone}`,
    areaServed: "İstanbul",
    description: siteConfig.description,
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 font-sans antialiased">

        {/* Google Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18397294400"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              gtag('js', new Date());
              gtag('config', 'AW-18397294400');

              /*
               * Google Ads - Telefon Tıklama Dönüşümü
               */
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) !== 'undefined') {
                    window.location.href = url;
                  }
                };

                gtag('event', 'conversion', {
                  'send_to': 'AW-18397294400/7rM0CPHD-uMcEMDewcRE',
                  'value': 1.0,
                  'currency': 'TRY',
                  'event_callback': callback
                });

                return false;
              }

              /*
               * AVRASYA KAROT telefon numarası tıklama takibi
               * 05511062229
               */
              document.addEventListener('click', function(event) {
                var target = event.target;

                if (!target) return;

                var link = target.closest('a[href^="tel:"]');

                if (!link) return;

                var phone = link.getAttribute('href');

                if (!phone) return;

                var cleanPhone = phone
                  .replace('tel:', '')
                  .replace(/\\\\D/g, '');

                if (cleanPhone === '05511062229') {
                  event.preventDefault();

                  gtag_report_conversion(phone);
                }
              });
            `,
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness),
          }}
        />

        {children}
      </body>
    </html>
  );
}