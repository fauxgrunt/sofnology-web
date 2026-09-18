import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, FullBleedHero } from "@/components/interior";
import { LIME, DEEP, MID_IMAGE, hero, cta, trustPoints, aiPoints, related, faqs, sticky, contact } from "@/content/industries/healthtech";

import { HelpSection, TelehealthSection, BeyondSection } from "./interactive";

function TrustSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[220px] overflow-hidden border-b sm:min-h-[280px] md:min-h-[360px] border-neutral-200 lg:min-h-full lg:border-b-0 lg:border-r">
            <Image
              src={MID_IMAGE}
              alt="Glass cube containing neon green organic form — healthtech trust visual"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-[45%_50%]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ backgroundColor: DEEP }}>
            {trustPoints.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[180px] border-white/14 px-6 py-8 md:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index >= 2 ? "border-t" : ""}`}
              >
                <div className="mb-5 h-1 w-10" style={{ backgroundColor: LIME }} />
                <h3 className="text-lg font-semibold tracking-[-0.035em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.68] tracking-tight text-white/68">
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

function AiSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            AI that earns clinical trust
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Efficiency with transparency and human oversight — you stay in control while
            AI strengthens the product and the people delivering care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {aiPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: DEEP }}
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

function HealthtechCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div
            className="flex min-h-[300px] items-center border-b border-neutral-200 px-6 py-12 md:px-10 lg:min-h-[400px] lg:border-b-0 lg:px-16"
            style={{ backgroundColor: LIME }}
          >
            <div className="max-w-md">
              <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.05em] text-[#0B3D2E] md:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-[#0B3D2E]/80">
                {cta.lede}
              </p>
            </div>
          </div>

          <div
            className="flex min-h-[300px] items-end px-6 py-12 md:px-10 lg:min-h-[400px] lg:px-16"
            style={{ backgroundColor: DEEP }}
          >
            <a
              href={cta.ctaHref}
              className="group relative flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#0B3D2E] md:px-8"
              style={{ backgroundColor: LIME }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10 max-w-[16rem] leading-tight">{cta.ctaLabel}</span>
              <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HealthtechPage() {
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
          overlay="card"
          sheen="wash"
          gradientClass="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/35"
        />
      }
    >
      <HelpSection />
      <TelehealthSection />
      <BeyondSection />
      <TrustSection />
      <AiSection />
      <HealthtechCtaSection />
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
