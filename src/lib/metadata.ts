import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, OG_IMAGE, SITE_NAME, SITE_ROUTES, SITE_URL } from "@/lib/site";

export function pageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const absoluteTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    // Short title — root `title.template` appends the site name once.
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

/** Layouts read from SITE_ROUTES so titles, descriptions, and paths cannot drift. */
export function routeMetadata(path: string): Metadata {
  const route = SITE_ROUTES.find((item) => item.path === path);
  if (!route) {
    throw new Error(`Unknown route metadata path: ${path}`);
  }
  return pageMetadata({
    title: route.title,
    description: route.description,
    path: route.path,
  });
}
