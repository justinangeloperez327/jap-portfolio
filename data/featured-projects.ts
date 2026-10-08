export const featuredProjects = [
  {
    slug: "berserk",
    title: "Berserk",
    eyebrow: "Rust · Web Framework",
    description:
      "A Laravel-inspired Rust web framework focused on expressive developer experience, strong performance, and practical full-stack conventions.",
    technologies: ["Rust", "ORM", "Validation", "SQL"],
    imageSrc: undefined,
    imageAlt: "Berserk framework project artwork",
    imageMirror: false,
    contentSide: "left",
  },
  {
    slug: "gungnir",
    title: "Gungnir",
    eyebrow: "C++ · Web Framework",
    description:
      "An expressive C++ web framework designed around approachable conventions, coroutine-based async workflows, and production-oriented architecture.",
    technologies: ["C++", "co_await", "Compiler", "HTTP"],
    imageSrc: undefined,
    imageAlt: "Gungnir framework project artwork",
    imageMirror: true,
    contentSide: "right",
  },
  {
    slug: "densleaf",
    title: "Densleaf",
    eyebrow: "Rust · Language Experiment",
    description:
      "An experimental programming language project exploring framework-aware grammar, compiler structure, and a cleaner application-development syntax.",
    technologies: ["Rust", "Lexer", "Parser", "AST"],
    imageSrc: undefined,
    imageAlt: "Densleaf programming language project artwork",
    imageMirror: false,
    contentSide: "left",
  },
  {
    slug: "quagmire",
    title: "Quagmire",
    eyebrow: "Frontend · Framework Experiment",
    description:
      "A frontend framework experiment centered on a simpler mental model, approachable reactivity, and a developer experience that stays lightweight.",
    technologies: ["Frontend", "Reactivity", "DX", "Compiler"],
    imageSrc: undefined,
    imageAlt: "Quagmire frontend framework project artwork",
    imageMirror: true,
    contentSide: "right",
  },
] as const;
