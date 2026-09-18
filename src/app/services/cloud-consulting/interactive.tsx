"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { panelTransition } from "@/lib/motion";
import { DEEP, SOFT, MID_IMAGE, benefits, consultingServices, deliverables, advantages } from "@/content/services/cloud-consulting";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function BenefitsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Benefits of cloud consulting
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Expert guidance for cost-effective cloud decisions — whether you are starting
            fresh or tightening an estate already in flight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const isActive = active === index;
            const isLast = index === benefits.length - 1;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/50"}`}
              >

                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </span>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {item.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[220px] overflow-hidden border-b sm:min-h-[280px] md:min-h-[360px] border-neutral-200 lg:min-h-full lg:border-b-0 lg:border-r">
            <Image
              src={MID_IMAGE}
              alt="Abstract cloud consulting ring on sand with sky"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-[45%_50%]"
            />
          </div>

          <div className="flex min-h-[520px] flex-col" style={{ backgroundColor: DEEP }}>
            <div className="border-b border-white/14 px-6 py-12 md:px-10 lg:px-12">
              <h2 className="max-w-xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] text-white md:text-4xl">
                Our cloud consulting services
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.72] tracking-tight text-white/72">
                Strategy through migration, security, optimization, and enablement —
                Cloud Development, Migration, Serverless, and Platforms folded into one
                coherent offering. For delivery pipelines, continue into DevOps.
              </p>
            </div>

            <div className="flex-1">
              {consultingServices.map((service, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={service.title}
                    className={index > 0 ? "border-t border-white/14" : ""}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex min-h-[72px] w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-chrome ease-motion hover:bg-white/5 md:px-10 lg:px-12"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-semibold tracking-[-0.035em] text-white md:text-xl">
                        {service.title}
                      </span>
                      <span className="text-3xl leading-none font-light text-white/70" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`${service.title}-body`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={panelTransition}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl px-6 pb-8 text-[15px] leading-[1.72] tracking-tight text-white/70 md:px-10 lg:px-12">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeliverablesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Key deliverables
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Outcomes you can act on — assessment through strategy, migration, security,
            and continuous improvement.
          </p>
        </div>

        <div>
          {deliverables.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[background-color,min-height] duration-expand ease-motion md:grid-cols-[0.34fr_0.66fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[150px] bg-white" : "min-h-[96px] hover:bg-white/50"}`}
              >

                <div className="flex items-center gap-5 px-6 py-6 md:px-10 lg:px-16">
                  <span
                    className="text-[13px] font-semibold tracking-[0.12em] tabular-nums"
                    style={{ color: isActive ? DEEP : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center px-6 pb-6 md:px-10 md:py-6 lg:px-16">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700 transition-opacity duration-chrome ease-motion ${
                      isActive ? "opacity-100" : "opacity-55 md:opacity-70"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AdvantagesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[260px] border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Six advantages of cloud computing
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/70">
              Why cloud remains a practical operating choice — when the architecture and
              governance are done deliberately.
            </p>
          </div>
        </div>

        <div>
          {advantages.map((item, index) => {
            const isActive = active === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActive(index)}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-expand ease-motion lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[220px] text-[#0C4A6E]" : "min-h-[72px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : DEEP }}
              >

                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className={`text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl ${
                      isActive ? "" : "text-white/50"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {item.title}
                  </span>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-6 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
