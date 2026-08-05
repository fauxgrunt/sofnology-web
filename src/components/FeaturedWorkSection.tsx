"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FeaturedWork = {
  title: string;
  summary: string[];
  imageSrc: string;
  imageAlt: string;
  proofPoints: Array<{
    value: string;
    label: string;
  }>;
  cta: string;
};

const featuredWork: FeaturedWork[] = [
  {
    title: "Business website and lead generation system",
    summary: [
      "When a service business needs clearer positioning and a stronger path from visitor to qualified enquiry, the work starts with the full digital journey, not only the website surface.",
      "Sofnology can connect landing-page structure, analytics, search visibility, campaign readiness, and conversion tracking into one growth system the team can actually measure.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business website and lead generation planning visual",
    proofPoints: [
      { value: "Website", label: "positioning and landing-page structure" },
      { value: "Tracking", label: "analytics and conversion visibility" },
      { value: "Growth", label: "campaign-ready acquisition foundation" },
    ],
    cta: "Discuss a growth system",
  },
  {
    title: "Custom dashboard and operations portal",
    summary: [
      "For teams managing too much work through spreadsheets, scattered tools, or repeated status checks, a focused internal platform can create a clearer operating rhythm.",
      "The delivery can combine dashboard UX, backend workflows, integrations, role-based access, and handover documentation so the system becomes usable beyond launch day.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Custom dashboard and operations portal visual",
    proofPoints: [
      { value: "Portal", label: "centralized operational workspace" },
      { value: "Data", label: "cleaner reporting and team visibility" },
      { value: "Workflow", label: "reduced manual handoffs" },
    ],
    cta: "Plan an operations portal",
  },
  {
    title: "Automation and CRM workflow modernization",
    summary: [
      "When customer touchpoints live across disconnected tools, small delays and manual follow-ups quietly become operational drag.",
      "Sofnology can review the workflow, connect CRM handoffs, automate repeatable steps, and build reporting pipelines that give the business cleaner visibility.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Automation and CRM workflow modernization visual",
    proofPoints: [
      { value: "CRM", label: "connected lead and customer workflows" },
      { value: "Automation", label: "repeatable operational steps" },
      { value: "Reporting", label: "clearer management visibility" },
    ],
    cta: "Modernize a workflow",
  },
];

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 14L14 6M14 6H7M14 6V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FeaturedWorkSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="case-studies" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="text-fluid-display font-semibold tracking-[-0.045em] text-neutral-950">
            Example engagement paths
          </h2>
          <div className="mt-4 max-w-5xl space-y-3 text-[14px] leading-[1.7] tracking-tight text-neutral-700 sm:mt-6 sm:text-[15px] sm:leading-[1.75]">
            <p>
              These are the kinds of focused engagements Sofnology can shape around a
              business goal: clearer acquisition, cleaner operations, and systems that
              reduce manual work without adding unnecessary complexity.
            </p>
          </div>
        </div>

        <div>
          {featuredWork.map((work, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={work.title} className="border-b border-neutral-200 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 sm:items-center sm:gap-8 sm:px-6 sm:py-7 md:px-10 lg:px-16 ${
                    isOpen ? "bg-white/45" : "hover:bg-white/35"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] leading-[1.25] font-semibold tracking-[-0.035em] text-neutral-950 sm:text-xl sm:leading-tight">
                    {work.title}
                  </span>
                  <span
                    className="shrink-0 text-2xl leading-none font-light text-[#061a3a] sm:text-3xl"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-0 px-5 pb-7 sm:px-6 sm:pb-8 md:px-10 lg:grid-cols-2 lg:px-16 lg:pb-12">
                        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 sm:aspect-auto sm:min-h-[280px] lg:min-h-[420px]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={work.imageSrc}
                            alt={work.imageAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-white/10" />
                        </div>

                        <div className="flex flex-col border-neutral-200 pt-6 sm:pt-8 lg:border-l lg:pt-0 lg:pl-16">
                          <div className="space-y-4 text-[14px] leading-[1.7] tracking-tight text-neutral-700 sm:space-y-5 sm:text-[15px] sm:leading-[1.72]">
                            {work.summary.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>

                          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-8 md:grid-cols-3">
                            {work.proofPoints.map((point) => (
                              <div key={point.value}>
                                <p className="text-2xl leading-none font-light tracking-[-0.045em] text-[#061a3a] sm:text-3xl">
                                  {point.value}
                                </p>
                                <p className="mt-2 text-[13px] leading-[1.5] tracking-tight text-neutral-600 sm:mt-3">
                                  {point.label}
                                </p>
                              </div>
                            ))}
                          </div>

                          <a
                            href="/#contact"
                            className="group relative mt-8 flex min-h-14 items-center justify-between overflow-hidden bg-gradient-to-r from-[#0b2a5b] via-[#16457f] to-[#0b2a5b] px-5 py-4 text-base font-semibold tracking-[-0.04em] text-white sm:mt-12 sm:min-h-20 sm:px-6 sm:py-6 sm:text-xl sm:tracking-[-0.045em] md:px-8"
                          >
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                            />
                            <span className="relative z-10">{work.cta}</span>
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                              <ArrowUpRightIcon />
                            </span>
                          </a>
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
    </section>
  );
}
