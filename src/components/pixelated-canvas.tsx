"use client";
import { useEffect, useRef, type CSSProperties } from "react";

type Props = {
  src: string;
  width?: number;
  height?: number;
  cellSize?: number;
  dotScale?: number;
  shape?: "circle" | "square";
  backgroundColor?: string;
  grayscale?: boolean;
  className?: string;
  style?: CSSProperties;
  responsive?: boolean;
  dropoutStrength?: number;
  interactive?: boolean;
  distortionStrength?: number;
  distortionRadius?: number;
  distortionMode?: "repel" | "attract" | "swirl";
  followSpeed?: number;
  sampleAverage?: boolean;
  tintColor?: string;
  tintStrength?: number;
  maxFps?: number;
  objectFit?: "cover" | "contain" | "fill" | "none";
  jitterStrength?: number;
  jitterSpeed?: number;
  fadeOnLeave?: boolean;
  fadeSpeed?: number;
};

export function PixelatedCanvas({
  src,
  width = 400,
  height = 500,
  cellSize = 3,
  dotScale = 0.9,
  shape = "square",
  backgroundColor = "#000000",
  grayscale = false,
  className,
  style,
  responsive = false,
  dropoutStrength = 0.4,
  interactive = true,
  distortionStrength = 3,
  distortionRadius = 80,
  distortionMode = "swirl",
  followSpeed = 0.2,
  sampleAverage = true,
  tintColor = "#FFFFFF",
  tintStrength = 0.2,
  maxFps = 60,
  objectFit = "cover",
  jitterStrength = 4,
  jitterSpeed = 4,
  fadeOnLeave = true,
  fadeSpeed = 0.1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = width;
    const h = height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const hex = (c: string): [number, number, number] => {
      const m = /^#?([0-9a-f]{3,6})$/i.exec(c.trim());
      if (!m) return [0, 0, 0];
      let s = m[1];
      if (s.length === 3) s = s.split("").map((ch) => ch + ch).join("");
      const v = parseInt(s, 16);
      return [(v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
    };
    const [bgR, bgG, bgB] = hex(backgroundColor);
    const [tR, tG, tB] = hex(tintColor);
    const bgLum = 0.299 * bgR + 0.587 * bgG + 0.114 * bgB;

    type Dot = { x: number; y: number; r: number; g: number; b: number };
    let dots: Dot[] = [];

    const buildDots = (img: HTMLImageElement) => {
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      octx.fillStyle = backgroundColor;
      octx.fillRect(0, 0, w, h);

      const ir = img.width / img.height;
      const cr = w / h;
      let dx = 0;
      let dy = 0;
      let dw = w;
      let dh = h;
      if (objectFit === "cover") {
        if (ir > cr) {
          dh = h;
          dw = h * ir;
          dx = (w - dw) / 2;
        } else {
          dw = w;
          dh = w / ir;
          dy = (h - dh) / 2;
        }
      } else if (objectFit === "contain") {
        if (ir > cr) {
          dw = w;
          dh = w / ir;
          dy = (h - dh) / 2;
        } else {
          dh = h;
          dw = h * ir;
          dx = (w - dw) / 2;
        }
      } else if (objectFit === "none") {
        dw = img.width;
        dh = img.height;
        dx = (w - dw) / 2;
        dy = (h - dh) / 2;
      }
      octx.drawImage(img, dx, dy, dw, dh);

      let data: Uint8ClampedArray;
      try {
        data = octx.getImageData(0, 0, w, h).data;
      } catch {
        return;
      }
      const newDots: Dot[] = [];

      for (let y = Math.floor(cellSize / 2); y < h; y += cellSize) {
        for (let x = Math.floor(cellSize / 2); x < w; x += cellSize) {
          let r = 0;
          let g = 0;
          let b = 0;
          if (sampleAverage) {
            let count = 0;
            for (let oy = -1; oy <= 1; oy++) {
              for (let ox = -1; ox <= 1; ox++) {
                const sx = x + ox;
                const sy = y + oy;
                if (sx < 0 || sx >= w || sy < 0 || sy >= h) continue;
                const i = (sy * w + sx) * 4;
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
                count++;
              }
            }
            if (count === 0) continue;
            r /= count;
            g /= count;
            b /= count;
          } else {
            const i = (y * w + x) * 4;
            r = data[i];
            g = data[i + 1];
            b = data[i + 2];
          }

          if (grayscale) {
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            r = g = b = lum;
          }
          r = r * (1 - tintStrength) + tR * tintStrength;
          g = g * (1 - tintStrength) + tG * tintStrength;
          b = b * (1 - tintStrength) + tB * tintStrength;

          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if (Math.abs(lum - bgLum) < dropoutStrength * 128) continue;

          newDots.push({ x, y, r, g, b });
        }
      }
      dots = newDots;
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    let imgLoaded = false;
    img.onload = () => {
      imgLoaded = true;
      buildDots(img);
    };
    img.src = src;

    const pointer = { x: -9999, y: -9999, active: 0 };
    const target = { x: -9999, y: -9999, active: 0 };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width) * w;
      target.y = ((e.clientY - rect.top) / rect.height) * h;
      target.active = 1;
    };
    const onLeave = () => {
      target.active = 0;
    };

    if (interactive) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
    }

    const dotSize = cellSize * dotScale;
    const halfDot = dotSize / 2;
    const minFrameTime = 1000 / Math.max(1, maxFps);
    const t0 = performance.now();
    let lastFrame = 0;
    let raf = 0;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - lastFrame < minFrameTime) return;
      lastFrame = now;

      pointer.x += (target.x - pointer.x) * followSpeed;
      pointer.y += (target.y - pointer.y) * followSpeed;
      const fade = target.active === 0 && fadeOnLeave ? fadeSpeed : Math.max(followSpeed, 0.5);
      pointer.active += (target.active - pointer.active) * fade;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, w, h);

      if (!imgLoaded) return;

      const t = (now - t0) / 1000;
      const radius2 = distortionRadius * distortionRadius;
      const px = pointer.x;
      const py = pointer.y;
      const active = pointer.active;
      const interactNow = interactive && active > 0.001;

      for (let n = 0; n < dots.length; n++) {
        const d = dots[n];
        let dxp = d.x;
        let dyp = d.y;
        if (interactNow) {
          const ox = d.x - px;
          const oy = d.y - py;
          const dist2 = ox * ox + oy * oy;
          if (dist2 < radius2) {
            const dist = Math.sqrt(dist2) || 1;
            const fall = (1 - dist / distortionRadius) * active;
            const ux = ox / dist;
            const uy = oy / dist;
            const k = distortionStrength * fall * 6;
            if (distortionMode === "repel") {
              dxp += ux * k;
              dyp += uy * k;
            } else if (distortionMode === "attract") {
              dxp -= ux * k;
              dyp -= uy * k;
            } else {
              dxp += -uy * k;
              dyp += ux * k;
            }
            dxp += Math.sin(t * jitterSpeed + d.x * 0.13) * jitterStrength * fall;
            dyp += Math.cos(t * jitterSpeed + d.y * 0.13) * jitterStrength * fall;
          }
        }
        ctx.fillStyle = `rgb(${d.r | 0},${d.g | 0},${d.b | 0})`;
        if (shape === "circle") {
          ctx.beginPath();
          ctx.arc(dxp, dyp, halfDot, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(dxp - halfDot, dyp - halfDot, dotSize, dotSize);
        }
      }
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => {
      if (img.complete && imgLoaded) buildDots(img);
    };
    if (responsive) window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      if (interactive) {
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerleave", onLeave);
      }
      if (responsive) window.removeEventListener("resize", onResize);
    };
  }, [
    src,
    width,
    height,
    cellSize,
    dotScale,
    shape,
    backgroundColor,
    grayscale,
    responsive,
    dropoutStrength,
    interactive,
    distortionStrength,
    distortionRadius,
    distortionMode,
    followSpeed,
    sampleAverage,
    tintColor,
    tintStrength,
    maxFps,
    objectFit,
    jitterStrength,
    jitterSpeed,
    fadeOnLeave,
    fadeSpeed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: `${width}px`, height: `${height}px`, display: "block", ...style }}
    />
  );
}
