import { Heading, Section } from "../../atoms";
import { AllCasesDisplay } from "../../organisms";
import { PageTemplate } from "../../templates";

const HomePage = () => (
  <PageTemplate>
    <Heading type='pageHeading'>
      Início
    </Heading>

    <Section>
      <Heading type="sectionHeading">
        Casos Cadastrados
      </Heading>
      <AllCasesDisplay />
    </Section>
  </PageTemplate>
)

export { HomePage }
