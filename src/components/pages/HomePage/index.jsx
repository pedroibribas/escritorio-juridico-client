import { Heading } from "../../atoms";
import { AllCasesSummarySection } from "../../organisms";
import { PageTemplate } from "../../templates";

const HomePage = () => (
  <PageTemplate>
    <Heading type='pageHeading'>
      Início
    </Heading>
    <AllCasesSummarySection />
  </PageTemplate>
)

export { HomePage }
