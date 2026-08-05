"use client";

import { motion } from "framer-motion";

const bullets = [
  "Enterprise software teams ready to accelerate delivery.",
  "Cloud-native platforms designed for secure, measurable scale.",
  "AI-enabled workflows that remove operational bottlenecks.",
  "Transparent delivery systems with senior engineering oversight.",
  "Architecture, automation, and product execution under one roof.",
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 10% 100%, 0 88%)" }}
      className="absolute top-1/2 left-1/2 z-10 hidden w-[84%] max-w-[620px] -translate-x-1/2 -translate-y-1/2 border border-white/30 bg-white/72 px-10 py-14 shadow-[0_24px_70px_rgba(6,26,58,0.12)] backdrop-blur-2xl md:block md:px-14 md:py-16"
    >
      <ul className="space-y-8">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-5">
            <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#061a3a] shadow-[0_10px_24px_-16px_rgba(6,26,58,0.9)]">
              <CircleCheckIcon />
            </span>
            <span className="text-base leading-[1.45] font-semibold tracking-[-0.02em] text-[#061a3a] md:text-lg">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
