import { ArrowUpRight } from "lucide-react";
import { Instagram } from "@/components/brand-icons";
import { CometCard } from "@/components/ui/comet-card";
import { Reveal } from "@/components/reveal";

const reels = [
  "https://www.instagram.com/reel/DXQcaVsD4MJ/",
  "https://www.instagram.com/reel/DXTzvyGD2jv/",
  "https://www.instagram.com/reel/DNiKGwYs1_q/",
];

export function Reels() {
  return (
    <section id="reels" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 mb-10 items-baseline pb-6 border-b border-white/15">
        <div className="font-mono text-base text-orange-400 tracking-widest">01 / REELS</div>
        <h2 className="font-light tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Building <span className="italic" style={{ color: "#F2B56A" }}>in public</span>
        </h2>
      </Reveal>

      <p className="text-neutral-200 max-w-2xl mb-10 leading-relaxed text-xl font-medium">
        I build the product — and I bring the audience that finds it. Launches, demos, and behind-the-scenes on{" "}
        <a
          href="https://instagram.com/abdul_intern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 hover:text-orange-400 underline-offset-4 hover:underline"
        >
          @abdul_intern
        </a>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reels.map((url) => {
          const id = url.match(/reel\/([^/]+)/)?.[1] ?? "reel";
          const embedUrl = `${url}embed`;
          return (
            <CometCard key={url} className="h-full">
              <div className="rounded-2xl border border-white/15 bg-neutral-950/60 overflow-hidden flex flex-col">
                <div className="relative bg-white" style={{ aspectRatio: "9 / 16" }}>
                  <iframe
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                    loading="lazy"
                    title={`Instagram reel ${id}`}
                  />
                </div>
                <div className="p-4 flex justify-between items-center border-t border-white/15">
                  <div className="flex items-center gap-2">
                    <Instagram size={14} className="text-orange-300" />
                    <span className="font-mono text-[14px] text-orange-300 uppercase tracking-widest">
                      @abdul_intern
                    </span>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-mono text-neutral-400 hover:text-orange-400 flex items-center gap-1 transition-colors"
                  >
                    open <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </CometCard>
          );
        })}
      </div>
    </section>
  );
}
