'use client';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} className="sr-only peer"/>
            <div
                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                {theme === 'dark' ? (
                    <svg className="absolute left-1 top-1 w-4 h-4 text-yellow-400" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 15a5 5 0 110-10 5 5 0 010 10zm0 2a7 7 0 100-14 7 7 0 000 14zm5.707-8.293a1 1 0 00-1.414 1.414 5.983 5.983 0 01-.587.672 6.012 6.012 0 01-.672.587 1 1 0 001.414 1.414 5.983 5.983 0 01.587-.672 6.012 6.012 0 01.672-.587 1 1 0 00-1.414-1.414zm-1.414-4.586a1 1 0 10-1.414-1.414 6.012 6.012 0 01-.672.587 5.983 5.983 0 01-.587.672 1 1 0 101.414 1.414 6.012 6.012 0 01.672-.587 5.983 5.983 0 01.587-.672zM7.05 7.05a1 1 0 10-1.414 1.414 5.983 5.983 0 01.672.587 6.012 6.012 0 01.587.672 1 1 0 101.414-1.414 6.012 6.012 0 01-.587-.672 5.983 5.983 0 01-.672-.587zM10 5a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM10 15a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"/>
                    </svg>
                ) : (
                    <svg className="absolute left-1 top-1 w-4 h-4 text-yellow-400" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm2-5a2 2 0 01-2 2V7a2 2 0 012 2z"
                              clipRule="evenodd"/>
                    </svg>
                )}
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
        </label>
    );
};

export default ThemeToggle;
