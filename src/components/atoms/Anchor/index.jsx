import { Link } from "react-router-dom";
import { Header, Menu, Summary } from "./styles";

const Anchor = ({ styles, children, ...rest }) => {
  const anchors = {
    header: Header,
    menu: Menu,
    summary: Summary,
    fallback: Summary,
  };

  const key = anchors[styles] ? styles : "fallback";

  const Component = anchors[key];

  return (
    <Link {...rest}>
      <Component>
        {children}
      </Component>
    </Link>
  );
};

export { Anchor };