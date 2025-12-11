"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const SoftwareServices: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number>(1);
  const [isExpended, setIsExpended] = useState<boolean>(true);

  const services = [
    {
      id: 1,
      number: "01",
      title: "ProductCaptulization",
      image: "/AI.png",
      description:
        "To effectively guide our clients through product ideation, we listen to their specific business needs, research and build their ideal customer profile, create viable product concepts, and tailor those concepts to meet unique customer requirements. We also create detailed road maps that outline product development goals and processes, identify essential features, plan key initiatives to launch, and more. To solicit early stakeholder and user feedback, make necessary adjustments, and ensure product concepts are performing on all fronts, we develop rapid, low-fidelity product prototypes."
    },
        {
      id: 2,
      number: "02",
      title: "Custom Software Development",
      image: "/images/industries/nlp.png",
      description:
      "To develop visually appealing and customer-friendly user interfaces (UIs), we brainstorm design ideas; perform user and market research; create wireframes, mockups, and high-fidelity prototypes; conduct usability testing, and more. By leveraging our product and user experience design services, businesses ensure at least two positive outcomes. First, the final solution is precisely tailored to the design needs of their target audience, delivering engaging customer experiences. Second, it is crafted in line with their specific business demands, skyrocketing sales and revenue."
        
    },
    {
      id: 3,
      number: "03",
      title: "Generative AI",
      image: "/images/industries/genai.png",
      description:
        "Generative AI enables the creation of new text, images, and digital assets. We build cutting-edge GenAI solutions that drive innovation in content creation, product design, and intelligent automation.",
    },
    {
      id: 4,
      number: "04",
      title: "Neural Networks",
      image: "/images/industries/neural.png",
      description:
        "Advanced neural networks power high-accuracy predictions and intelligent automation. We architect deep learning systems for pattern recognition, forecasting, and autonomous decision-making across multiple sectors.",
    },
    {
      id: 5,
      number: "05",
      title: "Computer Vision",
      image: "/images/industries/computer-vision.png",
      description:
        "Our computer vision solutions convert images and video into meaningful insights. From object detection and face recognition to industrial inspection, we help businesses leverage visual intelligence at scale.",
    },
    {
      id: 6,
      number: "06",
      title: "Robotic Process Automation (RPA)",
      image: "/images/industries/rpa.png",
      description:
        "RPA enables businesses to automate repetitive tasks with software robots. We create scalable automation pipelines that reduce manual work, increase accuracy, and accelerate operational efficiency.",
    },
    {
      id: 7,
      number: "07",
      title: "Predictive & Forecasting Analytics",
      image: "/images/industries/predictive.png",
      description:
        "Predictive analytics helps businesses anticipate outcomes and make data-driven decisions. We build forecasting models for demand planning, risk analysis, customer behavior, and financial predictions.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string>(services[0].image);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            SERVICES
          </p>
          <div className="grid grid-cols-2 gap-12">
            <h2 className="text-4xl font-bold text-black-500">
              We provide a full range of product engineering services
            </h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-t border-gray-200 pt-6 cursor-pointer group"
                onClick={() => {
                  setExpandedItem(service.id);
                  setSelectedImage(service.image);
                  expandedItem === service.id
                    ? setIsExpended((prev) => !prev)
                    : setIsExpended(true);
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div
                  className={`
                            ml-12 
                            transition-all duration-300 
                            overflow-hidden
                            ${
                              isExpended && expandedItem === service.id
                                ? "opacity-100 max-h-96"
                                : "opacity-0 max-h-0 pointer-events-none"
                            }
                            `}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Image */}
          <div className="sticky top-0">
            <div className="relative w-full h-screen rounded-lg overflow-hidden">
              <img
                src={selectedImage}
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
  );
};
