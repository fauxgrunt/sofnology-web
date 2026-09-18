import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import SectionIntro from "@/components/sections/SectionIntro";
import {
  InteriorPage,
  FullBandCta,
  SplitStackedHero,
} from "@/components/interior";
import { ORANGE, hero, cta, valuePoints, related, faqs, sticky, contact } from "@/content/engagement/project-outsourcing";

import { ScenariosSection, HowWeDoItSection, ModelContrastSection } from "./interactive";

function ValueSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="What you get with us owning delivery"
          lede="We take the reins so you can stay on the business — from MVP through architecture, build, and QA."
          minHeight={140}
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {valuePoints.map((point, index) => (
            <article
              key={point.title}
              className={`px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t border-neutral-200 md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-3xl font-light tracking-[-0.08em]"
                style={{ color: ORANGE }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                {point.title}
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectOutsourcingPage() {
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
          layout="image-first"
          wedge={false}
        />
      }
    >
      <ScenariosSection />
      <ValueSection />
      <HowWeDoItSection />
      <ModelContrastSection />
      <FullBandCta
        title={cta.title}
        lede={cta.lede}
        ctaLabel={cta.ctaLabel}
        panelBackground={cta.panelBackground}
        buttonBackground={cta.buttonBackground}
        buttonText={cta.buttonText}
        ruleColor={cta.ruleColor}
      />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} />
    </InteriorPage>
  );
}
