import { Heading, Section } from "../../../atoms";
import { CaseLawsuitDetails, PDFButton } from "../../../molecules";

const CaseLawsuitSection = () => {
  return (
    <Section content='sectionElement'>
      <Heading type="sectionHeading">
        Dados do Processo
      </Heading>
      <CaseLawsuitDetails />
      <PDFButton />
    </Section>
  );
};

export { CaseLawsuitSection };