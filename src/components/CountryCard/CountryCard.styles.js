import styled from "styled-components";

const CardBody = styled.article`
  display: grid;
  grid-template-rows: 2 1f;
  max-width: 15.75rem;
  background-color: ${(props) => props.theme.colors.bgSecundary};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: transform 100ms ease-in;

  :hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 15.75rem;
  height: 11.25rem;
  flex: 1;

  @media screen and (max-width: 800px) {
    width: 13.75rem;
    height: 9.25rem;
  }
`;

const CardDetails = styled.div`
  padding: 1.2rem 2rem;
  color: ${(props) => props.theme.colors.wordPrimary};
  flex: 1;

  & > h2 {
    font-weight: 800;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  & > p {
    font-weight: 600;
    span {
      margin-left: 0.3ch;
      font-weight: 300;
    }
  }

  & > * {
    margin-bottom: 0.6rem;
  }
`;

export { CardBody, CardDetails, CardImage };
