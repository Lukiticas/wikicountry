import styled from "styled-components";

const PLFragment = styled.section`
  .pag {
    display: flex;
    padding: 0 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors.wordPrimary};
    margin-top: 2rem;

    &__page {
      display: grid;
      transition: filter 100ms ease-in;
      place-items: center;
      border-radius: 0.5rem;
      height: 2.5rem;
      width: 2.5rem;
      cursor: pointer;
      outline: 0.1rem solid ${(props) => props.theme.colors.wordPrimary};
      background-color: ${(props) => props.theme.colors.bgPrimary};

      &:hover,
      &:focus-visible {
        filter: brightness(0.5);
      }
    }

    &__pag-active {
      background-color: ${(props) => props.theme.colors.wordPrimary};
      color: ${(props) => props.theme.colors.bgSecundary};
    }

    &__next-button,
    &__previous-button {
      display: grid;
      place-items: center;
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.bgSecundary};
      outline: 0.1rem solid ${(props) => props.theme.colors.wordPrimary};
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 0.5rem;

      &:hover,
      &:focus-visible {
        background-color: ${(props) => props.theme.colors.wordPrimary};
        color: ${(props) => props.theme.colors.bgPrimary};
      }
    }
  }
`;

export default PLFragment;
