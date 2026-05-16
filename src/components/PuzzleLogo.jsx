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
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 12l10 5 10-5" />
    <path d="M2 17l10 5 10-5" />
  </svg>
);
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
