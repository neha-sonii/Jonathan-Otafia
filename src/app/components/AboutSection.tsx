import { CheckCircle, Crown, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

const PROFILE_IMG = "/image 2.jpeg";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_GLOW = "rgba(124, 0, 158, 0.4)";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const focusAreas = [
  "Get clear on their positioning",
  "Build content that attracts premium clients",
  'Convert LinkedIn visibility into revenue through the "7-day email nurturing sequence"',
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24"
      style={{ background: "#000000" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-2/3 -translate-x-1/2 opacity-12 blur-[120px]"
        style={{ background: `radial-gradient(ellipse, ${BRAND}, transparent)` }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <ScrollReveal className="mb-16 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Person Behind The System
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
            Meet{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Jonathan Otafia
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-5 lg:items-center">
            <ScrollReveal direction="left">
              <div className="relative mb-5 w-full max-w-[420px]">
                <a
                  href="https://www.linkedin.com/in/jonathan-otafia-871297359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ margin: 0, padding: 0 }}
                  title="View LinkedIn Profile"
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "420px",
                      aspectRatio: "4 / 5",
                      height: "auto",
                      minWidth: 0,
                      margin: "0 auto",
                      padding: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        border: "1.5px solid rgba(200,80,255,0.32)",
                        boxSizing: "border-box",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      <ImageWithFallback
                        src={PROFILE_IMG}
                        alt="Jonathan Otafia"
                        className="h-full w-full cursor-pointer object-cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                        }}
                      />
                    </div>
                    <div
                      className="absolute bottom-3 left-3 right-3 rounded-xl px-3 py-2"
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(20,0,30,0.6) 100%, rgba(124,0,158,0.5) 100%)",
                        backdropFilter: "blur(7px)",
                        WebkitBackdropFilter: "blur(7px)",
                        border: "1px solid rgba(124,0,158,0.18)",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <MapPin size={13} style={{ color: "#cc66ff" }} />
                        <span
                          className="text-xs text-[#e0e0e0]"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          Oyo State, Nigeria
                        </span>
                      </div>
                      <p
                        className="font-bold text-white"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "0.98rem",
                        }}
                      >
                        Jonathan Otafia
                      </p>
                      <div className="mt-0.5 flex items-center gap-1.5">
                        <Crown size={12} style={{ color: "#cc66ff" }} />
                        <p
                          style={{
                            color: "#cc66ff",
                            fontSize: "0.75rem",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          LinkedIn Visibility Strategist · Your LinkedIn BIG Brother
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div
                className="rounded-xl px-5 py-4"
                style={{
                  background: "rgba(124,0,158,0.08)",
                  border: "1px solid rgba(124,0,158,0.22)",
                }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  "Visibility is not luck. It is a system."
                </p>
              </div>

              <p
                className="text-[#8b9aac]"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.82, fontSize: "1rem" }}
              >
                I&apos;m Jonathan Otafia, a{" "}
                <strong className="text-white">LinkedIn Visibility Strategist</strong>.
                I help coaches and founders turn their expertise into a system
                that brings in clients consistently.
              </p>

              <p
                className="text-[#8b9aac]"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.82, fontSize: "1rem" }}
              >
                But it did not start like this.{" "}
                <strong className="text-white">9 months ago</strong>, I was ready
                to delete my LinkedIn account. For months, I was just applying
                for jobs and hoping something would work. Then one day, I got{" "}
                <strong className="text-white">5 rejection emails</strong>.
              </p>

              <p
                className="text-[#8b9aac]"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.82, fontSize: "1rem" }}
              >
                That was the shift. I stopped chasing opportunities and decided
                to become one.{" "}
                <strong className="text-white">
                  LinkedIn became my last shot.
                </strong>{" "}
                No backup plan. So I rebuilt everything: my positioning, my
                content, my strategy. Tested, failed, adjusted, and kept going.
              </p>

              <p
                className="text-[#8b9aac]"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.82, fontSize: "1rem" }}
              >
                Then things started working. My posts grew from{" "}
                <strong className="text-white">30 to 200+ engagements</strong>. I
                signed my first international clients from the{" "}
                <strong className="text-white">US and UK</strong>. Soon after, I
                was working with people across{" "}
                <strong className="text-white">6+ countries</strong>.{" "}
                <strong style={{ color: "#cc66ff" }}>All from LinkedIn.</strong>
              </p>

              <p
                className="text-[#8b9aac]"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.82, fontSize: "1rem" }}
              >
                That&apos;s when I realized visibility is not luck. It&apos;s a
                system. So I built one:{" "}
                <strong style={{ color: "#cc66ff" }}>
                  The 8-Week LinkedIn Visibility System.
                </strong>
              </p>

              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  className="mb-3 text-sm font-semibold"
                  style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Today, I help coaches and founders:
                </p>
                <ul className="flex flex-col gap-3">
                  {focusAreas.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={15}
                        style={{ color: "#cc66ff", flexShrink: 0, marginTop: 2 }}
                      />
                      <span
                        className="text-sm text-[#8b9aac]"
                        style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}
                      >
                        {item.includes("premium clients") ? (
                          <>
                            Build content that attracts{" "}
                            <strong className="text-white">premium clients</strong>
                          </>
                        ) : item.includes("7-day email nurturing sequence") ? (
                          <>
                            Convert LinkedIn visibility into revenue through the{" "}
                            <strong style={{ color: "#cc66ff" }}>
                              7-day email nurturing sequence
                            </strong>
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p
                className="text-[#8b9aac]"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.82, fontSize: "1rem" }}
              >
                <strong className="text-white">50+ clients later</strong>, that is
                still the focus: helping the right people turn LinkedIn into a{" "}
                <strong className="text-white">real client channel</strong>.
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="#book-call"
                  className="rounded-xl px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-[1.04] hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})`,
                    fontFamily: "Space Grotesk, sans-serif",
                    boxShadow: `0 0 22px ${BRAND_GLOW}`,
                  }}
                >
                  Work With Jonathan ➜
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathan-otafia-871297359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                  style={glass}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
