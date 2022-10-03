import { Button, Table } from "../../../atoms";

const WitnessSummary = ({ witness, toggle, handler }) => (
  <Table content="casePageSummary">
    <tbody>
      <tr>
        <th>Nome:</th>
        <td>{witness.name}</td>
        <td>
          <Button
            action="showDetails"
            isOpen={toggle}
            handler={handler}
          >
            {toggle ? 'recolher' : 'expandir'}
          </Button>
        </td>
      </tr>
    </tbody>
  </Table>
);

export { WitnessSummary };
