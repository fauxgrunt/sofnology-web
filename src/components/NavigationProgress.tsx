"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motionEase, motionDuration } from "@/lib/motion";

/**
 * Thin top progress bar — makes the “micro wait” between routes feel intentional.
 * Starts on internal link click; completes when the pathname changes.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(0);
  const prevPath = useRef(pathname);
  const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;

      if (anchor.hasAttribute("download")) return;
      if (anchor.getAttribute("target") === "_blank") return;
      if (event instanceof MouseEvent) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
          return;
        }
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      if (finishTimer.current) {
        clearTimeout(finishTimer.current);
        finishTimer.current = null;
      }
      setActive(true);
      setWidth(14);
    };

    document.addEventListener("click", onPointerDown, true);
    return () => document.removeEventListener("click", onPointerDown, true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setWidth((current) => {
        if (current >= 90) return current;
        const step = current < 40 ? 10 : current < 70 ? 5 : 2;
        return Math.min(90, current + step);
      });
    }, 180);
    return () => window.clearInterval(id);
  }, [active]);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    setActive(true);
    setWidth(100);
    if (finishTimer.current) clearTimeout(finishTimer.current);
    finishTimer.current = setTimeout(() => {
      setActive(false);
      setWidth(0);
      finishTimer.current = null;
    }, Math.round(motionDuration.progress * 1000) + 80);

    return () => {
      if (finishTimer.current) clearTimeout(finishTimer.current);
    };
  }, [pathname]);

  if (!active && width === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-[#061a3a]"
        style={{
          width: `${width}%`,
          opacity: active || width > 0 ? 1 : 0,
          transition: `width ${motionDuration.chrome}s cubic-bezier(${motionEase.join(",")}), opacity ${motionDuration.progress}s ease`,
        }}
      />
    </div>
  );
}
