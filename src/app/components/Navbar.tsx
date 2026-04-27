import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const BRAND = "#7C009E";
const BRAND_GLOW = "rgba(124, 0, 158, 0.45)";
const LOGO_SRC = "/Logo2.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Results", href: "#results" },
    { label: "Roadmap", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(0, 0, 0, 0.75)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124, 0, 158, 0.18)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center sm:h-12 sm:w-12"
          >
            <img
              src={LOGO_SRC}
              alt="Jonathan Otafia logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-white"
              style={{
                fontFamily: "Syne, Space Grotesk, sans-serif",
                fontSize: "clamp(0.96rem, 2vw, 1.16rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Jonathan{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ffffff, #cc66ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Otafia
              </span>
            </span>
            {/* <span
              className="hidden md:block text-[9px] uppercase tracking-[0.18em] text-[#8b9aac]"
              style={{ fontFamily: "Inter, sans-serif", marginTop: 4 }}
            >
              Visibility Strategist
            </span> */}
          </div>
        </div>

        {/* Desktop Nav (only show on lg and up) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8b9aac] hover:text-white transition-colors text-sm tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA (only show on lg and up) */}
        <div className="hidden lg:flex">
          <a
            href="https://coachli.co/jonathanlegend/SV-j0iej"
            className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
            style={{
              background: `linear-gradient(135deg, ${BRAND}, #A100CF)`,
              fontFamily: "Space Grotesk, sans-serif",
              boxShadow: `0 0 22px ${BRAND_GLOW}`,
            }}
          >
            Book a Discovery Call
          </a>
        </div>

        {/* Mobile/Tablet Menu Button (show below lg) */}
        <button
          className="lg:hidden text-white p-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(124,0,158,0.18)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8b9aac] hover:text-white transition-colors py-2 border-b border-[rgba(124,0,158,0.1)]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book-call"
            className="px-5 py-3 rounded-lg text-white text-sm font-semibold text-center mt-2"
            style={{ background: `linear-gradient(135deg, ${BRAND}, #A100CF)` }}
            onClick={() => setIsOpen(false)}
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}
