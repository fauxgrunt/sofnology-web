"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const LIME = "#C7FF3D";
const SOFT_LIME = "#E8FF9A";

const HERO_IMAGE = "/mobile-development-hero.png";
const TYPES_IMAGE = "/mobile-types.png";
const CTA_IMAGE = "/mobile-cta.png";

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

const checklistItems = [
  "Want to go beyond generic app features and build something users remember?",
  "Need a scalable mobile product that can grow after the first release?",
  "Looking for seamless integrations with payments, CRMs, booking tools, or internal systems?",
  "Want an app experience that feels aligned with your brand and easy to use?",
];

const audiences = [
  {
    title: "Startups",
    description:
      "For founders validating a product idea, Sofnology can help shape an MVP, prioritize the first release, and build a mobile experience that is focused enough to test with real users.",
  },
  {
    title: "Small and medium businesses",
    description:
      "For growing businesses, we create mobile apps that improve customer access, booking, ordering, communication, reporting, and day-to-day operational visibility.",
  },
  {
    title: "Scaling teams",
    description:
      "For teams modernizing customer-facing or internal mobile workflows, we plan integrations, backend readiness, security, QA, and handover from the start.",
  },
];

const mobileTypes = [
  {
    title: "By platform",
    items: ["iOS apps", "Android apps"],
  },
  {
    title: "By development approach",
    items: ["Native development", "Cross-platform apps", "Progressive web apps"],
  },
  {
    title: "By autonomy",
    items: ["Standalone apps", "Device companion apps"],
  },
  {
    title: "By advanced capability",
    items: ["AI features", "Computer vision", "Cloud-connected workflows", "Analytics"],
  },
];

const developmentServices = [
  {
    title: "Discovery: laying the foundation",
    description:
      "We clarify the audience, core use cases, feature priorities, integration needs, timeline, and business constraints before design or development begins.",
    points: ["Requirement analysis", "Feature prioritization", "Feasibility review", "MVP scope"],
  },
  {
    title: "Strategic planning",
    description:
      "The mobile product is shaped into a practical roadmap with architecture direction, platform decisions, release milestones, and ownership clarity.",
    points: ["Platform recommendation", "Architecture planning", "Delivery roadmap", "Cost visibility"],
  },
  {
    title: "Design and prototyping",
    description:
      "We map user journeys, design clear mobile screens, and validate the experience before too much build effort is committed.",
    points: ["UX flows", "UI direction", "Clickable prototypes", "User feedback"],
  },
  {
    title: "Development",
    description:
      "Frontend, backend, data flows, integrations, authentication, and admin tools are developed in reviewable increments.",
    points: ["Mobile frontend", "Secure backend", "API integrations", "Admin workflows"],
  },
  {
    title: "Testing",
    description:
      "Critical user paths are tested across devices, screen sizes, network conditions, and core workflows so the release is stable.",
    points: ["Functional testing", "Usability checks", "Performance review", "Compatibility checks"],
  },
  {
    title: "Launch and publishing",
    description:
      "We prepare the app for release, support store submission requirements, check environments, and plan post-launch improvements.",
    points: ["Release readiness", "App store guidance", "Deployment checks", "Post-launch roadmap"],
  },
];

const relatedServices = [
  {
    title: "Mobile API development and integration",
    description:
      "Connect your app to CRMs, payment systems, booking tools, analytics, internal databases, and third-party services.",
  },
  {
    title: "App modernization and migration",
    description:
      "Improve older mobile apps through UX cleanup, performance work, architecture updates, or staged rebuilds.",
  },
  {
    title: "Cloud integration",
    description:
      "Use cloud-ready infrastructure for real-time data access, scalability, authentication, and reliable deployments.",
  },
  {
    title: "Cybersecurity",
    description:
      "Plan access control, data handling, authentication, and secure development practices around the app’s risk profile.",
  },
  {
    title: "Post-launch support and evolution",
    description:
      "Prioritize fixes, improvements, analytics insights, and feature iterations after users begin interacting with the app.",
  },
];

