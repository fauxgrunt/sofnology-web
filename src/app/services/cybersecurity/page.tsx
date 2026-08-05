"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const TEAL = "#0B4F4A";
const CYAN = "#5EEAD4";

const HERO_IMAGE = "/cybersecurity-hero.jpg";
const CTA_IMAGE = "/cybersecurity-cta.jpg";

const fadeEase = [0.16, 1, 0.3, 1] as const;
const FEATURED_PACKAGE_INDEX = 1;

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 14L14 6M14 6H7M14 6V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const assessmentServices = [
  {
    title: "Cybersecurity consulting",
    description:
      "We help you clarify risks, priorities, and practical next steps. That includes posture reviews, threat identification, framework direction, and security decisions that match how your business actually operates.",
  },
  {
    title: "Application security testing",
    description:
      "We review web apps, APIs, and mobile surfaces for exposure points, weak auth flows, insecure data handling, and integration risks — then recommend what to fix first.",
  },
  {
    title: "Risk management and compliance",
    description:
      "We map security work to the controls and evidence your team needs, helping close gaps around access, data handling, logging, and process readiness before they become blockers.",
  },
  {
    title: "Security auditing",
    description:
      "We assess how well your current systems, policies, and response practices hold up under review — and document vulnerabilities, gaps, and a clear remediation path.",
  },
];

const auditPackages = [
  {
    title: "Security audit",
    recommended: [
      "Assessing the effectiveness of your current security setup",
      "Reviewing compliance readiness for key controls",
      "Checking whether external security expectations are being met",
      "Post-incident system and process review",
    ],
    outcomes: [
      "A structured assessment of internal and external vulnerabilities",
      "Clear opportunities for improvement and prioritized gaps",
      "Practical next steps to harden systems and processes",
      "Typical delivery window: 3–6 weeks",
    ],
  },
  {
    title: "Security audit and post-audit assistance",
    recommended: [
      "Improving the core performance of your security environment",
      "Hardening systems when you do not have in-house security specialists",
      "Closing critical gaps quickly after an assessment",
      "Turning findings into remediation work with guidance",
    ],
    outcomes: [
      "A full security assessment within 3–6 weeks",
      "Direct support to operationalize priority fixes",
      "Removal or mitigation of key vulnerabilities",
      "Expert recommendations on process and software adjustments",
    ],
  },
  {
    title: "Security audit subscription",
    recommended: [
      "Live or actively developing systems that need recurring review",
      "Teams in regulated or higher-risk industries such as finance and healthcare",
      "Reducing one-off audit overhead with a repeatable review cadence",
      "Maintaining security standards as products and integrations change",
    ],
    outcomes: [
      "An initial audit in 3–6 weeks, then shorter follow-up reviews",
      "Routine assessments with iterative performance analysis",
      "An established review rhythm for ongoing security work",
      "Clear protocols for follow-up checks and incident-ready response planning",
    ],
  },
];

function CyberHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-0 grid-cols-1 px-5 py-10 sm:px-6 sm:py-12 md:min-h-[410px] md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.055em] sm:text-5xl sm:leading-[1.04] sm:tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Cybersecurity solutions
              </h1>
            </div>

            <div className="mt-8 flex items-end sm:mt-12 lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                As digital systems grow more connected, security has to be designed into
                products and operations — not added after a scare. Sofnology helps teams
                assess risk, close gaps, and build practical security into web, mobile,
                and cloud-facing work.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact"
            className="tap-press group relative flex min-h-[72px] items-center justify-between overflow-hidden border-b border-neutral-200 px-6 py-5 text-lg font-semibold tracking-[-0.04em] text-white md:px-10 md:min-h-[88px] md:px-10 md:text-xl lg:min-h-[360px] lg:items-start lg:py-8 lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: TEAL }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/16 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span
              className="relative z-10 lg:mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: CYAN }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] md:min-h-[360px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Cybersecurity product visual with shield and teal glass accents"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute right-[8%] bottom-0 hidden h-[72%] w-[38%] bg-[#f4f4f4] lg:block"
              style={{
                clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroBand() {
  return (
    <section className="border-b border-white/10" style={{ backgroundColor: TEAL }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="grid min-h-[220px] grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden lg:block" />
          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <p className="max-w-3xl text-[16px] leading-[1.75] tracking-tight text-white/82">
              Whether you want to strengthen an existing security posture, design a
              framework around a new product, or get a clear remediation plan after an
              audit, Sofnology can help you make security decisions that are practical,
              prioritized, and aligned with your delivery roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssessmentServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[280px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Cybersecurity assessment services
            </h2>
          </div>
          <div className="flex items-end px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              We offer practical cybersecurity assessment and consulting for teams at
              different stages — from first security review to hardening live products
              and closing compliance-related gaps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {assessmentServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <article
                key={service.title}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActiveService(index); }}
                onFocus={() => setActiveService(index)}
                tabIndex={0}
                className={`min-h-0 cursor-pointer sm:min-h-[220px] md:min-h-[260px] border-neutral-200 px-6 py-10 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 lg:px-12 ${
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
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {service.title}
                </h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
                  className="mt-8 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700"
                >
                  {service.description}
                </motion.p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AuditPackagesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(FEATURED_PACKAGE_INDEX);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
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
                    className={`align-top transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
                        transition={{ duration: 0.35, ease: fadeEase }}
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

function CyberCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Layered teal cybersecurity visual"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: TEAL }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.05em] md:text-5xl lg:text-[3.25rem]">
                Start seeing improvements in cybersecurity today
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Still have questions? Good. Whether you need clarity on risk, a focused
                audit, or help turning findings into a remediation plan, we can help you
                move from uncertainty to a practical security path.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#101413] transition-colors duration-300 md:px-8"
                style={{ backgroundColor: CYAN }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Contact us</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default function CybersecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <CyberHero />
        <div className="content-rail">
          <IntroBand />
          <AssessmentServicesSection />
          <AuditPackagesSection />
          <CyberCtaSection />
          <ContactSection showIntro={false} accent="teal" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label="Get in touch"
        backgroundColor={CYAN}
        textColor={"#101413"}
      />
      <Footer />
    </>
  );
}
