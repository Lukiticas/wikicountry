import styled from "styled-components";

const CLMain = styled.main`
  margin: 1rem 2rem;
  min-height: calc(100vh - 200px);
`;

const CLSection = styled.div`
  flex-flow: row wrap;
  justify-content: center;
  display: flex;
  gap: 4rem;
`;

const CLLoading = styled.main`
  width: 100%;
  margin-top: 10%;
  display: grid;
  place-items: center;
`;
const CLLoadingIconSection = styled.section`
  color: ${(props) => props.theme.colors.wordPrimary};
  display: grid;
  place-items: center;
  gap: 1rem;
`;

export { CLSection, CLMain, CLLoading, CLLoadingIconSection };
