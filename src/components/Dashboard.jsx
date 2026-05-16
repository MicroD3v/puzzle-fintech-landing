import { useState } from "react";
import { motion } from "framer-motion";

export default function DashboardChart() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const timelinePoints = [
    { name: "Mon", x: 25, inflow: "$12,400", outflow: "$8,100" },
    { name: "Tue", x: 133, inflow: "$34,200", outflow: "$14,500" },
    { name: "Wed", x: 242, inflow: "$21,100", outflow: "$22,000" },
    { name: "Thu", x: 350, inflow: "$28,400", outflow: "$19,200" },
    { name: "Fri", x: 458, inflow: "$58,900", outflow: "$24,100" },
    { name: "Sat", x: 566, inflow: "$84,200", outflow: "$21,400" },
    { name: "Sun", x: 675, inflow: "$76,500", outflow: "$12,800" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (customDelay) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: customDelay, duration: 1.8, ease: "easeInOut" },
        opacity: { delay: customDelay, duration: 0.2 },
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-5xl mx-auto p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-darkCard/40 backdrop-blur-xl shadow-2xl shadow-black/50 text-white select-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div>
          <motion.h3
            variants={itemVariants}
            className="text-xl font-bold tracking-tight"
          >
            Liquidity Vectors
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-400 mt-1"
          >
            Real-time ledger data streams monitoring core cashflow efficiency
            profiles.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 text-xs font-semibold"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accentViolet shadow-sm shadow-accentViolet/50" />
            <span className="text-gray-300">Inflow</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            <span className="text-gray-400">Outflow</span>
          </div>
        </motion.div>
      </div>
      <div className="relative w-full h-72 md:h-80 mt-8 group/chart">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] font-medium text-gray-600 tracking-wider pb-6">
          <div className="w-full flex items-center gap-4">
            <span>9000</span>
            <div className="h-px bg-white/[0.03] w-full" />
          </div>
          <div className="w-full flex items-center gap-4">
            <span>5000</span>
            <div className="h-px bg-white/[0.03] w-full" />
          </div>
          <div className="w-full flex items-center gap-4">
            <span>3000</span>
            <div className="h-px bg-white/[0.03] w-full" />
          </div>
          <div className="w-full flex items-center gap-4">
            <span>1000</span>
            <div className="h-px bg-white/[0.03] w-full" />
          </div>
          <div className="w-full flex items-center gap-4">
            <span>0</span>
            <div className="h-px bg-white/[0.03] w-full" />
          </div>
        </div>
        <svg
          className="absolute inset-0 w-full h-full pb-6 z-10"
          viewBox="0 0 700 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="inflowGlow" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-accentViolet)"
                stopOpacity="0.15"
              />
              <stop
                offset="100%"
                stopColor="var(--color-accentViolet)"
                stopOpacity="0.0"
              />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            d="M 0 190 Q 116 110 233 170 T 466 110 T 700 60 L 700 320 L 0 320 Z"
            fill="url(#inflowGlow)"
          />
          <motion.path
            variants={pathVariants}
            custom={0.3}
            d="M 0 250 Q 116 210 233 190 T 466 170 T 700 220"
            fill="none"
            stroke="#4b5563"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <motion.path
            variants={pathVariants}
            custom={0.6}
            d="M 0 190 Q 116 110 233 170 T 466 110 T 700 60"
            fill="none"
            stroke="var(--color-accentViolet)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 z-20 flex justify-between pb-6">
          {timelinePoints.map((pt, idx) => (
            <div
              key={idx}
              className="relative h-full w-full flex justify-center cursor-none"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {hoveredIdx === idx && (
                <>
                  <motion.div
                    layoutId="trackingBar"
                    className="absolute inset-y-0 w-px bg-gradient-to-b from-accentViolet/40 via-accentViolet/20 to-transparent pointer-events-none"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -top-12 p-2 rounded-lg border border-white/[0.08] bg-[#160F12]/90 backdrop-blur-md text-[11px] shadow-xl flex gap-3 pointer-events-none whitespace-nowrap"
                  >
                    <div>
                      <span className="text-gray-400">Inflow:</span>{" "}
                      <span className="text-accentViolet font-bold">
                        {pt.inflow}
                      </span>
                    </div>
                    <div className="w-px bg-white/[0.08]" />
                    <div>
                      <span className="text-gray-400">Outflow:</span>{" "}
                      <span className="text-gray-300 font-bold">
                        {pt.outflow}
                      </span>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between px-4 -mt-2 text-xs font-semibold text-gray-500">
        {timelinePoints.map((pt, idx) => (
          <span
            key={idx}
            className={`transition-colors duration-200 ${hoveredIdx === idx ? "text-white" : ""}`}
          >
            {pt.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/[0.06] mt-8 pt-8">
        <motion.div variants={itemVariants} className="group cursor-none">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block">
            Gross Burn
          </span>
          <div className="text-2xl font-extrabold mt-1 text-white group-hover:text-accentViolet transition-colors duration-300">
            $31,240
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="group cursor-none">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block">
            Net Runway
          </span>
          <div className="text-2xl font-extrabold mt-1 text-accentEmerald">
            24.5 Mos
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="group cursor-none">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block">
            Treasury Yield
          </span>
          <div className="text-2xl font-extrabold mt-1 text-white group-hover:text-indigo-400 transition-colors duration-300">
            4.82%
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
