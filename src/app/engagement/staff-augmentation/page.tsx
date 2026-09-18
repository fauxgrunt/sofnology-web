import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import {
  InteriorPage,
  SplitImageCta,
  SplitStackedHero,
} from "@/components/interior";
import { hero, cta, roles, capabilityAreas, related, faqs, sticky, contact } from "@/content/engagement/staff-augmentation";

import { WinsSection, ComparisonSection, FitSection, HowWeWorkSection } from "./interactive";

function TalentSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Roles and expertise you can add
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From planning through maintenance — fill skill gaps at the phase you’re in,
            without standing up a full new department.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="border-b border-neutral-200 px-6 py-10 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
              Team roles
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="text-[15px] leading-tight tracking-tight text-neutral-700"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div>
            {capabilityAreas.map((group, index) => (
              <article
                key={group.title}
                className={`grid grid-cols-1 px-6 py-8 md:px-10 lg:grid-cols-[0.4fr_0.6fr] lg:px-12 ${
                  index > 0 ? "border-t border-neutral-200" : ""
                }`}
              >
                <h3 className="text-lg font-semibold tracking-[-0.035em] text-neutral-950">
                  {group.title}
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-0">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[15px] leading-tight tracking-tight text-neutral-700"
                    >
                      {item}
                    </span>
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

export default function StaffAugmentationPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <SplitStackedHero
          title={hero.title}
          lede={hero.lede}
          titleClass={hero.titleClass}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          ctaArrowColor={hero.ctaArrowColor}
          ctaMaxWidth={hero.ctaMaxWidth}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          wedge="compact"
        />
      }
    >
      <WinsSection />
      <TalentSection />
      <ComparisonSection />
      <FitSection />
      <HowWeWorkSection />
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
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} variant={faqs.variant} />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        variant={related.variant}
        columns={related.columns}
        actionColor={related.actionColor}
      />
    </InteriorPage>
  );
}
