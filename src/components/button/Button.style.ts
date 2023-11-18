import styled, { css } from "styled-components";
import { FONT_SIZES } from "../../static/styles/typography";
import { mobile, tablet } from "../../utils/ScreenSizes";

const ButtonWrapper = styled.button`
  width: 135px;
  height: 55px;
  background: ${({ theme }) => theme.colors.button.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 1.75rem;
  cursor: pointer;
  position: relative;

  ${tablet(css`
    margin: 5rem 0 4rem;
    width: 146px;
    height: 56px;
  `)};

  ${mobile(css`
    margin: 3rem 0 2.5rem;
    width: 115px;
    height: 40px;
  `)};
`;

const Text = styled.button`
  font-size: ${FONT_SIZES.sm};
  color: ${({ theme }) => theme.colors.button.text};
  text-transform: uppercase;
  letter-spacing: 0.3125rem;
  background-color: #fff;
  font-weight: 700;
  opacity: 0.5;
  cursor: pointer;

  ${tablet(css`
    font-size: ${FONT_SIZES.sm};
  `)};

  ${mobile(css`
    font-size: 0.75rem;
    margin-left: 6px;
  `)};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 7px;
  > svg {
    ${tablet(css`
      font-size: ${FONT_SIZES.sm};
    `)};

    ${mobile(css`
      width: 30px;
      height: 30px;
    `)};
  }
`;

export { ButtonWrapper, Text, IconWrapper };
