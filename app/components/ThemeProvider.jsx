'use client';

import { createContext, useContext } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

const defaultThemeContext = {
  theme: 'dark',
  accentColor: '#A855F7',
  updateTheme: () => {},
  updateAccentColor: () => {}
};

const ThemeContext = createContext(defaultThemeContext);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const { theme, setTheme } = useNextTheme();
  const [accentColor, setAccentColor] = useState(defaultThemeContext.accentColor);

  useEffect(() => {
    const savedAccentColor = localStorage.getItem('accentColor');
    if (savedAccentColor) setAccentColor(savedAccentColor);
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const updateAccentColor = (newColor) => {
    setAccentColor(newColor);
    localStorage.setItem('accentColor', newColor);
    document.documentElement.style.setProperty('--primary', newColor);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', accentColor);
  }, [accentColor]);

  return (
    <ThemeContext.Provider value={{ theme, accentColor, updateTheme, updateAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
}