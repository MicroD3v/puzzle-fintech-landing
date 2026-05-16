import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, RefreshCw } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 flex flex-col items-center justify-center overflow-visible px-6 text-center">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-[550px] sm:h-[550px] bg-[color-mix(in_srgb,var(--color-accentViolet)_10%,transparent)] rounded-full blur-[140px] -z-10 mix-blend-plus-lighter animate-[pulse_8s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-[550px] sm:h-[550px] bg-[color-mix(in_srgb,var(--color-accentEmerald)_6%,transparent)] rounded-full blur-[160px] -z-10 mix-blend-plus-lighter delay-1000 animate-[pulse_10s_ease-in-out_infinite] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_30%,transparent)] text-accentViolet border border-black/[0.05] dark:border-white/[0.08] backdrop-blur-xl shadow-sm">
          Next-Gen Piece-by-Piece Financial Control
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Solve Your Company’s <br />
          <span className="bg-gradient-to-r from-accentViolet to-indigo-400 bg-clip-text text-transparent">
            Financial Puzzle
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Connect your accounts, deploy multi-signature corporate cards, and
          optimize dynamic cashflows instantly with AI budgeting frameworks.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md"
      >
        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold cursor-none transition-all duration-300 transform-gpu will-change-transform bg-accentViolet shadow-xl shadow-accentViolet/20 hover:bg-rose-600 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/20 active:scale-[0.98]">
          Open Free Account <ArrowRight size={18} />
        </button>

        <button
          className="px-8 py-4 rounded-xl border border-black/[0.06] dark:border-white/[0.08] text-gray-700 dark:text-gray-300 font-semibold cursor-none transition-all duration-300 transform-gpu will-change-transform
  bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_40%,transparent)] backdrop-blur-xl shadow-sm
  hover:bg-white/60 dark:hover:bg-white/[0.02]
  hover:border-black/[0.12] dark:hover:border-white/[0.15]
  hover:text-white
  hover:scale-[1.01]
  
  active:scale-[0.98]"
        >
          Book a Demo
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-xs font-medium max-w-3xl w-full px-4"
      >
        {/* Card 1 */}
        <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl border border-black/[0.04] dark:border-white/[0.06] bg-white/30 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_30%,transparent)] backdrop-blur-xl shadow-md shadow-black/[0.02] dark:shadow-black/40">
          <Shield className="text-accentEmerald shrink-0" size={16} />
          <span>Bank-Grade Security</span>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl border border-black/[0.04] dark:border-white/[0.06] bg-white/30 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_30%,transparent)] backdrop-blur-xl shadow-md shadow-black/[0.02] dark:shadow-black/40">
          <Zap className="text-amber-500 shrink-0" size={16} />
          <span>Instant Onboarding</span>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl border border-black/[0.04] dark:border-white/[0.06] bg-white/30 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_30%,transparent)] backdrop-blur-xl shadow-md shadow-black/[0.02] dark:shadow-black/40 sm:col-span-1">
          <RefreshCw
            className="text-accentViolet shrink-0 animate-[spin_8s_linear_infinite]"
            size={16}
          />
          <span>Real-time Syncing</span>
        </div>
      </motion.div>
    </section>
  );
}
