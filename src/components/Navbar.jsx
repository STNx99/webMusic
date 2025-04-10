import { Link, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import { FaMoon, FaSun, FaMusic } from 'react-icons/fa';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? 'text-green-500 font-semibold'
      : 'text-gray-400 hover:text-white';

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 text-black dark:text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center gap-2 text-xl font-bold">
        <FaMusic className="text-green-500" />
        <span>MyMusic</span>
      </div>

      <div className="flex items-center gap-6 text-sm md:text-base">
        <Link to="/" className={isActive('/')}>Giới thiệu</Link>
        <Link to="/library" className={isActive('/library')}>Kho nhạc</Link>
        <Link to="/login" className={isActive('/login')}>Đăng nhập</Link>

        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          title="Đổi theme"
        >
          {theme === 'dark' ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
}
