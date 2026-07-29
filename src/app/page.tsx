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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
      <Footer />
    </>
  );
}
