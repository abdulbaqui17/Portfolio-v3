"use client";

const SLUG_MAP: Record<string, string> = {
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Python": "python",
  "Rust": "rust",
  "Node.js": "nodedotjs",
  "Node": "nodedotjs",

  "Next.js": "nextdotjs",
  "Next.js 14": "nextdotjs",
  "React": "react",
  "FastAPI": "fastapi",

  "PostgreSQL": "postgresql",
  "Postgres": "postgresql",
  "Redis": "redis",
  "Timescale": "timescale",
  "TimescaleDB": "timescale",
  "MongoDB": "mongodb",

  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "AWS": "amazonwebservices",
  "Vercel": "vercel",
  "Kafka": "apachekafka",

  "GPT-4": "openai",
  "OpenAI": "openai",
  "Ollama": "ollama",
  "PyTorch": "pytorch",

  "Puppeteer": "puppeteer",
  "WebContainers": "stackblitz",
  "WebSockets": "socketdotio",
  "BullMQ": "redis",
  "WS": "socketdotio",

  "Solana": "solana",
  "Solana / Anchor": "solana",
  "Anchor": "solana",

  "Supabase": "supabase",
  "macOS": "apple",
  "AppleScript": "apple",
  "Apple": "apple",

  "YouTube": "youtube",
  "GitHub": "github",
  "Instagram": "instagram",
  "LinkedIn": "linkedin",
  "X": "x",
  "Twitter": "x",
  "Podcast": "applepodcasts",

  "supabase/supabase": "supabase",
  "calcom/cal.com": "caldotcom",
  "Cal.com": "caldotcom",
};

type Props = {
  name: string;
  size?: number;
  className?: string;
};

export function TechSticker({ name, size = 14, className }: Props) {
  const slug = SLUG_MAP[name];
  if (!slug) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 inline-block ${className ?? ""}`}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
