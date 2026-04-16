import { Linkedin, Mail, MapPin, Crown } from "lucide-react";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";
const LOGO_SRC = "/Logo2.png";

export function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "#000000",
        borderColor: "rgba(124, 0, 158, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                boxShadow: "0 0 14px rgba(124,0,158,0.4)",
                border: "1px solid rgba(124,0,158,0.18)",
              }}
            >
              <img
                src={LOGO_SRC}
                alt="Jonathan Otafia logo"
                className="w-full h-full object-contain p-[2px]"
              />
            </div>
            <div>
              <p
                className="text-white font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Jonathan Otafia
              </p>
              <p className="text-[#2d3748] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                LinkedIn Visibility Strategist
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 text-[#2d3748] text-sm">
              <MapPin size={12} style={{ color: "#cc66ff" }} />
              <span style={{ fontFamily: "Inter, sans-serif" }}>Oyo State, Nigeria</span>
            </div>
            <a
              href="mailto:jonathanpaulinus32@gmail.com"
              className="flex items-center gap-1.5 text-[#2d3748] hover:text-[#cc66ff] transition-colors text-sm"
            >
              <Mail size={12} />
              <span style={{ fontFamily: "Inter, sans-serif" }}>jonathanpaulinus32@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-otafia-871297359/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#2d3748] hover:text-[#0077b5] transition-colors text-sm"
            >
              <Linkedin size={12} />
              <span style={{ fontFamily: "Inter, sans-serif" }}>LinkedIn</span>
            </a>
          </div>

          <p className="text-[#2d3748] text-xs text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            © {new Date().getFullYear()} Jonathan Otafia
          </p>
        </div>

        {/* Tagline */}
        <div
          className="text-center mt-8 pt-7 border-t flex items-center justify-center gap-2"
          style={{ borderColor: "rgba(124,0,158,0.1)" }}
        >
          <Crown size={12} style={{ color: "#cc66ff", opacity: 0.5 }} />
          <p className="text-[#2d3748] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Your LinkedIn Big Brother
          </p>
          <Crown size={12} style={{ color: "#cc66ff", opacity: 0.5 }} />
        </div>
      </div>
    </footer>
  );
}
