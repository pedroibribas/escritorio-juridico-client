import styled from "styled-components";

const Container = styled.button`
  height: 3rem;
  padding: 0 1rem;
  background-color: var(--slate-500);
  border-radius: 0.25rem;
  
  div {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--white);

    &:nth-child(2) {
      margin: 4px 0;
    }
  }
`;

export { Container };