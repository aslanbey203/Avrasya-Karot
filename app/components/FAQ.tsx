import { ChevronDown } from "lucide-react";

const faqs = [
  ["Teklif almak için hangi bilgiler gerekli?", "Hizmet türü, ilçe, çalışma alanının fotoğrafı, ölçüler ve mümkünse beton veya boru kalınlığı bilgisi hızlı ön değerlendirme sağlar."],
  ["Aynı gün hizmet veriyor musunuz?", "Ekip uygunluğu, konum ve iş kapsamına göre aynı gün yönlendirme yapılabilir."],
  ["Karot delme fiyatı nasıl belirlenir?", "Delik çapı, beton kalınlığı, donatı yoğunluğu, erişim ve çalışma koşullarına göre belirlenir."],
  ["Kanalizasyon görüntüleme neden yapılır?", "Tıkanıklık, kırık, çökme veya yabancı madde konumunu gereksiz kırma yapmadan tespit etmek için kullanılır."],
  ["İstanbul'un hangi bölgelerine hizmet veriyorsunuz?", "Avrupa ve Anadolu Yakası genelinde hizmet veriyoruz. Konuma göre ekip planlaması yapılır."],
  ["Taşıyıcı kolona delik açılır mı?", "Taşıyıcı elemanlarda statik proje ve yetkili teknik değerlendirme olmadan işlem yapılmamalıdır."],
];

export default function FAQ() {
  return <section className="bg-white py-16 text-slate-950 sm:py-20 lg:py-24"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="text-center"><span className="text-sm font-black uppercase tracking-[0.25em] text-orange-700">Sıkça Sorulan Sorular</span><h2 className="mt-4 text-4xl font-black sm:text-5xl">Merak edilenler</h2></div><div className="mt-10 space-y-4 sm:mt-12">{faqs.map(([q,a],i) => <details key={q} open={i === 0} className="group rounded-2xl border border-slate-200"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 p-5 font-bold"><span>{q}</span><ChevronDown aria-hidden="true" className="shrink-0 text-orange-700 transition group-open:rotate-180"/></summary><p className="border-t border-slate-200 px-5 py-5 leading-7 text-slate-600">{a}</p></details>)}</div></div></section>;
}
