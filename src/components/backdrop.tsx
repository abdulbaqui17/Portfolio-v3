"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [, setCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const makeField = (count: number, spread: number, size: number, warmRatio: number) => {
      const g = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
        const warm = Math.random() < warmRatio;
        col[i * 3] = warm ? 1.0 : 0.25;
        col[i * 3 + 1] = warm ? 0.45 : 0.55;
        col[i * 3 + 2] = warm ? 0.2 : 1.0;
      }
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      g.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const m = new THREE.PointsMaterial({
        size,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      return new THREE.Points(g, m);
    };

    const near = makeField(1500, 10, 0.025, 0.55);
    const far = makeField(2500, 30, 0.015, 0.4);
    scene.add(near);
    scene.add(far);

    camera.position.z = 5;

    let mx = 0;
    let my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let frame = 0;
    const animate = () => {
      near.rotation.x += 0.0005;
      near.rotation.y += 0.0008;
      far.rotation.x += 0.0002;
      far.rotation.y += 0.0003;
      near.rotation.y += (mx * 0.1 - near.rotation.y + near.rotation.y) * 0.001;
      camera.position.x += (mx * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (-my * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 107, 44, 0.18), transparent 45%)`,
          transition: "background 0.3s ease",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)",
        }}
      />
    </>
  );
}
