"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

interface Location {
  city: string;
  address: string;
  phone: string;
}

interface RegionLocations {
  [key: string]: Location[];
}

export const LocationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Americas");
  const [email, setEmail] = useState<string>("");

  const locations: RegionLocations = {
    Americas: [
      {
        city: "Tech Valley, CA",
        address: "123 Innovation Drive, Suite 100",
        phone: "+1 (234) 567-890",
      },
    ],
    Europe: [
      {
        city: "London, UK",
        address: "45 Digital Lane, Tech Hub",
        phone: "+44 20 1234 5678",
      },
    ],
    Asia: [
      {
        city: "Singapore",
        address: "88 AI Boulevard, Innovation Tower",
        phone: "+65 6123 4567",
      },
    ],
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="bg-white py-16 px-6 md:px-8 font-pt">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="mb-8 md:mb-12 w-full md:w-1/2">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Locations
                </h2>
                <p className="text-gray-600 mb-6">
                  Get in touch with our friendly team at one of our global offices.
                </p>
                <a
                  href="mailto:hello@flowgramerai.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@flowgramerai.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-wrap gap-2 pb-8">
              {Object.keys(locations).map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveTab(region)}
                  className={`px-4 md:px-6 py-2 font-medium transition text-sm md:text-base ${
                    activeTab === region
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12 md:mb-20">
              {locations[activeTab].map((location, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {location.city}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line mb-1">
                    {location.address}
                  </p>
                  <p className="text-gray-600">{location.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-100 p-6 md:p-12 rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Join Our Newsletter
              </h3>
              <p className="text-gray-600">
                Stay updated with AI insights, industry trends, and company news.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-80 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
