import styled from "styled-components";

export const EditButton = styled.button`
  a {
    display: block;
    height: 2.5rem;
    padding: 0 2rem;
    background-color: var(--clr-acc-primary);
    color: var(--clr-txt-alt);
    font-size: 1rem;
    font-weight: 300;
    line-height: 2.5rem;
  }
`;

export const DeleteButton = styled.button`
  display: block;
  height: 2.5rem;
  margin-left: 0.5rem;
  padding: 0 2rem;
  background-color: var(--clr-acc-primary);
  color: var(--clr-txt-alt);
  font-size: 1rem;
  font-weight: 300;
`;

export const PDFButton = styled.button`
  display: block;
  height: 2.5rem;
  margin: 2rem auto 0;
  padding: 0 2rem;
  background-color: var(--clr-acc-primary);
  color: var(--clr-txt-alt);
  font-size: 1rem;
  font-weight: 300;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2rem;
  padding: 0 1rem;
  background-color: var(--clr-acc-primary);
  border-radius: 0.25rem;
  color: var(--clr-txt-alt);
  font-size: 0.9rem;
  font-weight: 300;
`;

export const SettingsButton = styled.button`
  height: 2rem;
  padding: 0 1rem;
  background-color: var(--clr-acc-primary);
  border-radius: 0.25rem;
  color: var(--clr-txt-alt);
  font-size: 0.9rem;
  font-weight: 300;
`;