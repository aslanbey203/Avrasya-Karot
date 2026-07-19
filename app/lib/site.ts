export const siteConfig = {
  company: "AVRASYA KAROT",
  siteUrl: "https://www.avrasyakarot.com",
  slogan: "Karot, Beton Kesme ve Kanalizasyon Çözümleri",
  description:
    "İstanbul Avrupa ve Anadolu Yakası'nda karot delme, beton kesme, duvar kesme, kanalizasyon görüntüleme, kanalizasyon temizleme ve tıkanıklık açma hizmetleri.",
  operation: {
    title: "Saha Operasyon Sorumlusu",
    name: "Muhammet POLAT",
    phone: "905326984315",
    displayPhone: "0532 698 43 15",
  },
  sales: {
    title: "Müşteri İlişkileri & Teklif",
    name: "Eren ASLAN",
    whatsapp: "905511062229",
    displayPhone: "0551 106 22 29",
  },
  email: "info@avrasyakarot.com",
  location: "İstanbul Avrupa & Anadolu Yakası",
  workingHours: "7/24 Teklif ve Destek",
  whatsappMessage:
    "Merhaba, AVRASYA KAROT web sitesinden ulaşıyorum. Hizmet hakkında bilgi ve teklif almak istiyorum.",
};

export const whatsappUrl = `https://wa.me/${siteConfig.sales.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
