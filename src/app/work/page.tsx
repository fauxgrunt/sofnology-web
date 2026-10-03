import { InteriorPage } from "@/components/interior";
import JsonLd from "@/components/JsonLd";
import { routeMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { contact, sticky, workItems } from "@/content/work";
import WorkGrid from "./WorkGrid";

export const metadata = routeMetadata("/work");

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Our work | ${SITE_NAME}`,
    url: `${SITE_URL}/work`,
    description:
      "Selected voice, PBX, and SIP engagements delivered by Sofnology Solutions.",
    hasPart: workItems.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      url: `${SITE_URL}/work/${item.slug}`,
      image: `${SITE_URL}${item.image}`,
      description: item.summary,
    })),
  };

  return (
    <InteriorPage hero={<WorkGrid />} sticky={sticky} contact={contact}>
      <JsonLd data={jsonLd} />
    </InteriorPage>
  );
}
