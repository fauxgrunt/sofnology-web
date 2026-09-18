"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { EMERALD, DEEP, SOFT, backendServices, shapeSteps, principles, industries, engagementModels } from "@/content/services/backend-development";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Our backend development services"
          lede="From first architecture decisions to modernization and ongoing refinement, we help build backends that stay usable as the product grows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {backendServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <SelectableCard
                key={service.title}
                selected={isActive}
                onSelect={() => setActiveService(index)}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-7 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >

                <motion.div
                  className="mb-5 h-1 origin-left"
                  style={{ backgroundColor: EMERALD }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {service.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-4 text-[15px] leading-[1.6] tracking-tight text-neutral-700"
                >
                  {service.description}
                </motion.p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ShapeBackendSection() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="How we shape a backend"
          lede="A clear path from discovery to operations — so architecture decisions stay tied to the product, not a default template."
          tone="dark"
          minHeight={200}
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-5">
          {shapeSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`min-h-[240px] cursor-pointer border-white/14 px-6 py-8 transition-colors duration-expand ease-motion md:px-5 lg:min-h-[280px] lg:px-7 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "text-[#111827]" : "text-white/70 hover:text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : EMERALD }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {step.title}
                </span>
                <p
                  className={`mt-4 text-[14px] leading-[1.6] tracking-tight ${
                    isActive ? "text-[#111827]/80" : "text-white/60"
                  }`}
                >
                  {step.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="What we optimize for"
          lede="A durable backend is more than features. It has to scale, stay secure, and remain operable as the product and team evolve."
          minHeight={200}
          padding="roomy"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {principles.map((item, index) => {
              const isActive = activePrinciple === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActivePrinciple(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActivePrinciple(index);
                  }}
                  className={`flex min-h-[72px] w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={principles[activePrinciple].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: EMERALD }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {principles[activePrinciple].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {principles[activePrinciple].description}
                </p>
                {principles[activePrinciple].title === "Security" && (
                  <p className="mt-6 text-[14px] leading-[1.65] tracking-tight text-neutral-600">
                    Need a deeper assessment?{" "}
                    <Link
                      href="/services/cybersecurity"
                      className="font-semibold text-[#111827] underline decoration-[#10B981] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      Sofnology cybersecurity
                    </Link>
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Industries and domains"
          lede="Backend design should match domain constraints — data sensitivity, volume, integrations, and how teams operate day to day."
          scale="large"
          minHeight={220}
          padding="roomy"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActiveIndustry(index);
                  }}
                  className={`flex min-h-20 w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "bg-[#111827] text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                >
                  {industry.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={industries[activeIndustry].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: EMERALD }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {industries[activeIndustry].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {industries[activeIndustry].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {industries[activeIndustry].outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EngagementSection() {
  const [activeModel, setActiveModel] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Partnership models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {engagementModels.map((model, index) => {
            const isActive = activeModel === index;

            return (
              <SelectableCard
                key={model.title}
                selected={isActive}
                onSelect={() => setActiveModel(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-9 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: EMERALD }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={panelTransition}
                />
                <span className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {model.title}
                </span>
                <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {model.description}
                </p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
