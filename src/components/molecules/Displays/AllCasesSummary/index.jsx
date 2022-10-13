import { intlDateFormat, namesRowFormat } from "../../../../helpers";
import { Anchor, Table } from "../../../atoms";

const AllCasesSummary = ({ caseSearchResult }) => {
  const hasCases = caseSearchResult.length > 0;
  return (
    <Table content="homeCasesSummary">
      <thead>
        <tr>
          <th>Data do cadastro</th>
          <th>Processo</th>
          <th>Partes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {hasCases &&
          caseSearchResult.map(legalCase => (
            <tr key={legalCase._id}>
              <td>{intlDateFormat(legalCase.createdAt)}</td>
              <td>{legalCase.lawsuitNumber}</td>
              <td>
                {namesRowFormat(legalCase.participants).map(
                  name => name
                )}
              </td>
              <td>
                <Anchor
                  to={'/legalCase/' + legalCase._id}
                  styles="summary"
                >
                  Detalhes
                </Anchor>
              </td>
            </tr>
          ))}
        {!hasCases && (
          <tr>
            <td colSpan={4}>Nenhum resultado encontrado na pesquisa.</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
};

export { AllCasesSummary };