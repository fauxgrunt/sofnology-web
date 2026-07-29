"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SKY = "#0EA5E9";
const DEEP = "#0C4A6E";
const SOFT = "#E0F2FE";
const PRIMARY_CTA = "Book a free cloud assessment";

const HERO_IMAGE = "/cloud-hero.jpg";
const MID_IMAGE = "/cloud-mid.jpg";
const CTA_IMAGE = "/cloud-cta.jpg";

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

const benefits = [
  {
    title: "Navigate digital transformation",
    description:
      "Use cloud as a practical lever for products and operations — not a vague modernization slogan.",
  },
  {
    title: "Address migration risk",
    description:
      "Plan dependencies, data moves, and cutover paths so downtime and integrity issues stay contained.",
  },
  {
    title: "Security and compliance posture",
    description:
      "Build encryption, identity, governance, and evidence into the design — not as an afterthought.",
  },
  {
    title: "Choose the right vendor mix",
    description:
      "Compare AWS, Azure, GCP, or hybrid options against performance, cost, lock-in, and team capacity.",
  },
  {
    title: "Maximize performance and cost",
    description:
      "Tune configuration, resources, and architecture so spend tracks value instead of sprawl.",
  },
];

const consultingServices = [
  {
    title: "Cloud strategy consulting",
    description:
      "Review infrastructure, apps, and workflows, then shape an actionable roadmap from first implementation through later optimization — including when serverless fits.",
  },
  {
    title: "Cloud app development consulting",
    description:
      "Advise on designing and refining cloud-based apps: model choice (IaaS, PaaS, SaaS), deployment approach, resource use, and scalable architecture decisions.",
  },
  {
    title: "Cloud migration consulting",
    description:
      "Plan moves to public, hybrid, or multi-cloud with clear dependency mapping, data strategy, and risk controls for a smoother cutover.",
  },
  {
    title: "Cloud security advisory",
    description:
      "Guide governance, access, and compliance practices suited to your domain so cloud surfaces stay defensible as they grow.",
  },
  {
    title: "Infrastructure assessment and optimization",
    description:
      "Find waste and bottlenecks, improve utilization, and strengthen continuity with disaster recovery and workload adaptability.",
  },
  {
    title: "Training and change management",
    description:
      "Equip your team to operate what you build — so the cloud estate stays maintainable as standards and demand change.",
  },
];

const vendorFactors = [
  {
    title: "Technology roadmap",
    description: "Vendor direction should match your longer-term product and platform goals.",
  },
  {
    title: "Security and trust",
    description: "How data is protected, audited, and controlled in practice — not just on paper.",
  },
  {
    title: "Reliability and performance",
    description: "Operational quality that customers and internal teams actually feel.",
  },
  {
    title: "Scalability and flexibility",
    description: "Room to grow and reshape workloads without painful redesigns every quarter.",
  },
  {
    title: "Integration and lock-in",
    description: "How cleanly services connect today — and how hard exit or multi-cloud would be later.",
  },
  {
    title: "Cost, SLAs, and support",
    description: "Pricing model, contracts, and migration support that match how you buy and operate.",
  },
];

const platforms = [
  {
    title: "AWS",
    description:
      "Strong breadth for product platforms, data workloads, and teams that want deep service coverage with clear growth paths.",
  },
  {
    title: "Azure",
    description:
      "A natural fit when Microsoft estates, identity, and enterprise tooling already sit at the center of operations.",
  },
  {
    title: "Google Cloud",
    description:
      "Compelling for data, analytics, and teams that want clean Kubernetes and modern app delivery patterns.",
  },
];

const deliverables = [
  {
    title: "Cloud assessment and readiness",
    description: "A clear read on current setup, gaps, and what must change before adoption accelerates.",
  },
  {
    title: "Business-aligned cloud strategy",
    description: "Documentation that ties cloud work to product, cost, and operating goals.",
  },
  {
    title: "Model and vendor guidance",
    description: "Practical recommendations on IaaS / PaaS / SaaS and which providers fit best.",
  },
  {
    title: "Migration blueprint",
    description: "A phased roadmap for moving workloads with controlled risk and visible dependencies.",
  },
  {
    title: "Security framework",
    description: "A baseline strategy for protecting cloud environments as they expand.",
  },
  {
    title: "Optimization and efficiency plan",
    description: "Ongoing tactics for cost, performance, and continuous improvement after go-live.",
  },
];

