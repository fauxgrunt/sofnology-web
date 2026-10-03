import type { InteriorContact, InteriorFaq, InteriorSticky } from "@/lib/interior";
import { brand } from "@/lib/theme";

export const sticky: InteriorSticky = {
  href: "/#contact-form",
  label: "Start a conversation",
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
  heading: "FAQs: Clear answers before we start",
  lede:
    "The first conversation should focus on your business goals, not basic uncertainty about process, pricing, ownership, or how the work is managed. These answers cover the questions most teams ask before starting with Sofnology.",
  collapsible: false,
  items: [
    {
      question: "Do you publish client case studies?",
      answer:
        "We publish selected delivered work on the Our work page, without named clients, logos, or invented metrics. If a future project allows a named case study, it will say so. We can share more delivery detail under NDA during discovery.",
    },
    {
      question: "What does Sofnology actually help with?",
      answer:
        "Sofnology helps businesses improve the digital layer of their operations. That can include custom software, websites, automation, cloud systems, analytics, digital marketing, conversion improvements, and the workflows that connect them.",
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
        "Smaller audits, landing page improvements, automation reviews, and focused sprints can usually start quickly once the scope is clear. Larger software or growth-system builds need a short discovery phase so the plan, ownership, and delivery milestones are properly defined.",
    },
    {
      question: "Can you improve an existing website, app, or workflow?",
      answer:
        "Yes. We can audit what already exists, identify the weak points, modernize the experience, improve performance, add tracking, connect tools, automate manual steps, or rebuild only the parts that are slowing the business down.",
    },
    {
      question: "Do you handle digital marketing as well as development?",
      answer:
        "Yes. We support digital marketing work such as SEO, paid campaigns, landing pages, analytics, conversion tracking, content systems, and growth reporting. The advantage is that marketing and technical delivery can be planned together instead of operating separately.",
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
