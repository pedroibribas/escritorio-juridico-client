import styled from "styled-components";

const Container = styled.footer`
  background-color: var(--gray-700);
`;

const Content = styled.footer`
  padding: 2rem;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        {/* VERSION */}
      </Content>
    </Container>
  )
}

export { Footer };