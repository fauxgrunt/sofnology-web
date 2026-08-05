"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

/** Clinical lime + forest — distinct from QA #C7FF3D and staff-aug moss. */
const LIME = "#B8F25A";
const DEEP = "#0B3D2E";
const SOFT = "#E8F9C8";
const PRIMARY_CTA = "Talk about healthtech software";

const HERO_IMAGE = "/healthtech-hero.jpg";
const MID_IMAGE = "/healthtech-mid.jpg";

const fadeEase = [0.16, 1, 0.3, 1] as const;

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

const helpServices = [
  {
    title: "Healthcare software development",
    description:
      "Tailored platforms guided by your market and audience — so clinicians get clearer workflows and organizations can pursue better care at sustainable cost.",
  },
  {
    title: "Mobile medical apps",
    description:
      "mHealth experiences that expand patient and clinician access — acquisition, loyalty, and day-to-day engagement without fracturing the care journey.",
  },
  {
    title: "Medical device software",
    description:
      "Software for devices that support chronic care, image recognition, and treatment planning — with reliability treated as a patient-safety concern.",
  },
  {
    title: "Telemedicine apps",
    description:
      "All-in-one telehealth products that personalize the consumer experience, reduce staff load, and improve how diagnostics and follow-up actually happen.",
  },
  {
    title: "EHR / EMR development",
    description:
      "Custom record systems that automate documentation and give staff a holistic view of each patient’s history — without burying them in clicks.",
  },
];

const telehealthScenarios = [
  {
    title: "Telehealth in nursing",
    description:
      "Secure apps for lab results, medication refills, and minor conditions managed remotely between patients and care teams.",
  },
  {
    title: "Telehealth in acute care",
    description:
      "Consultation and triage support for emergency and urgent pathways where speed and clarity matter most.",
  },
  {
    title: "Physical therapy",
    description:
      "Stay connected after in-person visits — track progress, schedule follow-ups, and keep adherence visible.",
  },
  {
    title: "Speech therapy",
    description:
      "Video and audio experiences designed so remote voice and speech therapy can match in-person effectiveness.",
  },
];

const beyondCare = [
  {
    title: "Digital therapeutics (DTx)",
    description:
      "Feature-rich therapeutic products designed for assessment and treatment decisions — clinically intentional, not generic wellness skins.",
  },
  {
    title: "HIPAA-aware app development",
    description:
      "Security and compliance patterns shaped for healthcare data demands — so regulatory requirements don’t become a late-stage rewrite.",
  },
  {
    title: "Internet of medical things",
    description:
      "Connected devices that help providers and patients share and monitor data, and help hospitals run resources and daily tasks more efficiently.",
  },
  {
    title: "Wearable health technologies",
    description:
      "Mobile apps synced with wearables to track conditions, activity, and lifestyle signals patients and providers can actually use.",
  },
  {
    title: "Data science and analytics",
    description:
      "Clinical and operational insight from live and retrospective data — care quality, population health, and business decisions on the same foundation.",
  },
];

const trustPoints = [
  {
    title: "Compliance-aware delivery",
    description:
      "Solutions designed with major healthcare and privacy expectations in mind — including HIPAA, GDPR, and HITECH-oriented practices.",
  },
  {
    title: "Security by design",
    description:
      "Access control, encryption, and operational discipline for products that hold clinical and personal health data.",
  },
  {
    title: "Seamless integrations",
    description:
      "Connect EHR, devices, payments, and partner systems so care doesn’t fracture across disconnected tools.",
  },
  {
    title: "Quality for patient safety",
    description:
      "Testing and release habits that treat reliability as a clinical requirement — issues caught before they reach production care paths.",
  },
];

const aiPoints = [
  {
    title: "AI discovery",
    description:
      "Identify high-impact, compliance-safe use cases before you invest — so adoption stays responsible and aligned with care goals.",
  },
  {
    title: "AI-powered product features",
    description:
      "Predictive analytics, clinical data processing, and decision support built with transparency and human oversight.",
  },
  {
    title: "Engineering with AI tools",
    description:
      "Vetted AI assistance in coding, testing, and documentation — so teams spend more time on interoperability, safety, and patient-facing quality.",
  },
];

