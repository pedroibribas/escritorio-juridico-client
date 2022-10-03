import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
  margin-top: 0.25rem;
  padding: 0.5rem;
  border: 1px solid var(--gray-500);
  border-radius: 0.25rem;
  background: var(--white);
  color: var(--gray-900);
  font-family: var(--roboto);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  resize: none; //hide resize handler
`;