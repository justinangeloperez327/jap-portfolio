export const skillCategories = [
  {
    label: "Frontend",
    summary: "Interfaces, design systems, and responsive application experiences.",
    technologies: ["Next.js", "React", "Angular", "Tailwind CSS"],
  },
  {
    label: "Backend",
    summary: "APIs, services, authentication, and application infrastructure.",
    technologies: [".NET", "Laravel", "NestJS", "Node.js"],
  },
  {
    label: "Framework Engineering",
    summary: "Developer-facing abstractions, runtimes, compilers, and tooling.",
    technologies: ["Rust", "C++", "C#", "TypeScript"],
  },
  {
    label: "Databases",
    summary: "Relational and document data models with practical ORM design.",
    technologies: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    label: "Architecture",
    summary: "System boundaries, clean layering, APIs, and maintainable structure.",
    technologies: ["Clean Architecture", "REST", "Async Systems", "ORM Design"],
  },
  {
    label: "DevOps / Deployment",
    summary: "Repeatable delivery, deployment workflows, and production readiness.",
    technologies: ["GitHub", "Docker", "Vercel", "Azure"],
  },
  {
    label: "Languages",
    summary: "A multi-language toolkit chosen around the problem, not the trend.",
    technologies: ["C++", "Rust", "C#", "TypeScript", "PHP", "SQL"],
  },
] as const;


export const skillArchitecture = [
  {
    id: "languages",
    label: "Languages",
    description:
      "Languages I use across systems programming, application development, web platforms, and data work.",
    items: [
      {
        name: "C++",
        context:
          "Framework internals, runtime design, asynchronous systems, and performance-sensitive application infrastructure.",
      },
      {
        name: "Rust",
        context:
          "Framework engineering, type-safe APIs, systems work, compiler experiments, and performance-oriented backend development.",
      },
      {
        name: "C#",
        context:
          ".NET application architecture, APIs, enterprise software, and strongly typed backend development.",
      },
      {
        name: "TypeScript",
        context:
          "Frontend architecture, Next.js applications, Node-based tooling, and typed full-stack development.",
      },
      {
        name: "JavaScript",
        context:
          "Browser behavior, web runtime fundamentals, UI interactions, and interoperability across frontend ecosystems.",
      },
      {
        name: "PHP",
        context:
          "Laravel applications, backend workflows, rapid product development, and framework convention design.",
      },
      {
        name: "SQL",
        context:
          "Relational modeling, query design, reporting, migrations, and understanding what ORM abstractions ultimately execute.",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    description:
      "Application interfaces built around clarity, responsive composition, and maintainable component systems.",
    items: [
      {
        name: "Next.js",
        context:
          "App Router applications, server/client composition, metadata, deployment, and production-oriented React architecture.",
      },
      {
        name: "React",
        context:
          "Component architecture, stateful interfaces, reusable interaction patterns, and application composition.",
      },
      {
        name: "Angular",
        context:
          "Structured frontend applications, dependency injection, typed forms, services, and larger application boundaries.",
      },
      {
        name: "Tailwind CSS",
        context:
          "Design-system implementation, responsive composition, semantic utility patterns, and consistent interface styling.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description:
      "APIs and application services designed around explicit contracts, authentication, maintainability, and clear domain boundaries.",
    items: [
      {
        name: ".NET",
        context:
          "Clean Architecture, REST APIs, dependency injection, application services, and enterprise backend development.",
      },
      {
        name: "Laravel",
        context:
          "Convention-driven applications, authentication, ORM workflows, modular systems, and productive backend architecture.",
      },
      {
        name: "NestJS",
        context:
          "Structured TypeScript APIs, modules, dependency injection, guards, services, and scalable backend composition.",
      },
      {
        name: "Node.js",
        context:
          "JavaScript and TypeScript runtimes, API services, tooling, server-side workflows, and integration layers.",
      },
    ],
  },
  {
    id: "data",
    label: "Data",
    description:
      "Relational and document persistence with an emphasis on schema design, query behavior, migrations, and practical data access.",
    items: [
      {
        name: "PostgreSQL",
        context:
          "Relational application data, transactional workloads, production databases, and structured query design.",
      },
      {
        name: "MySQL",
        context:
          "Relational systems, Laravel-backed applications, application persistence, and operational database workloads.",
      },
      {
        name: "SQLite",
        context:
          "Local development, lightweight applications, embedded persistence, testing, and low-configuration deployments.",
      },
      {
        name: "MongoDB",
        context:
          "Document-oriented persistence for use cases where flexible document structures fit the access pattern.",
      },
      {
        name: "Prisma",
        context:
          "Typed application data access, schema workflows, migrations, and relational integration in TypeScript projects.",
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    description:
      "The reusable engineering disciplines behind the frameworks, APIs, runtimes, and application structures I build.",
    items: [
      {
        name: "Framework Design",
        context:
          "Convention systems, request lifecycles, extensibility, developer-facing APIs, generators, and cohesive framework ergonomics.",
      },
      {
        name: "Compiler Design",
        context:
          "Lexing, parsing, ASTs, semantic analysis, diagnostics, transpilation boundaries, and language tooling.",
      },
      {
        name: "ORM",
        context:
          "Models, relationships, query APIs, eager loading, migrations, conventions, and abstraction over multiple database backends.",
      },
      {
        name: "REST",
        context:
          "Resource-oriented APIs, predictable HTTP semantics, validation, authentication, versioning, and client/server contracts.",
      },
      {
        name: "Clean Architecture",
        context:
          "Dependency direction, application boundaries, separation of concerns, testability, and infrastructure isolation.",
      },
      {
        name: "Async",
        context:
          "Asynchronous request handling, concurrency-aware APIs, coroutine workflows, and non-blocking application design.",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools & Delivery",
    description:
      "The supporting workflow for source control, repeatable builds, deployment, hosting, and production delivery.",
    items: [
      {
        name: "Git",
        context:
          "Version control, branching, reviewable change sets, release history, and disciplined repository workflows.",
      },
      {
        name: "GitHub",
        context:
          "Repository management, pull requests, Actions, releases, issue workflows, and project collaboration.",
      },
      {
        name: "Docker",
        context:
          "Reproducible environments, application packaging, local infrastructure, and deployment-ready services.",
      },
      {
        name: "Vercel",
        context:
          "Next.js hosting, preview deployments, environment configuration, databases, and frontend delivery.",
      },
      {
        name: "Azure",
        context:
          "Cloud hosting, application infrastructure, deployment targets, and production service integration.",
      },
      {
        name: "CI/CD",
        context:
          "Automated linting, testing, builds, release checks, deployment gates, and repeatable delivery pipelines.",
      },
    ],
  },
] as const;
