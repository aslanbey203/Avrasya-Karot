import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-white">
            AVRASYA <span className="text-orange-500">KAROT</span>
          </h2>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-black text-white">Hizmetler</h3>
          <div className="mt-4 grid gap-3 text-slate-400">
            <span>Karot Delme</span>
            <span>Beton Kesme</span>
            <span>Duvar Kesme</span>
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">İletişim</h3>
          <div className="mt-4 grid gap-3 text-slate-400">
            <a href={`tel:+${siteConfig.operation.phone}`} className="inline-flex items-center gap-2 hover:text-orange-500">
              <Phone size={18} /> {siteConfig.operation.displayPhone}
            </a>
            <a href={whatsappUrl} target="_blank" className="inline-flex items-center gap-2 hover:text-green-500">
              <MessageCircle size={18} /> {siteConfig.sales.displayPhone}
            </a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 px-5 pt-6 text-sm text-slate-500 md:px-8">
        © 2026 {siteConfig.company}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
