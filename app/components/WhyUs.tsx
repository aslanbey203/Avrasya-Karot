import { BadgeCheck, Clock3, Drill, MapPinned, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Güvenilir Hizmet", text: "Saha şartlarına uygun, kontrollü ve dikkatli uygulama." },
  { icon: Drill, title: "Profesyonel Ekipman", text: "Karot ve kesim işleri için doğru ekipman seçimi." },
  { icon: Clock3, title: "Hızlı Çözüm", text: "Talebe göre hızlı dönüş ve planlı iş akışı." },
  { icon: BadgeCheck, title: "Temiz İşçilik", text: "Uygulama sonrası düzenli ve özenli teslim anlayışı." },
  { icon: MapPinned, title: "İstanbul Geneli", text: "Avrupa ve Anadolu Yakası'nda hizmet ağı." },
  { icon: Sparkles, title: "Net İletişim", text: "Arama ve WhatsApp hattı ayrı yönetilir; doğru kişiye ulaşırsınız." },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            Neden Biz?
          </span>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Neden AVRASYA KAROT?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            İşin doğru anlaşılması, doğru ekipmanla uygulanması ve zamanında teslim edilmesi için sade ve net bir çalışma modeli kullanıyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950 p-7 transition hover:border-orange-500/80">
                <Icon className="text-orange-500" size={40} />
                <h3 className="mt-6 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
