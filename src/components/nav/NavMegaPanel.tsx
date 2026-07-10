"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { MegaMenuConfig } from "./nav-data";

const linkClass =
  "inline-block border-b-2 border-transparent pb-0.5 text-[16px] font-semibold tracking-tight text-slate-900 transition-[border-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-slate-900";

const columnVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.05 + index * 0.06,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function ColumnLinks({
  heading,
  links,
  className = "",
  index = 0,
}: {
  heading: string;
  links: { label: string; href: string }[];
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      className={className}
      custom={index}
      variants={columnVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="mb-5 text-xs font-medium tracking-wide text-slate-400">{heading}</p>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PromoCard({ promo }: { promo: NonNullable<MegaMenuConfig["promo"]> }) {
  return (
    <motion.div
      custom={2}
      variants={columnVariants}
      initial="hidden"
      animate="visible"
      className="relative flex min-h-[240px] flex-col justify-end overflow-hidden bg-slate-900 p-6 text-white md:min-h-[260px] md:p-8"
    >
      <div className="relative">
        <h3 className="text-xl font-semibold leading-tight md:text-2xl">{promo.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{promo.subtitle}</p>
        <a
          href={promo.href}
          className="group relative mt-6 inline-block text-sm font-semibold text-white"
        >
          <span className="pointer-events-none">{promo.cta} ↗</span>
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
        </a>
      </div>
    </motion.div>
  );
}

function BottomBanner({ banner }: { banner: NonNullable<MegaMenuConfig["banner"]> }) {
  return (
    <motion.div
      custom={3}
      variants={columnVariants}
      initial="hidden"
      animate="visible"
      className="col-span-12 mt-4 flex flex-col items-start justify-between gap-4 border-t border-slate-300/50 pt-6 sm:flex-row sm:items-center"
    >
      <p className="max-w-2xl text-sm font-medium text-slate-700">{banner.text}</p>
      <a href={banner.href} className={`${linkClass} text-sm`}>
        {banner.cta} ↗
      </a>
    </motion.div>
  );
}

interface NavMegaPanelProps {
  config: MegaMenuConfig;
}

export default function NavMegaPanel({ config }: NavMegaPanelProps) {
  const gridWrap = (children: ReactNode) => (
    <div className="grid grid-cols-12 gap-x-10 gap-y-8 px-8 py-10">{children}</div>
  );

  if (config.layout === "columns-banner" && config.columns) {
    return gridWrap(
      <>
        {config.columns.map((col, index) => (
          <ColumnLinks
            key={col.heading}
            heading={col.heading}
            links={col.links}
            index={index}
            className="col-span-12 md:col-span-4"
          />
        ))}
        {config.banner && <BottomBanner banner={config.banner} />}
      </>
    );
  }

  if (config.layout === "list-promo" && config.links && config.promo) {
    const midpoint = Math.ceil(config.links.length / 2);
    const col1 = config.links.slice(0, midpoint);
    const col2 = config.links.slice(midpoint);

    return gridWrap(
      <>
        <motion.div
          custom={0}
          variants={columnVariants}
          initial="hidden"
          animate="visible"
          className="col-span-12 grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2 lg:col-span-8"
        >
          <ul className="space-y-3.5">
            {col1.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-3.5">
            {col2.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="col-span-12 lg:col-span-4">
          <PromoCard promo={config.promo} />
        </div>
      </>
    );
  }

  if (config.layout === "columns" && config.columns) {
    return gridWrap(
      <>
        {config.columns.map((col, index) => (
          <ColumnLinks
            key={col.heading}
            heading={col.heading}
            links={col.links}
            index={index}
            className="col-span-12 md:col-span-4"
          />
        ))}
      </>
    );
  }

  return null;
}
