"use client";

import { useEffect, useState } from "react";

type GalleryImage = {
  title: string;
  image: string;
};

type LightboxProps = {
  images: GalleryImage[];
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
  const [zoom, setZoom] = useState(1);

  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
    setZoom(1);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrev();
      }

      if (event.key === "+") {
        zoomIn();
      }

      if (event.key === "-") {
        zoomOut();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const currentImage = images[activeIndex];

  function zoomIn() {
    setZoom((value) => Math.min(value + 0.25, 3));
  }

  function zoomOut() {
    setZoom((value) => Math.max(value - 0.25, 0.5));
  }

  function resetZoom() {
    setZoom(1);
  }

  function goNext() {
    setActiveIndex((value) => {
      const next = (value + 1) % images.length;
      return next;
    });

    setZoom(1);
  }

  function goPrev() {
    setActiveIndex((value) => {
      const previous =
        (value - 1 + images.length) % images.length;

      return previous;
    });

    setZoom(1);
  }

  function selectImage(index: number) {
    setActiveIndex(index);
    setZoom(1);
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Fotoğraf önizleme"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* ÜST BAR */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md sm:px-6">

        <div className="text-sm font-semibold text-white">
          {activeIndex + 1} / {images.length}
        </div>

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 0.5}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl font-bold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Fotoğrafı küçült"
          >
            −
          </button>

          <button
            type="button"
            onClick={resetZoom}
            className="hidden h-10 rounded-xl bg-white/10 px-3 text-xs font-semibold text-white transition hover:bg-white/20 sm:block"
          >
            Sıfırla
          </button>

          <span className="hidden min-w-[50px] text-center text-xs text-white/70 sm:block">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 3}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl font-bold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Fotoğrafı büyüt"
          >
            +
          </button>

          <button
            type="button"
            onClick={onClose}
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/90 text-xl text-white transition hover:bg-red-500"
            aria-label="Kapat"
          >
            ×
          </button>

        </div>
      </div>

      {/* ANA FOTOĞRAF ALANI */}
      <div className="absolute inset-0 flex items-center justify-center px-4 pb-28 pt-20 sm:px-20">

        {/* SOL BUTON */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-md transition hover:bg-white/20 sm:left-5"
          aria-label="Önceki fotoğraf"
        >
          ‹
        </button>

        {/* FOTOĞRAF */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden">

          <img
            src={currentImage.image}
            alt="Avrasya Karot uygulama fotoğrafı"
            draggable={false}
            className="max-h-full max-w-full select-none object-contain transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${zoom})`,
            }}
          />

        </div>

        {/* SAĞ BUTON */}
        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-md transition hover:bg-white/20 sm:right-5"
          aria-label="Sonraki fotoğraf"
        >
          ›
        </button>
      </div>

      {/* ALT ÖNİZLEME ŞERİDİ */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/70 px-3 py-3 backdrop-blur-md sm:px-6">

        <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 overflow-x-auto pb-1">

          {images.map((item, index) => (
            <button
              key={`${item.image}-${index}`}
              type="button"
              onClick={() => selectImage(index)}
              className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-24 ${
                index === activeIndex
                  ? "border-orange-500 opacity-100"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
              aria-label={`${index + 1}. fotoğrafı göster`}
            >
              <img
                src={item.image}
                alt=""
                draggable={false}
                className="h-full w-full object-cover"
              />

              {index === activeIndex && (
                <span className="absolute inset-0 border-2 border-orange-400" />
              )}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}