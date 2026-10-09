import { InteriorPage } from "@/components/interior";
import JsonLd from "@/components/JsonLd";
import { routeMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { redirect } from "next/navigation";
import { contact, getWorkCategory, sticky, workItems } from "@/content/work";
import WorkGrid from "./WorkGrid";

export const metadata = routeMetadata("/work");

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string }>;
}) {
  const { area } = await searchParams;
  if (area && getWorkCategory(area)) redirect(`/work/${area}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `All work | ${SITE_NAME}`,
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
    <InteriorPage
      hero={
        <WorkGrid
          initialArea="all"
          title="All work"
          lede="Every delivered project. Use the filter to open one practice, or stay here to see them together. Confidential work stays anonymous."
        />
      }
      sticky={sticky}
      contact={contact}
    >
      <JsonLd data={jsonLd} />
    </InteriorPage>
  );
}
