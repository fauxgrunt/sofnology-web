import { InteriorPage } from "@/components/interior";
import JsonLd from "@/components/JsonLd";
import { routeMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { contact, sticky, workItems } from "@/content/work";
import WorkGrid from "./WorkGrid";

export const metadata = routeMetadata("/work");

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string }>;
}) {
  const { area } = await searchParams;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Our work | ${SITE_NAME}`,
    url: `${SITE_URL}/work`,
    description: "Selected projects delivered by Sofnology and members of the delivery team.",
    hasPart: workItems.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      url: `${SITE_URL}/work/${item.slug}`,
      description: item.summary,
    })),
  };

  return (
    <InteriorPage hero={<WorkGrid key={area ?? "all"} initialArea={area} />} sticky={sticky} contact={contact}>
      <JsonLd data={jsonLd} />
    </InteriorPage>
  );
}
