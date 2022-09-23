import { useState } from "react";
import { Container, Heading, Paragraph } from "../../atoms";
import { CaseSummary, SearchCaseBar } from "../../molecules";

const AllCasesDisplay = ({ cases }) => {
  const [caseSearchResult, setCaseSearchResult] = useState(cases || []);

  const hasCases = cases.length > 0;

  return (
    <>
      <div>
        <Heading type="subSectionHeading">Pesquisa de casos</Heading>
        <Paragraph>
          Pesquise casos no campo abaixo utilizando o nome de alguma das partes.{' '}
          <br /> O resultado é mostrado na tabela de sumário.
        </Paragraph>
        <Container content="any" mt="0.5rem">
          <SearchCaseBar
            cases={cases}
            setCaseSearchResult={setCaseSearchResult}
          />
        </Container>
      </div>
      <Container content="any" mt="2rem">
        <Heading type="subSectionHeading">Sumário de casos</Heading>
        {hasCases ? (
          <>
            <Paragraph>
              Veja um sumário de todos os seus casos e acesse seus detalhes na
              tabela abaixo.
            </Paragraph>
            <Container content="any" mt="0.5rem">
              <CaseSummary caseSearchResult={caseSearchResult} />
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