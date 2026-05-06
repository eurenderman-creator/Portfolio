import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import GallerySection from "./sections/GallerySection";
import Projects from "./sections/Projects";
import FreeRender from "./sections/FreeRender";
import FreeMusic from "./sections/FreeMusic";
import Contact from "./sections/Contact";
import { interiorData, exteriorData } from "./data";

function App() {
  // Initialize smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GallerySection
          id="interior"
          heading={interiorData.heading}
          description={interiorData.description}
          images={interiorData.images}
          columns={2}
        />
        <GallerySection
          id="exterior"
          heading={exteriorData.heading}
          description={exteriorData.description}
          images={exteriorData.images}
          columns={3}
        />
        <Projects />
        <FreeRender />
        <FreeMusic />
        <Contact />
      </main>
    </div>
  );
}

export default App;
