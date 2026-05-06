import { useEffect, useRef } from "react";
import { heroData } from "../data";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !bgRef.current || !textRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      // Vertigo zoom effect
      const scale = 1 + progress * 0.2;
      const rotate = progress * 2;
      const yPos = scrollY * 0.5;

      bgRef.current.style.transform = `translate3d(0px, ${yPos}px, 0px) scale3d(${scale}, ${scale}, 1) rotateZ(${rotate}deg)`;

      // Text parallax fade
      const textOpacity = 1 - progress * 1.5;
      const textY = scrollY * 0.3;
      textRef.current.style.opacity = String(Math.max(textOpacity, 0));
      textRef.current.style.transform = `translate3d(0px, ${textY}px, 0px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Background with vertigo effect */}
      <div
        ref={bgRef}
        className="absolute vertigo-scale"
        style={{
          top: "-50px",
          left: "-50px",
          right: "-50px",
          bottom: "-50px",
          backgroundImage: `url(${heroData.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(248,248,248,0.8)]" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        style={{ willChange: "transform, opacity" }}
      >
        <h1 className="font-display text-[#111111] hero-text font-normal mb-4">
          {heroData.headline}
        </h1>
        <p className="text-label text-[#666666] mt-4">
          {heroData.subtitle}
        </p>
        <p className="text-[16px] text-[#666666] mt-6 max-w-md font-body">
          {heroData.description}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-label text-[#666666]">SCROLL</span>
        <div className="w-[1px] h-12 bg-[#E5E5E5] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-[#111111]"
            style={{
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { height: 0; top: 0; }
          50% { height: 100%; top: 0; }
          100% { height: 0; top: 100%; }
        }
      `}</style>
    </section>
  );
}
