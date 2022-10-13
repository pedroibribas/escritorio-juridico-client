import { Details, Header, Menu, Primary } from './styles';

const Button = ({ styles, toggle, container, children, ...rest }) => {
  const buttons = {
    primary: Primary,
    header: Header,
    menu: Menu,
    details: Details,
    fallback: Primary,
  };

  const key = buttons[styles] ? styles : "fallback";

  const Component = buttons[key];

  return (
    <Component
      isOpen={toggle}
      ref={container}
      {...rest}
    >
      {children}
    </Component>
  );
};

export { Button };