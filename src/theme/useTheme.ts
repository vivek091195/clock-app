import { useEffect, useState } from "react";
import { getItemFromLocalStorage } from "../utils/localStorage";
import { THEME_KEY } from "../utils/constants";

const useTheme = () => {
  const themes = getItemFromLocalStorage(THEME_KEY);
  const [currentTheme, setCurrentTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const localTheme = getItemFromLocalStorage(THEME_KEY);
    localTheme
      ? setCurrentTheme(localTheme)
      : setCurrentTheme(themes.data.light);
    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    currentTheme,
    themeLoaded,
  };
};

export { useTheme };
