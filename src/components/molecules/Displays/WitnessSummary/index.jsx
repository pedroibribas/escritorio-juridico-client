import { Button, Table } from "../../../atoms";

const WitnessSummary = ({ witness, toggle, handler }) => (
  <Table content="casePageSummary">
    <tbody>
      <tr>
        <th>Nome:</th>
        <td>{witness.name}</td>
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

export { WitnessSummary };
