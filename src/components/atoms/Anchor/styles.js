import styled from "styled-components";

const CasesSummaryLink = styled.div`
  a {
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
  }
`;

const ParagraphLink = styled.div`
  display: inline;

  a {
    color: blue;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      color: var(--slate-700);
    }

    &:active {
      color: var(--slate-500);
    }
  }
`;

const HeaderLink = styled.div`
  display: flex;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    font-family: var(--poppins);
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

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
  }
`;

const HeaderMenuLink = styled.div`
  a {
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
  }
`;

export { CasesSummaryLink, ParagraphLink, HeaderLink, HeaderMenuLink };