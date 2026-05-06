import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface GallerySectionProps {
  id: string;
  heading: string;
  description: string;
  images: GalleryImage[];
  columns?: 2 | 3;
}

export default function GallerySection({
  id,
  heading,
  description,
  images,
  columns = 2,
}: GallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());

  // Intersection observer for image reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleImages((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const imageElements = document.querySelectorAll(`#${id} .gallery-item`);
    imageElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [id]);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  const gridCols = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <>
      <section id={id} className="section-padding bg-[#F8F8F8]">
        <div className="container-main">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <h2 className="font-display text-[#111111] section-title mb-4">
              {heading}
            </h2>
            <p className="text-[16px] text-[#666666] font-body max-w-xl">
              {description}
            </p>
          </div>

          {/* Grid */}
          <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
            {images.map((image, index) => (
              <div
                key={index}
                data-index={index}
                className={`gallery-item image-reveal cursor-zoom aspect-[4/3] overflow-hidden ${
                  visibleImages.has(index) ? "revealed" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-display text-[18px] md:text-[24px]">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with Vertigo Zoom */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[rgba(248,248,248,0.98)] backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-10 p-2 text-[#111111] hover:scale-110 transition-transform"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1} />
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-6 z-10">
            <p className="text-label text-[#666666]">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Navigation */}
          <button
            className="absolute left-4 md:left-8 z-10 p-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-all rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>

          <button
            className="absolute right-4 md:right-8 z-10 p-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-all rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>

          {/* Main image with vertigo zoom */}
          <div
            className="relative w-full h-full flex items-center justify-center p-8 md:p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative max-w-full max-h-full animate-vertigoIn"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="font-display text-[20px] md:text-[28px] text-[#111111]">
                  {images[currentIndex].title}
                </p>
                <p className="text-[13px] text-[#666666] mt-2 font-body">
                  {images[currentIndex].alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes vertigoIn {
          0% {
            transform: scale(0.3) rotate(-5deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.05) rotate(0.5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-vertigoIn {
          animation: vertigoIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
