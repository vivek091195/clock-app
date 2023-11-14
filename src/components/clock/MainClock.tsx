import React from "react";
import {
  BottomClockDetails,
  ClockBackground,
  ClockDisplay,
  Greeting,
  LeftSection,
  Place,
  Quote,
  QuoteAuthor,
  TimeZone,
  TopClockDetails,
} from "./MainClock.style";
import { Button } from "../button/Button";
import { useApp } from "../../useApp";
import { getTimeInDisplayFormat } from "../../utils/dateTime";
import { ReactComponent as IconSun } from "../../static/assets/icon-sun.svg";
import { ReactComponent as IconMoon } from "../../static/assets/icon-moon.svg";

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
          <Greeting>
            <IconSun />
            <span>Good morning, it's currently</span>
          </Greeting>
          <ClockDisplay>
            {getTimeInDisplayFormat()}
            <TimeZone>IST</TimeZone>
          </ClockDisplay>
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
