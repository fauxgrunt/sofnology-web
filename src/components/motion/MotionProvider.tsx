"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { motionDuration, motionEase } from "@/lib/motion";

/**
 * `reducedMotion="user"` is applied after mount. Using it during SSR/hydrate
 * writes different Framer styles on the server vs the browser.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState<"never" | "user">("never");

  useEffect(() => {
    setReducedMotion("user");
  }, []);

  return (
    <MotionConfig
      reducedMotion={reducedMotion}
      transition={{ ease: motionEase, duration: motionDuration.panel }}
    >
      {children}
    </MotionConfig>
  );
}
