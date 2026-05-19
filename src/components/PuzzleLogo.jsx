

export const PuzzleIcon = ({
                            className = "w-12 h-12",
                            color = "text-accentViolet",
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

export function PuzzleFullLogo() {
 return (
  <div className="inline-flex items-center gap-3 bg-white/40 dark:bg-[color-mix(in_srgb,var(--color-darkCard)_45%,transparent)] p-6 rounded-2xl border border-black/[0.04] dark:border-white/[0.06] backdrop-blur-xl shadow-lg shadow-black/[0.02] dark:shadow-black/30 select-none">
   <PuzzleIcon className="w-8 h-8" color="text-accentViolet" />
   <span className="text-gray-900 dark:text-white font-sans text-2xl font-extrabold tracking-tight">
        Puzzle
      </span>
  </div>
 );
}
