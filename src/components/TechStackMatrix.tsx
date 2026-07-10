"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Frontend", "Backend", "Cloud & DevOps", "Automation Tools"];

export default function TechStackMatrix() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="tech-stack" className="border-b border-neutral-200 bg-neutral-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Our Technology Matrix
          </h2>
          <div className="mt-3 h-0.5 w-12 bg-cobalt" />

          {/* Tab navigation row */}
          <div className="mt-10 flex flex-wrap gap-0 border border-neutral-200 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`border-r border-neutral-200 px-6 py-3 text-sm font-semibold transition-colors duration-200 last:border-r-0 ${
                  activeTab === tab
                    ? "border-b-2 border-b-cobalt bg-neutral-50 text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Logo badge grid placeholder */}
          <div className="mt-0 min-h-[240px] border border-t-0 border-neutral-200 bg-white p-8">
            <p className="mb-6 text-xs font-bold tracking-widest text-neutral-400">
              ACTIVE: {activeTab.toUpperCase()}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`${activeTab}-badge-${i}`}
                  className="flex h-16 items-center justify-center border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-400"
                >
                  Logo Badge
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
