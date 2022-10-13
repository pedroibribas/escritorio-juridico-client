import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { addParticipantAPIHandler } from "../../../../api/services/legalCase";
import { regexFormat } from "../../../../helpers";
import { Button, Container, Input, Label, Select } from "../../../atoms";
import { FormGroup } from "../../../molecules";

const AddParticipantToCaseForm = () => {
  const [participation, setParticipation] = useState('');
  const [name, setName] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [generalRegister, setGeneralRegister] = useState('');
  const [registerOrigin, setRegisterOrigin] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [civilState, setCivilState] = useState('');
  const [job, setJob] = useState('');
  const [income, setIncome] = useState('');
  const [jobAddress, setJobAddress] = useState('');

  const legalCaseId = useLocation().pathname.split("/")[2];

  const handleChangeParticipation = event =>
    setParticipation(event.target.value);

  const handleChangeName = event => setName(event.target.value);

  const handleChangeSecurityNumber = event =>
    setSecurityNumber(regexFormat.cpf(event.target.value));

  const handleChangeGeneralRegister = event =>
    setGeneralRegister(event.target.value);

  const handleChangeRegisterOrigin = event =>
    setRegisterOrigin(event.target.value);

  const handleChangeBirthdate = event =>
    setBirthdate(regexFormat.date(event.target.value));

  const handleChangeAge = event => setAge(regexFormat.age(event.target.value));

  const handleChangeAddress = event => setAddress(event.target.value);

  const handleChangeAddress2 = event => setAddress2(event.target.value);

  const handleChangeDistrict = event => setDistrict(event.target.value);

  const handleChangeCity = event => setCity(event.target.value);

  const handleChangeZipCode = event =>
    setZipCode(regexFormat.cep(event.target.value));

  const handleChangePhone = event =>
    setPhone(regexFormat.cellphone(event.target.value));

  const handleChangeEmail = event => setEmail(event.target.value);

  const handleChangeCivilState = event => setCivilState(event.target.value);

  const handleChangeJob = event => setJob(event.target.value);

  const handleChangeIncome = event => setIncome(event.target.value);

  const handleChangeJobAddress = event => setJobAddress(event.target.value);


  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      participation,
      name,
      securityNumber,
      generalRegister,
      registerOrigin,
      birthdate,
      age,
      address,
      address2,
      district,
      city,
      zipCode,
      phone,
      email,
      civilState,
      job,
      income,
      jobAddress
    };

    addParticipantAPIHandler(legalCaseId, data)
      .then(res => window.location.reload())
      .catch(error => toast.error(error.response.data.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup error={false}>
        <Label htmlFor="participation">
          Participação
        </Label>
        <Select
          id="participation"
          name="participation"
          defaultValue="default"
          onChange={handleChangeParticipation}
          isError={false}
        >
          <option>Selecionar</option>
          <option value="Requerente">Requerente</option>
          <option value="Representante do Requerente">
            Representante do Requerente
          </option>
          <option value="Requerido">Requerido</option>
          <option value="Representante do Requerido">
            Representante do Requerido
          </option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Nome</Label>
        <Input
          width="400px"
          id="name"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="securityNumber">CPF</Label>
        <Input
          width="200px"
          id="securityNumber"
          name="securityNumber"
          value={securityNumber}
          onChange={handleChangeSecurityNumber}
        />
      </FormGroup>
      <Container content="row" gap="1rem">
        <FormGroup>
          <Label htmlFor="generalRegister">RG</Label>
          <Input
            width="200px"
            id="generalRegister"
            name="generalRegister"
            value={generalRegister}
            onChange={handleChangeGeneralRegister}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="registerOrigin">Órgão emissor</Label>
          <Input
            width="100px"
            id="registerOrigin"
            name="registerOrigin"
            value={registerOrigin}
            onChange={handleChangeRegisterOrigin}
          />
        </FormGroup>
      </Container>
      <Container content="row" gap="1rem">
        <FormGroup>
          <Label htmlFor="birthdate">Data de nascimento</Label>
          <Input
            width="100px"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={handleChangeBirthdate}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Idade</Label>
          <Input
            width="100px"
            maxLength={3}
            id="age"
            name="age"
            placeholder="Ex: 35"
            value={age}
            onChange={handleChangeAge}
          />
        </FormGroup>
      </Container>
      <FormGroup>
        <Label htmlFor="address">Endereço</Label>
        <Input
          width="400px"
          id="address"
          name="address"
          value={address}
          onChange={handleChangeAddress}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address2">Complemento</Label>
        <Input
          width="400px"
          id="address2"
          name="address2"
          value={address2}
          onChange={handleChangeAddress2}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="district">Bairro</Label>
        <Input
          width="400px"
          id="district"
          name="district"
          value={district}
          onChange={handleChangeDistrict}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="city">Cidade</Label>
        <Input
          width="400px"
          id="city"
          value={city}
          onChange={handleChangeCity}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="zipCode">CEP</Label>
        <Input
          width="100px"
          id="zipCode"
          name="zipCode"
          value={zipCode}
          onChange={handleChangeZipCode}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phone">Telefone WhatsApp</Label>
        <Input
          width="100px"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          width="400px"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="civilState">Estado Civil</Label>
        <Select
          id="civilState"
          name="civilState"
          defaultValue="default"
          onChange={handleChangeCivilState}
        >
          <option>Selecionar</option>
          <option value="Solteiro(a)">Solteiro(a)</option>
          <option value="Casado(a)">Casado(a)</option>
          <option value="União Estável">União Estável</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="job">Profissão</Label>
        <Input
          width="200px"
          id="job"
          value={job}
          onChange={handleChangeJob}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="income">Renda mensal</Label>
        <Input
          width="100px"
          id="income"
          name="income"
          value={income}
          onChange={handleChangeIncome}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="jobAddress">Endereço profissional</Label>
        <Input
          width="400px"
          id="jobAddress"
          name="jobAddress"
          value={jobAddress}
          onChange={handleChangeJobAddress}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" styles="primary">Cadastrar</Button>
      </FormGroup>
    </form>
  );
};

export { AddParticipantToCaseForm };
