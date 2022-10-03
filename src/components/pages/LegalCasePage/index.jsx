import { Divider, Heading } from "../../atoms";
import {
  CaseParticipantsSection,
  CaseLawsuitSection,
  CaseWitnessesSection,
  CaseHistoricSection
} from '../../organisms';
import { PageTemplate } from "../../templates";

const LegalCasePage = () => (
  <PageTemplate>
    <Heading type='pageHeading'>
      Dados Cadastrais
    </Heading>
    <CaseLawsuitSection />
    <Divider page="legalCase" />
    <CaseParticipantsSection />
    <Divider page="legalCase" />
    <CaseWitnessesSection />
    <Divider page="legalCase" />
    <CaseHistoricSection />
  </PageTemplate>
);

export { LegalCasePage };