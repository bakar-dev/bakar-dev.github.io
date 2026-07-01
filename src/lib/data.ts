/* ============================================================
   Portfolio data — the single source of truth for MUHIB.OS
   Edit this file to make the OS your own.
   ============================================================ */

export const profile = {
  name: "Muhib",
  handle: "muhib",
  os: "MUHIB.OS",
  role: "AI-Powered Product Engineer",
  title: "AI-Powered Product Engineer & SaaS Builder",
  // Cycled through by the hero typewriter.
  roles: [
    "AI-Powered Product Engineer",
    "SaaS Builder",
    "Full-Stack Engineer",
    "Frontend Specialist",
  ],
  tagline:
    "I design and ship AI-powered products end to end — from system architecture to the last pixel.",
  location: "Remote · GMT+1",
  email: "muhib.bakar@gmail.com",
  availability: "Open to senior & founding engineer roles",
  yearsExperience: 7,
  shipped: 15,
  bootLines: [
    "Product Engineering",
    "AI-Powered Products",
    "SaaS Architecture",
    "Full-Stack Development",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/bakar-dev", handle: "@bakar-dev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bakardev", handle: "/in/bakardev" },
    { label: "X", href: "https://x.com/bakardev", handle: "@bakardev" },
    { label: "Email", href: "mailto:muhib.bakar@gmail.com", handle: "muhib.bakar@gmail.com" },
  ],
} as const;

/* ---------------------------------------------------------- */
/* Career timeline                                            */
/* ---------------------------------------------------------- */

export type TimelineNode = {
  id: string;
  year: string;
  range: string;
  title: string;
  org: string;
  summary: string;
  stack: string[];
  metrics: { label: string; value: number; suffix?: string; prefix?: string }[];
  highlights: string[];
};

export const timeline: TimelineNode[] = [
  {
    id: "frontend",
    year: "2019",
    range: "2019 — 2021",
    title: "Frontend Developer",
    org: "Studio / Agency work",
    summary:
      "Started by crafting pixel-perfect, high-performance interfaces for clients — building custom WordPress sites for law firms, nonprofits and media brands, then expanding into React for more complex web apps. Obsessed over motion, accessibility and Core Web Vitals.",
    stack: ["React", "TypeScript", "Tailwind", "WordPress", "PHP", "Framer Motion"],
    metrics: [
      { label: "Lighthouse avg", value: 98, suffix: "" },
      { label: "Projects", value: 18, suffix: "+" },
    ],
    highlights: [
      "Built a reusable motion + design-system library used across 12 client sites.",
      "Delivered custom WordPress themes for law firms, nonprofits and tech media brands.",
      "Cut average page weight by 47% through code-splitting and asset strategy.",
    ],
  },
  {
    id: "fullstack",
    year: "2021",
    range: "2021 — 2023",
    title: "Full-Stack Engineer",
    org: "Early-stage startups",
    summary:
      "Owned features end to end — schema design, APIs, auth, payments and the UI on top. Learned to ship fast without breaking trust.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe"],
    metrics: [
      { label: "Uptime", value: 99, suffix: ".9%" },
      { label: "APIs shipped", value: 40, suffix: "+" },
    ],
    highlights: [
      "Designed multi-tenant Postgres schemas with row-level security.",
      "Built billing + entitlement systems on Stripe handling real revenue.",
    ],
  },
  {
    id: "saas",
    year: "2023",
    range: "2023 — 2025",
    title: "Full-Stack SaaS Builder",
    org: "Delivery Delight · Visalay · Yellow School",
    summary:
      "Took products from blank repo to live — solo and in small teams. On-demand delivery (NestJS + React), a visa platform with AI document OCR, and a tutoring marketplace's scheduling.",
    stack: ["Next.js", "tRPC", "Redis", "Docker", "AWS", "Vercel"],
    metrics: [
      { label: "MRR enabled", value: 40, prefix: "$", suffix: "k+" },
      { label: "Users", value: 12, suffix: "k+" },
    ],
    highlights: [
      "Shipped a B2B SaaS to 12k users with sub-200ms p95 API latency.",
      "Set up CI/CD, observability and feature flags from day one.",
    ],
  },
  {
    id: "ai",
    year: "2025",
    range: "2025 — Now",
    title: "AI-Powered Product Engineer",
    org: "Intelligize · a LexisNexis company",
    summary:
      "Currently shipping AI-powered products at enterprise scale: an AI chatbot, AI-assisted search and smart filters, virtualized rendering and performance-tuned data matrices over millions of SEC filings.",
    stack: ["React", "TypeScript", "AI Integrations", "Virtualized UI", "Analytics"],
    metrics: [
      { label: "Am Law 100", value: 87, suffix: "%" },
      { label: "Big Four", value: 100, suffix: "%" },
    ],
    highlights: [
      "Shipped the AI chatbot, automatic search and smart-filter experiences.",
      "Virtualized huge result sets and tuned large data matrices to stay 60fps.",
    ],
  },
];

