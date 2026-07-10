"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLogo from "@/components/nav/NavbarLogo";
import NavMegaPanel from "@/components/nav/NavMegaPanel";
import PrimaryCTA from "@/components/nav/PrimaryCTA";
import { Chevron, SearchIcon, GlobeIcon } from "@/components/nav/NavIcons";
import { navItems, megaMenus, type MenuId } from "@/components/nav/nav-data";

const navLinkClass =
  "text-[14px] font-semibold tracking-[-0.01em] text-slate-900 transition-colors duration-200 whitespace-nowrap";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Click-to-open dropdowns: close when clicking outside the nav region.
  useEffect(() => {
    if (!openMenu) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  const toggleMenu = (menu?: MenuId) => {
    if (!menu) {
      setOpenMenu(null);
      return;
    }
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-neutral-200 bg-white md:h-[4.5rem]">
      <div className="relative h-full" ref={navRef}>
        <div className="flex h-full w-full items-stretch">
          <div className="flex w-[260px] shrink-0 items-center justify-start border-r border-neutral-200 max-xl:w-[220px]">
            <NavbarLogo />
          </div>

          <button
            type="button"
            aria-label="Region selector"
            className="hidden w-14 shrink-0 items-center justify-center border-r border-neutral-200 text-slate-500 transition-colors hover:bg-neutral-50 hover:text-slate-900 lg:flex"
          >
            <GlobeIcon />
          </button>

          <nav
            className="hidden min-w-0 flex-1 items-stretch lg:flex"
            aria-label="Main navigation"
          >
            <ul className="flex h-full items-stretch">
              {navItems.map((item) => {
                const isOpen = openMenu === item.menu;
                const hasMenu = Boolean(item.menu);

                return (
                  <li key={item.id} className="flex h-full shrink-0 items-stretch">
                    {hasMenu ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleMenu(item.menu)}
                        className="group relative flex h-full items-center border-r border-transparent px-5 transition-colors duration-200 hover:border-neutral-200 xl:px-6"
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-y-0 left-0 right-0 transition-colors duration-200 ${
                            isOpen ? "bg-neutral-50" : "bg-transparent group-hover:bg-neutral-50"
                          }`}
                        />
                        <span
                          className={`pointer-events-none relative z-10 inline-flex items-center leading-none ${navLinkClass} ${
                            isOpen ? "text-slate-950" : "text-slate-800 group-hover:text-slate-950"
                          }`}
                        >
                          <span className="pointer-events-none">{item.label}</span>
                          <Chevron open={isOpen} />
                        </span>

                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute bottom-0 left-5 right-5 z-10 h-[2px] origin-center bg-[#061a3a] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] xl:left-6 xl:right-6 ${
                            isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="group relative flex h-full items-center border-r border-transparent px-5 transition-colors duration-200 hover:border-neutral-200 xl:px-6"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-transparent transition-colors duration-200 group-hover:bg-neutral-50"
                        />
                        <span
                          className={`pointer-events-none relative z-10 inline-flex items-center leading-none ${navLinkClass} text-slate-800 group-hover:text-slate-950`}
                        >
                          <span className="pointer-events-none">{item.label}</span>
                        </span>

                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-0 left-5 right-5 z-10 h-[2px] origin-center scale-x-0 bg-[#061a3a] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:opacity-100 xl:left-6 xl:right-6"
                        />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-stretch border-l border-neutral-200">
            <div className="hidden lg:flex">
              <PrimaryCTA />
            </div>
            <button
              type="button"
              aria-label="Search"
              className="hidden w-16 items-center justify-center border-l border-neutral-200 text-slate-700 transition-colors hover:bg-neutral-50 hover:text-slate-950 lg:flex"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="flex h-full w-16 items-center justify-center text-slate-700 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="pointer-events-none text-xl leading-none">
                {mobileOpen ? "×" : "≡"}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {openMenu && megaMenus[openMenu] && (
            <motion.div
              key={openMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 z-50 hidden overflow-hidden border-b border-slate-200/70 bg-[#f3f3f4] shadow-[0_28px_56px_-24px_rgba(15,23,42,0.16)] lg:block"
            >
              <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div className="border-x border-slate-200/70 bg-[#f3f3f4]">
                  <NavMegaPanel config={megaMenus[openMenu]} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-slate-200/70 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block border-b border-slate-100 py-3 text-[15px] font-semibold tracking-tight text-slate-800"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="pointer-events-none">{item.label}</span>
                </a>
              ))}
              <div className="pt-4">
                <PrimaryCTA />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
