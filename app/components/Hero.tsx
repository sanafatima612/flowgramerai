"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

type Slide = {
  id: number;
  title: string;
  description: string;
  variant: "light" | "blue" | "soft";
};

const slides: Slide[] = [
  {
    id: 1,
    title: "INTELLIGENT AI SOLUTIONS FOR MODERN BUSINESS",
    description:
      "We build AI systems that automate workflows, amplify your teams, and unlock new revenue opportunities across the business.",
    variant: "light",
  },
  {
    id: 2,
    title: "AUTOMATE WORKFLOWS, AMPLIFY RESULTS",
    description:
      "From discovery to production, we design and ship production-grade AI that integrates with your existing tools and data.",
    variant: "blue",
  },
  {
    id: 3,
    title: "DATA-DRIVEN INSIGHTS, REAL-WORLD IMPACT",
    description:
      "Turn siloed data into always-on assistants and decision engines that understand your customers, processes, and KPIs.",
    variant: "soft",
  },
];

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          const baseBackground =
            slide.variant === "light"
              ? "bg-gradient-to-br from-slate-50 to-slate-200"
              : slide.variant === "blue"
              ? "bg-gradient-to-br from-blue-900 to-blue-600"
              : "bg-gradient-to-br from-white to-slate-100";

          const textColor =
            slide.variant === "blue" ? "text-white" : "text-black";

          const subTextColor =
            slide.variant === "blue" ? "text-slate-100" : "text-slate-700";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${baseBackground} ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.id === 1 && (
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source
                      src="/tkxel-hero-animation-cropped.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-90"
                  >
                    <source
                      src="/tkxel-hero-animation-cropped.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
              {slide.id === 3 && (
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source
                      src="/Abstract_Blue_Gradient_Video_Generation.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />

              <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-16">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/30 max-w-max">
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-red-400" />
                  <span className="uppercase tracking-wide">
                    AI For Real-World Businesses
                  </span>
                </div>

                <h1
                  className={`max-w-3xl text-5xl font-bold leading-tight md:text-6xl ${textColor}`}
                >
                  {slide.title}
                </h1>

                <p
                  className={`mt-6 max-w-2xl text-lg md:text-xl ${subTextColor}`}
                >
                  {slide.description}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-full bg-blue-600 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue-700 sm:w-auto"
                  >
                    Book Strategy Call
                  </Link>
                  <Link
                    href="/services"
                    className="flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:w-auto"
                  >
                    Explore AI Services
                  </Link>
                </div>

                <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 text-sm text-white">
                  <div>
                    <div className="text-3xl font-bold text-blue-300">50+</div>
                    <div className="mt-1 text-slate-100">AI Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-300">95%</div>
                    <div className="mt-1 text-slate-100">
                      Client Satisfaction Across Engagements
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-300">24/7</div>
                    <div className="mt-1 text-slate-100">Global Support Coverage</div>
                  </div>
                </div>
              </div>

              <div className="absolute right-20 top-1/2 z-20 w-80 -translate-y-1/2 rounded-2xl bg-blue-900 shadow-2xl ring-1 ring-blue-300/40">
                <img
                  src="/lecture.jpeg"
                  alt="AI Webinar"
                  className="h-auto w-full rounded-t-2xl object-cover"
                />
                <div className="space-y-4 p-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-white" />
                    Live Webinar
                  </div>
                  <h3 className="text-xl font-semibold leading-snug">
                    Building production-ready AI systems for complex enterprises
                  </h3>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-slate-100"
                  >
                    Save My Spot
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`h-2 w-6 rounded-full border border-white/60 transition-all ${
              index === activeIndex ? "bg-white w-10" : "bg-white/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
