"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";

const proof = [
  "Senior-led delivery",
  "Software + growth systems",
  "Clear ownership & handover",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-neutral-200 bg-[#f4f4f4] text-neutral-900"
    >
      <div className="grid grid-cols-1 lg:min-h-[760px] lg:grid-cols-2 lg:items-stretch xl:min-h-[820px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col border-r border-neutral-200 px-5 pt-6 pb-7 sm:px-6 sm:pt-7 sm:pb-8 md:px-12 lg:min-h-[760px] lg:justify-between lg:px-[clamp(2rem,5vw,6rem)] lg:pt-12 lg:pb-16 xl:min-h-[820px]"
        >
          <div>
            {/* Brand is hero-level on every viewport — not nav-only */}
            <p className="font-nav text-[1.65rem] leading-none font-semibold tracking-[-0.045em] text-[#061a3a] sm:text-[1.85rem] lg:text-[2.15rem]">
              Sofnology
            </p>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] text-[#061a3a]/75 uppercase sm:mt-4 sm:text-[12px]">
              Clarity through Technology
            </p>
          </div>

          <h1 className="text-fluid-hero mt-5 max-w-4xl font-light tracking-[-0.04em] text-neutral-900 sm:mt-7 md:leading-[1.02] lg:mt-0">
            Enterprise software, engineered clearly
          </h1>

          <div className="mt-5 w-full space-y-4 sm:mt-8 sm:space-y-6 lg:mt-auto lg:space-y-8">
            <p className="text-fluid-body max-w-xl leading-[1.6] font-normal tracking-tight text-neutral-700 sm:leading-[1.65]">
              Sofnology builds custom platforms, automation, and digital systems that
              reduce operational friction — with senior ownership from architecture through
              handover.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4">
              <Link
                href="/#contact"
                className="tap-press group relative flex min-h-[3.25rem] flex-1 items-center justify-between overflow-hidden bg-[#061a3a] px-5 py-3.5 text-[12px] font-semibold tracking-wider text-white uppercase sm:min-h-14 sm:max-w-md sm:px-6 sm:py-4 sm:text-[11px]"
              >
                <span
                  aria-hidden="true"
                  className="cta-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="pointer-events-none relative z-10">Book a discovery call</span>
                <span className="pointer-events-none relative z-10 transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-1">
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
                </span>
              </Link>
              <Link
                href="/#expertise"
                className="tap-press inline-flex min-h-11 items-center justify-center border border-neutral-300 bg-transparent px-5 text-[12px] font-semibold tracking-wider text-[#061a3a] uppercase transition-colors duration-300 sm:min-h-14 [@media(hover:hover)_and_(pointer:fine)]:hover:border-[#061a3a] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/60"
              >
                Explore services
              </Link>
            </div>

            <ul className="flex flex-col gap-2.5 border-t border-neutral-200 pt-4 lg:hidden">
              {proof.map((item) => (
                <li
                  key={item}
                  className="flex min-h-9 items-center gap-3 text-[13px] font-medium tracking-tight text-[#061a3a]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#061a3a]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-2 hidden gap-x-8 gap-y-2 border-t border-neutral-200 pt-6 lg:flex lg:flex-wrap">
              {proof.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[13px] font-medium tracking-tight text-neutral-600"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rounded-full bg-[#061a3a]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[5/3] w-full overflow-hidden sm:aspect-[16/10] md:aspect-auto md:min-h-[480px] lg:min-h-[760px] xl:min-h-[820px]"
        >
          <Image
            src="/hero-image2.jpeg"
            alt="Sofnology engineering team at work"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#061a3a]/25 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#061a3a]/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
