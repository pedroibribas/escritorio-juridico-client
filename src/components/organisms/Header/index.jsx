import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

import { useAuth, useOnClickOutsideRef } from "../../../helpers";
import { Anchor, Button, Transition } from "../../atoms";
import { Menu } from "../../molecules";

import S from "./styles";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { user } = useAuth();
	const username = user.username;

	const buttonRef = useOnClickOutsideRef(
		() => setIsMenuOpen(false)
	);

	const handleButtonClick =
		() => setIsMenuOpen(!isMenuOpen);

	return (
		<S.HeaderContainer>
			<S.HeaderContent>
				<Anchor styles='header' to="/">
					<AiFillHome />Início
				</Anchor>
				<S.MenuGroupContainer>
					<Button
						onClick={handleButtonClick}
						styles='header'
						toggle={isMenuOpen}
						container={buttonRef}
					>
						{username}
					</Button>
					<S.MenuContainer>
						<Transition
							property="heightTransition"
							toggle={isMenuOpen}
							size="150px"
							overflowY="hidden"
						>
							<Menu />
						</Transition>
					</S.MenuContainer>
				</S.MenuGroupContainer>
			</S.HeaderContent>
		</S.HeaderContainer>
	);
};

export { Header };