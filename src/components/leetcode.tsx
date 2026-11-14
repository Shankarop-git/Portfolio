import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { LEETCODE_INFO } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type LeetCodeState = {
  totalSolved: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: string | number;
  activeDays: number;
  isLoading: boolean;
  lastUpdated: string | null;
};

export const LeetCode = () => {
  const [stats, setStats] = useState<LeetCodeState>({
    totalSolved: LEETCODE_INFO.totalSolved,
    easySolved: LEETCODE_INFO.easy.solved,
    totalEasy: LEETCODE_INFO.easy.total,
    mediumSolved: LEETCODE_INFO.medium.solved,
    totalMedium: LEETCODE_INFO.medium.total,
    hardSolved: LEETCODE_INFO.hard.solved,
    totalHard: LEETCODE_INFO.hard.total,
    ranking: LEETCODE_INFO.ranking,
    activeDays: 55,
    isLoading: true,
    lastUpdated: null,
  });

  const fetchLiveStats = async () => {
    setStats((prev) => ({ ...prev, isLoading: true }));
    const username = LEETCODE_INFO.username;

    // Try primary API
    try {
      const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
      if (res.ok) {
        const data = await res.json();
        const activeDaysCount = data.submissionCalendar
          ? Object.keys(data.submissionCalendar).length
          : 55;

        setStats({
          totalSolved: data.totalSolved ?? 114,
          easySolved: data.easySolved ?? 59,
          totalEasy: data.totalEasy ?? 975,
          mediumSolved: data.mediumSolved ?? 46,
          totalMedium: data.totalMedium ?? 2146,
          hardSolved: data.hardSolved ?? 9,
          totalHard: data.totalHard ?? 989,
          ranking: data.ranking ? Number(data.ranking).toLocaleString() : LEETCODE_INFO.ranking,
          activeDays: activeDaysCount,
          isLoading: false,
          lastUpdated: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
        return;
      }
    } catch {
      // Primary failed, continue to fallback
    }

    // Fallback API
    try {
      const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
      if (res.ok) {
        const data = await res.json();
        const ac = data.totalSubmissions || [];
        const easy = ac.find((s: { difficulty: string }) => s.difficulty === "Easy")?.count ?? 59;
        const med = ac.find((s: { difficulty: string }) => s.difficulty === "Medium")?.count ?? 46;
        const hard = ac.find((s: { difficulty: string }) => s.difficulty === "Hard")?.count ?? 9;

        setStats((prev) => ({
          ...prev,
          totalSolved: data.totalSolved ?? prev.totalSolved,
          easySolved: easy,
          mediumSolved: med,
          hardSolved: hard,
          ranking: data.ranking ? Number(data.ranking).toLocaleString() : prev.ranking,
          isLoading: false,
          lastUpdated: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }));
        return;
      }
    } catch {
      // Both failed, keep fallback values
    }

    setStats((prev) => ({ ...prev, isLoading: false }));
  };

  useEffect(() => {
    fetchLiveStats();
  }, []);

  return (
    <SectionWrapper idName="leetcode">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Competitive Programming & DSA</p>
        <h2 className={styles.sectionHeadText}>LeetCode Journey.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(undefined, undefined, 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Consistent practice in Data Structures &amp; Algorithms using Java. Focused on
        writing clean, optimized solutions with optimal time and space complexity across
        Arrays, Two Pointers, Trees, Graphs, and Dynamic Programming.
      </motion.p>

      <div className="mt-12 flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Card: Detailed Breakdown */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="w-full lg:w-1/2 green-pink-gradient p-[1px] rounded-2xl shadow-card"
        >
          <div className="bg-tertiary rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFA116]/10 border border-[#FFA116]/30 flex items-center justify-center p-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFA116"
                      className="w-full h-full"
                    >
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607L9.405 7.64l4.077-4.364c.542-.58.508-1.5-.078-2.042A1.375 1.375 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white text-[20px] font-bold">LeetCode Stats</h3>
                      <button
                        onClick={fetchLiveStats}
                        title="Click to refresh live stats"
                        className="text-xs text-secondary hover:text-white transition-colors"
                      >
                        <span className={`inline-block ${stats.isLoading ? "animate-spin" : ""}`}>🔄</span>
                      </button>
                    </div>
                    <p className="text-secondary text-xs">@{LEETCODE_INFO.username}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Live Sync
                  </span>
                  <div className="flex items-center gap-1.5 bg-[#FFA116]/10 border border-[#FFA116]/30 px-3 py-1 rounded-full">
                    <span className="text-sm">🏅</span>
                    <span className="text-[#FFA116] text-xs font-semibold">
                      {LEETCODE_INFO.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Big Solved Number */}
              <div className="py-6 flex items-center justify-around border-b border-white/10">
                <div className="text-center">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {stats.totalSolved}
                  </span>
                  <p className="text-secondary text-xs uppercase tracking-wider mt-1">
                    Total Solved
                  </p>
                </div>
                <div className="h-10 w-[1px] bg-white/10"></div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    Java
                  </span>
                  <p className="text-secondary text-xs uppercase tracking-wider mt-1">
                    Primary Language
                  </p>
                </div>
                <div className="h-10 w-[1px] bg-white/10"></div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FFA116]">
                    {stats.activeDays}+
                  </span>
                  <p className="text-secondary text-xs uppercase tracking-wider mt-1">
                    Active Days
                  </p>
                </div>
              </div>

              {/* Difficulty Progress Bars */}
              <div className="space-y-4 my-6">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-semibold">
                    <span className={LEETCODE_INFO.easy.color}>Easy</span>
                    <span className="text-white">
                      {stats.easySolved}{" "}
                      <span className="text-secondary font-normal">
                        / {stats.totalEasy}
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${LEETCODE_INFO.easy.bg} transition-all duration-1000`}
                      style={{
                        width: `${Math.min(100, (stats.easySolved / 100) * 100)}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-semibold">
                    <span className={LEETCODE_INFO.medium.color}>Medium</span>
                    <span className="text-white">
                      {stats.mediumSolved}{" "}
                      <span className="text-secondary font-normal">
                        / {stats.totalMedium}
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${LEETCODE_INFO.medium.bg} transition-all duration-1000`}
                      style={{
                        width: `${Math.min(100, (stats.mediumSolved / 100) * 100)}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-semibold">
                    <span className={LEETCODE_INFO.hard.color}>Hard</span>
                    <span className="text-white">
                      {stats.hardSolved}{" "}
                      <span className="text-secondary font-normal">
                        / {stats.totalHard}
                      </span>
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${LEETCODE_INFO.hard.bg} transition-all duration-1000`}
                      style={{
                        width: `${Math.min(100, (stats.hardSolved / 20) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-secondary">
                Global Ranking: <span className="text-white font-medium">#{stats.ranking}</span>
              </span>
              <a
                href={LEETCODE_INFO.profileUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-[#915eff] hover:bg-[#804dee] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-[#915eff]/40"
              >
                <span>View LeetCode Profile</span>
                <span className="text-sm">&rarr;</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Card: Live LeetCard Visual Widget */}
        <motion.div
          variants={fadeIn("left", "spring", 0.4, 0.75)}
          className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 bg-black-200/90 border border-white/10 rounded-2xl shadow-card"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white text-[18px] font-bold">
                Live Performance Card
              </h4>
              <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Auto Synced
              </span>
            </div>
            <p className="text-secondary text-xs mb-6">
              Real-time representation of solved challenges, category ratios, and active submission ranking.
            </p>
          </div>

          <div className="flex items-center justify-center p-2 rounded-xl bg-black-100/60 border border-white/5 overflow-hidden">
            <a
              href={LEETCODE_INFO.profileUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full flex justify-center hover:scale-[1.02] transition-transform duration-300"
              title="Click to visit LeetCode profile"
            >
              <img
                src={`https://leetcard.jacoblin.cool/${LEETCODE_INFO.username}?theme=dark&font=Karma`}
                alt="LeetCode Stats Card"
                className="w-full max-w-[480px] object-contain rounded-lg"
                loading="lazy"
              />
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-secondary">
            <span>Primary Focus: Core Algorithms &amp; Optimization</span>
            <a
              href={LEETCODE_INFO.profileUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#FFA116] hover:underline font-medium"
            >
              leetcode.com/u/{LEETCODE_INFO.username}
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
