"use client";

import type { CSSProperties, KeyboardEvent, ReactNode } from "react";

function hoverAllowsSelect() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

type SelectableCardProps = {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  selectOnHover?: boolean;
  /** Accessible name when the card also contains a link (overlay control). */
  label?: string;
};

/**
 * One-of-many marketing cards. Uses a real button so Enter/Space work and the
 * control is announced as pressed. Unique inner layout stays in `children`.
 *
 * Pass `label` when children include a link — the control becomes an overlay
 * so the link stays a separate tab stop.
 */
export function SelectableCard({
  selected,
  onSelect,
  className = "",
  style,
  children,
  selectOnHover = true,
  label,
}: SelectableCardProps) {
  const onMouseEnter = () => {
    if (selectOnHover && hoverAllowsSelect()) onSelect();
  };

  if (label) {
    return (
      <div className={`relative ${className}`} style={style} onMouseEnter={onMouseEnter}>
        <button
          type="button"
          aria-pressed={selected}
          aria-label={label}
          onClick={onSelect}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 pointer-events-none [&_a]:pointer-events-auto">
          {children}
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      className={`w-full text-left ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

/**
 * Arrow/Home/End movement for a `role="tablist"`. Scoped to the list the
 * focused tab lives in, so duplicate mobile/desktop lists stay independent.
 */
export function handleRovingTabKey(
  event: KeyboardEvent<HTMLElement>,
  index: number,
  count: number,
  setActive: (index: number) => void,
) {
  let next: number | null = null;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    next = (index + 1) % count;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    next = (index - 1 + count) % count;
  } else if (event.key === "Home") {
    next = 0;
  } else if (event.key === "End") {
    next = count - 1;
  }
  if (next === null) return;

  event.preventDefault();
  setActive(next);
  const list = event.currentTarget.closest("[role='tablist']");
  const tabs = list?.querySelectorAll<HTMLElement>('[role="tab"]');
  tabs?.[next]?.focus();
}

export function tabControlProps(
  index: number,
  active: number,
  count: number,
  setActive: (index: number) => void,
  panelId: string,
) {
  return {
    role: "tab" as const,
    id: `${panelId}-tab-${index}`,
    "aria-selected": index === active,
    "aria-controls": panelId,
    tabIndex: index === active ? 0 : -1,
    onKeyDown: (event: KeyboardEvent<HTMLElement>) =>
      handleRovingTabKey(event, index, count, setActive),
  };
}