const advantages = [
  {
    title: "Cost efficiency",
    description:
      "Pay for what you use, reduce heavy upfront infrastructure spend, and align cost with real demand.",
  },
  {
    title: "Flexibility",
    description:
      "Adjust capacity quickly without waiting on hardware cycles or long procurement loops.",
  },
  {
    title: "Accessibility",
    description:
      "Give distributed teams reliable access to systems and data from the devices they already use.",
  },
  {
    title: "Stronger security baseline",
    description:
      "Modern identity, encryption, and monitoring patterns that are easier to standardize at scale.",
  },
  {
    title: "Faster time-to-market",
    description:
      "Test and ship without hardware constraints — then integrate and update with less friction.",
  },
  {
    title: "Operational resilience",
    description:
      "Backup, recovery, and continuity options that reduce the blast radius of outages and incidents.",
  },
];

const techStack = [
  {
    category: "Cloud providers",
    items: ["AWS", "Azure", "Google Cloud Platform", "Hybrid and multi-cloud"],
  },
  {
    category: "Serverless",
    items: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
  },
  {
    category: "Containers and orchestration",
    items: ["Docker", "Kubernetes", "EKS / AKS / GKE", "ECS"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "CloudFormation", "Pulumi-ready setups"],
  },
  {
    category: "CI/CD and delivery",
    items: ["GitHub Actions", "GitLab CI", "Azure DevOps", "Jenkins"],
  },
  {
    category: "Data and platforms",
    items: ["Managed databases", "Object storage", "Messaging", "Observability baselines"],
  },
];

const relatedLinks = [
  {
    title: "DevOps",
    href: "/services/devops",
    description: "Pipelines, environments, and delivery mechanics that make cloud changes repeatable.",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Deeper assessments when cloud risk and compliance need dedicated review.",
  },
  {
    title: "Software development",
    href: "/services/software-development",
    description: "Build cloud-ready products with architecture that can actually scale.",
  },
];

const faqs = [
  {
    question: "Do you recommend one cloud vendor only?",
    answer:
      "No. We help you choose AWS, Azure, GCP, or a mix based on workloads, team skills, cost, and lock-in — not a preferred reseller pitch.",
  },
  {
    question: "How is this different from DevOps?",
    answer:
      "Cloud consulting focuses on strategy, migration, platforms, and architecture choices. DevOps focuses on how you deliver and operate changes day to day. Many engagements use both.",
  },
  {
    question: "Can you help if we already run in the cloud?",
    answer:
      "Yes. Optimization, security posture, cost control, and modernization of existing estates are common starting points.",
  },
  {
    question: "Do you cover serverless?",
    answer:
      "Yes — as part of strategy and architecture decisions where event-driven or function-based patterns reduce cost and ops load without creating hidden complexity.",
  },
];

function CloudHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.1rem]">
                Cloud consulting services
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Cut through cloud complexity with clear advisory across migration,
                integration, modernization, and cloud-native apps — so performance and
                cost move in the right direction.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact-form"
            className="group relative flex min-h-[260px] items-start justify-between gap-6 overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: DEEP }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/14 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10 max-w-[15rem] leading-tight md:max-w-[17rem]">
              {PRIMARY_CTA}
            </span>
            <span
              className="relative z-10 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: SKY }}
            >
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Surreal cloud consulting visual with ladders reaching into the sky"
              className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[55%_40%]"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute right-[6%] bottom-0 hidden h-[68%] w-[34%] bg-[#f4f4f4] lg:block"
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

function WhyCloudSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[260px] grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex items-center border-b border-neutral-200 px-6 py-14 md:px-10 lg:border-b-0 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Why opt for cloud consulting?
            </h2>
          </div>
          <div className="flex items-center px-6 py-14 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.78] tracking-tight text-neutral-700">
              Distributed work, faster product cycles, and rising customer expectations
              push teams toward more compute and more flexibility. Cloud consulting turns
              that pressure into a plan: the right platforms, a safer migration path, and
              an operating model that scales without burning budget or creating fragile
              sprawl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
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
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`min-h-[220px] cursor-pointer border-neutral-200 px-6 py-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
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
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
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

function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[360px] overflow-hidden border-b border-neutral-200 lg:min-h-full lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MID_IMAGE}
              alt="Abstract cloud consulting ring on sand with sky"
              className="absolute inset-0 h-full w-full object-cover object-[45%_50%]"
              decoding="async"
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
                      className="flex min-h-[72px] w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-300 hover:bg-white/5 md:px-10 lg:px-12"
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
                          transition={{ duration: 0.35, ease: fadeEase }}
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

function VendorSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[220px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-12 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              How to choose the right cloud vendor
            </h2>
          </div>
          <div className="flex items-end px-6 py-12 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Unbiased support to pick a provider — or mix — that fits operations,
              industry, budget, and the features you actually need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {vendorFactors.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[180px] border-neutral-200 px-6 py-8 md:px-8 lg:px-10 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index % 3 !== 0 ? "lg:border-l" : ""} ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${index >= 2 ? "md:border-t" : ""} ${index >= 3 ? "lg:border-t" : ""}`}
            >
              <div className="mb-5 h-1 w-10" style={{ backgroundColor: SKY }} />
              <h3 className="text-lg font-semibold tracking-[-0.035em] text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.68] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  return (
    <section id="platforms" className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="border-b border-white/14 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
            Platforms we work across
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-white/70">
            AWS, Azure, and Google Cloud — selected for fit, not affiliation theater.
            We help you succeed on the platform that matches the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {platforms.map((platform, index) => (
            <article
              key={platform.title}
              className={`min-h-[240px] px-6 py-10 md:px-8 lg:px-10 ${
                index > 0 ? "border-t border-white/14 md:border-t-0 md:border-l" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold tracking-[-0.045em]" style={{ color: SKY }}>
                {platform.title}
              </h3>
              <p className="mt-6 text-[15px] leading-[1.72] tracking-tight text-white/72">
                {platform.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
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
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-1 border-neutral-200 transition-[background-color,min-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-cols-[0.34fr_0.66fr] ${
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
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center px-6 pb-6 md:px-10 md:py-6 lg:px-16">
                  <p
                    className={`max-w-2xl text-[15px] leading-[1.7] tracking-tight text-neutral-700 transition-opacity duration-400 ${
                      isActive ? "opacity-100" : "opacity-55 md:opacity-70"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CloudCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Cloud consulting CTA visual with geometric stairs and sky"
              className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-[40%_45%]"
              decoding="async"
            />
          </div>

          <div
            className="flex min-h-[340px] items-center px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20"
            style={{ backgroundColor: DEEP }}
          >
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl lg:text-[3.1rem]">
                Considering a move to the cloud?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/75">
                Let Sofnology cloud consultants analyze your needs and design a practical
                integration strategy your team can own.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#0C4A6E] md:px-8"
                style={{ backgroundColor: SKY }}
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
      </div>
    </section>
  );
}

function AdvantagesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-neutral-200" style={{ backgroundColor: DEEP }}>
      <div className="mx-auto max-w-[1440px] border-x border-white/10 text-white">
        <div className="min-h-[260px] border-b border-white/14 px-6 py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[42%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
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
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[220px] text-[#0C4A6E]" : "min-h-[110px] text-white"}`}
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
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {item.title}
                  </h3>
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
    <section id="tech-stack" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
            Cloud tech stack
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
            Providers, serverless, containers, and delivery tooling — chosen for
            maintainability. For deeper pipeline work, see{" "}
            <a href="/services/devops" className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700">
              DevOps
            </a>
            .
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

function FaqSection() {
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
                  <span className="text-4xl leading-none font-light text-[#0C4A6E]" aria-hidden="true">
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

function RelatedSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-6 py-12 md:px-10 lg:px-16">
          <h2 className="max-w-4xl text-3xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl">
            Related Sofnology work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`group flex min-h-[150px] flex-col justify-between border-neutral-200 px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8 lg:px-10 ${
                index > 0 ? "border-t md:border-t-0 md:border-l" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-neutral-950 md:text-xl">
                  {link.title}
                </h3>
                <p className="mt-4 max-w-sm text-[14px] leading-[1.65] tracking-tight text-neutral-700">
                  {link.description}
                </p>
              </div>
              <span
                className="mt-8 inline-flex transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: DEEP }}
              >
                <ArrowUpRightIcon />
              </span>
            </a>
          ))}
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
            className="pointer-events-auto mx-auto flex h-14 max-w-lg items-center justify-between gap-4 px-5 text-[14px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_40px_rgba(12,74,110,0.28)] md:h-16 md:max-w-xl md:px-6 md:text-[15px]"
            style={{ backgroundColor: DEEP }}
          >
            <span>{PRIMARY_CTA}</span>
            <span style={{ color: SKY }}>
              <ArrowUpRightIcon />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CloudConsultingPage() {
  return (
    <>
      <Navbar />
      <main>
        <CloudHero />
        <div className="content-rail">
          <WhyCloudSection />
          <BenefitsSection />
          <ServicesSection />
          <VendorSection />
          <PlatformsSection />
          <DeliverablesSection />
          <CloudCtaSection />
          <AdvantagesSection />
          <TechStackSection />
          <FaqSection />
          <RelatedSection />
          <ContactSection showIntro={false} accent="sky" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
