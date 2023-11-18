import styled, { css } from "styled-components";
import { FONT_SIZES } from "../../static/styles/typography";
import { mobile, tablet } from "../../utils/ScreenSizes";

const ClockBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-image: ${({ theme }) =>
    `url(${theme.device.desktop.backgroundImage})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 3.5rem;

  ${tablet(css`
    background-image: ${({ theme }) =>
      `url(${theme.device.tablet.backgroundImage})`};
  `)};

  ${mobile(css`
    background-image: ${({ theme }) =>
      `url(${theme.device.mobile.backgroundImage})`};
    padding-top: 2rem;
  `)};
`;

const TopClockDetails = styled.div`
  margin: 0 10.5rem;
  width: 100%;

  ${tablet(css`
    margin-left: 4rem;
  `)};

  ${mobile(css`
    margin-left: 1.62rem;
  `)};
`;

const QuoteAndRefresh = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

  ${tablet(css`
    width: 100%;
    max-width: 80%;
  `)};

  ${mobile(css`
    width: 100%;
    max-width: 80%;
  `)};
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
  margin: 0 10.5rem 6rem;

  ${tablet(css`
    margin: unset;
    margin-left: 4rem;
    margin-top: 3.5rem;
    flex-direction: column;
    align-items: flex-start;
  `)};

  ${mobile(css`
    flex-direction: column;
    margin: unset;
    margin-left: 1.6rem;
    margin-top: 6rem;
    align-items: flex-start;
  `)};
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

    ${tablet(css`
      font-size: ${FONT_SIZES.sm2};
    `)};

    ${mobile(css`
      font-size: 0.9375rem;
    `)};
  }
`;

const ClockDisplay = styled.p`
  font-size: 12.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;

  ${tablet(css`
    font-size: 11rem;
  `)};

  ${mobile(css`
    font-size: 6.25rem;
  `)};
`;

const TimeZone = styled.span`
  font-size: ${FONT_SIZES.xl};
  font-weight: normal;

  ${tablet(css`
    font-size: ${FONT_SIZES.lg};
  `)};

  ${mobile(css`
    font-size: 0.9375rem;
  `)};
`;

const Place = styled.p`
  font-size: ${FONT_SIZES.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  ${tablet(css`
    font-size: ${FONT_SIZES.sm2};
  `)};

  ${mobile(css`
    font-size: 0.9375rem;
  `)};
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
