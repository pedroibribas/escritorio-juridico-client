import styled from "styled-components";

export const MarginTop = styled.div`
  margin-top: ${props => props.mt || '0px'};
`;

export const Row = styled.div`
  display: flex;
  gap: ${props => props.gap || '0px'};
`;

export const CaseLawsuitCard = styled.div`
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

export const SearchInputIcon = styled.div`
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

export const CasePageDisplay = styled.div`
  padding-left: 2rem;
`;

export const CasePageDetails = styled.div`
  width: 700px;
`;

export const LoginForm = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  background: #FFF;
  box-shadow: 1px 1px 20px rgba(0,0,0,0.05);

  h3 {
    margin-top: 0;
  }
`;

export const CasePageForm = styled.div`
  width: 700px;
  margin-top: 0.25rem;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 20px rgba(0,0,0,0.05);
  
  form {
    padding: 0 0 1rem 3rem;
  }
`;

export const HistoricData = styled.div`
  padding: 0.25rem;
  font-family: var(--sourceSerifPro);

  p {
    margin: 0.25rem 2rem 2rem;
  }
`;