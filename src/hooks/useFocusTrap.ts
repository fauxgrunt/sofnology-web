"use client";

import { useEffect, useRef } from "react";

/**
 * Traps Tab focus inside `container` while `active`. Restores focus on cleanup.
 */
export function useFocusTrap(active: boolean) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    const root = containerRef.current;
    if (!root) return;

    const focusable = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

    const nodes = focusable();
    nodes[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const list = focusable();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus?.();
    };
  }, [active]);

  return containerRef;
}
