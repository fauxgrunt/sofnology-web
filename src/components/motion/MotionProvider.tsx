"use client";

import { MotionConfig } from "framer-motion";
import { motionDuration, motionEase } from "@/lib/motion";

/** Site-wide curve + respect `prefers-reduced-motion` for every Framer tree. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ ease: motionEase, duration: motionDuration.panel }}
    >
      {children}
    </MotionConfig>
  );
}
