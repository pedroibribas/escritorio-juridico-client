import styled from "styled-components";

const FlexBlock = styled.div`
  display: flex;
  gap: ${props => props.gap ? props.gap : '0px'}
`;

export { FlexBlock };