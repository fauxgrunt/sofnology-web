import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

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
    title: absoluteTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
    },
  };
}
