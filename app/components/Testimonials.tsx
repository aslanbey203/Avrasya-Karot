"use client";

import { useEffect, useState } from "react";
import { Star, Send } from "lucide-react";

type Review = {
  name: string;
  service: string;
  comment: string;
};

const defaultReviews: Review[] = [
  {
    name: "İlkay Demir",
    service: "Karot Delme",
    comment: "Temiz ve hızlı çalıştılar. Klima deliği için destek aldım, memnun kaldım.",
  },
  {
    name: "Murat Kaya",
    service: "Beton Kesme",
    comment: "İş öncesi bilgilendirme iyiydi. Zamanında gelip işi düzgün teslim ettiler.",
  },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [form, setForm] = useState<Review>({
    name: "",
    service: "Karot Delme",
    comment: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("avrasya-karot-reviews");
    if (saved) setReviews(JSON.parse(saved));
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.comment.trim()) return;

    const updatedReviews = [form, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("avrasya-karot-reviews", JSON.stringify(updatedReviews));

    setForm({
      name: "",
      service: "Karot Delme",
      comment: "",
    });
  }

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Müşteri Yorumları
          </span>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Deneyiminizi Paylaşın
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            AVRASYA KAROT hizmetleri hakkında yorum bırakabilir, diğer müşteri
            deneyimlerini inceleyebilirsiniz.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-black text-white">Yorum Bırak</h3>

            <div className="mt-6 grid gap-5">
              <input
                type="text"
                placeholder="Ad Soyad"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-500"
              />

              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-500"
              >
                <option>Karot Delme</option>
                <option>Beton Kesme</option>
                <option>Duvar Kesme</option>
              </select>

              <textarea
                placeholder="Yorumunuzu yazın..."
                rows={5}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-500"
              />

              <button className="flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600">
                <Send size={20} />
                Yorumu Gönder
              </button>
            </div>
          </form>

          <div className="grid gap-6">
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-7"
              >
                <div className="mb-4 flex gap-1 text-orange-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg leading-8 text-slate-300">
                  “{review.comment}”
                </p>

                <div className="mt-5">
                  <h4 className="font-black text-white">{review.name}</h4>
                  <p className="text-sm text-orange-400">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}