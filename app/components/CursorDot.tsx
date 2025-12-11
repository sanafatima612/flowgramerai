"use client";
import { useEffect, useState } from "react";
import { useCursor } from "../hooks/CursorContext";

const CursorDot = () => {
  const { value } = useCursor();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [showBubble, setShowBubble] = useState(false);
  const [delayedText, setDelayedText] = useState<string | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    if (value) {
      setShowBubble(true);
      const textTimer = setTimeout(() => {
        setDelayedText(value);
      }, 120);

      return () => clearTimeout(textTimer);
    } else {
      setShowBubble(false);
      setDelayedText(null);
    }
  }, [value]);

  return (
    <div
      className={`
        fixed pointer-events-none z-[9999] 
        flex items-center justify-center
        rounded-full transition-all duration-300 ease-out
        ${
          showBubble
            ? "w-32 h-32 bg-transparent border-2 border-blue-700 text-white"
            : "w-2 h-2 bg-blue-500"
        }
      `}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    >
      {delayedText}
    </div>
  );
};

export default CursorDot;
