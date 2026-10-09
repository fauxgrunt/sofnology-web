"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLogo from "@/components/nav/NavbarLogo";
import NavMegaPanel from "@/components/nav/NavMegaPanel";
import PrimaryCTA from "@/components/nav/PrimaryCTA";
import ThemeToggle from "@/components/ThemeToggle";
import { Chevron, MenuToggleIcon } from "@/components/nav/NavIcons";
import {
  navItems,
  megaMenus,
  type MegaMenuConfig,
  type MenuId,
  type NavLink,
} from "@/components/nav/nav-data";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import {
  accordionMotion,
  chromeTransition,
} from "@/lib/motion";

const navLinkClass =
  "font-nav text-fluid-nav font-medium tracking-normal text-ink whitespace-nowrap";

const underlineTransition =
  "transition-transform duration-chrome ease-motion";

function uniqueMenuLinks(menu: MegaMenuConfig): NavLink[] {
  const seen = new Set<string>();
  const links: NavLink[] = [];
  const add = (link: NavLink) => {
    if (seen.has(link.href)) return;
    seen.add(link.href);
    links.push(link);
  };
  menu.columns?.forEach((column) => column.links.forEach(add));
  menu.links?.forEach(add);
  return links;
}

/** Delay before close so cursor can travel into the panel */
const CLOSE_GRACE_MS = 160;
const OPEN_INTENT_MS = 60;

