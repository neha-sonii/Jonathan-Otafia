import { TrendingUp, Users, Award, Clock, Star, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
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

const purpleGlass = {
  background: "rgba(124, 0, 158, 0.07)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(124, 0, 158, 0.22)",
};

const FEATURED_AVATAR = "/victor olothi.jpg";

export function SocialProofSection() {
  return (
    <section
      id="results"
      className="py-24 relative overflow-hidden"
      style={{ background: "#060010" }}
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,0,158,0.13) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Proof It Works
          </span>
          <h2
            className="text-white mt-3"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Results That Speak{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Louder Than Words
            </span>
          </h2>
        </ScrollReveal>

        {/* ─── BENTO GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          {/* FEATURED TESTIMONIAL — large card, col-span-2, row-span-2 */}
          <ScrollReveal
            delay={0.05}
            className="md:col-span-2 md:row-span-2"
            style={{ height: "100%" }}
          >
            <div
              className="rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full group transition-all duration-400 hover:scale-[1.01]"
              style={{
                ...purpleGlass,
                border: `1px solid rgba(124,0,158,0.3)`,
                minHeight: "320px",
                boxShadow: `0 0 0 0 ${BRAND_GLOW}`,
                transition: "box-shadow 0.35s ease, transform 0.35s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px rgba(124,0,158,0.22), inset 0 0 40px rgba(124,0,158,0.06)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Top — Stars */}
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={15} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>

                {/* Large quote mark */}
                <div
                  className="text-7xl leading-none mb-3 select-none"
                  style={{ color: BRAND, fontFamily: "Georgia, serif", opacity: 0.4 }}
                >
                  "
                </div>

                <p
                  className="text-white mb-6"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                    lineHeight: 1.8,
                  }}
                >
                  I had an ideal client i was targeting, I texted and texted over again... but no response, So i booked for jonathan's consultation and applied every step he gave me, within 2 days.. my ideal client responded.
                </p>

                {/* Result badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg mb-6"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <TrendingUp size={13} className="text-[#22c55e]" />
                  <span className="text-[#22c55e] text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    +820% profile views
                  </span>
                </div>
              </div>

              {/* Bottom — Author */}
              <div className="flex items-center gap-4 pt-5 border-t" style={{ borderColor: "rgba(124,0,158,0.15)" }}>
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style={{ border: `2px solid rgba(200,80,255,0.4)` }}>
                  <ImageWithFallback src={FEATURED_AVATAR} alt="Chioma Adeyemi" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Victor Olothi</p>
                  <p className="text-[#64748b] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Content Strategist, Nigeria</p>
                </div>
                
              </div>
            </div>
          </ScrollReveal>

          {/* METRIC CARD — 4,500 followers */}
          <ScrollReveal delay={0.1}>
            <MetricCard
              icon={Users}
              value="5000+"
              label="LinkedIn Followers"
              sub="Organic growth only"
              color={BRAND_LIGHT}
            />
          </ScrollReveal>

          {/* METRIC CARD — 50+ clients */}
          <ScrollReveal delay={0.15}>
            <MetricCard
              icon={Award}
              value="50+"
              label="Clients Served"
              sub="Coaches & founders"
              color="#cc66ff"
            />
          </ScrollReveal>

          {/* METRIC CARD — 5x views */}
          <ScrollReveal delay={0.2}>
            <MetricCard
              icon={TrendingUp}
              value="5x"
              label="Avg. Profile Views"
              sub="In 8 weeks"
              color={BRAND}
            />
          </ScrollReveal>

          {/* METRIC CARD — 8 weeks */}
          <ScrollReveal delay={0.25}>
            <MetricCard
              icon={Clock}
              value="8 Weeks"
              label="To Visible Results"
              sub="Guaranteed system"
              color="#A100CF"
            />
          </ScrollReveal>

          {/* METRIC CARD — 100% reviews */}
          <ScrollReveal delay={0.3}>
            <MetricCard
              icon={Star}
              value="100%"
              label="5-Star Reviews"
              sub="From every client"
              color={BRAND_LIGHT}
            />
          </ScrollReveal>

        
        </div>

        
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  value,
  label,
  sub,
  color,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  sub: string;
  color: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-row md:flex-col gap-3 h-full transition-all duration-300 cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(9px)",
        WebkitBackdropFilter: "blur(9px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(124,0,158,0.09)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,0,158,0.3)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 28px rgba(124,0,158,0.18)`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}20` }}
      >
        <Icon size={17} style={{ color }} />
      </div>
      <div className="flex-1">
        <p
          className="font-bold"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2rem)",
            fontWeight: 700,
            lineHeight: 1,
            color,
          }}
        >
          {value}
        </p>
        <p
          className="text-white mt-1 font-semibold text-sm"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {label}
        </p>
        <p
          className="text-[#4a5568] text-xs mt-0.5"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}
