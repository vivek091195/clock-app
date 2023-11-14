import styled from "styled-components";
import backgroundDayTimeImage from "../../static/assets/desktop/bg-image-daytime.jpg";
import backgroundNightTimeImage from "../../static/assets/desktop/bg-image-nighttime.jpg";
import { FONT_SIZES } from "../../static/styles/typography";

const ClockBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-image: url(${backgroundDayTimeImage});
  padding: 3.5rem 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopClockDetails = styled.div``;

const Quote = styled.p`
  font-size: ${FONT_SIZES.sm2};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.75rem;
  width: 50%;
`;

const QuoteAuthor = styled.p`
  font-size: ${FONT_SIZES.sm2};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin-top: 1rem;
`;

const BottomClockDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LeftSection = styled.div``;

const Greeting = styled.p`
  display: flex;
  align-items: center;

  > span {
    text-transform: uppercase;
    font-size: ${FONT_SIZES.sm3};
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 0.25rem;
    margin-left: 1rem;
  }
`;

const ClockDisplay = styled.p`
  font-size: 12.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const TimeZone = styled.span`
  font-size: ${FONT_SIZES.xl};
  font-weight: normal;
`;

const Place = styled.p`
  font-size: ${FONT_SIZES.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const RightSection = styled.div``;

export {
  ClockBackground,
  TopClockDetails,
  Quote,
  QuoteAuthor,
  BottomClockDetails,
  LeftSection,
  Greeting,
  ClockDisplay,
  TimeZone,
  Place,
  RightSection,
};
