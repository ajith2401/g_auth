import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Custom Hook
export const useTheme = () => {
    return useContext(ThemeContext);
};

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Load saved theme from localStorage or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        // Apply the theme to the HTML tag
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save the theme preference
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
