import { BookOpen, Eye, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TechSticker } from "@/components/tech-sticker";

const currentlyReading = [
  { title: "The Mom Test", author: "Rob Fitzpatrick", tag: "founder interviewing" },
  { title: "Zero to One", author: "Peter Thiel", tag: "zero-to-one thinking" },
  { title: "Masnavi", author: "Rumi", tag: "slow-burn wisdom" },
];

const currentlyWatching = [
  { title: "ThePrimeagen", channel: "YouTube", tag: "TS / Rust / brain rot" },
  { title: "Fireship", channel: "YouTube", tag: "ship fast / laugh" },
  { title: "a16z Podcast", channel: "Podcast", tag: "infra + AI bets" },
];

const currentlyBuilding = [
  { title: "JARVIS", tag: "local-first voice agent" },
  { title: "this portfolio", tag: "deploying this week" },
  { title: "more OSS", tag: "supabase queue deep-dive" },
];

export function Currently() {
  return (
    <section id="currently" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 mb-10 items-baseline pb-6 border-b border-white/15">
        <div className="font-mono text-base text-orange-400 tracking-widest">07 / CURRENTLY</div>
        <h2 className="font-light tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          What I&apos;m <span className="italic" style={{ color: "#F2B56A" }}>into</span> right now
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/15 bg-neutral-950/60 p-6 md:p-7">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={15} className="text-orange-400" />
            <span className="font-mono text-[14px] text-orange-400 uppercase tracking-widest">Reading</span>
          </div>
          <ul className="space-y-4">
            {currentlyReading.map((b, i) => (
              <li key={i}>
                <div className="text-lg text-neutral-200 leading-snug font-medium">{b.title}</div>
                <div className="text-base text-neutral-300 italic">{b.author}</div>
                <div className="text-[14px] font-mono text-orange-300 mt-1 uppercase tracking-widest">— {b.tag}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-neutral-950/60 p-6 md:p-7">
          <div className="flex items-center gap-2 mb-5">
            <Eye size={15} className="text-orange-400" />
            <span className="font-mono text-[14px] text-orange-400 uppercase tracking-widest">Watching</span>
          </div>
          <ul className="space-y-4">
            {currentlyWatching.map((w, i) => (
              <li key={i}>
                <div className="text-lg text-neutral-200 leading-snug font-medium">{w.title}</div>
                <div className="text-base text-neutral-300 italic flex items-center gap-2">
                  <TechSticker name={w.channel} size={20} />
                  {w.channel}
                </div>
                <div className="text-[14px] font-mono text-orange-300 mt-1 uppercase tracking-widest">— {w.tag}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-neutral-950/60 p-6 md:p-7">
          <div className="flex items-center gap-2 mb-5">
            <Wrench size={15} className="text-orange-400" />
            <span className="font-mono text-[14px] text-orange-400 uppercase tracking-widest">Building</span>
          </div>
          <ul className="space-y-4">
            {currentlyBuilding.map((b, i) => (
              <li key={i}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shrink-0" />
                  <div className="text-lg text-neutral-200 leading-snug font-medium">{b.title}</div>
                </div>
                <div className="text-[14px] font-mono text-orange-300 mt-1 ml-3.5 uppercase tracking-widest">— {b.tag}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
