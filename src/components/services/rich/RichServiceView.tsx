import Link from "next/link";
import Image from "next/image";
import FaqSection from "@/components/sections/FaqSection";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { workBySlugs } from "@/content/work";
import type { RichPage } from "@/content/rich/types";
import { EngagementGrid, ServiceGrid, StageList } from "./interactive";

function StackSection({ page }: { page: RichPage }) {
  if (!page.stack) return null;
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-5xl">
            {page.stack.title}
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700 sm:mt-7">{page.stack.lede}</p>
        </div>
        <div>
          {page.stack.items.map((group, index) => (
            <article
              key={group.category}
              className={`grid min-h-[96px] grid-cols-1 px-5 py-6 sm:px-6 md:px-10 lg:min-h-[110px] lg:grid-cols-[0.36fr_0.64fr] lg:px-0 ${
                index > 0 ? "border-t border-neutral-200" : ""
              }`}
            >
              <div className="flex items-start lg:px-8 xl:px-12">
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">{group.category}</h3>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-y-2 text-[15px] leading-tight tracking-tight text-neutral-700 min-[420px]:grid-cols-2 min-[420px]:gap-x-8 sm:mt-5 lg:mt-0 lg:px-8 xl:px-12">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection({ page }: { page: RichPage }) {
  if (!page.workSlugs?.length) return null;
  const related = workBySlugs(page.workSlugs);
  if (related.length === 0) return null;
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="flex flex-col items-start gap-4 border-b border-neutral-200 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:px-6 sm:py-9 md:px-10 lg:px-16">
          <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">Selected work</h2>
          <Link href={page.workHref ?? "/work"} className="inline-flex min-h-11 items-center text-[15px] font-semibold text-navy underline underline-offset-4">
            View work
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {related.map((item, index) => {
            const photo = item.cardImage ?? item.image;
            return (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className={`grid grid-cols-1 sm:grid-cols-[0.42fr_0.58fr] ${index > 0 ? "border-t border-neutral-200 lg:border-t-0 lg:border-l" : ""}`}
              >
                <div className="relative min-h-[180px] overflow-hidden bg-navy sm:min-h-[220px]">
                  {photo ? <Image src={photo} alt={item.imageAlt} fill sizes="(max-width: 640px) 100vw, 320px" className="object-cover object-center" /> : null}
                </div>
                <div className="flex flex-col justify-center px-5 py-7 sm:px-6">
                  <p className="text-[12px] font-semibold tracking-[0.16em] uppercase" style={{ color: page.tone.deep }}>
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-neutral-700">{item.summary}</p>
                  <p className="mt-4 text-[14px] font-semibold text-neutral-950">View case study →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function RichServiceView({ page }: { page: RichPage }) {
  const { tone } = page;
  return (
    <InteriorPage
      sticky={{ href: "#contact-form", label: "Start a Project", backgroundColor: tone.accent, textColor: tone.ink, pastHeroPx: 280 }}
      contact={{ showIntro: false, accent: tone.contact }}
      hero={
        <SplitStackedHero
          layout={page.heroLayout}
          title={page.hero.title}
          lede={page.hero.lede}
          ctaLabel={page.hero.ctaLabel}
          ctaHref="#contact-form"
          ctaBackground={tone.deep}
          ctaText="#ffffff"
          ctaArrowColor={tone.accent}
          image={page.hero.image}
          imageAlt={page.hero.imageAlt}
          imageClass="object-cover object-center"
          wedge="default"
          sheen="soft"
        />
      }
    >
      <ServiceGrid title={page.services.title} lede={page.services.lede} items={page.services.items} tone={tone} />
      {page.stages ? <StageList title={page.stages.title} lede={page.stages.lede} items={page.stages.items} tone={tone} /> : null}
      {page.engagements ? (
        <EngagementGrid title={page.engagements.title} lede={page.engagements.lede} items={page.engagements.items} tone={tone} />
      ) : null}
      <StackSection page={page} />
      <WorkSection page={page} />
      <SplitImageCta
        title={page.cta.title}
        lede={page.cta.lede}
        ctaLabel={page.cta.ctaLabel}
        panelBackground={tone.deep}
        buttonBackground={tone.accent}
        buttonText={tone.ink}
        image={page.cta.image}
        imageAlt={page.cta.imageAlt}
        sheen="wash"
      />
      <FaqSection faqs={page.faqs} signColor={tone.deep} variant="roomy" heading="Questions about this work" />
    </InteriorPage>
  );
}
