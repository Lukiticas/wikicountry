import styled from "styled-components";

const NavBody = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const NavSearch = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgSecundary};
  justify-content: space-evenly;
  width: clamp(6rem, 100%, 40rem);
  height: 3rem;
  border-radius: 0.3rem;
  padding-left: 1.5rem;
  gap: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &::after {
    transition: width 100ms linear;
    content: "";
    position: absolute;
    height: 0.5rem;
    background-color: ${(props) => props.theme.colors.wordPrimary};
    width: 0%;
    left: 0;
    bottom: -2px;
    z-index: -10;
    border-radius: 5px;
  }

  &:focus-within {
    &::after {
      width: 100%;
    }
  }

  svg {
    width: 1.3rem;
  }
`;

const NavSelect = styled.select`
  cursor: pointer;
  appearance: none;
  font-size: 1rem;
  width: 12rem;
  height: 3rem;
  border-radius: 0.2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.bgSecundary};
  border: none;
  color: ${(props) => props.theme.colors.wordPrimary};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    filter: contrast(0.5);
  }

  &:active {
    filter: brightness(0.5);
  }
`;

const NavInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  height: 100%;
  font-size: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.wordPrimary};
  ::placeholder {
    color: ${(props) => props.theme.colors.wordPrimary};
    font-weight: 300;
  }
`;

const NavSelectWrapper = styled.div`
  position: relative;
  & svg {
    position: absolute;
    bottom: 30%;
    right: 10%;
  }
`;

export { NavBody, NavSearch, NavSelect, NavInput, NavSelectWrapper };
