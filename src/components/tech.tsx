import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div 
            className="w-28 h-28 flex flex-col justify-center items-center group cursor-pointer" 
            key={technology.name}
          >
            <div 
              className="w-24 h-24 rounded-full flex justify-center items-center bg-[#151030] border-2 border-[#804dee] p-4 shadow-card hover:shadow-[0_0_20px_rgba(128,77,238,0.6)] group-hover:scale-110 group-hover:border-[#00cea8] transition-all duration-300 ease-out"
              style={{
                background: "radial-gradient(circle, #151030 0%, #0c0824 100%)"
              }}
            >
              <img 
                src={technology.icon} 
                alt={technology.name} 
                className="w-14 h-14 object-contain group-hover:rotate-6 transition-all duration-300" 
              />
            </div>
            <span className="text-secondary text-[12px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-center">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
