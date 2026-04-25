export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-6 md:px-10 py-4 flex justify-between items-center backdrop-blur-xl bg-black/40 border-b border-white/15 z-50">
      <a href="#top" className="flex items-center gap-2 text-lg font-mono tracking-tight">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        abdul_baqui
      </a>
      <div className="hidden md:flex gap-8 text-base text-neutral-200 font-mono">
        <a href="#work" className="hover:text-orange-400 transition-colors">work</a>
        <a href="#experience" className="hover:text-orange-400 transition-colors">experience</a>
        <a href="#oss" className="hover:text-orange-400 transition-colors">open source</a>
        <a href="#currently" className="hover:text-orange-400 transition-colors">currently</a>
        <a href="#contact" className="hover:text-orange-400 transition-colors">contact</a>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span className="text-[15px] font-mono text-emerald-400">available</span>
      </div>
    </nav>
  );
}
