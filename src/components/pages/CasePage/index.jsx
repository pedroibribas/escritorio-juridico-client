import { Heading } from "../../atoms";
import { CaseParticipantsSection, CaseLawsuitSection } from "../../organisms";
import { PageTemplate } from "../../templates";

const CasePage = () => (
  <PageTemplate>
    <Heading type='pageHeading'>
      Dados Cadastrais
    </Heading>
    <CaseLawsuitSection />
    <CaseParticipantsSection />
    {/* Witnesses Section */}
    {/* Historic Section */}
  </PageTemplate>
);

export { CasePage };