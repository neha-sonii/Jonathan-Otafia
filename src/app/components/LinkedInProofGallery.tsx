import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";

type GalleryCategory = "banners" | "analytics";

interface LinkedInProofGalleryProps {
  banners: string[];
  analytics: string[];
}

const tabs: Array<{ id: GalleryCategory; label: string }> = [
  { id: "banners", label: "Banners" },
  { id: "analytics", label: "Growth Analytics" },
];

export function LinkedInProofGallery({
  banners,
  analytics,
}: LinkedInProofGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("banners");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const images = activeCategory === "banners" ? banners : analytics;
  const slides = useMemo(
    () => images.map((src) => ({ src, alt: galleryAltText(src, activeCategory) })),
    [activeCategory, images]
  );

  return (
    <section
      id="linkedin-proof-gallery"
      className="relative overflow-hidden py-24"
      style={{ background: "#040008" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 55% 48% at 50% 0%, rgba(124,0,158,0.18), transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            LinkedIn Proof Gallery
          </span>
          <h2
            className="mt-3 text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Behind the{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Growth
            </span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-[#8b9aac]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            A closer look at the branding and performance metrics that turned
            visibility into measurable results.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-9 flex justify-center">
          <div
            className="relative grid h-12 w-full max-w-[360px] grid-cols-2 rounded-full p-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid rgba(124,0,158,0.48)`,
              boxShadow: "inset 0 0 22px rgba(124,0,158,0.12)",
            }}
            role="tablist"
            aria-label="LinkedIn proof gallery categories"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className="relative z-10 rounded-full px-4 text-sm font-bold text-white transition-colors duration-300"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {activeCategory === tab.id && (
                  <motion.span
                    layoutId="linkedin-proof-active-tab"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{
                      background: BRAND,
                      boxShadow: "0 10px 24px rgba(124,0,158,0.36)",
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ProofCarousel
                images={slides}
                category={activeCategory}
                onOpen={(index) => setLightboxIndex(index)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={Math.max(lightboxIndex, 0)}
        slides={slides.map((slide) => ({ src: slide.src, alt: slide.alt }))}
        plugins={[Zoom]}
        carousel={{ finite: false }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 300, swipe: 300 }}
        zoom={{
          maxZoomPixelRatio: 4,
          scrollToZoom: true,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
        }}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.86)" },
          button: {
            color: "#ffffff",
            filter: `drop-shadow(0 0 10px rgba(124,0,158,0.8))`,
          },
          icon: { color: "#ffffff" },
        }}
      />
    </section>
  );
}

function ProofCarousel({
  images,
  category,
  onOpen,
}: {
  images: Array<{ src: string; alt: string }>;
  category: GalleryCategory;
  onOpen: (index: number) => void;
}) {
  const isAnalytics = category === "analytics";
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: isAnalytics ? "start" : "center",
    duration: 30,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    updateSelected();
    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);

    return () => {
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isHovered || images.length <= 1) return;

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => window.clearInterval(autoplay);
  }, [emblaApi, images.length, isHovered]);

  useEffect(() => {
    emblaApi?.scrollTo(0, true);
    setSelectedIndex(0);
  }, [emblaApi, images]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={emblaRef}
        className="overflow-hidden"
        style={{
          filter: "drop-shadow(0 26px 42px rgba(0,0,0,0.42))",
        }}
      >
        <div className={`flex touch-pan-y ${isAnalytics ? "md:-ml-5" : ""}`}>
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`min-w-0 ${
                isAnalytics
                  ? "flex-[0_0_100%] md:flex-[0_0_50%] md:pl-5"
                  : "flex-[0_0_100%]"
              }`}
            >
              <button
                type="button"
                onClick={() => onOpen(index)}
                className={`group flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl ${
                  isAnalytics ? "md:min-h-[620px]" : ""
                }`}
                aria-label={`Open ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`block rounded-2xl object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02] ${
                    isAnalytics
                      ? "max-h-[72vh] w-auto max-w-full md:h-[620px]"
                      : "h-auto w-full"
                  }`}
                  draggable={false}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition duration-300 hover:scale-105 md:left-5"
        style={{
          background: "rgba(124,0,158,0.68)",
          border: "1px solid rgba(204,102,255,0.38)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        aria-label="Previous proof image"
      >
        <ChevronLeft size={21} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition duration-300 hover:scale-105 md:right-5"
        style={{
          background: "rgba(124,0,158,0.68)",
          border: "1px solid rgba(204,102,255,0.38)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        aria-label="Next proof image"
      >
        <ChevronRight size={21} />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={`${image.src}-dot`}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: selectedIndex === index ? 26 : 8,
              background:
                selectedIndex === index ? "#cc66ff" : "rgba(255,255,255,0.22)",
            }}
            aria-label={`Go to proof image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function galleryAltText(src: string, category: GalleryCategory) {
  const fileName = src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "proof image";
  const spaced = fileName.replace(/[-_]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
  return `${category === "banners" ? "LinkedIn banner" : "LinkedIn analytics"} ${spaced}`;
}
