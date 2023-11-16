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
import { getTimeInDisplayFormat } from "../../utils/dateTime";
import { useTheme } from "../../theme/useTheme";
import { THEMES_ENUM } from "../../utils/constants";
import { ReactComponent as IconSun } from "../../static/assets/icon-sun.svg";
import { ReactComponent as IconMoon } from "../../static/assets/icon-moon.svg";
import { ReactComponent as IconRefresh } from "../../static/assets/icon-refresh.svg";
import { ReactComponent as UpArrow } from "../../static/assets/icon-arrow-up.svg";
import { ReactComponent as DownArrow } from "../../static/assets/icon-arrow-down.svg";

const MainClock = () => {
  const { currentTheme } = useTheme();
  const {
    quote,
    author,
    isMoreActive,
    toggleMoreButtonHandler,
    getRandomQuoteAndAuthor,
  } = useApp();
  return (
    <ClockBackground>
      <TopClockDetails>
        <QuoteAndRefresh>
          <Quote>"{quote}"</Quote>
          <IconWrapper onClick={getRandomQuoteAndAuthor}>
            <IconRefresh />
          </IconWrapper>
        </QuoteAndRefresh>
        <QuoteAuthor>{author}</QuoteAuthor>
      </TopClockDetails>
      <BottomClockDetails>
        <LeftSection>
          <Greeting>
            {currentTheme === THEMES_ENUM.LIGHT ? <IconSun /> : <IconMoon />}
            <span>
              Good {currentTheme === THEMES_ENUM.LIGHT ? "morning" : "evening"},
              it's currently
            </span>
          </Greeting>
          <ClockDisplay>
            {getTimeInDisplayFormat()}
            <TimeZone>IST</TimeZone>
          </ClockDisplay>
          <Place>In london, uk</Place>
        </LeftSection>
        <Button
          btnText={isMoreActive ? "more" : "less"}
          btnIcon={isMoreActive ? <UpArrow /> : <DownArrow />}
          onClick={toggleMoreButtonHandler}
        ></Button>
      </BottomClockDetails>
    </ClockBackground>
  );
};

export { MainClock };
