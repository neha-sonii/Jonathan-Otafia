import { ScrollReveal } from "./ScrollReveal";

const BRAND = "#7C009E";
const BRAND_LIGHT = "#A100CF";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(9px)",
  WebkitBackdropFilter: "blur(9px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const screenshotColumns = [
  {
    alignment: "left",
    items: [
      { src: "/bento-1.jpg", alt: "Client testimonial screenshot 1" },
      { src: "/bento-4.jpg", alt: "Client testimonial screenshot 4" },
      { src: "/bento-8.jpg", alt: "Client testimonial screenshot 8" },
      { src: "/bento-9.jpg", alt: "Client testimonial screenshot 9" },
    ],
  },
  {
    alignment: "center",
    items: [
      { src: "/bento-2.jpg", alt: "Client testimonial screenshot 2" },
      { src: "/bento-5.jpg", alt: "Client testimonial screenshot 5" },
      { src: "/bento-6.jpg", alt: "Client testimonial screenshot 6" },
      { src: "/bento-7.jpg", alt: "Client testimonial screenshot 7" },
    ],
  },
  {
    alignment: "right",
    items: [
      { src: "/bento-3.jpg", alt: "Client testimonial screenshot 3" },
      { src: "/bento-10.jpg", alt: "Client testimonial screenshot 10" },
      { src: "/bento-11.jpg", alt: "Client testimonial screenshot 11" },
      { src: "/bento-12.jpg", alt: "Client testimonial screenshot 12" },
    ],
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24"
      style={{ background: "#000000" }}
    >
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-2/3 w-2/3 opacity-12 blur-[100px]"
        style={{
          background: `radial-gradient(ellipse at bottom right, ${BRAND}, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#cc66ff", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Client Results
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
            Real People.{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${BRAND_LIGHT}, #cc66ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Real Results.
            </span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-[#8b9aac]"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
          >
            Don't take my word for it. Here's what coaches and founders say
            after going through the system.
          </p>
        </ScrollReveal>

        <div className="my-10 w-full">
          <div
            className="mx-auto w-full max-w-[1100px] overflow-hidden rounded-[28px]"
            style={{
              ...glass,
              padding: 8,
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: 8, alignItems: "start" }}
            >
              {screenshotColumns.map((column) => (
                <div
                  key={column.alignment}
                  className="flex flex-col self-start"
                  style={{
                    gap: 8,
                    alignItems:
                      column.alignment === "left"
                        ? "flex-start"
                        : column.alignment === "right"
                          ? "flex-end"
                          : "center",
                  }}
                >
                  {column.items.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="block h-auto max-w-full rounded-[14px]"
                      style={{
                        margin: 0,
                        verticalAlign: "top",
                      }}
                      loading="lazy"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
