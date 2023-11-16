import { useEffect, useState } from "react";
import { getItemFromLocalStorage } from "../utils/localStorage";
import { THEME_KEY } from "../utils/constants";

const ONE_MINUTE_DELAY_IN_MS = 60000;

const useTheme = () => {
  const themes = getItemFromLocalStorage(THEME_KEY);
  const [currentTheme, setCurrentTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const changeThemeDependingOnTime = () => {
    const hourOfDay = new Date().getHours();
    if (hourOfDay >= 8 && hourOfDay < 18) {
      setCurrentTheme(themes.data.light);
    } else {
      setCurrentTheme(themes.data.dark);
    }
  };

  useEffect(() => {
    setThemeLoaded(true);
    changeThemeDependingOnTime();

    const interval = setInterval(() => {
      changeThemeDependingOnTime();
    }, ONE_MINUTE_DELAY_IN_MS);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    currentTheme,
    themeLoaded,
  };
};

export { useTheme };
