import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Colors, DarkColors } from '../theme/colors';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  isDarkMode: boolean;
  mode: ThemeMode;
  toggleTheme: () => void;
  colors: typeof Colors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDarkMode = mode === 'dark';
  const colors = isDarkMode ? DarkColors : Colors;

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        mode,
        toggleTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
