import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useAuth, useOnClickOutsideRef } from "../../../helpers";
import { Anchor, Button, Transition } from "../../atoms";
import { Menu } from "../../molecules";
import { HeaderContent, HeaderContainer, MenuGroupContainer, MenuContainer } from "./styles";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { user } = useAuth();

  const buttonRef = useOnClickOutsideRef(() => setIsOpenMenu(false));

  const username = user.username.toUpperCase();

  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Anchor styles='header' to="/">
          <AiFillHome />Início
        </Anchor>
        <MenuGroupContainer>
          <Button
            onClick={handleOpenMenu}
            styles='header'
            toggle={isOpenMenu}
            container={buttonRef}
          >
            {username}
          </Button>
          <MenuContainer>
            <Transition
              property="heightTransition"
              toggle={isOpenMenu}
              size="150px"
              overflowY="hidden"
            >
              <Menu />
            </Transition>
          </MenuContainer>
        </MenuGroupContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };