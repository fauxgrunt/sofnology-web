"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { pageTransition } from "@/lib/motion";

const focusAreas = [
  {
    title: "Custom software for daily operations",
    description:
      "Web platforms, portals, dashboards, SaaS tools, and internal systems shaped around how your team actually works.",
    link: "Explore software delivery",
  },
  {
    title: "Digital marketing built around outcomes",
    description:
      "SEO, paid campaigns, content systems, analytics, and conversion improvements connected to real business growth.",
    link: "Plan growth channels",
  },
  {
    title: "Automation that removes friction",
    description:
      "CRM integrations, workflow automation, reporting pipelines, and AI-assisted tools where they improve efficiency.",
    link: "Find automation gaps",
  },
  {
    title: "Cloud systems ready to scale",
    description:
      "Secure infrastructure, reliable deployments, business integrations, and operational handover for long-term growth.",
    link: "Review technical foundation",
  },
];

export default function BusinessUpliftSection() {
  return (
    <section id="business-uplift" className="border-b border-neutral-200 bg-page">
      <div className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={pageTransition}
            className="px-5 pt-10 pb-8 sm:px-6 sm:pt-14 sm:pb-10 md:px-10 lg:px-16 lg:pt-20 lg:pb-16"
          >
            <p className="text-[16px] font-semibold tracking-[-0.02em] text-navy">
              Built to uplift your business
            </p>
            <h2 className="text-fluid-display mt-6 max-w-5xl font-semibold tracking-[-0.045em] text-neutral-950">
              We build, market, and automate the digital systems that help businesses
              move with clarity.
            </h2>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...pageTransition, delay: 0.08 }}
            className="flex items-end px-6 pt-0 pb-14 md:px-10 lg:px-16 lg:pt-20 lg:pb-16"
          >
            <div className="max-w-2xl space-y-5 text-[15px] leading-[1.75] tracking-tight text-neutral-700">
              <p>
                Sofnology connects product engineering, automation, cloud systems, and
                digital marketing into one delivery model. That means the software you
                build, the workflows you run, and the channels that bring in customers
                can support the same business direction.
              </p>
              <p>
                The result is not a stack of disconnected services. It is a practical
                growth system: clearer operations, stronger customer reach, and
                technology that can keep pace as the business changes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[16/11] overflow-hidden border-b border-neutral-200 sm:aspect-auto sm:min-h-[420px] md:min-h-[520px] lg:min-h-[560px] lg:border-r lg:border-b-0">
          <Image
            src="/uplift.jpg"
            alt="Sofnology team planning digital growth systems"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-navy/20" />
        </div>

        <div className="grid grid-cols-1 bg-[#101722] text-white md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                ...pageTransition,
                delay: index * 0.06,
              }}
              className={`group flex min-h-0 flex-col border-white/20 p-6 transition-colors duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/[0.045] sm:min-h-[240px] sm:p-8 md:min-h-[280px] md:p-10 ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""}`}
            >
              <h3 className="text-2xl leading-tight font-semibold tracking-[-0.045em]">
                {area.title}
              </h3>
              <p className="mt-5 text-[14px] leading-[1.68] tracking-tight text-white/75">
                {area.description}
              </p>
              <Link
                href="/#contact"
                className="tap-press mt-auto pt-10 text-[14px] font-semibold text-white underline decoration-white/70 underline-offset-4 transition-colors duration-chrome ease-motion"
              >
                {area.link}
              </Link>
            </motion.article>
          ))}

          <Link
            href="/#contact"
            className="tap-press group relative col-span-1 flex min-h-28 items-center justify-between overflow-hidden border-t border-white/20 bg-gradient-to-r from-navy-mid via-[#16457f] to-navy-mid px-8 py-8 text-2xl font-semibold tracking-[-0.045em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-chrome ease-motion md:col-span-2 md:px-10"
          >
            <span
              aria-hidden="true"
              className="cta-sheen pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 skew-x-[-18deg] bg-white/25 opacity-0 transition-all duration-sheen ease-motion group-hover:left-[115%] group-hover:opacity-100"
            />
            <span className="relative z-10">Start building your growth system</span>
            <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-white/15">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
