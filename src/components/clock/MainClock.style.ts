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

const GreetingText = styled.p`
  text-transform: uppercase;
  font-size: ${FONT_SIZES.md};
  color: ${({ theme }) => theme.colors.text};
`;

const ClockDisplay = styled.p`
  font-size: 12.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const Place = styled.p`
  font-size: ${FONT_SIZES.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const RightSection = styled.div``;

export {
  ClockBackground,
  TopClockDetails,
  Quote,
  QuoteAuthor,
  BottomClockDetails,
  LeftSection,
  GreetingText,
  ClockDisplay,
  Place,
  RightSection,
};
