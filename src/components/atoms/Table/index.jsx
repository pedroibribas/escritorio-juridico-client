import {
  CasePageDetailsTable,
  CasePageSummaryTable,
  HomeCasesSummaryTable
} from './styles';

const Table = ({ content, children }) => {
  const tables = {
    homeCasesSummary: HomeCasesSummaryTable,
    casePageSummary: CasePageSummaryTable,
    casePageDetails: CasePageDetailsTable
  }

  const Component = tables[content]

  return <Component>{children}</Component>
}

export { Table }