const innovationItems = [
  {
    title: "Artificial intelligence and machine learning",
    description:
      "Add smart recommendations, internal assistants, document handling, prediction, or personalization where it improves the user journey.",
  },
  {
    title: "Augmented and virtual reality",
    description:
      "Explore immersive experiences for commerce, training, visualization, and product interaction when the use case justifies it.",
  },
  {
    title: "Internet of things",
    description:
      "Build mobile interfaces for connected devices, operational monitoring, remote controls, and real-time status updates.",
  },
  {
    title: "Voice recognition technology",
    description:
      "Support hands-free workflows, accessibility improvements, guided navigation, and voice-enabled product interactions.",
  },
];

const industryInnovation = [
  {
    title: "Healthcare",
    items: ["Appointments", "Remote care", "Medication reminders", "Patient intake", "Fitness and wellness"],
  },
  {
    title: "Finance",
    items: ["Digital payments", "Budgeting", "Approval workflows", "Secure records", "Customer portals"],
  },
  {
    title: "Retail and ecommerce",
    items: ["Mobile checkout", "Loyalty", "Order tracking", "Marketplace flows", "Customer support"],
  },
  {
    title: "Education",
    items: ["Learning portals", "Progress tracking", "Resource libraries", "Live classes", "User management"],
  },
  {
    title: "Real estate",
    items: ["Listings", "Lead handling", "Document workflows", "Property updates", "Virtual tour support"],
  },
];

const technologyStack = [
  {
    category: "Mobile platforms",
    items: ["iOS", "Android", "React Native", "Progressive web apps", "App Store", "Google Play"],
  },
  {
    category: "Frontend and UX",
    items: ["React Native", "Mobile UI systems", "Responsive screens", "Design handoff", "Accessibility", "Animations"],
  },
  {
    category: "Backend and APIs",
    items: ["Node.js", "REST APIs", "Authentication", "Databases", "Admin panels", "Notifications"],
  },
  {
    category: "Cloud and DevOps",
    items: ["Vercel", "AWS-ready architecture", "Azure-ready architecture", "CI/CD", "Monitoring", "Storage"],
  },
  {
    category: "QA and release",
    items: ["Device checks", "Regression testing", "Performance review", "Store readiness", "Bug tracking", "Launch support"],
  },
];

const placeholderProjects = [
  {
    sector: "Fitness and wellness",
    title: "Class booking mobile app",
    description:
      "A placeholder concept for booking sessions, managing memberships, push reminders, and customer-facing mobile engagement.",
  },
  {
    sector: "Food and ordering",
    title: "Local ordering platform",
    description:
      "A placeholder concept for mobile ordering, menu management, payments, delivery status, and customer account flows.",
  },
  {
    sector: "Healthcare operations",
    title: "Appointment companion app",
    description:
      "A placeholder concept for appointment intake, reminders, secure messages, and internal coordination dashboards.",
  },
  {
    sector: "Property services",
    title: "Tenant workflow app",
    description:
      "A placeholder concept for requests, status updates, documents, notifications, and property team visibility.",
  },
];

const faqs = [
  {
    question: "How does cooperation with Sofnology work?",
    answer:
      "We start with a short discovery conversation, define the audience and app goal, shape the first release, then move through design, development, testing, and launch in visible milestones.",
  },
  {
    question: "How much does it cost to build a mobile app?",
    answer:
      "Cost depends on app complexity, platform choice, UX depth, backend needs, integrations, and launch requirements. We scope the work before giving an estimate.",
  },
  {
    question: "Can Sofnology build both iOS and Android apps?",
    answer:
      "Yes. Depending on the product goals and budget, we can recommend native, cross-platform, or progressive web app delivery.",
  },
  {
    question: "Do we need a full app build to start?",
    answer:
      "Not always. Many mobile projects should begin with discovery, UX flows, and an MVP scope so the first release stays focused.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "A focused MVP can often be planned and built faster than a full product, while complex apps with multiple integrations need a longer roadmap. We define the timeline after discovery.",
  },
  {
    question: "Can you connect the app to our existing systems?",
    answer:
      "Yes. Mobile apps often need payments, CRMs, analytics, booking systems, internal databases, or custom APIs. We plan those connections early.",
  },
  {
    question: "How will you ensure the app is secure?",
    answer:
      "We plan authentication, access control, data handling, secure APIs, and review cycles around the app’s actual risk profile.",
  },
];

