import { JSXErrorHandler } from "../JSXErrorHandler";
import { DetailsButton, ActionButton, HeaderButton, HeaderMenuButton } from "./styles";

const Button = ({ action, toggle, handler, container, children }) => {
  switch (action) {
    case "showMenu":
      return (
        <HeaderButton isOpen={toggle} onClick={handler} ref={container}>
          {children}
        </HeaderButton>
      )

    case "logout":
      return (
        <HeaderMenuButton onClick={handler}>
          {children}
        </HeaderMenuButton>
      )

    case "showDetails":
      return (
        <DetailsButton isOpen={toggle} onClick={handler}>
          {children}
        </DetailsButton>
      )

    case "downloadFile":
    case "showDialog":
    case "showForm":
      return <ActionButton onClick={handler}>{children}</ActionButton>

    case "submitForm":
      return (
        <ActionButton type="submit">
          {children}
        </ActionButton>
      );

    default:
      return <JSXErrorHandler component='Button' property='action' />
  }
};

export { Button };
