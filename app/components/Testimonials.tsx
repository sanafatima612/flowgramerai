"use client";
import { User2Icon, Quote } from "lucide-react";
import React, { useState, useRef } from "react";

interface Testimonial {
  text: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      text: "FlowGramer AI transformed our operations. Their AI automation solution reduced our processing time by 60% and allowed our team to focus on strategic work.",
      author: "Sarah Chen",
      position: "CTO",
      company: "TechVenture Inc.",
    },
    {
      text: "The custom software they built for us exceeded all expectations. It's intuitive, scalable, and has become the backbone of our business operations.",
      author: "Michael Rodriguez",
      position: "Operations Director",
      company: "Global Logistics Co.",
    },
    {
      text: "Working with FlowGramer AI was a game-changer. Their machine learning solution helped us predict customer behavior with remarkable accuracy.",
      author: "Emily Watson",
      position: "VP of Marketing",
      company: "Retail Solutions",
    },
    {
      text: "Their team's expertise in cloud architecture saved us significant infrastructure costs while improving performance. Highly professional and responsive.",
      author: "David Park",
      position: "Engineering Lead",
      company: "FinanceFlow",
    },
    {
      text: "The data analytics platform they developed gives us insights we never had before. It's completely changed how we make business decisions.",
      author: "Jennifer Adams",
      position: "CEO",
      company: "Healthcare Analytics",
    },
    {
      text: "From concept to deployment, the FlowGramer AI team delivered exceptional quality. Their attention to detail and technical expertise is outstanding.",
      author: "Robert Kim",
      position: "Product Manager",
      company: "StartupScale",
    },
  ];

  const handleScroll = (): void => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = "grabbing";
  };

  const handleMouseLeave = (): void => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;
    e.preventDefault();

    const container = scrollContainerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  const getProgressPercentage = (): number => {
    const container = scrollContainerRef.current;
    if (!container) return 0;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll === 0) return 0;

    return Math.min(100, (scrollPosition / maxScroll) * 100);
  };

  return (
    <div className="bg-gray-50 px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-blue-600 uppercase tracking-wider mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto px-2 pb-4 cursor-grab scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[350px] bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition shrink-0 border border-gray-100"
              >
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                
                <p className="text-gray-600 mb-8 min-h-32">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User2Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-sm text-gray-500">01</span>
          <div className="w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          <span className="text-sm text-gray-500">
            {testimonials.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
