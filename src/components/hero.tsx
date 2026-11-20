import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { RESUME_LINK } from "../constants";
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

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 bg-[#915eff] hover:bg-[#804dee] text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] sm:text-[15px] transition-all duration-300 shadow-lg shadow-[#915eff]/30 hover:shadow-[#915eff]/50 hover:scale-[1.03]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 px-5 py-2.5 rounded-xl font-semibold text-[14px] sm:text-[15px] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Contact Me</span>
              <span>&rarr;</span>
            </a>
          </div>
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
