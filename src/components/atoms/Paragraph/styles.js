import styled from "styled-components";

export const Default = styled.p`
  max-width: 800px;
  margin-top: ${props => props.mt || '0px'};
  color: var(--gray-700);
  font-family: var(--sourceSerifPro);
  font-weight: 400;
  line-height: 1.5;
`

export const LegalCaseHistoric = styled.p`
  max-width: 1000px;
  height: 100%;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  white-space: pre-wrap; //espaçar parágrafos
`;