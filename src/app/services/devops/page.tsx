"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const AMBER = "#E8A317";
const DEEP = "#1C1710";
const SOFT = "#F3E6C8";

const HERO_IMAGE = "/devops-hero.jpg";
const CTA_IMAGE = "/devops-cta.jpg";

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

const devopsServices = [
  {
    title: "DevOps strategy advisory",
    description:
      "Assess delivery setup, goals, and constraints, then shape a practical roadmap for CI/CD, environments, tooling, and ownership.",
  },
  {
    title: "CI/CD implementation",
    description:
      "Set up continuous integration and deployment so changes are validated early and releases rely less on manual steps.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Define environments as code so infrastructure can be created, reviewed, versioned, and reproduced consistently.",
  },
  {
    title: "Cloud and migration support",
    description:
      "Plan and support AWS, Azure, or GCP delivery work with attention to reliability, cost, and operational readiness.",
  },
  {
    title: "Pipeline optimization",
    description:
      "Find bottlenecks in existing workflows and improve automation so builds, tests, and deployments become repeatable.",
  },
  {
    title: "DevSecOps integration",
    description:
      "Fold scanning, access control, and secrets handling into delivery without freezing release speed.",
  },
];

const pipelineStages = [
  {
    title: "Planning",
    description:
      "Clarify goals, delivery bottlenecks, toolchain choices, and a phased roadmap your team can actually execute.",
  },
  {
    title: "Coding and version control",
    description:
      "Strengthen branching, reviews, standards, and collaboration so code changes stay visible and manageable.",
  },
  {
    title: "Continuous integration",
    description:
      "Automate build and validation so every meaningful change is checked early for quality and breakage.",
  },
  {
    title: "Continuous testing",
    description:
      "Wire automated checks into the pipeline so feedback arrives while changes are still cheap to fix.",
  },
  {
    title: "Continuous deployment",
    description:
      "Reduce manual release risk with consistent deployment paths, environment parity, and clearer rollback options.",
  },
  {
    title: "Monitoring and improvement",
    description:
      "Add visibility into health, failures, and delivery metrics so operations feed the next improvement cycle.",
  },
];

const engagementModels = [
  {
    title: "DevOps from scratch",
    pain: "No reliable pipeline yet",
    description:
      "Build a first CI/CD foundation, environment structure, and operating rhythm for delivery.",
  },
  {
    title: "Revamp and optimization",
    pain: "Shipping, but noisy and fragile",
    description:
      "Clean up pipelines, reduce failures, improve visibility, and cut unnecessary cloud waste.",
  },
  {
    title: "Embedded DevOps support",
    pain: "Need capacity without hiring delay",
    description:
      "Add focused DevOps help for implementation, handover, and ongoing improvement inside your team.",
  },
];

const techStack = [
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Google Cloud", "Hybrid-ready setups"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"],
  },
  {
    category: "Containers",
    items: ["Docker", "Kubernetes", "Container registries"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "CloudFormation", "Ansible"],
  },
  {
    category: "Monitoring",
    items: ["CloudWatch", "Datadog-ready setups", "Prometheus", "Logging baselines"],
  },
  {
    category: "Security in delivery",
    items: ["SAST/DAST checks", "Secrets management", "Access controls", "Dependency scanning"],
  },
];

const faqs = [
  {
    question: "Do you support cloud and hybrid setups?",
    answer:
      "Yes. We can help with cloud-first delivery, hybrid environments, and practical modernization paths based on what your team already runs.",
  },
  {
    question: "How long does a DevOps engagement usually take?",
    answer:
      "A focused CI/CD or environment improvement can take a few weeks. Broader operating-model work usually needs a longer phased roadmap.",
  },
  {
    question: "Will you work with our existing tools?",
    answer:
      "Wherever possible, yes. We prefer improving what you already use before introducing a new toolchain, unless the current stack is the bottleneck.",
  },
  {
    question: "How does this connect to cybersecurity?",
    answer:
      "DevOps work often includes secure delivery practices. For deeper audits and risk assessments, we can connect that work with Sofnology’s cybersecurity services.",
  },
];

function DevOpsHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                DevOps consulting services
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology helps teams connect development and operations with clearer
                pipelines, more reliable releases, and practical cloud automation —
                so delivery gets faster without becoming fragile.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact"
            className="group relative flex min-h-[260px] items-start justify-between overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: DEEP }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/14 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span
              className="relative z-10 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: AMBER }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="DevOps pipeline visual with amber accents"
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