function MobileHero() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="hidden min-h-[410px] lg:block" />

          <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.58fr_0.42fr] lg:px-0 lg:py-0">
            <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
              <h1 className="max-w-3xl text-5xl leading-[1.04] font-semibold tracking-[-0.06em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                Custom mobile app development services
              </h1>
            </div>

            <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
              <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                Sofnology designs and builds mobile products that help businesses launch
                customer-facing apps, internal tools, and connected workflows across iOS,
                Android, and modern cross-platform environments.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
          <a
            href="#contact"
            className="group relative flex min-h-[260px] items-start justify-between overflow-hidden border-b border-neutral-200 px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-[#101413] md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
            style={{ backgroundColor: LIME }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/16 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Get in touch</span>
            <span className="relative z-10 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Premium mobile app development product visual"
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

function ChecklistSection() {
  return (
    <section id="mobile-apps" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:border-b-0 lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Let’s tick all the right boxes
            </h2>
          </div>
          <div>
            {checklistItems.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-24 items-center gap-5 border-neutral-200 px-6 py-6 md:px-10 lg:px-12 ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#101413]"
                  style={{ backgroundColor: LIME }}
                >
                  ✓
                </span>
                <p className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-200 bg-[#0B4F20]">
          <div className="grid min-h-[360px] grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
            <div className="hidden lg:block" />
            <div className="flex items-center px-6 py-14 text-white md:px-10 lg:px-16">
              <div className="max-w-3xl">
                <h3 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
                  If this sounds like you, we can help shape the right mobile path.
                </h3>
                <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                  Sofnology can turn the idea into a practical mobile roadmap, a focused
                  first release, or a connected app that supports real business workflows.
                </p>
                <a
                  href="#contact-form"
                  className="group relative mt-10 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#101413] md:px-8"
                  style={{ backgroundColor: LIME }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                  />
                  <span className="relative z-10">Book a free consultation</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[260px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.52fr_0.48fr]">
          <div className="flex items-center px-6 py-14 md:px-10 lg:px-16">
            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Mobile products for teams with something to prove
            </h2>
          </div>
          <div className="flex items-end px-6 py-14 md:px-10 lg:px-16">
            <p className="max-w-xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              From first MVPs to workflow modernization, the app strategy should match
              the team’s stage and the decision they need to make next.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {audiences.map((item, index) => {
            const isActive = activeAudience === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActiveAudience(index)}
                onFocus={() => setActiveAudience(index)}
                tabIndex={0}
                className={`flex min-h-[320px] cursor-pointer flex-col border-neutral-200 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-10 ${
                  index > 0 ? "md:border-l" : ""
                } ${index > 0 ? "border-t md:border-t-0" : ""} ${
                  isActive ? "bg-white text-neutral-950" : "text-neutral-400 hover:bg-white/45"
                }`}
              >
                <motion.div
                  className="mb-9 h-1 origin-left bg-[#0B4F20]"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: fadeEase }}
                />
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {item.title}
                </h3>
                <AnimatePresence mode="wait" initial={false}>
                  {isActive ? (
                    <motion.p
                      key={`${item.title}-active`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.35, ease: fadeEase }}
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
                      transition={{ duration: 0.25 }}
                      className="mt-auto pt-12 text-[15px] leading-[1.72] tracking-tight"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MobileTypesSection() {
  const [activeType, setActiveType] = useState(0);

  return (
    <section id="mobile-types" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[360px] grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-14 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Mobile app types we build
            </h2>
          </div>
          <div className="flex items-end px-6 py-14 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              If you already know the app type, we can help shape the right build path.
              If not, we’ll compare native, cross-platform, and PWA options against the
              product goal, budget, and long-term maintenance plan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[420px] overflow-hidden border-b border-neutral-200 bg-white lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TYPES_IMAGE}
              alt="Abstract mobile platform visual"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
            />
          </div>

          <div className="bg-[#3f4a3c] text-white">
            {mobileTypes.map((type, index) => {
              const isActive = activeType === index;

              return (
                <article
                  key={type.title}
                  onMouseEnter={() => setActiveType(index)}
                  onFocus={() => setActiveType(index)}
                  tabIndex={0}
                  className={`cursor-pointer border-white/20 px-6 py-7 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 lg:px-12 ${
                    index > 0 ? "border-t" : ""
                  } ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                >
                  <div className="flex items-start justify-between gap-8">
                    <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em]">
                      {type.title}
                    </h3>
                    <motion.span
                      className="text-4xl leading-none font-light"
                      initial={false}
                      animate={{ rotate: isActive ? 0 : 0, opacity: 1 }}
                      transition={{ duration: 0.25 }}
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
                        transition={{ duration: 0.4, ease: fadeEase }}
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopmentServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services-detail" className="border-b border-neutral-200 bg-[#101413] text-white">
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="min-h-[280px] border-b border-white/14 px-6 py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
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
              <article
                key={service.title}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-[0.28fr_0.72fr] border-white/14 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] text-[#101413]" : "min-h-[110px] text-white"}`}
                style={{ backgroundColor: isActive ? SOFT_LIME : "#101413" }}
              >
                <div className="flex items-start px-6 py-7 md:px-10 lg:px-12">
                  <span className="text-6xl leading-none font-light tracking-[-0.08em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-14">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {service.title}
                  </h3>
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="consulting" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid min-h-[240px] grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.52fr_0.48fr]">
          <div className="flex items-center px-6 py-14 md:px-10 lg:px-16">
            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Explore our related mobile services
            </h2>
          </div>
          <div className="flex items-end px-6 py-14 md:px-10 lg:px-16">
            <p className="max-w-xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              Mobile apps rarely live alone. These supporting services help the product
              stay connected, secure, and ready to evolve after launch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {relatedServices.map((service, index) => {
            const isActive = activeService === index;

            return (
              <article
                key={service.title}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                tabIndex={0}
                className={`group flex min-h-[320px] cursor-pointer flex-col border-neutral-200 px-6 py-9 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 lg:px-8 ${
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
                  transition={{ duration: 0.4, ease: fadeEase }}
                />
                <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em]">
                  {service.title}
                </h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : 4 }}
                  transition={{ duration: 0.35, ease: fadeEase }}
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
                  transition={{ duration: 0.35, ease: fadeEase }}
                  className="mt-8 inline-flex"
                >
                  <ArrowUpRightIcon />
                </motion.span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InnovationSection() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="innovation" className="border-b border-neutral-200 bg-[#101413] text-white">
      <div className="mx-auto max-w-[1440px] border-x border-white/10">
        <div className="grid min-h-[320px] grid-cols-1 border-b border-white/14 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="flex items-center px-6 py-14 md:px-10 lg:px-16">
            <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
              Cookie-cutter apps are not your style
            </h2>
          </div>
          <div className="flex items-end px-6 py-14 md:px-10 lg:px-16">
            <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-white/72">
              We can add advanced mobile capabilities when they support the product
              strategy, not because they sound impressive in a proposal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {innovationItems.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActiveItem(index)}
                onFocus={() => setActiveItem(index)}
                tabIndex={0}
                className={`min-h-[280px] cursor-pointer border-white/14 px-6 py-9 transition-[background-color,color] duration-500 md:px-10 lg:px-12 ${
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
                <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-[-0.045em]">
                  {item.title}
                </h3>
                <p
                  className={`mt-8 max-w-2xl text-[15px] leading-[1.72] tracking-tight transition-opacity duration-500 ${
                    isActive ? "opacity-90" : "opacity-70"
                  }`}
                >
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

function MobileCtaSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_IMAGE}
              alt="Mobile product visual with lime accents"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
            />
          </div>

          <div className="flex min-h-[340px] items-center bg-[#0B4F20] px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20">
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl lg:text-[3.25rem]">
                Let’s craft a mobile app that sets you apart
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Your business deserves more than another app icon. We can help shape a
                mobile product that creates real value for customers, teams, and daily
                operations.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-[#101413] transition-colors duration-300 md:px-8"
                style={{ backgroundColor: LIME }}
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

function IndustryInnovationSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-[360px] border-b border-neutral-200 px-6 py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
          <div className="max-w-3xl lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
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
                  onMouseEnter={() => setActiveIndustry(index)}
                  className={`flex min-h-20 w-full items-center border-neutral-200 px-6 text-left text-xl font-semibold tracking-[-0.04em] transition-colors duration-300 md:px-10 lg:px-12 ${
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

function SelectedProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-[250px] border-b border-neutral-200 px-6 py-14 md:px-10 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Our selected mobile projects
            </h2>
          </div>
        </div>

        <div>
          {placeholderProjects.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <article
                key={project.title}
                onMouseEnter={() => setActiveProject(index)}
                onFocus={() => setActiveProject(index)}
                tabIndex={0}
                className={`group grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.42fr_0.58fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] bg-white/60" : "min-h-[98px] bg-[#f4f4f4] hover:bg-white/45"}`}
              >
                <div className="flex items-start border-b border-neutral-200 px-6 py-7 md:px-10 lg:border-b-0 lg:px-8 xl:px-12">
                  <p className="text-[15px] leading-tight tracking-tight text-neutral-600">
                    {project.sector}
                  </p>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-8 px-6 py-7 md:px-10 lg:px-8 xl:px-12">
                  <div>
                    <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 underline decoration-neutral-950/75 underline-offset-4 md:text-2xl">
                      {project.title}
                    </h3>
                    <p
                      className={`max-w-3xl overflow-hidden text-[15px] leading-[1.72] tracking-tight text-neutral-700 transition-all duration-500 ${
                        isActive
                          ? "mt-8 max-h-40 translate-y-0 opacity-100"
                          : "mt-0 max-h-0 translate-y-2 opacity-0"
                      }`}
                    >
                      {project.description}
                    </p>
                    {isActive && (
                      <p className="mt-7 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#0B4F20]">
                        Placeholder project concept
                      </p>
                    )}
                  </div>

                  <span className="pt-1 text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechnologyStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="bg-[#101413] text-white">
          <div className="min-h-[310px] border-b border-white/14 px-6 py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
            <div className="lg:px-16">
              <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
                Mobile technology stack
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/72">
                The stack should match the app’s users, maintenance needs, integrations,
                and release plan, not simply follow the newest tool trend.
              </p>
            </div>
          </div>

          <div>
            {technologyStack.map((group, index) => (
              <article
                key={group.category}
                className={`grid min-h-[132px] grid-cols-1 border-white/14 px-6 py-7 md:px-10 lg:grid-cols-[0.42fr_0.58fr] lg:px-0 ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <div className="flex items-start lg:px-8 xl:px-12">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-[15px] leading-tight tracking-tight text-white/80 md:grid-cols-3 lg:mt-0 lg:px-8 xl:px-12">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-b border-neutral-200 bg-[#f4f4f4]">
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
                  <span className="text-4xl leading-none font-light text-[#0B4F20]" aria-hidden="true">
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
            className="pointer-events-auto mx-auto flex h-14 max-w-md items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] text-[#101413] shadow-[0_12px_40px_rgba(16,20,19,0.18)] md:h-16 md:max-w-lg md:px-6 md:text-base"
            style={{ backgroundColor: LIME }}
          >
            <span>Get in touch</span>
            <ArrowUpRightIcon />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function MobileDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <MobileHero />
        <div className="content-rail">
          <ChecklistSection />
          <AudienceSection />
          <MobileTypesSection />
          <DevelopmentServicesSection />
          <RelatedServicesSection />
          <IndustryInnovationSection />
          <InnovationSection />
          <MobileCtaSection />
          <SelectedProjectsSection />
          <TechnologyStackSection />
          <MobileFaqSection />
          <ContactSection showIntro={false} accent="lime" />
        </div>
      </main>
      <StickyGetInTouch />
      <Footer />
    </>
  );
}
