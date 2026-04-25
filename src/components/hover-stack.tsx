"use client";
import { useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  tilt?: number;
  scale?: number;
  perspective?: number;
};

export function HoverStack({
  children,
  className,
  style,
  tilt = 18,
  scale = 1.04,
  perspective = 1200,
}: Props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={className}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
        transform: hover
          ? `rotateY(0deg) scale(${scale})`
          : `rotateY(${tilt}deg)`,
        transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
        ...style,
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
}
