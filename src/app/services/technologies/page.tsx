import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import RelatedSection from "@/components/sections/RelatedSection";
import { InteriorPage, FullBleedHero } from "@/components/interior";
import { LIME, INK, MID_IMAGE, emerging, capabilities, platformLanes, hero, cta, related, sticky, contact } from "@/content/services/technologies";

import { StackCatalogSection, ScenariosSection } from "./interactive";

function EmergingSection() {
  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: INK }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            We adopt useful tech before it’s noise
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/68">
            Emerging lanes when the product needs them — without claiming decades of hype
            or inventing project counts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {emerging.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[220px] border-white/14 px-6 py-10 md:px-8 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""}`}
            >
              <div className="mb-5 h-1 w-10" style={{ backgroundColor: LIME }} />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/68">
                {item.items}
              </p>
              {"href" in item && item.href && (
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                  style={{ color: LIME }}
                >
                  Explore
                  <ArrowUpRightIcon />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Capabilities glance — lifestyle image once + labels, no fake headcount. */

function CapabilitiesSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Sofnology tech power at a glance
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
            Capability lanes we deliver in — not invented expert tallies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="relative min-h-[220px] overflow-hidden border-b sm:min-h-[280px] md:min-h-[360px] border-neutral-200 lg:min-h-full lg:border-b-0 lg:border-r">
            <Image
              src={MID_IMAGE}
              alt="Hands at a laptop — building with Sofnology technology stacks"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover object-[40%_50%]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {capabilities.map((cap, index) => (
              <Link
                key={cap.title}
                href={cap.href}
                className={`group flex min-h-[120px] flex-col justify-center border-neutral-200 px-6 py-8 transition-colors hover:bg-white md:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index >= 2 ? "border-t" : ""}`}
              >
                <span
                  className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950 transition-colors group-hover:opacity-90"
                  style={{ color: INK }}
                >
                  {cap.title}
                </span>
                <span
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold tracking-tight opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100"
                  style={{ color: INK }}
                >
                  View
                  <ArrowUpRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  return (
    <section id="platforms" className="scroll-mt-24 border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "#737373" }}
          >
            Platforms
          </p>
          <h2 className="mt-4 max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Cloud and enterprise platforms we build around
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700">
            Navigation shortcuts into real work — not separate micro-sites for every vendor logo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {platformLanes.map((lane, index) => (
            <article
              key={lane.title}
              className={`flex min-h-0 flex-col sm:min-h-[220px] md:min-h-[280px] justify-between border-neutral-200 px-6 py-10 md:px-10 lg:px-12 ${
                index === 1 ? "border-t lg:border-t-0 lg:border-l" : ""
              }`}
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {lane.title}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-[1.7] tracking-tight text-neutral-700">
                  {lane.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {lane.chips.map((chip) => (
                    <li
                      key={chip}
                      className="border border-neutral-300 bg-white px-3 py-2 text-[13px] font-medium tracking-tight text-neutral-800"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={lane.href}
                className="mt-10 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight transition-transform hover:translate-x-1"
                style={{ color: INK }}
              >
                {lane.href.startsWith("#") ? "Talk platforms" : "View cloud consulting"}
                <ArrowUpRightIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Closing CTA — violet panel + lime action; no third image. */

function EdgeCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <Link
          href={cta.stripHref}
          className="group relative flex min-h-14 items-center justify-between px-6 text-[15px] font-semibold tracking-[-0.03em] md:px-10 lg:px-16"
          style={{ backgroundColor: LIME, color: INK }}
        >
          <span>{cta.stripLabel}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </Link>

        <div
          className="flex flex-col justify-between gap-10 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex-row lg:items-end lg:px-16 lg:py-16"
          style={{ backgroundColor: cta.panelBackground }}
        >
          <div className="max-w-lg text-white">
            <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.045em] md:text-4xl">
              {cta.title}
            </h2>
            <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-white/80">
              {cta.lede}
            </p>
          </div>
          <a
            href="#contact-form"
            className="group relative inline-flex min-h-16 w-full max-w-md items-center justify-between overflow-hidden px-6 text-[15px] font-semibold tracking-[-0.03em] lg:shrink-0"
            style={{ backgroundColor: cta.buttonBackground, color: cta.buttonText }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/40 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
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

export default function TechnologiesPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <FullBleedHero
          overlay="eyebrow"
          eyebrow={hero.eyebrow}
          eyebrowColor={hero.eyebrowColor}
          title={hero.title}
          lede={hero.lede}
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          ctaBackground={hero.ctaBackground}
          ctaText={hero.ctaText}
          minHeightClass={hero.minHeightClass}
          gradientClass={hero.gradientClass}
          titleClass={hero.titleClass}
          sheen="wash"
        />
      }
    >
      <StackCatalogSection />
      <EmergingSection />
      <CapabilitiesSection />
      <PlatformsSection />
      <ScenariosSection />
      <EdgeCtaSection />
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
