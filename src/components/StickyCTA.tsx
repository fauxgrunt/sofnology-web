"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";

type StickyCTAProps = {
  href?: string;
  label?: string;
  backgroundColor: string;
  textColor?: string;
  pastHeroPx?: number;
};

/**
 * Thumb-zone conversion bar — earlier on phones, safe-area aware, hides near contact
 * and while the mobile nav drawer is open.
 */
export default function StickyCTA({
  href = "/#contact-form",
  label = "Book a discovery call",
  backgroundColor,
  textColor = "#101413",
  pastHeroPx = 420,
}: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const navOpen = document.documentElement.dataset.mobileNav === "open";
      if (navOpen) {
        setVisible(false);
        return;
      }

      const contact = document.getElementById("contact");
      const contactTop =
        contact?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const isCoarse =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(hover: none), (pointer: coarse)").matches;
      const threshold = isCoarse ? Math.min(pastHeroPx, 180) : pastHeroPx;
      const pastHero = window.scrollY > threshold;
      const beforeContact = contactTop > window.innerHeight * 0.72;
      setVisible(pastHero && beforeContact);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("mobile-nav-toggle", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("mobile-nav-toggle", update);
    };
  }, [pastHeroPx]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { y: 72, opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: 64, opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] md:px-6 md:pb-[max(1.1rem,env(safe-area-inset-bottom))]"
        >
          <Link
            href={href}
            className="tap-press pointer-events-auto mx-auto flex h-[3.25rem] max-w-lg items-center justify-between gap-4 px-5 text-[15px] font-semibold tracking-[-0.03em] ring-1 ring-black/5 md:h-16 md:max-w-xl md:px-6 md:text-base"
            style={{ backgroundColor, color: textColor }}
          >
            <span className="truncate">{label}</span>
            <ArrowUpRightIcon />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
