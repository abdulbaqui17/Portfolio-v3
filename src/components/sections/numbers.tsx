export function Numbers() {
  return (
    <section className="px-6 md:px-10 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/15">
        {[
          ["9+", "Supabase PRs"],
          ["230+", "Outreach drafts"],
          ["10K+", "Audience reach"],
          ["~60%", "Latency cut"],
        ].map(([v, k]) => (
          <div key={k} className="bg-neutral-950/80 p-8 backdrop-blur-sm">
            <div className="font-light leading-none tracking-tighter mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              <span
                style={{
                  background: "linear-gradient(135deg, #fff, #FF6B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {v}
              </span>
            </div>
            <div className="font-mono text-[14px] text-neutral-300 uppercase tracking-widest">{k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
