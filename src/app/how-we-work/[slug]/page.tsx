import { notFound } from "next/navigation";
import RichServiceView from "@/components/services/rich/RichServiceView";
import { howWeWorkPages } from "@/content/rich";
import { getRichPage } from "@/content/rich";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return howWeWorkPages.map((page) => ({ slug: page.path.split("/").at(-1) ?? "" }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getRichPage(`/how-we-work/${slug}`);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: page.path });
}

export default async function HowWeWorkModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getRichPage(`/how-we-work/${slug}`);
  if (!page) notFound();
  return <RichServiceView page={page} />;
}
