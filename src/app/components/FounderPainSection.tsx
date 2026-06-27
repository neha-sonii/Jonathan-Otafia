import { EyeOff, MessageCircleOff, Quote, Sparkles, TrendingDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

const PROFILE_IMG = "/Brand photo.jpg";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const BRAND_SOFT = "rgba(204, 102, 255, 0.14)";

const glass = {
  background: "rgba(255,255,255,0.045)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.09)",
};

const openingPain = [
  `Are you tired of pouring your heart into an offer nobody signs up for?`,
  `You announced the webinar three times. You wrote the post at midnight, deleted it, rewrote it, finally hit publish, and watched the RSVP count stay at zero.`,
  `You priced the program fairly. You explained the transformation clearly. You believed in it completely.`,
  `And still - silence.`,
  `No DMs. No "I\'m interested." No sign-ups. Just you, refreshing your own post, hoping the numbers are wrong.`,
  `You told yourself maybe it's the timing. Maybe it's the algorithm. Maybe people are just busy this month.`,
  `But deep down, a quieter question keeps showing up...`,
] as const;

const closingPain = [
  "Maybe it's not the webinar. Maybe it's not even the offer or course.",
  "Maybe it's the quiet feeling that you're shouting into a room where nobody's actually listening.",
  "You post consistently, show up, give real value, real frameworks and real proof of your expertise. And the engagement trickles in just enough to keep you posting, but never enough to convert.",
  "You watch someone with less experience than you announce a program and sell out in 48 hours. You wonder what they know that you don't.",
  "You've started to dread posting about your own offers because every launch feels like a small, public rejection.",
  "You smile in your testimonials section. You stay professional in your captions. But privately, you've started to wonder if LinkedIn even works for people like you.",
  "It's not that you lack the skill. It's that visibility and positioning were never taught to you - only the expertise was.",
] as const;

// const signals = [
//   {
//     icon: MessageCircleOff,
//     label: "Zero real demand",
//     text: "The content goes out, but the inbox stays quiet.",
//   },
//   {
//     icon: TrendingDown,
//     label: "Launch fatigue",
//     text: "Every offer starts feeling like another public test.",
//   },
//   {
//     icon: EyeOff,
//     label: "Invisible expertise",
//     text: "The skill is there. The market just does not feel it yet.",
//   },
// ] as const;

export function FounderPainSection() {
  return (
    <section
      id="founder-pain"
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ background: "linear-gradient(180deg, #000000 0%, #050008 48%, #000000 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "rgba(124,0,158,0.23)" }}
      />

      <div className="relative mx-auto max-w-7xl px-7 sm:px-6">
        <ScrollReveal className=" max-w-3xl italic">
          {/* <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            The First Pain Point
          </span> */}
          <h2
            className="mt-4 text-white"
            style={{
              fontFamily: "fangsongnpm",
              fontSize: "clamp(1.8rem, 4.8vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.08,
            }}
          >
            Dear Coach/
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff, #f2d7ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dear Founder.
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-7 gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-7">
          {/* <ScrollReveal direction="left">
            <div className="sticky top-28 hidden lg:block">
              <div
                className="rounded-3xl p-6"
                style={{
                  ...glass,
                  boxShadow: "0 24px 90px rgba(0,0,0,0.44), inset 0 1px 0 rgba(255,255,255,0.07)",
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: BRAND_SOFT, border: "1px solid rgba(204,102,255,0.24)" }}
                  >
                    <Sparkles size={18} style={{ color: "#cc66ff" }} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      What This Feels Like
                    </p>
                    <p className="text-xs text-[#8b9aac]" style={{ fontFamily: "Inter, sans-serif" }}>
                      The invisible cost of an ignored offer
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {signals.map(({ icon: Icon, label, text }) => (
                    <div
                      key={label}
                      className="rounded-2xl p-4"
                      style={{
                        background: "rgba(0,0,0,0.28)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Icon size={15} style={{ color: "#cc66ff" }} />
                        <p
                          className="text-sm font-bold text-white"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {label}
                        </p>
                      </div>
                      <p className="text-sm text-[#8b9aac]" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.65 }}>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal> */}

          <div className="flex flex-col gap-7">
            <ScrollReveal>
              {/* <article
                className="rounded-3xl p-6 sm:p-8 lg:p-10"
                style={{
                  ...glass,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(124,0,158,0.075) 48%, rgba(255,255,255,0.035))",
                  boxShadow: "0 26px 90px rgba(0,0,0,0.42)",
                }}
              > */}
                <div className="flex flex-col gap-5 px-0 sm:px-0 lg:px-0 py-6 sm:py-8 lg:py-10" style={{
                  // ...glass,
                  // background:
                  //   "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(124,0,158,0.075) 48%, rgba(255,255,255,0.035))",
                  // boxShadow: "0 26px 90px rgba(0,0,0,0.42)",
                }}>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.5 }}
                  >
                    Are you tired of pouring your heart into an offer <strong className="text-white">nobody signs up for</strong>?
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.5 }}
                  >
                    You announced the webinar three times. You wrote the post at midnight, deleted it, rewrote it, finally hit publish, and watched the RSVP count stay at <strong className="text-white">zero</strong>.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.5 }}
                  >
                    You priced the program fairly. You explained the transformation clearly. You believed in it completely.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.5 }}
                  >
                    And still - <strong className="text-white">silence</strong>.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.5 }}
                  >
                     <strong className="text-white">No DMs.</strong> No "I'm interested." No sign-ups. Just you, refreshing your own post, hoping the numbers are wrong.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.5 }}
                  >
                    You told yourself maybe it's the timing. Maybe it's the algorithm. Maybe people are just busy this month.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.5 }}
                  >
                    But deep down, a quieter question keeps showing up...
                  </p>

                  <div
                    className="my-2 rounded-2xl px-5 py-5 sm:px-7"
                    style={{
                      ...glass,
                       background:
                    "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(124,0,158,0.075) 48%, rgba(255,255,255,0.035))",
                  boxShadow: "0 26px 90px rgba(0,0,0,0.42)",
                    }}
                  >
                    <Quote size={22} style={{ color: "#cc66ff" }} />
                    <p
                      className="mt-3 text-white italic"
                      style={{
                        fontFamily: "fangsong",
                        fontSize: "clamp(1.35rem, 2.8vw, 2.15rem)",
                        fontWeight: 600,
                        lineHeight: 1.25,
                      }}
                    >
                      Am I actually good at what I do, or am I just invisible to the people who would pay for it?
                    </p>
                  </div>

                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    That question does not go away. It just gets buried under the next post, the next offer, the next attempt to try again.
                  </p>
                  <p
                    className="font-semibold text-[#aab4c3]"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.05rem, 1.7vw, 1.25rem)", lineHeight: 1.7 }}
                  >
                    If you read to this point, then you might want to lean into what I am about to say.
                  </p>
                </div>
              {/* </article> */}
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div
                className="grid grid-cols-1 items-center gap-7 rounded-3xl p-5 sm:p-6 lg:grid-cols-[1fr_0.82fr] lg:p-7"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,0,158,0.16), rgba(255,255,255,0.045) 42%, rgba(0,0,0,0.36))",
                  border: "1px solid rgba(204,102,255,0.22)",
                  boxShadow: "0 26px 90px rgba(0,0,0,0.44)",
                }}
              >
                <div className="px-1 sm:px-3">
                  {/* <p
                    className="mb-3 text-sm font-semibold uppercase tracking-widest"
                    style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    The Shift
                  </p> */}
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "clamp(1.45rem, 3vw, 2.35rem)",
                      fontWeight: 700,
                      lineHeight: 1.18,
                    }}
                  >
                    I am Jonathan Otafia. I learned how to make LinkedIn stop feeling random.
                  </p>
                  <p
                    className="mt-5 text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.45vw, 1.1rem)", lineHeight: 1.85 }}
                  >
                    I am Jonathan Otafia. A <strong className="text-white">20-year-old</strong>, I made my first <strong className="text-white">4 figures in a single month</strong> through LinkedIn alone. Today I work with coaches and founders generating clients from <strong className="text-white">7 countries</strong>. Not because I had more talent. Because I fixed something most people never address.
                  </p>
                </div>

                <div className="relative mx-auto w-full max-w-[360px]">
                  <div
                    className="absolute inset-0 rounded-3xl blur-[48px]"
                    style={{ background: "rgba(124,0,158,0.38)", transform: "scale(1.04)" }}
                  />
                  <div
                    className="relative overflow-hidden rounded-3xl"
                    style={{
                      aspectRatio: "4 / 5",
                      border: "1.5px solid rgba(204,102,255,0.34)",
                      boxShadow: "0 22px 70px rgba(0,0,0,0.54)",
                    }}
                  >
                    <ImageWithFallback
                      src={PROFILE_IMG}
                      alt="Jonathan Otafia"
                      width={596}
                      height={900}
                      decoding="async"
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.86), transparent)" }}
                    >
                      <p className="font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        Jonathan Otafia
                      </p>
                      <p className="text-sm text-[#cc66ff]" style={{ fontFamily: "Inter, sans-serif" }}>
                        LinkedIn Visibility Strategist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div
                className="px-0 sm:px-0 lg:px-0 py-6 sm:py-8 lg:py-10"
              >
                <div className="flex flex-col gap-5">
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    Maybe it's not the webinar. Maybe it's not even the offer or course.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    Maybe it's the quiet feeling that you're <strong className="text-white">shouting into a room where nobody's actually listening</strong>.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    You post consistently, show up, give real value, real frameworks and real proof of your expertise. And the engagement trickles in just enough to keep you posting, but never enough to <strong className="text-white">convert</strong>.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    You watch someone with less experience than you announce a program and <strong className="text-white">sell out in 48 hours</strong>. You wonder what they know that you don't.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    You've started to <strong className="text-white">dread posting about your own offers</strong> because every launch feels like a small, public rejection.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    You smile in your testimonials section. You stay professional in your captions. But privately, you've started to wonder if <strong className="text-white">LinkedIn even works for people like you</strong>.
                  </p>
                  <p
                    className="text-[#aab4c3]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.12rem)", lineHeight: 1.9 }}
                  >
                    It's not that you lack the skill. It's that <strong style={{ color: "#cc66ff" }}>visibility and positioning were never taught to you - only the expertise was</strong>.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}