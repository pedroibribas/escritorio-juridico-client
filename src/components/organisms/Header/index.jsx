import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import useOnClickOutsideRef from "../../../helpers/hooks/useOnClickOutsideRef";
import { Anchor, Button, Transition } from "../../atoms";
import { Menu } from "../../molecules";
import { HeaderContent, HeaderContainer, MenuGroupContainer, MenuContainer } from "./styles";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const buttonRef = useOnClickOutsideRef(() => setIsOpenMenu(false));

  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Anchor style='headerLink' path="/">
          <AiFillHome />Início
        </Anchor>
        <MenuGroupContainer>
          <Button
            action='showMenu'
            toggle={isOpenMenu}
            handler={handleOpenMenu}
            container={buttonRef}
          >
            pedroibribas@gmail.com
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