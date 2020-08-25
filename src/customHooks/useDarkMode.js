import { useEffect, useState } from 'react';
import { LIGHT, DARK } from '../config/theme'

export const useDarkMode = () => {
  const [theme, setTheme] = useState(LIGHT);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const themeToggler = () => {
    theme === LIGHT ? setMode(DARK) : setMode(LIGHT)
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
  }, []);

  return [theme, themeToggler]
};