import styled from "styled-components";

const CardBody = styled.article`
  line-height: 1.5;
  width: 18.75em;
  min-height: 23em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  border-radius: 0.3em;
  background-color: ${(props) => props.theme.colors.bgSecundary};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  transition: transform 100ms ease-in;
  animation: opacity 300ms ease;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.offSet * 25}ms;

  :hover,
  &:focus-visible {
    transform: scale(1.05);
  }

  @keyframes opacity {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 11.25em;
  flex: 1;
`;

const CardDetails = styled.div`
  padding: 1.2em 2em;
  color: ${(props) => props.theme.colors.wordPrimary};
  flex: 1;
  & > * {
    margin-bottom: 0.6em;
  }
`;

export { CardBody, CardDetails, CardImage };
