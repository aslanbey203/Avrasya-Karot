import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getService, services } from "../../lib/services";
import { siteConfig, whatsappUrl } from "../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: `${service.title} İstanbul`, description: service.description, alternates: { canonical: `/hizmetler/${service.slug}` } };
}

export default async function ServicePage({params}: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <main className="min-h-screen bg-slate-950 text-white"><Header/><section className="pt-32"><div className="mx-auto max-w-5xl px-5 py-20 lg:px-8"><Link href="/#hizmetler" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500"><ArrowLeft size={18}/> Tüm hizmetler</Link><p className="mt-10 text-sm font-black uppercase tracking-[0.25em] text-orange-500">AVRASYA KAROT</p><h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">{service.title}</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">{service.description}</p><div className="mt-10 grid gap-4 sm:grid-cols-3">{service.highlights.map(h => <div key={h} className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 p-5 font-bold"><CheckCircle2 className="text-orange-500"/>{h}</div>)}</div><div className="mt-10 flex flex-wrap gap-4"><a href={whatsappUrl} className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold"><MessageCircle/> WhatsApp Teklif</a><a href={`tel:+${siteConfig.operation.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold"><Phone/> Bizi Arayın</a></div></div></section><section className="bg-white py-20 text-slate-950"><div className="mx-auto max-w-5xl px-5 lg:px-8"><h2 className="text-3xl font-black">Sıkça sorulan sorular</h2><div className="mt-8 grid gap-5">{service.faqs.map(f => <article key={f.question} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-black">{f.question}</h3><p className="mt-3 leading-7 text-slate-600">{f.answer}</p></article>)}</div></div></section><Footer/></main>;
}
