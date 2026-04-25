import Backdrop from "@/components/backdrop";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Now } from "@/components/sections/now";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { OSS } from "@/components/sections/oss";
import { Background } from "@/components/sections/background";
import { Currently } from "@/components/sections/currently";
import { Reels } from "@/components/sections/reels";
import { Numbers } from "@/components/sections/numbers";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-black text-neutral-100 overflow-x-hidden relative"
      style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}
    >
      <Backdrop />
      <div className="relative" style={{ zIndex: 10 }}>
        <Nav />
        <Hero />
        <Reels />
        <Now />
        <Work />
        <Experience />
        <OSS />
        <Background />
        <Currently />
        <Numbers />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
