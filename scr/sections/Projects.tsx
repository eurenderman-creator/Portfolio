import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, User, Wrench } from "lucide-react";
import { projectsData } from "../data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (id: number) => {
    setSelectedProject(id);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const project = selectedProject !== null
    ? projectsData.projects.find((p) => p.id === selectedProject)
    : null;

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project]);

  return (
    <>
      <section id="projects" className="section-padding bg-white">
        <div className="container-main">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <h2 className="font-display text-[#111111] section-title mb-4">
              {projectsData.heading}
            </h2>
            <p className="text-[16px] text-[#666666] font-body max-w-xl">
              {projectsData.description}
            </p>
          </div>

          {/* Project List */}
          <div className="divide-y divide-[#E5E5E5]">
            {projectsData.projects.map((proj) => (
              <div
                key={proj.id}
                className="group py-8 md:py-12 cursor-pointer transition-all duration-300 hover:bg-[#FAFAFA] hover:px-8 -mx-6 md:-mx-8 lg:-mx-12"
                onClick={() => openProject(proj.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 md:px-8 lg:px-12">
                  <div className="flex-1">
                    <h3 className="font-display text-[28px] md:text-[48px] text-[#111111] group-hover:text-[#000000] transition-colors leading-tight">
                      {proj.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 md:gap-12 text-label text-[#666666]">
                    <span>{proj.year}</span>
                    <span className="hidden md:inline">{proj.location}</span>
                    <span className="text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW PROJECT →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Overlay */}
      {project && (
        <div className="fixed inset-0 z-[100] bg-[#F8F8F8] overflow-y-auto">
          {/* Close */}
          <button
            className="fixed top-6 right-6 z-10 p-2 text-[#111111] hover:scale-110 transition-transform bg-[#F8F8F8] rounded-full"
            onClick={closeProject}
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="container-main py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Image Gallery */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden mb-4">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#111111] transition-all rounded-full"
                        onClick={() =>
                          setCurrentImageIndex(
                            (prev) =>
                              (prev - 1 + project.images.length) %
                              project.images.length
                          )
                        }
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#111111] transition-all rounded-full"
                        onClick={() =>
                          setCurrentImageIndex(
                            (prev) => (prev + 1) % project.images.length
                          )
                        }
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`flex-shrink-0 w-20 h-14 md:w-28 md:h-20 overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? "border-[#111111]"
                          : "border-transparent"
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Project Info */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <h2 className="font-display text-[36px] md:text-[48px] text-[#111111] mb-6">
                  {project.name}
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-[14px] text-[#666666] font-body">
                    <Calendar size={16} />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#666666] font-body">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#666666] font-body">
                    <User size={16} />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#666666] font-body">
                    <Wrench size={16} />
                    <span>{project.software}</span>
                  </div>
                </div>

                <div className="border-t border-[#E5E5E5] pt-8">
                  <p className="text-label text-[#999999] mb-4">DESCRIPTION</p>
                  <p className="text-[16px] leading-[1.7] text-[#666666] font-body">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8">
                  <button className="btn-primary" onClick={closeProject}>
                    CLOSE PROJECT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
