import Link from "next/link";
import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import SectionIntro from "@/components/sections/SectionIntro";
import {
  InteriorPage,
  SplitImageCta,
  SplitStackedHero,
} from "@/components/interior";
import { GOLD, hero, cta, trustPoints, related, faqs, sticky, contact } from "@/content/industries/fintech";

import { HelpSection, DomainsSection, SolutionsSection, WorkPathSection } from "./interactive";

function TrustSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Trust signals we design for"
          lede="Concrete controls for products that move money — not generic “security and scale” language."
          minHeight={200}
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <article
              key={point.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-9 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: GOLD }} />
              <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                {point.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {point.description}
              </p>
            </article>
          ))}
        </div>

        <div className="border-t border-neutral-200 px-6 py-8 md:px-10 lg:px-16">
          <p className="text-[14px] leading-[1.65] tracking-tight text-neutral-600">
            Need a deeper security assessment?{" "}
            <Link
              href="/services/cybersecurity"
              className="font-semibold text-[#1A1C1F] underline decoration-[#C9A227] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Sofnology cybersecurity
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function FintechPage() {
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
        />
      }
    >
      <HelpSection />
      <DomainsSection />
      <SolutionsSection />
      <WorkPathSection />
      <TrustSection />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
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
