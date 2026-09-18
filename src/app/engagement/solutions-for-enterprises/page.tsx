import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { InteriorPage, SplitStackedHero } from "@/components/interior";
import { SLATE, CTA_IMAGE, hero, cta, sticky, contact } from "@/content/engagement/solutions-for-enterprises";

import { DistinctSection, ServicesSection, HowWeWorkSection, OutcomesSection } from "./interactive";

function EnterpriseCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            <Image
              src={CTA_IMAGE}
              alt={cta.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className={cta.imageClass}
            />
          </div>

          <div className="flex min-h-[340px] items-center bg-white px-6 py-12 md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20">
            <div className="w-full max-w-3xl">
              <div className="mb-8 h-1 w-14" style={{ backgroundColor: SLATE }} />
              <h2 className="max-w-2xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] text-neutral-950 md:text-5xl">
                {cta.title}
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                {cta.lede}
              </p>

              <a
                href={cta.ctaHref}
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white md:px-8"
                style={{ backgroundColor: SLATE }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">{cta.ctaLabel}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsForEnterprisesPage() {
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
          image={hero.image}
          imageAlt={hero.imageAlt}
          imageClass={hero.imageClass}
          imageMinClass={hero.imageMinClass}
          layout="image-first"
          wedge={false}
        />
      }
    >
      <DistinctSection />
      <ServicesSection />
      <HowWeWorkSection />
      <OutcomesSection />
      <EnterpriseCtaSection />
    </InteriorPage>
  );
}