const relatedLinks = [
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Deeper assessments when health data risk needs dedicated review.",
  },
  {
    title: "Mobile development",
    href: "/services/mobile-development",
    description: "Patient and clinician apps that connect to the broader care stack.",
  },
  {
    title: "Quality assurance",
    href: "/services/quality-assurance",
    description: "Release confidence for products where defects have clinical cost.",
  },
  {
    title: "Dedicated teams",
    href: "/engagement/dedicated-teams",
    description: "A lasting pod when healthtech roadmaps run for years, not sprints.",
  },
];

const faqs = [
  {
    question: "Do you build HIPAA-aware healthcare apps?",
    answer:
      "Yes. We design access, storage, auditability, and operational practices with healthcare privacy expectations in mind — and can connect deeper security reviews when the risk profile warrants it.",
  },
  {
    question: "Can you integrate with EHR systems and medical devices?",
    answer:
      "Yes. Integrations are a core part of healthtech delivery — records, devices, wearables, and partner systems — so clinicians and patients aren’t stuck in disconnected tools.",
  },
  {
    question: "Do you build telemedicine products from scratch?",
    answer:
      "Yes. From discovery through video, scheduling, messaging, and clinical workflows — shaped for the care setting you’re serving, not a generic video chat template.",
  },
  {
    question: "How do you approach AI in healthcare?",
    answer:
      "Carefully. We start with discovery for safe, useful use cases, keep humans in control of clinical decisions, and avoid hype metrics that don’t improve care or compliance.",
  },
];

function HealthtechHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="relative min-h-[320px] overflow-hidden border-b border-neutral-200 sm:min-h-[400px] md:min-h-[520px] lg:min-h-[640px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Abstract healthtech visual with moss, glass panels, and clinical geometry"
            className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[42%_48%]"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/35" />

          <div className="relative flex h-full min-h-[320px] items-end justify-end px-5 py-8 sm:min-h-[400px] sm:px-6 sm:py-10 md:min-h-[520px] md:items-center md:px-10 md:py-12 lg:min-h-[640px] lg:px-16">
            <div className="w-full max-w-xl border border-white/10 bg-[#101413]/72 px-5 py-7 text-white backdrop-blur-md sm:px-8 sm:py-10 md:px-10 md:py-12">
              <h1 className="text-[1.85rem] leading-[1.08] font-semibold tracking-[-0.055em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Health innovation, decoded
              </h1>
              <p className="mt-4 text-[14px] leading-[1.65] tracking-tight text-white/78 sm:mt-6 sm:text-[15px] sm:leading-[1.72]">
                Sofnology helps health organizations accelerate digital transformation —
                software that makes clinicians more effective, improves patient outcomes,
                and stays grounded in security and compliance.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#contact-form"
          className="tap-press group relative flex min-h-[72px] items-center justify-between overflow-hidden px-5 py-5 text-lg font-semibold tracking-[-0.04em] text-[#0B3D2E] sm:min-h-[88px] sm:px-6 sm:py-6 sm:text-xl md:px-10 lg:px-16"
          style={{ backgroundColor: LIME }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
          />
          <span className="relative z-10">Get in touch</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </section>
  );
}

function HelpSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[220px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
              How we can help
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              At the intersection of care and technology — solutions that make clinician
              work more effective and patient outcomes more reachable.
            </p>
          </div>
        </div>

        <div>
          {helpServices.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-[0.22fr_0.78fr] border-neutral-200 transition-[min-height,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-cols-[0.28fr_0.72fr] lg:grid-cols-[0.36fr_0.64fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[200px] bg-white" : "min-h-[100px] hover:bg-white/45"}`}
              >
                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span
                    className="text-[2.35rem] sm:text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl"
                    style={{ color: isActive ? DEEP : "#a3a3a3" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {item.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-5 max-h-36 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TelehealthSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Transform care with telehealth
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Expand clinical access and patient engagement — from primary visits to
            specialty follow-ups — while reducing unnecessary facility load.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {telehealthScenarios.map((item, index) => {
            const isActive = active === index;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[210px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 md:px-8 lg:px-12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${index >= 2 ? "md:border-t" : ""} ${
                  isActive ? "bg-white" : "hover:bg-white/50"
                }`}
              >
                <motion.div
                  className="mb-6 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BeyondSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Challenge conventional care
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            Beyond cookie-cutter portals — DTx, IoMT, wearables, and analytics applied
            where they improve care and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {beyondCare.map((item, index) => {
            const isActive = active === index;
            const isLast = index === beyondCare.length - 1;

            return (
              <article
                key={item.title}
                onClick={() => setActive(index)}
                onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setActive(index); }}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[240px] cursor-pointer border-white/14 px-6 py-9 transition-colors duration-500 md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                } ${isActive ? "bg-white/8" : "hover:bg-white/4"}`}
              >
                <div
                  className="mb-6 h-1 w-10"
                  style={{ backgroundColor: isActive ? LIME : "rgba(255,255,255,0.25)" }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-white/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[220px] overflow-hidden border-b sm:min-h-[280px] md:min-h-[360px] border-neutral-200 lg:min-h-full lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MID_IMAGE}
              alt="Glass cube containing neon green organic form — healthtech trust visual"
              className="absolute inset-0 h-full w-full object-cover object-[45%_50%]"
              decoding="async"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ backgroundColor: DEEP }}>
            {trustPoints.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[180px] border-white/14 px-6 py-8 md:px-8 ${
                  index % 2 === 1 ? "sm:border-l" : ""
                } ${index >= 2 ? "border-t" : ""}`}
              >
                <div className="mb-5 h-1 w-10" style={{ backgroundColor: LIME }} />
                <h3 className="text-lg font-semibold tracking-[-0.035em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.68] tracking-tight text-white/68">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-4xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            AI that earns clinical trust
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Efficiency with transparency and human oversight — you stay in control while
            AI strengthens the product and the people delivering care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {aiPoints.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <span
                className="text-4xl font-light tracking-[-0.08em]"
                style={{ color: DEEP }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HealthtechCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div
            className="flex min-h-[300px] items-center border-b border-neutral-200 px-6 py-12 md:px-10 lg:min-h-[400px] lg:border-b-0 lg:px-16"
            style={{ backgroundColor: LIME }}
          >
            <div className="max-w-md">
              <h2 className="text-3xl leading-[1.1] font-semibold tracking-[-0.05em] text-[#0B3D2E] md:text-4xl">
                Ready to shape the healthcare of tomorrow?
              </h2>
              <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-[#0B3D2E]/80">
                Tell us about the care setting, the users, and the compliance constraints —
                we’ll help shape a practical build path.
              </p>
            </div>
          </div>

          <div
            className="flex min-h-[300px] items-end px-6 py-12 md:px-10 lg:min-h-[400px] lg:px-16"
            style={{ backgroundColor: DEEP }}
          >
            <a
              href="#contact-form"
              className="group relative flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#0B3D2E] md:px-8"
              style={{ backgroundColor: LIME }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10 max-w-[16rem] leading-tight">{PRIMARY_CTA}</span>
              <span className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-3xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-[2.75rem]">
            Related Sofnology work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex min-h-[220px] flex-col justify-between border-neutral-200 px-6 py-9 transition-colors duration-300 hover:bg-white md:px-8 lg:px-9 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              } ${index >= 2 ? "md:border-t lg:border-t-0" : ""}`}
            >
              <div>
                <div
                  className="mb-6 h-1 w-10 origin-left transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: LIME }}
                />
                <h3 className="text-xl font-semibold tracking-[-0.045em] text-neutral-950">
                  {link.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0B3D2E] transition-transform duration-300 group-hover:translate-x-1">
                View
                <ArrowUpRightIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-9 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="max-w-5xl text-[1.85rem] leading-[1.1] font-semibold sm:text-4xl sm:leading-[1.08] tracking-[-0.045em] text-neutral-950 md:text-5xl">
            FAQs
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`${index > 0 ? "border-t border-neutral-200" : ""} ${
                  isOpen ? "bg-white/45" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-24 w-full items-center justify-between gap-8 px-6 py-7 text-left transition-colors duration-300 hover:bg-white/35 md:px-10 lg:px-16"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {faq.question}
                  </span>
                  <span className="text-4xl leading-none font-light text-[#0B3D2E]" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${faq.question}-answer`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: fadeEase }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-10 md:px-10 lg:px-16">
                        <p className="max-w-4xl text-[16px] leading-[1.75] tracking-tight text-neutral-700">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default function HealthtechPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-sticky-cta">
        <HealthtechHero />
        <div className="content-rail">
          <HelpSection />
          <TelehealthSection />
          <BeyondSection />
          <TrustSection />
          <AiSection />
          <HealthtechCtaSection />
          <RelatedSection />
          <FaqSection />
          <ContactSection showIntro={false} accent="clinic" />
        </div>
      </main>
      <StickyCTA
        href="#contact-form"
        label={PRIMARY_CTA}
        backgroundColor={LIME}
        textColor={"#0B3D2E"}
      />
      <Footer />
    </>
  );
}
