import { LegalCase } from "./styles";

const Divider = ({ page, children }) => {
  const dividers = {
    legalCase: LegalCase
  };

  const Component = dividers[page];
  return <Component>{children}</Component>
};

export { Divider };