/** Shared motion language — one curve, named durations, CSS and JS in lockstep. */
export const motionEase = [0.16, 1, 0.3, 1] as const;

export const motionDuration = {
  /** Tap / press settle */
  press: 0.16,
  /** Accordion, drawer sheet, mega panel */
  chrome: 0.28,
  /** Soft crossfade between tab panels */
  panel: 0.24,
  /** Route content enter */
  page: 0.32,
  /** Progress bar finish fade */
  progress: 0.24,
  /** Card min-height / fill expansion */
  expand: 0.5,
  /** CTA sheen sweep */
  sheen: 0.8,
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
  transition: chromeTransition,
};

/** Soft crossfade for tab / stage panels */
export const panelMotion = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: panelTransition,
};
