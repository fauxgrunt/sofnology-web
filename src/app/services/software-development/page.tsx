"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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

const fitSignals = [
  {
    title: "Workarounds become the process",
    description:
      "Teams rely on spreadsheets, copied updates, and manual checks because the current tools do not match daily operations.",
  },
  {
    title: "Reporting stays unclear",
    description:
      "Important decisions depend on delayed updates, scattered dashboards, or data that has to be cleaned by hand.",
  },
  {
    title: "Customer workflows fragment",
    description:
      "Sales, onboarding, service, or support steps happen across disconnected systems with no single operational view.",
  },
  {
    title: "Growth adds more friction",
    description:
      "The business is moving faster than the website, app, portal, or internal system was originally designed to support.",
  },
];

const services = [
  {
    title: "Software development consulting",
    description: [
      "We examine your business requirements, user journeys, operational gaps, and technical constraints before shaping a solution. The goal is to define what should be built, why it matters, and what risks need to be handled early.",
      "From technology selection to architecture direction, Sofnology gives you a practical assessment of the trade-offs so the project can start on a clearer technical foundation.",
    ],
  },
  {
    title: "Custom software development",
    description: [
      "When generic tools stop fitting the business, we build custom web platforms, portals, dashboards, SaaS tools, and internal systems around the way your team actually operates.",
      "Each build is shaped around the business process, user needs, and long-term maintainability instead of forcing your workflow into a rigid off-the-shelf product.",
    ],
  },
  {
    title: "Software product development",
    description: [
      "For new digital products, we support the lifecycle from early planning and interface direction through development, QA, deployment, and post-launch improvement.",
      "The focus is not only releasing features. It is creating a product experience that is usable, stable, and ready for real customer or internal adoption.",
    ],
  },
  {
    title: "Software enhancement",
    description: [
      "Existing software can often be made more useful before it needs a full rebuild. We improve performance, refine UI/UX, strengthen security, fix product friction, and clean up maintainability issues.",
      "Enhancement work can also include adding practical AI or automation capabilities where they genuinely reduce manual work or improve decision-making.",
    ],
  },
  {
    title: "Software integration services",
    description: [
      "We connect software with the tools your business already depends on, including CRMs, payment systems, analytics platforms, reporting tools, and operational databases.",
      "The work covers API planning, implementation, data flow, and handover details so connected systems reduce friction instead of creating another fragile dependency.",
    ],
  },
  {
    title: "Software modernization",
    description: [
      "When legacy software becomes difficult to maintain, extend, or trust, we assess the existing code, architecture, workflows, and deployment setup before recommending the right modernization path.",
      "That may mean refactoring, UX cleanup, cloud readiness, integration improvements, or a staged rebuild that preserves what still works while removing what slows the business down.",
    ],
  },
];

const industries = [
  {
    title: "Professional services",
    description:
      "For agencies, consultants, legal teams, accounting firms, and service businesses, we build portals, dashboards, reporting systems, and workflow tools that make client work easier to manage.",
  },
  {
    title: "Ecommerce",
    description:
      "For online stores and commerce teams, we support custom storefront features, payment flows, inventory visibility, customer portals, analytics, and integrations that reduce friction between sales and operations.",
  },
  {
    title: "SaaS and startups",
    description:
      "For founders and product teams, we help turn early product ideas into usable MVPs, dashboards, onboarding flows, admin panels, and scalable technical foundations for the next release.",
  },
  {
    title: "Healthcare operations",
    description:
      "For health-focused service providers and operational teams, we can create appointment workflows, internal portals, reporting tools, and secure user experiences around clearer day-to-day coordination.",
  },
  {
    title: "Finance and operations",
    description:
      "For finance-heavy teams, we build systems that improve data visibility, approval workflows, customer records, reporting, and controlled access to business-critical information.",
  },
  {
    title: "Real estate and property",
    description:
      "For real estate and property operations, we support listing workflows, internal dashboards, customer-facing portals, lead handling, document processes, and reporting systems.",
  },
  {
    title: "Education and training",
    description:
      "For learning businesses and training providers, we can build portals, progress dashboards, resource libraries, user management, and software that supports structured digital delivery.",
  },
];

