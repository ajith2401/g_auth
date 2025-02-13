import React from 'react';
import { useTheme } from '../components/ThemeProvider';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="p-2 rounded-md bg-gray-300 dark:bg-gray-800 text-black dark:text-white"
            onClick={toggleTheme}
        >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default ThemeSwitch;
