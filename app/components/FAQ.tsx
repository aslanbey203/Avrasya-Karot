"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Karot delme işlemi binaya zarar verir mi?",
    answer:
      "Doğru ekipman ve uygun uygulama ile yapılan karot delme kontrollü bir işlemdir. Taşıyıcı kolon, kiriş veya statik açıdan kritik alanlarda işlem yapılmadan önce uzman görüşü alınmalıdır.",
  },
  {
    question: "Karot delme fiyatı nasıl belirlenir?",
    answer:
      "Fiyat; delik çapı, beton kalınlığı, uygulama yeri, erişim durumu ve işin aciliyetine göre değişir. En doğru fiyat için alan fotoğrafı ve ölçü bilgisi gerekir.",
  },
  {
    question: "Beton kesme hangi alanlarda yapılır?",
    answer:
      "Kapı boşluğu, pencere boşluğu, şaft açma, tesisat geçişi ve betonarme alan düzenlemelerinde beton kesme uygulanabilir.",
  },
  {
    question: "Duvar kesme işlemi ne kadar sürer?",
    answer:
      "İşin ölçüsüne, duvar kalınlığına ve uygulama alanına göre değişir. Küçük ölçekli işler genellikle aynı gün içinde tamamlanabilir.",
  },
  {
    question: "İstanbul’un hangi bölgelerine hizmet veriyorsunuz?",
    answer:
      "İstanbul Avrupa ve Anadolu Yakası genelinde karot delme, beton kesme ve duvar kesme hizmetleri sunuyoruz.",
  },
  {
    question: "WhatsApp üzerinden teklif alabilir miyim?",
    answer:
      "Evet. İş yapılacak alanın fotoğrafını, ölçü bilgisini ve konumu WhatsApp üzerinden göndererek hızlı teklif alabilirsiniz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Sıkça Sorulan Sorular
          </span>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Merak Edilenler
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`text-orange-500 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-800 px-6 py-5 leading-7 text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}