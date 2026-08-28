export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "karot-delme",
    title: "Karot Delme",
    short: "Betonarme yüzeylerde hassas ve kontrollü delik açma.",
    description:
      "Klima, tesisat, havalandırma ve teknik geçiş ihtiyaçlarında, uygun çapta karot uçlarıyla titreşimi düşük ve kontrollü delme uygulamaları gerçekleştiriyoruz.",
    highlights: ["Farklı çap seçenekleri", "Düşük titreşim", "Temiz ve kontrollü uygulama"],
    faqs: [
      { question: "Karot delme binaya zarar verir mi?", answer: "Uygun ekipman ve doğru noktada yapılan işlem kontrollüdür. Taşıyıcı elemanlarda işlem öncesinde proje veya uzman değerlendirmesi gerekir." },
      { question: "Fiyat nasıl belirlenir?", answer: "Delik çapı, beton kalınlığı, donatı yoğunluğu, erişim ve çalışma koşullarına göre belirlenir." },
    ],
  },
  {
    slug: "beton-kesme",
    title: "Beton Kesme",
    short: "Betonarme döşeme ve yüzeylerde ölçülü kesim çözümleri.",
    description:
      "Kapı, pencere, şaft ve tesisat geçişleri için betonarme yüzeylerde projeye uygun, ölçülü ve kontrollü kesim hizmeti sunuyoruz.",
    highlights: ["Ölçülü kesim", "Profesyonel ekipman", "Saha koşullarına uygun çözüm"],
    faqs: [
      { question: "Beton kesme ne kadar sürer?", answer: "Kesim ölçüsü, beton kalınlığı ve donatı durumuna göre değişir. Keşif sonrası süre bilgisi netleştirilir." },
      { question: "Kesim sırasında toz oluşur mu?", answer: "Uygulamaya göre sulu kesim ve uygun koruma yöntemleriyle toz kontrol altına alınır." },
    ],
  },
  {
    slug: "duvar-kesme",
    title: "Duvar Kesme",
    short: "Kapı, pencere ve geçiş boşlukları için kontrollü kesim.",
    description:
      "Tadilat ve yapı düzenleme çalışmalarında kapı, pencere ve teknik geçiş boşluklarını ölçüye uygun şekilde açıyoruz.",
    highlights: ["Kapı ve pencere boşlukları", "Düzgün kesim hatları", "Tadilata uygun uygulama"],
    faqs: [
      { question: "Her duvar kesilebilir mi?", answer: "Taşıyıcı durum, malzeme ve proje koşulları kontrol edilmelidir. Taşıyıcı elemanlarda teknik onay olmadan işlem yapılmaz." },
      { question: "Moloz temizliği dahil mi?", answer: "Teklif kapsamına göre kesim sonrası parçalama ve saha temizliği ayrıca planlanabilir." },
    ],
  },
  {
    slug: "kanalizasyon-goruntuleme",
    title: "Kanalizasyon Görüntüleme",
    short: "Kamera sistemiyle boru hattında arıza ve tıkanıklık tespiti.",
    description:
      "Kanal içi kamera sistemleriyle boru hattındaki kırık, çökme, yabancı madde ve tıkanıklık noktalarını müdahale öncesinde tespit ediyoruz.",
    highlights: ["Kamera ile noktasal tespit", "Gereksiz kırımı azaltma", "Arıza kaynağını görüntüleme"],
    faqs: [
      { question: "Kamera her boruya girer mi?", answer: "Boru çapı ve erişim noktasına göre uygun kamera ekipmanı seçilir. Keşif sırasında uygunluk değerlendirilir." },
      { question: "Görüntü kaydı alınabilir mi?", answer: "Kullanılan ekipmana ve iş kapsamına göre görüntü veya kayıt paylaşımı yapılabilir." },
    ],
  },
  {
    slug: "kanalizasyon-temizleme",
    title: "Kanalizasyon Temizleme",
    short: "Boru ve kanal hatlarında birikinti temizliği.",
    description:
      "Kanal ve gider hatlarında biriken yağ, tortu, çamur ve yabancı maddelerin temizlenmesine yönelik saha koşuluna uygun çözümler sunuyoruz.",
    highlights: ["Hat içi birikinti temizliği", "Koku ve geri tepme riskini azaltma", "Planlı bakım desteği"],
    faqs: [
      { question: "Temizlik ne zaman gerekir?", answer: "Yavaş akış, kötü koku, sık tekrarlayan tıkanıklık ve geri tepme belirtilerinde hat kontrolü ve temizlik gerekir." },
      { question: "Aynı gün hizmet var mı?", answer: "Ekip uygunluğu ve konuma göre aynı gün yönlendirme yapılabilir." },
    ],
  },
  {
    slug: "kanalizasyon-tikaniklik-acma",
    title: "Kanalizasyon Tıkanıklık Açma",
    short: "Tıkanan gider ve kanal hatlarına hızlı müdahale.",
    description:
      "Tıkanıklığın konumu ve niteliğine göre uygun mekanik veya basınçlı yöntemlerle kanal ve gider hatlarının açılması için hizmet sunuyoruz.",
    highlights: ["Hızlı ön değerlendirme", "Uygun müdahale yöntemi", "Kamera ile desteklenebilir tespit"],
    faqs: [
      { question: "Tıkanıklık neden tekrarlar?", answer: "Boru eğimi, kırık veya çökme, yağ ve katı atık birikimi gibi yapısal ya da kullanım kaynaklı nedenler tekrar eden tıkanıklığa yol açabilir." },
      { question: "Kırmadan açılabilir mi?", answer: "Birçok tıkanıklık kırma yapılmadan açılabilir. Yapısal hasar varsa ek müdahale gerekebilir." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
