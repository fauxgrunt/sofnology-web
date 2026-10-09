"use client";

import { useState } from "react";
import AccordionPanel from "@/components/AccordionPanel";

export type Faq = {
  question: string;
  answer: string;
};

/**
 * Each interior page used to carry its own copy of this accordion. The copies
 * had drifted into four slightly different treatments, so the presets below
 * reproduce those treatments verbatim instead of restyling live pages during a
 * refactor. `regular` is the one to use for anything new. `home` keeps the
 * homepage accordion (display heading, lede, tap-press, one row always open).
 */
export type FaqVariant = "regular" | "roomy" | "compact" | "responsive" | "home";

const BUTTON =
  "flex min-h-24 w-full items-center justify-between gap-8 px-6 py-7 text-left transition-colors duration-chrome ease-motion md:px-10 lg:px-16 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/35";
const QUESTION =
  "text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl";
const HEADING =
  "max-w-5xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl";
const SIGN = "text-4xl leading-none font-light";
const INTERIOR_ANSWER =
  "max-w-4xl text-[16px] leading-[1.75] tracking-tight text-neutral-700";

type Preset = {
  header: string;
  heading: string;
  lede: string;
  button: string;
  question: string;
  sign: string;
  answer: string;
  answerWrapper: string;
  padAnswerWrapper: boolean;
  openRow: string;
};

const PRESETS: Record<FaqVariant, Preset> = {
  regular: {
    header: "px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
    heading: HEADING,
    lede: "mt-6 max-w-3xl text-[15px] leading-[1.75] tracking-tight text-neutral-700",
    button: BUTTON,
    question: QUESTION,
    sign: SIGN,
    answer: INTERIOR_ANSWER,
    answerWrapper: "px-6 pb-10 md:px-10 lg:px-16",
    padAnswerWrapper: true,
    openRow: "bg-white/45",
  },
  roomy: {
    header: "px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16",
    heading: HEADING,
    lede: "mt-6 max-w-3xl text-[15px] leading-[1.75] tracking-tight text-neutral-700",
    button: BUTTON,
    question: QUESTION,
    sign: SIGN,
    answer: INTERIOR_ANSWER,
    answerWrapper: "px-6 pb-10 md:px-10 lg:px-16",
    padAnswerWrapper: true,
    openRow: "bg-white/45",
  },
  compact: {
    header: "px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
    heading: HEADING,
    lede: "mt-6 max-w-3xl text-[15px] leading-[1.75] tracking-tight text-neutral-700",
    button: BUTTON,
    question: QUESTION,
    sign: SIGN,
    answer:
      "max-w-3xl px-6 pb-8 text-[15px] leading-[1.72] tracking-tight text-neutral-700 md:px-10 lg:px-16",
    answerWrapper: "",
    padAnswerWrapper: false,
    openRow: "bg-white/45",
  },
  responsive: {
    header: "px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
    heading:
      "max-w-5xl text-[1.85rem] leading-[1.1] font-semibold tracking-[-0.045em] text-neutral-950 sm:text-4xl sm:leading-[1.08] md:text-5xl",
    lede: "mt-6 max-w-3xl text-[15px] leading-[1.75] tracking-tight text-neutral-700",
    button:
      "flex min-h-0 w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-chrome ease-motion sm:min-h-20 sm:items-center sm:gap-8 sm:px-6 sm:py-7 md:px-10 lg:px-16 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/35",
    question:
      "text-[16px] leading-[1.3] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-xl sm:leading-tight md:text-2xl",
    sign: "shrink-0 text-2xl leading-none font-light sm:text-4xl",
    answer:
      "max-w-3xl px-5 pb-6 text-[14px] leading-[1.65] tracking-tight text-neutral-700 sm:px-6 sm:pb-8 sm:text-[15px] sm:leading-[1.72] md:px-10 lg:px-16",
    answerWrapper: "",
    padAnswerWrapper: false,
    openRow: "bg-white/45",
  },
  home: {
    header: "px-5 py-8 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16",
    heading:
      "text-fluid-display max-w-5xl font-semibold tracking-[-0.045em] text-neutral-950",
    lede: "text-fluid-body mt-3 max-w-5xl leading-[1.6] tracking-tight text-neutral-700 sm:mt-6 sm:leading-[1.75]",
    button:
      "tap-press flex w-full items-start justify-between gap-4 px-5 py-4 text-left active:bg-white/40 sm:items-center sm:gap-8 sm:px-6 sm:py-7 md:px-10 lg:px-16 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/30",
    question:
      "text-[16px] leading-[1.3] font-semibold tracking-[-0.03em] text-neutral-950 sm:text-lg sm:leading-tight md:text-xl",
    sign: "shrink-0 text-2xl leading-none font-light sm:text-3xl",
    answer:
      "max-w-4xl text-[14px] leading-[1.7] tracking-tight text-neutral-700 sm:text-[15px] sm:leading-[1.75]",
    answerWrapper: "px-5 pb-6 sm:px-6 sm:pb-8 md:px-10 lg:px-16",
    padAnswerWrapper: true,
    openRow: "",
  },
};

type FaqSectionProps = {
  faqs: readonly Faq[];
  /** Colour of the +/− glyph; normally the page's deep accent. */
  signColor: string;
  id?: string;
  variant?: FaqVariant;
  heading?: string;
  lede?: string;
  /** Homepage keeps one row open; interior pages can close the open row. */
  collapsible?: boolean;
};

export default function FaqSection({
  faqs,
  signColor,
  id,
  variant = "regular",
  heading = "FAQs",
  lede,
  collapsible,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const preset = PRESETS[variant];
  const canCollapse = collapsible ?? variant !== "home";

  return (
    <section id={id} className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className={`border-b border-neutral-200 ${preset.header}`}>
          <h2 className={preset.heading}>{heading}</h2>
          {lede ? <p className={preset.lede}>{lede}</p> : null}
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`${index > 0 ? "border-t border-neutral-200" : ""} ${
                  isOpen ? preset.openRow : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (isOpen) {
                      if (canCollapse) setOpenIndex(-1);
                      return;
                    }
                    setOpenIndex(index);
                  }}
                  className={preset.button}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className={preset.question}>{faq.question}</span>
                  <span
                    className={`${preset.sign} faq-sign`}
                    style={{ color: signColor }}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AccordionPanel
                  id={`faq-panel-${index}`}
                  labelledBy={`faq-trigger-${index}`}
                  open={isOpen}
                >
                  {preset.padAnswerWrapper ? (
                    <div className={preset.answerWrapper}>
                      <p className={preset.answer}>{faq.answer}</p>
                    </div>
                  ) : (
                    <p className={preset.answer}>{faq.answer}</p>
                  )}
                </AccordionPanel>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
