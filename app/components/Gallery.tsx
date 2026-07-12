"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const images = [
  { title: "Karot Delme Uygulamaları", image: "/images/Gallery/gallery-1.jpg" },
  { title: "Saha ve Ekip Çalışmaları", image: "/images/Gallery/gallery-2.jpg" },
  { title: "Profesyonel Karot Çözümleri", image: "/images/Gallery/gallery-3.jpg" },
  { title: "Uygulama Alanları", image: "/images/Gallery/gallery-4.jpg" },
  { title: "Avrasya Karot Ekibi", image: "/images/Gallery/gallery-5.jpg" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <section id="galeri" className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center"><span className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">Galeri</span><h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Uygulama görselleri</h2><p className="mx-auto mt-5 max-w-2xl text-slate-400">Hizmetlerimizi tanıtan görselleri detaylı incelemek için tıklayın.</p></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((item,index) => <button key={item.image} onClick={() => setSelected(index)} className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-left ${index === 0 ? "md:col-span-2" : ""}`}><div className="relative h-80"><Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"/><h3 className="absolute bottom-0 p-6 text-xl font-black text-white">{item.title}</h3></div></button>)}
          </div>
        </div>
      </section>
      <Lightbox images={images} currentIndex={selected ?? 0} isOpen={selected !== null} onClose={() => setSelected(null)} onNext={() => setSelected((p) => p === null ? 0 : (p+1)%images.length)} onPrev={() => setSelected((p) => p === null ? 0 : (p-1+images.length)%images.length)} />
    </>
  );
}
