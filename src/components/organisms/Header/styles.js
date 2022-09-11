import styled from "styled-components";

export const Container = styled.header`
  height: 4.5rem;
  background-color: var(--clr-bg-alt);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  max-width: 1420px;
  height: 4.5rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const VersionDesc = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1rem;
  font-size: 10px;
  color: #a0a0a0;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;