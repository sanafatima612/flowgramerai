"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#1f2937", "#ffffff"]
  );

  const bgColor = useTransform(scrollYProgress, [0, 1], ["#7393B3", "#708090"]);

  const brands: string[] = [
    "/ters.png",
    "/D&J.png",
    "/ellis&cco.png",
    "/goodies.png",
    "/outfiters.png",
    "/lvi-info.png",
    "/mpower.png",
    "/NERF.png",
    "/rye-assic.png",
    "/saya.png",
    "/sirona.png",
    "/WealthWise.png",
    "/zero.png",
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="py-32 transition-colors duration-300 relative"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          style={{ color: textColor }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          WHY CHOOSE FLOWGRAMER AI FOR YOUR BUSINESS?
        </motion.h2>

        <motion.p
          style={{ color: textColor }}
          className="text-xl max-w-3xl mx-auto leading-relaxed mb-16"
        >
          We deliver intelligent automation solutions by understanding your unique
          business challenges and applying cutting-edge AI technology to create
          measurable impact.
        </motion.p>
      </div>

      <div className="overflow-hidden w-full py-5 bg-black/60">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...brands, ...brands, ...brands].map((logo, idx) => (
            <div key={idx} className="shrink-0 w-32 h-16 flex items-center grayscale hover:grayscale-0 justify-center group relative">
              <img
                src={logo}
                alt={`Partner ${idx % brands.length}`}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
