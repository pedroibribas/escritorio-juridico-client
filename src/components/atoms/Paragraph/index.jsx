import { Default, LegalCaseHistoric } from "./styles";

const Paragraph = ({ type, children }) => {
  const paragraphs = {
    legalCaseHistoric: LegalCaseHistoric,
    default: Default
  };

  const Component = paragraphs[type || "default"];
  return <Component>{children}</Component>
};

export { Paragraph };