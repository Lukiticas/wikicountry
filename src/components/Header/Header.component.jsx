import { Link, Outlet } from "react-router-dom";
import { HeaderBody, HeaderTitle, HeaderToggle } from "./header.styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Moon } from "phosphor-react";

const Header = ({ themeHandler }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <HeaderBody>
        <Link to="/">
          <HeaderTitle>Where in the world?</HeaderTitle>
        </Link>
        <HeaderToggle onClick={themeHandler}>
          <Moon size={24} weight={title === "dark" ? "light" : "fill"} />
          Dark Mode
        </HeaderToggle>
      </HeaderBody>
      <Outlet />
    </>
  );
};

export default Header;
