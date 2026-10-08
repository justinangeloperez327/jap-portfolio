import type { ResponsiveFocalPosition } from "./media";

export type ProjectCategory =
  | "Frameworks"
  | "Languages"
  | "Web Apps"
  | "Frontend"
  | "Backend"
  | "Experiments";

export type ProjectStatus =
  | "Active"
  | "In Development"
  | "Experimental"
  | "Completed";

export type ProjectContentSide = "left" | "right";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  technologies: readonly string[];
  image: string | null;
  imagePosition: ResponsiveFocalPosition;
  imageMirror: boolean;
  contentSide: ProjectContentSide;
  status: ProjectStatus;
  github: string | null;
  website: string | null;
  featured: boolean;
};
