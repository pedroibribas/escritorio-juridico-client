import styled from "styled-components";

const Select = styled.select`
  height: 1.5rem;
  border: 1px solid ${props => props.isError ? 'red' : 'var(--gray-500)'};
  border-radius: 0.25rem;
  background: var(--white);
  color: var(--gray-900);
  font-family: var(--roboto);
  font-size: 1rem;
  font-weight: 400;
`;

export { Select };
