"use client";

import { useState } from "react";

type ExpertiseGroup = {
  title: string;
  links: string[];
};

type ExpertiseTab = {
  id: string;
  label: string;
  groups: ExpertiseGroup[];
};

const expertiseTabs: ExpertiseTab[] = [
  {
    id: "engineering",
    label: "Development and product engineering",
    groups: [
      {
        title: "Core engineering services",
        links: [
          "Custom software development",
          "SaaS platform development",
          "Web application engineering",
          "API and backend systems",
          "Quality assurance automation",
        ],
      },
      {
        title: "Product delivery",
        links: [
          "Product discovery workshops",
          "MVP architecture and delivery",
          "Legacy product modernization",
          "Technical audits and optimization",
        ],
      },
    ],
  },
  {
    id: "automation",
    label: "Automation and AI workflows",
    groups: [
      {
        title: "Operational automation",
        links: [
          "Workflow automation",
          "Internal tools and dashboards",
          "Process orchestration",
          "AI-assisted business operations",
        ],
      },
      {
        title: "AI-enabled systems",
        links: [
          "AI assistant implementation",
          "Document and data automation",
          "Decision-support systems",
          "Automation readiness consulting",
        ],
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud, DevOps, and infrastructure",
    groups: [
      {
        title: "Cloud and infrastructure",
        links: [
          "Cloud architecture",
          "Infrastructure modernization",
          "Secure cloud migration",
          "Platform reliability engineering",
        ],
      },
      {
        title: "Delivery operations",
        links: [
          "DevOps implementation",
          "CI/CD pipeline automation",
          "Observability and monitoring",
          "Security hardening",
        ],
      },
    ],
  },
  {
    id: "platforms",
    label: "Industry systems and business platforms",
    groups: [
      {
        title: "Business platforms",
        links: [
          "ERP and CRM systems",
          "Operations dashboards",
          "Ecommerce platforms",
          "Customer portals",
        ],
      },
      {
        title: "Industry focus",
        links: [
          "Fintech systems",
          "Healthtech platforms",
          "Professional services automation",
          "Enterprise operations software",
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
        <div className="border-b border-neutral-200 px-6 py-14 md:px-10 lg:px-16">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">
            Our expertise
          </h2>
          <p className="mt-6 max-w-5xl text-[15px] leading-[1.7] font-normal tracking-tight text-neutral-700">
            From enterprise software and automation to cloud infrastructure and
            AI-enabled workflows, Sofnology builds systems designed for clarity,
            scale, and operational control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-neutral-200 px-6 py-10 md:px-10 lg:border-r lg:border-b-0 lg:px-16 lg:py-12">
            <div className="space-y-1">
              {expertiseTabs.map((tab) => {
                const isActive = tab.id === activeTabId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`group relative block w-full py-4 pr-5 pl-6 text-left text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 md:text-xl ${
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

          <div className="bg-[#f1f1f1]">
            {activeTab.groups.map((group, index) => (
              <div
                key={group.title}
                className={`px-6 py-10 md:px-10 lg:px-12 lg:py-12 ${
                  index > 0 ? "border-t border-neutral-200" : ""
                }`}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-neutral-950">
                  {group.title}
                </h3>

                <div className="mt-7 grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2">
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href="#contact"
                      className="w-fit text-[15px] font-semibold tracking-[-0.02em] text-neutral-950 underline decoration-neutral-950/60 underline-offset-4 transition-colors duration-200 hover:text-[#061a3a] hover:decoration-[#061a3a]"
                    >
                      {link}
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
