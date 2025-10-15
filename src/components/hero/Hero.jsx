import React, { useEffect, useState } from "react";
import { ChevronDown, Zap, Gauge } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  const [speed, setSpeed] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setSpeed((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[85vh] pt-12 overflow-hidden"
    >
      <div className="absolute inset-0 carbon-fiber opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-cyan-950/20"></div>

      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{
              top: `${i * 5}%`,
              width: '100%',
              animation: `slide ${3 + i * 0.1}s linear infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 0, 0, 0.5); }
          50% { box-shadow: 0 0 40px rgba(220, 0, 0, 0.8); }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 backdrop-blur-sm border-2 border-red-600/50">
            <Gauge className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="font-mono text-2xl font-bold text-red-500">{speed}%</span>
            <span className="text-sm opacity-70">LOADED</span>
          </div>
        </div>

        <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-black mb-6 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-red-600 via-red-500 to-cyan-400 bg-clip-text text-transparent">
            ANUP KUMAR
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-red-500 to-red-600 bg-clip-text text-transparent">
            SHARMA
          </span>
        </h1>

        <p className={`text-xl sm:text-2xl mb-8 opacity-80 lg:px-12 mx-auto transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Developer • Engineer • F1 Enthusiast
          <br />
          <span className="text-base sm:text-lg opacity-60">Merging Code with Horsepower 🏎️💻</span>
        </p>

        <div className={`grid grid-cols-3 gap-4 lg:px-12 mx-auto mb-12 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-red-600/30">
            <div className="text-3xl font-bold text-red-500">3</div>
            <div className="text-sm opacity-70">Projects</div>
          </div>
          <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-cyan-500/30">
            <div className="text-3xl font-bold text-cyan-400">20+</div>
            <div className="text-sm opacity-70">Tech Stacks</div>
          </div>
          <div className="p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-red-600/30">
            <div className="text-3xl font-bold text-red-500">100%</div>
            <div className="text-sm opacity-70">Passion</div>
          </div>
        </div>

        <div
          className={`relative flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* View Projects Button */}
          <Button
            onClick={scrollToProjects}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base rounded-lg font-semibold shadow-md hover:shadow-red-600/40 transition-all duration-300"
          >
            {/* <Zap className="w-5 h-5 mr-2" /> */}
            View Projects
          </Button>

          <Button
            onClick={() => document.getElementById("team-radio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 text-base rounded-lg font-semibold border-2 border-red-600 hover:bg-red-600/20"
          >
            Get in Touch
          </Button>

        </div>
      </div>
    </section>
  );
}
