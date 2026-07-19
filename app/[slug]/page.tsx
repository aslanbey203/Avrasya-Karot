import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getServiceArea, serviceAreas } from "../lib/areas";
import { siteConfig, whatsappUrl } from "../lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  const description = `${area.name} karot delme, beton kesme ve duvar kesme hizmeti. ${area.side} genelinde hızlı keşif ve profesyonel ekipmanla kontrollü uygulama.`;
  return {
    title: `${area.name} Karot | Karot Delme ve Beton Kesme`,
    description,
    keywords: [`${area.name} karot`, `${area.name} karotçu`, `${area.name} beton kesme`, `${area.name} karot delme`],
    alternates: { canonical: `/${area.slug}` },
    openGraph: { title: `${area.name} Karot Hizmeti`, description, url: `/${area.slug}`, locale: "tr_TR", type: "website" },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const faqs = [
    { question: `${area.name} bölgesine ne kadar sürede gelebilirsiniz?`, answer: "Ekip uygunluğu ve trafik durumuna göre planlama yapılır. Konum, fotoğraf ve iş ölçülerini WhatsApp üzerinden ilettiğinizde en yakın uygun zaman paylaşılır." },
    { question: `${area.name} karot fiyatı nasıl belirlenir?`, answer: "Fiyat; delik çapı ve derinliği, betonun yapısı, adet, çalışma yüksekliği, su ve elektrik erişimi gibi saha koşullarına göre belirlenir." },
    { question: "Teklif için hangi bilgileri göndermeliyim?", answer: `İşin bulunduğu ${area.name} mahallesini, yüzey fotoğrafını, delik veya kesim ölçüsünü ve mümkünse beton kalınlığını göndermeniz hızlı değerlendirme sağlar.` },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: `${area.name} Karot Delme ve Beton Kesme`, provider: { "@type": "HomeAndConstructionBusiness", name: siteConfig.company, telephone: `+${siteConfig.operation.phone}`, url: siteConfig.siteUrl }, areaServed: { "@type": "AdministrativeArea", name: `${area.name}, İstanbul` }, serviceType: ["Karot delme", "Beton kesme", "Duvar kesme"] },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.siteUrl }, { "@type": "ListItem", position: 2, name: `${area.name} Karot`, item: `${siteConfig.siteUrl}/${area.slug}` }] },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <section className="pt-28">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <Link href="/#bolgeler" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500"><ArrowLeft size={18} /> Hizmet bölgeleri</Link>
          <div className="mt-9 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-orange-500"><MapPin size={18} /> İstanbul {area.side}</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{area.name} Karot Delme ve Beton Kesme</h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">{area.localFocus}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href={whatsappUrl} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold"><MessageCircle /> WhatsApp Teklif</a>
                <a href={`tel:+${siteConfig.operation.phone}`} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold"><Phone /> {siteConfig.operation.displayPhone}</a>
              </div>
            </div>
            <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <h2 className="text-xl font-black">{area.name} çevresinde hizmet</h2>
              <ul className="mt-5 grid gap-3 text-slate-300">{area.neighborhoods.map((neighborhood) => <li key={neighborhood} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-orange-500" /> {neighborhood}</li>)}</ul>
              <p className="mt-5 text-sm leading-6 text-slate-400">Listede olmayan mahalleler için de İstanbul geneli ekip planlaması yapılır.</p>
            </aside>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h2 className="text-3xl font-black">{area.name} bölgesinde sunduğumuz hizmetler</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{["Karot Delme", "Beton Kesme", "Duvar Kesme"].map((service) => <article key={service} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-black">{service}</h3><p className="mt-3 leading-7 text-slate-600">Ölçü ve saha koşulları değerlendirilerek uygun ekipmanla kontrollü uygulama yapılır.</p></article>)}</div>
          <h2 className="mt-16 text-3xl font-black">Sıkça sorulan sorular</h2>
          <div className="mt-8 grid gap-5">{faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-black">{faq.question}</h3><p className="mt-3 leading-7 text-slate-600">{faq.answer}</p></article>)}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
