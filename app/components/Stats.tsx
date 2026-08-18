const stats = [
  ["7/24", "Teklif ve iletişim"],
  ["6", "Profesyonel hizmet"],
  ["2", "İstanbul yakası"],
  ["Hızlı", "Ön değerlendirme"],
];

export default function Stats() {
  return <section className="border-y border-slate-800 bg-slate-900"><div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">{stats.map(([value,label]) => <div key={label} className="border-slate-800 px-4 py-10 text-center lg:border-r last:border-r-0"><div className="text-3xl font-black text-orange-500 sm:text-4xl">{value}</div><div className="mt-2 text-sm font-semibold text-slate-300">{label}</div></div>)}</div></section>;
}
