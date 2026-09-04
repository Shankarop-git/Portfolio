import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
  description: string;
};

// Service Card
const ServiceCard = ({ index, title, icon, description }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col gap-2">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[12px] text-center leading-[16px]">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body and Right Info Card */}
        <div className="mt-4 flex flex-col lg:flex-row gap-10 items-center justify-between">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a Computer Science Engineering student passionate about Full Stack Development, Artificial Intelligence, and Machine Learning. I enjoy designing scalable web applications, solving complex programming problems, and building software that creates real-world impact. I'm constantly learning modern technologies and improving my development skills through projects, internships, and hackathons.
          </motion.p>

          <motion.div
            variants={fadeIn("left", "spring", 0.3, 1)}
            className="w-full lg:w-[360px] min-w-[300px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-6 px-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <h3 className="text-white text-[18px] font-bold">Quick Info</h3>
                  <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-full text-green-400 text-xs font-semibold shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                    Available for Work
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-secondary text-[14px]">
                    <span className="text-lg">🎓</span>
                    <span>B.E. Computer Science & Eng.</span>
                  </li>
                  <li className="flex items-center gap-3 text-secondary text-[14px]">
                    <span className="text-lg">📍</span>
                    <span>Karnataka, India</span>
                  </li>
                  <li className="flex items-center gap-3 text-secondary text-[14px]">
                    <span className="text-lg">⚡</span>
                    <span>AI & Full Stack Enthusiast</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                <div>
                  <p className="text-white font-bold text-[18px]">4+</p>
                  <p className="text-secondary text-[12px]">Featured Projects</p>
                </div>
                <div>
                  <p className="text-white font-bold text-[18px]">1</p>
                  <p className="text-secondary text-[12px]">Internship Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