/* ---------------------------------------------------------- */
/* Skills galaxy                                              */
/* ---------------------------------------------------------- */

export type Skill = {
  id: string;
  label: string;
  group: "AI" | "Frontend" | "Backend" | "Infra";
  level: number; // 0..1 — affects node size
  projects: string[]; // project ids using this skill
};

export const skills: Skill[] = [
  // Frontend
  { id: "react", label: "React", group: "Frontend", level: 0.97, projects: ["intelligize", "wxw", "visalay", "yellowschool", "mountaintop"] },
  { id: "typescript", label: "TypeScript", group: "Frontend", level: 0.96, projects: ["intelligize", "mountaintop", "yellowschool", "visalay", "wxw"] },
  { id: "nextjs", label: "Next.js", group: "Frontend", level: 0.9, projects: ["visalay"] },
  { id: "tailwind", label: "Tailwind", group: "Frontend", level: 0.9, projects: ["visalay", "yellowschool", "wxw"] },
  { id: "virtualized", label: "Virtualized UI", group: "Frontend", level: 0.9, projects: ["intelligize"] },
  { id: "perf", label: "Web Performance", group: "Frontend", level: 0.9, projects: ["intelligize", "mountaintop"] },
  { id: "dataviz", label: "Data Viz", group: "Frontend", level: 0.86, projects: ["mountaintop", "intelligize"] },
  { id: "scheduling", label: "Scheduling / Calendar", group: "Frontend", level: 0.85, projects: ["yellowschool", "wxw"] },
  { id: "wordpress", label: "WordPress", group: "Frontend", level: 0.88, projects: ["technotweak", "lovebeyondautism", "bendlawgroup"] },
  { id: "php", label: "PHP / WP Dev", group: "Backend", level: 0.82, projects: ["technotweak", "lovebeyondautism", "bendlawgroup"] },
  // Backend
  { id: "node", label: "Node.js", group: "Backend", level: 0.9, projects: ["visalay", "wxw"] },
  { id: "nestjs", label: "NestJS", group: "Backend", level: 0.86, projects: ["wxw"] },
  { id: "postgres", label: "PostgreSQL", group: "Backend", level: 0.86, projects: ["visalay", "wxw"] },
  { id: "rest", label: "REST APIs", group: "Backend", level: 0.9, projects: ["intelligize", "visalay", "wxw"] },
  // AI
  { id: "ai", label: "AI Integrations", group: "AI", level: 0.92, projects: ["intelligize", "visalay"] },
  { id: "aisearch", label: "AI Search & Filters", group: "AI", level: 0.9, projects: ["intelligize"] },
  { id: "chatbot", label: "AI Chatbot UI", group: "AI", level: 0.9, projects: ["intelligize"] },
  { id: "ocr", label: "Document OCR", group: "AI", level: 0.85, projects: ["visalay"] },
  // Infra
  { id: "maps", label: "Google Maps", group: "Infra", level: 0.85, projects: ["wxw"] },
  { id: "stripe", label: "Stripe / Payments", group: "Infra", level: 0.85, projects: ["wxw"] },
  { id: "mailing", label: "Transactional Mail", group: "Infra", level: 0.8, projects: ["wxw"] },
  { id: "aws", label: "AWS", group: "Infra", level: 0.78, projects: ["intelligize", "wxw"] },
  { id: "vercel", label: "Vercel", group: "Infra", level: 0.85, projects: ["visalay", "yellowschool"] },
];

