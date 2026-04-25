"use client";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Code2, GitBranch, Rocket, Sparkles, Trophy, Zap } from "lucide-react";
import type { MouseEvent } from "react";
import { HoverStack } from "@/components/hover-stack";

type Project = {
  title: string;
  sub: string;
  desc: string;
  stack: string[];
  tag: string;
  status: "wip" | "shipped";
  icon: LucideIcon;
  color: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "AI App Builder",
    sub: "Bolt.new-style codegen",
    desc: "Prompt → working app. WebContainers, Monaco, Supabase, Docker.",
    stack: ["Next.js", "GPT-4", "WebContainers"],
    tag: "shipped",
    status: "shipped",
    icon: Sparkles,
    color: "#60A5FA",
    url: "https://github.com/abdulbaqui17/Ai-app-builder",
  },
  {
    title: "ApplyBot",
    sub: "Autonomous job agent",
    desc: "230+ outreach drafts. Puppeteer Stealth, BullMQ queue, GPT-4 writer.",
    stack: ["Puppeteer", "BullMQ", "Redis"],
    tag: "shipped",
    status: "shipped",
    icon: Rocket,
    color: "#C084FC",
    url: "https://github.com/abdulbaqui17/Automate-Job-Application",
  },
  {
    title: "Contest Platform",
    sub: "Coding contest engine",
    desc: "Competitive contest hosting — submissions, multi-language judge, live leaderboards.",
    stack: ["Next.js", "Node", "Postgres"],
    tag: "shipped",
    status: "shipped",
    icon: Trophy,
    color: "#38BDF8",
    url: "https://github.com/abdulbaqui17/contest-platform",
  },
  {
    title: "Crypto Trading",
    sub: "Real-time orderbook",
    desc: "Redis Pub/Sub + WebSockets + TimescaleDB. 60% latency cut.",
    stack: ["Redis", "WS", "Timescale"],
    tag: "shipped",
    status: "shipped",
    icon: Zap,
    color: "#FBBF24",
    url: "https://github.com/abdulbaqui17/CryptoTradingPlatform",
  },
  {
    title: "Solana AMM",
    sub: "Constant-product DEX",
    desc: "Rust + Anchor. Pools, LP tokens, swap math. Shipped to devnet.",
    stack: ["Rust", "Anchor", "Solana"],
    tag: "shipped",
    status: "shipped",
    icon: Code2,
    color: "#34D399",
    url: "https://github.com/abdulbaqui17/AMM",
  },
  {
    title: "Kafka Workflow",
    sub: "Zapier-ish engine",
    desc: "Each step a Kafka consumer. Fault-tolerant retries, DAG builder.",
    stack: ["Kafka", "Node", "Postgres"],
    tag: "shipped",
    status: "shipped",
    icon: GitBranch,
    color: "#F472B6",
    url: "https://github.com/abdulbaqui17/AutomateWorkflow",
  },
];

export function Work() {
  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="work" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 mb-10 items-baseline pb-6 border-b border-white/15">
        <div className="font-mono text-base text-orange-400 tracking-widest">03 / WORK</div>
        <h2 className="font-light tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Selected <span className="italic" style={{ color: "#F2B56A" }}>projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(260px,auto)]">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <HoverStack key={i} tilt={i % 2 === 0 ? -16 : 16} scale={1.04} className="relative rounded-2xl">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl border border-white/15 bg-neutral-950/60 backdrop-blur-sm overflow-hidden transition-colors hover:border-orange-500/40"
              onMouseMove={handleMove}
            >
              <div
                className="relative h-32 overflow-hidden border-b border-white/15"
                style={{ background: `linear-gradient(135deg, ${p.color}22, #0e0d0a 60%, ${p.color}11)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon size={40} style={{ color: p.color }} className="opacity-40" />
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${p.status === "wip" ? "bg-orange-400 animate-pulse" : "bg-neutral-400"}`} />
                  <span className="text-[13px] font-mono uppercase tracking-widest text-neutral-100">{p.status}</span>
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: "radial-gradient(450px circle at var(--mx) var(--my), rgba(255, 107, 44, 0.12), transparent 40%)",
                }}
              />

              <div className="relative flex flex-col h-full p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-mono text-[14px] text-neutral-300 uppercase tracking-widest">{p.tag}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-400 group-hover:text-orange-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-1 leading-none">{p.title}</h3>
                <div className="text-base font-mono text-orange-300 mb-3">{p.sub}</div>
                <p className="text-lg text-neutral-200 leading-relaxed mb-auto font-medium">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/15">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[14px] font-mono px-2 py-0.5 rounded-full border border-white/15 text-neutral-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            </HoverStack>
          );
        })}
      </div>
    </section>
  );
}
