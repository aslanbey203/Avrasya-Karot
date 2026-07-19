"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#neden-biz", label: "Neden Biz" },
  { href: "/#galeri", label: "Galeri" },
  { href: "/#iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-orange-500/30 bg-slate-900">
            <Image src="/images/logo/logo.png" alt="Avrasya Karot" fill sizes="48px" className="object-contain p-1" priority />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-wide text-white">AVRASYA <b className="text-orange-500">KAROT</b></span>
            <span className="mt-1 block text-[10px] font-bold tracking-[0.28em] text-slate-400">İSTANBUL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-orange-500">{link.label}</Link>)}
        </nav>

        <a href={`tel:+${siteConfig.operation.phone}`} className="hidden items-center gap-2 rounded-xl bg-orange-700 px-5 py-3 font-bold text-white transition hover:bg-orange-800 lg:flex">
          <Phone size={18} /> Bizi Arayın
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid min-h-11 min-w-11 place-items-center rounded-lg border border-slate-700 text-white lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-5 lg:hidden">
          <nav id="mobile-navigation" aria-label="Mobil menü" className="flex flex-col gap-2">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-slate-200 hover:bg-slate-900 hover:text-orange-500">{link.label}</Link>)}
            <a href={`tel:+${siteConfig.operation.phone}`} className="mt-2 rounded-xl bg-orange-700 px-4 py-3 text-center font-bold text-white">Bizi Arayın</a>
          </nav>
        </div>
      )}
    </header>
  );
}
