import { ArrowRight, Mail, Terminal } from "lucide-react";
import { Github, Instagram, Linkedin, Youtube } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-32 max-w-5xl mx-auto text-center">
      <Reveal>
        <div className="font-mono text-base text-orange-400 tracking-[0.3em] mb-10">— LET&apos;S TALK —</div>
        <h2 className="font-light leading-[0.95] tracking-tighter mb-12" style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}>
          Hire the person
          <br />
          <span
            className="italic inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #FF6B2C, #F2B56A, #FF6B2C)",
              backgroundSize: "200% 100%",
              animation: "shimmer 4s linear infinite",
            }}
          >
            before
          </span>{" "}
          the résumé does.
        </h2>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="mailto:abdulbaquiiit7@gmail.com"
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden transition-transform hover:scale-[1.02]"
          style={{
            background: "linear-gradient(90deg, #FF6B2C, #F2B56A, #FF6B2C)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
        >
          <Mail size={18} className="text-black" />
          <span className="text-black font-medium text-xl">Email me</span>
          <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="text-lg text-neutral-300 font-mono mb-12">abdulbaquiiit7@gmail.com</div>

      <div className="flex flex-wrap justify-center gap-6 font-mono text-base text-neutral-300">
        <a
          href="https://github.com/abdulbaqui17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
        >
          <Github size={12} /> abdulbaqui17
        </a>
        <a
          href="https://linkedin.com/in/abdul-baqui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
        >
          <Linkedin size={12} /> abdul-baqui
        </a>
        <a
          href="https://twitter.com/abdul_baqui_10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
        >
          <Terminal size={12} /> @abdul_baqui_10
        </a>
        <a
          href="https://instagram.com/abdul_intern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
        >
          <Instagram size={12} /> @abdul_intern
        </a>
        <a
          href="https://www.youtube.com/@abdulintern"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
        >
          <Youtube size={12} /> @abdulintern
        </a>
      </div>
    </section>
  );
}
