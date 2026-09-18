import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import {
  InteriorPage,
  SplitImageCta,
  SplitStackedHero,
} from "@/components/interior";
import { hero, cta, mistakes, related, faqs, sticky, contact } from "@/content/engagement/dedicated-teams";

import { ComparisonSection, FitSection, PerksSection, HireProcessSection } from "./interactive";

function ModelIntroSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[260px] grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-center border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:border-b-0 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              The right model to build the right product
            </h2>
          </div>
          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.78] tracking-tight text-neutral-700">
              In-house hiring is slow when you need to move. A dedicated development team
              is a remote extension of your staff — developers, designers, QA, and project
              leadership as needed — focused exclusively on your work, with the flexibility
              to scale as the product demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MistakesSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Mistakes to avoid
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Dedicated teams fail less often from talent than from fuzzy goals, weak
            onboarding, or missing governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((item, index) => (
            <article
              key={item.problem}
              className={`min-h-[200px] border-neutral-200 px-6 py-8 md:px-8 lg:px-10 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""}`}
            >
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                Problem
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {item.problem}
              </h3>
              <p className="mt-5 text-[14px] leading-[1.68] tracking-tight text-neutral-700">
                <span className="font-semibold text-neutral-900">Fix: </span>
                {item.solution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DedicatedTeamsPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <SplitStackedHero
          title={hero.title}
          lede={hero.lede}
          titleClass={hero.titleClass}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          ctaArrowColor={hero.ctaArrowColor}
          ctaMaxWidth={hero.ctaMaxWidth}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          wedge="compact"
        />
      }
    >
      <ModelIntroSection />
      <ComparisonSection />
      <FitSection />
      <PerksSection />
      <HireProcessSection />
      <MistakesSection />
      <SplitImageCta
        title={cta.title}
        lede={cta.lede}
        ctaLabel={cta.ctaLabel}
        panelBackground={cta.panelBackground}
        buttonBackground={cta.buttonBackground}
        buttonText={cta.buttonText}
        image={cta.image}
        imageAlt={cta.imageAlt}
        imageClass={cta.imageClass}
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        variant={related.variant}
        columns={related.columns}
        actionColor={related.actionColor}
      />
    </InteriorPage>
  );
}
