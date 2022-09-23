import { Heading, Paragraph, Section } from "../../atoms";
import { CreateNewCaseForm } from "../../organisms";

const CreateNewCaseSection = () => (
  <Section>
    <Heading type="sectionHeading">
      Formulário de cadastramento
    </Heading>
    <Paragraph>
      Preencha os campos vazios abaixo e clique no botão de enviar para cadastrar um novo processo.
      <br />
      Com o envio, você será redirecionado para a página do processo cadastrado, onde é possível adicionar as partes envolvidas e demais dados.
    </Paragraph>
    <CreateNewCaseForm />
  </Section>
);

export { CreateNewCaseSection };