"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { MAGENTA, DEEP, SOFT, commercePaths, buildTypes, capabilities, deliverySteps } from "@/content/industries/ecommerce";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function PathsSection() {
  const [activePath, setActivePath] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="The path to ecommerce success"
          lede="Whether you’re launching a brand or transforming an established commerce operation, the work starts from different constraints."
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {commercePaths.map((path, index) => {
            const isActive = activePath === index;

            return (
              <SelectableCard
                key={path.title}
                selected={isActive}
                onSelect={() => setActivePath(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[240px] md:min-h-[300px] border-neutral-200 px-6 py-10 transition-colors duration-expand ease-motion md:px-10 lg:px-14 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: MAGENTA }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {path.title}
                </span>
                <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {path.description}
                </p>
                <ul className="mt-8 border-t border-neutral-200">
                  {path.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-neutral-200 py-3.5 text-[15px] leading-[1.45] tracking-tight text-neutral-800"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BuildTypesSection() {
  const [activeType, setActiveType] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="What we build"
          lede="Storefronts, marketplaces, mobile commerce, and custom platforms — paired with the backend operations commerce actually needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {buildTypes.map((type, index) => {
              const isActive = activeType === index;

              return (
                <button
                  key={type.title}
                  type="button"
                  onClick={() => setActiveType(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveType(index); }}
                  className={`flex min-h-[72px] w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  {type.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={buildTypes[activeType].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: MAGENTA }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {buildTypes[activeType].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {buildTypes[activeType].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {buildTypes[activeType].outcomes.map((outcome) => (
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

export function CapabilitiesSection() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Custom ecommerce capabilities"
          lede="The systems behind a store that converts — payments, catalog, inventory, and the integrations that keep operations moving."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const isActive = activeCapability === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActiveCapability(index)}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-7 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >

                <motion.div
                  className="mb-5 h-1 origin-left"
                  style={{ backgroundColor: MAGENTA }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-4 text-[15px] leading-[1.6] tracking-tight text-neutral-700"
                >
                  {item.description}
                </motion.p>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DeliverySection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="How we deliver commerce"
          lede="A clear path from discovery to optimization — without staffing theater or interview process pages."
          tone="dark"
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-white/14 px-6 py-8 transition-colors duration-expand ease-motion md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "text-[#1A1216]" : "text-white/70 hover:text-white"
                }`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : MAGENTA }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {step.title}
                </span>
                <p
                  className={`mt-4 text-[14px] leading-[1.6] tracking-tight ${
                    isActive ? "text-[#1A1216]/80" : "text-white/60"
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
