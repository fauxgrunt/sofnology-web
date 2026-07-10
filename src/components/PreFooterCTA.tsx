"use client";

import { motion } from "framer-motion";

export default function PreFooterCTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl bg-neutral-900 p-16 text-center text-white"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Kickoff your next development sprint inside 14 days.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Placeholder — connect with our engineering leads to scope your next
            initiative.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-cobalt bg-cobalt px-6 py-3 text-sm font-semibold text-charcoal transition-opacity duration-200 hover:opacity-90"
          >
            Talk to our Engineering Leads
          </a>
        </motion.div>
      </div>
    </section>
  );
}
