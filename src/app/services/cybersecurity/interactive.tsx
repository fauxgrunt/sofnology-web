"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { panelTransition } from "@/lib/motion";
import SectionIntro from "@/components/sections/SectionIntro";
import { TEAL, CYAN, FEATURED_PACKAGE_INDEX, assessmentServices, auditPackages } from "@/content/services/cybersecurity";
import { SelectableCard } from "@/components/a11y/SelectableCard";


export function AssessmentServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <SectionIntro
          title="Cybersecurity assessment services"
          lede="We offer practical cybersecurity assessment and consulting for teams at different stages — from first security review to hardening live products and closing compliance-related gaps."
          scale="large"
          minHeight={280}
          padding="responsive"
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {assessmentServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <SelectableCard
                key={service.title}
                selected={isActive}
                onSelect={() => setActiveService(index)}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-10 transition-colors duration-expand ease-motion md:px-10 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""} ${
                  isActive ? "bg-white" : "bg-transparent hover:bg-white/50"
                }`}
              >

                <motion.div
                  className="mb-8 h-1 origin-left"
                  style={{ backgroundColor: CYAN }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.55 }}
                  transition={panelTransition}
                />
                <span className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {service.title}
                </span>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={panelTransition}
                  className="mt-8 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700"
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

export function AuditPackagesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(FEATURED_PACKAGE_INDEX);

  return (
    <section className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div
          className="min-h-[280px] border-b border-white/10 px-5 py-9 text-white sm:px-6 sm:py-12 md:py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]"
          style={{ backgroundColor: TEAL }}
        >
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Security audit packages
            </h2>
            <p className="mt-7 text-[15px] leading-[1.75] tracking-tight text-white/78">
              Security audits help you test whether systems, policies, and delivery
              practices meet the internal and external standards your business needs.
              Choose the package that matches how much support you want after findings
              are clear.
            </p>
          </div>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-200 bg-white/40">
                <th className="w-[22%] px-8 py-7 text-[13px] font-semibold tracking-[0.12em] uppercase text-neutral-500 xl:px-12">
                  Audit packages
                </th>
                <th className="w-[39%] px-8 py-7 text-[13px] font-semibold tracking-[0.12em] uppercase text-neutral-500 xl:px-12">
                  Recommended for
                </th>
                <th className="w-[39%] px-8 py-7 text-[13px] font-semibold tracking-[0.12em] uppercase text-neutral-500 xl:px-12">
                  What you get
                </th>
              </tr>
            </thead>
            <tbody>
              {auditPackages.map((pkg, index) => {
                const isFeatured = index === FEATURED_PACKAGE_INDEX;
                const isHovered = hoveredIndex === index;

                return (
                  <tr
                    key={pkg.title}
                    onClick={() => setHoveredIndex(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setHoveredIndex(index); }}
                    className={`align-top transition-colors duration-expand ease-motion ${
                      index > 0 ? "border-t border-neutral-200" : ""
                    } ${isFeatured ? "bg-[rgba(11,79,74,0.06)]" : ""} ${
                      isHovered ? "bg-white" : ""
                    } ${isFeatured && isHovered ? "bg-[rgba(11,79,74,0.1)]" : ""}`}
                  >
                    <td className="relative px-8 py-10 xl:px-12">
                      {isFeatured && (
                        <span
                          className="mb-4 inline-flex px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#101413]"
                          style={{ backgroundColor: CYAN }}
                        >
                          Most chosen
                        </span>
                      )}
                      <p className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                        {pkg.title}
                      </p>
                      <motion.div
                        className="mt-5 h-1 origin-left"
                        style={{ backgroundColor: isFeatured ? CYAN : TEAL }}
                        initial={false}
                        animate={{ scaleX: isHovered || isFeatured ? 1 : 0.45 }}
                        transition={panelTransition}
                      />
                    </td>
                    <td className="px-8 py-10 xl:px-12">
                      <ul className="space-y-3">
                        {pkg.recommended.map((item) => (
                          <li
                            key={item}
                            className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-8 py-10 xl:px-12">
                      <ul className="space-y-3">
                        {pkg.outcomes.map((item) => (
                          <li
                            key={item}
                            className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden">
          {auditPackages.map((pkg, index) => {
            const isFeatured = index === FEATURED_PACKAGE_INDEX;

            return (
              <article
                key={pkg.title}
                className={`border-neutral-200 px-6 py-10 md:px-10 ${
                  index > 0 ? "border-t" : ""
                } ${isFeatured ? "bg-[rgba(11,79,74,0.06)]" : ""}`}
              >
                {isFeatured && (
                  <span
                    className="mb-4 inline-flex px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#101413]"
                    style={{ backgroundColor: CYAN }}
                  >
                    Most chosen
                  </span>
                )}
                <h3 className="text-2xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {pkg.title}
                </h3>
                <div
                  className="mt-5 h-1 w-10"
                  style={{ backgroundColor: isFeatured ? CYAN : TEAL }}
                />

                <p className="mt-8 text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  Recommended for
                </p>
                <ul className="mt-4 space-y-3">
                  {pkg.recommended.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  What you get
                </p>
                <ul className="mt-4 space-y-3">
                  {pkg.outcomes.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] leading-[1.55] tracking-tight text-neutral-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="border-t border-neutral-200 px-6 py-8 md:px-10 lg:px-16">
          <p className="text-[15px] leading-[1.7] tracking-tight text-neutral-700">
            Not sure which package?{" "}
            <a
              href="#contact-form"
              className="font-semibold text-[#0B4F4A] underline decoration-[#0B4F4A]/40 underline-offset-4 transition-colors hover:decoration-[#0B4F4A]"
            >
              Start with a security audit
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
