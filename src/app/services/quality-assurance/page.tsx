import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, SplitStackedHero } from "@/components/interior";
import { techStack, faqs, hero, cta, related, sticky, contact, methodology, LIME, DEEP } from "@/content/services/quality-assurance";

import { SpotlightSection, ProcessSection, TestingTypesSection } from "./interactive";

function TechStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Optimize your stack
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We help you choose and wire tools that fit your product stage — modern
            frameworks first, legacy tools only when they still earn their place.
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

function QualityMethodologySection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-t border-white/14">
          <div className="border-b border-white/14 px-6 py-10 md:px-10 lg:px-16">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
              How we work quality in
            </h3>
            <p className="mt-4 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/65">
              Clear ownership, useful reporting, and approaches that improve with every
              release — without another hover-card wall.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {methodology.map((item, index) => (
              <article
                key={item.title}
                className={`px-6 py-10 md:px-8 lg:px-10 ${
                  index > 0 ? "border-t border-white/14 md:border-t-0 md:border-l" : ""
                }`}
              >
                <div className="mb-6 h-1 w-10" style={{ backgroundColor: LIME }} />
                <h4 className="text-lg leading-tight font-semibold tracking-[-0.035em] text-white">
                  {item.title}
                </h4>
                <p className="mt-5 text-[14px] leading-[1.7] tracking-tight text-white/68">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QaCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div
            className="flex min-h-[340px] items-start justify-between gap-6 border-b border-neutral-200 px-6 py-10 text-[#101413] md:px-10 lg:min-h-[430px] lg:border-b-0 lg:px-12 xl:px-16"
            style={{ backgroundColor: cta.panelBackground }}
          >
            <div className="flex w-full max-w-md flex-col justify-between self-stretch">
              <div>
                <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-4xl lg:text-[2.75rem]">
                  {cta.title}
                </h2>
                <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-[#101413]/opacity-80">
                  {cta.lede}
                </p>
              </div>

              <a
                href="#contact-form"
                className="group relative mt-12 flex min-h-[72px] w-full items-center justify-between overflow-hidden px-5 py-5 text-lg font-semibold tracking-[-0.04em] md:px-6"
                style={{ backgroundColor: cta.buttonBackground, color: cta.buttonText }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10 max-w-[15rem] leading-tight">{cta.ctaLabel}</span>
                <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[430px]">
            <Image
              src={cta.image}
              alt={cta.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="scale-[1.08] object-cover object-[40%_55%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function QualityAssurancePage() {
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
          sheen="wash"
          ctaMaxWidth={hero.ctaMaxWidth}
        />
      }
    >
      <SpotlightSection />
      <ProcessSection />
      <QualityMethodologySection />
      <TestingTypesSection />
      <TechStackSection />
      <QaCtaSection />
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
