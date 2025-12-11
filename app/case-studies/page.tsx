"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeSlideIn from "../hooks/FadeSlideIn";

const caseStudies = [
  {
    title: "E-Commerce AI Recommendation Engine",
    client: "Retail Platform",
    industry: "E-Commerce",
    image: "/workflow.jpeg",
    description: "Built an AI-powered product recommendation system that increased conversion rates by 34% and average order value by 28%.",
    results: ["34% higher conversions", "28% increased AOV", "2.5x engagement"],
    tags: ["AI", "Machine Learning", "E-Commerce"],
  },
  {
    title: "Healthcare Data Analytics Platform",
    client: "Medical Network",
    industry: "Healthcare",
    image: "/lecture.jpeg",
    description: "Developed a comprehensive data analytics platform that streamlined patient care workflows and improved operational efficiency.",
    results: ["40% time savings", "99.9% uptime", "HIPAA compliant"],
    tags: ["Data Analytics", "Healthcare", "Cloud"],
  },
  {
    title: "Financial Trading Automation",
    client: "Investment Firm",
    industry: "Finance",
    image: "/workflow.jpeg",
    description: "Created automated trading algorithms and risk assessment tools that enhanced decision-making speed and accuracy.",
    results: ["5x faster execution", "Reduced risk exposure", "Real-time analytics"],
    tags: ["Automation", "FinTech", "AI"],
  },
  {
    title: "Logistics Workflow Optimization",
    client: "Supply Chain Company",
    industry: "Logistics",
    image: "/lecture.jpeg",
    description: "Implemented intelligent workflow automation that reduced manual processes and improved delivery tracking accuracy.",
    results: ["60% less manual work", "95% tracking accuracy", "30% cost reduction"],
    tags: ["Automation", "Logistics", "Integration"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-16">
              <p className="text-blue-400 text-sm uppercase tracking-wider mb-4">Our Work</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Explore how we've helped businesses across industries transform their 
                operations with intelligent technology solutions.
              </p>
            </div>
          </FadeSlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <FadeSlideIn key={idx}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group hover:border-blue-500 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-sm text-gray-500 mb-2">Key Results:</p>
                      <div className="flex flex-wrap gap-3">
                        {study.results.map((result, rIdx) => (
                          <span key={rIdx} className="text-blue-400 text-sm font-medium">
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSlideIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <FadeSlideIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how FlowGramer AI can help transform your business 
              with intelligent technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeSlideIn>
        </div>
      </section>
    </div>
  );
}
