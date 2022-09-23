import styled from "styled-components";

const HeaderButton = styled.button`
  height: 2.5rem;
  padding: 0 1.25rem;
  border: none;
  background: ${props => props.isOpen ? 'var(--slate-700)' : 'var(--slate-300)'};
  color: var(--white);
  font-family: var(--poppins);
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    background: var(--slate-500);
    color: var(--white);
  }

  &:active {
    background: var(--slate-700);
    color: var(--white);
  }
`;

const ActionButton = styled.button`
  border: none;
  border-radius: 0.25rem;
  padding: 0 1rem;
  background-color: var(--slate-300);
  color: var(--white);
  font-family: var(--roboto);
  font-weight: 300;
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1.75rem;

  &:hover {
    background-color: var(--slate-500);
    color: var(--white);
  }

  &:active {
    background-color: var(--slate-700);
    color: var(--white);
  }
`;

const DetailsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  border: none;
  background: ${props => props.isOpen ? 'var(--gray-500)' : 'var(--gray-300)'};
  color: ${props => props.isOpen ? 'var(--white)' : 'var(--gray-900)'};
  font-family: var(--roboto);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25rem;
  cursor: pointer;

  &:hover {
    background: var(--gray-500);
  }

  &:active {
    background: var(--gray-500);
  }
`;

export { HeaderButton, DetailsButton, ActionButton };