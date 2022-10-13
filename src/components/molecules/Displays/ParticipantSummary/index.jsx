import { Button, Table } from "../../../atoms";

const ParticipantSummary = ({ participant, toggle, handler }) => (
  <Table content="casePageSummary">
    <tbody>
      <tr>
        <th>{(participant.participation)}</th>
        <td>{participant.name}</td>
        <td>
          <Button
            onClick={handler}
            styles="details"
            toggle={toggle}
          >
            {toggle ? 'recolher' : 'expandir'}
          </Button>
        </td>
      </tr>
    </tbody>
  </Table>
);

export { ParticipantSummary };
