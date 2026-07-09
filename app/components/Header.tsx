"use client";

import Image from "next/image";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "../lib/site";

const navItems = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Bölgeler", href: "#bolgeler" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/85 shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#anasayfa" className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-1 shadow-xl">
            <Image
              src="/images/logo/logo.png"
              alt="Avrasya Karot Logo"
              fill
              sizes="64px"
              priority
              className="object-contain"
            />
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-black tracking-wide text-white md:text-2xl">
              AVRASYA <span className="text-orange-500">KAROT</span>
            </h1>
            <p className="mt-1 hidden text-xs font-semibold tracking-[0.3em] text-slate-400 sm:block">
              İSTANBUL
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-[16px] font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition duration-300 hover:scale-105 hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-green-500/40 px-5 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          <a
            href={`tel:+${siteConfig.operation.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-orange-600"
          >
            <Phone size={20} />
            Hemen Ara
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 text-white lg:hidden"
          aria-label="Menüyü aç"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-6 lg:hidden">
          <nav className="grid gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-800 px-4 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:+${siteConfig.operation.phone}`}
              className="rounded-xl bg-orange-500 px-5 py-4 text-center font-bold text-white"
            >
              Ortağımı Ara
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              className="rounded-xl bg-green-600 px-5 py-4 text-center font-bold text-white"
            >
              WhatsApp Yaz
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
