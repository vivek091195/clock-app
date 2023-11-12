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
} from "./MainClock.style";
import { Button } from "../button/Button";

const MainClock = () => {
  return (
    <ClockBackground>
      <Quote></Quote>
      <QuoteAuthor></QuoteAuthor>
      <BottomClockDetails>
        <LeftSection>
          <GreetingText></GreetingText>
          <ClockDisplay></ClockDisplay>
          <Place></Place>
        </LeftSection>
        <RightSection>
          <Button btnText="more" isMoreActive={true}></Button>
        </RightSection>
      </BottomClockDetails>
    </ClockBackground>
  );
};

export { MainClock };
