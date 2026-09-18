import {
  DEFAULT_DESCRIPTION,
  SITE_COUNTRY,
  SITE_EMAIL,
  SITE_LOCALITY,
  SITE_NAME,
  SITE_ROUTES,
  SITE_URL,
} from "@/lib/site";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/**
 * Facts already published on the site (footer, about, service routes).
 * No invented phone, street address, ratings, or social profiles.
 */
export function siteJsonLd() {
  const services = SITE_ROUTES.filter((route) =>
    route.path.startsWith("/services/"),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        description: DEFAULT_DESCRIPTION,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo-new.png`,
        },
        image: `${SITE_URL}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_LOCALITY,
          addressCountry: SITE_COUNTRY,
        },
        areaServed: "Worldwide",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE_EMAIL,
          url: `${SITE_URL}/#contact-form`,
          availableLanguage: "English",
        },
        knowsAbout: services.map((route) => route.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sofnology services",
          itemListElement: services.map((route, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: route.title,
              description: route.description,
              url: absoluteUrl(route.path),
              provider: { "@id": organizationId },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-US",
        publisher: { "@id": organizationId },
      },
    ],
  };
}
