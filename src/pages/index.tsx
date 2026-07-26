import { lazy, Suspense } from "react";
import { Navbar } from "../app/components/Navbar";
import { HeroSection } from "../app/components/HeroSection";

const AboutSection = lazy(() =>
  import("../app/components/AboutSection").then((module) => ({ default: module.AboutSection }))
);
const FounderPainSection = lazy(() =>
  import("../app/components/FounderPainSection").then((module) => ({ default: module.FounderPainSection }))
);
const SocialProofSection = lazy(() =>
  import("../app/components/SocialProofSection").then((module) => ({ default: module.SocialProofSection }))
);
const LinkedInProofGallery = lazy(() =>
  import("../app/components/LinkedInProofGallery").then((module) => ({ default: module.LinkedInProofGallery }))
);
const TestimonialsSection = lazy(() =>
  import("../app/components/TestimonialsSection").then((module) => ({ default: module.TestimonialsSection }))
);
const ProcessSection = lazy(() =>
  import("../app/components/ProcessSection").then((module) => ({ default: module.ProcessSection }))
);
const ContentSection = lazy(() =>
  import("../app/components/ContentSection").then((module) => ({ default: module.ContentSection }))
);
const FinalCTASection = lazy(() =>
  import("../app/components/FinalCTASection").then((module) => ({ default: module.FinalCTASection }))
);
const Footer = lazy(() =>
  import("../app/components/Footer").then((module) => ({ default: module.Footer }))
);

const banners = ["/Banner1.jpeg", "/Banner2.jpg", "/Banner3.jpg"];
const analytics = ["/Analytic1.jpg", "/Analytic2.jpg", "/Analytic3.jpg"];

export default function MainPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <FounderPainSection />
          <SocialProofSection />
          <LinkedInProofGallery banners={banners} analytics={analytics} />
          <TestimonialsSection />
          <ProcessSection />
          <AboutSection />
          <ContentSection />
          <FinalCTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
