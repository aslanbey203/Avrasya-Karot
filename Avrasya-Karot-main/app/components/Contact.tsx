"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig, whatsappUrl } from "../lib/site";

export default function Contact() {
  const trackWhatsAppConversion = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18397294400/Qa7vCIOX2ekcEMDewcRE",
        value: 1.0,
        currency: "TRY",
      });
    }
  };

  return (
    <section
      id="iletisim"
      className="bg-slate-900 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">

        <div>
          <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
            İletişim
          </span>

          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Hızlı teklif alın
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Fotoğraf, ölçü ve konum bilgilerini WhatsApp üzerinden gönderin;
            iş kapsamını hızlıca değerlendirelim.
          </p>

          <div className="mt-9 grid gap-5">

            <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
              <p className="text-sm font-bold text-orange-500">
                {siteConfig.operation.title}
              </p>

              <h3 className="mt-2 text-xl font-black text-white">
                {siteConfig.operation.name}
              </h3>

              <a
                href={`tel:+${siteConfig.operation.phone}`}
                className="mt-2 inline-flex min-h-11 items-center gap-2 py-2 font-bold text-white"
              >
                <Phone className="text-orange-500" />
                {siteConfig.operation.displayPhone}
              </a>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
              <p className="text-sm font-bold text-green-500">
                {siteConfig.sales.title}
              </p>

              <h3 className="mt-2 text-xl font-black text-white">
                {siteConfig.sales.name}
              </h3>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsAppConversion}
                className="mt-2 inline-flex min-h-11 items-center gap-2 py-2 font-bold text-white"
              >
                <MessageCircle className="text-green-500" />
                {siteConfig.sales.displayPhone}
              </a>
            </div>

          </div>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-950 p-5 sm:p-7">
          <h3 className="text-2xl font-black text-white">
            WhatsApp teklif formu
          </h3>

          <p className="mt-3 text-slate-400">
            Aşağıdaki bilgilerle WhatsApp üzerinden hızlıca iletişime geçin.
          </p>

          <div className="mt-7 space-y-4">

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
              1. Hizmet türünü belirtin
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
              2. İlçe ve açık konumu paylaşın
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
              3. Fotoğraf ve ölçü bilgisi gönderin
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsAppConversion}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 font-bold text-white hover:bg-green-800"
            >
              <Send size={20} />
              WhatsApp’tan Teklif Al
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}