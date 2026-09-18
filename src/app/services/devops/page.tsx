import { ArrowUpRightIcon } from "@/components/icons";
import FaqSection from "@/components/sections/FaqSection";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { AMBER, techStack, faqs, hero, cta, sticky, contact } from "@/content/services/devops";

import { ServicesSection, PipelineSection, EngagementSection } from "./interactive";

function TechStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            DevOps tech stack and tools
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Including AWS, Azure, and Google Cloud — tooling should match product stage
            and team capacity, not a wall of logos.
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

function DevSecOpsStrip() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[280px] grid-cols-1 lg:grid-cols-[0.54fr_0.46fr]">
          <div className="flex items-center border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:border-b-0 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#0B4F4A]">
                DevSecOps
              </p>
              <h2 className="mt-5 text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
                Security belongs in the pipeline
              </h2>
              <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Bake practical security checks into delivery — not launch week. For
                deeper audits and risk reviews, continue into Sofnology cybersecurity.
              </p>
            </div>
          </div>
          <div className="flex items-end px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <a
              href="/services/cybersecurity"
              className="group relative flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#101413] md:px-8"
              style={{ backgroundColor: AMBER }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">Explore cybersecurity</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DevOpsPage() {
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
          sheen="soft"
          ctaArrowColor={hero.ctaArrowColor}
        />
      }
    >
      <ServicesSection />
      <PipelineSection />
      <EngagementSection />
      <TechStackSection />
      <DevSecOpsStrip />
      <SplitImageCta
        title={cta.title}
        lede={cta.lede}
        ctaLabel={cta.ctaLabel}
        panelBackground={cta.panelBackground}
        buttonBackground={cta.buttonBackground}
        buttonText={cta.buttonText}
        image={cta.image}
        imageAlt={cta.imageAlt}
        sheen="wash"
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} />
    </InteriorPage>
  );
}
