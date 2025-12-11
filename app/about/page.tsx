"use client";
import React from "react";
import { Target, Lightbulb, Users, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import FadeSlideIn from "../hooks/FadeSlideIn";

const values = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    title: "Innovation First",
    description: "We stay at the forefront of technology, constantly exploring new ways to solve complex problems.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Client Partnership",
    description: "We work as an extension of your team, deeply invested in your success and growth.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Results Driven",
    description: "Every solution we build is measured by the tangible impact it creates for your business.",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-500" />,
    title: "Quality Excellence",
    description: "We maintain the highest standards in code, design, and delivery across every project.",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "30+", label: "Happy Clients" },
  { number: "95%", label: "Client Retention" },
  { number: "24/7", label: "Support Available" },
];

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-16">
              <p className="text-blue-400 text-sm uppercase tracking-wider mb-4">About Us</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforming Business Through Intelligent Technology
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                FlowGramer AI is a technology company dedicated to helping businesses 
                harness the power of artificial intelligence and modern software solutions.
              </p>
            </div>
          </FadeSlideIn>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeSlideIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-400 text-lg mb-6">
                  We believe that every business, regardless of size, should have access to 
                  powerful technology that drives growth. Our mission is to democratize 
                  AI and automation, making these transformative tools accessible and practical.
                </p>
                <p className="text-gray-400 text-lg">
                  Through thoughtful design and expert implementation, we create solutions 
                  that don't just solve today's problems—they position our clients for 
                  long-term success in an ever-evolving digital landscape.
                </p>
              </div>
            </FadeSlideIn>
            <FadeSlideIn>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-black border border-gray-800 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                These principles guide everything we do, from how we build solutions 
                to how we work with our clients.
              </p>
            </div>
          </FadeSlideIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <FadeSlideIn key={idx}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-lg mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </FadeSlideIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeSlideIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Work With Us</h2>
                <ul className="space-y-4">
                  {[
                    "Deep expertise in AI and modern software development",
                    "Agile methodology for faster delivery and flexibility",
                    "Transparent communication throughout every project",
                    "Post-launch support and continuous optimization",
                    "Proven track record across multiple industries",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeSlideIn>
            <FadeSlideIn>
              <div className="bg-black border border-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-400 mb-6">
                  We'd love to learn about your project and explore how we can help 
                  you achieve your goals.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition"
                >
                  Contact Us
                </Link>
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </section>
    </div>
  );
}
