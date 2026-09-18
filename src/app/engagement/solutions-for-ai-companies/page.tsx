import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, SplitStackedHero } from "@/components/interior";
import { CYAN, DEEP, CTA_IMAGE, hero, cta, related, faqs, sticky, contact } from "@/content/engagement/solutions-for-ai-companies";

import { CostSection, MaturitySection, SpecSection, GovernanceSection, MeasureSection } from "./interactive";

function AiCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.52fr_0.48fr]">
          <div
            className="relative aspect-[16/11] overflow-hidden border-b border-neutral-200 sm:aspect-auto sm:min-h-[300px] lg:min-h-[430px] lg:border-b-0"
            style={{ backgroundColor: "#050506" }}
          >
            <Image
              src={CTA_IMAGE}
              alt={cta.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className={cta.imageClass}
            />
          </div>

          <div className="flex min-h-0 items-center bg-white px-5 py-10 sm:min-h-[300px] sm:px-6 sm:py-12 md:px-10 lg:min-h-[430px] lg:px-14 xl:px-16">
            <div className="w-full max-w-3xl">
              <div className="mb-6 h-1 w-14 sm:mb-8" style={{ backgroundColor: CYAN }} />
              <h2 className="max-w-2xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.05em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-5xl">
                {cta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:mt-7 sm:text-[15px] sm:leading-[1.72]">
                {cta.lede}
              </p>

              <a
                href={cta.ctaHref}
                className="group relative mt-8 flex min-h-14 w-full max-w-xl items-center justify-between overflow-hidden px-5 py-4 text-base font-semibold tracking-[-0.04em] text-[#12141A] sm:mt-14 sm:min-h-20 sm:px-6 sm:py-6 sm:text-xl sm:tracking-[-0.045em] md:px-8"
                style={{ backgroundColor: CYAN }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/40 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">{cta.ctaLabel}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsForAiCompaniesPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <SplitStackedHero
          title={hero.title}
          lede={hero.lede}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          imageMinClass={hero.imageMinClass}
          layout="inverted"
          tone="dark"
          shellColor={DEEP}
          sheen="wash"
          wedge={false}
        />
      }
    >
      <CostSection />
      <MaturitySection />
      <SpecSection />
      <GovernanceSection />
      <MeasureSection />
      <AiCtaSection />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
        columns={related.columns}
      />
    </InteriorPage>
  );
}
