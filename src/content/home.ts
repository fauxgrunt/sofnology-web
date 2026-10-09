import type { InteriorContact, InteriorFaq, InteriorSticky } from "@/lib/interior";
import { brand } from "@/lib/theme";

export const sticky: InteriorSticky = {
  href: "/#contact-form",
  label: "Start a Project",
  backgroundColor: brand.navy,
  textColor: "#ffffff",
  pastHeroPx: 320,
};

export const contact: InteriorContact = {
  showIntro: true,
};

export const faqs: InteriorFaq = {
  id: "faq",
  signColor: brand.navy,
  variant: "home",
  heading: "Before you start a project",
  lede:
    "Scope, price, ownership, and who runs the work. These are the questions teams ask before they send a brief.",
  collapsible: false,
  items: [
    {
      question: "Do you publish client case studies?",
      answer:
        "Yes. Our Work includes selected projects delivered by Sofnology and members of our delivery team. Some enterprise and confidential projects are presented anonymously where client agreements prevent public identification.",
    },
    {
      question: "What does Sofnology actually help with?",
      answer:
        "Calls, forms, and repeat tasks are already eating the day. Sofnology builds the software, the voice and telephony path, the automation, and the digital marketing that sit on that work.",
    },
    {
      question: "Do you only build custom software?",
      answer:
        "No. Custom software is one part of the work. We can also support digital marketing, SEO, paid campaigns, landing pages, tracking, CRM workflows, reporting dashboards, automation, and cloud infrastructure when those areas are part of the business outcome.",
    },
    {
      question: "How much does it cost to work with Sofnology?",
      answer:
        "Pricing depends on scope, timeline, complexity, and how many parts of the business need to be connected. We usually start by clarifying the goal, reviewing the current setup, and then providing a transparent estimate before delivery begins.",
    },
    {
      question: "How quickly can a project start?",
      answer:
        "A landing page, an automation review, or a telephony fault can start once the scope is clear. A larger software build needs a short discovery first, so the plan, the owner, and the milestones are agreed before delivery.",
    },
    {
      question: "Can you improve an existing website, app, or workflow?",
      answer:
        "Yes. We can audit what already exists, identify the weak points, modernize the experience, improve performance, add tracking, connect tools, automate manual steps, or rebuild only the parts that are slowing the business down.",
    },
    {
      question: "Do you handle digital marketing as well as development?",
      answer:
        "Yes. SEO, paid search, landing pages, and conversion tracking sit with the same company that builds the site, so the page and the campaign are planned together.",
    },
    {
      question: "Who owns the final work?",
      answer:
        "The client owns the agreed deliverables, source code, assets, and configured systems after the payment and handover terms in the project agreement are complete. We keep ownership and access expectations clear before work begins.",
    },
    {
      question: "How do you keep projects under control?",
      answer:
        "We use clear scopes, milestones, progress visibility, decision logs, review cycles, and handover documentation. The goal is to keep the work connected to business priorities so projects do not drift into unclear timelines or unclear ownership.",
    },
  ],
};
