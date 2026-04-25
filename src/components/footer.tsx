"use client";
import { Globe2 } from "lucide-react";
import { useIstClock } from "@/hooks/use-ist-clock";

export default function Footer() {
  const time = useIstClock();
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-white/15 flex flex-wrap justify-between gap-3 items-center font-mono text-[15px] text-neutral-400 max-w-7xl mx-auto">
      <div>© 2026 Abdul Baqui · Built in Hyderabad · {time} IST</div>
      <div className="flex items-center gap-2">
        <Globe2 size={11} /> Three.js + React + Tailwind
      </div>
    </footer>
  );
}
