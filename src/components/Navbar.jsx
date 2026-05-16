import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export const PuzzleLogoIcon = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} text-accentViolet`}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 12l10 5 10-5" />/
    <path d="M2 17l10 5 10-5" />
  </svg>
);

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-black/[0.05] dark:border-white/[0.06] bg-white/40 dark:bg-darkBg/40 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 font-bold text-xl text-gray-900 dark:text-white group cursor-none"
        >
          <PuzzleLogoIcon className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
          <span className="tracking-tight">Puzzle</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-300 font-medium">
          <a
            href="#features"
            className="hover:text-accentViolet transition cursor-none"
          >
            Features
          </a>
          <a
            href="#dashboard"
            className="hover:text-accentViolet transition cursor-none"
          >
            Dashboard
          </a>
          <a
            href="#pricing"
            className="hover:text-accentViolet transition cursor-none"
          >
            Pricing
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:scale-105 transition cursor-none"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="px-6 py-2.5 min-w-[125px] rounded-xl text-white text-sm font-semibold cursor-none transition-all duration-300 transform-gpu will-change-transform bg-accentViolet shadow-md shadow-accentViolet/10 hover:bg-[#d9304f] hover:scale-[1.03] hover:shadow-lg hover:shadow-accentViolet/25 active:scale-[0.97]">
            Get Started
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-18 left-0 w-full bg-white dark:bg-darkBg border-b border-gray-200 dark:border-gray-800 px-6 py-6 flex flex-col gap-4 shadow-xl"
        >
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 py-2"
          >
            Features
          </a>
          <a
            href="#dashboard"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 py-2"
          >
            Dashboard
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 py-2"
          >
            Pricing
          </a>
          <button className="w-full mt-2 py-3 rounded-xl text-white font-semibold cursor-none transition-all duration-300 transform-gpu will-change-transform bg-accentViolet shadow-md shadow-accentViolet/10 hover:bg-[#d9304f] active:scale-[0.98]">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}
