const stats = [
  { value: "7/24", label: "Teklif ve Destek" },
  { value: "3", label: "Ana Hizmet" },
  { value: "2", label: "İstanbul Yakası" },
  { value: "%100", label: "Memnuniyet Hedefi" },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-4 md:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-xl">
            <div className="text-4xl font-black text-orange-500 md:text-5xl">{stat.value}</div>
            <div className="mt-3 font-semibold text-slate-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
