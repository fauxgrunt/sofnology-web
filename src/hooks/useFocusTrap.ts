"use client";

import { useEffect, useRef } from "react";

/**
 * Traps Tab focus inside `container` while `active`. Restores focus on cleanup.
 * Defers initial focus one frame so portaled drawers can mount their ref.
 */
export function useFocusTrap(active: boolean) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    let frame = 0;
    let cancelled = false;

    const focusable = (root: HTMLElement) =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const root = containerRef.current;
      if (!root) return;
      const list = focusable(root);
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

    frame = window.requestAnimationFrame(() => {
      if (cancelled) return;
      const root = containerRef.current;
      if (!root) return;
      focusable(root)[0]?.focus({ preventScroll: true });
      document.addEventListener("keydown", onKeyDown);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus?.({ preventScroll: true });
    };
  }, [active]);

  return containerRef;
}
