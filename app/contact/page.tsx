"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import FadeSlideIn from "../hooks/FadeSlideIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeSlideIn>
            <div className="text-center mb-16">
              <p className="text-blue-400 text-sm uppercase tracking-wider mb-4">Get In Touch</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's Build Something Great Together
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Have a project in mind? We'd love to hear about it. Tell us about your 
                goals and we'll get back to you within 24 hours.
              </p>
            </div>
          </FadeSlideIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeSlideIn>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-400 text-sm mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-medium transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </FadeSlideIn>

            <FadeSlideIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Email</h3>
                        <a href="mailto:hello@flowgramerai.com" className="text-gray-400 hover:text-blue-400 transition">
                          hello@flowgramerai.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Phone</h3>
                        <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Office</h3>
                        <p className="text-gray-400">
                          123 Innovation Drive<br />
                          Tech Valley, CA 94025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Business Hours</h3>
                        <p className="text-gray-400">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Weekend: By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Quick Response Guarantee</h3>
                  <p className="text-gray-400 text-sm">
                    We value your time. Our team reviews every inquiry and responds within 
                    24 business hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </FadeSlideIn>
          </div>
        </div>
      </section>
    </div>
  );
}
