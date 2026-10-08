import type {
  Project,
  ProjectCaseStudy,
} from "@/types";

const featuredCaseStudies: Record<string, ProjectCaseStudy> = {
  berserk: {
    slug: "berserk",
    overview:
      "Berserk explores what a productive, convention-driven Rust web framework can look like when developer experience is treated as a first-class architectural concern.",
    context:
      "Rust offers strong performance and type safety, but application frameworks often expose more infrastructure detail than developers coming from convention-heavy ecosystems expect. Berserk investigates a different balance.",
    problem:
      "The central problem is reducing repetitive application plumbing without hiding the properties that make Rust valuable. Routing, validation, persistence, models, and application structure need to feel coherent without becoming opaque.",
    designPrinciples: [
      {
        title: "Laravel-like clarity",
        body: "Prefer recognizable application conventions and predictable APIs over framework-specific ceremony.",
      },
      {
        title: "Rust-native safety",
        body: "Use the type system and explicit ownership model as strengths instead of imitating dynamic-language behavior too literally.",
      },
      {
        title: "One cohesive framework surface",
        body: "Validation, database access, ORM behavior, and core application concerns should feel designed together.",
      },
    ],
    architecture: [
      {
        title: "Core framework boundary",
        body: "Shared application primitives and framework behavior live behind a dedicated core layer.",
      },
      {
        title: "Validation layer",
        body: "Validation is treated as a reusable framework capability instead of ad hoc request logic.",
      },
      {
        title: "Database and ORM layers",
        body: "Database support and model conventions are separated enough to evolve independently while presenting one developer-facing workflow.",
      },
    ],
    implementation: [
      "Build framework capabilities as focused Rust crates instead of one monolithic package.",
      "Keep ORM and database abstractions explicit so multiple database backends can be supported coherently.",
      "Use conventions where they remove repetitive setup, while preserving clear types at framework boundaries.",
    ],
    developerExperience: [
      "Predictable naming and application structure.",
      "Model and data-access conventions that reduce routine boilerplate.",
      "Framework APIs designed to read like application intent rather than infrastructure code.",
    ],
    engineeringDecisions: [
      {
        title: "Convention over repeated configuration",
        body: "Repeated application decisions are encoded once where doing so improves clarity and consistency.",
      },
      {
        title: "Modular internals",
        body: "Core, validation, database, and ORM concerns remain separable even when the public experience feels unified.",
      },
    ],
    challenges: [
      "Balancing expressive APIs with Rust's explicit type and ownership model.",
      "Providing multi-database abstractions without flattening important backend differences.",
      "Keeping framework convenience from becoming hidden runtime behavior.",
    ],
    result: [
      "A framework direction centered on Laravel-like developer ergonomics with Rust-oriented implementation constraints.",
      "A reusable base for exploring ORM, validation, database, and application conventions together.",
    ],
  },
  gungnir: {
    slug: "gungnir",
    overview:
      "Gungnir is an expressive modern C++ web framework that combines application conventions with coroutine-based async workflows and a framework-aware compiler/tooling layer.",
    context:
      "C++ can deliver excellent runtime performance, but building web applications often exposes developers to low-level concerns and fragmented libraries. Gungnir explores a more integrated application framework.",
    problem:
      "The challenge is making modern C++ approachable for web development without hiding the language or sacrificing control. Application concepts such as routes, models, middleware, policies, events, and views need a coherent grammar and runtime.",
    designPrinciples: [
      {
        title: "Expressive application syntax",
        body: "Framework declarations should describe application intent directly rather than force repeated infrastructure patterns.",
      },
      {
        title: "Coroutine-first async",
        body: "Asynchronous request handling should fit naturally into modern C++ through co_await-based flows.",
      },
      {
        title: "Compiler-backed correctness",
        body: "Language and framework declarations should be parsed, validated, and diagnosed before generated C++ reaches the compiler toolchain.",
      },
    ],
    architecture: [
      {
        title: "Framework runtime",
        body: "HTTP, routing, middleware, responses, authentication, authorization, views, and application services form the runtime layer.",
      },
      {
        title: "Compiler frontend",
        body: "A keyword-aware lexer, parser, structured AST, semantic checks, diagnostics, and typed C++ IR provide the language boundary.",
      },
      {
        title: "Data layer",
        body: "ORM conventions and multiple database targets are designed as framework capabilities rather than isolated adapters.",
      },
    ],
    implementation: [
      "Use structured compiler stages instead of string-based source rewriting.",
      "Make asynchronous controllers and runtime flows first-class through modern C++ coroutines.",
      "Treat diagnostics, source mapping, compiler robustness, and cross-compiler behavior as product features.",
    ],
    developerExperience: [
      "Laravel-inspired application conventions adapted to C++.",
      "Readable framework declarations for common application concepts.",
      "Compiler diagnostics intended to explain framework-level mistakes before raw C++ errors dominate the workflow.",
    ],
    engineeringDecisions: [
      {
        title: "Dedicated IR boundary",
        body: "Framework syntax is lowered through structured intermediate representations before C++ generation.",
      },
      {
        title: "Authoritative checking",
        body: "The framework compiler owns semantic validation instead of relying on generated-code failures as the primary feedback loop.",
      },
    ],
    challenges: [
      "Reconciling framework ergonomics with C++ compilation and ownership semantics.",
      "Keeping generated code structural and debuggable.",
      "Maintaining consistent behavior across compilers, platforms, and database backends.",
    ],
    result: [
      "A framework and compiler architecture designed for expressive C++ web applications.",
      "A stronger boundary between framework semantics and generated C++ implementation details.",
    ],
  },
  densleaf: {
    slug: "densleaf",
    overview:
      "Densleaf is an experimental Rust-built language exploring how application concepts can become native syntax instead of conventions layered on top of a general-purpose language.",
    context:
      "Frameworks can make repeated patterns concise, but they still inherit the host language's syntax and mental model. Densleaf asks what changes when models, controllers, middleware, migrations, policies, events, and related concepts belong to the language grammar itself.",
    problem:
      "The experiment needs a grammar that is concise enough to improve application authoring while remaining explicit enough for parsing, semantic analysis, tooling, and future compilation.",
    designPrinciples: [
      {
        title: "Application concepts as syntax",
        body: "Common framework declarations should be represented directly in the grammar rather than through annotations or naming conventions alone.",
      },
      {
        title: "Small, inspectable language surface",
        body: "New syntax should earn its place by making application structure clearer.",
      },
      {
        title: "Compiler-first evolution",
        body: "Grammar changes should be evaluated through lexer, parser, AST, and semantic consequences rather than syntax aesthetics alone.",
      },
    ],
    architecture: [
      {
        title: "Lexer and tokens",
        body: "Framework-oriented keywords establish the lexical vocabulary of the language.",
      },
      {
        title: "Parser and AST",
        body: "Declarations are transformed into structured nodes that can be validated and evolved independently of source text.",
      },
      {
        title: "Rust implementation",
        body: "Rust provides the systems-level implementation base for the language toolchain.",
      },
    ],
    implementation: [
      "Represent framework concepts such as model, controller, migration, middleware, policy, event, listener, notification, and mail explicitly.",
      "Use familiar collection structures such as arrays and objects while keeping application declarations distinct.",
      "Evolve syntax alongside compiler structures instead of adding surface grammar without an implementation path.",
    ],
    developerExperience: [
      "Less ceremony around common application declarations.",
      "A language surface designed around application architecture rather than library composition.",
      "Potential for framework-aware diagnostics and tooling from the parser onward.",
    ],
    engineeringDecisions: [
      {
        title: "Rust for the toolchain",
        body: "The compiler implementation favors memory safety, explicit data modeling, and strong enum-based AST representations.",
      },
      {
        title: "Grammar before ecosystem",
        body: "The experiment prioritizes a coherent language model before expanding into broad tooling or package concerns.",
      },
    ],
    challenges: [
      "Avoiding syntax that simply recreates an existing framework in another form.",
      "Keeping the grammar small while covering meaningful application concepts.",
      "Designing AST boundaries that remain useful as semantics become more sophisticated.",
    ],
    result: [
      "A language experiment with an application-oriented vocabulary and a compiler-first direction.",
      "A foundation for testing whether framework conventions become clearer when promoted into language syntax.",
    ],
  },
  quagmire: {
    slug: "quagmire",
    overview:
      "Quagmire is a frontend framework experiment focused on reducing the amount of framework-specific mental overhead required to build reactive interfaces.",
    context:
      "Modern frontend frameworks are capable but often accumulate concepts, build conventions, and runtime behavior that developers must understand before small applications feel simple.",
    problem:
      "The project explores whether a smaller conceptual model can preserve useful reactivity and component behavior without reproducing the full complexity of established frontend ecosystems.",
    designPrinciples: [
      {
        title: "Smaller mental model",
        body: "Core concepts should be few enough to understand as a system instead of a collection of special cases.",
      },
      {
        title: "Predictable reactivity",
        body: "State changes and derived values should have behavior that is easy to trace.",
      },
      {
        title: "Compile away complexity",
        body: "A Rust-based transpilation layer can move framework complexity out of application code where that trade-off improves clarity.",
      },
    ],
    architecture: [
      {
        title: "Authoring model",
        body: "Developer-facing concepts such as computed values, mount behavior, and watchers form the application surface.",
      },
      {
        title: "Compiler boundary",
        body: "A Rust transpiler is responsible for translating the simpler authoring model into executable frontend output.",
      },
      {
        title: "Runtime behavior",
        body: "The runtime remains intentionally constrained so application behavior stays understandable.",
      },
    ],
    implementation: [
      "Center the authoring model on a small set of recognizable reactive concepts.",
      "Use compilation where it can simplify the application-facing API.",
      "Evaluate every abstraction against whether it reduces or merely relocates complexity.",
    ],
    developerExperience: [
      "Fewer concepts to learn before building useful interfaces.",
      "Reactive behavior that aims to remain explicit and predictable.",
      "An authoring model designed to read closer to intent than framework machinery.",
    ],
    engineeringDecisions: [
      {
        title: "Compiler-assisted framework",
        body: "Compilation is used as a design tool for reducing runtime and authoring complexity.",
      },
      {
        title: "DX as the primary experiment",
        body: "The project is judged first by whether it makes frontend development conceptually simpler, not by feature-count parity.",
      },
    ],
    challenges: [
      "Finding the minimum reactive feature set that still supports real interfaces.",
      "Preventing compile-time abstraction from becoming harder to debug than runtime abstraction.",
      "Differentiating genuine simplicity from merely unfamiliar syntax.",
    ],
    result: [
      "A focused frontend-framework direction built around simpler developer experience.",
      "A platform for testing compiler-assisted UI abstractions without committing to a large runtime surface.",
    ],
  },
};

