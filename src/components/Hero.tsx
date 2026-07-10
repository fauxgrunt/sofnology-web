"use client";

import { motion } from "framer-motion";
import HeroOverlayPanel from "@/components/hero/HeroOverlayPanel";

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 14L14 6M14 6H7M14 6V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-neutral-200 bg-[#f4f4f4] text-neutral-900"
    >
      <div className="grid grid-cols-1 lg:min-h-[760px] xl:min-h-[820px] lg:grid-cols-2 lg:items-stretch">
        {/* Left column — top/bottom anchored */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-h-[620px] flex-col justify-between border-r border-neutral-200 px-6 py-8 md:px-12 lg:min-h-[760px] lg:px-[clamp(2rem,5vw,6rem)] lg:pt-12 lg:pb-16 xl:min-h-[820px]"
        >
          <p className="text-[12px] font-semibold tracking-[0.18em] text-[#061a3a] uppercase">
            Clarity through Technology
          </p>

          <h1 className="max-w-4xl text-5xl leading-[1.05] font-light tracking-[-0.04em] text-neutral-900 md:text-7xl md:leading-[1.02] lg:text-[5.35rem] xl:text-[5.8rem]">
            Enterprise software development, engineered clearly
          </h1>

          <div className="mt-auto w-full space-y-8">
            <p className="max-w-xl text-[13px] leading-[1.65] font-normal tracking-tight text-neutral-700 md:text-[14px]">
              Sofnology builds technically flawless digital products, custom enterprise
              platforms, and automated workflows that eliminate operational friction.
            </p>

            <a
              href="#contact"
              className="group relative flex w-full max-w-md items-center justify-between overflow-hidden rounded-none bg-[#061a3a] px-6 py-4 text-[11px] font-medium tracking-wider text-white uppercase shadow-[0_18px_40px_-28px_rgba(6,26,58,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2a5b] hover:shadow-[0_24px_50px_-26px_rgba(6,26,58,0.95)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="pointer-events-none relative z-10">
                Book a free discovery call
              </span>
              <span className="pointer-events-none relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right column — full-bleed image canvas with centered overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[560px] w-full overflow-hidden md:min-h-[660px] lg:min-h-[760px] xl:min-h-[820px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-image2.jpeg"
            alt="Sofnology engineering team at work"
            className="absolute inset-0 z-0 h-full w-full object-cover"
            decoding="async"
          />
          <HeroOverlayPanel />
        </motion.div>
      </div>
    </section>
  );
}
