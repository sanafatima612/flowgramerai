import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import TechnicalExpertise from "./components/TechnicalExpertise";
import TestimonialsSection from "./components/Testimonials";
import WhyChooseUs from "./components/whychoose";
import MouseGlowSection from "./components/MouseGlowSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <MouseGlowSection />
      <WhyChooseUs />
      <Services />
      <TechnicalExpertise />
      <TestimonialsSection />
    </div>
  );
}
