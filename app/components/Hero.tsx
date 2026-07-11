import { CheckCircle, MessageCircle, Phone, ShieldCheck, Timer } from "lucide-react";
import { siteConfig, whatsappUrl } from "../lib/site";

const highlights = ["Karot Delme", "Beton Kesme", "Duvar Kesme"];

export default function Hero() {
  return (
    <section id="anasayfa" className="relative overflow-hidden bg-slate-950 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_30%),linear-gradient(120deg,#020617,#0f172a,#020617)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-bold text-orange-400">
            {siteConfig.location}
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            BETONUN GÜCÜNÜ
            <br />
            <span className="text-orange-500">PROFESYONELLİKLE</span>
            <br />
            ŞEKİLLENDİRİYORUZ
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {siteConfig.description} Modern ekipman, temiz işçilik ve hızlı saha organizasyonu ile güvenilir çözümler sunuyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-2xl bg-green-600 px-7 py-4 font-bold text-white shadow-xl transition hover:scale-105 hover:bg-green-700"
            >
              <MessageCircle size={22} />
              WhatsApp Teklif
            </a>

            <a
              href={`tel:+${siteConfig.operation.phone}`}
              className="inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-7 py-4 font-bold text-white shadow-xl transition hover:scale-105 hover:bg-orange-600"
            >
              <Phone size={22} />
              Bizi Arayın
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-slate-200">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="text-orange-500" size={22} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-orange-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950 p-8">
              <div className="grid gap-5">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
                  <div className="text-7xl">🏗️</div>
                  <h2 className="mt-7 text-3xl font-black text-white">
                    Profesyonel Ekipman
                  </h2>
                  <p className="mt-4 leading-7 text-slate-400">
                    Karot delme ve beton kesme işlerinizde hassas uygulama, kontrollü çalışma ve temiz teslim hedefliyoruz.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
                    <ShieldCheck className="text-orange-500" />
                    <p className="mt-3 font-bold text-white">Güvenli Uygulama</p>
                  </div>
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
                    <Timer className="text-orange-500" />
                    <p className="mt-3 font-bold text-white">Hızlı Teklif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
