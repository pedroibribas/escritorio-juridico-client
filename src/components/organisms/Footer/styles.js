import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--gray-700);
`;

export const Content = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ul {
    display: flex;
  }

  li {
    color: #FFF;
    font-family: var(--poppins);

    & + li {
      margin-left: 2rem;
    }
  }

  a:hover {
    color: var(--gray-300);
    text-decoration: underline;
  }
`;