function buildDefaultCaseStudy(project: Project): ProjectCaseStudy {
  return {
    slug: project.slug,
    overview: project.description,
    context:
      `${project.title} sits within my ${project.category.toLowerCase()} work and is used to explore how product requirements, architecture, implementation, and delivery decisions fit together.`,
    problem:
      "The project focuses on turning a practical application need into a maintainable system without letting framework or infrastructure choices dominate the user workflow.",
    designPrinciples: [
      {
        title: "Clear boundaries",
        body: "Keep application responsibilities separated enough that features can evolve without coupling every layer together.",
      },
      {
        title: "Practical defaults",
        body: "Prefer conventions that reduce repeated setup while keeping important behavior visible.",
      },
      {
        title: "Production-aware design",
        body: "Treat data, authentication, deployment, and maintainability as part of the application design from the beginning.",
      },
    ],
    architecture: [
      {
        title: "Application layer",
        body: "User-facing workflows and application behavior define the shape of the system.",
      },
      {
        title: "Service and data boundaries",
        body: "Backend and persistence concerns are kept behind explicit interfaces and predictable contracts.",
      },
      {
        title: "Delivery boundary",
        body: "Deployment and environment concerns are considered part of the system rather than an afterthought.",
      },
    ],
    implementation: [
      `Build the project around ${project.technologies.join(", ")}.`,
      "Keep the implementation aligned with the user workflow instead of adding architecture for its own sake.",
      "Favor structures that remain understandable as features and integrations are added.",
    ],
    developerExperience: [
      "Predictable project organization.",
      "Explicit contracts between application layers.",
      "Tooling and conventions chosen to reduce repeated setup and maintenance work.",
    ],
    engineeringDecisions: [
      {
        title: "Use the stack as a system",
        body: "Technology choices are evaluated by how well they work together across the full application lifecycle.",
      },
      {
        title: "Keep evolution inexpensive",
        body: "Boundaries and conventions are selected to make future feature work easier rather than optimizing only for the first implementation.",
      },
    ],
    challenges: [
      "Balancing delivery speed with maintainable structure.",
      "Keeping application behavior clear as integrations and data requirements grow.",
      "Avoiding unnecessary complexity while preserving room for future development.",
    ],
    result: [
      "A practical project architecture that can continue evolving without requiring a complete structural rewrite.",
      "A reusable set of lessons around application boundaries, data, delivery, and developer workflow.",
    ],
  };
}

export function getProjectCaseStudy(project: Project) {
  return featuredCaseStudies[project.slug] ?? buildDefaultCaseStudy(project);
}
