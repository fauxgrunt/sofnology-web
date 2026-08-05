"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Three proof points — protects the hero image plane (was five). */
const bullets = [
  "Senior-led delivery with clear ownership",
  "Software, automation, and growth under one plan",
  "Handover built for systems you can run",
];

function CircleCheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-3.5 w-3.5 flex-shrink-0 text-white"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function HeroOverlayPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 8% 100%, 0 90%)" }}
      className="absolute right-[6%] bottom-[8%] z-10 hidden w-[min(92%,420px)] border border-white/25 bg-[#061a3a]/78 px-7 py-8 text-white backdrop-blur-md lg:block xl:right-[8%] xl:bottom-[10%] xl:px-8 xl:py-9"
    >
      <p className="font-nav text-[13px] font-semibold tracking-[0.14em] text-white/55 uppercase">
        Sofnology
      </p>
      <ul className="mt-5 space-y-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3.5">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
              <CircleCheckIcon />
            </span>
            <span className="text-[15px] leading-[1.4] font-medium tracking-[-0.02em] text-white/92">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
