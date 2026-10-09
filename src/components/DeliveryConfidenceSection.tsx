"use client";

import { useState } from "react";
import Image from "next/image";
import AccordionPanel from "@/components/AccordionPanel";

type DeliveryItem = {
  title: string;
  description: string;
  points: string[];
};

const deliveryItems: DeliveryItem[] = [
  {
    title: "A plan that still holds at release",
    description:
      "The first conversation names the system, the constraints, and who owns the result. Architecture, testing, and handover are part of that plan.",
    points: [
      "Discovery and scope definition",
      "Architecture and integration planning",
      "Quality assurance workflows",
      "Deployment readiness",
      "Maintainable code structure",
      "Technical handover documentation",
    ],
  },
  {
    title: "Digital marketing tied to the page",
    description:
      "Ads and search only count when the page can take the enquiry. Tracking sits on the calls and forms the business actually wants.",
    points: [
      "SEO and content direction",
      "Paid campaign landing pages",
      "Conversion tracking setup",
      "Analytics and reporting dashboards",
      "Customer journey improvements",
      "Performance review cycles",
    ],
  },
  {
    title: "Repeat work that still moves by hand",
    description:
      "The same request is retyped between the phone, the CRM, and a spreadsheet. Automation connects those steps where the API already exists.",
    points: [
      "Workflow automation",
      "CRM and business system integration",
      "Reporting pipelines",
      "Internal dashboards",
      "AI-assisted tools where useful",
      "Process documentation",
    ],
  },
  {
    title: "You can see where the work is",
    description:
      "Scope, milestones, and the next decision stay visible. The project does not depend on asking for a status.",
    points: [
      "Weekly progress visibility",
      "Milestone-based delivery",
      "Clear ownership and decision logs",
      "Risk and dependency tracking",
      "Reviewable work increments",
      "Post-launch support planning",
    ],
  },
];

export default function DeliveryConfidenceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="delivery-confidence" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="text-fluid-display font-semibold tracking-[-0.045em] text-neutral-950">
            The build, the marketing, and the handover stay one record
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-neutral-200 p-5 sm:p-6 md:p-10 lg:border-r lg:border-b-0 lg:p-12">
            <div className="relative aspect-[16/11] overflow-hidden sm:aspect-auto sm:min-h-[320px] md:min-h-[460px] lg:min-h-[420px]">
              <Image
                src="/digital-growth.jpg"
                alt="A working session on a delivery plan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/5" />
            </div>
          </div>

          <div>
            {deliveryItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className={index > 0 ? "border-t border-neutral-200" : undefined}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className={`tap-press flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-chrome ease-motion sm:items-center sm:gap-6 sm:px-6 sm:py-7 md:px-10 lg:px-12 ${
                      isOpen
                        ? "bg-white/45"
                        : "[@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/35"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`delivery-panel-${index}`}
                    id={`delivery-trigger-${index}`}
                  >
                    <span className="text-xl leading-tight font-semibold tracking-[-0.035em] text-navy">
                      {item.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-3xl leading-none font-light text-navy"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AccordionPanel
                    id={`delivery-panel-${index}`}
                    labelledBy={`delivery-trigger-${index}`}
                    open={isOpen}
                  >
                    <div className="px-6 pb-8 md:px-10 lg:px-12">
                      <p className="max-w-2xl text-[14px] leading-[1.72] tracking-tight text-neutral-700">
                        {item.description}
                      </p>

                      <div className="mt-7 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
                        {item.points.map((point) => (
                          <p
                            key={point}
                            className="text-[14px] leading-[1.55] tracking-tight text-neutral-700"
                          >
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  </AccordionPanel>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
