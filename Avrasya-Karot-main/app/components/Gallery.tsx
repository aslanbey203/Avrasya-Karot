"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Lightbox from "./Lightbox";

const BUCKET = "site-images";
const FOLDER = "anasayfa";

type GalleryImage = {
  title: string;
  image: string;
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGalleryImages();
  }, []);

  async function loadGalleryImages() {
    setLoading(true);

    const { data, error } = await supabase.storage
      .from(BUCKET)
      .list(FOLDER, {
        limit: 100,
        sortBy: {
          column: "created_at",
          order: "desc",
        },
      });

    if (error) {
      console.error("Galeri yüklenemedi:", error);
      setLoading(false);
      return;
    }

    const galleryImages: GalleryImage[] = (data ?? [])
      .filter((file) => {
        const name = file.name.toLowerCase();

        return (
          name.endsWith(".jpg") ||
          name.endsWith(".jpeg") ||
          name.endsWith(".png") ||
          name.endsWith(".webp") ||
          name.endsWith(".avif")
        );
      })
      .map((file) => {
        const { data: publicUrlData } = supabase.storage
          .from(BUCKET)
          .getPublicUrl(`${FOLDER}/${file.name}`);

        return {
          title: "",
          image: publicUrlData.publicUrl,
        };
      });

    setImages(galleryImages);
    setLoading(false);
  }

  return (
    <>
      <section
        id="galeri"
        className="bg-slate-950 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* BAŞLIK */}
          <div className="text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
              Galeri
            </span>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Uygulama görselleri
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Gerçek saha çalışmalarımızdan uygulama görüntüleri.
            </p>
          </div>

          {/* YÜKLENİYOR */}
          {loading && (
            <div className="mt-10 text-center text-sm text-slate-400">
              Galeri yükleniyor...
            </div>
          )}

          {/* FOTOĞRAF YOK */}
          {!loading && images.length === 0 && (
            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
              <p className="text-slate-400">
                Henüz galeri fotoğrafı eklenmemiş.
              </p>
            </div>
          )}

          {/* GALERİ */}
          {!loading && images.length > 0 && (
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">

              {images.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-label="Fotoğrafı büyüt"
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-left shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src={item.image}
                      alt="Avrasya Karot uygulama çalışması"
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    />

                    {/* HAFİF KARARTMA */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />

                    {/* BÜYÜT İKONU */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                          <path d="M11 8v6" />
                          <path d="M8 11h6" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </button>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* LIGHTBOX */}
      <Lightbox
        images={images}
        currentIndex={selected ?? 0}
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        onNext={() =>
          setSelected((current) =>
            current === null
              ? 0
              : (current + 1) % images.length
          )
        }
        onPrev={() =>
          setSelected((current) =>
            current === null
              ? 0
              : (current - 1 + images.length) % images.length
          )
        }
      />
    </>
  );
}