const aiApproach = [
  {
    title: "AI-assisted delivery",
    description:
      "We use AI where it improves planning, coding, testing, documentation, and analysis, while keeping senior technical judgment responsible for architecture and final decisions.",
  },
  {
    title: "AI-powered business tools",
    description:
      "We design practical AI features that help with workflows, document handling, internal search, reporting, support processes, and decision visibility without adding unnecessary complexity.",
  },
  {
    title: "AI discovery workshops",
    description:
      "We help teams identify where AI can create real operational value, which use cases should wait, and what technical foundation is needed before implementation.",
  },
  {
    title: "Responsible implementation",
    description:
      "Every AI feature is shaped around reliability, transparency, data access, user control, and long-term maintainability so it becomes part of the system instead of a risky add-on.",
  },
];

const cooperationModels = [
  {
    title: "Scenario 1: Software discovery workshop",
    description:
      "If you need clarity before committing to a build, we help define the problem, user flows, technical risks, scope, and first release priorities. This model is ideal when the business knows something needs to improve but the roadmap is not yet clear.",
  },
  {
    title: "Scenario 2: MVP or first release",
    description:
      "For new products, portals, dashboards, or SaaS ideas, Sofnology can shape and build a practical first release with architecture, UX direction, integrations, QA, and deployment handled as one focused delivery track.",
  },
  {
    title: "Scenario 3: Internal system build",
    description:
      "When your team is slowed down by spreadsheets, repeated handoffs, or scattered tools, we build internal portals, workflow systems, dashboards, and operational software that make daily work easier to manage.",
  },
  {
    title: "Scenario 4: Modernization sprint",
    description:
      "If an existing website, app, or internal platform is hard to maintain, slow to update, or difficult to trust, we can focus on refactoring, performance cleanup, UX improvement, integration repair, and cloud readiness.",
  },
  {
    title: "Scenario 5: Ongoing improvement partner",
    description:
      "For businesses that need continuous technical support, automation improvements, feature delivery, and strategic product guidance, Sofnology can stay involved as a practical long-term digital execution partner.",
  },
];

const choiceReasons = [
  {
    accent: "Founder-led",
    description: "Senior attention on scope, architecture, delivery decisions, and client communication.",
  },
  {
    accent: "2-week",
    description: "A practical discovery-to-kickoff rhythm for projects that already have clear priorities.",
  },
  {
    accent: "AI",
    description: "Practical AI, automation, and modern web stacks used only where they improve the workflow.",
  },
  {
    accent: "7",
    description: "Business sectors covered across professional services, ecommerce, SaaS, healthcare, finance, property, and education.",
  },
  {
    accent: "Apps",
    description: "Custom portals, dashboards, internal systems, websites, and product interfaces for real users.",
  },
  {
    accent: "Cost",
    description: "Guidance that weighs initial build effort, maintenance, hosting, integration, and ownership costs.",
  },
  {
    accent: "Scope",
    description: "Delivery shaped around clear milestones, review cycles, and decisions that keep work grounded.",
  },
  {
    accent: "Handover",
    description: "Documentation, access clarity, and support planning so your team can own what gets delivered.",
  },
];

