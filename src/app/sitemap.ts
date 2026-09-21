import type { MetadataRoute } from "next";

import { publicRoutes } from "@/lib/public-routes";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await siteUrl();

  return publicRoutes.map((route, index) => ({
    url: `${base}${route}`,
    changeFrequency: "weekly" as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}
