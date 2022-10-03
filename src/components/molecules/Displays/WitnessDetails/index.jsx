import { Table } from "../../../atoms";

const WitnessDetails = ({ witness }) => {
  return (
    <Table content="casePageDetails">
      <tbody>
        <tr>
          <th>Nome</th>
          <td>{witness.name}</td>
        </tr>
        <tr>
          <th>CPF</th>
          <td>{witness.securityNumber}</td>
        </tr>
        <tr>
          <th>RG</th>
          <td>{witness.generalRegister}</td>
        </tr>
        <tr>
          <th>Órgão de expedição</th>
          <td>{witness.registerOrigin}</td>
        </tr>
        <tr>
          <th>Endereço </th>
          <td>{witness.address}</td>
        </tr>
        <tr>
          <th>Complemento </th>
          <td>{witness.address2}</td>
        </tr>
        <tr>
          <th>Bairro</th>
          <td>{witness.district}</td>
        </tr>
        <tr>
          <th>Cidade</th>
          <td>{witness.city}</td>
        </tr>
        <tr>
          <th>CEP</th>
          <td>{witness.zipCode}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { WitnessDetails };
