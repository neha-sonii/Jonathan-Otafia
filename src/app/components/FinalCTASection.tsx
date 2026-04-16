import { ArrowRight, Calendar, Clock, Shield } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_GLOW = "rgba(124, 0, 158, 0.55)";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

export function FinalCTASection() {
  return (
    <section
      id="book-call"
      className="py-28 relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Rich ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 70% at 50% 60%, rgba(124,0,158,0.28) 0%, rgba(124,0,158,0.08) 40%, transparent 70%)`,
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Live badge */}
        <ScrollReveal>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-9"
            style={glass}
          >
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[#cc66ff] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Limited Spots Available This Month
            </span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.08}>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            Ready to Go From{" "}
            <span className="text-[#ef4444] line-through opacity-60">Invisible</span>
            <br />
            to{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff, #e0aaff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Inbound?
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <p
            className="text-[#8b9aac] max-w-xl mx-auto mb-10"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", lineHeight: 1.75 }}
          >
            Book a free 30-minute strategy call. We'll audit your LinkedIn
            presence, identify your biggest visibility gaps, and map out your
            personalised 8-week transformation plan.
          </p>
        </ScrollReveal>

        {/* Feature pills */}
        <ScrollReveal delay={0.18}>
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            {[
              { icon: Calendar, text: "Free 30-min Strategy Call" },
              { icon: Clock, text: "No Obligation, No Pressure" },
              { icon: Shield, text: "100% Tailored to Your Brand" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Icon size={15} style={{ color: "#cc66ff" }} />
                <span className="text-[#8b9aac]">{text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main CTA */}
        <ScrollReveal delay={0.22}>
          <a
            href="https://www.coachli.co/jonathanlegend/session/visibility-audit?id=12960"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold hover:opacity-95 hover:scale-[1.04] transition-all duration-300 mb-4"
            style={{
              background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})`,
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "1.15rem",
              boxShadow: `0 0 60px ${BRAND_GLOW}, 0 8px 40px rgba(0,0,0,0.5)`,
              letterSpacing: "-0.01em",
            }}
          >
            <Calendar size={20} />
            Book Your 20-minute Discovery Call
            <ArrowRight size={20} />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <p className="text-[#2d3748] text-sm mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
            No credit card needed. Spots are limited. Book before they fill up.
          </p>
        </ScrollReveal>

        {/* Urgency glass card */}
        {/* <ScrollReveal delay={0.3}>
          <div
            className="mt-14 rounded-2xl p-7"
            style={glass}
          >
            <p className="text-[#4a5568] text-sm mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Spots filling up this month
            </p>
            <div className="flex justify-center gap-10 flex-wrap">
              {[
                { label: "Spots Available", value: "3", color: "#22c55e" },
                { label: "Joined This Month", value: "2", color: "#cc66ff" },
              ].map(({ label, value, color }, i) => (
                <div key={i} className="text-center">
                  <p
                    className="font-bold"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "2rem",
                      color,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-[#2d3748] text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
}
