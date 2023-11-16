import { ButtonWrapper, Text } from "./Button.style";
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
      {btnIcon}
    </ButtonWrapper>
  );
};

export { Button };
