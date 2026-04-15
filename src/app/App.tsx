import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ContentSection } from "./components/ContentSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        fontFamily: "Space Grotesk, Inter, sans-serif",
        background: "#000000",
        color: "#ffffff",
      }}
    >
      <Navbar />
      {/* Trust → Authority → Conversion */}
      <HeroSection />
      <AboutSection />
      <SocialProofSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContentSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
