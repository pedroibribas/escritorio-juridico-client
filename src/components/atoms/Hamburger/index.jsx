import { Container } from "./styles";

const Hamburger = ({ handler }) => (
  <Container onClick={handler}>
    <div />
    <div />
    <div />
  </Container>
);

export { Hamburger };
