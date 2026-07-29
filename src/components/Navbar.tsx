"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLogo from "@/components/nav/NavbarLogo";
import NavMegaPanel from "@/components/nav/NavMegaPanel";
import PrimaryCTA from "@/components/nav/PrimaryCTA";
import { Chevron, GlobeIcon } from "@/components/nav/NavIcons";
import { navItems, megaMenus, type MenuId } from "@/components/nav/nav-data";

/* Match Vention: Aeonik Medium 500, letter-spacing 0, ~15px at laptop widths */
const navLinkClass =
  "font-nav text-[15px] font-medium tracking-normal text-[#111111] whitespace-nowrap";

const deliberate = [0.16, 1, 0.3, 1] as const;
const megaTransition = { duration: 0.48, ease: deliberate };
const underlineTransition =
  "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!mobileOpen) setMobileSection(null);
  }, [mobileOpen]);

  const toggleMenu = (menu?: MenuId) => {
    if (!menu) {
      setOpenMenu(null);
      return;
    }
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="font-nav sticky top-0 z-50 border-b border-neutral-200 bg-[#f7f7f8]">
      <div className="relative" ref={navRef}>
        {/*
          Vention rhythm: wide brand cell (logo + globe) → compact link group
          with even padding → CTA. Links are NOT flex-stretched across the void.
        */}
        <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-stretch border-x border-neutral-200 md:h-[4.75rem]">
          {/* Brand zone — large left chunk so links stay comfortably spaced */}
          <div className="flex w-[min(42vw,380px)] shrink-0 items-stretch border-r border-neutral-200 max-lg:w-auto sm:w-[300px] md:w-[340px] xl:w-[380px]">
            <div className="flex min-w-0 flex-1 items-center">
              <NavbarLogo />
            </div>
            <div
              className="hidden w-14 shrink-0 items-center justify-center border-l border-neutral-200 text-neutral-500 lg:flex"
              aria-hidden="true"
              title="Region"
            >
              <GlobeIcon />
            </div>
          </div>

          {/* Link group — natural packing, adequate gaps, not stretched */}
          <nav
            className="hidden min-w-0 flex-1 items-stretch lg:flex"
            aria-label="Main navigation"
          >
            <ul className="flex h-full items-stretch pl-2 xl:pl-4">
              {navItems.map((item) => {
                const isOpen = openMenu === item.menu;
                const hasMenu = Boolean(item.menu);

                return (
                  <li key={item.id} className="relative flex h-full shrink-0 items-stretch">
                    {hasMenu ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleMenu(item.menu)}
                        className={`relative flex h-full items-center px-4 transition-colors duration-500 xl:px-5 ${
                          isOpen ? "bg-[#f3f3f4]" : "bg-transparent hover:bg-[#f7f7f8]"
                        }`}
                      >
                        <span
                          className={`relative z-10 inline-flex items-center gap-1.5 leading-none ${navLinkClass}`}
                        >
                          {item.label}
                          <Chevron open={isOpen} />
                        </span>
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-3 bottom-0 z-10 h-[3px] origin-center bg-[#061a3a] xl:inset-x-4 ${underlineTransition} ${
                            isOpen ? "scale-x-100" : "scale-x-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="group relative flex h-full items-center px-4 transition-colors duration-500 hover:bg-[#f7f7f8] xl:px-5"
                      >
                        <span className={`relative z-10 leading-none ${navLinkClass}`}>
                          {item.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-3 bottom-0 z-10 h-[3px] origin-center scale-x-0 bg-[#061a3a] xl:inset-x-4 ${underlineTransition} group-hover:scale-x-100`}
                        />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action zone */}
          <div className="ml-auto flex shrink-0 items-stretch border-l border-neutral-200">
            <div className="hidden lg:flex">
              <PrimaryCTA />
            </div>
            <button
              type="button"
              className="flex h-full w-14 items-center justify-center text-neutral-800 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="text-xl leading-none" aria-hidden="true">
                {mobileOpen ? "×" : "≡"}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {openMenu && megaMenus[openMenu] && (
            <motion.div
              key={openMenu}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={megaTransition}
              className="absolute inset-x-0 top-full z-50 hidden border-b border-neutral-200 bg-[#f3f3f4] lg:block"
            >
              <div className="mx-auto max-w-[1440px] border-x border-neutral-200 bg-[#f3f3f4]">
                <NavMegaPanel
                  config={megaMenus[openMenu]}
                  onNavigate={() => setOpenMenu(null)}
                />
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
            transition={{ duration: 0.4, ease: deliberate }}
            className="overflow-hidden border-b border-neutral-200 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
              {navItems.map((item) => {
                const hasMenu = Boolean(item.menu && megaMenus[item.menu]);
                const isExpanded = mobileSection === item.menu;
                const menu = item.menu ? megaMenus[item.menu] : null;

                return (
                  <div key={item.id} className="border-b border-neutral-100">
                    {hasMenu && menu ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between px-5 py-4 text-left font-nav text-[15px] font-medium tracking-normal text-[#111111]"
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setMobileSection((current) =>
                              current === item.menu ? null : (item.menu ?? null)
                            )
                          }
                        >
                          {item.label}
                          <Chevron open={isExpanded} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.38, ease: deliberate }}
                              className="overflow-hidden bg-[#f3f3f4]"
                            >
                              <div className="space-y-1 px-5 py-4">
                                {menu.columns?.map((col) => (
                                  <div key={col.heading} className="pb-4">
                                    <p className="mb-2 text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
                                      {col.heading}
                                    </p>
                                    <ul className="space-y-2">
                                      {col.links.map((link) => (
                                        <li key={link.label}>
                                          <a
                                            href={link.href}
                                            className="block py-1 text-[15px] font-medium tracking-normal text-[#111111]"
                                            onClick={() => setMobileOpen(false)}
                                          >
                                            {link.label}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                {menu.links?.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    className="block py-2 text-[15px] font-medium tracking-normal text-[#111111]"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {link.label}
                                  </a>
                                ))}
                                {menu.promo && (
                                  <a
                                    href={
                                      menu.promo.href.startsWith("#")
                                        ? `/${menu.promo.href}`
                                        : menu.promo.href
                                    }
                                    className="mt-3 flex min-h-12 items-center justify-between bg-[#061a3a] px-4 text-[13px] font-medium text-white"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {menu.promo.cta}
                                    <span aria-hidden="true">↗</span>
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-5 py-4 font-nav text-[15px] font-medium tracking-normal text-[#111111]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                );
              })}
              <div className="p-4">
                <PrimaryCTA fullWidth onClick={() => setMobileOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
