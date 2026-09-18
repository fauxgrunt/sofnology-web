import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import SectionIntro from "@/components/sections/SectionIntro";
import {
  InteriorPage,
  SplitImageCta,
  SplitStackedHero,
} from "@/components/interior";
import { CORAL, hero, cta, advancedTech, approachPoints, related, faqs, sticky, contact } from "@/content/industries/automotive";

import { MarketSection, ServicesSection, AudiencesSection, SolutionsSection } from "./interactive";

function AdvancedTechSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Advanced tech, applied carefully"
          lede="AI, IoT, and cloud when they improve the product — not as a checklist of buzzwords."
          minHeight={200}
          split="42/58"
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {advancedTech.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-neutral-200 px-6 py-9 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: CORAL }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Our approach
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Compliance awareness, security, UX, and quality — the non-negotiables for
            software that touches vehicles and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {approachPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[200px] border-neutral-200 px-6 py-9 md:px-8 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: CORAL }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AutomotivePage() {
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
          ctaMaxWidth={hero.ctaMaxWidth}
          titleClass={hero.titleClass}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          layout="cta-first"
          wedge="compact"
        />
      }
    >
      <MarketSection />
      <ServicesSection />
      <AudiencesSection />
      <SolutionsSection />
      <AdvancedTechSection />
      <ApproachSection />
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
        ruleColor={CORAL}
        titleClass="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl lg:text-[3rem]"
      />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
        titleSize={related.titleSize}
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} />
    </InteriorPage>
  );
}
