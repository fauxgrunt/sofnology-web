"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { chromeTransition, reducedMotionTransition } from "@/lib/motion";

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
  label = "Start a Project",
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
      const viewport = window.visualViewport;
      const keyboardOpen = Boolean(
        viewport && viewport.height < window.innerHeight - 140,
      );
      setVisible(pastHero && beforeContact && !keyboardOpen);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("mobile-nav-toggle", update);
    window.visualViewport?.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("mobile-nav-toggle", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, [pastHeroPx]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { y: 12, opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: 8, opacity: 0 }}
          transition={reduceMotion ? reducedMotionTransition : chromeTransition}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-0 pb-[env(safe-area-inset-bottom)] md:px-6 md:pb-[max(1.1rem,env(safe-area-inset-bottom))] lg:hidden"
        >
          <Link
            href={href}
            className="tap-press pointer-events-auto flex h-14 w-full items-center justify-between gap-4 px-5 text-[16px] font-semibold tracking-[-0.03em] md:mx-auto md:h-16 md:max-w-xl md:px-6 md:text-base md:ring-1 md:ring-black/5"
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
