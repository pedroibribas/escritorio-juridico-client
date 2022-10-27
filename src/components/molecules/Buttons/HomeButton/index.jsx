import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

import { useAuth, useOnClickOutsideRef } from "../../../helpers";
import { Anchor } from "../../atoms";

export const Header = () => (
    <Anchor styles="header" to="/">
        <AiFillHome />
        Início
    </Anchor>
);