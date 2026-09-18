import { ArrowUpRightIcon } from "@/components/icons";
import FaqSection from "@/components/sections/FaqSection";
import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { LIME, checklistItems, technologyStack, faqs, hero, cta, sticky, contact } from "@/content/services/mobile-development";

import { AudienceSection, MobileTypesSection, DevelopmentServicesSection, RelatedServicesSection, InnovationSection, IndustryInnovationSection, EngagementShapesSection } from "./interactive";

function ChecklistSection() {
  return (
    <section id="mobile-apps" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:border-b-0 lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Let’s tick all the right boxes
            </h2>
          </div>
          <div>
            {checklistItems.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-24 items-center gap-5 border-neutral-200 px-6 py-6 md:px-10 lg:px-12 ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#101413]"
                  style={{ backgroundColor: LIME }}
                >
                  ✓
                </span>
                <p className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-200 bg-[#0B4F20]">
          <div className="grid min-h-0 grid-cols-1 sm:min-h-[280px] md:min-h-[360px] lg:grid-cols-[0.46fr_0.54fr]">
            <div className="hidden lg:block" />
            <div className="flex items-center px-5 py-9 text-white sm:px-6 sm:py-12 md:py-14 md:px-10 lg:px-16">
              <div className="max-w-3xl">
                <h3 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
                  If this sounds like you, we can help shape the right mobile path.
                </h3>
                <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                  Sofnology can turn the idea into a practical mobile roadmap, a focused
                  first release, or a connected app that supports real business workflows.
                </p>
                <a
                  href="#contact-form"
                  className="group relative mt-10 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#101413] md:px-8"
                  style={{ backgroundColor: LIME }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">Book a discovery call</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="bg-[#101413] text-white">
          <div className="min-h-0 border-b border-white/14 sm:min-h-[240px] md:min-h-[310px] px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
            <div className="lg:px-16">
              <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Mobile technology stack
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/72">
                The stack should match the app’s users, maintenance needs, integrations,
                and release plan, not simply follow the newest tool trend.
              </p>
            </div>
          </div>

          <div>
            {technologyStack.map((group, index) => (
              <article
                key={group.category}
                className={`grid min-h-[132px] grid-cols-1 border-white/14 px-6 py-7 md:px-10 lg:grid-cols-[0.42fr_0.58fr] lg:px-0 ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <div className="flex items-start lg:px-8 xl:px-12">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-[15px] leading-tight tracking-tight text-white/80 md:grid-cols-3 lg:mt-0 lg:px-8 xl:px-12">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MobileDevelopmentPage() {
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
        />
      }
    >
      <ChecklistSection />
      <AudienceSection />
      <MobileTypesSection />
      <DevelopmentServicesSection />
      <RelatedServicesSection />
      <IndustryInnovationSection />
      <InnovationSection />
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
      <EngagementShapesSection />
      <TechnologyStackSection />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} id={faqs.id} />
    </InteriorPage>
  );
}
