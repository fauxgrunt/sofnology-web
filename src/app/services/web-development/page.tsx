import FaqSection from "@/components/sections/FaqSection";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { hero, cta, techStack, faqs, sticky, contact } from "@/content/services/web-development";

import { ServicesSection, SolutionTypesSection, HowWeWorkSection, IndustriesSection } from "./interactive";

function TechStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Web technologies we work with
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We choose stacks for maintainability, speed, and fit — not for trendiness.
          </p>
        </div>

        <div>
          {techStack.map((group, index) => (
            <article
              key={group.category}
              className={`grid min-h-[100px] grid-cols-1 px-6 py-6 md:px-10 lg:grid-cols-[0.36fr_0.64fr] lg:px-0 ${
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

export default function WebDevelopmentPage() {
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
      <SolutionTypesSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <TechStackSection />
      <SplitImageCta
        title={cta.title}
        lede={cta.lede}
        ctaLabel={cta.ctaLabel}
        panelBackground={cta.panelBackground}
        buttonBackground={cta.buttonBackground}
        buttonText={cta.buttonText}
        image={cta.image}
        imageAlt={cta.imageAlt}
        sheen="mid"
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} />
    </InteriorPage>
  );
}
