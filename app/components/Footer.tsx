"use client"
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { LocationsSection } from "./Locations";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
    <ContactForm/>
    <LocationsSection/>
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">FlowGramer AI</h3>
            <p className="text-sm leading-relaxed mb-4">
              Transforming businesses through intelligent automation and AI-powered solutions. We help companies work smarter and scale faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-blue-500 transition">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-500 transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-blue-400" />
                <span>123 Innovation Drive<br />Tech Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:hello@flowgramerai.com" className="hover:text-blue-500 transition">
                  hello@flowgramerai.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+1234567890" className="hover:text-blue-500 transition">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FlowGramer AI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
