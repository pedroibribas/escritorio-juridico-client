import {
  DetailsButton,
  ActionButton,
  HeaderButton,
  HeaderMenuButton
} from './styles';

const Button = ({ action, type = "button", toggle, handler, container, children }) => {
  const buttons = {
    showMenu: HeaderButton,
    logout: HeaderMenuButton,
    showDetails: DetailsButton,
    downloadFile: ActionButton,
    showDialog: ActionButton,
    showForm: ActionButton,
    submitForm: ActionButton
  }

  const Component = buttons[action];

  return (
    <Component type={type} onClick={handler} isOpen={toggle} ref={container}>
      {children}
    </Component>
  );
};

export { Button };
