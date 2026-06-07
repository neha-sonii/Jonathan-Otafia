import {
  Zap,
  Target,
  MessageSquare,
  BarChart3,
  ArrowRight,
  PenLine,
  ClipboardList,
  RefreshCw,
  Brain,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_GLOW = "rgba(124, 0, 158, 0.45)";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const pillars = [
  {
    icon: Target,
    title: "Profile Positioning",
    description:
      "We rewrite your profile to speak directly to your ideal client — so they immediately know you're the expert they've been looking for.",
    color: "#cc66ff",
  },
  {
    icon: MessageSquare,
    title: "Content That Converts",
    description:
      "No fluff, no generic posts. We craft a content blueprint built around your voice that builds authority AND attracts inbound leads.",
    color: BRAND_LIGHT,
  },
  {
    icon: Zap,
    title: "Visibility Engine",
    description:
      "A proven distribution strategy that gets your content in front of thousands of your ideal clients — without spending a single dollar on ads.",
    color: BRAND,
  },
  {
    icon: BarChart3,
    title: "Client Funnel Activation",
    description:
      "Turn profile visitors into qualified discovery calls. We build your DM funnel and call booking system to close clients on autopilot.",
    color: "#9B00C4",
  },
];

const featureItems = [
  { label: "Profile Overhaul", icon: PenLine },
  { label: "Content Blueprint", icon: ClipboardList },
  { label: "Growth Strategy", icon: BarChart3 },
  { label: "Lead Funnel", icon: Target },
  { label: "Weekly Reviews", icon: RefreshCw },
  { label: "Direct Coaching", icon: Brain },
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-24 relative overflow-hidden"
      style={{ background: "#060010" }}
    >
      {/* BG glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none blur-[120px]"
        style={{ background: `radial-gradient(ellipse at center, ${BRAND}, transparent 65%)` }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Solution
          </span>
          <h2
            className="text-white mt-3"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            The 4 Pillars That
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Drive Results
            </span>
          </h2>
          <p
            className="text-[#8b9aac] mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            The system is built on 4 proven pillars that turn your LinkedIn into a client magnet.
          </p>
        </ScrollReveal>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                className="rounded-2xl p-6 flex flex-col gap-4 h-full"
                style={{ ...glass, borderColor: pillar.color }}
              >
                <pillar.icon size={28} style={{ color: pillar.color }} />
                <h3 className="text-white font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{pillar.title}</h3>
                <p className="text-[#8b9aac] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-4">
          {featureItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{
                background: "rgba(124,0,158,0.12)",
                border: "1px solid rgba(124,0,158,0.25)",
                color: "#cc66ff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <item.icon size={14} style={{ color: "#cc66ff" }} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import {
  Zap,
  Target,
  MessageSquare,
  BarChart3,
  ArrowRight,
  PenLine,
  ClipboardList,
  RefreshCw,
  Brain,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_GLOW = "rgba(124, 0, 158, 0.45)";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const pillars = [
  {
    icon: Target,
    title: "Profile Positioning",
    description:
      "We rewrite your profile to speak directly to your ideal client — so they immediately know you're the expert they've been looking for.",
    color: "#cc66ff",
  },
  {
    icon: MessageSquare,
    title: "Content That Converts",
    description:
      "No fluff, no generic posts. We craft a content blueprint built around your voice that builds authority AND attracts inbound leads.",
    color: BRAND_LIGHT,
  },
  {
    icon: Zap,
    title: "Visibility Engine",
    description:
      "A proven distribution strategy that gets your content in front of thousands of your ideal clients — without spending a single dollar on ads.",
    color: BRAND,
  },
  {
    icon: BarChart3,
    title: "Client Funnel Activation",
    description:
      "Turn profile visitors into qualified discovery calls. We build your DM funnel and call booking system to close clients on autopilot.",
    color: "#9B00C4",
  },
];

const featureItems = [
  { label: "Profile Overhaul", icon: PenLine },
  { label: "Content Blueprint", icon: ClipboardList },
  { label: "Growth Strategy", icon: BarChart3 },
  { label: "Lead Funnel", icon: Target },
  { label: "Weekly Reviews", icon: RefreshCw },
  { label: "Direct Coaching", icon: Brain },
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-24 relative overflow-hidden"
      style={{ background: "#060010" }}
    >
      {/* BG glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none blur-[120px]"
        style={{ background: `radial-gradient(ellipse at center, ${BRAND}, transparent 65%)` }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Solution
          </span>
          <h2
            className="text-white mt-3"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Introducing the{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff, #e0aaff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              8-Week LinkedIn
            </span>
            <br />
            Visibility System
          </h2>
          <p
            className="text-[#8b9aac] mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem", lineHeight: 1.75 }}
          >
            This isn't a course. It's not a template pack. It's a{" "}
            <strong className="text-white">done-with-you system</strong> that
            transforms your LinkedIn presence into a consistent, inbound lead
            machine — in just 8 weeks.
          </p>
        </ScrollReveal>

        {/* Big Feature Banner */}
        <ScrollReveal delay={0.08}>
          <div
            className="rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden"
            style={{
              background: "rgba(124, 0, 158, 0.07)",
              backdropFilter: "blur(9px)",
              WebkitBackdropFilter: "blur(9px)",
              border: "1px solid rgba(124, 0, 158, 0.28)",
            }}
          >
            {/* Corner bleed */}
            <div
              className="absolute top-0 right-0 w-72 h-72 opacity-25 pointer-events-none blur-3xl"
              style={{ background: `radial-gradient(circle at top right, ${BRAND_LIGHT}, transparent)` }}
            />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-5"
                  style={{
                    background: "rgba(200,80,255,0.12)",
                    border: "1px solid rgba(200,80,255,0.25)",
                    color: "#cc66ff",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cc66ff]" />
                  Done-With-You Program
                </div>
                <h3
                  className="text-white mb-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  From Invisible to{" "}
                  <span style={{ color: "#cc66ff" }}>Inbound</span>
                  <br />
                  in 56 Days — Guaranteed.
                </h3>
                <p
                  className="text-[#8b9aac] mb-7"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.75 }}
                >
                  Most coaches and founders waste months posting random content
                  with zero strategy. Our system gives you a clear, repeatable
                  process that builds authority, grows your audience, and fills
                  your calendar with qualified leads.
                </p>
                <a
                  href="#book-call"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.04]"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})`,
                    fontFamily: "Space Grotesk, sans-serif",
                    boxShadow: `0 0 24px ${BRAND_GLOW}`,
                  }}
                >
                  Start the System
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Feature items — icons replacing emojis */}
              <div className="grid grid-cols-2 gap-3">
                {featureItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl p-4 flex items-center gap-3 transition-all duration-300"
                      style={{
                        ...glass,
                        border: "1px solid rgba(124,0,158,0.18)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(124,0,158,0.12)";
                        el.style.borderColor = "rgba(124,0,158,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(255,255,255,0.04)";
                        el.style.borderColor = "rgba(124,0,158,0.18)";
                      }}
                    >
                      <Icon size={16} style={{ color: "#cc66ff", flexShrink: 0 }} />
                      <span
                        className="text-white text-sm font-semibold"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 h-full transition-all duration-300 cursor-default"
                  style={glass}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(124,0,158,0.09)";
                    el.style.borderColor = `${pillar.color}40`;
                    el.style.boxShadow = `0 0 30px rgba(124,0,158,0.2), 0 8px 32px rgba(0,0,0,0.3)`;
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${pillar.color}18` }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <h3
                    className="text-white mb-2"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-[#94a3b8] text-sm"
                    style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
