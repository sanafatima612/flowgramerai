"use client";
import { useEffect, useRef } from "react";

export default function MouseGlowSection() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const el = glowRef.current;
      if (!el) return;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative h-[80vh] bg-black overflow-hidden">
      <div ref={glowRef} className="cursor-glow" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none px-4 text-center">
        <p className="text-blue-400 font-semibold text-xs md:text-sm mb-5">
          WHAT GUIDES EFFECTIVESOFT'S VISION?
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl mb-4 pointer-events-auto">
          Focused on what matters, driven by what's next
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl pointer-events-auto">
          We contribute to the transformation of the world through impactful digital solutions, ranging from AI integration to custom software development services.
        </p>
      </div>
    </section>
  );
}
