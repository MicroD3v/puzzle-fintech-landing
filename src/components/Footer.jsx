import { PuzzleLogoIcon } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2.5 font-bold text-xl text-gray-900 dark:text-white">
            <PuzzleLogoIcon className="w-6 h-6" />
            <span className="tracking-tight">Puzzle</span>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
            Building localized virtual credit infrastructure, algorithmic
            liquidity mapping, and treasury governance models for scaling teams.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-4 w-full">
          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Platform
            </h4>

            <ul className="space-y-2.5 text-xs text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-accentViolet transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="hover:text-accentViolet transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-accentViolet transition">
                  Security Lock
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </h4>

            <ul className="space-y-2.5 text-xs text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-accentViolet transition">
                  Privacy Matrix
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-accentViolet transition">
                  Terms of Rail
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-accentViolet transition">
                  Compliance Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3 w-full">
          <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
            Stay updated
          </h4>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Get product engineering insights and capital strategies directly.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-2 flex gap-2 w-full max-w-md"
          >
            <input
              type="email"
              required
              placeholder="enter business email"
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-darkCard text-gray-900 dark:text-white outline-none focus:border-accentViolet transition"
            />

            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold bg-accentViolet text-white rounded-xl hover:bg-rose-600 shadow-md shadow-rose-500/10"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 border-t border-gray-100 dark:border-gray-900/60 text-center text-[11px] text-gray-400">
        © {new Date().getFullYear()} Puzzle Financial Technologies Inc. All
        architectural system metrics are simulated for demonstration.
      </div>
    </footer>
  );
}
