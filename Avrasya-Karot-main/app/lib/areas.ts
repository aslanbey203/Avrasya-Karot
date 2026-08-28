export type ServiceArea = {
  name: string;
  slug: string;
  side: "Anadolu Yakası" | "Avrupa Yakası";
  neighborhoods: string[];
  localFocus: string;
};

export const serviceAreas: ServiceArea[] = [
  { name: "Kadıköy", slug: "kadikoy-karot", side: "Anadolu Yakası", neighborhoods: ["Göztepe", "Kozyatağı", "Fenerbahçe", "Acıbadem"], localFocus: "Apartman tadilatları, tesisat geçişleri ve ticari alan yenilemelerinde kontrollü karot delme ve beton kesme uyguluyoruz." },
  { name: "Üsküdar", slug: "uskudar-karot", side: "Anadolu Yakası", neighborhoods: ["Altunizade", "Çengelköy", "Acıbadem", "Beylerbeyi"], localFocus: "Konut, iş yeri ve güçlendirme sahalarında ölçüye uygun delme ile duvar kesme ihtiyaçlarına hızlı ekip yönlendiriyoruz." },
  { name: "Ataşehir", slug: "atasehir-karot", side: "Anadolu Yakası", neighborhoods: ["İçerenköy", "Kayışdağı", "Küçükbakkalköy", "Barbaros"], localFocus: "Rezidans, ofis ve şantiye çalışmalarında tesisat, havalandırma ve kablo geçişleri için hassas karot çözümleri sunuyoruz." },
  { name: "Ümraniye", slug: "umraniye-karot", side: "Anadolu Yakası", neighborhoods: ["Şerifali", "Dudullu", "Çakmak", "İnkılap"], localFocus: "Sanayi, depo, konut ve iş yeri sahalarında beton delme, kesme ve altyapı müdahalelerini planlı biçimde yürütüyoruz." },
  { name: "Kartal", slug: "kartal-karot", side: "Anadolu Yakası", neighborhoods: ["Yakacık", "Soğanlık", "Cevizli", "Orhantepe"], localFocus: "Sahil hattından E-5 çevresine kadar konut ve ticari projelerde karot delme ile beton kesme hizmeti sağlıyoruz." },
  { name: "Maltepe", slug: "maltepe-karot", side: "Anadolu Yakası", neighborhoods: ["Küçükyalı", "İdealtepe", "Zümrütevler", "Cevizli"], localFocus: "Daire içi yenileme, klima ve tesisat geçişleri ile bina tadilatlarında temiz ve kontrollü uygulamaya odaklanıyoruz." },
  { name: "Pendik", slug: "pendik-karot", side: "Anadolu Yakası", neighborhoods: ["Kurtköy", "Kaynarca", "Yenişehir", "Güzelyalı"], localFocus: "Konut, fabrika ve şantiye alanlarında farklı çap ve derinliklerde karot delme ihtiyaçlarını uygun ekipmanla karşılıyoruz." },
  { name: "Beşiktaş", slug: "besiktas-karot", side: "Avrupa Yakası", neighborhoods: ["Levent", "Etiler", "Ortaköy", "Bebek"], localFocus: "Yoğun yerleşimli konut ve iş yeri sahalarında çevreyi gözeten, ölçülü ve kontrollü beton delme çözümleri sağlıyoruz." },
  { name: "Şişli", slug: "sisli-karot", side: "Avrupa Yakası", neighborhoods: ["Mecidiyeköy", "Bomonti", "Fulya", "Esentepe"], localFocus: "Ofis, mağaza, otel ve apartman yenilemelerinde tesisat geçişleri ile kesim işlerini saha koşullarına göre planlıyoruz." },
  { name: "Bakırköy", slug: "bakirkoy-karot", side: "Avrupa Yakası", neighborhoods: ["Ataköy", "Yeşilköy", "Florya", "Kartaltepe"], localFocus: "Konut ve ticari yapılarda karot, duvar kesme ve kanalizasyon hattı ihtiyaçlarına İstanbul geneli ekibimizle cevap veriyoruz." },
  { name: "Fatih", slug: "fatih-karot", side: "Avrupa Yakası", neighborhoods: ["Aksaray", "Fındıkzade", "Çapa", "Vatan"], localFocus: "Tadilat ve tesisat çalışmalarında mevcut yapıyı gözeterek karot delme, beton kesme ve duvar kesme uygulamaları gerçekleştiriyoruz." },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
