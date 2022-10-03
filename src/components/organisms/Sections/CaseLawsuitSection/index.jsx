import { savePDF } from "../../../../helpers";
import { Button, Container, Heading, Paragraph, Section } from "../../../atoms";
import { CaseLawsuitDetails } from "../../../molecules";

const CaseLawsuitSection = () => {
  return (
    <Section content='sectionElement'>
      <Heading type="sectionHeading">
        Dados do Processo
      </Heading>
      <CaseLawsuitDetails />
      <Container content="caseLawsuitCardContent">
        <Paragraph>
          Faça o download da versão PDF do cadastro:
        </Paragraph>
        <Button
          action="downloadFile"
          handler={savePDF}
        >
          Download PDF
        </Button>
      </Container>
    </Section>
  );
};

export { CaseLawsuitSection };