export const engineeringJourney = [
  {
    phase: "Developer",
    focus: "Building applications",
    description:
      "I started with the application itself: interfaces, backend logic, databases, authentication, and the practical work of turning requirements into working software.",
    outcome:
      "That foundation taught me how decisions made in one layer eventually surface everywhere else.",
  },
  {
    phase: "Framework Builder",
    focus: "Designing the layer developers build on",
    description:
      "Repeated application patterns pushed me toward framework engineering—routing, validation, ORM conventions, middleware, tooling, and the APIs developers interact with every day.",
    outcome:
      "The focus shifted from solving one implementation to designing conventions that make many implementations easier.",
  },
  {
    phase: "Full-Stack Engineer",
    focus: "Treating the product as one system",
    description:
      "Frontend, backend, data, deployment, and operational concerns make more sense when they are designed together instead of being treated as isolated technical territories.",
    outcome:
      "I became more deliberate about boundaries, contracts, integration points, and the cost of complexity between layers.",
  },
  {
    phase: "Systems Thinker",
    focus: "Looking beyond individual features",
    description:
      "Architecture work made me more interested in the relationships between runtime behavior, developer experience, maintainability, deployment, and the workflows software exists to support.",
    outcome:
      "The question became less about whether a feature works and more about whether the whole system remains understandable as it grows.",
  },
  {
    phase: "Continuous Learner",
    focus: "Rebuilding assumptions from first principles",
    description:
      "Working across Rust, C++, C#, TypeScript, PHP, compilers, frameworks, and application platforms keeps exposing different ways to solve the same class of problem.",
    outcome:
      "I keep the useful patterns, challenge the accidental ones, and carry those lessons into the next system.",
  },
] as const;

export const professionalExperienceThemes = [
  {
    title: "Application delivery",
    description:
      "Building practical software around real workflows, data, users, and operational constraints rather than isolated technical exercises.",
  },
  {
    title: "Architecture and integration",
    description:
      "Connecting frontend, backend, persistence, authentication, APIs, and deployment with explicit boundaries and predictable contracts.",
  },
  {
    title: "Framework and platform work",
    description:
      "Designing reusable conventions, developer tooling, language features, runtime behavior, and infrastructure beneath applications.",
  },
] as const;
