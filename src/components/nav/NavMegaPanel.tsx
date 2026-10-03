"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MegaMenuConfig } from "./nav-data";
import { chromeTransition } from "@/lib/motion";

const linkClass =
  "font-nav group/link relative inline-block text-fluid-mega font-medium tracking-normal text-ink transition-opacity duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-80";

const headingClass =
  "font-nav mb-7 text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase";

const columnVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...chromeTransition,
      delay: 0.04 + index * 0.03,
    },
  }),
};

function ColumnLinks({
  heading,
  links,
  className = "",
  index = 0,
  onNavigate,
}: {
  heading: string;
  links: { label: string; href: string }[];
  className?: string;
  index?: number;
  onNavigate?: () => void;
}) {
  return (
    <motion.div
      className={className}
      custom={index}
      variants={columnVariants}
      initial="hidden"
      animate="visible"
    >
      <p className={headingClass}>{heading}</p>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={linkClass} onClick={onNavigate}>
              {link.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PromoCard({
  promo,
  onNavigate,
}: {
  promo: NonNullable<MegaMenuConfig["promo"]>;
  onNavigate?: () => void;
}) {
  const href = promo.href.startsWith("#") ? `/${promo.href}` : promo.href;

  return (
    <motion.div
      custom={2}
      variants={columnVariants}
      initial="hidden"
      animate="visible"
      className="relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden bg-navy p-7 text-white md:min-h-[300px] md:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(47,107,255,0.35),transparent_55%)]"
      />
      <div className="relative">
        <h3 className="font-nav max-w-[14rem] text-2xl leading-[1.15] font-medium tracking-normal md:text-[1.65rem]">
          {promo.title}
        </h3>
        <p className="mt-3 max-w-[16rem] text-[14px] leading-[1.55] font-normal text-white/70">
          {promo.subtitle}
        </p>
      </div>
      <Link
        href={href}
        onClick={onNavigate}
        className="group relative mt-8 inline-flex min-h-12 w-full items-center justify-between bg-[#C7FF3D] px-4 font-nav text-[13px] font-medium tracking-normal text-[#101413] transition-opacity duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
      >
        <span>{promo.cta}</span>
        <span aria-hidden="true">↗</span>
      </Link>
    </motion.div>
  );
}

function BottomBanner({
  banner,
  onNavigate,
}: {
  banner: NonNullable<MegaMenuConfig["banner"]>;
  onNavigate?: () => void;
}) {
  const href = banner.href.startsWith("#") ? `/${banner.href}` : banner.href;

  return (
    <motion.div
      custom={3}
      variants={columnVariants}
      initial="hidden"
      animate="visible"
      className="col-span-12 mt-2"
    >
      <Link
        href={href}
        onClick={onNavigate}
        className="group flex min-h-[72px] items-center justify-between gap-6 border-t border-neutral-300/70 bg-navy px-6 py-5 font-nav text-white transition-opacity duration-chrome ease-motion md:px-8 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
      >
        <p className="max-w-3xl text-[14px] leading-[1.5] font-medium tracking-normal text-white/90 md:text-[15px]">
          {banner.text}
        </p>
        <span className="inline-flex shrink-0 items-center gap-2 text-[13px] font-medium tracking-normal text-[#C7FF3D]">
          {banner.cta}
          <span
            className="transition-opacity duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-80"
            aria-hidden="true"
          >
            ↗
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

interface NavMegaPanelProps {
  config: MegaMenuConfig;
  onNavigate?: () => void;
}

export default function NavMegaPanel({ config, onNavigate }: NavMegaPanelProps) {
  const gridWrap = (children: ReactNode) => (
    <div className="grid grid-cols-12 gap-x-14 gap-y-12 px-8 py-12 md:px-12 lg:px-14 lg:py-14">
      {children}
    </div>
  );

  if (config.layout === "columns-banner" && config.columns) {
    return (
      <>
        {gridWrap(
          <>
            {config.columns.map((col, index) => (
              <ColumnLinks
                key={col.heading}
                heading={col.heading}
                links={col.links}
                index={index}
                onNavigate={onNavigate}
                className="col-span-12 sm:col-span-6 md:col-span-4"
              />
            ))}
          </>
        )}
        {config.banner && (
          <div className="px-0">
            <BottomBanner banner={config.banner} onNavigate={onNavigate} />
          </div>
        )}
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
          className="col-span-12 grid grid-cols-1 gap-x-14 gap-y-4 sm:grid-cols-2 lg:col-span-7"
        >
          <ul className="space-y-5">
            {col1.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass} onClick={onNavigate}>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-5">
            {col2.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass} onClick={onNavigate}>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="col-span-12 lg:col-span-5">
          <PromoCard promo={config.promo} onNavigate={onNavigate} />
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
            onNavigate={onNavigate}
            className="col-span-12 sm:col-span-6 md:col-span-4"
          />
        ))}
      </>
    );
  }

  return null;
}
