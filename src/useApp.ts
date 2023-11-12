import { useCallback, useState } from "react";
import Quotes from "./utils/quotes.json";

const useApp = () => {
  const [isMoreActive, setIsMoreActive] = useState(false);

  const toggleMoreButtonHandler = () => {
    setIsMoreActive((prevState) => !prevState);
  };

  const getRandomQuoteAndAuthor = useCallback(() => {
    const randomId = Math.floor(Math.random() * Quotes.length);
    return {
      quote: Quotes[randomId].quote,
      author: Quotes[randomId].author,
    };
  }, []);

  return {
    isMoreActive,
    toggleMoreButtonHandler,
    getRandomQuoteAndAuthor,
  };
};

export { useApp };
