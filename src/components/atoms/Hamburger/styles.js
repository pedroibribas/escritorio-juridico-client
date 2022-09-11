import styled from "styled-components";

export const HamburgerButton = styled.button`
  height: 3rem;
  padding: 0 1rem;
  background-color: var(--clr-acc-primary);
  border-radius: 0.25rem;
  
  div {
    display: block;
    width: 24px;
    height: 2px;
    background: #FFF;

    &:nth-child(2) {
      margin: 4px 0;
    }
  }
`;