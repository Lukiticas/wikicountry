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
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
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
`;

export { HeaderBody, HeaderTitle, HeaderToggle };
