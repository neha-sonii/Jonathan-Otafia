import { lazy, ReactNode, Suspense, useEffect, useRef, useState } from "react";
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

function LazySection({
  id,
  minHeight,
  children,
}: {
  id: string;
  minHeight: number;
  children: ReactNode;
}) {
  const [shouldRender, setShouldRender] = useState(() =>
    typeof window !== "undefined" && window.location.hash === `#${id}`
  );
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRender) return;

    const renderForHash = () => {
      if (window.location.hash === `#${id}`) {
        setShouldRender(true);
      }
    };

    renderForHash();
    window.addEventListener("hashchange", renderForHash);

    const placeholder = placeholderRef.current;
    if (!placeholder || !("IntersectionObserver" in window)) {
      const timeoutId = window.setTimeout(() => setShouldRender(true), 2500);
      return () => {
        window.clearTimeout(timeoutId);
        window.removeEventListener("hashchange", renderForHash);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(placeholder);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", renderForHash);
    };
  }, [id, shouldRender]);

  if (shouldRender) {
    return <>{children}</>;
  }

  return (
    <div
      id={id}
      ref={placeholderRef}
      aria-hidden="true"
      style={{ minHeight }}
    />
  );
}

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
          <LazySection id="about" minHeight={900}>
            <AboutSection />
          </LazySection>
          <LazySection id="results" minHeight={900}>
            <SocialProofSection />
          </LazySection>
          <LazySection id="testimonials" minHeight={900}>
            <TestimonialsSection />
          </LazySection>
          <LazySection id="process" minHeight={1300}>
            <ProcessSection />
          </LazySection>
          <LazySection id="content" minHeight={850}>
            <ContentSection />
          </LazySection>
          <LazySection id="book-call" minHeight={700}>
            <FinalCTASection />
          </LazySection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <LazySection id="site-footer" minHeight={300}>
          <Footer />
        </LazySection>
      </Suspense>
    </div>
  );
}
