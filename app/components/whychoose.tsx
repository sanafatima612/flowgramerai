"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/Meta_Platforms_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  // Smooth spring animations for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Blur effect for depth
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/tkxel-hero-animation-cropped.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <motion.h2
          style={{ color: textColor }}
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Split text animation - 2025 micro-interaction */}
          {"WHY CHOOSE FLOWGRAMER AI FOR YOUR BUSINESS?".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          style={{ color: textColor }}
          className="text-xl max-w-3xl mx-auto leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          We deliver intelligent automation solutions by understanding your unique
          business challenges and applying cutting-edge AI technology to create
          measurable impact.
        </motion.p>
      </div>

      {/* Enhanced brand slider with glassmorphism - 2025 trend */}
      <div className="relative w-full py-5">
        {/* Glassmorphic background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/40 backdrop-blur-md" />
        
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 relative"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...brands, ...brands, ...brands].map((logo, idx) => (
            <motion.div
              key={idx}
              className="shrink-0 w-32 h-16 flex items-center justify-center group relative"
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0.6 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.15,
                rotateY: 5,
                z: 50,
              }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Glow effect on hover - 2025 trend */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/30 to-blue-500/0 rounded-lg blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glassmorphic card */}
              <motion.div 
                className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-2xl"
                whileHover={{ 
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                }}
              >
                <img
                  src={logo}
                  alt={`Partner ${idx % brands.length}`}
                  className="max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Particle effect on hover */}
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, (Math.random() - 0.5) * 100],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
