import { Briefcase } from "lucide-react";

type Role = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

const experience: Role[] = [
  {
    role: "Software Engineering Intern",
    company: "Equippp 3.0 Labs",
    period: "Summer 2024",
    location: "Hyderabad · Hybrid",
    bullets: [
      "Shipped full-stack features in a production Next.js + Node.js codebase serving a live user base.",
      "Built REST endpoints and database migrations in PostgreSQL; integrated Redis caching to cut page-load times on hot routes.",
      "Owned front-end modules end-to-end from Figma to production, including auth flows and dashboard widgets.",
      "Ran code review on peer PRs and introduced a component-testing pattern the team adopted after I left.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Open Source Contributor",
    company: "Supabase · Cal.com",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "9+ PRs against supabase/supabase, merged and in-flight, spanning SMS templates, dashboard UX, and pricing-page CTA routing.",
      "Contributions to calcom/cal.com after learning their workflow the hard way (one issue → one branch → one PR).",
      "Treat each PR as a credibility deposit: reading the codebase first, matching style exactly, keeping diffs surgical.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Supabase"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 mb-10 items-baseline pb-6 border-b border-white/15">
        <div className="font-mono text-base text-orange-400 tracking-widest">03 / EXPERIENCE</div>
        <h2 className="font-light tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Where I&apos;ve <span className="italic" style={{ color: "#F2B56A" }}>shipped</span>
        </h2>
      </div>

      <div className="space-y-4">
        {experience.map((e, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/15 bg-neutral-950/60 p-6 md:p-8 hover:border-orange-500/30 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={14} className="text-orange-400" />
                  <span className="font-mono text-[14px] text-orange-400 uppercase tracking-widest">{e.period}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight leading-tight">{e.role}</h3>
                <div className="text-lg text-neutral-200 mt-1">
                  {e.company} · <span className="text-neutral-300">{e.location}</span>
                </div>
              </div>
            </div>
            <ul className="space-y-2 mb-5">
              {e.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-lg text-neutral-100 leading-relaxed">
                  <span className="text-orange-500 mt-1.5 flex-shrink-0">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {e.stack.map((s) => (
                <span key={s} className="text-[14px] font-mono px-2 py-0.5 rounded-full border border-white/15 text-neutral-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
