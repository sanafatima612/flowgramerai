"use client";
import useInViewAnimation from "./useInViewAnimation";

export default function FadeSlideIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 
        ${
          inView
            ? "opacity-100 translate-x-0 ease-in"
            : "opacity-0 -translate-x-10 ease-out"
        }
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