const deliveryApproach = [
  {
    title: "Quality control",
    description:
      "We treat quality as part of the build, not a final pass. Critical workflows are reviewed through implementation, testing, performance checks, and security-minded development practices before launch.",
  },
  {
    title: "Flexibility",
    description:
      "Projects change as teams learn. Sofnology keeps the delivery model practical, adapting scope, priorities, and release plans without losing sight of the original business outcome.",
  },
  {
    title: "Transparency",
    description:
      "You get clear communication around progress, blockers, decisions, and next steps. The goal is to make the work understandable for both technical and non-technical stakeholders.",
  },
  {
    title: "Software engineering methodologies",
    description:
      "We use the methods that fit the engagement, from focused discovery and agile delivery to code reviews, documentation, DevOps readiness, and structured handover.",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Discovery and analysis",
    description:
      "We clarify the business goal, user workflows, current constraints, and first-release priorities so the project starts with a practical scope instead of assumptions.",
  },
  {
    number: "02",
    title: "UX/UI direction",
    description:
      "Key screens, journeys, and interaction patterns are shaped around real users, giving the build a clear product structure before development moves too far.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build in focused increments, connecting the frontend, backend, data flows, and integrations while keeping maintainability and future changes in view.",
  },
  {
    number: "04",
    title: "Feedback and testing",
    description:
      "Important paths are reviewed, tested, and refined with your feedback so the software becomes clearer, more stable, and better aligned with daily operations.",
  },
  {
    number: "05",
    title: "Release",
    description:
      "Deployment planning covers hosting, environment setup, access, launch checks, and the details needed to move from development into real use.",
  },
  {
    number: "06",
    title: "Refinement",
    description:
      "After launch, we help prioritize improvements, clean up friction, document the system, and identify the next changes that will create the most value.",
  },
];

const technologyStack = [
  {
    category: "Frontend development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Design systems"],
  },
  {
    category: "Backend development",
    items: ["Node.js", "API design", "Authentication", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "Cloud development",
    items: ["Vercel", "AWS-ready architecture", "Azure-ready architecture", "Serverless", "CI/CD", "Monitoring"],
  },
  {
    category: "Mobile and cross-platform",
    items: ["React Native", "PWA", "Mobile-first web", "iOS-ready UI", "Android-ready UI", "Device testing"],
  },
  {
    category: "QA tools",
    items: ["Test planning", "Manual QA", "Regression checks", "Accessibility review", "Performance checks", "Bug tracking"],
  },
  {
    category: "AI and automation",
    items: ["OpenAI APIs", "Workflow automation", "Document processing", "Internal search", "Reporting assistants", "Data cleanup"],
  },
  {
    category: "Data and analytics",
    items: ["Dashboards", "Event tracking", "Data pipelines", "Business reporting", "Analytics setup", "Operational metrics"],
  },
  {
    category: "Methodologies",
    items: ["Discovery", "Agile delivery", "Code reviews", "Documentation", "DevOps readiness", "Handover planning"],
  },
  {
    category: "Third-party integrations",
    items: ["CRM systems", "Payment gateways", "Analytics tools", "Booking APIs", "Marketing tools", "Internal databases"],
  },
];

const placeholderProjects = [
  {
    sector: "Professional services",
    title: "Client operations portal",
    description:
      "A placeholder engagement for a service business that needs client onboarding, task visibility, document handling, and internal status tracking in one clear portal.",
  },
  {
    sector: "Ecommerce",
    title: "Order intelligence dashboard",
    description:
      "A placeholder project for commerce teams that need cleaner reporting across orders, inventory, marketing activity, and customer support workflows.",
  },
  {
    sector: "SaaS",
    title: "MVP product workspace",
    description:
      "A placeholder SaaS build covering onboarding, user roles, admin controls, billing readiness, and the first core workflow needed for market validation.",
  },
  {
    sector: "Healthcare operations",
    title: "Appointment workflow system",
    description:
      "A placeholder operational system for appointment intake, staff coordination, patient communication, and secure internal reporting.",
  },
  {
    sector: "Finance and operations",
    title: "Approval and reporting hub",
    description:
      "A placeholder internal platform for request approvals, controlled access, financial records, and leadership-level reporting.",
  },
  {
    sector: "Real estate",
    title: "Property workflow assistant",
    description:
      "A placeholder real estate workflow for leads, listings, document steps, follow-ups, and visibility across active property work.",
  },
];

