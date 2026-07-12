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
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4"><button onClick={onClose} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white"><X/></button><button onClick={onPrev} className="absolute left-3 top-1/2 rounded-full bg-white/10 p-3 text-white md:left-7"><ChevronLeft size={32}/></button><div className="w-full max-w-6xl"><div className="relative h-[75vh]"><Image src={item.image} alt={item.title} fill className="object-contain" priority/></div><p className="mt-3 text-center font-bold text-white">{item.title} · {currentIndex+1}/{images.length}</p></div><button onClick={onNext} className="absolute right-3 top-1/2 rounded-full bg-white/10 p-3 text-white md:right-7"><ChevronRight size={32}/></button></div>;
}
