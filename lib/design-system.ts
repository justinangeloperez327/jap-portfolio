export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
} as const;

export const layers = {
  background: 0,
  atmosphere: 10,
  content: 20,
  navigation: 50,
  overlay: 60,
} as const;

export const layout = {
  contentMax: "80rem",
  readingMax: "44rem",
  headerHeight: "4.5rem",
} as const;

export type Breakpoint = keyof typeof breakpoints;
