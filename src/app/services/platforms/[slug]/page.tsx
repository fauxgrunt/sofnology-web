import { notFound } from "next/navigation";
import CoreServiceView from "@/components/services/CoreServiceView";
import { getService, servicesByGroup } from "@/content/services/catalog";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return servicesByGroup("platform").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.description, path: service.path });
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.group !== "platform") notFound();
  return <CoreServiceView service={service} />;
}