function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[200px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Our DevOps consulting services
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Strategy, setup, and delivery mechanics that keep environments consistent
              and releases under control.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {devopsServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <article
                key={service.title}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                tabIndex={0}
                className={`min-h-[230px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""} ${
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
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {service.title}
                </h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
                  className="mt-5 text-[15px] leading-[1.65] tracking-tight text-neutral-700"
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

function PipelineSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[300px] border-b border-white/14 px-6 py-16 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
              Continuous delivery across the DevOps pipeline
            </h2>
            <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-white/72">
              This is the center of the work — the full loop from planning and automation
              through deployment and monitoring, so improvements compound instead of
              staying isolated.
            </p>
          </div>
        </div>

        <div>
          {pipelineStages.map((stage, index) => {
            const isActive = activeStage === index;

            return (
              <article
                key={stage.title}
                onMouseEnter={() => setActiveStage(index)}
                onFocus={() => setActiveStage(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[240px] text-[#101413]" : "min-h-[118px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT : DEEP }}
              >
                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span className="text-5xl leading-none font-light tracking-[-0.08em] md:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {stage.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "mt-6 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <p className="max-w-3xl text-[15px] leading-[1.72] tracking-tight opacity-85">
                      {stage.description}
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

function EngagementSection() {
  const [activeModel, setActiveModel] = useState(1);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[220px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Built for the stage you’re in
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Slow releases, fragile deploys, drifting environments, or late security
              checks — the engagement model should match the problem, not a generic
              package label.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {engagementModels.map((model, index) => {
            const isActive = activeModel === index;

            return (
              <article
                key={model.title}
                onMouseEnter={() => setActiveModel(index)}
                onFocus={() => setActiveModel(index)}
                tabIndex={0}
                className={`min-h-[280px] cursor-pointer border-neutral-200 px-6 py-10 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                } ${isActive ? "bg-white" : "hover:bg-white/45"}`}
              >
                <motion.div
                  className="mb-7 h-1 origin-left"
                  style={{ backgroundColor: DEEP }}
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0.35, opacity: isActive ? 1 : 0.35 }}
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  {model.pain}
                </p>
                <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                  {model.title}
                </h3>
                <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                  {model.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            DevOps tech stack and tools
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Including AWS, Azure, and Google Cloud — tooling should match product stage
            and team capacity, not a wall of logos.
          </p>
        </div>

        <div>
          {techStack.map((group, index) => (
            <article
              key={group.category}
              className={`grid min-h-[110px] grid-cols-1 px-6 py-6 md:px-10 lg:grid-cols-[0.36fr_0.64fr] lg:px-0 ${
                index > 0 ? "border-t border-neutral-200" : ""
              }`}
            >
              <div className="flex items-start lg:px-8 xl:px-12">
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-tight tracking-tight text-neutral-700 md:grid-cols-3 lg:mt-0 lg:px-8 xl:px-12">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevSecOpsStrip() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[280px] grid-cols-1 lg:grid-cols-[0.54fr_0.46fr]">
          <div className="flex items-center border-b border-neutral-200 px-6 py-14 md:px-10 lg:border-b-0 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#0B4F4A]">
                DevSecOps
              </p>
              <h2 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
                Security belongs in the pipeline
              </h2>
              <p className="mt-7 text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Bake practical security checks into delivery — not launch week. For
                deeper audits and risk reviews, continue into Sofnology cybersecurity.
              </p>
            </div>
          </div>
          <div className="flex items-end px-6 py-14 md:px-10 lg:px-16">
            <a
              href="/services/cybersecurity"
              className="group relative flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#101413] md:px-8"
              style={{ backgroundColor: AMBER }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
              />
              <span className="relative z-10">Explore cybersecurity</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevOpsCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="DevOps infrastructure stack visual"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl lg:text-[3.25rem]">
                Looking for the right DevOps path for your project?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                We can help assess your current delivery setup, recommend high-impact
                improvements, and build a roadmap your team can own.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#101413] md:px-8"
                style={{ backgroundColor: AMBER }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Speak with a DevOps specialist</span>
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

function DevOpsFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-16 md:px-10 lg:px-16">
          <h2 className="max-w-5xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
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
                  <span className="text-4xl leading-none font-light text-[#1C1710]" aria-hidden="true">
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

function StickyGetInTouch() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactTop = contact?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const pastHero = window.scrollY > 480;
      const beforeContact = contactTop > window.innerHeight * 0.65;
      setVisible(pastHero && beforeContact);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: fadeEase }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:px-6 md:pb-5"
        >
          <a
            href="#contact-form"
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-[#101413] shadow-[0_12px_40px_rgba(28,23,16,0.2)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: AMBER }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DevOpsPage() {
  return (
    <>
      <Navbar />
      <main>
        <DevOpsHero />
        <div className="content-rail">
          <ServicesSection />
          <PipelineSection />
          <EngagementSection />
          <TechStackSection />
          <DevSecOpsStrip />
          <DevOpsCtaSection />
          <DevOpsFaqSection />
          <ContactSection showIntro={false} accent="amber" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
