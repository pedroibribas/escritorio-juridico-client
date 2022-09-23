import styled from "styled-components";
import { Header, Footer } from '../../../components'

const Main = styled.main`
  min-height: 100vh;
  padding-bottom: 9rem;
`;

const PageTemplate = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export { PageTemplate };