export const skillGroupColor: Record<Skill["group"], string> = {
  AI: "#56e1c7",
  Frontend: "#6d8bff",
  Backend: "#b07bff",
  Infra: "#ffb86b",
};

/* ---------------------------------------------------------- */
/* Projects — mission cards + case studies                    */
/* ---------------------------------------------------------- */

export type Project = {
  id: string;
  code: string; // MISSION 01
  name: string;
  tagline: string;
  status: "COMPLETED" | "ACTIVE" | "SCALING";
  year: string;
  accent: string;
  role: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  problem: string;
  architecture: string[];
  decisions: { title: string; body: string }[];
  challenges: { title: string; body: string }[];
  results: string[];
  /** Public link, if any (used by the card + modal CTA). */
  url?: string;
  /** Live screenshot URL OR a local path like /projects/wxw.png.
      Leave undefined to fall back to the generated gradient. */
  shot?: string;
  links?: { label: string; href: string }[];
};

/**
 * Case studies grounded in each product's public site + Muhib's own account
 * of his contributions. Drop real screenshots at /public/projects/<id>.png and
 * point `shot` at them to replace the live previews where needed.
 */
export const projects: Project[] = [
  {
    id: "intelligize",
    code: "MISSION 01",
    name: "Intelligize+ AI",
    tagline: "AI legal & SEC-filings research — chatbot, smart search & analytics",
    status: "ACTIVE",
    year: "2024 — Now",
    accent: "#6d8bff",
    role: "Senior Frontend Engineer (AI) · Intelligize (a LexisNexis company)",
    stack: ["React", "TypeScript", "AI Integrations", "Virtualized UI", "Web Performance", "Analytics"],
    url: "https://apps.intelligize.com",
    shot: "/projects/intelligize.png",
    metrics: [
      { label: "Am Law 100", value: "87%" },
      { label: "Big Four", value: "100%" },
      { label: "UI", value: "Virtualized" },
    ],
    overview:
      "Intelligize+ AI consolidates SEC filings, regulatory guidance and accounting standards into one searchable platform with 'Protégé' conversational AI. I lead frontend product work: the AI chatbot interface, AI-assisted automatic search and smart filters, virtualized lists for massive result sets, performance tuning of large data matrices, and the analytics views that compliance, legal and accounting teams use daily.",
    problem:
      "Users work over enormous filing datasets and dense data tables. They don't just need an answer — they need to explore millions of records fast, with AI assistance, in a UI that never stalls.",
    architecture: [
      "AI chatbot UI with streaming responses and inline, citable sources",
      "AI-assisted automatic search + smart, faceted filters wired into one context",
      "Virtualized (windowed) lists & grids rendering tens of thousands of filings smoothly",
      "Performance-tuned data matrices — memoization, windowing and lazy loading",
      "Interactive analytics dashboards over the filing corpus",
    ],
    decisions: [
      {
        title: "Virtualize everything large",
        body: "Filing result sets and comparison matrices are huge. Windowed rendering keeps scrolling and interaction at 60fps no matter how many rows or columns are in play.",
      },
      {
        title: "AI in the flow, not in a sidebar",
        body: "Search, filters and the chatbot share one context so the AI augments the research the user is already doing — rather than being a disconnected box.",
      },
      {
        title: "Perceived performance first",
        body: "Debounced AI search, optimistic UI and skeleton states keep the experience feeling instant even when the work behind it is heavy.",
      },
    ],
    challenges: [
      {
        title: "Rendering at scale without jank",
        body: "Tens of thousands of rows and wide data matrices will kill a naïve React tree. Virtualization plus careful memoization and render-budgeting were what made it usable.",
      },
      {
        title: "Streaming, trustworthy chat UI",
        body: "Rendering tokens progressively while attaching verifiable citations — and keeping the layout stable as content streams in — was a core frontend problem.",
      },
    ],
    results: [
      "Serves a platform used by ~87% of Am Law 100 firms and all Big Four accounting firms.",
      "Made dense, large-scale filing data fast and explorable on the frontend.",
      "AI chatbot, automatic search and smart filters that augment expert research in-flow.",
    ],
    links: [{ label: "Visit Intelligize", href: "https://www.intelligize.com" }],
  },
  {
    id: "wxw",
    code: "MISSION 02",
    name: "Delivery Delight",
    tagline: "On-demand delivery — maps, ordering, payments & scheduling",
    status: "SCALING",
    year: "2024",
    accent: "#56e1c7",
    role: "Full-Stack Engineer (NestJS · React)",
    stack: ["NestJS", "React", "Node.js", "PostgreSQL", "Google Maps", "Stripe"],
    url: "https://app.wxwdelivery.com",
    // Falls back to the branded gradient until you add /public/projects/wxw.png
    shot: "/projects/wxw.png",
    metrics: [
      { label: "Role", value: "Full-Stack" },
      { label: "Stack", value: "NestJS · React" },
      { label: "Maps", value: "Live routing" },
    ],
    overview:
      "Delivery Delight is an on-demand delivery platform. I built it across the stack — a NestJS backend and a React frontend — covering Google Maps for discovery and routing, the full ordering flow, payments, transactional mailing, order scheduling and analytics for operators.",
    problem:
      "A delivery product is a web of moving parts — location, ordering, payments, notifications and timing — that all have to feel like one smooth, reliable experience for customers and operators alike.",
    architecture: [
      "NestJS backend: modular services for orders, payments, scheduling and notifications",
      "React frontend with Google Maps for discovery, addresses and live routing",
      "Ordering flow end-to-end, with online payments",
      "Scheduled / future orders with reliable background processing",
      "Transactional mailing for order lifecycle + analytics dashboards for operators",
    ],
    decisions: [
      {
        title: "Modular NestJS backend",
        body: "Orders, payments, mailing and scheduling each became their own module — clear boundaries that kept a feature-dense backend maintainable as it grew.",
      },
      {
        title: "Maps as a first-class surface",
        body: "Discovery, address entry and live routing all run on Google Maps, so location is woven through the product rather than bolted on.",
      },
      {
        title: "Scheduling as real infrastructure",
        body: "‘Order for later’ means durable scheduled jobs and notifications — built to fire reliably, not as a fragile cron afterthought.",
      },
    ],
    challenges: [
      {
        title: "Many moving parts, one smooth flow",
        body: "Maps, ordering, payments, mailing and scheduling each have failure modes. The work was making them compose into one dependable experience.",
      },
      {
        title: "Payments + scheduled orders",
        body: "Coordinating payment state with orders that execute in the future took careful handling of timing, retries and edge cases.",
      },
    ],
    results: [
      "Shipped a full delivery platform end-to-end — backend and UI — solo across the stack.",
      "Maps, ordering, payments, mailing, scheduling and analytics in one product.",
    ],
    links: [{ label: "Visit Delivery Delight", href: "https://wxwdelivery.com" }],
  },
  {
    id: "mountaintop",
    code: "MISSION 03",
    name: "PepsiCo · MountainTop",
    tagline: "Production insights, KPI & analytics dashboards for PepsiCo",
    status: "COMPLETED",
    year: "2022",
    accent: "#8aa2ff",
    role: "Frontend Developer (TypeScript) · MountainTop Technologies",
    stack: ["React", "TypeScript", "Data Viz", "Analytics", "Dashboards"],
    // Falls back to the branded gradient until you add /public/projects/mountaintop.png
    shot: "/projects/mountaintop.png",
    metrics: [
      { label: "Client", value: "PepsiCo" },
      { label: "Focus", value: "KPIs · Analytics" },
      { label: "Role", value: "Frontend" },
    ],
    overview:
      "At MountainTop Technologies I worked as a frontend developer (TypeScript) on PepsiCo's products — building the interfaces for production insights, data-production KPIs and analytics. The job was turning large operational datasets into clear, fast, decision-ready dashboards.",
    problem:
      "Operational and production data is only valuable if the people running the business can read it at a glance. PepsiCo's teams needed insight surfaces that made KPIs and production analytics immediately legible.",
    architecture: [
      "React + TypeScript front end for production-insights and KPI dashboards",
      "Data-visualization components for production and operational metrics",
      "Filtering, drill-down and comparison across KPI views",
      "Performance-minded rendering for large analytics datasets",
    ],
    decisions: [
      {
        title: "KPIs that read at a glance",
        body: "Dashboards were designed so the headline number lands first and the detail is one interaction away — clarity over density.",
      },
      {
        title: "Strict typing for data-heavy UI",
        body: "TypeScript across the analytics layer caught whole classes of data-shape bugs before they ever reached a chart.",
      },
    ],
    challenges: [
      {
        title: "Making big data legible",
        body: "Production analytics can overwhelm. The challenge was distilling large datasets into views that drive decisions without burying them.",
      },
    ],
    results: [
      "Delivered production-insights, KPI and analytics dashboards used on PepsiCo's products.",
      "Turned large operational datasets into clear, decision-ready interfaces.",
    ],
  },
  {
    id: "visalay",
    code: "MISSION 04",
    name: "Visalay",
    tagline: "Visa platform with AI document OCR — built end to end",
    status: "COMPLETED",
    year: "2023",
    accent: "#ffb86b",
    role: "Full-Stack Engineer (Node.js · React) — solo build",
    stack: ["React", "Node.js", "PostgreSQL", "AI Integrations", "Document OCR", "Tailwind"],
    url: "https://visalay.pk",
    metrics: [
      { label: "Role", value: "Solo full-stack" },
      { label: "AI", value: "Document OCR" },
      { label: "Region", value: "Pakistan" },
    ],
    overview:
      "Visalay is a Pakistan-based visa & immigration platform I built entirely on my own — Node.js backend and React frontend — including AI integrations with document OCR that read applicants' documents to auto-fill and validate their applications.",
    problem:
      "Visa applications are document-heavy and error-prone. Applicants re-type details off passports and papers by hand, and a single mistake can derail a submission.",
    architecture: [
      "React frontend with a guided, multi-step application flow",
      "Node.js backend owning data, validation and the application lifecycle",
      "AI document OCR: extract fields from uploaded documents to auto-fill forms",
      "Validation that cross-checks OCR output against entered data",
      "PostgreSQL data layer with application status tracking",
    ],
    decisions: [
      {
        title: "OCR to kill manual data entry",
        body: "Instead of making applicants transcribe documents, OCR reads them and pre-fills the form — fewer errors, far less friction on the most painful step.",
      },
      {
        title: "Owned the full stack",
        body: "Building both backend and frontend meant the data model, the API and the UX could be designed as one coherent system, end to end.",
      },
      {
        title: "Guided flows over blank forms",
        body: "For high-stakes, unfamiliar paperwork, a validated step-by-step flow beats a long form — the product reduces ambiguity at every step.",
      },
    ],
    challenges: [
      {
        title: "Reliable OCR on messy documents",
        body: "Real-world scans and photos are noisy. Extracting trustworthy fields and gracefully handling low-confidence reads was the core AI problem.",
      },
      {
        title: "Clarity in a high-stakes domain",
        body: "Immigration is stressful and error-intolerant — the UX had to surface exactly what's needed and catch mistakes before submission.",
      },
    ],
    results: [
      "Shipped a complete visa platform solo — backend, frontend and AI OCR.",
      "OCR-powered auto-fill cut manual data entry and reduced application errors.",
    ],
    links: [{ label: "Visit Visalay", href: "https://visalay.pk" }],
  },
  {
    id: "yellowschool",
    code: "MISSION 05",
    name: "Yellow School",
    tagline: "Tutoring marketplace — calendar scheduling & booking UI",
    status: "COMPLETED",
    year: "2023",
    accent: "#b07bff",
    role: "Frontend Developer (TypeScript)",
    stack: ["React", "TypeScript", "Calendar / Scheduling", "Booking UI", "Tailwind"],
    url: "https://yellowschool.world",
    shot: "/projects/yellowschool.png",
    metrics: [
      { label: "Focus", value: "Scheduling" },
      { label: "Apps", value: "iOS · Android" },
      { label: "Role", value: "Frontend" },
    ],
    overview:
      "Yellow School is an online tutoring platform connecting students with professional language tutors. As a frontend developer (TypeScript), I focused on the calendar — the scheduling and booking experience where students and tutors find a time, reserve lessons and manage their availability.",
    problem:
      "The heart of a tutoring marketplace is scheduling. If picking a slot, booking a lesson and managing availability isn't effortless, the whole product stalls.",
    architecture: [
      "React + TypeScript calendar and scheduling interface",
      "Availability management for tutors and slot selection for students",
      "Booking flow from open slot → reserved lesson",
      "Timezone-correct rendering of availability and lessons",
    ],
    decisions: [
      {
        title: "Calendar as the core surface",
        body: "Discover → book → teach all converge on the calendar, so it had to be the most polished, reliable part of the UI.",
      },
      {
        title: "Typed scheduling logic",
        body: "Slots, availability and bookings are easy to get subtly wrong. TypeScript modeled them precisely to keep the scheduling logic trustworthy.",
      },
    ],
    challenges: [
      {
        title: "Timezones done right",
        body: "Booking live lessons across regions means availability and reminders have to be timezone-correct — a deceptively tricky surface that I owned on the frontend.",
      },
    ],
    results: [
      "Built the calendar scheduling & booking UI at the center of the marketplace.",
      "Shipped across web and native iOS/Android.",
    ],
    links: [{ label: "Visit Yellow School", href: "https://yellowschool.world" }],
  },
  {
    id: "technotweak",
    code: "MISSION 06",
    name: "TechnoTweak",
    tagline: "Web & app development agency (Pakistan & USA) — WordPress, Shopify & custom software",
    status: "COMPLETED",
    year: "2020",
    accent: "#56e1c7",
    role: "WordPress Developer (Frontend)",
    stack: ["WordPress", "PHP", "Custom Theme", "Shopify", "SEO", "Web Performance"],
    url: "https://technotweak.com",
    shot: "/projects/technotweak.jpg",
    metrics: [
      { label: "Region", value: "PK · USA" },
      { label: "Stack", value: "WP · Shopify" },
      { label: "Clients", value: "Global" },
    ],
    overview:
      "TechnoTweak is a web & app development agency operating across Pakistan and the USA, delivering WordPress, Shopify, mobile app and custom software solutions for startups and enterprises worldwide. I contributed as a WordPress developer, building and maintaining client sites to the agency's delivery standards.",
    problem:
      "An agency serving global clients across industries needs WordPress builds that are fast, maintainable and easy for clients to manage — delivered consistently and on schedule.",
    architecture: [
      "Custom WordPress themes built to agency and client specifications",
      "Shopify storefronts for e-commerce clients",
      "ACF-powered page layouts for non-technical client content management",
      "Performance-optimised builds — minified assets, caching and clean markup",
      "SEO-ready structure: semantic HTML, Open Graph and sitemaps across all deliverables",
    ],
    decisions: [
      {
        title: "Custom themes over page builders",
        body: "Keeping themes hand-coded gave clients faster sites, cleaner code and less technical debt to manage after handoff.",
      },
      {
        title: "ACF for client independence",
        body: "Advanced Custom Fields let clients update content, images and layouts on their own without needing developer involvement for routine changes.",
      },
      {
        title: "Consistent delivery standards",
        body: "Working within an agency means every build follows a shared quality bar — performance, SEO and maintainability were non-negotiable across all projects.",
      },
    ],
    challenges: [
      {
        title: "Diverse client requirements",
        body: "Serving startups and enterprises across different industries meant adapting quickly — each client had distinct design, functionality and handoff requirements.",
      },
      {
        title: "Quality at agency pace",
        body: "Agency timelines are tight. Delivering clean, performant WordPress builds consistently under deadline pressure was the core professional challenge.",
      },
    ],
    results: [
      "Delivered WordPress and Shopify projects for a multi-regional agency serving global clients.",
      "Custom themes, ACF-powered CMS setups and SEO-ready builds across multiple client industries.",
    ],
    links: [{ label: "Visit TechnoTweak", href: "https://technotweak.com" }],
  },
  {
    id: "lovebeyondautism",
    code: "MISSION 07",
    name: "Love Beyond Autism",
    tagline: "Nonprofit advocacy site — accessible, emotionally resonant WordPress build",
    status: "COMPLETED",
    year: "2020",
    accent: "#b07bff",
    role: "WordPress Developer (Frontend)",
    stack: ["WordPress", "PHP", "Custom Theme", "Accessibility", "ACF", "Contact Forms"],
    url: "https://lovebeyondautism.org",
    shot: "/projects/lovebeyondautism.png",
    metrics: [
      { label: "Type", value: "Nonprofit" },
      { label: "Focus", value: "Accessibility" },
      { label: "CMS", value: "WordPress" },
    ],
    overview:
      "Love Beyond Autism is a nonprofit dedicated to supporting autistic individuals and their families. I built their WordPress site with a strong emphasis on accessibility and warm, clear design — making it easy for families in often-stressful circumstances to find resources, events and ways to connect.",
    problem:
      "A nonprofit site must be deeply accessible and immediately trustworthy. Its audience may include caregivers under stress, people with disabilities and first-time visitors — the site must communicate care at first glance and never get in the way.",
    architecture: [
      "Custom WordPress theme built for warmth, clarity and accessibility",
      "WCAG-aligned markup: semantic HTML, ARIA labels, keyboard navigation",
      "Advanced Custom Fields for non-technical staff to update content easily",
      "Events section for community programmes and workshops",
      "Contact and donation CTAs woven through key pages",
    ],
    decisions: [
      {
        title: "Accessibility first, not last",
        body: "For an autism-focused nonprofit, accessibility is not a nice-to-have. Every component was built with WCAG guidelines as a baseline constraint.",
      },
      {
        title: "Empowering non-technical staff",
        body: "ACF-powered page sections let the team update programmes, events and stories without a developer — the site needed to work for them long after handoff.",
      },
      {
        title: "Design that communicates empathy",
        body: "Typography, whitespace and colour were chosen to feel calm and welcoming — technical choices in service of emotional goals.",
      },
    ],
    challenges: [
      {
        title: "Accessible across all devices and abilities",
        body: "Ensuring the site works well with screen readers, has sufficient colour contrast and stays navigable by keyboard took careful, deliberate implementation.",
      },
      {
        title: "Content that stays current",
        body: "Nonprofits have small teams. The CMS structure had to be simple enough that anyone on staff could keep events, news and resources up to date.",
      },
    ],
    results: [
      "Delivered an accessible, warm nonprofit site that empowers the team to self-manage content.",
      "WCAG-aligned and built to serve families finding the organisation for the first time.",
    ],
    links: [{ label: "Visit Love Beyond Autism", href: "https://lovebeyondautism.org" }],
  },
  {
    id: "bendlawgroup",
    code: "MISSION 08",
    name: "Bend Law Group",
    tagline: "Legal services firm — professional WordPress site with lead-capture focus",
    status: "COMPLETED",
    year: "2021",
    accent: "#ffb86b",
    role: "WordPress Developer (Frontend)",
    stack: ["WordPress", "PHP", "Custom Theme", "SEO", "Web Performance", "Contact Forms"],
    url: "https://www.bendlawgroup.com",
    shot: "/projects/bendlawgroup.jpg",
    metrics: [
      { label: "Type", value: "Legal Services" },
      { label: "Focus", value: "Lead Generation" },
      { label: "CMS", value: "WordPress" },
    ],
    overview:
      "Bend Law Group is a legal services firm. I built their WordPress presence with a professional, trust-first design — clear practice area pages, attorney profiles and prominent contact CTAs to convert site visitors into qualified leads for the firm.",
    problem:
      "A law firm website has one primary job: build trust quickly and make it easy for potential clients to get in touch. Every design and structure decision must serve that conversion goal without looking generic.",
    architecture: [
      "Custom WordPress theme with a clean, authoritative visual identity",
      "Practice area pages structured for both conversion and local SEO",
      "Attorney profile pages with structured schema markup",
      "Multi-step contact forms with lead routing and notification emails",
      "Performance-optimised build for fast Core Web Vitals — a ranking signal",
    ],
    decisions: [
      {
        title: "Trust signals at every scroll depth",
        body: "Attorney credentials, bar memberships and client testimonials are woven through the layout — not buried on a single page — so trust builds as users read.",
      },
      {
        title: "Local SEO structure built in",
        body: "Practice area pages, location schema and structured attorney data were built to help the firm rank for the queries that bring in clients.",
      },
      {
        title: "CTAs that are never more than a click away",
        body: "Consultation request forms appear in the header, at the end of every practice page and as a sticky mobile element — reducing friction to the first contact.",
      },
    ],
    challenges: [
      {
        title: "Professional without being stiff",
        body: "Legal sites can feel cold and interchangeable. The design challenge was conveying authority while remaining approachable to clients in stressful situations.",
      },
      {
        title: "Lead forms that convert",
        body: "Contact forms for legal services need the right fields, the right copy and low friction — too much information too early loses the lead.",
      },
    ],
    results: [
      "Shipped a professional, conversion-focused WordPress site for a legal services firm.",
      "Practice area pages, attorney profiles and lead-capture forms optimised for local SEO.",
    ],
    links: [{ label: "Visit Bend Law Group", href: "https://www.bendlawgroup.com" }],
  },
];

