import { InteriorPage, StackedHero } from "@/components/interior";
import { pageMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/site";
import { brand } from "@/lib/theme";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "What Sofnology collects through the website and how that information is used.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <InteriorPage
      sticky={{ href: "/#contact-form", label: "Start a Project", backgroundColor: brand.navy, textColor: "#ffffff" }}
      contact={{ showIntro: false, accent: "navy" }}
      hero={
        <StackedHero
          image="/conversation.jpg"
          imageAlt="Conversation"
          imageClass="object-cover object-center"
          title="Privacy Policy"
          lede="This page describes the information the website form collects and what Sofnology does with it."
          ctaLabel="Email Sofnology"
          ctaHref={`mailto:${SITE_EMAIL}`}
          ctaBackground={brand.navy}
        />
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] space-y-6 border-x border-neutral-200 px-5 py-10 text-[16px] leading-[1.75] text-neutral-800 sm:px-6 md:px-10 lg:px-16">
          <p>The contact form asks for your name, work email, and message. Phone, company website, project type, and a file are optional. You also confirm that Sofnology may contact you about the request.</p>
          <p>That information is emailed to Sofnology so the team can reply. It is not sold. An optional file is attached to the internal email when you include one, up to 4MB.</p>
          <p>The site is hosted on Vercel. Form email is sent through Resend. Those providers process the data needed to deliver the site and the message.</p>
          <p>To ask for a copy, a correction, or deletion of a message you sent, email {SITE_EMAIL}.</p>
        </div>
      </section>
    </InteriorPage>
  );
}
