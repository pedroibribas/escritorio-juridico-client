import styled from "styled-components";

const SearchInput = styled.input`
  width: 500px;
  height: 2rem;
  padding-left: 0.5rem;
  border: 1px solid var(--gray-300);
  border-right: none;
  border-radius: 0.25rem 0 0 0.25rem;
  outline: none;
  background: var(--white);
  font-family: var(--roboto);
  font-size: 1rem;
  font-weight: 400;

  &:focus {
    border: 1px solid var(--gray-900);
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  }
`;

export { SearchInput };