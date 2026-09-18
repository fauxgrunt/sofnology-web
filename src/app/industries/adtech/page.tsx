import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import {
  InteriorPage,
  FullBleedHero,
  MagentaSplitCta,
} from "@/components/interior";
import { MAGENTA, hero, cta, audiences, engageModes, related, faqs, sticky, contact } from "@/content/industries/adtech";

import { TwinPillarsSection, StackSection } from "./interactive";

function AudienceSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-sm text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
              Built for the people who own the funnel
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {audiences.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[140px] border-neutral-200 px-6 py-8 md:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index > 0 ? "border-t sm:border-t-0" : ""} ${
                  index >= 2 ? "sm:border-t" : ""
                } ${index === 0 ? "border-t lg:border-t-0" : ""}`}
              >
                <div className="mb-4 h-1 w-8" style={{ backgroundColor: MAGENTA }} />
                <h3 className="text-lg font-semibold tracking-[-0.035em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
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

function EngageSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Software shaped to the business, not the buzzword
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Brands, publishers, agencies, and research teams rely on focused martech
            and adtech engineering — you can too.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {engageModes.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[260px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: MAGENTA }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
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

export default function AdtechPage() {
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
        />
      }
    >
      <TwinPillarsSection />
      <StackSection />
      <AudienceSection />
      <EngageSection />
      <MagentaSplitCta
        lede={cta.lede}
        image={cta.image}
        imageAlt={cta.imageAlt}
        imageClass={cta.imageClass}
        background="#FF2D8A"
        panelMin="lg:min-h-[360px]"
        imageMin="lg:min-h-[360px]"
        ledeClass="max-w-[14rem]"
      />
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
