import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MoveRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const viralPosts = [
  { src: "/viral post 1.jpeg", alt: "Viral LinkedIn post performance screenshot 1" },
  { src: "/viral post 2.jpeg", alt: "Viral LinkedIn post performance screenshot 2" },
  { src: "/viral post 3.jpeg", alt: "Viral LinkedIn post performance screenshot 3" },
  { src: "/viral post 4.jpeg", alt: "Viral LinkedIn post performance screenshot 4" },
  { src: "/viral post 5.jpeg", alt: "Viral LinkedIn post performance screenshot 5" },
  { src: "/viral post 6.jpeg", alt: "Viral LinkedIn post performance screenshot 6" },
  { src: "/viral post 7.jpeg", alt: "Viral LinkedIn post performance screenshot 7" },
];

export function ViralPostsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    duration: 32,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    updateSelected();
    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);
    emblaApi.on("pointerDown", () => setIsPaused(true));

    return () => {
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const autoplay = window.setInterval(() => emblaApi.scrollNext(), 6500);
    return () => window.clearInterval(autoplay);
  }, [emblaApi, isPaused]);

  return (
    <section
      id="viral-proof"
      className="relative overflow-hidden py-24"
      style={{ background: "#040008" }}
      aria-labelledby="viral-proof-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 58% 54% at 50% 0%, rgba(124,0,158,0.18), transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="text-center mb-16">
          <div
            className="text-sm font-semibold uppercase tracking-widest"
            style={{
              color: "#cc66ff",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Viral content proof
          </div>

          <h2
            id="viral-proof-heading"
            className="mx-auto mt-4 max-w-3xl text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
            }}
          >
            50+ Viral Posts. <span style={{ color: "#cc66ff" }}>Clients Across 9 Countries.</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-[#8b9aac]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Real results from content that gets people to stop, read, and engage.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-left">
            <ProofStat value="50+" label="viral posts created" />
            <MoveRight className="hidden text-[#7C009E] sm:block" size={18} aria-hidden="true" />
            <ProofStat value="9" label="countries reached" />
            <MoveRight className="hidden text-[#7C009E] sm:block" size={18} aria-hidden="true" />
            <ProofStat value="Real" label="engagement proof" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-12 max-w-6xl">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div ref={emblaRef} className="overflow-hidden rounded-[22px]" aria-roledescription="carousel">
              <div className="flex touch-pan-y items-center">
                {viralPosts.map((post, index) => (
                  <div
                    key={post.src}
                    className="min-w-0 flex-[0_0_100%] px-0 sm:flex-[0_0_86%] sm:px-3 lg:flex-[0_0_78%]"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${viralPosts.length}`}
                  >
                    <div className="flex min-h-[200px] items-center justify-center overflow-hidden sm:min-h-[360px]">
                      <img
                        src={post.src}
                        alt={post.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                        className="block max-h-[62vh] w-auto max-w-full object-contain sm:max-h-[680px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setIsPaused(true); scrollPrev(); }}
              className="absolute left-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition duration-300 hover:scale-105 md:flex lg:left-8"
              style={{ background: "rgba(124,0,158,0.72)", border: "1px solid rgba(204,102,255,0.38)" }}
              aria-label="Previous viral post"
            >
              <ChevronLeft size={21} />
            </button>
            <button
              type="button"
              onClick={() => { setIsPaused(true); scrollNext(); }}
              className="absolute right-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition duration-300 hover:scale-105 md:flex lg:right-8"
              style={{ background: "rgba(124,0,158,0.72)", border: "1px solid rgba(204,102,255,0.38)" }}
              aria-label="Next viral post"
            >
              <ChevronRight size={21} />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
            <button type="button" onClick={() => { setIsPaused(true); scrollPrev(); }} className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: "rgba(124,0,158,0.72)" }} aria-label="Previous viral post"><ChevronLeft size={18} /></button>
            <div className="flex gap-2 px-2">
              {viralPosts.map((post, index) => <PaginationDot key={`${post.src}-mobile`} active={selectedIndex === index} onClick={() => { setIsPaused(true); emblaApi?.scrollTo(index); }} index={index} />)}
            </div>
            <button type="button" onClick={() => { setIsPaused(true); scrollNext(); }} className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: "rgba(124,0,158,0.72)" }} aria-label="Next viral post"><ChevronRight size={18} /></button>
          </div>

          <div className="mt-5 hidden justify-center gap-2 md:flex">
            {viralPosts.map((post, index) => <PaginationDot key={`${post.src}-desktop`} active={selectedIndex === index} onClick={() => { setIsPaused(true); emblaApi?.scrollTo(index); }} index={index} />)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProofStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <span className="mr-2 text-sm font-bold text-[#cc66ff]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{value}</span>
      <span className="text-xs text-[#8b9aac]" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
    </div>
  );
}

function PaginationDot({ active, onClick, index }: { active: boolean; onClick: () => void; index: number }) {
  return <button type="button" onClick={onClick} className="h-2 rounded-full transition-all duration-300" style={{ width: active ? 26 : 8, background: active ? "#cc66ff" : "rgba(255,255,255,0.22)" }} aria-label={`Go to viral post ${index + 1}`} />;
}
