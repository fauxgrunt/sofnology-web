import FaqSection from "@/components/sections/FaqSection";
import RelatedSection from "@/components/sections/RelatedSection";
import {
  InteriorPage,
  SplitImageCta,
  SplitStackedHero,
} from "@/components/interior";
import { hero, cta, related, faqs, sticky, contact } from "@/content/industries/foodtech";

import { HelpSection, AudiencesSection, ProductSurfacesSection, OrderJourneySection, DeliverySection } from "./interactive";

export default function FoodtechPage() {
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
          layout="image-first"
          wedge={false}
          sheen="soft"
        />
      }
    >
      <HelpSection />
      <AudiencesSection />
      <ProductSurfacesSection />
      <OrderJourneySection />
      <DeliverySection />
      <RelatedSection
        heading={related.heading}
        links={related.links}
        accent={related.accent}
        actionColor={related.actionColor}
        actionLabel={related.actionLabel}
      />
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
        sheen="wash"
      />
      <FaqSection faqs={faqs.items} signColor={faqs.signColor} />
    </InteriorPage>
  );
}
