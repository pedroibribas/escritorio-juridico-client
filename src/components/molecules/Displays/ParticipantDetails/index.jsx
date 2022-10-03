import { Table } from "../../../atoms";

const ParticipantDetails = ({ participant }) => {
  return (
    <Table content="casePageDetails">
      <tbody>
        <tr>
          <th>Nome</th>
          <td>{participant.name}</td>
        </tr>
        <tr>
          <th>Participação</th>
          <td>{participant.participation}</td>
        </tr>
        <tr>
          <th>CPF</th>
          <td>{participant.securityNumber}</td>
        </tr>
        <tr>
          <th>RG</th>
          <td>{participant.generalRegister}</td>
        </tr>
        <tr>
          <th>Órgão de expedição</th>
          <td>{participant.registerOrigin}</td>
        </tr>
        <tr>
          <th>Data de nascimento</th>
          <td>{participant.birthdate}</td>
        </tr>
        <tr>
          <th>Idade </th>
          <td>{participant.age}</td>
        </tr>
        <tr>
          <th>Endereço </th>
          <td>{participant.address}</td>
        </tr>
        <tr>
          <th>Complemento </th>
          <td>{participant.address2}</td>
        </tr>
        <tr>
          <th>Bairro</th>
          <td>{participant.district}</td>
        </tr>
        <tr>
          <th>Cidade</th>
          <td>{participant.city}</td>
        </tr>
        <tr>
          <th>CEP</th>
          <td>{participant.zipCode}</td>
        </tr>
        <tr>
          <th>Telefone WhatsApp</th>
          <td>{participant.phone}</td>
        </tr>
        <tr>
          <th>E-mail</th>
          <td>{participant.email}</td>
        </tr>
        <tr>
          <th>Estado civil</th>
          <td>{participant.civilState}</td>
        </tr>
        <tr>
          <th>Profissão</th>
          <td>{participant.job}</td>
        </tr>
        <tr>
          <th>Renda mensal</th>
          <td>{participant.income}</td>
        </tr>
        <tr>
          <th>Endereço profissional</th>
          <td>{participant.jobAddress}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { ParticipantDetails };
