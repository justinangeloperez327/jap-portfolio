export const aboutPrinciples = [
  {
    title: "Clarity before cleverness",
    body: "I prefer architecture and APIs that are easy to understand, extend, and explain. Clever abstractions are only useful when they reduce complexity for the next person.",
  },
  {
    title: "Developer experience is architecture",
    body: "Naming, conventions, defaults, error messages, and project structure are part of the system design. Good DX is not decoration added after the engineering is finished.",
  },
  {
    title: "Performance needs context",
    body: "Fast software matters, but performance should support the product instead of making the codebase difficult to evolve. I look for the right trade-off rather than the loudest benchmark.",
  },
] as const;

export const aboutBuildAreas = [
  {
    title: "Frameworks",
    body: "Expressive foundations that turn repeated application patterns into coherent conventions and reusable developer workflows.",
  },
  {
    title: "Full-stack systems",
    body: "Applications where frontend, backend, data, authentication, and deployment are designed as one connected product.",
  },
  {
    title: "Developer tooling",
    body: "Compilers, command-line tools, generators, diagnostics, and supporting infrastructure that make engineering work easier to repeat.",
  },
  {
    title: "Business software",
    body: "Operational systems built around real workflows, clear ownership, maintainable data models, and practical user experience.",
  },
] as const;

export const aboutInterests = [
  "Framework design",
  "Compiler and language design",
  "Clean application architecture",
  "ORM and data-access design",
  "Developer tooling",
  "Interface and product systems",
] as const;

export const developmentPhilosophy = [
  "Use conventions to remove decisions that do not need to be made repeatedly.",
  "Keep boundaries explicit enough that a system can change without becoming fragile.",
  "Optimize developer experience and production behavior together.",
  "Build for maintainability first, then make the implementation disappear behind a clean interface.",
] as const;
