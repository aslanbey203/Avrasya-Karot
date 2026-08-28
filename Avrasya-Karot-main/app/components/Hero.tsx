import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "../lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.16),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <span className="inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400">İstanbul Avrupa & Anadolu Yakası</span>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
            BETONUN GÜCÜNÜ <span className="text-orange-500">PROFESYONELLİKLE</span> ŞEKİLLENDİRİYORUZ
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">Karot delme, beton ve duvar kesme ile kanalizasyon görüntüleme, temizleme ve tıkanıklık açma hizmetlerinde hızlı, kontrollü ve güvenilir çözümler.</p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:gap-4">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-4 font-bold text-white transition hover:bg-green-800 sm:px-6"><MessageCircle size={20}/> WhatsApp Teklif</a>
            <a href={`tel:+${siteConfig.operation.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-700 px-4 font-bold text-white transition hover:bg-orange-800 sm:px-6"><Phone size={20}/> Bizi Arayın</a>
            <a href="#hizmetler" className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 font-bold text-white transition hover:border-orange-500 sm:col-auto sm:px-6"><ArrowRight size={20}/> Hizmetleri İncele</a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["Kontrollü uygulama", "Hızlı teklif", "İstanbul geneli"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-300"><CheckCircle2 size={18} className="text-orange-500"/>{item}</div>)}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-orange-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
            <Image src="/images/hero/team-van.png" alt="Avrasya Karot ekibi ve hizmet aracı" width={1536} height={1024} sizes="(max-width: 1023px) calc(100vw - 40px), 40vw" className="h-[420px] w-full object-cover sm:h-[520px]" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">AVRASYA KAROT</p>
              <p className="mt-2 text-2xl font-black text-white">Sahada çözüm, işte güven.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
