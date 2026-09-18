import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import FaqSection from "@/components/sections/FaqSection";
import {
  InteriorPage,
  SplitImageCta,
  SplitStackedHero,
} from "@/components/interior";
import { WINE, hero, cta, faqs, sticky, contact } from "@/content/engagement/solutions-for-startups";

import { StartupServicesSection, DomainsSection, PartnershipModelsSection } from "./interactive";

function SecuritySection() {
  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center border-b border-neutral-200 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
              Built with security in mind
            </h2>
          </div>
          <div className="px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
              We move quickly without treating security as an afterthought. Products are
              shaped for resilience, sensible compliance, and long-term partnership —
              not throwaway prototypes that fall apart at scale.
            </p>
            <Link
              href="/services/cybersecurity"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#1A1216] transition-transform duration-300 hover:translate-x-1"
            >
              Explore cybersecurity
              <span style={{ color: WINE }}>
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsForStartupsPage() {
  return (
    <InteriorPage
      sticky={sticky}
      contact={contact}
      hero={
        <SplitStackedHero
          title={hero.title}
          lede={hero.lede}
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
      <StartupServicesSection />
      <DomainsSection />
      <PartnershipModelsSection />
      <SecuritySection />
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
    </InteriorPage>
  );
}
