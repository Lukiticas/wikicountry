import { ArrowLeft } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonBody } from "./SimpleButton.styles";

const SimpleButton = ({ title, toDo, ...args }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ButtonBody onClick={() => toDo()} {...args}>
      <ArrowLeft size={24} color={colors.wordPrimary} />
      {title}
    </ButtonBody>
  );
};

export default SimpleButton;
