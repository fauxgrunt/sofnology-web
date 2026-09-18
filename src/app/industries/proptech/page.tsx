import Image from "next/image";
import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import {
  InteriorPage,
  SplitImageCta,
  SplitStackedHero,
} from "@/components/interior";
import { ORANGE, DEEP, MID_IMAGE, hero, cta, iotItems, approachPoints, techStack, related, faqs, sticky, contact } from "@/content/industries/proptech";

import { ScenariosSection, SolutionsSection } from "./interactive";

function AiSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            <Image
              src={MID_IMAGE}
              alt="Abstract 3D data bars and glass chart on green hills"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-[45%_50%]"
            />
          </div>

          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <div className="max-w-xl">
              <p
                className="text-[12px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: ORANGE }}
              >
                AI to power real estate solutions
              </p>
              <p className="mt-6 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                Custom proptech with AI-driven features helps automate operations, sharpen
                decisions, and make resident and leasing experiences more responsive across
                the property lifecycle.
              </p>
              <h2 className="mt-10 text-3xl leading-[1.12] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
                Leasing, ops, and workflows — automated where it earns trust
              </h2>
              <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                From conversational leasing assistants to internal automation that keeps
                engineering and ops context intact — AI is applied to reduce manual load,
                not to invent vanity features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IotSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            IoT and hardware that connect to the building
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Proptech isn’t only screens — Sofnology integrates digital property ops with
            the physical layer: locks, cameras, sensors, and access systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {iotItems.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t border-white/14 md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ORANGE }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Why Sofnology for proptech
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Property platforms need multi-tenant discipline, hardware-aware integrations,
            and modernization that doesn’t interrupt live operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {approachPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[200px] border-neutral-200 px-6 py-9 md:px-8 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ORANGE }} />
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

function TechStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Tech stack for real estate products
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Product, mobile, IoT, data, and the integrations property businesses already
            run — chosen for maintainability under portfolio scale.
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

export default function ProptechPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <SplitStackedHero
          title={hero.title}
          lede={hero.lede}
          eyebrow={hero.eyebrow}
          titleClass={hero.titleClass}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          ctaMaxWidth={hero.ctaMaxWidth}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          wedge="compact"
        />
      }
    >
      <ScenariosSection />
      <SolutionsSection />
      <AiSection />
      <IotSection />
      <ApproachSection />
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
        imageClass={cta.imageClass}
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
        titleSize={related.titleSize}
      />
    </InteriorPage>
  );
}
