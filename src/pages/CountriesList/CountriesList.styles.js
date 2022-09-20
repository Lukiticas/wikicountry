import styled from "styled-components";

const CLMain = styled.main`
  margin: 1rem auto;
  max-width: 70rem;

  @media screen and (max-width) {
  }
`;

const CLSection = styled.section`
  flex-flow: row wrap;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;

export { CLSection, CLMain };
