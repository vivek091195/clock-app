import {
  BottomClockDetails,
  ClockBackground,
  ClockDisplay,
  Greeting,
  LeftSection,
  Place,
  QuoteAndRefresh,
  Quote,
  QuoteAuthor,
  TimeZone,
  TopClockDetails,
  IconWrapper,
} from "./MainClock.style";
import { Button } from "../button/Button";
import { useApp } from "../../useApp";
import { THEMES_ENUM } from "../../utils/constants";
import { ReactComponent as IconSun } from "../../static/assets/icon-sun.svg";
import { ReactComponent as IconMoon } from "../../static/assets/icon-moon.svg";
import { ReactComponent as IconRefresh } from "../../static/assets/icon-refresh.svg";
import { ReactComponent as UpArrow } from "../../static/assets/icon-arrow-up.svg";
import { ReactComponent as DownArrow } from "../../static/assets/icon-arrow-down.svg";
import { DetailsPanel } from "../details/DetailsPanel";
import {
  getCountryFromTimeZone,
  getStateFromTimeZone,
} from "../../utils/dateTime";

const MainClock = () => {
  const {
    time,
    quote,
    author,
    currentTheme,
    isMoreActive,
    toggleMoreButtonHandler,
    getRandomQuoteAndAuthor,
  } = useApp();

  const timezoneState = getStateFromTimeZone();
  const timezoneCountry = getCountryFromTimeZone();
  return (
    <ClockBackground>
      {isMoreActive ? (
        <DetailsPanel />
      ) : (
        <TopClockDetails>
          <QuoteAndRefresh>
            <Quote>"{quote}"</Quote>
            <IconWrapper onClick={getRandomQuoteAndAuthor}>
              <IconRefresh />
            </IconWrapper>
          </QuoteAndRefresh>
          <QuoteAuthor>{author}</QuoteAuthor>
        </TopClockDetails>
      )}
      <BottomClockDetails>
        <LeftSection>
          <Greeting>
            {currentTheme?.name === THEMES_ENUM.LIGHT ? (
              <IconSun />
            ) : (
              <IconMoon />
            )}
            <span>
              Good{" "}
              {currentTheme?.name === THEMES_ENUM.LIGHT ? "morning" : "evening"}
              , it's currently
            </span>
          </Greeting>
          <ClockDisplay>
            {time}
            <TimeZone>IST</TimeZone>
          </ClockDisplay>
          <Place>
            In {timezoneState}
            {timezoneCountry ? "," : ""} {timezoneCountry}
          </Place>
        </LeftSection>
        <Button
          btnText={isMoreActive ? "less" : "more"}
          btnIcon={isMoreActive ? <DownArrow /> : <UpArrow />}
          onClick={toggleMoreButtonHandler}
        ></Button>
      </BottomClockDetails>
    </ClockBackground>
  );
};

export { MainClock };
