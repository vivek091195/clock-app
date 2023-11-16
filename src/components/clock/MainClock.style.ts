import styled from "styled-components";
import { FONT_SIZES } from "../../static/styles/typography";

const ClockBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-image: ${({ theme }) => `url(${theme.backgroundImage})`};
  padding: 3.5rem 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopClockDetails = styled.div``;

const QuoteAndRefresh = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-left: 1rem;
  cursor: pointer;
`;

const Quote = styled.p`
  font-size: ${FONT_SIZES.sm2};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.75rem;
  max-width: 40%;
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
  QuoteAndRefresh,
  IconWrapper,
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
