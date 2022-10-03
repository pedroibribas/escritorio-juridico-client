import { Heading, Section } from "../../../atoms";
import { AllCasesDisplay } from "../../";

const AllCasesSummarySection = () => (
  <Section>
    <Heading type="sectionHeading">
      Casos Cadastrados
    </Heading>
    <AllCasesDisplay />
  </Section>
);

export { AllCasesSummarySection };