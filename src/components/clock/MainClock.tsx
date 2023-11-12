import React from "react";
import {
  BottomClockDetails,
  ClockBackground,
  ClockDisplay,
  GreetingText,
  LeftSection,
  Place,
  Quote,
  QuoteAuthor,
  RightSection,
  TopClockDetails,
} from "./MainClock.style";
import { Button } from "../button/Button";
import { useApp } from "../../useApp";

const MainClock = () => {
  const { getRandomQuoteAndAuthor, isMoreActive, toggleMoreButtonHandler } =
    useApp();
  const { quote, author } = getRandomQuoteAndAuthor();
  return (
    <ClockBackground>
      <TopClockDetails>
        <Quote>"{quote}"</Quote>
        <QuoteAuthor>{author}</QuoteAuthor>
      </TopClockDetails>
      <BottomClockDetails>
        <LeftSection>
          <GreetingText>Good morning, it's currently</GreetingText>
          <ClockDisplay>11:37</ClockDisplay>
          <Place>In london, uk</Place>
        </LeftSection>
        <Button
          btnText="more"
          isMoreActive={isMoreActive}
          onClick={toggleMoreButtonHandler}
        ></Button>
      </BottomClockDetails>
    </ClockBackground>
  );
};

export { MainClock };
