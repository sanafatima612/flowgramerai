"use client"
import { useState } from 'react';
import { CheckCircle, Upload, Info } from 'lucide-react';

export const ContactForm=()=> {
  const [formData, setFormData] = useState({
    challenge: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    secureNDA: false,
    consent: false
  });

  const handleSubmit = () => {
    if (!formData.challenge || !formData.name || !formData.email || !formData.consent) {
      alert('Please fill in all required fields and accept the consent.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  const { name, value, type } = e.target;

  setFormData(prev => ({
    ...prev,
    [name]: type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : value
  }));
};

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 p-8 md:p-12 text-white flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h1>
        <p className="text-lg mb-8 opacity-90">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        
        <h2 className="text-xl font-semibold mb-6">What happens next?</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 mt-1 shrink-0" />
            <div>
              <p className="text-base">Our expert will review your requirements and reach out.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 mt-1 shrink-0" />
            <div>
              <p className="text-base">If needed, we'll sign an NDA to protect your ideas.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 mt-1 shrink-0" />
            <div>
              <p className="text-base">We'll prepare a detailed proposal tailored to your needs.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 mt-1 shrink-0" />
            <div>
              <p className="text-base">Then we begin building your solution together.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/5 bg-slate-900 p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Contact FlowGramer AI</h2>
        <p className="text-gray-300 mb-8">Our team would love to hear from you.</p>
        
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="challenge"
              value={formData.challenge}
              onChange={handleInputChange}
              placeholder="Describe your project or challenge*"
              className="w-full bg-transparent border-b-2 border-gray-600 text-white px-0 py-3 focus:border-blue-500 focus:outline-none placeholder-gray-400"
            />
            <Info className="absolute right-0 top-3 w-5 h-5 text-gray-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name*"
              className="bg-transparent border-b-2 border-gray-600 text-white px-0 py-3 focus:border-blue-500 focus:outline-none placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address*"
              className="bg-transparent border-b-2 border-gray-600 text-white px-0 py-3 focus:border-blue-500 focus:outline-none placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="bg-transparent border-b-2 border-gray-600 text-white px-0 py-3 focus:border-blue-500 focus:outline-none placeholder-gray-400"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="bg-transparent border-b-2 border-gray-600 text-white px-0 py-3 focus:border-blue-500 focus:outline-none placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="secureNDA"
              checked={formData.secureNDA}
              onChange={handleInputChange}
              className="w-4 h-4 rounded border-gray-600"
              id="nda"
            />
            <label htmlFor="nda" className="text-gray-300 flex items-center gap-2 cursor-pointer">
              Secure data with NDA first
              <Info className="w-4 h-4 text-gray-500" />
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition"
            >
              <Upload className="w-5 h-5" />
              <span>Attach file</span>
            </button>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="w-4 h-4 mt-1 rounded border-gray-600"
              id="consent"
            />
            <label htmlFor="consent" className="text-gray-400 text-sm leading-relaxed cursor-pointer">
              I consent to the processing of my personal data as outlined in the{' '}
              <a href="#" className="text-white underline">Privacy Policy</a>, and I agree to receive 
              communications from FlowGramer AI regarding my inquiry.
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}