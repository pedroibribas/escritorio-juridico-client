import {
  CasePageForm,
  CaseLawsuitCard,
  LoginForm,
  MarginTop,
  CasePageDetails,
  CasePageDisplay,
  Row,
  SearchInputIcon,
  HistoricData,
} from './styles';

const Container = ({ content, mt, gap, children }) => {
  const containers = {
    any: MarginTop,
    row: Row,
    searchInputIconContent: SearchInputIcon,
    loginFormContent: LoginForm,
    casePageFormContent: CasePageForm,
    casePageDetailsContent: CasePageDetails,
    casePageDisplayContent: CasePageDisplay,
    caseLawsuitCardContent: CaseLawsuitCard,
    historicData: HistoricData,
  };

  const Component = containers[content];
  return <Component mt={mt} gap={gap}>{children}</Component>
}

export { Container };
