"use client";

import { FormEvent, useState } from "react";
import { Send, Star } from "lucide-react";

type Review = { name: string; service: string; comment: string };

const emptyForm: Review = {
  name: "",
  service: "Karot Delme",
  comment: "",
};

function getSavedReviews(): Review[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("avrasya-reviews") || "[]");
  } catch {
    return [];
  }
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(getSavedReviews);
  const [form, setForm] = useState<Review>(emptyForm);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;
    const next = [form, ...reviews];
    setReviews(next);
    localStorage.setItem("avrasya-reviews", JSON.stringify(next));
    setForm(emptyForm);
  }

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
        <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-slate-900 p-7">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">Yorum bırakın</p>
          <h2 className="mt-3 text-3xl font-black">Deneyiminizi paylaşın</h2>
          <div className="mt-6 grid gap-4">
            <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ad Soyad" className="rounded-xl border border-white/10 bg-slate-950 px-4 py-4 outline-none focus:border-orange-500" />
            <select value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })} className="rounded-xl border border-white/10 bg-slate-950 px-4 py-4">
              <option>Karot Delme</option>
              <option>Beton Kesme</option>
              <option>Duvar Kesme</option>
              <option>Kanalizasyon Görüntüleme</option>
              <option>Kanalizasyon Temizleme</option>
              <option>Kanalizasyon Tıkanıklık Açma</option>
            </select>
            <textarea value={form.comment} onChange={(event) => setForm({ ...form, comment: event.target.value })} placeholder="Yorumunuz" rows={5} className="rounded-xl border border-white/10 bg-slate-950 px-4 py-4 outline-none focus:border-orange-500" />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 font-black"><Send size={18} /> Yorumu kaydet</button>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">Bu sürümde yorumlar ziyaretçinin kendi tarayıcısında saklanır.</p>
        </form>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">Yorumlar</p>
          <h2 className="mt-3 text-3xl font-black">Müşteri deneyimleri</h2>
          <div className="mt-6 grid gap-4">
            {reviews.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/15 p-8 text-slate-400">Henüz yorum eklenmedi.</div>
            ) : reviews.map((review, index) => (
              <div key={`${review.name}-${index}`} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <div className="flex gap-1 text-orange-500">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" />)}</div>
                <p className="mt-4 leading-7 text-slate-300">“{review.comment}”</p>
                <p className="mt-4 font-black">{review.name}</p>
                <p className="text-sm text-orange-400">{review.service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
