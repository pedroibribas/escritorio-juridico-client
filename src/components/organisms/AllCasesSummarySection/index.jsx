import { useEffect, useState } from "react";
import { Heading, Section } from "../../atoms";
import { AllCasesDisplay } from "../AllCasesDisplay";

const AllCasesSummarySection = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    setCases([]);
  }, []);

  return (
    <Section>
      <Heading type="sectionHeading">
        Casos Cadastrados
      </Heading>
      <AllCasesDisplay cases={cases} />
    </Section>
  );
};

export { AllCasesSummarySection };