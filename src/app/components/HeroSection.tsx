import { ArrowRight, Play, Star, Users, TrendingUp, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// Use public folder for image
const PROFILE_IMG = "/Brand photo.png";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_GLOW = "rgba(124, 0, 158, 0.5)";

const glass = {
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Deep ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 35%, rgba(124,0,158,0.22) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 15% 75%, rgba(124,0,158,0.12) 0%, transparent 55%)",
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top-right bleed */}
      <div
        className="absolute -top-24 right-0 w-[600px] h-[600px] pointer-events-none opacity-15 blur-[100px]"
        style={{ background: `radial-gradient(circle, ${BRAND}, transparent 70%)` }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">
        {/* ─── LEFT CONTENT ─── */}
        <div className="flex flex-col gap-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 w-fit"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                ...glass,
                border: "1px solid rgba(124,0,158,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Linkedin size={13} style={{ color: BRAND_LIGHT }} />
              <span style={{ color: "#cc66ff" }}>LinkedIn Visibility Strategist</span>
              <span style={{ color: BRAND }}>•</span>
              <span className="text-[#94a3b8]">4,500+ Followers</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1
              className="text-white leading-none mb-5"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.07,
              }}
            >
              Transforming Invisible Profiles Into An 
              <span
                style={{
                  background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff, #e0aaff)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              > &nbsp; In-Demand Brand
              </span>{" "}
              {/* To Be{" "} */}
              {/* <span>
                <span className="line-through text-[#3a3a4a]">Unseen</span>
                <span className="text-[#ef4444]"> &amp; Unpaid.</span>
              </span> */}
            </h1>
            <p
              className="text-[#8b9aac] max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.75,
              }}
            >
              I build the{" "}
              <strong className="text-white">8-Week LinkedIn Visibility System</strong> for coaches &amp; founders turning invisible profiles into inbound client magnets, without cold DMs or paid ads.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#book-call"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})`,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.05rem",
                boxShadow: `0 0 40px ${BRAND_GLOW}, 0 4px 24px rgba(0,0,0,0.4)`,
              }}
            >
              Book a Discovery Call
              <ArrowRight size={18} />
            </a>
            <a
              href="#results"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                ...glass,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.05rem",
              }}
            >
              <Play size={15} style={{ color: "#cc66ff" }} />
              See Results
            </a>
          </motion.div>

          {/* Social Proof Mini */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 flex-wrap"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-black bg-[#222] flex items-center justify-center"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
                  >
                    {/* Replace src with actual image paths */}
                    <img
                      src={"/person" + i + ".jpg"}
                      alt={"Client " + i}
                      className="w-full h-full object-cover"
                      style={{ display: "block" }}
                    />
                  </div>
                ))}
              </div>
              <span className="text-[#8b9aac] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                <strong className="text-white">50+</strong> coaches &amp; founders served
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} className="text-[#f59e0b] fill-[#f59e0b]" />
              ))}
              <span className="text-[#8b9aac] text-sm ml-1" style={{ fontFamily: "Inter, sans-serif" }}>5.0 rating</span>
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT — PROFILE IMAGE ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative">
            {/* Glow aura */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${BRAND}, ${BRAND_LIGHT})`,
                filter: "blur(50px)",
                opacity: 0.35,
                transform: "scale(1.08)",
              }}
            />
            {/* Image frame */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: "1.5px solid rgba(200, 80, 255, 0.35)",
                width: "clamp(280px, 40vw, 460px)",
                aspectRatio: "4/5",
                boxShadow: `0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,0,158,0.15)`,
              }}
            >
              <ImageWithFallback
                src={PROFILE_IMG}
                alt="Jonathan Otafia - LinkedIn Growth Strategist"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient fade bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2/5"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}
              />
              {/* Floating name card */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl px-4 py-3"
                style={{
                  ...glass,
                  border: "1px solid rgba(124,0,158,0.28)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-white font-bold"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Jonathan Otafia
                    </p>
                    <p style={{ color: "#cc66ff", fontSize: "0.75rem", fontFamily: "Inter, sans-serif" }}>
                      Your LinkedIn BIG Brother
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={13} className="text-[#22c55e]" />
                    <span
                      className="text-[#22c55e] text-xs font-bold"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      +500% Reach
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — weeks */}
            <div
              className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 text-center hidden sm:block"
              style={{
                ...glass,
                border: "1px solid rgba(124,0,158,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <p
                className="text-white font-bold text-xl leading-none"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                8 Weeks
              </p>
              <p className="text-[#e9d5ff] text-xs mt-0.5">To Results</p>
            </div>

            {/* Floating badge — followers */}
            <div
              className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 hidden sm:flex items-center gap-2"
              style={{
                ...glass,
                border: "1px solid rgba(124,0,158,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <Users size={16} style={{ color: "#cc66ff" }} />
              <div>
                <p
                  className="text-white font-bold text-sm leading-none"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  4,500+
                </p>
                <p className="text-[#64748b] text-xs">Followers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[#4a5568] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: `linear-gradient(to bottom, ${BRAND}, transparent)` }}
        />
      </div> */}
    </section>
  );
}