function SoftwareProjectCta() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[340px] overflow-hidden border-b border-neutral-200 lg:min-h-[430px] lg:border-r lg:border-b-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/software development.jpg"
              alt="Software team reviewing a product workflow together"
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
            />
            <div className="absolute inset-0 bg-white/10" />
          </div>

          <div className="flex min-h-[340px] items-center bg-[#555a5a] px-6 py-12 text-white md:px-10 lg:min-h-[430px] lg:px-16 xl:px-20">
            <div className="w-full max-w-3xl">
              <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] md:text-5xl lg:text-[3.25rem]">
                Looking for software development services for your business?
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/78">
                Share the system, workflow, or product you need to improve. Sofnology can
                help you clarify the scope, shape a practical delivery plan, and start
                moving with senior technical guidance.
              </p>

              <a
                href="#contact-form"
                className="group relative mt-14 flex min-h-20 w-full max-w-xl items-center justify-between overflow-hidden bg-[#061a3a] px-6 py-6 text-xl font-semibold tracking-[-0.045em] text-white transition-colors duration-300 hover:bg-[#0b2a5b] md:px-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Get in touch</span>
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

function WhySofnologySection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-[250px] border-b border-neutral-200 px-6 py-14 md:px-10 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Why Sofnology is the right choice
            </h2>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/software development.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover blur-[2px] scale-105"
            decoding="async"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#061a3a]/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#061a3a]/35 via-neutral-950/55 to-[#061a3a]/78" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {choiceReasons.map((reason, index) => (
              <article
                key={reason.accent}
                className={`flex min-h-[245px] flex-col border-white/35 px-6 py-8 text-white md:px-8 lg:px-8 xl:px-10 ${
                  index % 2 === 1 ? "md:border-l" : ""
                } ${index > 0 ? "lg:border-l" : ""} ${
                  index > 3 ? "border-t" : index > 1 ? "border-t lg:border-t-0" : index > 0 ? "border-t md:border-t-0" : ""
                }`}
              >
                <div className="text-5xl leading-none font-light tracking-[-0.07em] text-[#d8f3ff] md:text-6xl">
                  {reason.accent}
                </div>
                <p className="mt-auto max-w-xs pt-10 text-[15px] leading-[1.55] tracking-tight text-white/86">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliveryApproachSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-[250px] border-b border-neutral-200 px-6 py-14 md:px-10 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Our approach
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {deliveryApproach.map((item, index) => (
            <article
              key={item.title}
              className={`min-h-[240px] border-neutral-200 px-6 py-9 md:px-10 lg:px-12 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
            >
              <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] text-neutral-950 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-[280px] border-b border-neutral-200 px-6 py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              How we work
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
              From the first conversation to launch, we test, review, and refine each
              phase so the final software is useful, understandable, and ready for real
              business use.
            </p>
          </div>
        </div>

        <div>
          {workSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.title}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`grid cursor-pointer grid-cols-[0.34fr_0.66fr] border-neutral-200 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.48fr_0.52fr] ${
                  index > 0 ? "border-t" : ""
                } ${
                  isActive
                    ? "min-h-[210px] bg-[#061a3a] text-white"
                    : "min-h-[125px] bg-[#f4f4f4] text-neutral-950 hover:bg-white/55"
                }`}
              >
                <div
                  className={`flex items-start border-r px-6 py-6 transition-colors duration-500 md:px-10 lg:px-16 ${
                    isActive ? "border-white/18" : "border-neutral-200"
                  }`}
                >
                  <span
                    className={`text-6xl leading-none font-light tracking-[-0.08em] transition-colors duration-500 md:text-7xl ${
                      isActive ? "text-[#d8f3ff]" : "text-neutral-950"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col justify-center px-6 py-7 md:px-10 lg:px-16">
                  <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] md:text-2xl">
                    {step.title}
                  </h3>
                  <p
                    className={`max-w-3xl overflow-hidden text-[15px] leading-[1.72] tracking-tight transition-all duration-500 ${
                      isActive
                        ? "mt-8 max-h-40 translate-y-0 opacity-85"
                        : "mt-0 max-h-0 translate-y-2 opacity-0"
                    }`}
                  >
                    {step.description}
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

function TechnologyStackSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="bg-[#061a3a] text-white">
          <div className="min-h-[310px] border-b border-white/14 px-6 py-14 md:px-10 lg:flex lg:flex-col lg:justify-center lg:pl-[48%]">
            <div className="lg:px-16">
              <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl">
                Our technology stack
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-white/74">
                We choose proven tools that fit the product, the team, and the long-term
                maintenance plan, then combine them with practical automation where it
                creates clear operational value.
              </p>
            </div>
          </div>

          <div>
            {technologyStack.map((group, index) => (
              <article
                key={group.category}
                className={`grid min-h-[132px] grid-cols-1 border-white/14 px-6 py-7 md:px-10 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <div className="flex items-start lg:border-r lg:border-white/14 lg:px-8 xl:px-12">
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

function OurWorkSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="min-h-[250px] border-b border-neutral-200 px-6 py-14 md:px-10 lg:flex lg:items-center lg:pl-[48%]">
          <div className="lg:px-16">
            <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
              Our Work
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
                className={`group grid cursor-pointer grid-cols-1 border-neutral-200 transition-[min-height,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[0.48fr_0.52fr] ${
                  index > 0 ? "border-t" : ""
                } ${isActive ? "min-h-[260px] bg-white/55" : "min-h-[98px] bg-[#f4f4f4] hover:bg-white/45"}`}
              >
                <div className="flex items-start border-b border-neutral-200 px-6 py-7 md:px-10 lg:border-r lg:border-b-0 lg:px-8 xl:px-12">
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
                      <p className="mt-7 text-[12px] font-semibold tracking-[0.16em] text-[#061a3a] uppercase">
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

        <a
          href="#contact-form"
          className="group flex min-h-24 items-center justify-between bg-[#061a3a] px-6 py-7 text-xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 hover:bg-[#0b2a5b] md:px-10 lg:px-8 xl:px-12"
        >
          <span>Discuss a project like these</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRightIcon />
          </span>
        </a>
      </div>
    </section>
  );
}

export default function SoftwareDevelopmentPage() {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const [activeModel, setActiveModel] = useState(0);
  const visibleModels = [
    cooperationModels[activeModel],
    cooperationModels[(activeModel + 1) % cooperationModels.length],
  ];
  const canGoBack = activeModel > 0;
  const canGoForward = activeModel < cooperationModels.length - 1;

  const goToPreviousModel = () => {
    setActiveModel((current) => Math.max(0, current - 1));
  };

  const goToNextModel = () => {
    setActiveModel((current) => Math.min(cooperationModels.length - 1, current + 1));
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-neutral-200 bg-[#f4f4f4]">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[0.36fr_0.64fr]">
              <div className="hidden min-h-[410px] lg:block" />

              <div className="grid min-h-[410px] grid-cols-1 px-6 py-12 md:px-10 lg:grid-cols-[0.56fr_0.44fr] lg:px-0 lg:py-0">
                <div className="flex items-start lg:px-8 lg:py-12 xl:px-12">
                  <h1 className="max-w-xl text-5xl leading-[1.05] font-semibold tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-[4.25rem]">
                    Software development services
                  </h1>
                </div>

                <div className="mt-16 flex items-end lg:mt-0 lg:px-8 lg:py-12 xl:px-12">
                  <p className="max-w-lg text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                    Sofnology designs and builds custom software, internal systems,
                    portals, dashboards, and integrations that reduce operational friction
                    and give growing businesses a clearer technical foundation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
              <a
                href="#contact"
                className="group relative flex min-h-[260px] items-start justify-between overflow-hidden border-b border-neutral-200 bg-[#061a3a] px-6 py-8 text-xl font-semibold tracking-[-0.04em] text-white md:px-10 lg:min-h-[360px] lg:border-b-0 lg:px-8 xl:px-12"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/16 opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
                />
                <span className="relative z-10">Contact us</span>
                <span className="relative z-10 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRightIcon />
                </span>
              </a>

              <div className="relative min-h-[360px] overflow-hidden md:min-h-[430px] lg:min-h-[360px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Conversation.jpg"
                  alt="Sofnology software development team collaborating in a modern office"
                  className="absolute inset-0 h-full w-full object-cover"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-white/15" />
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

        <div className="content-rail">
        <section className="border-b border-neutral-200 bg-[#f4f4f4]">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="border-b border-neutral-200 px-6 py-16 md:px-10 lg:px-16">
              <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
                Built for the moments when off-the-shelf tools stop fitting
              </h2>
              <p className="mt-6 max-w-5xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                Custom software becomes valuable when the business has outgrown generic
                tools, manual patches, and disconnected systems. The first job is to
                understand where those gaps are slowing the team down.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {fitSignals.map((signal, index) => (
                <article
                  key={signal.title}
                  className={`flex min-h-[260px] flex-col border-neutral-200 px-6 py-9 md:px-10 lg:px-8 xl:px-10 ${
                    index % 2 === 1 ? "md:border-l" : ""
                  } ${index > 0 ? "lg:border-l" : ""} ${
                    index > 1 ? "border-t lg:border-t-0" : index > 0 ? "border-t md:border-t-0" : ""
                  }`}
                >
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950">
                    {signal.title}
                  </h3>
                  <p className="mt-auto pt-12 text-[14px] leading-[1.7] tracking-tight text-neutral-700">
                    {signal.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services-provided" className="border-b border-neutral-200 bg-[#f4f4f4]">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="bg-[#061a3a] text-white">
                <div className="grid min-h-[260px] grid-cols-1 border-b border-white/14 px-6 py-16 md:px-10 lg:grid-cols-[0.46fr_0.54fr] lg:px-0 lg:py-0">
                  <div className="hidden lg:block" />
                  <div className="flex items-center lg:px-14 xl:px-16">
                    <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl lg:text-[3.35rem]">
                      Services we provide
                    </h2>
                  </div>
                </div>

                <div>
                  {services.map((service, index) => (
                    <article
                      key={service.title}
                      className={`grid min-h-[300px] grid-cols-1 border-white/14 md:grid-cols-[0.46fr_0.54fr] ${
                        index > 0 ? "border-t" : ""
                      }`}
                    >
                      <div className="px-6 pt-9 md:px-10 lg:px-10 xl:px-12">
                        <h3 className="max-w-sm text-xl leading-tight font-semibold tracking-[-0.04em] text-white md:text-2xl">
                          {service.title}
                        </h3>
                      </div>

                      <div className="space-y-5 px-6 pt-9 pb-12 text-[15px] leading-[1.72] tracking-tight text-white/78 md:px-10 lg:border-l lg:border-white/14 lg:px-14 xl:px-16">
                        {service.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-[#f4f4f4]">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="grid min-h-[430px] grid-cols-1 px-6 py-16 md:px-10 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 lg:py-0">
              <div className="flex flex-col justify-start lg:px-16 lg:py-16">
                <p className="text-[16px] font-semibold tracking-[-0.02em] text-[#061a3a]">
                  Any platform, any workflow
                </p>
                <h2 className="mt-8 max-w-6xl text-3xl leading-[1.18] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl lg:text-[2.6rem]">
                  We build software that fits the way your business operates across
                  desktops, laptops, tablets, and mobile devices.
                </h2>
              </div>

              <div className="mt-12 flex items-end lg:mt-0 lg:px-16 lg:py-16">
                <p className="max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                  From internal dashboards and customer portals to workflow tools and
                  reporting systems, Sofnology designs responsive, browser-compatible
                  software that stays clear, usable, and reliable across modern devices,
                  operating systems, and screen sizes.
                </p>
              </div>
            </div>

            <div className="grid min-h-[430px] grid-cols-1 border-t border-neutral-200 px-6 py-16 md:px-10 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 lg:py-0">
              <div className="hidden lg:block" />

              <div className="flex flex-col justify-center lg:px-16 lg:py-16">
                <p className="text-[16px] font-semibold tracking-[-0.02em] text-[#061a3a]">
                  Cloud-ready delivery
                </p>
                <h2 className="mt-8 max-w-3xl text-3xl leading-[1.18] font-semibold tracking-[-0.045em] text-neutral-950 md:text-4xl lg:text-[2.6rem]">
                  We design software with deployment, scalability, access control, and
                  long-term maintainability in mind from the start.
                </h2>
                <p className="mt-12 max-w-2xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                  Whether the first release runs on Vercel, AWS-ready infrastructure,
                  Azure-ready architecture, or another modern cloud environment, our focus
                  is practical: stable releases, clean integrations, secure access, and a
                  handover your team can understand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-[#f4f4f4]">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="bg-[#061a3a] text-white">
                <div className="min-h-[250px] border-b border-white/14 px-6 py-12 md:px-10 lg:flex lg:items-center lg:justify-center lg:px-16">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl lg:text-[3.35rem]">
                      Industries we serve
                    </h2>
                    <p className="mt-6 max-w-xl text-[15px] leading-[1.75] tracking-tight text-white/72">
                      We focus on industries where clearer software can improve daily
                      operations, customer workflows, reporting, and digital delivery.
                    </p>
                  </div>
                </div>

                <div>
                  {industries.map((industry, index) => {
                    const isActive = activeIndustry === index;

                    return (
                      <article
                        key={industry.title}
                        onMouseEnter={() => setActiveIndustry(index)}
                        onFocus={() => setActiveIndustry(index)}
                        className={`group grid cursor-pointer grid-cols-[72px_1fr_58px] border-white/14 transition-[min-height,background-color,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid-cols-[0.12fr_0.42fr_0.38fr_0.08fr] ${
                          index > 0 ? "border-t" : ""
                        } ${
                          isActive
                            ? "min-h-[230px] bg-[#d8f3ff] text-[#061a3a]"
                            : "min-h-20 bg-[#061a3a] text-white hover:bg-[#0b2a5b]"
                        }`}
                        tabIndex={0}
                      >
                        <div className="px-5 py-6 text-[18px] font-semibold tracking-[-0.03em] md:px-8">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="flex items-start px-4 py-6 md:px-8">
                          <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] underline underline-offset-4 md:text-2xl">
                            {industry.title}
                          </h3>
                        </div>

                        <div
                          className={`hidden px-4 py-6 transition-all delay-100 duration-500 md:block md:px-8 ${
                            isActive
                              ? "translate-y-0 opacity-100"
                              : "pointer-events-none translate-y-2 opacity-0"
                          }`}
                        >
                          <p className="max-w-2xl text-xl leading-[1.32] font-semibold tracking-[-0.045em]">
                            {industry.description}
                          </p>
                        </div>

                        <div className="flex justify-end px-5 py-5 md:px-8">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ${
                              isActive
                                ? "bg-[#061a3a] text-[#d8f3ff]"
                                : "bg-white text-[#061a3a]"
                            }`}
                          >
                            <ArrowUpRightIcon />
                          </span>
                        </div>

                        <div
                          className={`col-span-3 px-5 pb-7 transition-opacity duration-500 md:hidden ${
                            isActive ? "block opacity-100" : "hidden opacity-0"
                          }`}
                        >
                          <p className="text-[15px] leading-[1.65] font-semibold tracking-[-0.03em]">
                            {industry.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="min-h-[250px] border-t border-white/14 border-b border-white/14 px-6 py-12 md:px-10 lg:flex lg:items-center lg:justify-center lg:px-16">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl leading-[1.08] font-semibold tracking-[-0.045em] md:text-5xl lg:text-[3.35rem]">
                      Our AI approach
                    </h2>
                    <p className="mt-6 max-w-xl text-[15px] leading-[1.75] tracking-tight text-white/72">
                      We use AI to create measurable operational value, not noise. Every
                      implementation needs a clear purpose, a reliable workflow, and a
                      practical path to adoption.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {aiApproach.map((item, index) => (
                    <article
                      key={item.title}
                      className={`min-h-[230px] border-white/14 px-6 py-8 md:px-10 lg:px-12 ${
                        index % 2 === 1 ? "md:border-l" : ""
                      } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
                    >
                      <h3 className="text-xl leading-tight font-semibold tracking-[-0.04em] underline underline-offset-4 md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-8 text-[15px] leading-[1.72] tracking-tight text-white/76">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-[#f4f4f4]">
          <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
            <div className="grid min-h-[300px] grid-cols-1 border-b border-neutral-200 px-6 py-14 md:px-10 lg:grid-cols-[0.48fr_0.52fr] lg:px-0 lg:py-0">
              <div className="flex items-center lg:px-16">
                <h2 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-neutral-950 md:text-5xl">
                  Choose your cooperation model
                </h2>
              </div>

              <div className="mt-10 flex items-center lg:mt-0 lg:px-16">
                <p className="max-w-xl text-[15px] leading-[1.75] tracking-tight text-neutral-700">
                  We offer adaptable collaboration scenarios that match the decision you
                  need to make now, whether you need clarity, a first release, a focused
                  improvement cycle, or ongoing delivery support.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 border-b border-neutral-200 lg:grid-cols-[220px_1fr]">
              <div className="flex items-start gap-3 border-b border-neutral-200 px-6 py-8 md:px-10 lg:border-r lg:border-b-0">
                <button
                  type="button"
                  onClick={goToPreviousModel}
                  disabled={!canGoBack}
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition-colors duration-300 ${
                    canGoBack
                      ? "bg-[#d8f3ff] text-[#061a3a] hover:bg-[#bfeaff]"
                      : "bg-neutral-100 text-neutral-300"
                  }`}
                  aria-label="Previous cooperation model"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goToNextModel}
                  disabled={!canGoForward}
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition-colors duration-300 ${
                    canGoForward
                      ? "bg-[#061a3a] text-white hover:bg-[#0b2a5b]"
                      : "bg-neutral-100 text-neutral-300"
                  }`}
                  aria-label="Next cooperation model"
                >
                  →
                </button>
              </div>

              <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
                {visibleModels.map((model, index) => (
                  <a
                    key={`${model.title}-${activeModel}-${index}`}
                    href="#contact"
                    className={`group flex min-h-[330px] flex-col border-neutral-200 px-6 py-8 transition-colors duration-300 hover:bg-white/55 md:px-10 lg:px-12 ${
                      index > 0 ? "md:border-l" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-8">
                      <h3 className="max-w-xl text-2xl leading-tight font-semibold tracking-[-0.045em] text-neutral-950 underline decoration-neutral-950/70 underline-offset-4">
                        {model.title}
                      </h3>
                      <span className="text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRightIcon />
                      </span>
                    </div>
                    <p className="mt-8 max-w-2xl text-[15px] leading-[1.72] tracking-tight text-neutral-700">
                      {model.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SoftwareProjectCta />
        <WhySofnologySection />
        <DeliveryApproachSection />
        <HowWeWorkSection />
        <TechnologyStackSection />
        <OurWorkSection />
        <ContactSection showIntro={false} />
        </div>
      </main>
      <Footer />
    </>
  );
}
