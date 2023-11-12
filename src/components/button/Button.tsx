import { ReactComponent as UpArrow } from "../../static/assets/icon-arrow-up.svg";
import { ReactComponent as DownArrow } from "../../static/assets/icon-arrow-down.svg";
import { ButtonWrapper, Text } from "./Button.style";

interface Props {
  isMoreActive: boolean;
  btnText: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  const { btnText, isMoreActive, onClick } = props;
  return (
    <ButtonWrapper onClick={onClick}>
      <Text>{btnText}</Text>
      {isMoreActive ? <UpArrow /> : <DownArrow />}
    </ButtonWrapper>
  );
};

export { Button };
