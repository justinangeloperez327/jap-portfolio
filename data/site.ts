import type { PortfolioSection, SiteNavItem } from "@/types";

export const siteNav: readonly SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const portfolioSections: readonly PortfolioSection[] = [
  { id: "about", number: "01", label: "About Me", href: "/about" },
  { id: "skills", number: "02", label: "Skills", href: "/skills" },
  { id: "projects", number: "03", label: "Projects", href: "/projects" },
  { id: "contact", number: "04", label: "Contact", href: "/contact" },
];
