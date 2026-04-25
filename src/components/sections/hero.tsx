"use client";
import { ArrowRight, Calendar, GraduationCap, MapPin, Terminal, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { useIstClock } from "@/hooks/use-ist-clock";
import { PixelatedCanvas } from "@/components/pixelated-canvas";
import { TechSticker } from "@/components/tech-sticker";
import { Github, Instagram, Linkedin, Youtube } from "@/components/brand-icons";

const socials = [
  { label: "abdulbaqui17", href: "https://github.com/abdulbaqui17", Icon: Github },
  { label: "abdul-baqui", href: "https://linkedin.com/in/abdul-baqui", Icon: Linkedin },
  { label: "@abdul_baqui_10", href: "https://twitter.com/abdul_baqui_10", Icon: Terminal },
  { label: "@abdul_intern", href: "https://instagram.com/abdul_intern", Icon: Instagram },
  { label: "@abdulintern", href: "https://www.youtube.com/@abdulintern", Icon: Youtube },
];

const stack: { name: string }[] = [
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Next.js 14" },
  { name: "React" },
  { name: "Rust" },
  { name: "Solana / Anchor" },
  { name: "PostgreSQL" },
  { name: "Redis" },
  { name: "Kafka" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "WebSockets" },
  { name: "TimescaleDB" },
  { name: "BullMQ" },
];

export function Hero() {
  const time = useIstClock();

  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 max-w-7xl mx-auto relative">
      <div className="flex flex-wrap gap-3 md:gap-4 mb-6 items-center perspective-[1000px]">
        {socials.map(({ label, href, Icon }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 0, rotateX: 0, rotateY: 0 }}
            animate={{
              y: [0, -8, 0, 4, 0],
              rotateX: [6, -4, 6],
              rotateY: [-8, 8, -8],
              boxShadow: [
                "0 0 0px rgba(255,107,44,0.0), 0 8px 18px rgba(0,0,0,0.35)",
                "0 0 22px rgba(255,107,44,0.35), 0 14px 28px rgba(0,0,0,0.45)",
                "0 0 0px rgba(255,107,44,0.0), 0 8px 18px rgba(0,0,0,0.35)",
              ],
            }}
            transition={{
              duration: 5 + i * 0.4,
              delay: i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              y: -10,
              rotateX: 0,
              rotateY: 0,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.96 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 bg-neutral-950/60 text-lg md:text-xl font-mono text-neutral-100 hover:border-orange-500/50 hover:text-orange-300 will-change-transform"
          >
            <Icon size={20} className="text-neutral-200 group-hover:text-orange-400 transition-colors" />
            {label}
          </motion.a>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 md:gap-6 text-base font-mono text-neutral-300 mb-8 tracking-wider items-center">
        <span className="flex items-center gap-1.5"><MapPin size={11} /> HYDERABAD · IN</span>
        <span className="flex items-center gap-1.5"><GraduationCap size={11} /> B.TECH CS · 2026</span>
        <span className="flex items-center gap-1.5"><Calendar size={11} /> LOCAL TIME {time} IST</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center mb-16">
        <div className="order-2 lg:order-1">
          <h1 className="font-bold leading-[0.85] tracking-tighter mb-8" style={{ fontSize: "clamp(2.75rem, 9vw, 7rem)" }}>
            <span className="inline-block relative">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(110deg, #fff 40%, #FFB547 50%, #FF6B2C 55%, #fff 65%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                Founding
              </span>
            </span>
            <br />
            <span
              className="italic font-light"
              style={{
                background: "linear-gradient(135deg, #FF6B2C, #F2B56A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engineer.
            </span>
          </h1>

          <p className="max-w-2xl text-base md:text-xl text-neutral-100 leading-relaxed mb-10 font-medium">
            Full-stack TypeScript, Rust on Solana, AI that runs offline. I build the product — and I bring the audience
            that finds it. Looking for an early team where the roadmap is short and the stakes are real.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="mailto:abdulbaquiiit7@gmail.com"
              className="group relative overflow-hidden rounded-full px-7 py-3.5 bg-orange-500 text-black font-medium text-lg transition-all hover:scale-[1.02]"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}
                />
              </span>
              <span className="relative flex items-center gap-2">
                Email me <ArrowRight size={16} />
              </span>
            </a>
            <a
              href="#work"
              className="group rounded-full px-7 py-3.5 border border-white/15 text-lg text-neutral-200 hover:border-white/50 transition-all flex items-center gap-2"
            >
              See the work <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start gap-6">
          <div className="relative">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-orange-500/40 bg-black relative">
              <PixelatedCanvas
                src="https://avatars.githubusercontent.com/u/150225239?v=4"
                width={448}
                height={448}
                cellSize={4}
                dotScale={0.9}
                shape="square"
                backgroundColor="#000000"
                dropoutStrength={0.35}
                distortionStrength={6}
                distortionRadius={120}
                distortionMode="swirl"
                followSpeed={0.22}
                tintColor="#FF6B2C"
                tintStrength={0.08}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 border-[3px] border-black flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-xl text-neutral-200 mb-1">Hi, I&apos;m</div>
            <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
              <span className="text-2xl md:text-3xl text-neutral-100">Abdul Baqui</span>
              <button
                type="button"
                className="p-1.5 rounded-full border border-white/15 hover:border-orange-500/40 transition-colors text-neutral-300 hover:text-orange-400"
                title="Pronounced: Ab-dul Bah-kee"
              >
                <Volume2 size={14} />
              </button>
            </div>
            <div className="text-base text-neutral-300 italic mt-1">(Ab-dul Bah-kee)</div>
          </div>
        </div>
      </div>

      <div
        className="mt-20 border-y border-white/15 py-4 overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex gap-10 whitespace-nowrap font-mono text-lg text-neutral-300"
          style={{ animation: "marquee 40s linear infinite", width: "max-content" }}
        >
          {[...stack, ...stack].map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <TechSticker name={item.name} size={26} />
              <span>{item.name}</span>
              <span className="text-orange-500 text-[12px]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
