import Link from "next/link";
import { serviceAreas } from "../lib/areas";

export default function ServiceAreas() {
  return (
    <section id="bolgeler" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            Hizmet Bölgeleri
          </span>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            İstanbul Geneli Hizmet
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Avrupa ve Anadolu Yakası&apos;nda karot delme, beton kesme ve duvar kesme ihtiyaçları için hızlı iletişim.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {serviceAreas.map((area) => (
            <Link href={`/${area.slug}`} key={area.slug} className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 font-semibold text-slate-200 transition hover:border-orange-500 hover:text-white">
              <span className="mr-2 text-orange-500">✓</span>
              {area.name} Karot
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
