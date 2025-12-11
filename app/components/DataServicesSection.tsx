"use client";
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react'

export default function DataServicesSection() {
  const [expandedItem, setExpandedItem] = useState<number>(0);
  const [isExpended, setIsExpended] = useState<boolean>(false);

   const industries = [
  {
    id: 1,
    number: "01",
    title: "Machine Learning (ML)",
    image: "/images/industries/ml.png",
    description:
      "Using data-driven algorithms, ML systems uncover patterns, automate decisions, and enhance business efficiency. We develop end-to-end ML solutions that transform raw data into actionable insights, enabling smarter operations and forecasting."
  },
  {
    id: 2,
    number: "02",
    title: "Natural Language Processing (NLP)",
    image: "/images/industries/nlp.png",
    description:
      "NLP empowers machines to understand and process human language. Our NLP capabilities support automated support systems, sentiment analytics, document intelligence, and conversational AI experiences."
  },
  {
    id: 3,
    number: "03",
    title: "Generative AI",
    image: "/images/industries/genai.png",
    description:
      "Generative AI enables the creation of new text, images, and digital assets. We build cutting-edge GenAI solutions that drive innovation in content creation, product design, and intelligent automation."
  },
  {
    id: 4,
    number: "04",
    title: "Neural Networks",
    image: "/images/industries/neural.png",
    description:
      "Advanced neural networks power high-accuracy predictions and intelligent automation. We architect deep learning systems for pattern recognition, forecasting, and autonomous decision-making across multiple sectors."
  },
  {
    id: 5,
    number: "05",
    title: "Computer Vision",
    image: "/images/industries/computer-vision.png",
    description:
      "Our computer vision solutions convert images and video into meaningful insights. From object detection and face recognition to industrial inspection, we help businesses leverage visual intelligence at scale."
  },
  {
    id: 6,
    number: "06",
    title: "Robotic Process Automation (RPA)",
    image: "/images/industries/rpa.png",
    description:
      "RPA enables businesses to automate repetitive tasks with software robots. We create scalable automation pipelines that reduce manual work, increase accuracy, and accelerate operational efficiency."
  },
  {
    id: 7,
    number: "07",
    title: "Predictive & Forecasting Analytics",
    image: "/images/industries/predictive.png",
    description:
      "Predictive analytics helps businesses anticipate outcomes and make data-driven decisions. We build forecasting models for demand planning, risk analysis, customer behavior, and financial predictions."
  }
];


    return (
      <div className="min-h-screen bg-[#00091f] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-white/70 uppercase tracking-wider mb-4">SERVICES</p>
            <div className="grid grid-cols-2 gap-12">
              <h2 className="text-4xl font-bold text-white/70">
                Our AI software development services
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our services encompass the full spectrum of artificial intelligence app development services, from data preparation to deployment, emphasizing security, performance, and ethics, all tailored to meet your business goals.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* Left Column - Services List */}
            <div className="space-y-8">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="border-t border-gray-200 pt-6 cursor-pointer group"
                  onClick={() => {setExpandedItem(industry.id)
                    expandedItem=== industry.id ? setIsExpended((prev)=>!prev) : setIsExpended(true)
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <span className="text-blue-200 font-semibold text-lg">
                        {industry.number}
                      </span>
                      <h3 className="text-xl font-semibold text-white/70 group-hover:text-blue-400 transition">
                        {industry.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  
                  <div className={`
                            ml-12 
                            transition-all duration-300 
                            overflow-hidden
                            ${isExpended && expandedItem === industry.id 
                                ? "opacity-100 max-h-96" 
                                : "opacity-0 max-h-0 pointer-events-none"
                            }
                            `}>

                      <p className="text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                </div>
              ))}
            </div>

            {/* Right Column - Sticky Image */}
            <div className="sticky top-0">
              <div className="relative w-full h-screen rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="AI Technology"
                  className="w-full h-full object-cover"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/20"></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
