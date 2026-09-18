import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, StackedHero } from "@/components/interior";
import { NAVY, ACCENT, DEEP_CTA, MID_IMAGE, hero, cta, principles, processSteps, experiencePoints, related, sticky, contact } from "@/content/company/how-we-work";

import { ModelsSection } from "./interactive";

function AudienceMidSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[220px] overflow-hidden border-b sm:min-h-[280px] md:min-h-[360px] border-neutral-200 lg:min-h-[480px] lg:border-b-0 lg:border-r">
            <Image
              src={MID_IMAGE}
              alt="Product team working through delivery decisions"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[55%_35%]"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <h2 className="max-w-xl text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
              Startups and established companies alike rely on clear engineering
              partnerships
            </h2>
            <p className="mt-7 max-w-lg text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              We identify the engagement shape that fits — then equip you with people
              ready to work hand-in-glove with your team, using shared tools and
              methods you can see.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Operating principles
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Technical chops matter — so do ownership, clarity, and collaboration with
            your team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-0 border-white/14 px-5 py-8 sm:min-h-[220px] sm:px-6 sm:py-10 md:min-h-[260px] md:px-8 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index % 4 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <span className="text-3xl font-light tracking-[-0.06em]" style={{ color: ACCENT }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-white/65">
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
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            A process that delivers
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            From first conversation to kickoff and care — without fake “CVs in 48 hours”
            promises we can’t guarantee.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-9 md:px-8 ${
                index % 2 === 1 ? "sm:border-l" : ""
              } ${index % 4 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t sm:border-t-0" : ""
              } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <span
                className="text-3xl font-light tracking-[-0.06em]"
                style={{ color: ACCENT }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {step.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-neutral-700">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            The Sofnology experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {experiencePoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ACCENT }} />
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

/** Solid proof CTA — no image (avoids reusing assets). */
function ProofCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="flex flex-col items-stretch gap-8 px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:flex-row lg:items-end lg:justify-end lg:gap-16 lg:px-16 lg:py-20"
          style={{ backgroundColor: DEEP_CTA }}
        >
          <div className="max-w-md text-right lg:text-left">
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-white md:text-4xl lg:text-right">
              {cta.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] tracking-tight text-white/70 lg:text-right">
              {cta.lede}
            </p>
          </div>
          <a
            href="#contact-form"
            className="group relative inline-flex min-h-16 w-full max-w-md items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] text-neutral-950 lg:shrink-0"
            style={{ backgroundColor: ACCENT, color: "#fff" }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">{cta.ctaLabel}</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HowWeWorkPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <StackedHero
          title={hero.title}
          lede={<p className="max-w-xl">{hero.lede}</p>}
          eyebrow={hero.eyebrow}
          eyebrowColor={hero.eyebrowColor}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          split="42/58"
          titleMax="max-w-md"
        />
      }
    >
      <AudienceMidSection />
      <ModelsSection />
      <PrinciplesSection />
      <ProcessSection />
      <ExperienceSection />
      <ProofCtaSection />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
        columns={related.columns}
        titleSize={related.titleSize}
      />
    </InteriorPage>
  );
}
