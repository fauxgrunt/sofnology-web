import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import {
  InteriorPage,
  FullBleedHero,
  MagentaSplitCta,
} from "@/components/interior";
import { MINT, DEEP, hero, cta, audiences, trustPoints, processSteps, related, faqs, sticky, contact } from "@/content/industries/edtech";

import { ProductsSection, ChallengesSection, CapabilitiesSection } from "./interactive";

function AudiencesSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Education solutions for every kind of organization
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Institutions, product companies, and non-profits — same engineering
            discipline, different constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {audiences.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[260px] border-white/14 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: MINT }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/68">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            What we refuse to compromise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {trustPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: MINT }} />
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

function ProcessSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            How we build eLearning solutions
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            A continuous path from requirements to launch and refinement — not a
            one-shot handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`min-h-[220px] border-white/14 px-6 py-9 md:px-7 ${
                index % 2 === 1 ? "sm:border-l" : ""
              } ${index % 5 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t sm:border-t-0" : ""
              } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <span className="text-3xl font-light tracking-[-0.06em]" style={{ color: MINT }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-white/65">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EdtechPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <FullBleedHero
          title={hero.title}
          lede={hero.lede}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          overlay="copy"
          eyebrow={hero.eyebrow}
          eyebrowColor={hero.eyebrowColor}
          gradientClass={hero.gradientClass}
          titleClass={hero.titleClass}
          sheen="wash"
        />
      }
    >
      <ProductsSection />
      <AudiencesSection />
      <ChallengesSection />
      <CapabilitiesSection />
      <MagentaSplitCta
        lede={cta.lede}
        image={cta.image}
        imageAlt={cta.imageAlt}
        imageClass={cta.imageClass}
        background="#FF2D8A"
        panelMin="lg:min-h-[380px]"
        imageMin="lg:min-h-[380px]"
      />
      <TrustSection />
      <ProcessSection />
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
