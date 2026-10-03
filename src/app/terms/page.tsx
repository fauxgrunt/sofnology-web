import { InteriorPage, StackedHero } from "@/components/interior";
import { pageMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/site";
import { brand } from "@/lib/theme";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "How to read this website and how a Sofnology engagement is agreed.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InteriorPage
      sticky={{ href: "/#contact-form", label: "Start a Project", backgroundColor: brand.navy, textColor: "#ffffff" }}
      contact={{ showIntro: false, accent: "navy" }}
      hero={
        <StackedHero
          image="/conversation.jpg"
          imageAlt="Conversation"
          imageClass="object-cover object-center"
          title="Terms of Use"
          lede="The website describes services. A project starts only when both sides agree scope, price, and handover in writing."
          ctaLabel="Contact"
          ctaHref={`mailto:${SITE_EMAIL}`}
          ctaBackground={brand.navy}
        />
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] space-y-6 border-x border-neutral-200 px-5 py-10 text-[16px] leading-[1.75] text-neutral-800 sm:px-6 md:px-10 lg:px-16">
          <p>Pages on this site are information, not an offer to start work and not a promise of a particular result, timeline, or team size.</p>
          <p>Case studies describe selected delivered work. Some clients are unnamed because the agreement does not allow a public name. Figures are included only when a record verifies them.</p>
          <p>Sending the contact form does not create a contract. Sofnology will reply, and any engagement is agreed separately.</p>
          <p>Questions about these terms: {SITE_EMAIL}.</p>
        </div>
      </section>
    </InteriorPage>
  );
}
