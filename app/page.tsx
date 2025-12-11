import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import TechnicalExpertise from "./components/TechnicalExpertise";
import TestimonialsSection from "./components/Testimonials";
import WhyChooseUs from "./components/whychoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Services />
      <TechnicalExpertise />
      <TestimonialsSection />
    </div>
  );
}
