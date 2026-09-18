import Link from "next/link";
import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import SectionIntro from "@/components/sections/SectionIntro";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { SKY, DEEP, vendorFactors, platforms, techStack, faqs, hero, cta, related, sticky, contact } from "@/content/services/cloud-consulting";

import { BenefitsSection, ServicesSection, DeliverablesSection, AdvantagesSection } from "./interactive";

function WhyCloudSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[260px] grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-center border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:border-b-0 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Why opt for cloud consulting?
            </h2>
          </div>
          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.78] tracking-tight text-neutral-700">
              Distributed work, faster product cycles, and rising customer expectations
              push teams toward more compute and more flexibility. Cloud consulting turns
              that pressure into a plan: the right platforms, a safer migration path, and
              an operating model that scales without burning budget or creating fragile
              sprawl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VendorSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="How to choose the right cloud vendor"
          lede="Unbiased support to pick a provider — or mix — that fits operations, industry, budget, and the features you actually need."
          scale="large"
          minHeight={220}
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {vendorFactors.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[180px] border-neutral-200 px-6 py-8 md:px-8 lg:px-10 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""}`}
            >
              <div className="mb-5 h-1 w-10" style={{ backgroundColor: SKY }} />
              <h3 className="text-lg font-semibold tracking-[-0.035em] text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.68] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  return (
    <section id="platforms" className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Platforms we work across
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            AWS, Azure, and Google Cloud — selected for fit, not affiliation theater.
            We help you succeed on the platform that matches the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {platforms.map((platform, index) => (
            <article
              key={platform.title}
              className={`min-h-[240px] px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t border-white/14 md:border-t-0 md:border-l" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold tracking-[-0.045em]" style={{ color: SKY }}>
                {platform.title}
              </h3>
              <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-white/72">
                {platform.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="tech-stack" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Cloud tech stack
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Providers, serverless, containers, and delivery tooling — chosen for
            maintainability. For deeper pipeline work, see{" "}
            <Link href="/services/devops" className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700">
              DevOps
            </Link>
            .
          </p>
        </div>

        <div>
          {techStack.map((group, index) => (
            <article
              key={group.category}
              className={`grid min-h-[110px] grid-cols-1 px-6 py-6 md:px-10 lg:grid-cols-[0.36fr_0.64fr] lg:px-0 ${
                index > 0 ? "border-t border-neutral-200" : ""
              }`}
            >
              <div className="flex items-start lg:px-8 xl:px-12">
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-tight tracking-tight text-neutral-700 md:grid-cols-3 lg:mt-0 lg:px-8 xl:px-12">
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

export default function CloudConsultingPage() {
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
          wedge="compact"
          sheen="soft"
          ctaArrowColor={hero.ctaArrowColor}
          ctaMaxWidth={hero.ctaMaxWidth}
          titleClass={hero.titleClass}
        />
      }
    >
      <WhyCloudSection />
      <BenefitsSection />
      <ServicesSection />
      <VendorSection />
      <PlatformsSection />
      <DeliverablesSection />
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
        sheen="wash"
      />
      <AdvantagesSection />
      <TechStackSection />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} />
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
    </InteriorPage>
  );
}
