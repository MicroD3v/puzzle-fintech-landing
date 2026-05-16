import { motion } from "framer-motion";
import { CreditCard, TrendingUp, ShieldCheck, Cpu } from "lucide-react";

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Engineered for fast-scaling operational teams
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Eliminate fragmented banking logic. Handle card issuance, algorithmic
          liquidity, and treasury reporting inside one unified terminal.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >

        <motion.div
          variants={cardVariants}
          className="md:col-span-2 bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between group overflow-hidden relative shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-accentViolet/30 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-accentViolet/5 rounded-full blur-2xl group-hover:bg-accentViolet/10 transition-colors" />
          <div>
            <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-accentViolet rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
              <CreditCard />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
              Smart Multi-Currency Corporate Cards
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              Deploy localized virtual and physical cards built with custom
              individual user budgets, approval flows, and real-time transaction
              reporting maps.
            </p>
          </div>
          <motion.div
            whileHover={{ rotateY: 15, rotateX: -5, perspective: 1000 }}
            className="mt-8 self-center w-full max-w-sm h-48 bg-gradient-to-br from-accentViolet to-[#E13554] rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between cursor-none transition-all duration-300 hover:shadow-accentViolet/20"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase opacity-60 tracking-widest">
                  {" "}
                  Puzzle Business{" "}
                </p>
                <h4 className="text-lg font-mono font-bold mt-1">
                  {" "}
                  4532 •••• •••• 8824{" "}
                </h4>
              </div>
              <div className="w-10 h-8 bg-white/20 rounded-md backdrop-blur" />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase opacity-60">Card Holder</p>
                <p className="text-sm font-medium tracking-wide">Alex Rivers</p>
              </div>
              <span className="font-bold italic text-lg">VISA</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-accentEmerald/30 transition-all duration-300"
        >
          <div>
            <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-accentEmerald rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
              <TrendingUp />
            </div>
            <h3 className="text-xl font-bold mt-6 text-gray-900 dark:text-white">
              99.9% Yield Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Route idle payroll reserves dynamically across premium government
              treasury bills safely.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-amber-500/30 transition-all duration-300"
        >
          <div>
            <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-amber-500 rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
              <ShieldCheck />
            </div>
            <h3 className="text-xl font-bold mt-6 text-gray-900 dark:text-white">
              SOC2 Compliance Lock
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Enterprise identity governance layers handling cross-border
              transaction compliance routing natively.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-8 rounded-3xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl flex flex-col justify-between group overflow-hidden relative shadow-lg shadow-black/[0.02] dark:shadow-black/30 hover:border-accentViolet/30 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-accentEmerald/3 rounded-full blur-2xl group-hover:bg-accentEmerald/6 transition-colors" />
          <div>
            <div className="p-3 bg-black/[0.03] dark:bg-white/[0.03] text-accentViolet rounded-xl w-fit border border-black/[0.05] dark:border-white/[0.05]">
              <Cpu />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
              Deep-Linked Ledger API
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              Inject clean programmatic ledgers directly into QuickBooks, Xero,
              or legacy ERP architectures using simple webhooks.
            </p>
          </div>
          <div className="mt-8 bg-black/20 dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.05] rounded-xl p-4 font-mono text-xs text-gray-500 dark:text-gray-400 shadow-inner leading-relaxed">
            <div>
              <span className="text-accentEmerald">const</span> client =
              puzzle.initialize(
              <span className="text-white">"pk_live_8392"</span>);
            </div>
            <div>
              <span className="text-accentEmerald">await</span>{" "}
              client.transfers.route({`{`}
            </div>
            <div className="pl-4">
              amount: <span className="text-amber-500">250000</span>,
            </div>
            <div className="pl-4">
              currency: <span className="text-white">"USD"</span>
            </div>
            <div>{`})`};</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
