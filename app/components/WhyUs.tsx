import { Clock3, HardHat, ShieldCheck, Target } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Güvenli Uygulama", text: "İş güvenliği ve saha koşullarına uygun çalışma planı." },
  { icon: Target, title: "Doğru Tespit", text: "İşleme başlamadan önce ihtiyacı ve müdahale noktasını netleştirme." },
  { icon: HardHat, title: "Profesyonel Ekipman", text: "Hizmete ve yüzeye uygun makine, uç ve yardımcı ekipman kullanımı." },
  { icon: Clock3, title: "Hızlı İletişim", text: "Fotoğraf ve ölçü bilgileriyle hızlı ön değerlendirme ve teklif." },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">Neden Biz?</span>
          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Sahada netlik, uygulamada kontrol</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map(({icon: Icon, title, text}) => <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900 p-7"><Icon className="text-orange-500" size={34}/><h3 className="mt-6 text-xl font-black text-white">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}
