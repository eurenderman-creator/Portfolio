import { useState, useRef, useEffect } from "react";
import { freeMusicData } from "../data";
import { Play, Pause, Music, Download, Headphones } from "lucide-react";

export default function FreeMusic() {
  const [playing, setPlaying] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [durations, setDurations] = useState<Record<number, number>>({});
  const audioRefs = useRef<Record<number, HTMLAudioElement>>({});

  const togglePlay = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playing === id) {
      audio.pause();
      setPlaying(null);
    } else {
      // Pause any currently playing
      if (playing !== null && audioRefs.current[playing]) {
        audioRefs.current[playing].pause();
      }
      audio.play();
      setPlaying(id);
    }
  };

  const handleTimeUpdate = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;
    const prog = (audio.currentTime / audio.duration) * 100;
    setProgress(prog);
  };

  const handleLoadedMetadata = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;
    setDurations((prev) => ({ ...prev, [id]: audio.duration }));
  };

  const handleEnded = (_id: number) => {
    setPlaying(null);
    setProgress(0);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  return (
    <section id="freebies" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text */}
          <div>
            <h2 className="font-display text-[#111111] section-title mb-6">
              {freeMusicData.heading}
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#666666] font-body mb-8">
              {freeMusicData.description}
            </p>
            <div className="flex items-center gap-3 text-[#999999]">
              <Headphones size={18} />
              <p className="text-[13px] font-body">{freeMusicData.terms}</p>
            </div>
          </div>

          {/* Right: Player */}
          <div className="space-y-4">
            {freeMusicData.tracks.map((track) => {
              const isPlaying = playing === track.id;
              const currentDuration = durations[track.id] || 0;

              return (
                <div
                  key={track.id}
                  className={`p-6 border transition-all duration-300 ${
                    isPlaying
                      ? "border-[#111111] bg-[#FAFAFA]"
                      : "border-[#E5E5E5] hover:border-[#111111]"
                  }`}
                >
                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[track.id] = el;
                    }}
                    src={track.src}
                    onTimeUpdate={() => handleTimeUpdate(track.id)}
                    onLoadedMetadata={() => handleLoadedMetadata(track.id)}
                    onEnded={() => handleEnded(track.id)}
                  />

                  <div className="flex items-center gap-4">
                    {/* Play Button */}
                    <button
                      onClick={() => togglePlay(track.id)}
                      className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
                        isPlaying
                          ? "bg-[#111111] text-white"
                          : "bg-[#111111] text-white hover:scale-105"
                      }`}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause size={18} />
                      ) : (
                        <Play size={18} className="ml-0.5" />
                      )}
                    </button>

                    {/* Track Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Music size={14} className="text-[#999999]" />
                        <span className="text-label text-[#999999]">
                          {track.category}
                        </span>
                      </div>
                      <h4 className="font-display text-[18px] md:text-[22px] text-[#111111] truncate">
                        {track.title}
                      </h4>
                      <p className="text-[13px] text-[#666666] font-body">
                        {track.description}
                      </p>
                    </div>

                    {/* Duration & Download */}
                    <div className="flex items-center gap-4">
                      <span className="text-[12px] text-[#999999] font-body">
                        {isPlaying
                          ? `${formatTime(
                              (progress / 100) * currentDuration
                            )} / ${formatTime(currentDuration)}`
                          : track.duration}
                      </span>
                      <a
                        href={track.src}
                        download
                        className="p-2 text-[#666666] hover:text-[#111111] transition-colors"
                        aria-label="Download track"
                      >
                        <Download size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Progress bar */}
                  {isPlaying && (
                    <div className="mt-4 h-[2px] bg-[#E5E5E5] overflow-hidden">
                      <div
                        className="h-full bg-[#111111] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
