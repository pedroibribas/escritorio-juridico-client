import {
  AddParticipantForm,
  CaseLawsuitCard,
  LoginForm,
  MarginTop,
  ParticipantDetails,
  ParticipantDisplay,
  Row,
  SearchInputIcon
} from './styles';

const Container = ({ content, mt, gap, children }) => {
  switch (content) {
    case 'any':
      return <MarginTop mt={mt}>{children}</MarginTop>

    case 'row':
      return <Row gap={gap}>{children}</Row>

    case 'searchInputIconContent':
      return <SearchInputIcon>{children}</SearchInputIcon>

    case 'loginFormContent':
      return <LoginForm>{children}</LoginForm>

    case 'addParticipantFormContent':
      return <AddParticipantForm>{children}</AddParticipantForm>

    case 'participantDetailsContent':
      return <ParticipantDetails>{children}</ParticipantDetails>

    case 'participantDisplayContent':
      return <ParticipantDisplay>{children}</ParticipantDisplay>

    case 'caseLawsuitCardContent':
      return <CaseLawsuitCard>{children}</CaseLawsuitCard>

    default:
      return (
        <mark>
          <i>Container: React prop 'content' is missing</i>
        </mark>
      )
  }
}

export { Container }
