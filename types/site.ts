export type PortfolioSectionId = "about" | "skills" | "projects" | "contact";

export type SiteNavItem = {
  label: string;
  href: string;
};

export type PortfolioSection = {
  id: PortfolioSectionId;
  number: string;
  label: string;
  href: string;
};
