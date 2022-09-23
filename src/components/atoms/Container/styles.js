import styled from "styled-components";

const MarginTop = styled.div`
  margin-top: ${props => props.mt || '0px'};
`;

const Row = styled.div`
  display: flex;
  gap: ${props => props.gap || '0px'};
`;

const CaseLawsuitCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  margin: 1rem auto 0;
  padding: 0.5rem 1rem;
  border: 1px solid var(--gray-500);
  border-radius: 0.25rem;
  background: var(--pink-300);
`;

const SearchInputIcon = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid var(--gray-900);
  border-radius: 0 0.25rem 0.25rem 0;
  background: var(--gray-900);

  svg {
    color: var(--white);
    font-size: 1.5rem;
  }
`;

const ParticipantDisplay = styled.div`
  padding-left: 2rem;
`;

const ParticipantDetails = styled.div`
  width: 700px;
`;

const LoginForm = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  background: #FFF;
  box-shadow: 1px 1px 20px rgba(0,0,0,0.05);

  h3 {
    margin-top: 0;
  }
`;

const AddParticipantForm = styled.div`
  width: 700px;
  margin-top: 0.25rem;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 20px rgba(0,0,0,0.05);
  
  form {
    padding: 0 0 1rem 3rem;
  }
`;

export {
  LoginForm,
  AddParticipantForm,
  MarginTop,
  ParticipantDetails,
  ParticipantDisplay,
  Row,
  CaseLawsuitCard,
  SearchInputIcon
};