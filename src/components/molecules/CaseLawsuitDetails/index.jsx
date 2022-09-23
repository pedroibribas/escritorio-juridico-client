import { Table } from "../../atoms";

const CaseLawsuitDetails = ({ caseLawsuit }) => {
  return (
    <Table content="casePageDetails">
      <tbody>
        <tr>
          <th>Advogado</th>
          <td>Paulo Pedro Ribas</td>
        </tr>
        <tr>
          <th>OAB nº</th>
          <td>154.581</td>
        </tr>
        <tr>
          <th>Data da nomeação</th>
          <td>10/05/2022</td>
        </tr>
        <tr>
          <th>Data do atendimento</th>
          <td>11/05/2022</td>
        </tr>
        <tr>
          <th>Assunto</th>
          <td>Ação de Alimentos</td>
        </tr>
        <tr>
          <th>Número do processo</th>
          <td>1020304-55.2022.8.26.0553</td>
        </tr>
        <tr>
          <th>Senha do processo</th>
          <td>bR3cDke</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { CaseLawsuitDetails };
