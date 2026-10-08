import type { CinematicArtwork } from "@/types";

export const artwork = {
  home: {
    alt: "Tokyo night portfolio scene",
    placeholderLabel: "Home artwork coming later",
    position: {
      mobile: "68% center",
      tablet: "66% center",
      desktop: "70% center",
    },
  },
  about: {
    alt: "Tokyo alley and cafe portrait scene",
    placeholderLabel: "About artwork coming later",
    position: {
      mobile: "64% center",
      tablet: "62% center",
      desktop: "66% center",
    },
  },
  skills: {
    alt: "Tokyo rooftop workspace scene",
    placeholderLabel: "Skills artwork coming later",
    position: {
      mobile: "62% center",
      tablet: "60% center",
      desktop: "64% center",
    },
  },
  projects: {
    alt: "Rainy neon Tokyo project scene",
    placeholderLabel: "Projects artwork coming later",
    position: {
      mobile: "68% center",
      tablet: "66% center",
      desktop: "70% center",
    },
  },
  contact: {
    alt: "Tokyo night contact scene",
    placeholderLabel: "Contact artwork coming later",
    position: {
      mobile: "70% center",
      tablet: "68% center",
      desktop: "72% center",
    },
  },
} satisfies Record<string, CinematicArtwork>;
