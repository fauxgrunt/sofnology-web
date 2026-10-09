import { notFound } from "next/navigation";
import CoreServiceView from "@/components/services/CoreServiceView";
import RichServiceView from "@/components/services/rich/RichServiceView";
import { getService, servicePages } from "@/content/services/catalog";
import { getRichPage } from "@/content/rich";
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
  "digital-marketing",
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
  const rich = getRichPage(service.path);
  return pageMetadata({
    title: rich?.title ?? service.title,
    description: rich?.description ?? service.description,
    path: service.path,
  });
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.path.includes("/platforms/") || dedicated.has(slug)) notFound();
  const rich = getRichPage(service.path);
  if (rich) return <RichServiceView page={rich} />;
  return <CoreServiceView service={service} />;
}
