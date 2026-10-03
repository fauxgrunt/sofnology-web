"use client";

import { useEffect, useState } from "react";

/**
 * First paint is a plain wrapper so SSR HTML matches the client.
 * After the first load, client navigations remount this template and fade in via CSS.
 */
let allowEnterAnimation = false;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [enter] = useState(allowEnterAnimation);

  useEffect(() => {
    allowEnterAnimation = true;
  }, []);

  return <div className={enter ? "page-enter" : undefined}>{children}</div>;
}
