import { MoonIcon, SunIcon, PlusIcon } from '@heroicons/react/24/solid';

const Navbar = ({ darkMode, toggleDarkMode, onAddReservation }) => {
  return (
    <nav className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand section */}
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 shadow">
              <span className="text-white font-bold text-lg">VA</span>
            </div>
            <span className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Vresto
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onAddReservation}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[var(--button-bg)] hover:bg-[var(--button-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150"
            >
              <PlusIcon className="h-4 w-4 mr-2 -ml-1 text-lg" />
              Add Reservation
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;