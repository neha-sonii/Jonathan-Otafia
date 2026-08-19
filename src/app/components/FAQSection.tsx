import { Plus } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

// Add or edit FAQ entries here. Each entry should have a question and answer.
export const faqItems: Array<{ question: string; answer: string }> = [
  {
    question: "I don’t have a big audience. Can this still work for me?",
    answer:
      "Yes. You don’t need 50K followers to get clients from LinkedIn. All you need is the right people seeing you consistently and understanding what you actually do. I’m more interested in helping you build the right visibility than chasing numbers that add nothing to bank wallet. Because 1,000 right people seeing you can be worth way more than 50,000 random people."
  },
  {
    question: "But I’m already posting… why isn’t anything happening?",
    answer:
      "This is probably one of the biggest reasons people come to me. Posting isn’t the same thing as being visible. You can post every day and still be invisible if your positioning is unclear, your content isn’t reaching your ideal clients, or there’s no system turning attention into conversations. That’s what we fix."
  },
  {
    question: "Do I have to become an influencer to get clients?",
    answer:
      "Nope. You don’t need to dance on camera, chase viral posts, or turn your LinkedIn into your personal reality show 😂 The goal is simple: Get your expertise in front of the right people → build trust → create conversations → turn attention into $$$. You’re building a business, not auditioning for LinkedIn celebrity status."
  },
  {
    question: "I’m too busy to spend hours on LinkedIn. What then?",
    answer:
      "Perfect. Then done-for-you is probably your best option. You focus on running your business. I handle the LinkedIn side, your positioning, content, visibility, inbound and outreach. So you stay visible without having to live on LinkedIn."
  },
  {
    question: "Will I still have to cold DM people?",
    answer:
      "Not as the entire strategy. I want your LinkedIn presence doing some of the heavy lifting before you ever enter someone’s DMs. our profile, content, comments and conversations should work together to make people understand who you are and why they should care. Less chasing. More people already interested in you."
  },
  {
    question: "What if I’m in a very specific niche?",
    answer:
      "That’s actually a good thing. You don’t need to appeal to everyone. We’ll figure out how to communicate your expertise in a way that makes your ideal clients think: “Wait… this person gets exactly what I’m dealing with. Your niche shouldn’t make you less visible. It should make you more recognizable to the right people."
  },
  {
    question: "What makes your approach different from other LinkedIn strategists?",
    answer:
      "I’m not just trying to help you post more. I’m building a visibility system around your business, your positioning, content, audience, engagement and client journey. Because getting views is nice. Getting payment invoices $$ from those views is better."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24"
      style={{ background: "#060010" }}
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-2/3 w-1/2 -translate-y-1/2 opacity-10 blur-[100px]"
        style={{ background: `radial-gradient(ellipse at right, ${BRAND}, transparent)` }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <ScrollReveal className="mb-12 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            FAQ
          </span>
          <h2
            className="mt-3 text-white"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={`${item.question}-${index}`}
                className="rounded-2xl transition-colors duration-200"
                style={{
                  ...glass,
                  background: isOpen ? "rgba(124,0,158,0.08)" : glass.background,
                  borderColor: isOpen ? "rgba(124,0,158,0.35)" : "rgba(255,255,255,0.08)",
                  boxShadow: isOpen ? "0 0 28px rgba(124,0,158,0.12)" : "none",
                }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 rounded-2xl px-5 py-5 text-left outline-none transition-colors hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-[#A100CF] sm:px-7"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span
                    className="min-w-0 flex-1 text-base font-semibold text-white sm:text-lg"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300"
                    style={{
                      color: isOpen ? "#ffffff" : "#cc66ff",
                      background: isOpen ? BRAND : "rgba(124,0,158,0.12)",
                    }}
                  >
                    <Plus
                      size={18}
                      strokeWidth={2}
                      className="transition-transform duration-300 ease-out"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    />
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-hidden={!isOpen}
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className="px-5 pb-6 text-sm leading-7 text-[#8b9aac] sm:px-7 sm:text-base"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
