"use client";

import { useState } from "react";

type ExpertiseGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

type ExpertiseTab = {
  id: string;
  label: string;
  shortLabel: string;
  groups: ExpertiseGroup[];
};

const expertiseTabs: ExpertiseTab[] = [
  {
    id: "engineering",
    label: "Development and product engineering",
    shortLabel: "Engineering",
    groups: [
      {
        title: "Core engineering services",
        links: [
          { label: "Custom software development", href: "/services/software-development" },
          { label: "SaaS platform development", href: "/services/software-development" },
          { label: "Web application engineering", href: "/services/web-development" },
          { label: "API and backend systems", href: "/services/backend-development" },
          { label: "Quality assurance automation", href: "/services/quality-assurance" },
        ],
      },
      {
        title: "Product delivery",
        links: [
          { label: "Product discovery workshops", href: "/engagement/project-outsourcing" },
          { label: "MVP architecture and delivery", href: "/engagement/solutions-for-startups" },
          { label: "Legacy product modernization", href: "/engagement/solutions-for-enterprises" },
          { label: "Technical audits and optimization", href: "/services/software-development" },
        ],
      },
    ],
  },
  {
    id: "automation",
    label: "Automation and AI workflows",
    shortLabel: "Automation",
    groups: [
      {
        title: "Operational automation",
        links: [
          { label: "Workflow automation", href: "/engagement/solutions-for-ai-companies" },
          { label: "Internal tools and dashboards", href: "/services/software-development" },
          { label: "Process orchestration", href: "/engagement/solutions-for-ai-companies" },
          { label: "AI-assisted business operations", href: "/engagement/solutions-for-ai-companies" },
        ],
      },
      {
        title: "AI-enabled systems",
        links: [
          { label: "AI assistant implementation", href: "/engagement/solutions-for-ai-companies" },
          { label: "Document and data automation", href: "/engagement/solutions-for-ai-companies" },
          { label: "Decision-support systems", href: "/services/software-development" },
          { label: "Automation readiness consulting", href: "/engagement/solutions-for-ai-companies" },
        ],
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud, DevOps, and infrastructure",
    shortLabel: "Cloud",
    groups: [
      {
        title: "Cloud and infrastructure",
        links: [
          { label: "Cloud architecture", href: "/services/cloud-consulting" },
          { label: "Infrastructure modernization", href: "/services/cloud-consulting" },
          { label: "Secure cloud migration", href: "/services/cloud-consulting" },
          { label: "Platform reliability engineering", href: "/services/devops" },
        ],
      },
      {
        title: "Delivery operations",
        links: [
          { label: "DevOps implementation", href: "/services/devops" },
          { label: "CI/CD pipeline automation", href: "/services/devops" },
          { label: "Observability and monitoring", href: "/services/devops" },
          { label: "Security hardening", href: "/services/cybersecurity" },
        ],
      },
    ],
  },
  {
    id: "platforms",
    label: "Industry systems and business platforms",
    shortLabel: "Platforms",
    groups: [
      {
        title: "Business platforms",
        links: [
          { label: "ERP and CRM systems", href: "/services/software-development" },
          { label: "Operations dashboards", href: "/services/software-development" },
          { label: "Ecommerce platforms", href: "/industries/ecommerce" },
          { label: "Customer portals", href: "/services/web-development" },
        ],
      },
      {
        title: "Industry focus",
        links: [
          { label: "Fintech systems", href: "/industries/fintech" },
          { label: "Healthtech platforms", href: "/industries/healthtech" },
          { label: "Professional services automation", href: "/services/software-development" },
          { label: "Enterprise operations software", href: "/engagement/solutions-for-enterprises" },
        ],
      },
    ],
  },
];

export default function ExpertiseSection() {
  const [activeTabId, setActiveTabId] = useState(expertiseTabs[0].id);
  const activeTab =
    expertiseTabs.find((tab) => tab.id === activeTabId) ?? expertiseTabs[0];

  return (
    <section id="expertise" className="border-b border-neutral-200 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-8 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="text-fluid-display font-semibold tracking-[-0.04em] text-neutral-950">
            Our expertise
          </h2>
          <p className="text-fluid-body mt-3 max-w-5xl leading-[1.6] font-normal tracking-tight text-neutral-700 sm:mt-6 sm:leading-[1.7]">
            From enterprise software and automation to cloud infrastructure and
            AI-enabled workflows, Sofnology builds systems designed for clarity,
            scale, and operational control.
          </p>
        </div>

        {/* Mobile: horizontal chips. Desktop: vertical list. */}
        <div className="border-b border-neutral-200 px-5 py-4 lg:hidden">
          <div className="chip-scroll" role="tablist" aria-label="Expertise areas">
            {expertiseTabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`expertise-panel-${tab.id}`}
                  id={`expertise-tab-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`tap-press min-h-11 px-4 text-[13px] font-semibold tracking-[-0.02em] transition-colors ${
                    isActive
                      ? "bg-[#061a3a] text-white"
                      : "bg-white text-neutral-600 ring-1 ring-neutral-200"
                  }`}
                >
                  {tab.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden border-b border-neutral-200 px-6 py-10 md:px-10 lg:block lg:border-r lg:border-b-0 lg:px-16 lg:py-12">
            <div className="space-y-1" role="tablist" aria-label="Expertise areas">
              {expertiseTabs.map((tab) => {
                const isActive = tab.id === activeTabId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`expertise-panel-${tab.id}`}
                    id={`expertise-tab-desktop-${tab.id}`}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`group relative block w-full py-3.5 pr-5 pl-5 text-left text-[1.05rem] leading-snug font-semibold tracking-[-0.03em] transition-colors duration-300 sm:py-4 sm:pl-6 sm:text-lg md:text-xl ${
                      isActive
                        ? "bg-white/55 text-[#061a3a]"
                        : "text-neutral-400 hover:bg-white/35 hover:text-neutral-700"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 left-0 h-7 w-[3px] -translate-y-1/2 bg-[#061a3a] transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                      }`}
                    />
                    {tab.label}
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 right-4 -translate-y-1/2 text-[18px] leading-none transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                      }`}
                    >
                      +
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="bg-[#f1f1f1]"
            role="tabpanel"
            id={`expertise-panel-${activeTab.id}`}
            aria-labelledby={`expertise-tab-${activeTab.id}`}
          >
            {activeTab.groups.map((group, index) => (
              <div
                key={group.title}
                className={`px-5 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-12 lg:py-12 ${
                  index > 0 ? "border-t border-neutral-200" : ""
                }`}
              >
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-neutral-950 sm:text-xl">
                  {group.title}
                </h3>

                <div className="mt-5 grid grid-cols-1 gap-x-16 gap-y-3 sm:mt-7 sm:gap-y-4 md:grid-cols-2">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="tap-press inline-flex min-h-11 w-fit items-center text-[15px] font-semibold tracking-[-0.02em] text-neutral-950 underline decoration-neutral-950/60 underline-offset-4 transition-colors duration-200 hover:text-[#061a3a] hover:decoration-[#061a3a]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
