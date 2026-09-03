export const program = {
  title: "Tech4Rural",
  subtitle: "12-Week Backend Developer Program",
  duration: "12 Weeks",
  sessions: "36 Sessions",
  capstone: "1 Production API",
  schedule: "3 sessions/week · 2–2.5 hours/session",
  stack: ["Node.js", "Express", "PostgreSQL", "Prisma / Sequelize", "Docker"],
  overview:
    "A practical backend development program built around real APIs, pair programming, security, testing, deployment, and production thinking.",
  finalOutcome:
    "Each learner ships a deployed, tested, documented, portfolio-ready API by Week 12.",
};

export const modules = [
  { id: 1, name: "Foundations", weeks: "01–02" },
  { id: 2, name: "Data", weeks: "03–04" },
  { id: 3, name: "Security & Correctness", weeks: "05–06" },
  { id: 4, name: "Building Real APIs", weeks: "07–08" },
  { id: 5, name: "Shipping It", weeks: "09–10" },
  { id: 6, name: "Production & Capstone", weeks: "11–12" },
];

export const weeks = [
  {
    number: 1,
    module: "Foundations",
    title: "HTTP, REST, and the Request/Response Cycle",
    core: [
      "What HTTP actually is: methods, status codes, headers",
      "Build a raw Node HTTP server",
      "Map REST verbs to CRUD operations",
    ],
    stretch: [
      "Implement content negotiation",
      "Use proper status-code semantics for edge cases",
      "Reason about 422 vs 400 vs 409",
    ],
    interactive: [
      "Day 1: Inspect real traffic using browser dev tools and Postman/Insomnia",
      "Day 3: Fix a broken API specification's status codes and headers",
    ],
    deliverable:
      "A working Node.js HTTP server implementing basic REST-style CRUD endpoints.",
  },
  {
    number: 2,
    module: "Foundations",
    title: "Express Fundamentals",
    core: [
      "Routing",
      "Middleware",
      "Request parsing",
      "Error-handling middleware",
      "Project structure",
    ],
    stretch: [
      "Build custom logging middleware from scratch",
      "Build simple rate-limiting middleware without a library",
      "Review middleware ordering and failure modes",
    ],
    interactive: [
      "Pair-Build: Create a small Hello API with four endpoints",
      "Advanced learners review the middleware chain for ordering bugs",
    ],
    deliverable:
      "A structured Express API with routing, middleware, request parsing, and centralized error handling.",
  },
  {
    number: 3,
    module: "Data",
    title: "SQL & Relational Thinking",
    core: [
      "Tables and relational models",
      "Primary and foreign keys",
      "Joins",
      "Normalization basics",
      "Raw SQL queries",
    ],
    stretch: [
      "Read EXPLAIN ANALYZE output",
      "Identify slow query behavior",
      "Improve query performance",
    ],
    interactive: [
      "SQL Kata Day: Timed queries against a seeded, intentionally messy dataset",
      "Normalize and query data using real joins",
    ],
    deliverable:
      "A set of correct SQL queries against a relational dataset, including joins and normalized relationships.",
  },
  {
    number: 4,
    module: "Data",
    title: "PostgreSQL + ORM",
    core: [
      "Connect Express to PostgreSQL",
      "Migrations",
      "Prisma/Sequelize models",
      "Basic ORM queries",
    ],
    stretch: [
      "Model many-to-many relationships",
      "Write raw-query fallbacks where ORM-generated queries are inefficient",
    ],
    interactive: [
      "Lab: Convert the Week 3 SQL dataset into a modeled and migrated schema",
      "Create seed data and query it through the API",
    ],
    deliverable:
      "An Express API backed by PostgreSQL with migrations, models, relationships, and seed data.",
  },
  {
    number: 5,
    module: "Security & Correctness",
    title: "Authentication & Authorization",
    core: [
      "Password hashing with bcrypt",
      "JWT issuing and verification",
      "Protected routes",
    ],
    stretch: [
      "Role-based access control",
      "Refresh-token rotation",
      "Review authentication failure modes",
    ],
    interactive: [
      "Red Team / Blue Team: One pair attempts to break another pair's auth",
      "Report missing checks, token leakage, and weak hashing choices",
    ],
    deliverable:
      "An authenticated API with hashed passwords, verified JWTs, and protected routes.",
  },
  {
    number: 6,
    module: "Security & Correctness",
    title: "Testing & Validation",
    core: [
      "Unit tests with Jest",
      "Input validation with Zod/Joi",
      "Basic integration tests against a test database",
    ],
    stretch: [
      "Use test-driven development on a new endpoint",
      "Write failing tests before implementing the feature",
    ],
    interactive: [
      "Mutation Challenge: Find a deliberately introduced break using the test suite",
      "Week 6 learner check-in and progress review",
    ],
    deliverable:
      "A validated API feature protected by unit and integration tests.",
  },
  {
    number: 7,
    module: "Building Real APIs",
    title: "API Design at Scale",
    core: [
      "Pagination",
      "Filtering",
      "Sorting",
      "Consistent error response shape",
      "Versioning strategy",
    ],
    stretch: [
      "Document the API with OpenAPI/Swagger",
      "Enforce the contract with a linter",
    ],
    interactive: [
      "Code Review Swap: Critique another pair's API design against a rubric",
      "Review naming, status codes, pagination, and error consistency",
    ],
    deliverable:
      "A scalable API interface with pagination, filtering, sorting, consistent errors, and versioning.",
  },
  {
    number: 8,
    module: "Building Real APIs",
    title: "Caching & Background Work",
    core: [
      "Redis caching basics",
      "Cache invalidation strategy",
      "Simple Bull/BullMQ background job",
    ],
    stretch: [
      "Job retry and backoff strategy",
      "Cache stampede mitigation",
    ],
    interactive: [
      "Live Load Test: Compare cached and uncached endpoints with autocannon or k6",
      "Discuss response time and throughput metrics as a group",
    ],
    deliverable:
      "An API endpoint accelerated with caching plus a working background job.",
  },
  {
    number: 9,
    module: "Shipping It",
    title: "Docker & Environments",
    core: [
      "Dockerfile for the API",
      "docker-compose with PostgreSQL and Redis",
      "Environment variable management",
    ],
    stretch: [
      "Multi-stage Docker builds",
      "Production healthchecks",
      "Reduce production image size",
    ],
    interactive: [
      "\"It works on my machine\" Day: Containerize a partner's broken or undocumented project",
      "Get the full stack running reproducibly",
    ],
    deliverable:
      "A containerized backend API running together with PostgreSQL and Redis.",
  },
  {
    number: 10,
    module: "Shipping It",
    title: "CI/CD & Deployment",
    core: [
      "GitHub Actions pipeline",
      "Lint, test, and build stages",
      "Deploy to Render, Railway, or Fly.io",
    ],
    stretch: [
      "Staged deployments",
      "Staging-to-production promotion",
      "Manual approval gates",
    ],
    interactive: [
      "Break the Pipeline: Diagnose a failing CI pipeline from logs alone",
      "Fix failures caused by tests, builds, or environment configuration",
    ],
    deliverable:
      "A deployed backend service with automated CI checks and a repeatable deployment flow.",
  },
  {
    number: 11,
    module: "Production & Capstone",
    title: "Observability & Scaling Concepts",
    core: [
      "Structured logging",
      "Basic monitoring and alerting",
      "Horizontal scaling concepts",
      "Microservices trade-offs",
    ],
    stretch: [
      "Distributed tracing",
      "Prometheus/Grafana metrics dashboard",
    ],
    interactive: [
      "Incident Simulation: Diagnose a production bug using logs before touching code",
      "Discuss root cause and prevention",
    ],
    deliverable:
      "A capstone API with production-friendly logging and a basic observability strategy.",
  },
  {
    number: 12,
    module: "Production & Capstone",
    title: "Capstone",
    core: [
      "Day 1: Final build day with facilitator office hours",
      "Day 2: Peer code review against the complete program rubric",
      "Day 3: Demo day",
    ],
    stretch: [
      "Improve security, testing, documentation, observability, and deployment quality",
      "Prepare technical walkthrough and trade-off discussion",
    ],
    interactive: [
      "Peer review against security, testing, API design, and deployment criteria",
      "Present the deployed API to learners, mentors, or external reviewers",
    ],
    deliverable:
      "A deployed, tested, documented, portfolio-ready backend API.",
  },
];

export const sessionPattern = [
  {
    day: "DAY 01",
    title: "Concept + Live Build",
    description:
      "Facilitator live-codes the concept with a deliberate bug or design flaw. Learners identify and fix it before a scoped lab assignment.",
  },
  {
    day: "DAY 02",
    title: "Lab + Pair Programming",
    description:
      "Learners build in pairs. Core learners receive support while Stretch learners tackle an extension task or review implementation quality.",
  },
  {
    day: "DAY 03",
    title: "Review + Challenge",
    description:
      "Peer and facilitator code review followed by a 30–45 minute timed challenge and a short reflection roundtable.",
  },
];
