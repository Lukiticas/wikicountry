import styled from "styled-components";
const CardLink = styled.a``;

const CardArticle = styled.article`
  width: 20em;
  height: 33em;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: transform 100ms ease-in;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  :hover,
  &:focus-visible {
    transform: scale(1.02);
  }
`;

const CardWrapper = styled.div`
  flex-grow: 1;
  max-width: 100%;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardSection = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  flex-grow: 3;
  z-index: 10;

  background-color: ${(props) => props.theme.colors.bgSecundary};
  color: ${(props) => props.theme.colors.wordPrimary};

  & > h3 {
    font-weight: 700;
    line-height: 1.3;
    text-overflow: ellipsis;
    &:hover {
      filter: contrast(0);
    }
  }

  & > p {
    font-weight: 300;
    line-height: 1.5;
    &:hover {
      filter: contrast(0.8);
    }
  }
`;

const CardView = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > small {
    font-size: 1.2em;
  }
`;

export { CardArticle, CardWrapper, CardImage, CardView, CardSection, CardLink };
