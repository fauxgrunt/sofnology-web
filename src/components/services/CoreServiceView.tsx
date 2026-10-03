import Link from "next/link";
import { InteriorPage, FullBandCta, StackedHero } from "@/components/interior";
import FaqSection from "@/components/sections/FaqSection";
import { workBySlugs } from "@/content/work";
import type { ServicePageData } from "@/content/services/catalog";
import { brand } from "@/lib/theme";

const deliverySteps = [
  "Discovery",
  "Planning / Architecture",
  "Design",
  "Development / Implementation",
  "Testing",
  "Deployment",
  "Handover",
  "Ongoing support",
];

const engagementOptions = [
  { title: "Project-based delivery", href: "/how-we-work#project-based", description: "Defined scope, milestones, delivery, testing, and handover." },
  { title: "Dedicated team", href: "/how-we-work#dedicated-team", description: "A team aligned around the client's ongoing roadmap." },
  { title: "Staff augmentation", href: "/how-we-work#staff-augmentation", description: "Add specific engineering capability to an existing team." },
  { title: "Managed support / retainer", href: "/how-we-work#ongoing-support", description: "Monthly maintenance, optimisation, and technical support." },
];

const sticky = {
  href: "#contact-form",
  label: "Start a Project",
  backgroundColor: brand.navy,
  textColor: "#ffffff",
  pastHeroPx: 280,
};

export default function CoreServiceView({ service }: { service: ServicePageData }) {
  const related = workBySlugs(service.workSlugs);

  return (
    <InteriorPage
      sticky={sticky}
      contact={{ showIntro: true, accent: "navy" }}
      hero={
        <StackedHero
          image={service.image}
          imageAlt={service.imageAlt}
          imageClass="object-cover object-center"
          title={service.title}
          lede={service.lede}
          eyebrow="Sofnology"
          eyebrowColor={brand.accent}
          ctaLabel="Discuss your project"
          ctaHref="#contact-form"
          ctaBackground={brand.navy}
        />
      }
    >
      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
          <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
              What we deliver
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {service.cards.map((card, index) => (
              <article
                key={card.title}
                className={`border-neutral-200 px-5 py-8 sm:px-6 md:px-10 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">{card.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-neutral-700">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200 lg:grid lg:grid-cols-[0.4fr_0.6fr]">
          <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:border-r lg:border-b-0 lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
              Problems we solve
            </h2>
          </div>
          <ul className="px-5 py-8 sm:px-6 md:px-10 lg:px-16 lg:py-12">
            {service.problems.map((problem) => (
              <li key={problem} className="border-b border-neutral-200 py-4 text-[16px] text-neutral-800 last:border-b-0">
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
            Technologies and capabilities
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.7] text-neutral-700">
            Listed only where Sofnology can deliver the work directly or with an established delivery partner under Sofnology’s ownership.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {service.technologies.map((item) => (
              <li key={item} className="bg-white px-3 py-2 text-[13px] font-semibold tracking-[-0.02em] text-neutral-800 ring-1 ring-neutral-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-b border-neutral-200 bg-page">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="flex items-end justify-between gap-6 border-b border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:px-16">
              <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
                Selected work
              </h2>
              <Link href="/work" className="text-[14px] font-semibold text-navy underline underline-offset-4">
                View all work
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {related.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  className={`block px-5 py-8 sm:px-6 md:px-8 ${index > 0 ? "border-t border-neutral-200 md:border-t-0 md:border-l" : ""}`}
                >
                  <p className="text-[12px] font-semibold tracking-[0.14em] text-navy uppercase">{item.industry}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-neutral-700">{item.summary}</p>
                  <p className="mt-4 text-[13px] text-neutral-600">{item.services.join(" · ")}</p>
                  <p className="mt-2 text-[13px] font-semibold text-neutral-800">{item.technologies.slice(0, 5).join(" · ")}</p>
                  <p className="mt-5 text-[14px] font-semibold text-navy">View case study →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
            How we deliver
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <li key={step} className="border border-neutral-200 bg-white px-4 py-5">
                <span className="text-[12px] font-semibold tracking-[0.14em] text-navy">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[15px] font-semibold text-neutral-950">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-page">
        <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
          <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 md:px-10 lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl">
              Engagement options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {engagementOptions.map((option, index) => (
              <Link
                key={option.href}
                href={option.href}
                className={`block px-5 py-8 sm:px-6 md:px-10 lg:px-12 ${index % 2 === 1 ? "md:border-l md:border-neutral-200" : ""} ${index > 1 ? "border-t border-neutral-200" : index > 0 ? "border-t border-neutral-200 md:border-t-0" : ""}`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">{option.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">{option.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={service.faqs}
        signColor={brand.navy}
        variant="regular"
        heading="Questions about this work"
      />

      <FullBandCta
        title="Have a project in mind?"
        lede="Tell us what you want to build, improve, automate, or scale."
        ctaLabel="Start a Project"
        ctaHref="#contact-form"
        panelBackground={brand.navy}
        buttonBackground="#ffffff"
        buttonText={brand.navy}
      />
    </InteriorPage>
  );
}
