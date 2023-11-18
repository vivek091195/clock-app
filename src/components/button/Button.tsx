import { ButtonWrapper, IconWrapper, Text } from "./Button.style";
import { ReactNode } from "react";

interface Props {
  btnText: string;
  btnIcon: ReactNode;
  onClick: () => void;
}

const Button = (props: Props) => {
  const { btnText, btnIcon, onClick } = props;
  return (
    <ButtonWrapper onClick={onClick}>
      <Text>{btnText}</Text>
      <IconWrapper>{btnIcon}</IconWrapper>
    </ButtonWrapper>
  );
};

export { Button };
