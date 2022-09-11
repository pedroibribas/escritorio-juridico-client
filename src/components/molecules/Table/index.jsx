import { TableRow } from "../../atoms";
import { Container } from "./styles";

const Table = ({ currClient }) => {
  const { gender, civilStatus, job, securityNumber, email, lawsuitNumber } =
    currClient || {};
  const { firstName, lastName } = currClient?.name || {};
  const { street, addressNumber, cityArea, city, state, country, postalCode } =
    currClient?.address || {};
  const { rgNumber, rgOrigin } = currClient?.registerNumber || {};
  const { birthDay, birthMonth, birthYear } = currClient?.birth || {};
  const { countryCode, areaCode, phoneNumber } = currClient?.phone || {};

  const fullname = `${firstName} ${lastName}`;
  const phone = `${countryCode} (${areaCode}) ${phoneNumber}`;

  // Check birth date
  const dynamicParam = `${birthYear}-${birthMonth}-${birthDay}`;
  const dateParam = currClient?.birth ? dynamicParam : null;
  const formatedBirthDate = !dateParam ? "00/00/0000" : formatDate(dateParam);

  const tableData = [
    { head: "Nome", data: fullname },
    { head: "Gênero", data: gender },
    { head: "Estado Civil", data: civilStatus },
    { head: "Profissão", data: job },
    { head: "CPF Nº", data: securityNumber },
    { head: "RG", data: rgNumber },
    { head: "Órgão Emissor", data: rgOrigin },
    { head: " Data de Nascimento", data: formatedBirthDate },
    { head: "Endereço", data: street },
    { head: "Nº", data: addressNumber },
    { head: "Bairro", data: cityArea },
    { head: "Cidade", data: city },
    { head: "Estado", data: state },
    { head: "País", data: country },
    { head: "CEP", data: postalCode },
    { head: "Telefone", data: phone },
    { head: "Email", data: email },
    { head: "Processo Nº", data: lawsuitNumber },
  ];

  return (
    <Container>
      <table>
        <tbody>
          {tableData.map((item) => (
            <TableRow head={`${item.head}:`} data={item.data} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export { Table };
