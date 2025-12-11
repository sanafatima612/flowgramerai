"use client";
import React from "react";
import { ArrowRight, Brain, Cloud, Code, Database, Cpu, Smartphone, LineChart, Workflow } from "lucide-react";
import Link from "next/link";
import FadeSlideIn from "../hooks/FadeSlideIn";

const services = [
  {
    icon: <Brain className="w-12 h-12 text-blue-500" />,
    title: "AI Solutions",
    description: "Transform your business with custom AI solutions. From intelligent chatbots to predictive analytics, we build AI systems that drive real results.",
    features: ["Custom AI Agents", "Machine Learning Models", "Natural Language Processing", "Computer Vision"],
  },
  {
    icon: <Workflow className="w-12 h-12 text-blue-500" />,
    title: "Workflow Automation",
    description: "Streamline operations and reduce manual work with intelligent automation. We design systems that work 24/7 so your team can focus on what matters.",
    features: ["Process Automation", "Integration Development", "Automated Reporting", "Intelligent Workflows"],
  },
  {
    icon: <Code className="w-12 h-12 text-blue-500" />,
    title: "Custom Software Development",
    description: "Build scalable, secure software tailored to your unique business needs. From concept to deployment, we deliver solutions that grow with you.",
    features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
  },
  {
    icon: <Cloud className="w-12 h-12 text-blue-500" />,
    title: "Cloud Solutions",
    description: "Migrate, optimize, and scale with confidence. Our cloud experts help you leverage the full power of modern cloud infrastructure.",
    features: ["Cloud Migration", "AWS/Azure/GCP", "DevOps & CI/CD", "Cloud Architecture"],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-blue-500" />,
    title: "Mobile App Development",
    description: "Create engaging mobile experiences that users love. We build native and cross-platform apps that perform beautifully on any device.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"],
  },
  {
    icon: <Database className="w-12 h-12 text-blue-500" />,
    title: "Data Engineering",
    description: "Turn raw data into actionable insights. We build robust data pipelines and analytics solutions that power informed decision-making.",
    features: ["Data Pipelines", "ETL Solutions", "Data Warehousing", "Real-time Analytics"],
  },
  {
    icon: <LineChart className="w-12 h-12 text-blue-500" />,
    title: "Business Intelligence",
    description: "Visualize your data and uncover hidden opportunities. Our BI solutions help you understand trends and make data-driven decisions.",
    features: ["Dashboard Development", "Data Visualization", "KPI Tracking", "Predictive Analytics"],
  },
  {
    icon: <Cpu className="w-12 h-12 text-blue-500" />,
    title: "Digital Transformation",
    description: "Modernize your technology stack and processes. We guide organizations through comprehensive digital transformation initiatives.",
    features: ["Technology Assessment", "Process Optimization", "Legacy Modernization", "Change Management"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-16">
              <p className="text-blue-400 text-sm uppercase tracking-wider mb-4">What We Do</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We offer comprehensive technology solutions designed to help businesses innovate, 
                automate, and scale. Every service is tailored to your specific needs and goals.
              </p>
            </div>
          </FadeSlideIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeSlideIn key={idx}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-all duration-300 group h-full">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-gray-500 text-sm flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeSlideIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeSlideIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how FlowGramer AI can help you achieve your goals with 
                intelligent solutions tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition"
              >
                Start Your Project
              </Link>
            </div>
          </FadeSlideIn>
        </div>
      </section>
    </div>
  );
}
