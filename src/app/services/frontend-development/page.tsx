import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import SectionIntro from "@/components/sections/SectionIntro";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { CORAL, techStack, faqs, hero, cta, related, sticky, contact } from "@/content/services/frontend-development";

import { ServicesSection, InterfaceTypesSection, DeliverySection, PrinciplesSection, EngagementSection } from "./interactive";

function StackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="What we ship with"
          lede="React, Next.js, TypeScript, and Tailwind lead most deliveries. Other tools come in when the product or team needs them."
          padding="roomy"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.29fr_0.29fr]">
          {techStack.map((group, index) => (
            <div
              key={group.category}
              className={`border-neutral-200 px-6 py-10 md:px-8 lg:px-12 ${
                index > 0 ? "border-t lg:border-t-0 lg:border-l" : ""
              } ${group.lead ? "bg-white/55" : ""}`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: CORAL }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {group.category}
              </h3>
              <ul
                className={`mt-6 space-y-3 tracking-tight text-neutral-700 ${
                  group.lead
                    ? "text-[17px] leading-tight font-medium text-neutral-900"
                    : "text-[15px] leading-tight"
                }`}
              >
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FrontendDevelopmentPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <SplitStackedHero
          layout="cta-first"
          title={hero.title}
          lede={hero.lede}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          wedge={false}
          sheen="mid"
        />
      }
    >
      <ServicesSection />
      <InterfaceTypesSection />
      <DeliverySection />
      <PrinciplesSection />
      <EngagementSection />
      <StackSection />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
        variant={related.variant}
        columns={related.columns}
        titleSize={related.titleSize}
      />
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
        sheen="mid"
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} />
    </InteriorPage>
  );
}
