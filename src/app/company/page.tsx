import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, StackedHero } from "@/components/interior";
import {
  NAVY,
  ACCENT,
  PRIMARY_CTA,
  PROMISE_IMAGE,
  JOURNEY_IMAGE,
  hero,
  promiseCta,
  cta,
  whyPoints,
  focusAreas,
  conversationSteps,
  related,
  sticky,
  contact,
} from "@/content/company/about";


function WhySection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Why Sofnology — without the fake scoreboard
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We help companies innovate and ship with engineering they can trust. No
            invented years-in-business, IPO tallies, or unicorn math.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {whyPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-0 border-neutral-200 px-5 py-8 sm:min-h-[220px] sm:px-6 sm:py-10 md:min-h-[260px] md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: ACCENT }}
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

function FocusSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            What we focus on
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-white/14 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div className="mb-6 h-1 w-10" style={{ backgroundColor: ACCENT }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/68">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarlyConversationsSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            How early conversations work
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            We don’t publish a founder gallery. Contact stays practical — email,
            discovery, then the people on your project when the work is real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {conversationSteps.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: ACCENT }}
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

/** Promise CTA — distinct image from hero, links to How we work. */
function PromiseCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[320px] overflow-hidden border-b border-neutral-200 lg:min-h-[400px] lg:border-b-0 lg:border-r">
            <Image
              src={PROMISE_IMAGE}
              alt={promiseCta.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-[48%_40%]"
            />
            <div className="absolute inset-0 bg-navy/55" />
            <div className="relative flex h-full min-h-[320px] items-end px-6 py-10 md:px-10 lg:min-h-[400px] lg:px-12">
              <p className="max-w-sm text-2xl font-semibold tracking-[-0.045em] text-white md:text-3xl">
                {promiseCta.overlay}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between px-6 py-12 md:px-10 lg:min-h-[400px] lg:px-16">
            <div>
              <h2 className="max-w-md text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
                {promiseCta.title}
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                {promiseCta.lede}
              </p>
            </div>
            <Link
              href={promiseCta.href}
              className="group relative mt-10 inline-flex min-h-16 w-full max-w-md items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] text-white md:mt-12"
              style={{ backgroundColor: ACCENT }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">{promiseCta.ctaLabel}</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Closing CTA — third distinct image, used once. */
function JourneyCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="relative min-h-[300px] overflow-hidden border-b border-neutral-200 lg:min-h-[380px] lg:border-b-0 lg:border-r">
            <Image
              src={JOURNEY_IMAGE}
              alt={cta.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-[40%_45%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/40" />
          </div>

          <div
            className="flex min-h-[300px] flex-col justify-between px-6 py-12 md:px-10 lg:min-h-[380px] lg:px-14"
            style={{ backgroundColor: NAVY }}
          >
            <div>
              <h2 className="max-w-sm text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-white md:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-[1.72] tracking-tight text-white/70">
                {cta.lede}
              </p>
              <a
                href={`mailto:${cta.email}`}
                className="mt-6 inline-block text-[15px] font-semibold tracking-tight text-white underline-offset-4 hover:underline"
              >
                {cta.email}
              </a>
            </div>
            <a
              href="#contact-form"
              className="group relative mt-10 flex min-h-16 w-full items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">{PRIMARY_CTA}</span>
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

export default function CompanyPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <StackedHero
          title={hero.title}
          lede={hero.lede}
          eyebrow={hero.eyebrow}
          eyebrowColor={hero.eyebrowColor}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          split="58/42"
          titleMax="max-w-xl"
        />
      }
    >
      <WhySection />
      <FocusSection />
      <EarlyConversationsSection />
      <PromiseCtaSection />
      <JourneyCtaSection />
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
