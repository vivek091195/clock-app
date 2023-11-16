import { useCallback, useEffect, useState } from "react";
import Quotes from "./utils/quotes.json";

const useApp = () => {
  const [isMoreActive, setIsMoreActive] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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
  }, []);

  return {
    quote,
    author,
    isMoreActive,
    getRandomQuoteAndAuthor,
    toggleMoreButtonHandler,
  };
};

export { useApp };
