import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import SectionIntro from "@/components/sections/SectionIntro";
import {
  InteriorPage,
  FullBandCta,
  SplitStackedHero,
} from "@/components/interior";
import { MAGENTA, hero, cta, platforms, related, faqs, sticky, contact } from "@/content/industries/ecommerce";

import { PathsSection, BuildTypesSection, CapabilitiesSection, DeliverySection } from "./interactive";

function PlatformsSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Platforms and integrations"
          lede="Established commerce platforms when they fit — custom and headless when they don’t. Integrations chosen for the business, not a logo wall."
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {platforms.map((group, index) => (
            <div
              key={group.category}
              className={`px-6 py-12 md:px-10 lg:px-16 ${
                index > 0 ? "border-t border-neutral-200 md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: MAGENTA }} />
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950">
                {group.category}
              </h3>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-neutral-200 py-3 text-[15px] tracking-tight text-neutral-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EcommercePage() {
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
          ctaArrowColor={hero.ctaArrowColor}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          layout="image-first"
          wedge={false}
          sheen="soft"
        />
      }
    >
      <PathsSection />
      <BuildTypesSection />
      <CapabilitiesSection />
      <DeliverySection />
      <PlatformsSection />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
      />
      <FullBandCta
        title={cta.title}
        lede={cta.lede}
        ctaLabel={cta.ctaLabel}
        panelBackground={cta.panelBackground}
        buttonBackground={cta.buttonBackground}
        buttonText={cta.buttonText}
        ruleColor={MAGENTA}
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} />
    </InteriorPage>
  );
}
