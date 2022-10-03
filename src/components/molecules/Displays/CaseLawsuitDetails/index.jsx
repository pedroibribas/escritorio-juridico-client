import useLegalCase from "../../../../helpers/hooks/useLegalCase";
import { Table } from "../../../atoms";

const CaseLawsuitDetails = () => {
  const legalCase = useLegalCase();
  return (
    <Table content="casePageDetails">
      <tbody>
        <tr>
          <th>Advogado</th>
          <td>{legalCase.lawyer}</td>
        </tr>
        <tr>
          <th>OAB nº</th>
          <td>{legalCase.barNumber}</td>
        </tr>
        <tr>
          <th>Data da nomeação</th>
          <td>{legalCase.nominationDate}</td>
        </tr>
        <tr>
          <th>Data do atendimento</th>
          <td>{legalCase.attendanceDate}</td>
        </tr>
        <tr>
          <th>Assunto</th>
          <td>{legalCase.subject}</td>
        </tr>
        <tr>
          <th>Número do processo</th>
          <td>{legalCase.lawsuitNumber}</td>
        </tr>
        <tr>
          <th>Senha do processo</th>
          <td>{legalCase.lawsuitPassword}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { CaseLawsuitDetails };
