import type { Project } from "@/types";

export const projects = [
  {
    slug: "berserk",
    title: "Berserk",
    subtitle: "Rust · Laravel-Inspired Framework",
    description:
      "A web framework exploring how Laravel-like developer experience can translate into Rust without giving up type safety, performance, or explicit architecture.",
    category: "Frameworks",
    technologies: ["Rust", "ORM", "Validation", "SQL"],
    image: null,
    imagePosition: {
      mobile: "center",
      tablet: "center",
      desktop: "center",
    },
    imageMirror: false,
    contentSide: "left",
    status: "Active",
    github: null,
    website: null,
    featured: true,
  },
  {
    slug: "gungnir",
    title: "Gungnir",
    subtitle: "C++ · Expressive Web Framework",
    description:
      "An expressive C++ web framework built around approachable conventions, coroutine-based async workflows, and framework-level tooling that makes modern C++ web development easier to reason about.",
    category: "Frameworks",
    technologies: ["C++", "co_await", "Compiler", "HTTP"],
    image: null,
    imagePosition: {
      mobile: "center",
      tablet: "center",
      desktop: "center",
    },
    imageMirror: true,
    contentSide: "right",
    status: "Active",
    github: null,
    website: null,
    featured: true,
  },
  {
    slug: "densleaf",
    title: "Densleaf",
    subtitle: "Rust · Experimental Language",
    description:
      "An experimental Rust-based language exploring framework-aware grammar, compiler structure, and a more direct syntax for defining application concepts.",
    category: "Languages",
    technologies: ["Rust", "Lexer", "Parser", "AST"],
    image: null,
    imagePosition: {
      mobile: "center",
      tablet: "center",
      desktop: "center",
    },
    imageMirror: false,
    contentSide: "left",
    status: "Experimental",
    github: null,
    website: null,
    featured: true,
  },
  {
    slug: "quagmire",
    title: "Quagmire",
    subtitle: "Frontend · Simpler Developer Experience",
    description:
      "A frontend framework experiment focused on reducing mental overhead through approachable reactivity, clearer conventions, and a lightweight developer experience.",
    category: "Frontend",
    technologies: ["Frontend", "Reactivity", "DX", "Compiler"],
    image: null,
    imagePosition: {
      mobile: "center",
      tablet: "center",
      desktop: "center",
    },
    imageMirror: true,
    contentSide: "right",
    status: "Experimental",
    github: null,
    website: null,
    featured: true,
  },
] satisfies readonly Project[];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
