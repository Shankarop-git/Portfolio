import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { ErrorBoundary } from "./ErrorBoundary";

const CanvasFallback = () => (
  <div className="w-full h-full flex justify-center items-center" style={{ minHeight: "350px" }}>
    <div 
      className="w-72 h-72 rounded-full opacity-35 blur-3xl animate-pulse" 
      style={{
        background: "radial-gradient(circle, rgba(145,94,255,0.45) 0%, rgba(0,206,168,0.2) 70%, transparent 100%)"
      }}
    />
  </div>
);

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-x-hidden" style={{ backgroundColor: "#050816", zIndex: 0 }}>
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
        style={{ zIndex: 10, pointerEvents: "none" }}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5" style={{ pointerEvents: "auto" }}>
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div style={{ pointerEvents: "auto", minWidth: 0 }}>
          <h1 className={cn(styles.heroHeadText, "text-white")} style={{ color: '#ffffff', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
            Hi, I'm <span className="text-[#915eff]" style={{ color: '#915eff' }}>Shankar Patil</span>
          </h1>
          <p className="text-[16px] sm:text-[19px] text-secondary mt-1 font-semibold">
            Computer Science Engineering Student
          </p>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I develop scalable web applications, AI-powered platforms, <br className="sm:block hidden" />
            and modern software solutions using Java, Python, React, Spring Boot, and Machine Learning.
          </p>
        </div>
      </div>

      {/* Computer Model */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <ErrorBoundary fallback={<CanvasFallback />}>
          <ComputersCanvas />
        </ErrorBoundary>
      </div>

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center" style={{ zIndex: 20 }}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
