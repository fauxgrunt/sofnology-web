import type { MetadataRoute } from "next";
import { focusIndustries } from "@/content/industries/focus";
import { servicePages } from "@/content/services/catalog";
import { workItems } from "@/content/work";
import { SITE_ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : route.path.split("/").length <= 2 ? 0.8 : 0.7,
  }));

  const extraPaths = [
    "/how-we-work",
    "/privacy",
    "/terms",
    ...servicePages.map((page) => page.path),
    ...focusIndustries.map((industry) => `/industries/${industry.slug}`),
  ];
  const extras: MetadataRoute.Sitemap = extraPaths
    .filter((path) => !SITE_ROUTES.some((route) => route.path === path))
    .map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const work: MetadataRoute.Sitemap = workItems.map((item) => ({
    url: `${SITE_URL}/work/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...extras, ...work];
}
