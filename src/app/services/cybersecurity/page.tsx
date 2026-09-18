import { InteriorPage, SplitImageCta, SplitStackedHero } from "@/components/interior";
import { TEAL, hero, cta, sticky, contact } from "@/content/services/cybersecurity";

import { AssessmentServicesSection, AuditPackagesSection } from "./interactive";

function IntroBand() {
  return (
    <section className="border-b border-white/10" style={{ backgroundColor: TEAL }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="grid min-h-[220px] grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden lg:block" />
          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <p className="max-w-3xl text-[16px] leading-[1.75] tracking-tight text-white/82">
              Whether you want to strengthen an existing security posture, design a
              framework around a new product, or get a clear remediation plan after an
              audit, Sofnology can help you make security decisions that are practical,
              prioritized, and aligned with your delivery roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CybersecurityPage() {
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
          ctaArrowColor={hero.ctaArrowColor}
        />
      }
    >
      <IntroBand />
      <AssessmentServicesSection />
      <AuditPackagesSection />
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
    </InteriorPage>
  );
}
