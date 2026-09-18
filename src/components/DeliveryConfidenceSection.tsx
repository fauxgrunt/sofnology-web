"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { accordionMotion } from "@/lib/motion";
import Image from "next/image";

type DeliveryItem = {
  title: string;
  description: string;
  points: string[];
};

const deliveryItems: DeliveryItem[] = [
  {
    title: "Launch with a clear technical foundation",
    description:
      "From the first discussion, we turn business needs into a practical delivery plan with architecture, QA, deployment, and maintainability considered early.",
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
    title: "Turn traffic into measurable growth",
    description:
      "Marketing work is connected to the same operational reality as your product, so campaigns, landing pages, analytics, and conversions can be measured together.",
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
    title: "Remove manual bottlenecks",
    description:
      "We identify repeatable work inside your business and replace fragile manual handoffs with automation, integrations, and clearer operational visibility.",
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
    title: "Stay informed, aligned, and in control",
    description:
      "Every engagement is structured around visible progress, clear ownership, and practical communication, so the work does not drift away from business priorities.",
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
            Digital growth delivery without doubt
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-neutral-200 p-5 sm:p-6 md:p-10 lg:border-r lg:border-b-0 lg:p-12">
            <div className="relative aspect-[16/11] overflow-hidden sm:aspect-auto sm:min-h-[320px] md:min-h-[460px] lg:min-h-[420px]">
              <Image
                src="/digital-growth.jpg"
                alt="Sofnology team reviewing delivery and growth systems"
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

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`delivery-panel-${index}`}
                        role="region"
                        aria-labelledby={`delivery-trigger-${index}`}
                        {...accordionMotion}
                        className="overflow-hidden"
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
