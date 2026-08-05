import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroTrustBridge from "@/components/HeroTrustBridge";
import ExpertiseSection from "@/components/ExpertiseSection";
import OperatingPrinciples from "@/components/OperatingPrinciples";
import BusinessUpliftSection from "@/components/BusinessUpliftSection";
import DeliveryConfidenceSection from "@/components/DeliveryConfidenceSection";
import StartYourGrowthSection from "@/components/StartYourGrowthSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <Hero />
        <div className="content-rail">
          <HeroTrustBridge />
          <ExpertiseSection />
          <OperatingPrinciples />
          <BusinessUpliftSection />
          <DeliveryConfidenceSection />
          <StartYourGrowthSection />
          <FeaturedWorkSection />
          <FAQSection />
          <ContactSection />
        </div>
      </main>
      <StickyCTA
        href="/#contact-form"
        label="Start a conversation"
        backgroundColor="#061a3a"
        textColor="#ffffff"
        pastHeroPx={320}
      />
      <Footer />
    </>
  );
}
