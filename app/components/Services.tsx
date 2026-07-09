import { Drill, Hammer, Construction } from "lucide-react";

const services = [
  {
    icon: Drill,
    title: "Karot Delme",
    description:
      "Betonarme döşeme, perde beton ve duvarlarda tesisat geçişleri için hassas karot delme uygulamaları.",
  },
  {
    icon: Construction,
    title: "Beton Kesme",
    description:
      "Döşeme, perde ve betonarme alanlarda kontrollü, hızlı ve temiz beton kesme hizmeti.",
  },
  {
    icon: Hammer,
    title: "Duvar Kesme",
    description:
      "Kapı, pencere, şaft ve geçiş boşlukları için profesyonel duvar kesme çözümleri.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            Hizmetlerimiz
          </span>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Beton Delme ve Kesme Çözümleri
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            AVRASYA KAROT olarak İstanbul genelinde karot delme, beton kesme ve duvar kesme işlerinde hızlı teklif ve profesyonel saha uygulaması sunuyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/80"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition group-hover:scale-110">
                  <Icon size={34} />
                </div>
                <h3 className="text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
