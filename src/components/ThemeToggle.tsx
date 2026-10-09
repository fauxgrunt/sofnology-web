"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sofnology-theme";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

/** Header control. A floating button covered the mobile call-to-action. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const next = stored === "dark" ? "dark" : "light";
    applyTheme(next);
    setTheme(next);
  }, []);

  const dark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle tap-press flex h-full min-h-12 min-w-12 items-center justify-center border-r border-neutral-200 px-3 text-ink transition-colors active:bg-[#ececed] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#f0f0f1]"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onClick={() => {
        const next = dark ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
        setTheme(next);
      }}
    >
      {dark ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M18.9 5.1l-1.6 1.6M6.7 17.3l-1.6 1.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M16.5 14.2A6.6 6.6 0 0 1 9.8 7.5 6.7 6.7 0 1 0 16.5 14.2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
