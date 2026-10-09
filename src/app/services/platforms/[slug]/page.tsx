import { notFound } from "next/navigation";
import CoreServiceView from "@/components/services/CoreServiceView";
import RichServiceView from "@/components/services/rich/RichServiceView";
import { getService, servicesByGroup } from "@/content/services/catalog";
import { getRichPage } from "@/content/rich";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return servicesByGroup("platform").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const rich = getRichPage(service.path);
  return pageMetadata({
    title: rich?.title ?? service.title,
    description: rich?.description ?? service.description,
    path: service.path,
  });
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.group !== "platform") notFound();
  const rich = getRichPage(service.path);
  if (rich) return <RichServiceView page={rich} />;
  return <CoreServiceView service={service} />;
}
