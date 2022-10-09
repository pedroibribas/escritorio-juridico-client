import styled from "styled-components";
import { Anchor, Button } from "../../atoms";

const MenuDivider = styled.div`
  height: 1px;
  background: #fff;
`;

const Menu = () => {
  const handleClickLogout = () => {
    localStorage.removeItem('user');
    window.location.replace("/login");
  };

  return (
    <ul>
      <li>
        <Anchor styles='headerMenuLink' path={'/'}>
          Página inicial
        </Anchor>
      </li>
      <li>
        <Anchor styles='headerMenuLink' path={'/createLegalCase'}>
          Novo caso judicial
        </Anchor>
      </li>
      <li>
        <MenuDivider></MenuDivider>
        <Button action='logout' handler={handleClickLogout}>
          Sair da conta
        </Button>
      </li>
    </ul>
  );
};

export { Menu };
