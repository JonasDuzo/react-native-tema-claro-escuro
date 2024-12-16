// contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../styles/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const colorScheme = useColorScheme();
    const [manualTheme, setManualTheme] = useState(null);

    const theme = manualTheme
        ? (manualTheme === 'dark' ? darkTheme : lightTheme)
        : (colorScheme === 'dark' ? darkTheme : lightTheme);

    const toggleTheme = () => {
        setManualTheme(current =>
            current === 'dark' ? 'light' : 'dark'
        );
    };

    const resetToSystemTheme = () => {
        setManualTheme(null);
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
            resetToSystemTheme,
            isSystemTheme: manualTheme === null,
            currentTheme: manualTheme || colorScheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useCustomTheme = () => useContext(ThemeContext);