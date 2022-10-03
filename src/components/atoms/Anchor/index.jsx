import { Link } from "react-router-dom";
import { JSXErrorHandler } from "../JSXErrorHandler";
import { CasesSummaryLink, HeaderLink, HeaderMenuLink, ParagraphLink } from "./styles";

const Anchor = ({ styles, path, children }) => {
  switch (styles) {
    case "headerLink":
      return (
        <HeaderLink>
          <Link to={path}>{children}</Link>
        </HeaderLink>
      );
    case "headerMenuLink":
      return (
        <HeaderMenuLink>
          <Link to={path}>{children}</Link>
        </HeaderMenuLink>
      );

    case "casesSummaryLink":
      return (
        <CasesSummaryLink>
          <Link to={path}>{children}</Link>
        </CasesSummaryLink>
      );

    case "paragraphLink":
      return (
        <ParagraphLink>
          <Link to={path}>{children}</Link>
        </ParagraphLink>
      );

    default:
      return <JSXErrorHandler component='Anchor' property='style' />
  }
};

export { Anchor };
