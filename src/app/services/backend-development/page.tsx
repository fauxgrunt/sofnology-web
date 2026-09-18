import Link from "next/link";
import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { approachPoints, techStack, faqs, hero, cta, related, sticky, contact } from "@/content/services/backend-development";

import { ServicesSection, ShapeBackendSection, PrinciplesSection, IndustriesSection, EngagementSection } from "./interactive";

function ApproachAndStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-2">
          <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Our approach
            </h2>
            <div className="mt-10 space-y-8">
              {approachPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-12 md:px-10 lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Tech stack
            </h2>
            <div className="mt-10 space-y-8">
              {techStack.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                    {group.category}
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[15px] leading-tight tracking-tight text-neutral-700">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[14px] leading-[1.65] tracking-tight text-neutral-600">
              Cloud delivery often pairs with{" "}
              <Link
                href="/services/devops"
                className="font-semibold text-[#111827] underline decoration-[#10B981] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
              >
                Sofnology DevOps
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BackendDevelopmentPage() {
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
          wedge="default"
          sheen="strong"
        />
      }
    >
      <ServicesSection />
      <ShapeBackendSection />
      <PrinciplesSection />
      <IndustriesSection />
      <EngagementSection />
      <ApproachAndStackSection />
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

      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} />
    </InteriorPage>
  );
}
