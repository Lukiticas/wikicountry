import styled from "styled-components";

const HeaderBody = styled.header`
  width: 100%;
  height: 4.4rem;
  padding: 1rem 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.bgSecundary};
  color: ${(props) => props.theme.colors.wordPrimary};

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.wordPrimary};
`;

const HeaderToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.3rem;
  cursor: pointer;
  padding: 0.7rem;
  font-size: 1rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 2rem;
  color: ${(props) => props.theme.colors.wordPrimary};

  :hover {
    filter: contrast(0.5);
  }

  svg {
    width: 1.4rem;
  }
`;

export { HeaderBody, HeaderTitle, HeaderToggle };
