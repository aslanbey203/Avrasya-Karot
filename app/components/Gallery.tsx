"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const images = [
  {
    title: "Karot Delme",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    title: "Beton Kesme",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    title: "Duvar Kesme",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    title: "AVRASYA KAROT",
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    title: "Profesyonel Ekip",
    image: "/images/gallery/gallery-5.jpg",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="bg-slate-950 py-24">

        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-14 text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Galeri
            </span>

            <h2 className="mt-4 text-5xl font-black text-white">
              Çalışmalarımız
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
              AVRASYA KAROT ekibinden uygulama görüntüleri.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {images.map((item, index) => (

              <button
                key={item.image}
                onClick={() => setSelected(index)}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-left shadow-xl transition duration-500 hover:-translate-y-2 hover:border-orange-500"
              >

                <div className="relative h-[380px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6">

                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-orange-400">
                      Fotoğrafı büyütmek için tıklayın
                    </p>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>

      <Lightbox
        images={images}
        currentIndex={selected ?? 0}
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        onNext={() =>
          setSelected((prev) =>
            prev === null ? 0 : (prev + 1) % images.length
          )
        }
        onPrev={() =>
          setSelected((prev) =>
            prev === null
              ? 0
              : (prev - 1 + images.length) % images.length
          )
        }
      />
    </>
  );
}