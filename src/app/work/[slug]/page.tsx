import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/icons";
import { InteriorPage } from "@/components/interior";
import RelatedSection from "@/components/sections/RelatedSection";
import { pageMetadata } from "@/lib/metadata";
import { brand } from "@/lib/theme";
import { contact, getWork, relatedWork, sticky, workItems } from "@/content/work";

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

  const related = relatedWork(item.slug).map((entry) => ({
    title: entry.title,
    description: entry.summary,
    href: `/work/${entry.slug}`,
  }));

  const snapshot = [
    ["Industry", item.industry],
    ["Services", item.services.join(", ")],
    ["Platforms", item.platforms.join(", ")],
    ["Technologies", item.technologies.join(", ")],
  ];

  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <section className="border-b border-neutral-200 bg-page">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="relative aspect-[16/9] min-h-[240px] overflow-hidden border-b border-neutral-200 bg-navy sm:min-h-[360px] lg:min-h-[480px]">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full items-end p-8 sm:p-12">
                  <p className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{item.cardTitle}</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.58fr_0.42fr]">
              <div className="flex items-end border-b border-neutral-200 px-5 py-10 sm:px-6 md:px-10 lg:border-r lg:border-b-0 lg:px-16 lg:py-16">
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">{item.category}</p>
                  <h1 className="mt-4 max-w-xl text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] text-neutral-950 sm:text-4xl md:text-5xl">
                    {item.title}
                  </h1>
                </div>
              </div>
              <div className="flex items-end px-5 py-10 sm:px-6 md:px-10 lg:px-14 lg:py-16">
                <p className="max-w-md text-[15px] leading-[1.75] tracking-tight text-neutral-700">{item.summary}</p>
              </div>
            </div>
            <Link
              href="#contact-form"
              className="tap-press flex min-h-[80px] items-center justify-between bg-navy px-5 py-6 text-lg font-semibold tracking-[-0.04em] text-white sm:px-6 md:px-10 lg:px-16"
            >
              <span>Have a similar challenge? Talk to us.</span>
              <ArrowUpRightIcon />
            </Link>
          </div>
        </section>
      }
    >
      {item.note ? (
        <p className="border-b border-neutral-200 bg-page px-5 py-4 text-[14px] text-neutral-700 sm:px-6 md:px-10 lg:px-16">
          {item.note}
        </p>
      ) : null}

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto grid max-w-[1440px] border-x border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {snapshot.map(([label, value], index) => (
            <div key={label} className={`px-5 py-8 sm:px-6 ${index > 0 ? "border-t border-neutral-200 sm:border-t-0 sm:border-l" : ""}`}>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-navy uppercase">{label}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto grid max-w-[1440px] border-x border-neutral-200 lg:grid-cols-2">
          <article className="border-b border-neutral-200 px-5 py-10 sm:px-6 md:px-10 lg:border-r lg:border-b-0 lg:px-16">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">The challenge</h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-neutral-700">{item.challenge}</p>
          </article>
          <article className="px-5 py-10 sm:px-6 md:px-10 lg:px-16">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">What we built</h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-neutral-700">{item.built}</p>
          </article>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
          <h2 className="border-b border-neutral-200 px-5 py-8 text-2xl font-semibold tracking-[-0.04em] sm:px-6 md:px-10 lg:px-16">Key capabilities</h2>
          <div className="grid md:grid-cols-3">
            {item.capabilities.map((capability, index) => (
              <article key={capability.title} className={`px-5 py-8 sm:px-6 md:px-8 ${index > 0 ? "border-t border-neutral-200 md:border-t-0 md:border-l" : ""}`}>
                <h3 className="text-lg font-semibold text-neutral-950">{capability.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto grid max-w-[1440px] border-x border-neutral-200 lg:grid-cols-2">
          <article className="border-b border-neutral-200 px-5 py-10 sm:px-6 md:px-10 lg:border-r lg:border-b-0 lg:px-16">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">Technical approach</h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-neutral-700">{item.approach}</p>
          </article>
          <article className="px-5 py-10 sm:px-6 md:px-10 lg:px-16">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase">Delivery scope</h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-neutral-700">{item.scope}</p>
          </article>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200 px-5 py-10 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950">Business value</h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-[1.75] text-neutral-700">{item.value}</p>
        </div>
      </section>

      <RelatedSection
        heading="Related services"
        links={item.relatedServices.map((link) => ({ title: link.title, description: "", href: link.href }))}
        actionColor={brand.navy}
        accent={brand.navy}
        actionLabel="View"
        columns={3}
        variant="cards"
      />
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
