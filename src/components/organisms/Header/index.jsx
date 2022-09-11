import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../helpers/providers/AuthProvider";
import { Button, Hamburger, Overlay, Menu } from "../../../components";
import { Container, Content, RightContainer } from "./styles";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
    window.location.reload();
  };

  return (
    <Container>
      <Content>
        <Hamburger handler={handleClick} />
        <RightContainer>
          <Button action='button'>{user?.email}</Button>
          <Button action='button' handler={handleLogout}>Sair <MdLogout /></Button>
        </RightContainer>
        <Menu isMenuOpen={isMenuOpen} />
      </Content>
      {isMenuOpen && <Overlay />}
    </Container>
  );
};

export { Header };