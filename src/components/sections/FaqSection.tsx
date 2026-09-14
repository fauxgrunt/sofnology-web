"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { motionEase } from "@/lib/motion";

export type Faq = {
  question: string;
  answer: string;
};

/**
 * Each interior page used to carry its own copy of this accordion. The copies
 * had drifted into four slightly different treatments, so the presets below
 * reproduce those treatments verbatim instead of restyling live pages during a
 * refactor. `regular` is the one to use for anything new.
 */
export type FaqVariant = "regular" | "roomy" | "compact" | "responsive";

const BUTTON =
  "flex min-h-24 w-full items-center justify-between gap-8 px-6 py-7 text-left transition-colors duration-300 hover:bg-white/35 md:px-10 lg:px-16";
const QUESTION =
  "text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl";
const HEADING =
  "max-w-5xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl";
const SIGN = "text-4xl leading-none font-light";

type Preset = {
  header: string;
  heading: string;
  button: string;
  question: string;
  sign: string;
  answer: string;
  /** Older pages wrap the answer in a padded div; newer ones pad the <p> itself. */
  padAnswerWrapper: boolean;
  duration: number;
};

const PRESETS: Record<FaqVariant, Preset> = {
  regular: {
    header: "px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
    heading: HEADING,
    button: BUTTON,
    question: QUESTION,
    sign: SIGN,
    answer: "max-w-4xl text-[16px] leading-[1.75] tracking-tight text-neutral-700",
    padAnswerWrapper: true,
    duration: 0.4,
  },
  roomy: {
    header: "px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16",
    heading: HEADING,
    button: BUTTON,
    question: QUESTION,
    sign: SIGN,
    answer: "max-w-4xl text-[16px] leading-[1.75] tracking-tight text-neutral-700",
    padAnswerWrapper: true,
    duration: 0.4,
  },
  compact: {
    header: "px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
    heading: HEADING,
    button: BUTTON,
    question: QUESTION,
    sign: SIGN,
    answer:
      "max-w-3xl px-6 pb-8 text-[15px] leading-[1.72] tracking-tight text-neutral-700 md:px-10 lg:px-16",
    padAnswerWrapper: false,
    duration: 0.28,
  },
  responsive: {
    header: "px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
    heading:
      "max-w-5xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-5xl",
    button:
      "flex min-h-0 w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-white/35 sm:min-h-20 sm:items-center sm:gap-8 sm:px-6 sm:py-7 md:px-10 lg:px-16",
    question:
      "text-[16px] leading-[1.3] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-xl sm:leading-tight md:text-2xl",
    sign: "shrink-0 text-2xl leading-none font-light sm:text-4xl",
    answer:
      "max-w-3xl px-5 pb-6 text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:px-6 sm:pb-8 sm:text-[15px] sm:leading-[1.72] md:px-10 lg:px-16",
    padAnswerWrapper: false,
    duration: 0.28,
  },
};

type FaqSectionProps = {
  faqs: readonly Faq[];
  /** Colour of the +/− glyph; normally the page's deep accent. */
  signColor: string;
  id?: string;
  variant?: FaqVariant;
  heading?: string;
};

export default function FaqSection({
  faqs,
  signColor,
  id,
  variant = "regular",
  heading = "FAQs",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const preset = PRESETS[variant];

  return (
    <section id={id} className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className={`border-b border-neutral-200 ${preset.header}`}>
          <h2 className={preset.heading}>{heading}</h2>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`${index > 0 ? "border-t border-neutral-200" : ""} ${
                  isOpen ? "bg-white/45" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={preset.button}
                  aria-expanded={isOpen}
                >
                  <span className={preset.question}>{faq.question}</span>
                  <span
                    className={preset.sign}
                    style={{ color: signColor }}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${faq.question}-answer`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: preset.duration, ease: motionEase }}
                      className="overflow-hidden"
                    >
                      {preset.padAnswerWrapper ? (
                        <div className="px-6 pb-10 md:px-10 lg:px-16">
                          <p className={preset.answer}>{faq.answer}</p>
                        </div>
                      ) : (
                        <p className={preset.answer}>{faq.answer}</p>
                      )}
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
