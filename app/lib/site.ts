export const siteConfig = {
  company: "AVRASYA KAROT",
  slogan: "Profesyonel Karot ve Beton Kesme Hizmetleri",
  description:
    "İstanbul Avrupa ve Anadolu Yakası'nda karot delme, beton kesme ve duvar kesme hizmetleri.",
  operation: {
    title: "Operasyon Sorumlusu",
    name: "Muhammed POLAT",
    phone: "905326984315",
    displayPhone: "0532 698 43 15",
  },
  sales: {
    title: "Müşteri Destek WhatsApp",
    name: "Eren ASLAN",
    whatsapp: "905511062229",
    displayPhone: "0551 106 22 29",
  },
  email: "info@avrasyakarot.com",
  location: "İstanbul Avrupa & Anadolu Yakası",
  workingHours: "7/24 Teklif ve Destek",
  whatsappMessage:
    "Merhaba, AVRASYA KAROT web sitesinden ulaşıyorum. Karot / beton kesme / duvar kesme işi için teklif almak istiyorum.",
};

export const whatsappUrl = `https://wa.me/${siteConfig.sales.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
