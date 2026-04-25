"use client";
import { useEffect, useRef, useState } from "react";

const themes = [
  { id: "default", label: "DEFAULT", swatch: "#FF6B2C" },
  { id: "logic", label: "LOGIC", swatch: "#3B82F6" },
  { id: "midnight", label: "MIDNIGHT", swatch: "#A78BFA" },
  { id: "weeknd", label: "THE WEEKND", swatch: "#EF4444" },
  { id: "radiohead", label: "RADIOHEAD", swatch: "#FB7185" },
] as const;

type ThemeId = (typeof themes)[number]["id"];

export function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ThemeId>("default");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as ThemeId | null) ?? "default";
    setActive(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (id: ThemeId) => {
    setActive(id);
    document.documentElement.dataset.theme = id;
    localStorage.setItem("theme", id);
  };

  const activeTheme = themes.find((t) => t.id === active) ?? themes[0];

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50 font-mono">
      {open ? (
        <div className="rounded-2xl border border-white/15 bg-neutral-950/95 backdrop-blur-xl p-5 w-72 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[11px] tracking-[0.3em] text-neutral-400">THEME</div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-neutral-500 hover:text-neutral-200 text-lg leading-none"
              aria-label="Close theme picker"
            >
              ×
            </button>
          </div>
          <div className="w-8 h-[2px] rounded-full mb-3" style={{ background: activeTheme.swatch }} />
          <div className="text-xl text-neutral-100 mb-4 tracking-wide">{activeTheme.label}</div>
          <div className="flex flex-wrap gap-2">
            {themes.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => select(t.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider border transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-white/15 text-neutral-300 hover:border-white/30 hover:text-neutral-100"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.swatch }} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-white/15 bg-neutral-950/80 backdrop-blur-xl px-4 py-2 text-[11px] tracking-[0.25em] text-neutral-200 hover:border-white/40 transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full" style={{ background: activeTheme.swatch }} />
          THEME
        </button>
      )}
    </div>
  );
}
