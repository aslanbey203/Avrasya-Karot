"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

type LightboxImage = {
  title: string;
  image: string;
};

type LightboxProps = {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-4">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-orange-500"
        aria-label="Kapat"
      >
        <X size={28} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-orange-500 md:left-8"
        aria-label="Önceki fotoğraf"
      >
        <ChevronLeft size={34} />
      </button>

      <div className="w-full max-w-6xl">
        <div className="relative h-[70vh] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl">
          <Image
            src={currentImage.image}
            alt={currentImage.title}
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-2xl font-black text-white">
            {currentImage.title}
          </h3>

          <p className="mt-2 text-slate-400">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-orange-500 md:right-8"
        aria-label="Sonraki fotoğraf"
      >
        <ChevronRight size={34} />
      </button>
    </div>
  );
}