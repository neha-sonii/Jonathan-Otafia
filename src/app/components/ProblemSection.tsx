import { AlertCircle } from "lucide-react";

const painPoints = [
  {
    emoji: "😩",
    headline: "You post consistently...",
    body: "But your posts get 12 likes and zero DMs. You're shouting into the void while others with half your expertise are landing premium clients.",
  },
  {
    emoji: "🫥",
    headline: "Your profile is invisible.",
    body: "Decision-makers scroll past you because your profile doesn't communicate your value. It looks like everyone else's—safe, forgettable, ignored.",
  },
  {
    emoji: "💸",
    headline: "You're leaving money on the table.",
    body: "Every day you're not visible on LinkedIn, a potential client finds someone else. Your knowledge is worth thousands—but no one knows you exist.",
  },
  {
    emoji: "😤",
    headline: "You've tried everything.",
    body: "Tips from YouTube. Template bundles. A 'LinkedIn guru's' 30-day challenge. Nothing moved the needle. You're stuck wondering if LinkedIn even works.",
  },
];

export function ProblemSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#070711" }}
    >
      {/* BG accent */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at left, #ef4444, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.25)",
            }}
          >
            <AlertCircle size={14} className="text-[#ef4444]" />
            <span className="text-[#f87171] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              The Problem
            </span>
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Sound Familiar?
          </h2>
          <p
            className="text-[#94a3b8] mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            If you're a coach or founder on LinkedIn, you've probably felt this…
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex gap-5 group hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: "rgba(15, 15, 28, 0.6)",
              }}
            >
              <span className="text-3xl select-none" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{point.emoji}</span>
              <div>
                <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{point.headline}</h3>
                <p className="text-[#94a3b8] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { AlertCircle } from "lucide-react";

const painPoints = [
  {
    emoji: "😩",
    headline: "You post consistently...",
    body: "But your posts get 12 likes and zero DMs. You're shouting into the void while others with half your expertise are landing premium clients.",
  },
  {
    emoji: "🫥",
    headline: "Your profile is invisible.",
    body: "Decision-makers scroll past you because your profile doesn't communicate your value. It looks like everyone else's—safe, forgettable, ignored.",
  },
  {
    emoji: "💸",
    headline: "You're leaving money on the table.",
    body: "Every day you're not visible on LinkedIn, a potential client finds someone else. Your knowledge is worth thousands—but no one knows you exist.",
  },
  {
    emoji: "😤",
    headline: "You've tried everything.",
    body: "Tips from YouTube. Template bundles. A 'LinkedIn guru's' 30-day challenge. Nothing moved the needle. You're stuck wondering if LinkedIn even works.",
  },
];

export function ProblemSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#070711" }}
    >
      {/* BG accent */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at left, #ef4444, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.25)",
            }}
          >
            <AlertCircle size={14} className="text-[#ef4444]" />
            <span className="text-[#f87171] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              The Problem
            </span>
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Sound Familiar?
          </h2>
          <p
            className="text-[#94a3b8] mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            If you're a coach or founder on LinkedIn, you've probably felt this…
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex gap-5 group hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: "rgba(15, 15, 28, 0.6)",
                border: "1px solid rgba(239, 68, 68, 0.15)",
              }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{point.emoji}</span>
              <div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  {point.headline}
                </h3>
                <p
                  className="text-[#94a3b8]"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", lineHeight: 1.65 }}
                >
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          className="rounded-2xl p-8 text-center max-w-3xl mx-auto"
          style={{
            background: "linear-gradient(135deg, rgba(239,68,68,0.08), rgba(124,58,237,0.12))",
            border: "1px solid rgba(124, 58, 237, 0.25)",
          }}
        >
          <p
            className="text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            The problem isn't your expertise.{" "}
            <span className="text-[#ef4444]">It's your visibility strategy.</span>
            <br />
            <span className="text-[#a855f7]">And that's exactly what we fix.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
