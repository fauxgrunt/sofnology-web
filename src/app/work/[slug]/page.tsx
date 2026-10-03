import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/icons";
import { InteriorPage } from "@/components/interior";
import RelatedSection from "@/components/sections/RelatedSection";
import { pageMetadata } from "@/lib/metadata";
import { brand } from "@/lib/theme";
import {
  contact,
  getWork,
  kindFilters,
  relatedWork,
  sticky,
  workItems,
} from "@/content/work";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return pageMetadata({ title: "Our work", path: "/work" });
  return pageMetadata({
    title: item.title,
    description: item.summary,
    path: `/work/${item.slug}`,
  });
}

export default async function WorkCasePage({ params }: WorkPageProps) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  const kindLabel = kindFilters.find((filter) => filter.id === item.kind)?.label;
  const related = relatedWork(item.slug).map((entry) => ({
    title: entry.title,
    description: entry.summary,
    href: `/work/${entry.slug}`,
  }));

  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <section className="border-b border-neutral-200 bg-page">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="relative aspect-[16/9] min-h-[240px] overflow-hidden border-b border-neutral-200 sm:min-h-[360px] lg:min-h-[480px]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover object-center"
              />
            </div>

            <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.58fr_0.42fr]">
              <div className="flex items-end border-b border-neutral-200 px-5 py-10 sm:px-6 sm:py-12 md:px-10 lg:border-r lg:border-b-0 lg:px-16 lg:py-16">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">
                    {item.category}
                    {kindLabel ? ` · ${kindLabel}` : ""}
                  </p>
                  <h1 className="mt-4 max-w-xl text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] text-neutral-950 sm:text-4xl md:text-5xl">
                    {item.title}
                  </h1>
                </div>
              </div>
              <div className="flex items-end px-5 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-14 lg:py-16">
                <p className="max-w-md text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                  {item.summary}
                </p>
              </div>
            </div>

            <Link
              href="#contact-form"
              className="tap-press flex min-h-[80px] items-center justify-between bg-navy px-5 py-6 text-lg font-semibold tracking-[-0.04em] text-white transition-opacity duration-chrome ease-motion sm:min-h-[88px] sm:px-6 sm:text-xl md:px-10 lg:px-16 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
            >
              <span>Discuss similar work</span>
              <ArrowUpRightIcon />
            </Link>
          </div>
        </section>
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <article className="border-b border-neutral-200 px-5 py-10 sm:px-6 sm:py-12 md:px-10 lg:border-r lg:border-b-0 lg:px-16 lg:py-16">
              <h2 className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">
                The situation
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {item.problem}
              </p>
            </article>
            <article className="px-5 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-16 lg:py-16">
              <h2 className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">
                What we did
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {item.work}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="border-b border-neutral-200 px-5 py-10 sm:px-6 sm:py-12 md:px-10 lg:border-r lg:border-b-0 lg:px-16 lg:py-16">
              <h2 className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950">
                After handover
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                {item.outcome}
              </p>
            </div>
            <div className="px-5 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-14 lg:py-16">
              <h2 className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">
                Stack on this job
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((entry) => (
                  <li
                    key={entry}
                    className="bg-white/80 px-3 py-2 text-[13px] font-semibold tracking-[-0.02em] text-neutral-800 ring-1 ring-neutral-200"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedSection
        heading="More delivered work"
        links={related}
        actionColor={brand.navy}
        accent={brand.navy}
        actionLabel="View"
        columns={3}
        variant="cards"
      />
    </InteriorPage>
  );
}
