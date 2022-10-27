import { useEffect, useState } from "react";

import { Container, Heading, Paragraph } from "../../../atoms";
import { AllCasesSummary } from "../../../molecules";
import { SearchBarDisplay } from "../../";

import useAllLegalCases from "../../../../helpers/hooks/useAllLegalCases";

const AllCasesDisplay = () => {
  const [caseSearchResult, setCaseSearchResult] = useState([]);

  const legalCases = useAllLegalCases();

  const hasCases = legalCases.length > 0;

  useEffect(() => {
    setCaseSearchResult(legalCases);
  }, [legalCases]);

  return (
    <>
      <SearchBarDisplay
        legalCases={legalCases}
        setCaseSearchResult={setCaseSearchResult}
      />
      <Container content="any" mt="2rem">
        <Heading type="subSectionHeading">Sumário de casos</Heading>
        {hasCases ? (
          <>
            <Paragraph>
              Veja um sumário de todos os seus casos e acesse seus detalhes na
              tabela abaixo.
            </Paragraph>
            <Container content="any" mt="0.5rem">
              <AllCasesSummary caseSearchResult={caseSearchResult} />
            </Container>
          </>
        ) : (
          <Paragraph>
            Nenhum caso cadastrado. Para começar a cadastrar casos, clique aqui.
          </Paragraph>
        )}
      </Container>
    </>
  )
};

export { AllCasesDisplay };