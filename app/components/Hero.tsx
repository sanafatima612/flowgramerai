"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export const Hero: React.FC = () => {
  const texts: string[] = [
    "INTELLIGENT AI SOLUTIONS FOR MODERN BUSINESS",
    "AUTOMATE WORKFLOWS, AMPLIFY RESULTS",
    "DATA-DRIVEN INSIGHTS, REAL-WORLD IMPACT",
  ];

  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative pt-32 pb-20 bg-black overflow-hidden h-screen ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      >
        <source src="/main-video-mp4.mp4" type="video/mp4" />
      </video>

      <div className="w-10/12 md:w-8/12 flex justify-center relative z-10 mx-auto h-full">
        <div className="gap-6 flex flex-col justify-center w-full h-5/6">
          <p className="text-blue-400 text-lg font-medium tracking-wide">
            Welcome to FlowGramer AI
          </p>
          <h1 className="font-pt text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight min-h-24">
            <span
              className={`block text-blue-300 transition-all duration-500 ${
                fade ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
            >
              {texts[index]}
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            We build intelligent systems that transform how businesses operate. From AI-powered automation to custom software solutions, we help you work smarter and scale faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/contact"
              className="font-serif px-10 py-3 bg-blue-500 hover:bg-blue-700 text-white text-center transition-all duration-500"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="font-serif px-10 py-3 border border-white/30 hover:bg-white/10 text-white text-center transition-all duration-500"
            >
              Our Services
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <div className="text-4xl font-bold text-blue-300">50+</div>
              <div className="text-gray-300 mt-1">AI Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300">95%</div>
              <div className="text-gray-300 mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300">24/7</div>
              <div className="text-gray-300 mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
