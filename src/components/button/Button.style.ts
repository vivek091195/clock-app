import styled from "styled-components";
import { FONT_SIZES } from "../../static/styles/typography";

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
`;

export { ButtonWrapper, Text };
