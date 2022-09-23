import { Anchor, Table } from "../../atoms";

const CaseSummary = ({ caseSearchResult }) => {
  const hasCaseSearchResult = caseSearchResult.length > 0;

  return (
    <Table content="caseSummary">
      <thead>
        <tr>
          <th>Data do cadastro</th>
          <th>Processo</th>
          <th>Partes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {hasCaseSearchResult ? (
            <>
              <td>01/01/2001</td>
              <td>000000-00.0000.000-0000</td>
              <td>Teste Teste Teste Teste Teste Teste</td>
              <td>
                <Anchor
                  style="casesSummaryLink"
                  path="/"
                >
                  Detalhes
                </Anchor>
              </td>
            </>
          ) : (
            <td colSpan={4}>
              Nenhum resultado encontrado na pesquisa.
            </td>
          )}
        </tr>
      </tbody>
    </Table>
  );
};

export { CaseSummary };