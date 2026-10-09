import type { RichPage } from "./types";
import { measured, owned, partner, tone } from "./shared";

export const howWeWorkPages: RichPage[] = [
  {
    path: "/how-we-work/project-based-delivery",
    title: "Project-Based Delivery",
    description: "A scoped outcome from discovery through release, with milestones, testing, and handover.",
    tone: tone("#10233F", "#E8EEF6", "#9BB6D6", "navy"),
    heroLayout: "cta-first",
    hero: {
      title: "Project-based delivery",
      lede: "Sofnology owns a defined outcome from discovery through release. You stay on the business. The scope, milestones, and handover stay visible.",
      image: "/project-outsourcing-hero.jpg",
      imageAlt: "Person working on a laptop in a bright office",
      ctaLabel: "Start a Project",
    },
    services: {
      title: "What this model is for",
      lede: "A contained piece of work with a finish line: an MVP, a rebuild, a platform upgrade, or a first project with Sofnology.",
      items: [
        { title: "A defined outcome", description: "The work has a scope and a release, not an open-ended seat on a team." },
        { title: "Milestones you can see", description: "Status, demos, and the next increment stay in view while the build is underway." },
        { title: "Time and materials, with a path", description: "Discovery clarifies the scope. Delivery then runs with visible effort when priorities move." },
        { title: "Testing before release", description: "QA and hardening sit before go-live, so the handover is something the team can run." },
      ],
    },
    stages: {
      title: "From the brief to the release",
      lede: "The same path the project engagements already use.",
      items: [
        { title: "Discovery", description: "Align on the goal and the constraints, then estimate time, cost, and the team the work needs." },
        { title: "Staffing", description: "Assemble the engineers and the project lead for that scope." },
        { title: "Engineering", description: "Build in reviewable increments toward the agreed outcome." },
        { title: "Release", description: "Test, launch, and hand over a system that can be supported after day one." },
      ],
    },
    engagements: {
      title: "When this fits",
      lede: "Use it when you want one partner accountable for the outcome. A dedicated team, or a specialist added to yours, is a different model.",
      items: [
        { title: "The build is not your core team", pain: "There is no in-house group to own it", description: "Sofnology takes the delivery, from the first estimate through release." },
        { title: "The initiative is scoped", pain: "The work has a boundary", description: "A defined product, upgrade, or rebuild with milestones and a handover." },
        { title: "A first project together", pain: "You want a contained start", description: "One outcome is enough to see how the working relationship actually goes." },
      ],
    },
    cta: {
      title: "Have a scoped outcome in mind?",
      lede: "Share the goal, the timeline, and the constraints. We will say if this model fits, or if a team or a specialist on your team fits better.",
      ctaLabel: "Start a Project",
      image: "/enterprise-cta.jpg",
      imageAlt: "Team working together in a studio",
    },
    faqs: [
      {
        question: "How is this different from staff augmentation?",
        answer: "Project-based delivery means Sofnology owns a scoped outcome through release. Staff augmentation adds people to a team that already runs the backlog.",
      },
      {
        question: "Is the price fixed before discovery?",
        answer: "Discovery comes first so the scope is real. Most of these engagements then run on time and materials with visible milestones.",
      },
      measured,
      owned,
      partner,
    ],
  },
  {
    path: "/how-we-work/dedicated-development-team",
    title: "Dedicated Development Team",
    description: "A Sofnology team that stays on one product roadmap, instead of a single scoped release.",
    tone: tone("#243B55", "#E4EEF6", "#6FA8DC", "slate"),
    heroLayout: "image-first",
    hero: {
      title: "Dedicated development team",
      lede: "A Sofnology team stays on your product. The mix is set for the roadmap, and the team works inside your process.",
      image: "/web-dev-hero.jpg",
      imageAlt: "Engineering team collaborating in a workspace",
      ctaLabel: "Start a Project",
    },
    services: {
      title: "What the team is responsible for",
      lede: "One product, over time. Useful when the roadmap keeps moving and a one-off project would restart the team every quarter.",
      items: [
        { title: "One product", description: "The team works that roadmap, so context stays instead of rotating across unrelated jobs." },
        { title: "A mix for the work", description: "Engineering, and design, QA, or a project lead when the product needs them." },
        { title: "Your process", description: "The team joins the tools, reviews, and rhythm you already use." },
        { title: "A shape that can change", description: "The team can grow or shrink with the roadmap, without a permanent hire for every change." },
      ],
    },
    stages: {
      title: "How a team starts",
      lede: "The first step is the product and the roles, not a pile of résumés.",
      items: [
        { title: "The roadmap", description: "What the product has to do over the next stretch, and which skills that actually needs." },
        { title: "The team", description: "Match people to that work and agree how they sit in your process." },
        { title: "The rhythm", description: "Reviews, demos, and decisions on a cadence the product can live with." },
        { title: "The adjustment", description: "Change the mix when the roadmap changes, and keep the same ownership." },
      ],
    },
    engagements: {
      title: "When this fits",
      lede: "A dedicated team is the long product partnership. Staff augmentation adds a specialist to a team you already manage.",
      items: [
        { title: "The product keeps going", pain: "One release will not finish the work", description: "A stable team stays with the roadmap across features." },
        { title: "Hiring would take too long", pain: "The local search cannot staff the team", description: "Sofnology composes the team and keeps employment and continuity." },
        { title: "The work is specialized", pain: "The skills are hard to hire as a group", description: "The needed mix sits on one product instead of as separate contractors." },
      ],
    },
    cta: {
      title: "Need a team that stays with the product?",
      lede: "Tell us the roadmap and the roles. We will shape the team, or say if a specialist or a scoped project fits better.",
      ctaLabel: "Start a Project",
      image: "/enterprise-cta.jpg",
      imageAlt: "People in a working session around a table",
    },
    faqs: [
      {
        question: "How is a dedicated team different from staff augmentation?",
        answer: "A dedicated team is a Sofnology team on your product. Staff augmentation places a specialist into a team you already run day to day.",
      },
      {
        question: "Is this the right model for a short, fixed build?",
        answer: "Usually not. A scoped release fits project-based delivery. A dedicated team pays off when the product continues.",
      },
      measured,
      owned,
      partner,
    ],
  },
  {
    path: "/how-we-work/staff-augmentation",
    title: "Staff Augmentation",
    description: "A specialist added to a team that already runs delivery, without standing up a separate team.",
    tone: tone("#1B4332", "#D8F3DC", "#74C69D", "moss"),
    heroLayout: "cta-first",
    hero: {
      title: "Staff augmentation",
      lede: "Add a Sofnology specialist to the team you already have. You keep the backlog, the tools, and the day-to-day priorities.",
      image: "/web-dev-hero.jpg",
      imageAlt: "Engineers working together at a shared desk",
      ctaLabel: "Start a Project",
    },
    services: {
      title: "A specialist, not a new model",
      lede: "This is one skill inside a team that already ships. The person joins your cadence.",
      items: [
        { title: "A specific gap", description: "Development, QA, DevOps, design, data, or a lead, for the phase you are in." },
        { title: "Your backlog", description: "Priorities and process stay with you. The specialist works in that system." },
        { title: "A limited window", description: "Useful when the skill is needed for a stretch and not as a permanent hire." },
        { title: "Employment stays with Sofnology", description: "You interview and decide. Sofnology handles the employment overhead for that person." },
      ],
    },
    stages: {
      title: "How a specialist is added",
      lede: "The match is the stack, the team, and the window of work.",
      items: [
        { title: "The gap", description: "Name the skill, the team they will join, and how long the need is likely to last." },
        { title: "The shortlist", description: "Sofnology proposes people who fit the stack and the way the team works." },
        { title: "The decision", description: "You interview and choose. The person then joins your tools and cadence." },
        { title: "The change", description: "The specialist can finish or shift when that gap closes." },
      ],
    },
    engagements: {
      title: "When this fits",
      lede: "Use it when delivery already has an owner. A dedicated team or a scoped project is a different model.",
      items: [
        { title: "The team is behind", pain: "Demand outgrew the people you have", description: "More hands in the same process, not a second delivery organization." },
        { title: "The skill is temporary", pain: "You need it for one module", description: "A specialist for that window, without a permanent role afterward." },
        { title: "Hiring locally is slow", pain: "The senior you need is not available nearby", description: "Capacity arrives without restarting a full search." },
      ],
    },
    cta: {
      title: "Need a specific skill on the team you have?",
      lede: "Tell us the role and the stack. We will shortlist people, and you decide who joins.",
      ctaLabel: "Start a Project",
      image: "/web-dev-cta.jpg",
      imageAlt: "Close view of a team working on laptops",
    },
    faqs: [
      {
        question: "Who manages the person day to day?",
        answer: "You do. Staff augmentation joins your team, backlog, and cadence. Sofnology remains the employer and the partner if the fit needs to change.",
      },
      {
        question: "When should this be a dedicated team instead?",
        answer: "When you need a team that stays on the product and Sofnology carries that team. Augmentation is a specialist inside a team you already manage.",
      },
      measured,
      owned,
      partner,
    ],
  },
  {
    path: "/how-we-work/technical-consulting",
    title: "Technical Consulting",
    description: "Architecture, assessments, troubleshooting, planning, and technical direction.",
    tone: tone("#16132B", "#E7E2F8", "#C4B5FD", "slate"),
    heroLayout: "image-first",
    hero: {
      title: "Technical consulting",
      lede: "A defined look at the system you already have: architecture, an assessment, a fault, or the plan for what to build next.",
      image: "/rich/databases-hero.jpg",
      imageAlt: "Workspace with notes and a laptop during a technical review",
      ctaLabel: "Start a Project",
    },
    services: {
      title: "What a consulting engagement covers",
      lede: "Advice tied to a system and a decision. It is not a standing team and it is not a build unless the next step becomes one.",
      items: [
        { title: "Architecture", description: "How the pieces should fit before more software is added." },
        { title: "Assessments", description: "A read of the current stack, the risks, and what is worth changing." },
        { title: "Troubleshooting", description: "A live fault in an existing system, traced to a cause the team can act on." },
        { title: "Planning and direction", description: "A practical sequence for the work, including what Sofnology should build and what should stay as it is." },
      ],
    },
    stages: {
      title: "How a consulting piece runs",
      lede: "Short enough to answer the question in front of you.",
      items: [
        { title: "The question", description: "The decision, the fault, or the system that needs a clear read." },
        { title: "The look", description: "Review the setup that exists: code, configuration, traffic, or the operating path." },
        { title: "The recommendation", description: "What to change, what to leave, and what a build would actually involve." },
        { title: "The next model", description: "Stop at the advice, or continue into a project, a team, or support if that is the right follow-on." },
      ],
    },
    engagements: {
      title: "When this fits",
      lede: "Consulting is the right start when the next build is not obvious yet.",
      items: [
        { title: "The design is unsettled", pain: "More features would pile onto a weak structure", description: "Set the architecture before the delivery model is chosen." },
        { title: "Something is already failing", pain: "The system is live and misbehaving", description: "Find the cause, then decide whether a repair project is warranted." },
        { title: "The plan is missing", pain: "Several options are on the table", description: "A technical direction the team can follow, with the tradeoffs written down." },
      ],
    },
    cta: {
      title: "Need a clear read before a build?",
      lede: "Tell us the system and the decision. We will say what a consulting engagement should cover.",
      ctaLabel: "Start a Project",
      image: "/rich/databases-cta.jpg",
      imageAlt: "Desk with a laptop open during a planning session",
    },
    faqs: [
      {
        question: "Does consulting include the build?",
        answer: "The consulting engagement ends with a recommendation and a plan. A build is a separate project, team, or support agreement if you want Sofnology to carry it out.",
      },
      measured,
      owned,
      partner,
    ],
  },
  {
    path: "/how-we-work/managed-services",
    title: "Managed Services",
    description: "Sofnology operates agreed technical systems on a continuing basis.",
    tone: tone("#0E2433", "#D5F4F0", "#5EEAD4", "teal"),
    heroLayout: "cta-first",
    hero: {
      title: "Managed services",
      lede: "Sofnology runs an agreed system for you: the platform, the telephony, or the infrastructure, on a continuing basis.",
      image: "/rich/cloud-linux-hero.jpg",
      imageAlt: "Server room aisle with racks in even light",
      ctaLabel: "Start a Project",
    },
    services: {
      title: "What “managed” means here",
      lede: "Operation of a named system, with Sofnology responsible for keeping that agreement working. It is not a blank retainer for whatever comes up.",
      items: [
        { title: "A named system", description: "The scope is a platform, a phone system, a cloud environment, or another system written into the agreement." },
        { title: "Continuous operation", description: "Sofnology keeps that system running, changed, and watched under the terms you agree." },
        { title: "A record of what is included", description: "Changes, incidents, and routine work stay inside the agreement instead of becoming surprise projects." },
        { title: "A path for work outside it", description: "A new product or a large rebuild is a project. It is not quietly absorbed into operations." },
      ],
    },
    stages: {
      title: "How an operating agreement starts",
      lede: "The system and the responsibilities come before the monthly rhythm.",
      items: [
        { title: "The system", description: "Which environment Sofnology will operate, and what “working” means for it." },
        { title: "The boundary", description: "What is included, what is a separate project, and who approves a change." },
        { title: "The handover", description: "Access, current state, and the people Sofnology talks to when something needs a decision." },
        { title: "The run", description: "Ongoing operation against that agreement, with a review when the system or the scope changes." },
      ],
    },
    engagements: {
      title: "When this fits",
      lede: "Use it when you want Sofnology to operate something that already exists or that a project has just handed over.",
      items: [
        { title: "The system should stay up", pain: "Nobody inside owns the day-to-day", description: "Sofnology operates the agreed platform, telephony, or infrastructure." },
        { title: "A project just finished", pain: "The build needs an operator", description: "Move the released system into a managed agreement instead of leaving it unowned." },
        { title: "The work is operational", pain: "It is care and change, not a new product", description: "Routine operation stays here. A new build stays a project." },
      ],
    },
    cta: {
      title: "Want Sofnology to run a system you already have?",
      lede: "Name the system and what you need kept working. We will outline what belongs in the agreement.",
      ctaLabel: "Start a Project",
      image: "/rich/cloud-linux-cta.jpg",
      imageAlt: "Close view of network and server equipment",
    },
    faqs: [
      {
        question: "Is this the same as a support retainer?",
        answer: "Managed services means Sofnology operates an agreed system. A retainer is a monthly allowance for maintenance and support across the work you name, without Sofnology taking over operation of the whole system.",
      },
      measured,
      owned,
      partner,
    ],
  },
  {
    path: "/how-we-work/ongoing-support",
    title: "Ongoing Support & Retainers",
    description: "Monthly maintenance, optimization, technical support, and infrastructure support.",
    tone: tone("#1C1914", "#F6EBD4", "#F5D48A", "gold"),
    heroLayout: "image-first",
    hero: {
      title: "Ongoing support and retainers",
      lede: "A monthly agreement for maintenance, small improvements, and technical support after a system is already in use.",
      image: "/rich/devops-infrastructure-hero.jpg",
      imageAlt: "Engineer at a desk with infrastructure monitors",
      ctaLabel: "Start a Project",
    },
    services: {
      title: "What a retainer covers",
      lede: "Care for systems that are already live. The monthly scope is written down so it does not turn into an unnamed rebuild.",
      items: [
        { title: "Maintenance", description: "Updates, fixes, and the small changes that keep a released system usable." },
        { title: "Technical support", description: "A path for faults and questions on the systems named in the agreement." },
        { title: "Optimization", description: "Improvements to speed, reliability, or the operating path, inside the time the retainer allows." },
        { title: "Infrastructure and marketing support", description: "Hosting, deployment, and campaign or site care when those are part of the same agreement." },
      ],
    },
    stages: {
      title: "How a retainer is set",
      lede: "The list of systems and the monthly capacity come first.",
      items: [
        { title: "The systems", description: "Which sites, apps, campaigns, or infrastructure the retainer actually covers." },
        { title: "The month", description: "What kind of work fits, and what is large enough to become its own project." },
        { title: "The channel", description: "How requests arrive and how you hear what was done." },
        { title: "The review", description: "Adjust the agreement when the systems or the volume of care change." },
      ],
    },
    engagements: {
      title: "When this fits",
      lede: "A retainer follows a launch or an existing system. It is not the model for building the product the first time.",
      items: [
        { title: "The system is live", pain: "It still needs care", description: "Maintenance and fixes without opening a new project for every small change." },
        { title: "The work is mixed", pain: "Site, hosting, and the odd improvement arrive together", description: "One monthly agreement can hold technical support and the related care you name." },
        { title: "A larger change appears", pain: "The request is really a new build", description: "That moves to project-based delivery instead of being forced into the retainer." },
      ],
    },
    cta: {
      title: "Need a monthly path for care?",
      lede: "Tell us which systems are live and what kind of support you want in the month. We will outline the retainer.",
      ctaLabel: "Start a Project",
      image: "/rich/devops-infrastructure-cta.jpg",
      imageAlt: "Hands working at a keyboard beside a dark monitor",
    },
    faqs: [
      {
        question: "Can a retainer include a new product build?",
        answer: "Small changes and care stay in the retainer. A new product or a large rebuild is scoped as project-based delivery.",
      },
      {
        question: "How is this different from managed services?",
        answer: "A retainer is monthly support and maintenance for the systems you name. Managed services means Sofnology operates an agreed system on a continuing basis.",
      },
      measured,
      owned,
      partner,
    ],
  },
];
