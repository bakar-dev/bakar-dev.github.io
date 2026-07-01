import { profile, projects, skills, timeline } from "./data";

/* ============================================================
   Local "AI" assistant — a lightweight retrieval engine over
   the portfolio data. No API key required; runs fully client
   side. Swap `answer()` for a real LLM call if you want.
   ============================================================ */

export type Source = { label: string; anchor: string };

export type Answer = {
  text: string;
  sources: Source[];
};

type Doc = {
  id: string;
  keywords: string[];
  anchor: string;
  label: string;
  build: () => string;
};

const yearsLine = `${profile.name} has ${profile.yearsExperience}+ years of professional experience and has shipped multiple products across AI, SaaS and enterprise.`;

const docs: Doc[] = [
  {
    id: "intro",
    label: "About",
    anchor: "hero",
    keywords: ["who", "you", "muhib", "about", "intro", "yourself", "role", "do"],
    build: () =>
      `${profile.name} is an ${profile.role} — ${profile.tagline} ${yearsLine} Currently: ${profile.availability}.`,
  },
  {
    id: "experience",
    label: "Timeline",
    anchor: "timeline",
    keywords: ["experience", "years", "career", "journey", "history", "background", "long", "started"],
    build: () =>
      `${yearsLine} The journey: ${timeline
        .map((t) => `${t.range} as ${t.title} (${t.org})`)
        .join("; ")}.`,
  },
  {
    id: "skills",
    label: "Skills",
    anchor: "skills",
    keywords: ["skill", "skills", "tech", "stack", "tools", "languages", "know", "technologies"],
    build: () => {
      const byGroup: Record<string, string[]> = {};
      for (const s of skills) (byGroup[s.group] ??= []).push(s.label);
      return `Core stack — ${Object.entries(byGroup)
        .map(([g, list]) => `${g}: ${list.join(", ")}`)
        .join(" · ")}.`;
    },
  },
  {
    id: "ai",
    label: "AI work",
    anchor: "projects",
    keywords: ["ai", "agent", "agents", "llm", "openai", "rag", "ml", "model", "models", "machine"],
    build: () =>
      `On the AI side, ${profile.name} builds AI-powered product interfaces: at Intelligize+ AI he works on the AI chatbot UI, AI-assisted automatic search and smart filters over SEC filings; and on Visalay he built AI document OCR that reads applicants' documents to auto-fill and validate visa applications. See the Intelligize+ AI and Visalay missions.`,
  },
  {
    id: "projects",
    label: "Projects",
    anchor: "projects",
    keywords: ["project", "projects", "built", "build", "work", "shipped", "portfolio", "case"],
    build: () =>
      `${profile.name} has built: ${projects
        .map((p) => `${p.name} — ${p.tagline} (${p.stack.slice(0, 3).join(", ")})`)
        .join("; ")}.`,
  },
  {
    id: "wordpress",
    label: "WordPress work",
    anchor: "projects",
    keywords: ["wordpress", "wp", "cms", "php", "theme", "plugin", "elementor", "woocommerce", "website", "sites", "blog", "nonprofit", "law", "legal", "media", "agency", "studio", "technotweak", "autism", "bend", "bendlawgroup", "lovebeyondautism"],
    build: () =>
      `${profile.name} has strong WordPress development experience from his early agency career (2019–2021). He built fully custom WordPress themes for a range of clients — TechnoTweak (a web & app development agency in Pakistan & USA specialising in WordPress, Shopify and custom software), Love Beyond Autism (a nonprofit advocacy site with accessibility focus), and Bend Law Group (a legal services firm with lead-generation focus). His WordPress work covers custom PHP theme development, Advanced Custom Fields, SEO-structured markup, performance optimisation (Core Web Vitals), accessible design and lead-capture contact forms — delivered without page builders for maximum speed and control. WordPress is now part of his broader skill set alongside React, Next.js and full-stack product engineering.`,
  },
  {
    id: "contact",
    label: "Contact",
    anchor: "contact",
    keywords: ["contact", "email", "hire", "reach", "available", "availability", "talk", "connect", "linkedin"],
    build: () =>
      `${profile.availability}. Reach out at ${profile.email} or via the links in the Contact panel.`,
  },
];

// Per-project docs so "tell me about Aether" works.
for (const p of projects) {
  docs.push({
    id: `project-${p.id}`,
    label: p.name,
    anchor: "projects",
    keywords: [p.name.toLowerCase(), p.id, ...p.stack.map((s) => s.toLowerCase())],
    build: () =>
      `${p.name} (${p.status.toLowerCase()}) — ${p.overview} Stack: ${p.stack.join(
        ", ",
      )}. Key results: ${p.results.join(" ")}`,
  });
}

function score(query: string, doc: Doc) {
  const q = query.toLowerCase();
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  let s = 0;
  for (const kw of doc.keywords) {
    if (q.includes(kw)) s += kw.length > 4 ? 3 : 2;
    for (const t of tokens) {
      if (t === kw) s += 3;
      else if (kw.includes(t) && t.length > 3) s += 1;
    }
  }
  return s;
}

export const suggestedQuestions = [
  "What projects has Muhib built?",
  "Does Muhib do WordPress development?",
  "What AI systems has he worked on?",
  "What's the tech stack?",
  "How can I get in touch?",
];

export function answer(query: string): Answer {
  const q = query.trim();
  if (!q) {
    return {
      text: `Ask me anything about ${profile.name} — projects, experience, the AI work, or how to get in touch.`,
      sources: [],
    };
  }

  const ranked = docs
    .map((d) => ({ d, s: score(q, d) }))
    .sort((a, b) => b.s - a.s);

  const top = ranked[0];
  if (!top || top.s === 0) {
    return {
      text: `I'm tuned to ${profile.name}'s portfolio. Try asking about projects, skills, AI experience, or contact. For example: "${suggestedQuestions[0]}"`,
      sources: [],
    };
  }

  const picks = ranked.filter((r) => r.s >= Math.max(2, top.s * 0.6)).slice(0, 2);
  const text = picks.map((p) => p.d.build()).join("\n\n");
  const sources = picks.map((p) => ({ label: p.d.label, anchor: p.d.anchor }));
  return { text, sources };
}
