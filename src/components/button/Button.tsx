import { ReactComponent as UpArrow } from "../../static/assets/icon-arrow-up.svg";
import { ReactComponent as DownArrow } from "../../static/assets/icon-arrow-down.svg";
import { ButtonWrapper, Text } from "./Button.style";
import { useTheme } from "../../theme/useTheme";

interface Props {
  isMoreActive: boolean;
  btnText: string;
}

const Button = (props: Props) => {
  const { btnText, isMoreActive } = props;
  const { currentTheme } = useTheme();
  return (
    <ButtonWrapper colors={currentTheme.colors}>
      <Text colors={currentTheme.colors}>{btnText}</Text>
      {isMoreActive ? <UpArrow /> : <DownArrow />}
    </ButtonWrapper>
  );
};

export { Button };
