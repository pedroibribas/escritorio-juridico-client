import { JSXErrorHandler } from "../JSXErrorHandler";
import { CasePageDetailsTable, CasePageSummaryTable, HomeCasesSummaryTable } from "./styles";

const Table = ({ content, children }) => {
  switch (content) {
    case 'homeCasesSummary':
      return <HomeCasesSummaryTable>{children}</HomeCasesSummaryTable>

    case 'casePageSummary':
      return <CasePageSummaryTable>{children}</CasePageSummaryTable>

    case 'casePageDetails':
      return <CasePageDetailsTable>{children}</CasePageDetailsTable>

    default:
      return <JSXErrorHandler component="Table" property="content" />
  }
};

export { Table };
