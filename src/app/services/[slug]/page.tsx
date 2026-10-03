import { notFound } from "next/navigation";
import CoreServiceView from "@/components/services/CoreServiceView";
import { getService, servicePages } from "@/content/services/catalog";
import { pageMetadata } from "@/lib/metadata";

const dedicated = new Set([
  "software-development",
  "web-development",
  "mobile-development",
  "frontend-development",
  "backend-development",
  "technologies",
  "devops",
  "cloud-consulting",
  "quality-assurance",
  "cybersecurity",
]);

export function generateStaticParams() {
  return servicePages
    .filter((page) => !page.path.includes("/platforms/") && !dedicated.has(page.slug))
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.description, path: service.path });
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.path.includes("/platforms/") || dedicated.has(slug)) notFound();
  return <CoreServiceView service={service} />;
}
