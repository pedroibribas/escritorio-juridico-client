import { Button, Table } from "../../atoms";

const ParticipantSummary = ({ participant, toggle, handler }) => (
  <Table content="casePageSummary">
    <tbody>
      <tr>
        <th>Requerente</th>
        <td>Alex Sandro da Silva</td>
        <td>
          <Button action="showDetails" isOpen={toggle} handler={handler}>
            {toggle ? 'recolher' : 'expandir'}
          </Button>
        </td>
      </tr>
    </tbody>
  </Table>
);

export { ParticipantSummary };
