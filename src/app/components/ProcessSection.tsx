import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_GLOW = "rgba(124, 0, 158, 0.4)";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const steps = [
  {
    weeks: "Week 1-2",
    title: "Deep Audit, Positioning & Clarity",
    description:
      "We start with a full audit of your LinkedIn profile, niche, and audience. You gain clarity on what you do, who you serve, and how to stand out.",
    outcome:
      "You stop sounding generic and start being clear, specific, and attractive to the right audience.",
    deliverables: [
      "Audit your profile, content, and positioning",
      "Define your niche and ideal audience",
      "Banner and visual brand update",
      "Optimize your profile to attract the right people",
    ],
    color: "#cc66ff",
  },
  {
    weeks: "Week 3-4",
    title: "Content & Visibility Setup",
    description:
      "We build your unique content strategy. The types of posts that work for your audience, your niche, and your goals.",
    outcome:
      "You are no longer guessing what to post and start following a clear content direction that attracts attention.",
    deliverables: [
      "Create your content pillars",
      "Build a repeatable posting structure",
      "Align your content with your business goals",
      "Improve your visibility through strategic posting",
    ],
    color: BRAND_LIGHT,
  },
  {
    weeks: "Week 5-6",
    title: "Growth & Engagement System",
    description:
      "Post smarter, not more. We implement a LinkedIn engagement strategy that amplifies your reach and helps you build meaningful connections.",
    outcome:
      "Your content starts reaching the right people, and you begin getting engagement and conversations.",
    deliverables: [
      "Implement audience growth strategies",
      "Build engagement habits that increase reach",
      "Start attracting inbound interest",
      "Introduce a simple system for consistency",
    ],
    color: BRAND,
  },
  {
    weeks: "Week 7-8",
    title: "Monetization & Authority",
    description:
      "The final phase turns visibility into revenue. We set up your inbound DM funnel, optimize your profile CTA, and build a simple pipeline for qualified leads.",
    outcome:
      "You do not just grow. You build a system that attracts, nurtures, and converts your audience into income.",
    deliverables: [
      "Position you as a clear authority in your niche",
      "Structure your offer for easy conversion",
      "Design a simple but effective funnel",
      "Guide you on converting interest into paying clients",
    ],
    color: "#9B00C4",
  },
] as const;

const finalResults = [
  "A clear personal brand",
  "A growing, targeted audience",
  "Consistent visibility",
  "A lead-ready path to income",
] as const;

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24"
      style={{ background: "#000000" }}
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-8 blur-[100px]"
        style={{
          background: `radial-gradient(ellipse at right, ${BRAND_LIGHT}, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <ScrollReveal className="mb-16 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            How It Works
          </span>
          <h2
            className="mt-3 text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Your 8-Week{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transformation
            </span>{" "}
            Roadmap
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-[#8b9aac]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            A step-by-step system, not a generic course, built for your specific
            goals.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="cursor-default rounded-2xl p-6 transition-all duration-350 sm:p-7 md:p-9"
                style={glass}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(124,0,158,0.07)";
                  el.style.borderColor = `${step.color}30`;
                  el.style.boxShadow =
                    "0 0 32px rgba(124,0,158,0.15), 0 8px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}35, ${step.color}15)`,
                        border: `1.5px solid ${step.color}45`,
                        fontFamily: "Space Grotesk, sans-serif",
                        color: step.color,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div>
                    <div
                      className="mb-3 inline-block rounded-full px-3 py-1 text-xs"
                      style={{
                        background: `${step.color}12`,
                        border: `1px solid ${step.color}25`,
                        color: step.color,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {step.weeks}
                    </div>
                    <h3
                      className="mb-2 text-white"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#8b9aac]"
                      style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.75 }}
                    >
                      {step.description}
                    </p>
                    <div
                      className="mt-4 rounded-xl px-4 py-3"
                      style={{
                        background: `${step.color}10`,
                        border: `1px solid ${step.color}20`,
                      }}
                    >
                      <p
                        className="text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: step.color,
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        Outcome
                      </p>
                      <p
                        className="mt-2 text-sm text-[#dbe4f0]"
                        style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}
                      >
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                  <div
                    className="min-w-0 rounded-xl p-5 lg:min-w-[220px]"
                    style={{
                      background: `${step.color}08`,
                      border: `1px solid ${step.color}18`,
                    }}
                  >
                    <p
                      className="mb-3 text-xs uppercase tracking-wider text-[#94a3b8]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Deliverables
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle
                            size={13}
                            style={{ color: step.color, marginTop: 2, flexShrink: 0 }}
                          />
                          <span
                            className="text-sm text-[#8b9aac]"
                            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.55 }}
                          >
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      
        <ScrollReveal delay={0.1} className="mt-14 text-center">
          <div className="flex flex-col items-center gap-3">
            <h3
              className="text-white"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Start your 8-Week Journey
            </h3>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-2">
              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://selar.com/2223779e73"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-9 py-4 text-white font-bold transition-all duration-300 hover:scale-[1.04] hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})`,
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "1.05rem",
                    boxShadow: `0 0 32px ${BRAND_GLOW}`,
                    minWidth: "220px",
                  }}
                >
                  Done-With-You
                </a>
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#cc66ff",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  Investment: $1000
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://selar.com/2223779e73"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-9 py-4 text-white font-bold transition-all duration-300 hover:scale-[1.04] hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})`,
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "1.05rem",
                    boxShadow: `0 0 32px ${BRAND_GLOW}`,
                    minWidth: "220px",
                  }}
                >
                  Done-For-You
                </a>
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#cc66ff",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  Investment: $3000
                </span>
              </div>

              {/* <span
                className="text-sm font-semibold"
                style={{
                  color: "#cc66ff",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Investment: $1000
              </span> */}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
