import type { MetadataRoute } from "next";
import { workItems } from "@/content/work";
import { SITE_ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : route.path.split("/").length <= 2 ? 0.8 : 0.7,
  }));

  const work = workItems.map((item) => ({
    url: `${SITE_URL}/work/${item.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...work];
}
