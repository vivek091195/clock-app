import { useEffect, useState } from "react";
import { getItemFromLocalStorage } from "../utils/localStorage";
import { THEME_KEY } from "../utils/constants";
import { changeThemeDependingOnTime } from "../utils/theme";

const useTheme = () => {
  const theme = changeThemeDependingOnTime();
  const themes = getItemFromLocalStorage(THEME_KEY);
  const [currentTheme, setCurrentTheme] = useState(themes.data[theme]);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    themes,
    currentTheme,
    themeLoaded,
    setCurrentTheme,
  };
};

export { useTheme };
