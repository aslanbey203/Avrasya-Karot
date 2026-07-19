"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type Item = { title: string; image: string };
type Props = { images: Item[]; currentIndex: number; isOpen: boolean; onClose: () => void; onNext: () => void; onPrev: () => void };

export default function Lightbox({images,currentIndex,isOpen,onClose,onNext,onPrev}: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") onNext(); if (e.key === "ArrowLeft") onPrev(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", key); };
  }, [isOpen,onClose,onNext,onPrev]);
  if (!isOpen) return null;
  const item = images[currentIndex];
  return <div role="dialog" aria-modal="true" aria-label={`${item.title} görseli`} className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4"><button type="button" aria-label="Galeriyi kapat" onClick={onClose} className="absolute right-4 top-4 grid min-h-12 min-w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X aria-hidden="true"/></button><button type="button" aria-label="Önceki görsel" onClick={onPrev} className="absolute left-2 top-1/2 grid min-h-12 min-w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-7"><ChevronLeft aria-hidden="true" size={32}/></button><div className="w-full max-w-6xl"><div className="relative h-[70vh] sm:h-[75vh]"><Image src={item.image} alt={item.title} fill sizes="100vw" className="object-contain" priority/></div><p className="mt-3 text-center font-bold text-white">{item.title} · {currentIndex+1}/{images.length}</p></div><button type="button" aria-label="Sonraki görsel" onClick={onNext} className="absolute right-2 top-1/2 grid min-h-12 min-w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-7"><ChevronRight aria-hidden="true" size={32}/></button></div>;
}
