import styled from "styled-components";
import { Link } from "react-router-dom";

const LoadingPage = styled.main`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 72px);
  width: 100vw;
  color: ${(props) => props.theme.colors.wordPrimary};
`;

const LoadingIcon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const NavBody = styled.nav`
  display: flex;
  align-items: center;
  min-height: 8rem;
`;

const CIFlag = styled.img`
  max-width: clamp(30rem, 100%, 35rem);
`;

const CIBody = styled.main`
  max-width: 100vw;
  min-height: calc(100vh - 170px);
  margin: 0 2.5rem;

  .img-ctn {
    max-width: 100%;
    display: grid;
    place-items: center;
    margin-right: 1rem;

    @media screen and (max-width: 1200px) {
      margin-bottom: 2rem;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 12000px) {
    margin-bottom: 3rem;
  }
`;

const CIMain = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${(props) => props.theme.colors.wordPrimary};

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    max-width: 36rem;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    place-items: center;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
    min-height: calc(100vh - 170px);
  }

  .border-countries {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    gap: 0.5rem;

    @media screen and (max-width: 1200px) {
      & > p {
        width: 100%;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const CISection = styled.section`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  & > h2 {
    margin-bottom: 2rem;
    text-align: left;
    font-weight: 600;
    font-size: 2.3rem;
  }

  .info-section {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }

    & > .item-wrapper {
      & > * {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 800px) {
    & > .info-section {
      grid-template-columns: 1fr;
    }
    height: 100%;
  }

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
`;

const BCCard = styled(Link)`
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

export {
  LoadingPage,
  LoadingIcon,
  NavBody,
  BCCard,
  CIBody,
  CIMain,
  CIFlag,
  CISection,
};
