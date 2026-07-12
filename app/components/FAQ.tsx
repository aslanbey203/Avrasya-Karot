"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Teklif almak için hangi bilgiler gerekli?", "Hizmet türü, ilçe, çalışma alanının fotoğrafı, ölçüler ve mümkünse beton veya boru kalınlığı bilgisi hızlı ön değerlendirme sağlar."],
  ["Aynı gün hizmet veriyor musunuz?", "Ekip uygunluğu, konum ve iş kapsamına göre aynı gün yönlendirme yapılabilir."],
  ["Karot delme fiyatı nasıl belirlenir?", "Delik çapı, beton kalınlığı, donatı yoğunluğu, erişim ve çalışma koşullarına göre belirlenir."],
  ["Kanalizasyon görüntüleme neden yapılır?", "Tıkanıklık, kırık, çökme veya yabancı madde konumunu gereksiz kırma yapmadan tespit etmek için kullanılır."],
  ["İstanbul'un hangi bölgelerine hizmet veriyorsunuz?", "Avrupa ve Anadolu Yakası genelinde hizmet veriyoruz. Konuma göre ekip planlaması yapılır."],
  ["Taşıyıcı kolona delik açılır mı?", "Taşıyıcı elemanlarda statik proje ve yetkili teknik değerlendirme olmadan işlem yapılmamalıdır."],
];

export default function FAQ() {
  const [open,setOpen] = useState<number | null>(0);
  return <section className="bg-white py-24 text-slate-950"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="text-center"><span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Sıkça Sorulan Sorular</span><h2 className="mt-4 text-4xl font-black sm:text-5xl">Merak edilenler</h2></div><div className="mt-12 space-y-4">{faqs.map(([q,a],i) => <div key={q} className="rounded-2xl border border-slate-200"><button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-5 p-5 text-left font-bold"><span>{q}</span><ChevronDown className={`shrink-0 text-orange-500 transition ${open === i ? "rotate-180" : ""}`}/></button>{open === i && <p className="border-t border-slate-200 px-5 py-5 leading-7 text-slate-600">{a}</p>}</div>)}</div></div></section>;
}
