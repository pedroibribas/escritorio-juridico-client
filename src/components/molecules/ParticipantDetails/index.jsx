import { Table } from "../../atoms";

const ParticipantDetails = ({ participant }) => {
  return (
    <Table content="casePageDetails">
      <tbody>
        <tr>
          <th>Nome</th>
          <td>Alex Sandro da Silva</td>
        </tr>
        <tr>
          <th>Participação</th>
          <td>Requerente</td>
        </tr>
        <tr>
          <th>CPF</th>
          <td>031.425.857-40</td>
        </tr>
        <tr>
          <th>RG</th>
          <td>74.784.854-X</td>
        </tr>
        <tr>
          <th>Órgão de expedição</th>
          <td>SSP/SP</td>
        </tr>
        <tr>
          <th>Data de nascimento</th>
          <td>24/02/1989</td>
        </tr>
        <tr>
          <th>Idade </th>
          <td>33 anos</td>
        </tr>
        <tr>
          <th>Endereço </th>
          <td>Rua Machado de Assis nº 1100</td>
        </tr>
        <tr>
          <th>Complemento </th>
          <td>Casa nº 08</td>
        </tr>
        <tr>
          <th>Bairro</th>
          <td>Jardim das Margaridas</td>
        </tr>
        <tr>
          <th>Cidade</th>
          <td>Ribeirão Preto</td>
        </tr>
        <tr>
          <th>CEP</th>
          <td>19.590-417</td>
        </tr>
        <tr>
          <th>Telefone WhatsApp</th>
          <td>(18)98117-5084</td>
        </tr>
        <tr>
          <th>E-mail</th>
          <td>alexsandro@yahoo.com.br</td>
        </tr>
        <tr>
          <th>Estado civil</th>
          <td>União Estável</td>
        </tr>
        <tr>
          <th>Profissão</th>
          <td>Ajudante de carpintaria</td>
        </tr>
        <tr>
          <th>Renda mensal</th>
          <td>R$ 2.100,00</td>
        </tr>
        <tr>
          <th>Endereço profissional</th>
          <td>Rua Gonçalves Dias nº 300 Jardim das Rosas</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { ParticipantDetails };
