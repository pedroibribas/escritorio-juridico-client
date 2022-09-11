import { Container, Content, Title } from "./styles";

const Description = ({ description }) => {
  const paragraphs = description?.split("\n");
  return (
    <Container>
      <Title>Histórico</Title>
      <Content>
        {paragraphs?.map((par, i) => (
          <p key={i}>{par}</p>
        ))}
      </Content>
    </Container>
  );
};

export { Description };