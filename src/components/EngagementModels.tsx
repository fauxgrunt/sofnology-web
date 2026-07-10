"use client";

import { motion } from "framer-motion";

const engagementModels = [
  {
    title: "Dedicated Engineering Teams",
    description: "Placeholder — long-term engineering squads embedded in your delivery pipeline.",
  },
  {
    title: "Workflow Automation Pods",
    description: "Placeholder — focused units that design and deploy automated operational workflows.",
  },
  {
    title: "End-to-End Product Delivery",
    description: "Placeholder — full lifecycle ownership from architecture through production deployment.",
  },
];

export default function EngagementModels() {
  return (
    <section id="approach" className="border-b border-neutral-200 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            How We Partner
          </h2>
          <div className="mt-3 h-0.5 w-12 bg-cobalt" />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="structural-card"
              >
                <span className="text-xs font-bold tracking-widest text-cobalt">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">{model.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
