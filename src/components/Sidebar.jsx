import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Music2, Library, Moon, Sun } from 'lucide-react';

function Sidebar({ isDarkMode, toggleDarkMode }) {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-colors ${
      isActive ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`;

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 shadow-md p-5 hidden md:block">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-500">🎵 MusicWeb</h1>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClass}>
          <Home size={20} /> Trang chủ
        </NavLink>
        <NavLink to="/library" className={linkClass}>
          <Library size={20} /> Kho nhạc
        </NavLink>
        <NavLink to="/playlist" className={linkClass}>
          <Music2 size={20} /> Playlist
        </NavLink>
      </nav>

      <div className="mt-10">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-3 text-sm px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white w-full hover:opacity-80"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
