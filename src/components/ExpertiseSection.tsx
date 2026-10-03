"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { handleRovingTabKey } from "@/components/a11y/SelectableCard";
import { panelTransition } from "@/lib/motion";

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
    id: "core",
    label: "Core services",
    shortLabel: "Services",
    groups: [
      {
        title: "What you can hire",
        links: [
          { label: "Software Development", href: "/services/software-development" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Mobile App Development", href: "/services/mobile-development" },
          { label: "AI & Automation", href: "/services/ai-automation" },
          { label: "VoIP & Communication Systems", href: "/services/voip-communication" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
          { label: "Cloud & DevOps", href: "/services/cloud-devops" },
        ],
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering capabilities",
    shortLabel: "Engineering",
    groups: [
      {
        title: "How the work is built",
        links: [
          { label: "Backend Development", href: "/services/backend-development" },
          { label: "Frontend Development", href: "/services/frontend-development" },
          { label: "Mobile & Cross-Platform", href: "/services/mobile-cross-platform" },
          { label: "AI & Voice AI", href: "/services/ai-voice" },
          { label: "API & System Integration", href: "/services/api-integration" },
          { label: "Databases & Data", href: "/services/databases" },
          { label: "DevOps & Infrastructure", href: "/services/devops-infrastructure" },
          { label: "All Technologies", href: "/services/technologies" },
        ],
      },
    ],
  },
  {
    id: "platforms",
    label: "Platforms and systems",
    shortLabel: "Platforms",
    groups: [
      {
        title: "Systems we design or operate",
        links: [
          { label: "Cloud & Linux Infrastructure", href: "/services/platforms/cloud-linux" },
          { label: "VoIP & Contact Center Platforms", href: "/services/platforms/voip" },
          { label: "Web & SaaS Platforms", href: "/services/platforms/web-saas" },
          { label: "Business & Enterprise Systems", href: "/services/platforms/business" },
          { label: "Marketing & Analytics Platforms", href: "/services/platforms/marketing" },
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
    <section id="expertise" className="border-b border-neutral-200 bg-page">
      <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
        <div className="border-b border-neutral-200 px-5 py-7 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16">
          <h2 className="text-fluid-display font-semibold tracking-[-0.04em] text-neutral-950">
            Core services
          </h2>
          <p className="mt-3 max-w-5xl text-[16px] leading-[1.55] text-neutral-700 sm:mt-6 sm:text-fluid-body sm:leading-[1.7]">
            Software, web, mobile, AI, voice, digital marketing, and cloud. Engineering and platform pages explain how that work is built.
          </p>
        </div>

        {/* Mobile: horizontal chips. Desktop: vertical list. */}
        <div className="border-b border-neutral-200 px-5 py-4 lg:hidden">
          <div className="chip-scroll" role="tablist" aria-label="Expertise areas">
            {expertiseTabs.map((tab, index) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`expertise-panel-${tab.id}`}
                  id={`expertise-tab-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTabId(tab.id)}
                  onKeyDown={(event) =>
                    handleRovingTabKey(event, index, expertiseTabs.length, (next) =>
                      setActiveTabId(expertiseTabs[next].id),
                    )
                  }
                  className={`tap-press min-h-12 px-4 text-[15px] font-semibold tracking-[-0.02em] transition-colors duration-chrome ease-motion ${
                    isActive
                      ? "bg-navy text-white"
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
              {expertiseTabs.map((tab, index) => {
                const isActive = tab.id === activeTabId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`expertise-panel-${tab.id}`}
                    id={`expertise-tab-desktop-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTabId(tab.id)}
                    onKeyDown={(event) =>
                      handleRovingTabKey(event, index, expertiseTabs.length, (next) =>
                        setActiveTabId(expertiseTabs[next].id),
                      )
                    }
                    className={`group relative block w-full py-3.5 pr-5 pl-5 text-left text-[1.05rem] leading-snug font-semibold tracking-[-0.03em] transition-colors duration-chrome ease-motion sm:py-4 sm:pl-6 sm:text-lg md:text-xl ${
                      isActive
                        ? "bg-white/55 text-navy"
                        : "text-neutral-600 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/35 [@media(hover:hover)_and_(pointer:fine)]:hover:text-neutral-800"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 left-0 h-7 w-[3px] -translate-y-1/2 bg-navy transition-opacity duration-chrome ease-motion ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-40"
                      }`}
                    />
                    {tab.label}
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 right-4 -translate-y-1/2 text-[18px] leading-none transition-opacity duration-chrome ease-motion ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-40"
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
            <motion.div
              key={activeTab.id}
              role="tabpanel"
              id={`expertise-panel-${activeTab.id}`}
              aria-labelledby={`expertise-tab-${activeTab.id} expertise-tab-desktop-${activeTab.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={panelTransition}
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
                        <Link
                          key={link.label}
                          href={link.href}
                          className="tap-press inline-flex min-h-11 w-fit items-center text-[15px] font-semibold tracking-[-0.02em] text-neutral-950 underline decoration-neutral-950/60 underline-offset-4 transition-colors duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:hover:text-navy [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-navy"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
