import React from 'react';
import { useTheme } from '../components/ThemeProvider';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            navigate('/login'); // Redirect to login page after sign out
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="flex gap-2"> {/* Added flex and gap for button spacing */}
            <button
                className="p-2 rounded-md bg-gray-300 dark:bg-gray-800 text-black dark:text-white"
                onClick={toggleTheme}
            >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>

            <button
                className="p-2 rounded-md bg-gray-300 dark:bg-gray-800 text-black dark:text-white"
                onClick={handleSignOut}
            >
                Sign out
            </button>
        </div>
    );
};

export default ThemeSwitch;