import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { TechSticker } from "@/components/tech-sticker";

const oss = [
  { repo: "supabase/supabase", title: "Fix newline in SMS templates", num: "#43910", status: "merged" },
  { repo: "supabase/supabase", title: "Pricing page CTA routing", num: "#44309", status: "open" },
  { repo: "supabase/supabase", title: "UI polish + a11y fixes", num: "#43940–43945", status: "shipped" },
  { repo: "supabase/supabase", title: "Dashboard UX improvements", num: "#43950", status: "shipped" },
  { repo: "calcom/cal.com", title: "Multiple contributions", num: "author feed", status: "active" },
];

export function OSS() {
  return (
    <section id="oss" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 mb-10 items-baseline pb-6 border-b border-white/15">
        <div className="font-mono text-base text-orange-400 tracking-widest">05 / OSS</div>
        <h2 className="font-light tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Shipped to <span className="italic" style={{ color: "#F2B56A" }}>production</span> code
        </h2>
      </Reveal>

      <p className="text-neutral-200 max-w-xl mb-6 leading-relaxed text-xl font-medium">
        Real PRs against tools real teams use — Supabase, Cal.com. The fastest way to prove I can read a stranger&apos;s
        codebase and not break it.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {["Supabase", "Cal.com", "TypeScript", "React", "Next.js", "PostgreSQL", "GitHub"].map((s) => (
          <span
            key={s}
            className="text-[15px] font-mono px-3.5 py-1.5 rounded-full border border-white/15 text-neutral-200 inline-flex items-center gap-2"
          >
            <TechSticker name={s} size={20} />
            {s}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {oss.map((pr, i) => (
          <div
            key={i}
            className="relative rounded-xl border border-white/15 bg-neutral-950/60 p-5 flex flex-col gap-3"
          >
            <div className="font-mono text-[15px] text-orange-200 flex items-center gap-2">
              <TechSticker name={pr.repo} size={22} />
              {pr.repo}
            </div>
            <div className="text-xl font-normal tracking-tight leading-snug">{pr.title}</div>
            <div className="flex justify-between items-center mt-auto pt-3 border-t border-white/15">
              <span className="font-mono text-[14px] text-neutral-300">{pr.num}</span>
              <span className="text-[13px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
                {pr.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/15 bg-neutral-950/60 p-6 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Github size={16} className="text-orange-400" />
            <span className="font-mono text-base text-neutral-100">@abdulbaqui17 · last year</span>
          </div>
          <a
            href="https://github.com/abdulbaqui17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-mono text-neutral-300 hover:text-orange-400 flex items-center gap-1 transition-colors"
          >
            view on github <ArrowUpRight size={11} />
          </a>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/FF6B2C/abdulbaqui17"
          alt="Abdul Baqui's GitHub contribution graph"
          className="w-full opacity-100"
          style={{ filter: "brightness(1.1)" }}
        />
      </div>
    </section>
  );
}
