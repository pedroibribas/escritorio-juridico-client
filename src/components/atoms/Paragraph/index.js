import styled from "styled-components";

const Paragraph = styled.p`
  max-width: 800px;
  margin-top: ${props => props.mt || '0px'};
  color: var(--gray-700);
  font-family: var(--sourceSerifPro);
  font-weight: 400;
  line-height: 1.5;
`

export { Paragraph };