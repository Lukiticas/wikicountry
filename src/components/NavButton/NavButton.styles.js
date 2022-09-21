import styled from "styled-components";

const ButtonBody = styled.button`
  outline: none;
  border: none;
  background: ${(props) => props.theme.colors.bgSecundary};
  color: ${(props) => props.theme.colors.wordPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  gap: 0.2rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export { ButtonBody };
