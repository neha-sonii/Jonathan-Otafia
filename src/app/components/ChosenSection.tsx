import { ArrowUpRight, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const COMMUNITY_URL = "https://roaring-mooncake-19e044.netlify.app/";

const benefits = [
  "Weekly live sessions",
  "Personal feedback on your actual posts",
  "Practical systems for positioning, content, and conversion",
] as const;

export function ChosenSection() {
  return (
    <section
      id="chosen"
      className="relative overflow-hidden bg-black px-5 py-16 sm:px-6 sm:py-20"
      aria-labelledby="chosen-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-2/3 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #7C009E, transparent 68%)" }}
      />

      <ScrollReveal className="relative mx-auto max-w-7xl">
        <div
          className="cursor-default rounded-2xl p-6 transition-all duration-300 sm:p-7 md:p-9"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(9px)",
            WebkitBackdropFilter: "blur(9px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          onMouseEnter={(e) => {
            const card = e.currentTarget;
            card.style.background = "rgba(124,0,158,0.07)";
            card.style.borderColor = "rgba(124,0,158,0.25)";
            card.style.boxShadow = "0 0 28px rgba(124,0,158,0.16), 0 8px 32px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.background = "rgba(255,255,255,0.04)";
            card.style.borderColor = "rgba(255,255,255,0.08)";
            card.style.boxShadow = "none";
          }}
        >
          <h2
            id="chosen-heading"
            className="max-w-2xl text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Stop figuring out LinkedIn <span style={{ color: "#cc66ff" }}>alone.</span>
          </h2>

              <p
                className="mt-4 max-w-2xl text-[#aeb8c6]"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.75 }}
              >
                A private community for founders, creators, and service providers who want to turn LinkedIn content into real visibility, conversations, and clients.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-3 sm:gap-4" aria-label="CHOSEN community benefits">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#c1cad5]" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.55 }}>
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(204,102,255,0.18)", color: "#e9d5ff" }}
                    >
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div
                className="mt-8 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <p className="text-sm text-[#8b9aac]" style={{ fontFamily: "Inter, sans-serif" }}>
                  20 founding spots <span className="mx-2 text-[#cc66ff]">·</span> $199/month <span className="mx-2 text-[#cc66ff]">·</span> Cancel anytime
                </p>
                <a
                  href={COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#cc66ff] focus:ring-offset-2 focus:ring-offset-black"
                  style={{
                    background: "linear-gradient(135deg, #7C009E, #A100CF)",
                    boxShadow: "0 10px 28px rgba(124,0,158,0.34)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  Explore CHOSEN
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
