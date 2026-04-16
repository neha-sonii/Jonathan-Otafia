import { Heart, MessageCircle, Repeat2, Share2, Linkedin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_GLOW = "rgba(124, 0, 158, 0.4)";
const LOGO_SRC = "/Brand photo.png";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const posts = [
  {
    content:
      "4,000 faces are staring at me👀\n\nBut I'm very shyyyy🙈\n\nBecause 7 months ago I almost quit linkedin\n\nBut today we crossed 4,0000 people.\n(Yayyy🤭)\n\nLet me explain.....\n",
    likes: 537,
    comments: 853,
    reposts: 29,
    tag: "Viral Post",
    postUrl: "https://www.linkedin.com/posts/jonathan-otafia-871297359_4000-faces-are-staring-at-me-but-im-activity-7436629621741096960-_Ie5?utm_source=share&utm_medium=member_android&rcm=ACoAAFk1dRUBm7Ogh0Eleh7aR9u71qdQK00PS0o",
  },
  {
    content:
      "BREAKING NEWS!!\n\nLinkedin will pay 1000+ users today.\n\nAnd it's a game of selection\n\nBut only those with the system are QUALIFIED(No bribing allowed).\n\nFor 6 months on Linkedin.\n\n\ I showed up....",
    likes: 279,
    comments: 283,
    reposts: 40,
    tag: "High Value",
    postUrl: "https://www.linkedin.com/posts/jonathan-otafia-871297359_breaking-news-linkedin-will-pay-1000-activity-7442065336851501056-Ue70?utm_source=share&utm_medium=member_android&rcm=ACoAAFk1dRUBm7Ogh0Eleh7aR9u71qdQK00PS0o",
  },
  {
    content:
      "I stole the biggest ASSET on Linkedin🤭\nAnd I'd get caught very soon😭\n\nHight-Ticket clients have been chasing me for stealing VISIBILITY.\n\nBut they haven't found me yet.. that's why my walletstill has'nt expanded as a football field just yet.\n\nFew months back I was:\n\nBlindly showing up......",
    likes: 288,
    comments: 320,
    reposts: 44,
    tag: "Authority Post",
    postUrl: "https://www.linkedin.com/posts/jonathan-otafia-871297359_i-stole-the-biggest-asset-on-linkedin-activity-7439890994495569920-DlER?utm_source=share&utm_medium=member_android&rcm=ACoAAFk1dRUBm7Ogh0Eleh7aR9u71qdQK00PS0o",
  },
  // {
  //   content:
  //     "What I appreciated most was the precision you gave. I mean no fluff, just clear strategy.\n\nThe feedback was direct and immediately actionable.\n\nHe has given me more clarity than I expected.",
  //   likes: 921,
  //   comments: 74,
  //   reposts: 51,
  //   timeAgo: "2w ago",
  //   tag: "Top Post",
  //   postUrl: "#",
  // },
];

function PostCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-350 cursor-default h-full"
      style={glass}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(124,0,158,0.07)";
        el.style.borderColor = "rgba(124,0,158,0.25)";
        el.style.boxShadow = "0 0 28px rgba(124,0,158,0.16), 0 8px 32px rgba(0,0,0,0.3)";
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
      {/* Header */}
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(124,0,158,0.18)",
            }}
          >
            <img
              src={LOGO_SRC}
              alt="Jonathan Otafia logo"
              className="rounded-5 w-full h-full"
            />
          </div>
          <div>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Jonathan Otafia
            </p>
            <p className="text-[#3d4f63] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              LinkedIn Visibility Strategist
            </p>
          </div>
        </div>
        <Linkedin size={16} className="text-[#0077b5]" />
      </div>

      {/* Tag */}
      <div
        className="inline-flex items-center w-fit px-2.5 py-1 rounded-full text-xs gap-1.5"
        style={{
          background: "rgba(124,0,158,0.12)",
          border: "1px solid rgba(124,0,158,0.25)",
          color: "#cc66ff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#cc66ff" }} />
        {post.tag}
      </div>

      {/* Content */}
      <p
        className="text-[#8b9aac] flex-1"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          whiteSpace: "pre-line",
        }}
      >
        {post.content}
      </p>
      <a
        href={post.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sm font-semibold transition-opacity hover:opacity-80"
        style={{
          color: "#cc66ff",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        Read more
      </a>

      {/* Engagement */}
      <div
        className="flex items-center gap-5 pt-3 border-t"
        style={{ borderColor: "rgba(124,0,158,0.1)", fontFamily: "Inter, sans-serif" }}
      >
        <div className="flex items-center gap-1.5 text-[#3d4f63] text-xs">
          <Heart size={12} className="text-[#ec4899]" />
          <span>{post.likes.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#3d4f63] text-xs">
          <MessageCircle size={12} className="text-[#3b82f6]" />
          <span>{post.comments}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#3d4f63] text-xs">
          <Repeat2 size={12} className="text-[#22c55e]" />
          <span>{post.reposts}</span>
        </div>
        <div className="ml-auto">
          <Share2 size={12} className="text-[#3d4f63]" />
        </div>
      </div>
    </div>
  );
}

export function ContentSection() {
  return (
    <section
      id="content"
      className="py-24 relative overflow-hidden"
      style={{ background: "#060010" }}
    >
      {/* BG bleed */}
      <div
        className="absolute top-1/2 left-0 w-1/3 h-2/3 opacity-10 -translate-y-1/2 pointer-events-none blur-[100px]"
        style={{ background: `radial-gradient(ellipse at left, ${BRAND}, transparent)` }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Content
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
            Posts That Turns Attention{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Into Clients
            </span>
          </h2>
          <p
            className="text-[#8b9aac] mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            Real engagement from real people. This is what the system produces
            for coaches and founders.
          </p>
        </ScrollReveal>

        {/* Posts Grid */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {posts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="w-full md:w-full lg:w-[340px]" style={{ minWidth: 0 }}>
                <PostCard post={post} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* LinkedIn Follow CTA */}
        <ScrollReveal delay={0.12}>
          <div
            className="rounded-2xl p-7 flex flex-col md:flex-row items-center gap-6 justify-between"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(9px)",
              WebkitBackdropFilter: "blur(9px)",
              border: "1px solid rgba(0,119,181,0.2)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-13 h-13 rounded-xl flex items-center justify-center p-3"
                style={{ background: "#0077b5" }}
              >
                <Linkedin size={26} className="text-white" />
              </div>
              <div>
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem" }}
                >
                  Follow Jonathan on LinkedIn
                </p>
                <p className="text-[#4a5568] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  4,500+ followers · Daily LinkedIn growth tips
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/jonathan-otafia-871297359/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:scale-[1.03] flex-shrink-0"
              style={{
                background: "#0077b5",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              <Linkedin size={15} />
              Connect on LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
