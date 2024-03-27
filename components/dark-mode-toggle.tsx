"use client"
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Example icon library
import React, { useEffect, useState } from 'react';

interface Theme {
  theme: 'light' | 'dark';
}

const DarkModeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme['theme']>(
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as Theme['theme'])
      : 'light' // Use system preference or default to light
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className={`rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-gray-600 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
};

export default DarkModeToggle;