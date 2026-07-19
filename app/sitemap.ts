import type { MetadataRoute } from "next";
import { services } from "./lib/services";
import { serviceAreas } from "./lib/areas";
import { siteConfig } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...services.map(service => ({ url: `${siteConfig.siteUrl}/hizmetler/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...serviceAreas.map(area => ({ url: `${siteConfig.siteUrl}/${area.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.85 })),
  ];
}
