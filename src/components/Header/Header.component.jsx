import { Outlet } from "react-router-dom";
import { HeaderBody, HeaderTitle, HeaderToggle } from "./header.styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Moon } from "phosphor-react";

const Header = ({ themeHandler }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <HeaderBody>
        <HeaderTitle>Where in the world?</HeaderTitle>
        <HeaderToggle onClick={themeHandler}>
          <Moon size={24} weight={title === "dark" ? "light" : "fill"} />
          <p>Dark Mode</p>
        </HeaderToggle>
      </HeaderBody>
      <Outlet />
    </>
  );
};

export default Header;
