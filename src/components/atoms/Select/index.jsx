import styled from "styled-components";

const Select = styled.select`
  height: 1.5rem;
  border: 1px solid ${props => props.success ? '' : props.error ? '' : 'var(--gray-500)'};
  border-radius: 0.25rem;
  background: ${props => props.success ? '' : props.error ? '' : 'var(--white)'};
  color: ${props => props.success ? '' : props.error ? '' : 'var(--gray-900)'};
  font-family: var(--roboto);
  font-size: 1rem;
  font-weight: 400;
`;

export { Select };
