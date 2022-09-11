import { Link } from "react-router-dom";
import { Container } from "./styles";

const Menu = () => (
  <Container className={isMenuOpen ? "show" : ""}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/create">Criar novo cadastro</Link>
      </li>
    </ul>
  </Container>
);

export { Menu };
