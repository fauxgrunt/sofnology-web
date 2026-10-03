/** Shared motion language — one curve, named durations, CSS and JS in lockstep. */
export const motionEase = [0.33, 1, 0.68, 1] as const;

export const motionDuration = {
  /** Tap / press settle */
  press: 0.16,
  /** Accordion, drawer sheet, mega panel */
  chrome: 0.36,
  /** Soft crossfade between tab panels */
  panel: 0.34,
  /** Route content enter */
  page: 0.4,
  /** Progress bar finish fade */
  progress: 0.28,
  /** Card min-height / fill expansion */
  expand: 0.4,
  /** CTA sheen sweep — quieter, desktop-only */
  sheen: 0.55,
} as const;

export const reducedMotionTransition = {
  duration: 0.01,
} as const;

export const chromeTransition = {
  duration: motionDuration.chrome,
  ease: motionEase,
} as const;

export const panelTransition = {
  duration: motionDuration.panel,
  ease: motionEase,
} as const;

export const pageTransition = {
  duration: motionDuration.page,
  ease: motionEase,
} as const;

export const expandTransition = {
  duration: motionDuration.expand,
  ease: motionEase,
} as const;

/** Height accordion open/close — same language sitewide */
export const accordionMotion = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto" as const, opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    height: chromeTransition,
    opacity: { duration: motionDuration.panel, ease: motionEase },
  },
};

/** Soft crossfade for tab / stage panels */
export const panelMotion = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -2 },
  transition: panelTransition,
};
