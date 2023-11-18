import { useEffect, useState } from "react";
import Quotes from "./utils/quotes.json";
import { getTimeInDisplayFormat } from "./utils/dateTime";
import { useTheme } from "./theme/useTheme";
import { changeThemeDependingOnTime } from "./utils/theme";

const useApp = () => {
  const [isMoreActive, setIsMoreActive] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState(getTimeInDisplayFormat());

  const { currentTheme, setCurrentTheme, themes } = useTheme();

  const toggleMoreButtonHandler = () => {
    setIsMoreActive((prevState) => !prevState);
  };

  const getRandomQuoteAndAuthor = () => {
    const randomId = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomId].quote);
    setAuthor(Quotes[randomId].author);
  };

  useEffect(() => {
    getRandomQuoteAndAuthor();
    const interval = setInterval(() => {
      const theme = changeThemeDependingOnTime();
      setCurrentTheme(themes.data[theme]);
      setTime(getTimeInDisplayFormat());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    time,
    quote,
    author,
    isMoreActive,
    currentTheme,
    getRandomQuoteAndAuthor,
    toggleMoreButtonHandler,
  };
};

export { useApp };
