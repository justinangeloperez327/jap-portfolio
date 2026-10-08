import type { Project } from "@/types";

export const projects = [
  {
    slug: "berserk",
    title: "Berserk",
    subtitle: "Rust · Web Framework",
    description:
      "A Laravel-inspired Rust web framework focused on expressive developer experience, strong performance, and practical full-stack conventions.",
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
    subtitle: "C++ · Web Framework",
    description:
      "An expressive C++ web framework designed around approachable conventions, coroutine-based async workflows, and production-oriented architecture.",
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
    subtitle: "Rust · Language Experiment",
    description:
      "An experimental programming language project exploring framework-aware grammar, compiler structure, and a cleaner application-development syntax.",
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
    subtitle: "Frontend · Framework Experiment",
    description:
      "A frontend framework experiment centered on a simpler mental model, approachable reactivity, and a developer experience that stays lightweight.",
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
