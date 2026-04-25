import { Brain } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Now() {
  return (
    <section id="now" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 mb-10 items-baseline pb-6 border-b border-white/15">
        <div className="font-mono text-base text-orange-400 tracking-widest">02 / NOW</div>
        <h2 className="font-light tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Currently <span className="italic" style={{ color: "#F2B56A" }}>building</span>
        </h2>
      </Reveal>

      <div
        className="relative rounded-2xl p-px overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(255,107,44,0.5), rgba(255,255,255,0.05), rgba(255,107,44,0.5))" }}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div
            className="absolute -inset-px rounded-2xl"
            style={{
              background: "conic-gradient(from 0deg, transparent 70%, rgba(255, 107, 44, 0.8) 85%, transparent 100%)",
              animation: "spin 4s linear infinite",
            }}
          />
        </div>
        <div className="relative rounded-2xl bg-neutral-950 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <Brain size={18} className="text-orange-400" />
            <span className="font-mono text-[15px] tracking-widest text-orange-400 uppercase">In progress</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-normal tracking-tight mb-4 leading-[1.05]">
            JARVIS — a voice agent that doesn&apos;t phone home.
          </h3>
          <p className="text-neutral-200 max-w-2xl leading-relaxed mb-8 font-medium">
            Hybrid local-first personal assistant on M1. Migrating from a fully cloud-dependent pipeline (OpenAI) to a
            layered stack: Ollama llama3.2:3b for inference, a 50+ command shortcut engine, AppleScript for macOS
            control, GPT-4o-mini only as fallback. Target: ~80% of commands handled at zero cost, zero network.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/15">
            {[
              ["Inference", "llama3.2:3b · local"],
              ["Runtime", "Python · AppleScript"],
              ["Offline ratio", "~80% target"],
              ["Device", "MacBook M1"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[14px] text-neutral-300 uppercase tracking-widest mb-1">{k}</div>
                <div className="font-mono text-lg text-neutral-200">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
