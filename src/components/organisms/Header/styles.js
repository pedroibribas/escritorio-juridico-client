import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: var(--gray-700);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--max-w-base);
  height: 4.5rem;
  margin: 0 auto;
`;

const MenuGroupContainer = styled.div`
  line-height: 4.5rem; //align button to center
`;

const MenuContainer = styled.div`
  position: relative;
  top: -1rem;
  line-height: 1rem;
`;

export { HeaderContainer, HeaderContent, MenuGroupContainer, MenuContainer };