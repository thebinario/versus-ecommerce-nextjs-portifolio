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
        <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;
