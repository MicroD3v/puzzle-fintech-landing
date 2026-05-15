import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do multi-signature corporate cards work?",
      a: "Multi-signature cards require designated team leads or executives to approve transactions above your customized thresholds in real time before funds clear our ledger gates.",
    },
    {
      q: "Can I bridge my existing banking rails into Puzzle?",
      a: "Yes. Puzzle links directly with over 11,000 global banking networks using secure SOC2-compliant API layers, cleaning up data fragmentation instantly.",
    },
    {
      q: "Is my corporate idle yield capital locked?",
      a: "Not at all. Capital routed into our automated government treasury bill vectors retains next-day settlement liquidity, meaning your payroll remains completely accessible.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 max-w-4xl mx-auto px-4 sm:px-6 border-t border-gray-100 dark:border-gray-900/50"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Everything you need to know about Puzzle's capital architecture.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-darkCard overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50/50 dark:hover:bg-slate-900/40"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-accentViolet" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-900/40">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
