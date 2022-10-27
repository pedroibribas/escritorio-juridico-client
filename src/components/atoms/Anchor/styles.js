import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    border: none;
    background: transparent;

    font-family: var(--poppins);
    color: #fff;
    font-size: 1rem;

    &:hover {
      color: var(--gray-300);
      text-decoration: underline;
    }

    &:active {
      color: var(--gray-500);
      text-decoration: underline;
    }

    svg {
      font-size: 2rem;
    }
`;

export const Menu = styled.div`
    display: block;
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

export const Summary = styled.div`
    display: flex;
    align-items: center;
    padding: 0.1rem 0.5rem;
    background: var(--slate-300);
    border-radius: var(--b-base);
    color: var(--white);
    font-family: var(--poppins);
    font-size: 0.8rem;
    font-weight: normal;

    &:hover {
      background: var(--slate-500);
      color: var(--white);
    }

    &:active {
      background: var(--slate-700);
      color: var(--white);
    }
`;
