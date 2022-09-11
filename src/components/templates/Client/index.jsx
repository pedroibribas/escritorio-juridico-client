import { Header } from "../../organisms";
import { Container } from "./styles";

export const Client = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Dados cadastrais</h1>
        <ClientContent />
      </Container>
    </>
  );
};