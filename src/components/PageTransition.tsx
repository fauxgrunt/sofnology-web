"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

/**
 * First paint must match SSR (no Framer `initial` styles). After that, client
 * navigations remount this template and can enter softly.
 */
let allowEnterAnimation = false;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [enter] = useState(allowEnterAnimation);

  useEffect(() => {
    allowEnterAnimation = true;
  }, []);

  const shouldAnimate = enter && reduceMotion === false;

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0.01 } : pageTransition}
    >
      {children}
    </motion.div>
  );
}
