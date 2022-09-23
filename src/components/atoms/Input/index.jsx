import styled from "styled-components";

const Input = styled.input`
  width: ${props => props.width || '100%'};
  height: 1.5rem;
  padding-left: 0.5rem;
  border: 1px solid ${props => props.toggle || 'var(--gray-500)'};
  border-radius: 0.25rem;
  background: ${props => props.toggle || 'var(--white)'};
  color: ${props => props.toggle || 'var(--gray-900)'};
  font-family: var(--roboto);
  font-size: 1rem;
  font-weight: 400;

  &::placeholder {
    font-family: var(--roboto);
    font-size: 0.75rem;
  }
`;

export { Input };
