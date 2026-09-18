import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ContactSection from "@/components/ContactSection";
import type { InteriorContact, InteriorSticky } from "@/lib/interior";

type InteriorPageProps = {
  hero: ReactNode;
  children: ReactNode;
  sticky: InteriorSticky;
  contact?: InteriorContact;
};

/**
 * Shared chrome for every route, including the homepage: nav, sticky conversion
 * bar, contact, footer. The hero sits outside the content rail; everything else
 * goes in `children`.
 */
export default function InteriorPage({
  hero,
  children,
  sticky,
  contact,
}: InteriorPageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        {hero}
        <div className="content-rail">
          {children}
          <ContactSection
            showIntro={contact?.showIntro ?? false}
            accent={contact?.accent}
          />
        </div>
      </main>
      <StickyCTA
        href={sticky.href ?? "#contact-form"}
        label={sticky.label}
        backgroundColor={sticky.backgroundColor}
        textColor={sticky.textColor}
        pastHeroPx={sticky.pastHeroPx}
      />
      <Footer />
    </>
  );
}
