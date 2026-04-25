import { GraduationCap, Trophy } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Background() {
  return (
    <section id="education" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 mb-10 items-baseline pb-6 border-b border-white/15">
        <div className="font-mono text-base text-orange-400 tracking-widest">06 / BACKGROUND</div>
        <h2 className="font-light tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          School &amp; <span className="italic" style={{ color: "#F2B56A" }}>signals</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/15 bg-neutral-950/60 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={16} className="text-orange-400" />
            <span className="font-mono text-[14px] text-orange-400 uppercase tracking-widest">Education</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-normal tracking-tight leading-tight mb-2">B.Tech, Computer Science</h3>
          <div className="text-lg text-neutral-200 mb-1">Malla Reddy College of Engineering and Technology</div>
          <div className="text-base font-mono text-neutral-300 mb-4">2022 — 2026 · Hyderabad, IN</div>
          <p className="text-lg text-neutral-200 leading-relaxed font-medium">
            Graduating summer 2026. Most of what I actually ship was learned by building, shipping, and reading other
            people&apos;s code — not from lectures. That said, the fundamentals matter, and I care about them.
          </p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-neutral-950/60 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={16} className="text-orange-400" />
            <span className="font-mono text-[14px] text-orange-400 uppercase tracking-widest">Signals</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-normal tracking-tight leading-tight mb-4">What I can point to</h3>
          <ul className="space-y-3 text-lg">
            {[
              ["9+", "merged / in-flight PRs to supabase/supabase"],
              ["10K+", "combined audience on @abdul_intern (IG + YT)"],
              ["230+", "personalized founder outreach drafts sent"],
              ["6+", "production-grade side projects shipped solo"],
            ].map(([n, t]) => (
              <li key={n} className="flex gap-4">
                <span className="font-mono text-orange-400 w-10 shrink-0 font-medium">{n}</span>
                <span className="text-neutral-100 font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
