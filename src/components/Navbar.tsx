"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLogo from "@/components/nav/NavbarLogo";
import NavMegaPanel from "@/components/nav/NavMegaPanel";
import PrimaryCTA from "@/components/nav/PrimaryCTA";
import { Chevron, GlobeIcon, MenuToggleIcon } from "@/components/nav/NavIcons";
import { navItems, megaMenus, type MenuId } from "@/components/nav/nav-data";

const navLinkClass =
  "font-nav text-fluid-nav font-medium tracking-normal text-[#111111] whitespace-nowrap";

const deliberate = [0.16, 1, 0.3, 1] as const;
const megaTransition = { duration: 0.42, ease: deliberate };
const underlineTransition =
  "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

/** Delay before close so cursor can travel into the panel */
const CLOSE_GRACE_MS = 160;
const OPEN_INTENT_MS = 60;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    return () => {
      clearCloseTimer();
      clearOpenTimer();
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

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className="font-nav sticky top-0 z-50 border-b border-neutral-200 bg-[#f7f7f8]">
      <div className="relative" ref={navRef}>
        <div className="mx-auto flex h-fluid-nav max-w-[1440px] items-stretch border-x border-neutral-200">
          {/* Brand zone */}
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
                  >
                    {hasMenu ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() =>
                          setOpenMenu((current) =>
                            current === item.menu ? null : (item.menu ?? null)
                          )
                        }
                        onFocus={() => item.menu && openMega(item.menu)}
                        className={`relative flex h-full items-center px-4 transition-colors duration-400 xl:px-5 ${
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
                          className={`absolute inset-x-3 bottom-0 z-10 h-[3px] origin-center bg-[#061a3a] xl:inset-x-4 ${underlineTransition} ${
                            isOpen ? "scale-x-100" : "scale-x-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="group relative flex h-full items-center px-4 transition-colors duration-400 hover:bg-[#f0f0f1] xl:px-5"
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
              className="flex h-full w-14 items-center justify-center text-[#111111] transition-colors hover:bg-[#f0f0f1] lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <MenuToggleIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Desktop mega panel */}
        <AnimatePresence mode="wait">
          {openMenu && megaMenus[openMenu] && (
            <motion.div
              key={openMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={megaTransition}
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

      {/* Mobile full-height drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: deliberate }}
            className="fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-40 lg:hidden"
          >
            <button
              type="button"
              aria-label="Dismiss menu"
              className="absolute inset-0 bg-[#061a3a]/35 backdrop-blur-[2px]"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.38, ease: deliberate }}
              className="relative flex h-full max-h-[calc(100dvh-var(--nav-h))] flex-col overflow-hidden border-b border-neutral-200 bg-[#f7f7f8] shadow-[0_24px_60px_-28px_rgba(6,26,58,0.45)]"
            >
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="mx-auto max-w-[1440px] border-x border-neutral-200">
                  {navItems.map((item, index) => {
                    const hasMenu = Boolean(item.menu && megaMenus[item.menu]);
                    const isExpanded = mobileSection === item.menu;
                    const menu = item.menu ? megaMenus[item.menu] : null;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.04 + index * 0.04,
                          ease: deliberate,
                        }}
                        className="border-b border-neutral-200/80"
                      >
                        {hasMenu && menu ? (
                          <>
                            <button
                              type="button"
                              className={`flex w-full items-center justify-between px-5 py-[1.15rem] text-left font-nav text-[17px] font-medium tracking-normal text-[#111111] transition-colors ${
                                isExpanded ? "bg-[#f3f3f4]" : "bg-transparent"
                              }`}
                              aria-expanded={isExpanded}
                              onClick={() =>
                                setMobileSection((current) =>
                                  current === item.menu ? null : (item.menu ?? null)
                                )
                              }
                            >
                              <span className="relative">
                                {item.label}
                                <span
                                  aria-hidden="true"
                                  className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-[#061a3a] transition-transform duration-400 ${
                                    isExpanded ? "scale-x-100" : "scale-x-0"
                                  }`}
                                />
                              </span>
                              <Chevron open={isExpanded} />
                            </button>

                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.36, ease: deliberate }}
                                  className="overflow-hidden bg-[#f3f3f4]"
                                >
                                  <div className="space-y-5 px-5 pt-2 pb-6">
                                    {menu.columns?.map((col) => (
                                      <div key={col.heading}>
                                        <p className="mb-3 text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase">
                                          {col.heading}
                                        </p>
                                        <ul className="space-y-1">
                                          {col.links.map((link) => (
                                            <li key={link.label}>
                                              <a
                                                href={link.href}
                                                className="block py-2.5 text-[16px] font-medium tracking-normal text-[#111111] transition-opacity active:opacity-55"
                                                onClick={() => setMobileOpen(false)}
                                              >
                                                {link.label}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}

                                    {menu.links && (
                                      <ul className="space-y-1">
                                        {menu.links.map((link) => (
                                          <li key={link.label}>
                                            <a
                                              href={link.href}
                                              className="block py-2.5 text-[16px] font-medium tracking-normal text-[#111111] transition-opacity active:opacity-55"
                                              onClick={() => setMobileOpen(false)}
                                            >
                                              {link.label}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    )}

                                    {menu.promo && (
                                      <a
                                        href={
                                          menu.promo.href.startsWith("#")
                                            ? `/${menu.promo.href}`
                                            : menu.promo.href
                                        }
                                        className="mt-1 flex min-h-14 items-center justify-between bg-[#061a3a] px-4 text-[14px] font-medium text-white"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        <span>
                                          <span className="block text-[12px] font-medium tracking-wide text-white/55">
                                            {menu.promo.title}
                                          </span>
                                          <span className="mt-0.5 block">{menu.promo.cta}</span>
                                        </span>
                                        <span
                                          className="text-[#C7FF3D]"
                                          aria-hidden="true"
                                        >
                                          ↗
                                        </span>
                                      </a>
                                    )}

                                    {menu.banner && (
                                      <a
                                        href={
                                          menu.banner.href.startsWith("#")
                                            ? `/${menu.banner.href}`
                                            : menu.banner.href
                                        }
                                        className="flex min-h-12 items-center justify-between gap-3 border-t border-neutral-300/70 bg-[#061a3a] px-4 py-3 text-[13px] font-medium text-white"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        <span className="line-clamp-2 text-white/85">
                                          {menu.banner.text}
                                        </span>
                                        <span className="shrink-0 text-[#C7FF3D]">
                                          {menu.banner.cta} ↗
                                        </span>
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
                            className="block px-5 py-[1.15rem] font-nav text-[17px] font-medium tracking-normal text-[#111111]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="shrink-0 border-t border-neutral-200 bg-[#f7f7f8] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <PrimaryCTA fullWidth onClick={() => setMobileOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
