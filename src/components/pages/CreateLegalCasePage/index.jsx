import { Heading } from "../../atoms";
import { CreateNewCaseSection } from "../../organisms";
import { PageTemplate } from "../../templates";

const CreateLegalCasePage = () => (
  <PageTemplate>
    <Heading type='pageHeading'>
      Cadastro de Novo Processo
    </Heading>
    <CreateNewCaseSection />
  </PageTemplate>
);

export { CreateLegalCasePage };