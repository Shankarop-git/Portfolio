import { motion } from "framer-motion";

import { CORE_EXPERTISE, CURRENTLY_LEARNING } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ExpertiseCardProps = {
  index: number;
  title: string;
  icon: string;
  description: string;
  skills: readonly string[];
  color: string;
};

const ExpertiseCard = ({
  index,
  title,
  icon,
  description,
  skills,
  color,
}: ExpertiseCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className={cn(
      "bg-black-200/90 backdrop-blur-sm p-6 rounded-2xl w-full md:w-[calc(50%-14px)] lg:w-[calc(33.33%-19px)] border flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl",
      "bg-gradient-to-br",
      color
    )}
  >
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl p-2.5 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
          {icon}
        </span>
        <h3 className="text-white text-[20px] font-bold leading-snug">
          {title}
        </h3>
      </div>

      <p className="text-secondary text-[14px] leading-[1.6] mb-6">
        {description}
      </p>
    </div>

    <div>
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
        Key Technologies & Skills
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 font-medium hover:bg-white/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <div className="mt-12 bg-black-100 rounded-[20px] overflow-hidden">
        {/* Header section */}
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl"
          )}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Core Competencies</p>
            <h2 className={styles.sectionHeadText}>Core Expertise.</h2>
          </motion.div>
          <p className="mt-3 text-secondary text-[16px] max-w-3xl leading-[1.7]">
            As a Computer Science graduate, I focus on building practical, full-stack web applications, AI/ML features, and robust backend services while continuously strengthening my software engineering and DSA fundamentals.
          </p>
        </div>

        {/* Core Expertise Cards Grid */}
        <div
          className={cn(
            styles.paddingX,
            "mt-8 pb-10 flex flex-wrap gap-6 justify-center"
          )}
        >
          {CORE_EXPERTISE.map((item, i) => (
            <ExpertiseCard key={item.title} index={i} {...item} />
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className={cn(styles.paddingX, "pb-12 pt-4")}>
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">🚀</span>
              <h3 className="text-white text-[22px] font-bold">
                Currently Learning & Improving
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CURRENTLY_LEARNING.map((item, index) => (
                <motion.div
                  key={item.topic}
                  variants={fadeIn("right", "spring", index * 0.1, 0.5)}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/[0.08] transition-colors"
                >
                  <span className="text-2xl shrink-0 p-1 bg-white/5 rounded-lg">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-white text-[15px] font-semibold">
                      {item.topic}
                    </h4>
                    <p className="text-secondary text-[13px] mt-0.5 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
