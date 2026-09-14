"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

/**
 * Soft enter for route content. Template remounts on navigation, so this
 * covers the “land” after the progress bar — not a competing full-page show.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : pageTransition
      }
    >
      {children}
    </motion.div>
  );
}
