import { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

const AboutSection = lazy(() =>
  import("./components/AboutSection").then((module) => ({ default: module.AboutSection }))
);
const SocialProofSection = lazy(() =>
  import("./components/SocialProofSection").then((module) => ({ default: module.SocialProofSection }))
);
const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection").then((module) => ({ default: module.TestimonialsSection }))
);
const ProcessSection = lazy(() =>
  import("./components/ProcessSection").then((module) => ({ default: module.ProcessSection }))
);
const ContentSection = lazy(() =>
  import("./components/ContentSection").then((module) => ({ default: module.ContentSection }))
);
const FinalCTASection = lazy(() =>
  import("./components/FinalCTASection").then((module) => ({ default: module.FinalCTASection }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer }))
);

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
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <SocialProofSection />
          <TestimonialsSection />
          <ProcessSection />
          <ContentSection />
          <FinalCTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
