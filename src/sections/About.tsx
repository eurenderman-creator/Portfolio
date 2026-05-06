import { useEffect, useRef, useState } from "react";
import { aboutData, quotesData } from "../data";

export default function About() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Rotating quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Image reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-[#F8F8F8]"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-[#111111] section-title mb-12">
              {aboutData.heading}
            </h2>

            <div className="space-y-6 mb-12">
              {aboutData.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[16px] leading-[1.7] text-[#666666] font-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Rotating Quotes */}
            <div className="border-t border-[#E5E5E5] pt-8">
              <p className="text-label text-[#999999] mb-4">DAILY INSPIRATION</p>
              <div className="h-[80px] overflow-hidden relative">
                {quotesData.map((quote, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center transition-all duration-800 ${
                      index === currentQuote
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full"
                    }`}
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  >
                    <p className="font-display text-[20px] md:text-[24px] text-[#111111] italic leading-[1.3]">
                      "{quote}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#E5E5E5]">
              {aboutData.stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-display text-[36px] md:text-[48px] text-[#111111] leading-none">
                    {stat.number}
                  </p>
                  <p className="text-label text-[#666666] mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="order-1 lg:order-2">
            <div
              ref={imageRef}
              className={`image-reveal aspect-[3/4] overflow-hidden ${
                isRevealed ? "revealed" : ""
              }`}
            >
              <img
                src={aboutData.portrait}
                alt="Andreas - 3D Visualizer Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
