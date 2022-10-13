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
        <Anchor styles='menu' to={'/'}>
          Página inicial
        </Anchor>
      </li>
      <li>
        <Anchor styles='menu' to={'/createLegalCase'}>
          Novo caso judicial
        </Anchor>
      </li>
      <li>
        <MenuDivider></MenuDivider>
        <Button
          onClick={handleClickLogout}
          styles='menu'
        >
          Sair da conta
        </Button>
      </li>
    </ul>
  );
};

export { Menu };
