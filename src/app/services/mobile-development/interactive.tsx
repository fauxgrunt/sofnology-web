"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { LIME, SOFT_LIME, TYPES_IMAGE, audiences, mobileTypes, developmentServices, relatedServices, innovationItems, industryInnovation, engagementShapes } from "@/content/services/mobile-development";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function AudienceSection() {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Mobile products for teams with something to prove"
          lede="From first MVPs to workflow modernization, the app strategy should match the team’s stage and the decision they need to make next."
          scale="large"
          minHeight={260}
          split="52/48"
          padding="responsive"
          wide
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {audiences.map((item, index) => {
            const isActive = activeAudience === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActiveAudience(index)}
                className={`flex min-h-[320px] cursor-pointer flex-col border-neutral-200 px-6 py-9 transition-colors duration-expand ease-motion md:px-8 lg:px-10 ${
                  index > 0 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${
                  isActive ? "bg-white text-neutral-950" : "text-neutral-400 hover:bg-white/45"
                }`}
              >

                <motion.div
                  className="mb-9 h-1 origin-left bg-[#0B4F20]"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={panelTransition}
                />
                <span className="text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {item.title}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  {isActive ? (
                    <motion.p
                      key={`${item.title}-active`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={panelTransition}
                      className="mt-auto pt-12 text-[15px] leading-[1.72] tracking-tight text-neutral-700"
                    >
                      {item.description}
                    </motion.p>
                  ) : (
                    <motion.p
                      key={`${item.title}-idle`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      exit={{ opacity: 0 }}
                      transition={panelTransition}
                      className="mt-auto pt-12 text-[15px] leading-[1.72] tracking-tight"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MobileTypesSection() {
  const [activeType, setActiveType] = useState(0);

  return (
    <section id="mobile-types" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-0 grid-cols-1 sm:min-h-[280px] md:min-h-[360px] lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Mobile app types we build
            </h2>
          </div>
          <div className="flex items-end px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              If you already know the app type, we can help shape the right build path.
              If not, we’ll compare native, cross-platform, and PWA options against the
              product goal, budget, and long-term maintenance plan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[420px] overflow-hidden border-b border-neutral-200 bg-white lg:border-b-0">
            <Image
              src={TYPES_IMAGE}
              alt="Abstract mobile platform visual"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-center"
            />
          </div>

          <div className="bg-[#3f4a3c] text-white">
            {mobileTypes.map((type, index) => {
              const isActive = activeType === index;

              return (
                <SelectableCard
                  key={type.title}
                  selected={isActive}
                  onSelect={() => setActiveType(index)}
                  className={`cursor-pointer border-white/20 px-6 py-7 transition-colors duration-expand ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                >

                  <div className="flex items-start justify-between gap-8">
                    <span className="text-2xl leading-tight font-semibold tracking-[-0.045em]">
                      {type.title}
                    </span>
                    <motion.span
                      className="text-4xl leading-none font-light"
                      initial={false}
                      animate={{ rotate: isActive ? 0 : 0, opacity: 1 }}
                      transition={panelTransition}
                    >
                      {isActive ? "−" : "+"}
                    </motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`${type.title}-body`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={panelTransition}
                        className="overflow-hidden"
                      >
                        <ul className="mt-7 space-y-3 pb-1">
                          {type.items.map((item) => (
                            <li
                              key={item}
                              className="text-[16px] leading-[1.55] tracking-tight text-white/88"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SelectableCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DevelopmentServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services-detail" className="border-b border-neutral-200 bg-[#101413] text-white">
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="min-h-0 border-b border-white/14 sm:min-h-[220px] md:min-h-[280px] px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Our custom app development services
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/72">
              From concept to launch and beyond, we bring structure to every stage of the
              mobile app lifecycle.
            </p>
          </div>
        </div>

        <div>
          {developmentServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <SelectableCard
                key={service.title}
                selected={isActive}
                onSelect={() => setActiveService(index)}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-expand ease-motion lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] text-[#101413]" : "min-h-[72px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT_LIME : "#101413" }}
              >

                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span className="text-6xl leading-none font-light tracking-[-0.08em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {service.title}
                  </span>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-8 max-h-80 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">
                      {service.description}
                    </p>
                    <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {service.points.map((point) => (
                        <p key={point} className="text-[14px] leading-[1.5] tracking-tight">
                          {point}
                        </p>
                      ))}
                    </div>
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

export function RelatedServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="consulting" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Explore our related mobile services"
          lede="Mobile apps rarely live alone. These supporting services help the product stay connected, secure, and ready to evolve after launch."
          scale="large"
          minHeight={240}
          split="52/48"
          padding="responsive"
          wide
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {relatedServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <SelectableCard
                key={service.title}
                selected={isActive}
                onSelect={() => setActiveService(index)}
                className={`group flex min-h-[320px] cursor-pointer flex-col border-neutral-200 px-6 py-9 transition-colors duration-expand ease-motion md:px-8 lg:px-8 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "lg:border-l" : ""} ${
                  index > 1 ? "border-t lg:border-t-0" : index > 0 ? "border-t md:border-t-0" : ""
                } ${isActive ? "bg-white text-neutral-950" : "bg-transparent text-neutral-950 hover:bg-white/50"}`}
              >

                <motion.div
                  className="mb-8 h-1 origin-left"
                  style={{ backgroundColor: LIME }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.45 }}
                  transition={panelTransition}
                />
                <span className="text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {service.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-auto pt-10 text-[15px] leading-[1.72] tracking-tight text-neutral-700"
                >
                  {service.description}
                </motion.p>
                <motion.span
                  initial={false}
                  animate={{
                    x: isActive ? 4 : 0,
                    y: isActive ? -4 : 0,
                    opacity: isActive ? 1 : 0.45,
                    color: isActive ? "#0B4F20" : "#a3a3a3",
                  }}
                  transition={panelTransition}
                  className="mt-8 inline-flex"
                >
                  <ArrowUpRightIcon />
                </motion.span>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function InnovationSection() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="innovation" className="border-b border-neutral-200 bg-[#101413] text-white">
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <SectionIntro
          title="Cookie-cutter apps are not your style"
          lede="We can add advanced mobile capabilities when they support the product strategy, not because they sound impressive in a proposal."
          tone="dark"
          scale="large"
          minHeight={320}
          padding="responsive"
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {innovationItems.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <SelectableCard
                key={item.title}
                selected={isActive}
                onSelect={() => setActiveItem(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[280px] border-white/14 px-6 py-9 transition-[background-color,color] duration-500 md:px-10 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""} ${
                  isActive ? "text-[#101413]" : "text-white"
                }`}
                style={{ backgroundColor: isActive ? SOFT_LIME : "#101413" }}
              >

                <p
                  className={`text-[13px] font-semibold tracking-[0.16em] uppercase transition-colors duration-500 ${
                    isActive ? "text-[#0B4F20]" : "text-white/45"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {item.title}
                </span>
                <p
                  className={`mt-8 max-w-2xl text-[15px] leading-[1.72] tracking-tight transition-opacity duration-500 ${
                    isActive ? "opacity-90" : "opacity-70"
                  }`}
                >
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

export function IndustryInnovationSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-0 border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              How we apply mobile innovation across industries
            </h2>
            <p className="mt-7 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Picture your business data just a tap away and processes running seamlessly,
              anytime and anywhere. Mobile apps can bring accessibility, functionality,
              and better user experiences across many industries.
            </p>
            <p className="mt-5 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              The examples below show the kinds of workflows Sofnology can help shape
              into practical mobile products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            {industryInnovation.map((industry, index) => {
              const isActive = activeIndustry === index;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActiveIndustry(index);
                  }}
                  className={`flex min-h-20 w-full items-center border-neutral-200 px-6 text-left text-xl font-semibold tracking-[-0.04em] transition-colors duration-chrome ease-motion md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "bg-[#0B4F20] text-white" : "text-neutral-500 hover:bg-white/45 hover:text-neutral-950"}`}
                >
                  {industry.title}
                </button>
              );
            })}
          </div>

          <div className="border-t border-neutral-200 px-6 py-10 md:px-10 lg:border-t-0 lg:px-14">
            <h3 className="text-3xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
              {industryInnovation[activeIndustry].title}
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
              {industryInnovation[activeIndustry].items.map((item) => (
                <p key={item} className="text-[15px] leading-[1.55] tracking-tight text-neutral-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EngagementShapesSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-0 border-b border-neutral-200 sm:min-h-[200px] md:min-h-[250px] px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Engagement shapes we deliver
            </h2>
          </div>
        </div>

        <div>
          {engagementShapes.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <SelectableCard
                key={project.title}
                selected={isActive}
                onSelect={() => setActiveProject(index)}
                className={`group grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-expand ease-motion lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] bg-white/60" : "min-h-[72px] bg-page hover:bg-white/45"}`}
              >

                <div className="flex items-start border-b border-neutral-200 px-6 py-7 md:px-10 lg:border-b-0 lg:px-8 xl:px-12">
                  <p className="text-[15px] leading-tight tracking-tight text-neutral-600">
                    {project.sector}
                  </p>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-8 px-6 py-7 md:px-10 lg:px-8 xl:px-12">
                  <div>
                    <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 underline decoration-neutral-950/75 underline-offset-4 md:text-2xl">
                      {project.title}
                    </span>
                    <p
                      className={`max-w-3xl overflow-hidden text-[15px] leading-[1.72] tracking-tight text-neutral-700 transition-all duration-500 ${
                        isActive
                          ? "mt-8 max-h-40 translate-y-0 opacity-100"
                          : "mt-0 max-h-0 translate-y-2 opacity-0"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <span className="pt-1 text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </SelectableCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
