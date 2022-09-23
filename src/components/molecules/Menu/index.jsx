import styled from "styled-components";
import { Anchor } from "../../atoms";

const MenuDivider = styled.div`
  height: 1px;
  background: #fff;
`;

const Menu = () => (
  <ul>
    <li>
      <Anchor style='headerMenuLink' path={'/'}>
        Página inicial
      </Anchor>
    </li>
    <li>
      <Anchor style='headerMenuLink' path={'/createNewCase'}>
        Novo caso judicial
      </Anchor>
    </li>
    <li>
      <MenuDivider></MenuDivider>
      <Anchor style='headerMenuLink' path={'/login'}>
        Sair da conta
      </Anchor>
    </li>
  </ul>
);

export { Menu };