function setMobileNavFlag(open: boolean) {
  if (typeof document === "undefined") return;
  if (open) document.documentElement.dataset.mobileNav = "open";
  else delete document.documentElement.dataset.mobileNav;
  window.dispatchEvent(new Event("mobile-nav-toggle"));
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drawerRef = useFocusTrap(mobileOpen);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const clearOpenTimer = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
  };

  const openMega = (menu: MenuId) => {
    clearCloseTimer();
    clearOpenTimer();
    openTimer.current = setTimeout(() => setOpenMenu(menu), OPEN_INTENT_MS);
  };

  const scheduleClose = () => {
    clearOpenTimer();
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_GRACE_MS);
  };

  const keepOpen = () => {
    clearCloseTimer();
    clearOpenTimer();
  };

  const setDrawerOpen = (open: boolean) => {
    setMobileOpen(open);
    setMobileNavFlag(open);
  };

  useEffect(() => {
    return () => {
      clearCloseTimer();
      clearOpenTimer();
      setMobileNavFlag(false);
    };
  }, []);

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
    if (!mobileOpen) {
      setMobileSection(null);
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const mobileDrawer =
    portalReady &&
    createPortal(
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={chromeTransition}
            className="fixed inset-x-0 top-[calc(var(--nav-h)+env(safe-area-inset-top,0px))] bottom-0 z-[60] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            id="mobile-nav-drawer"
            ref={drawerRef}
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={chromeTransition}
              className="flex h-full flex-col overflow-hidden bg-[#f7f7f8]"
            >
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <nav aria-label="Mobile" className="mx-auto max-w-[1440px]">
                  {navItems.map((item, index) => {
                    const hasMenu = Boolean(item.menu && megaMenus[item.menu]);
                    const isExpanded = mobileSection === item.menu;
                    const menu = item.menu ? megaMenus[item.menu] : null;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          ...chromeTransition,
                          delay: 0.02 + index * 0.02,
                        }}
                        className="border-b border-neutral-200/80"
                      >
                        {hasMenu && menu ? (
                          <>
                            <button
                              type="button"
                              className={`tap-press flex min-h-14 w-full items-center justify-between px-5 py-3.5 text-left font-nav text-[17px] font-medium tracking-normal text-ink transition-colors active:bg-[#ececed] ${
                                isExpanded ? "bg-[#f3f3f4]" : "bg-transparent"
                              }`}
                              aria-expanded={isExpanded}
                              onClick={() =>
                                setMobileSection((current) =>
                                  current === item.menu ? null : (item.menu ?? null),
                                )
                              }
                            >
                              <span className="relative">
                                {item.label}
                                <span
                                  aria-hidden="true"
                                  className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-navy transition-transform duration-chrome ease-motion ${
                                    isExpanded ? "scale-x-100" : "scale-x-0"
                                  }`}
                                />
                              </span>
                              <Chevron open={isExpanded} />
                            </button>

                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  {...accordionMotion}
                                  className="overflow-hidden bg-[#f3f3f4]"
                                >
                                  <ul className="px-5 pt-1 pb-4">
                                    {uniqueMenuLinks(menu).map((link) => (
                                      <li key={link.href}>
                                        <Link
                                          href={link.href}
                                          className="tap-press block min-h-12 py-3 text-[16px] font-medium tracking-normal text-ink transition-opacity duration-press ease-motion active:opacity-80"
                                          onClick={() => setDrawerOpen(false)}
                                        >
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="tap-press block min-h-14 px-5 py-3.5 font-nav text-[17px] font-medium tracking-normal text-ink active:bg-[#ececed]"
                            onClick={() => setDrawerOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="shrink-0 border-t border-neutral-200 bg-[#f7f7f8] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <PrimaryCTA fullWidth onClick={() => setDrawerOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <header className="font-nav sticky top-0 z-50 border-b border-neutral-200 bg-[#f7f7f8]/92 pt-[env(safe-area-inset-top)] backdrop-blur-md supports-[backdrop-filter]:bg-[#f7f7f8]/80">
      <div className="relative" ref={navRef}>
        <div className="mx-auto flex h-fluid-nav max-w-[1440px] items-stretch border-x border-neutral-200">
          {/* Brand zone — keep compact on phones so the menu button has room */}
          <div className="flex min-w-0 flex-1 items-stretch border-r border-neutral-200 sm:max-w-[300px] md:max-w-[340px] lg:w-[200px] lg:max-w-none lg:flex-none xl:w-[300px] 2xl:w-[380px]">
            <div className="flex min-w-0 flex-1 items-center">
              <NavbarLogo />
            </div>
          </div>

          {/* Desktop links — hover opens mega */}
          <nav
            className="hidden min-w-0 flex-1 items-stretch lg:flex"
            aria-label="Main navigation"
            onMouseLeave={scheduleClose}
          >
            <ul className="flex h-full items-stretch pl-2 xl:pl-4">
              {navItems.map((item) => {
                const isOpen = openMenu === item.menu;
                const hasMenu = Boolean(item.menu);

                return (
                  <li
                    key={item.id}
                    className="relative flex h-full shrink-0 items-stretch"
                    onMouseEnter={() => {
                      if (item.menu) openMega(item.menu);
                      else {
                        clearOpenTimer();
                        scheduleClose();
                      }
                    }}
                    onFocus={() => {
                      if (!item.menu) scheduleClose();
                    }}
                  >
                    {hasMenu ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-controls={isOpen ? `mega-panel-${item.menu}` : undefined}
                        onClick={() =>
                          setOpenMenu((current) =>
                            current === item.menu ? null : (item.menu ?? null),
                          )
                        }
                        onFocus={() => item.menu && openMega(item.menu)}
                        className={`relative flex h-full items-center px-3 transition-colors duration-chrome ease-motion xl:px-5 ${
                          isOpen ? "bg-[#f3f3f4]" : "bg-transparent hover:bg-[#f0f0f1]"
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
                          className={`absolute inset-x-3 bottom-0 z-10 h-[3px] origin-center bg-navy xl:inset-x-4 ${underlineTransition} ${
                            isOpen ? "scale-x-100" : "scale-x-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="group relative flex h-full items-center px-3 transition-colors duration-chrome ease-motion [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#f0f0f1] xl:px-5"
                      >
                        <span className={`relative z-10 leading-none ${navLinkClass}`}>
                          {item.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-3 bottom-0 z-10 h-[3px] origin-center scale-x-0 bg-navy xl:inset-x-4 ${underlineTransition} [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100`}
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action zone */}
          <div className="relative z-10 ml-auto flex shrink-0 items-stretch border-l border-neutral-200 bg-[#f7f7f8]">
            <ThemeToggle />
            <div className="hidden lg:flex">
              <PrimaryCTA />
            </div>
            <button
              type="button"
              className="tap-press flex h-full min-h-12 min-w-14 items-center justify-center px-4 text-ink transition-colors active:bg-[#ececed] lg:hidden [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#f0f0f1]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setDrawerOpen(!mobileOpen)}
            >
              <MenuToggleIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Desktop mega panel */}
        <AnimatePresence>
          {openMenu && megaMenus[openMenu] && (
            <motion.div
              key={openMenu}
              id={`mega-panel-${openMenu}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={chromeTransition}
              className="absolute inset-x-0 top-full z-50 hidden border-b border-neutral-200 bg-[#f3f3f4] lg:block"
              onMouseEnter={keepOpen}
              onMouseLeave={scheduleClose}
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

      {mobileDrawer}
    </header>
  );
}
