import Link from "next/link";
import { ArrowUpRight, Building2, Camera, CircleDot, Droplets, Scissors, Wrench } from "lucide-react";
import { services } from "../lib/services";

const icons = [CircleDot, Scissors, Building2, Camera, Droplets, Wrench];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-white py-24 text-slate-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">Hizmetlerimiz</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Yapı ve altyapı için tek noktadan profesyonel çözüm</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">İhtiyacınızı doğru analiz eder, saha koşullarına uygun ekipman ve yöntemle uygulamayı planlarız.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Link key={service.slug} href={`/hizmetler/${service.slug}`} className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-500 text-white"><Icon size={28}/></span>
                  <ArrowUpRight className="text-slate-400 transition group-hover:text-orange-500"/>
                </div>
                <h3 className="mt-7 text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.short}</p>
                <span className="mt-7 inline-block font-bold text-orange-600">Detaylı incele</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
