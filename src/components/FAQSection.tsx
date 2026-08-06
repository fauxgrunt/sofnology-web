"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Do you publish client case studies?",
    answer:
      "Not yet as named public case studies. On this site you will find example engagement paths that show how we typically structure work. When we take on a project, we can share relevant past delivery detail under NDA during discovery.",
  },
  {
    question: "What does Sofnology actually help with?",
    answer:
      "Sofnology helps businesses improve the digital layer of their operations. That can include custom software, websites, automation, cloud systems, analytics, digital marketing, conversion improvements, and the workflows that connect them.",
  },
  {
    question: "Do you only build custom software?",
    answer:
      "No. Custom software is one part of the work. We can also support digital marketing, SEO, paid campaigns, landing pages, tracking, CRM workflows, reporting dashboards, automation, and cloud infrastructure when those areas are part of the business outcome.",
  },
  {
    question: "How much does it cost to work with Sofnology?",
    answer:
      "Pricing depends on scope, timeline, complexity, and how many parts of the business need to be connected. We usually start by clarifying the goal, reviewing the current setup, and then providing a transparent estimate before delivery begins.",
  },
  {
    question: "How quickly can a project start?",
    answer:
      "Smaller audits, landing page improvements, automation reviews, and focused sprints can usually start quickly once the scope is clear. Larger software or growth-system builds need a short discovery phase so the plan, ownership, and delivery milestones are properly defined.",
  },
  {
    question: "Can you improve an existing website, app, or workflow?",
    answer:
      "Yes. We can audit what already exists, identify the weak points, modernize the experience, improve performance, add tracking, connect tools, automate manual steps, or rebuild only the parts that are slowing the business down.",
  },
  {
    question: "Do you handle digital marketing as well as development?",
    answer:
      "Yes. We support digital marketing work such as SEO, paid campaigns, landing pages, analytics, conversion tracking, content systems, and growth reporting. The advantage is that marketing and technical delivery can be planned together instead of operating separately.",
  },
  {
    question: "Who owns the final work?",
    answer:
      "The client owns the agreed deliverables, source code, assets, and configured systems after the payment and handover terms in the project agreement are complete. We keep ownership and access expectations clear before work begins.",
  },
  {
    question: "How do you keep projects under control?",
    answer:
      "We use clear scopes, milestones, progress visibility, decision logs, review cycles, and handover documentation. The goal is to keep the work connected to business priorities so projects do not drift into unclear timelines or unclear ownership.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-8 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="text-fluid-display max-w-5xl font-semibold tracking-[-0.045em] text-neutral-950">
            FAQs: Clear answers before we start
          </h2>
          <p className="text-fluid-body mt-3 max-w-5xl leading-[1.6] tracking-tight text-neutral-700 sm:mt-6 sm:leading-[1.75]">
            The first conversation should focus on your business goals, not basic
            uncertainty about process, pricing, ownership, or how the work is managed.
            These answers cover the questions most teams ask before starting with
            Sofnology.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={index > 0 ? "border-t border-neutral-200" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="tap-press flex w-full items-start justify-between gap-4 px-5 py-4 text-left active:bg-white/40 sm:items-center sm:gap-8 sm:px-6 sm:py-7 md:px-10 lg:px-16 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/30"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="text-[16px] leading-[1.3] font-semibold tracking-[-0.03em] text-neutral-950 sm:text-lg sm:leading-tight md:text-xl">
                    {faq.question}
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
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 md:px-10 lg:px-16">
                        <p className="max-w-4xl text-[14px] leading-[1.7] tracking-tight text-neutral-700 sm:text-[15px] sm:leading-[1.75]">
                          {faq.answer}
                        </p>
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
