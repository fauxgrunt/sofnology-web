"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { LIME, DEEP, SOFT, helpModes, audiences, productSurfaces, orderJourney, deliverySteps } from "@/content/industries/foodtech";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function HelpSection() {
  const [activeMode, setActiveMode] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Our foodtech services"
          lede="From first strategy decisions to a new build or a modernization pass — shaped for restaurants, kitchens, and delivery platforms alike."
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {helpModes.map((mode, index) => {
            const isActive = activeMode === index;

            return (
              <SelectableCard
                key={mode.title}
                selected={isActive}
                onSelect={() => setActiveMode(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[240px] md:min-h-[300px] border-neutral-200 px-6 py-9 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >

                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={panelTransition}
                />
                <span className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {mode.title}
                </span>
                <p className="mt-5 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {mode.description}
                </p>
                <ul className="mt-8 border-t border-neutral-200">
                  {mode.points.map((point) => (
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

export function AudiencesSection() {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="We build food apps for"
          lede="Different food businesses need different product shapes — one brand, many kitchens, or a full marketplace."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {audiences.map((audience, index) => {
              const isActive = activeAudience === index;

              return (
                <button
                  key={audience.title}
                  type="button"
                  onClick={() => setActiveAudience(index)}
                  onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveAudience(index); }}
                  className={`flex min-h-[68px] w-full items-center border-neutral-200 px-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "text-white" : "text-neutral-500 hover:bg-white/50 hover:text-neutral-950"}`}
                  style={{ backgroundColor: isActive ? DEEP : "transparent" }}
                >
                  {audience.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:border-l lg:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={audiences[activeAudience].title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={panelTransition}
              >
                <div className="mb-6 h-1 w-12" style={{ backgroundColor: DEEP }} />
                <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {audiences[activeAudience].title}
                </h3>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {audiences[activeAudience].description}
                </p>
                <ul className="mt-8 max-w-md border-t border-neutral-200">
                  {audiences[activeAudience].outcomes.map((outcome) => (
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

export function ProductSurfacesSection() {
  const [activeSurface, setActiveSurface] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <SectionIntro
          title="Product surfaces that matter"
          lede="Not a feature dump — the three sides of a food delivery product that have to work together."
          tone="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {productSurfaces.map((surface, index) => {
            const isActive = activeSurface === index;

            return (
              <SelectableCard
                key={surface.title}
                selected={isActive}
                onSelect={() => setActiveSurface(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[240px] md:min-h-[300px] border-white/14 px-6 py-9 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "text-[#1B3A2A]" : "text-white/70 hover:text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : "transparent" }}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: isActive ? DEEP : LIME }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {surface.title}
                </span>
                <p
                  className={`mt-5 text-[15px] leading-[1.72] tracking-tight ${
                    isActive ? "text-[#1B3A2A]/80" : "text-white/65"
                  }`}
                >
                  {surface.description}
                </p>
                <ul
                  className={`mt-8 border-t ${
                    isActive ? "border-[#1B3A2A]/15" : "border-white/14"
                  }`}
                >
                  {surface.points.map((point) => (
                    <li
                      key={point}
                      className={`border-b py-3.5 text-[15px] leading-[1.45] tracking-tight ${
                        isActive
                          ? "border-[#1B3A2A]/15 text-[#1B3A2A]"
                          : "border-white/14 text-white/80"
                      }`}
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

export function OrderJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="The order journey"
          lede="Order → Kitchen → Courier → Delivered — the path every food product has to keep coherent under real volume."
          padding="roomy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {orderJourney.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <SelectableCard
                key={step.title}
                selected={isActive}
                onSelect={() => setActiveStep(index)}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-expand ease-motion md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: DEEP }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {step.title}
                </span>
                <p className="mt-4 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
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

export function DeliverySection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="How we deliver"
          lede="A practical path from discovery to improvement — without hiring-theater process pages."
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
                className={`min-h-[240px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-expand ease-motion md:px-7 lg:px-8 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${index >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/45"
                }`}
              >

                <span
                  className="text-4xl font-light tracking-[-0.08em]"
                  style={{ color: DEEP }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {step.title}
                </span>
                <p className="mt-4 text-[14px] leading-[1.6] tracking-tight text-neutral-700">
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
