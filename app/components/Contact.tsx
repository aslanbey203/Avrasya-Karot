import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "../lib/site";

export default function Contact() {
  return (
    <section id="iletisim" className="bg-slate-900 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            İletişim
          </span>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Hızlı Teklif Alın
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Arama hattı saha ve operasyon için ortağına, WhatsApp teklif hattı sana yönlendirilmiştir.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="rounded-3xl border border-orange-500/30 bg-slate-950 p-6">
              <h3 className="text-xl font-black text-orange-500">{siteConfig.operation.title}</h3>
              <p className="mt-2 text-lg font-bold text-white">{siteConfig.operation.name}</p>
              <p className="mt-2 text-slate-400">Saha organizasyonu ve doğrudan arama hattı</p>
              <a href={`tel:+${siteConfig.operation.phone}`} className="mt-5 inline-flex items-center gap-3 text-xl font-black text-white">
                <Phone className="text-orange-500" />
                {siteConfig.operation.displayPhone}
              </a>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-slate-950 p-6">
              <h3 className="text-xl font-black text-green-500">{siteConfig.sales.title}</h3>
              <p className="mt-2 text-lg font-bold text-white">{siteConfig.sales.name}</p>
              <p className="mt-2 text-slate-400">Fiyat teklifi, fotoğraf gönderimi ve mesajlaşma hattı</p>
              <a href={whatsappUrl} target="_blank" className="mt-5 inline-flex items-center gap-3 text-xl font-black text-white">
                <MessageCircle className="text-green-500" />
                {siteConfig.sales.displayPhone}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <MapPin className="text-orange-500" />
                <p className="mt-4 font-bold text-white">{siteConfig.location}</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <Clock className="text-orange-500" />
                <p className="mt-4 font-bold text-white">{siteConfig.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-slate-800 bg-slate-950 p-7 shadow-2xl md:p-8">
          <h3 className="text-2xl font-black text-white">Teklif Formu</h3>
          <p className="mt-2 text-slate-400">Form şimdilik görsel amaçlıdır. Gönderim için WhatsApp butonunu kullanın.</p>

          <div className="mt-7 grid gap-5">
            <input type="text" placeholder="Ad Soyad" className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-500" />
            <input type="tel" placeholder="Telefon Numaranız" className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-500" />
            <select className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-500">
              <option>Hizmet Seçiniz</option>
              <option>Karot Delme</option>
              <option>Beton Kesme</option>
              <option>Duvar Kesme</option>
            </select>
            <textarea placeholder="İş detayını yazın..." rows={5} className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-500" />
            <a href={whatsappUrl} target="_blank" className="rounded-2xl bg-green-600 px-8 py-4 text-center font-black text-white transition hover:bg-green-700">
              WhatsApp'tan Teklif Al
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3 text-slate-400">
            <Mail className="text-orange-500" size={20} />
            {siteConfig.email}
          </div>
        </form>
      </div>
    </section>
  );
}
