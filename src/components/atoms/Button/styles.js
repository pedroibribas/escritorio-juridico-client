import styled from "styled-components";

const Button = styled.button`
  border: none;
  cursor: pointer;
`;

export const Primary = styled(Button)`
  border-radius: 0.25rem;
  padding: 0 1rem;
  background-color: var(--slate-300);
  color: var(--white);
  font-family: var(--roboto);
  font-weight: 300;
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

  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;

    &:hover {
    background: var(--gray-300);
    };

    &:active {
      background: var(--gray-300);
    };
  };
`;

export const Header = styled(Button)`
  height: 2.5rem;
  padding: 0 1.25rem;
  background: ${props => props.isOpen ? 'var(--slate-700)' : 'var(--slate-300)'};
  color: var(--white);
  font-family: var(--poppins);
  font-size: 0.85rem;

  &:hover {
    background: var(--slate-500);
    color: var(--white);
  }

  &:active {
    background: var(--slate-700);
    color: var(--white);
  }
`;

export const Menu = styled(Button)`
  display: block;
  text-align: left;
  padding: 0.75rem;
  background: var(--slate-300);
  color: var(--white);
  font-family: var(--poppins);
  font-size: 0.8rem;

  &:hover {
    background: var(--slate-500);
    text-decoration: underline;
  }
`;

export const Details = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${props => props.isOpen ? 'var(--gray-500)' : 'var(--gray-300)'};
  color: ${props => props.isOpen ? 'var(--white)' : 'var(--gray-900)'};
  font-family: var(--roboto);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25rem;

  &:hover {
    background: var(--gray-500);
  }

  &:active {
    background: var(--gray-500);
  }
`;