/* ---------------------------------------------------------- */
/* Architecture playground — interactive system diagram       */
/* ---------------------------------------------------------- */

export type ArchNode = {
  id: string;
  label: string;
  kind: "client" | "edge" | "service" | "ai" | "data" | "queue";
  col: number; // 0..4 layer
  row: number;
  detail: string;
  scaling: string;
};

export type ArchEdge = { from: string; to: string; label?: string };

export const archNodes: ArchNode[] = [
  { id: "web", label: "Web App", kind: "client", col: 0, row: 1, detail: "Next.js App Router, React Server Components, streaming UI rendered at the edge.", scaling: "Static + edge cached globally; near-zero cold start." },
  { id: "mobile", label: "Mobile / API clients", kind: "client", col: 0, row: 2, detail: "Same typesafe API surface consumed by native and 3rd-party clients.", scaling: "Stateless — scales horizontally behind the gateway." },
  { id: "edge", label: "Edge / API Gateway", kind: "edge", col: 1, row: 1.5, detail: "Auth, rate limiting, request validation and routing at the edge.", scaling: "Runs at 300+ edge locations; absorbs spikes before they hit core services." },
  { id: "api", label: "API Layer", kind: "service", col: 2, row: 1, detail: "tRPC services with typesafe contracts and read-only/RLS-aware data access.", scaling: "Horizontally autoscaled, stateless pods behind a load balancer." },
  { id: "workers", label: "Workers / Jobs", kind: "queue", col: 2, row: 2.2, detail: "Durable background workflows (Inngest) for long-running and retryable tasks.", scaling: "Concurrency-controlled queues; backpressure protects downstreams." },
  { id: "agents", label: "AI Agents", kind: "ai", col: 3, row: 1.5, detail: "LangGraph orchestrator: Researcher → Writer → Editor → Critic with tool-use + memory.", scaling: "Model router sends easy steps to small models; escalates only hard reasoning." },
  { id: "vector", label: "Vector Store", kind: "data", col: 4, row: 1, detail: "pgvector hybrid search (BM25 + embeddings) for grounded retrieval.", scaling: "Indexed + partitioned; co-located with Postgres to cut round-trips." },
  { id: "db", label: "PostgreSQL", kind: "data", col: 4, row: 2, detail: "Multi-tenant primary store with row-level security and materialized rollups.", scaling: "Read replicas + connection pooling; rollups keep hot queries instant." },
  { id: "cache", label: "Redis", kind: "data", col: 4, row: 3, detail: "Caching, rate-limit counters and realtime event streams.", scaling: "Cache-aside pattern; protects Postgres from read storms." },
];

export const archEdges: ArchEdge[] = [
  { from: "web", to: "edge" },
  { from: "mobile", to: "edge" },
  { from: "edge", to: "api" },
  { from: "api", to: "workers", label: "enqueue" },
  { from: "api", to: "agents", label: "invoke" },
  { from: "workers", to: "agents" },
  { from: "agents", to: "vector", label: "retrieve" },
  { from: "agents", to: "db" },
  { from: "api", to: "db", label: "query" },
  { from: "api", to: "cache" },
];

export const archKindColor: Record<ArchNode["kind"], string> = {
  client: "#6d8bff",
  edge: "#8aa2ff",
  service: "#9aa3c0",
  ai: "#56e1c7",
  data: "#b07bff",
  queue: "#ffb86b",
};
