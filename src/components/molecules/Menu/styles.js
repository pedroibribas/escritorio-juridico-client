import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 4.25rem;
  left: 2rem;
  z-index: 99;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0.5rem;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 12px solid #FFF;
  }

  ul {
    padding-top: 0.25rem;
    border-radius: 0.25rem;
    background: #FFF;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
    overflow: hidden;

    a {
      display: block;
      padding: 0.75rem;
      font-size: 0.9rem;

      &:hover {
        background: #e0e0e0;
        text-decoration: underline;
      }
    }
  }
`;