import Hero from "@/components/Hero";
import HeroTrustBridge from "@/components/HeroTrustBridge";
import ExpertiseSection from "@/components/ExpertiseSection";
import OperatingPrinciples from "@/components/OperatingPrinciples";
import BusinessUpliftSection from "@/components/BusinessUpliftSection";
import StartYourGrowthSection from "@/components/StartYourGrowthSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import IndustriesHome from "@/components/IndustriesHome";
import FaqSection from "@/components/sections/FaqSection";
import { InteriorPage } from "@/components/interior";
import { contact, faqs, sticky } from "@/content/home";

export default function Home() {
  return (
    <InteriorPage hero={<Hero />} sticky={sticky} contact={contact}>
      <HeroTrustBridge />
      <ExpertiseSection />
      <FeaturedWorkSection />
      <OperatingPrinciples />
      <BusinessUpliftSection />
      <IndustriesHome />
      <StartYourGrowthSection />
      <FaqSection
        faqs={faqs.items}
        signColor={faqs.signColor}
        variant={faqs.variant}
        heading={faqs.heading}
        lede={faqs.lede}
        id={faqs.id}
        collapsible={faqs.collapsible}
      />
    </InteriorPage>
  );
}
