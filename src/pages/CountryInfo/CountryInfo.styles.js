import styled from "styled-components";
import { Link } from "react-router-dom";

const LoadingPageMain = styled.main`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 72px);
  width: 100vw;
  color: ${(props) => props.theme.colors.wordPrimary};
`;

const LoadingIconSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const NavBody = styled.nav`
  display: flex;
  align-items: center;
  margin: 4rem auto;

  @media screen and (max-width: 1200px) {
    max-width: 36rem;
  }
`;

const CIFlagImage = styled.img`
  max-width: clamp(27rem, 100%, 35rem);
  border-radius: 0.2rem;
`;

const CIMain = styled.main`
  max-width: 110rem;
  margin: 0 auto;
  padding-inline: 2rem;

  .img-ctn {
    max-width: 100%;
    display: grid;
    place-items: center;

    @media screen and (max-width: 1200px) {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 12000px) {
    margin-bottom: 3rem;
  }
`;

const CIMainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 6rem;
  color: ${(props) => props.theme.colors.wordPrimary};

  @media screen and (max-width: 1200px) {
    margin: 6rem auto;
    max-width: 36rem;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
`;

const CISection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  & > h2 {
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 2.3rem;
  }

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItemDivider = styled.div`
  & > * {
    margin-bottom: 1rem;
  }
`;

const InfoBorderBody = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: 0.5rem;

  @media screen and (max-width: 1200px) {
    & > p {
      width: 100%;
      margin-bottom: 0.2rem;
    }
  }
`;

const BBLink = styled(Link)`
  outline: none;
  border: none;
  animation: filter 100ms ease-in;
  background: ${(props) => props.theme.colors.bgSecundary};
  color: ${(props) => props.theme.colors.wordPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 1rem;
  gap: 0.2rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    filter: brightness(0.9);
  }
`;

const MapSection = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  margin-bottom: 5em;
  .country-map {
    height: 30rem;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const NewSection = styled.section`
  color: ${(props) => props.theme.colors.wordPrimary};
  max-width: 110rem;
  margin: 0 auto;
  h2 {
    position: relative;
    margin-bottom: 5rem;
    font-weight: 600;
    font-size: 2.3rem;

    &::after {
      position: absolute;
      content: "";
      width: calc(100% - 15rem);

      height: 0.1rem;
      background-color: ${(props) => props.theme.colors.wordPrimary};
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }
`;

const NewsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

export {
  NewsDiv,
  NewSection,
  MapSection,
  LoadingPageMain,
  LoadingIconSection,
  NavBody,
  BBLink,
  CIMain,
  CIMainSection,
  CIFlagImage,
  CISection,
  InfoBorderBody,
  InfoItemDivider,
  InfoSection,
};
