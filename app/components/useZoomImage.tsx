"use client";
import { useEffect, useRef, useState } from "react";

export const useScrollZoom = (minScale = 1, maxScale = 1.4) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(minScale);

  useEffect(() => {
    const updateZoom = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      // Progress: 0 → 1
      const progress = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);

      const newScale = minScale + (maxScale - minScale) * progress;
      setScale(newScale);
    };

    window.addEventListener("scroll", updateZoom);
    return () => window.removeEventListener("scroll", updateZoom);
  }, [minScale, maxScale]);

  return {
    ref,
    style: {
      transform: `scale(${scale})`,
      transition: "transform 0.1s linear",
    },
  };
};
