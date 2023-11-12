import styled from "styled-components";
import { FONT_SIZES } from "../../static/styles/typography";

interface ThemeColor {
  button: {
    background: string;
  };
  text: {
    color: string;
  };
}

const ButtonWrapper = styled.button<{ colors: ThemeColor }>`
  width: 150px;
  height: 60px;
  background: ${({ colors }) => colors.button.background};
`;

const Text = styled.button<{ colors: ThemeColor }>`
  font-size: ${FONT_SIZES.sm};
  color: ${({ colors }) => colors.text.color};
  text-transform: uppercase;
`;

export { ButtonWrapper, Text };
