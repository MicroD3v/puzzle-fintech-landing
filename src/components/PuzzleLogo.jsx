// Crisp, high-fidelity brand mark that scales smoothly to any resolution
export const PuzzleIcon = ({
  className = "w-12 h-12",
  color = "text-indigo-500",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} ${color}`}
  >
    {/* Isometric Top Layer */}
    <path d="M12 2L2 7l10 5 10-5-10-5z" />

    {/* Isometric Middle Layer */}
    <path d="M2 12l10 5 10-5" />

    {/* Isometric Bottom Layer */}
    <path d="M2 17l10 5 10-5" />
  </svg>
);

// Full Horizontal Lockup variant matching your dark-mode application aesthetic
export default function PuzzleFullLogo() {
  return (
    <div className="inline-flex items-center gap-3 bg-slate-950 p-6 rounded-2xl border border-gray-800">
      <PuzzleIcon className="w-8 h-8" color="text-[#6366F1]" />
      <span className="text-white font-sans text-2xl font-extrabold tracking-tight select-none">
        Puzzle
      </span>
    </div>
  );
}
