"use client";
import { ChevronDown, ChevronRight, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [index, setIndex] = useState<number | null>(null);
  const [strecth, setStrech] = useState(false);
  const [navHover, setNavHover] = useState(false);
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 4 && currentScroll > lastScrollY) {
        setStrech(true);
      } else if (currentScroll < lastScrollY) {
        setStrech(false);
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navItems = [
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "About", href: "/about", hasDropdown: false },
    { label: "Case Studies", href: "/case-studies", hasDropdown: false },
    { label: "Blog", href: "/blog", hasDropdown: false },
    { label: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <div className="flex fixed w-full z-30 justify-center text-white mt-3">
      <div
        className={`${
          strecth ? "w-11/12 md:w-5/12 p-0" : "w-11/12 md:w-8/12 p-1"
        } bg-black/70 bg-opacity-90 flex flex-col transition-all duration-500`}
      >
        <div className="transition-all duration-500 p-2 flex items-center justify-between h-fit">
          <div className="gap-2 flex justify-center items-center">
            <Link href={"/"} className="flex items-center gap-2">
              <span className={`flex p-2`}>
                <img
                  src="/favicon.png
                  "
                  alt="FlowGramer AI logo"
                  className={`${strecth ? "h-6 w-6" : "h-8 w-8"}`}
                />
              </span>
              {!strecth && (
                <span className="text-white font-bold text-lg hidden md:block">
                  FlowGramer AI
                </span>
              )}
            </Link>
          </div>

          <div className="hidden md:flex justify-center relative">
            <ul className="flex gap-5">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative">
                  {item.hasDropdown ? (
                    <li
                      onMouseEnter={() => {
                        setNavHover(true);
                        setIndex(idx);
                        setSelectedNav(item.label);
                      }}
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-400 transition-all duration-300"
                    >
                      {item.label}
                      {navHover && index === idx ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </li>
                  ) : (
                    <Link href={item.href}>
                      <li className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-400 transition-all duration-300">
                        {item.label}
                      </li>
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden md:block bg-blue-600 hover:bg-blue-800 transition-all duration-500 ${
                strecth ? "p-2" : "px-4 py-2 font-medium text-sm"
              }`}
            >
              {strecth ? <Mail className="h-5 w-5" /> : "Get Started"}
            </Link>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 p-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="block py-2 hover:text-blue-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 px-4 bg-blue-600 text-center hover:bg-blue-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div
          onMouseLeave={() => {
            setSelectedNav(null);
            setNavHover(false);
            setIndex(null);
          }}
          className={`absolute top-full mt-1 flex ${
            strecth ? "flex-col" : "flex-row"
          } gap-2 justify-center ${
            strecth ? "w-5/12" : "w-8/12"
          } transition-all duration-500 ${
            navHover
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-1"
          }`}
        >
          {selectedNav === "Services" && (
            <div
              className={`bg-black/90 p-6 shadow flex justify-center text-xs font-pt ${
                strecth ? "w-full" : "w-8/12"
              }`}
            >
              <div className="grid grid-cols-3 gap-8 text-sm w-full">
                <div className="flex flex-col gap-4">
                  <span className="text-blue-400 text-xs font-bold mb-1">
                    AI Solutions
                  </span>
                  {[
                    { heading: "AI Automation", to: "/services" },
                    { heading: "Machine Learning", to: "/services" },
                    { heading: "Chatbots & Assistants", to: "/services" },
                    { heading: "Predictive Analytics", to: "/services" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-400 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-blue-400 text-xs font-bold mb-1">
                    Development
                  </span>
                  {[
                    { heading: "Custom Software", to: "/services" },
                    { heading: "Web Development", to: "/services" },
                    { heading: "Mobile Apps", to: "/services" },
                    { heading: "Cloud Solutions", to: "/services" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-400 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-blue-400 text-xs font-bold mb-1">
                    Data & Analytics
                  </span>
                  {[
                    { heading: "Data Engineering", to: "/services" },
                    { heading: "Business Intelligence", to: "/services" },
                    { heading: "Data Visualization", to: "/services" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-400 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
