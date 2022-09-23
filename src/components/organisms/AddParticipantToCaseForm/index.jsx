import { useState } from "react";
import { Button, FlexBlock, Input, Label, Select } from "../../atoms";
import { FormGroup } from "../../molecules";

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

  function handleChangeParticipation(event) {
    event.preventDefault();
    setParticipation(event.target.value);
  };

  function handleChangeName(event) {
    event.preventDefault();
    setName(event.target.value);
  };

  function handleChangeSecurityNumber(event) {
    event.preventDefault();
    setSecurityNumber(event.target.value);
  };

  function handleChangeGeneralRegister(event) {
    event.preventDefault();
    setGeneralRegister(event.target.value);
  };

  function handleChangeRegisterOrigin(event) {
    event.preventDefault();
    setRegisterOrigin(event.target.value);
  };

  function handleChangeBirthdate(event) {
    event.preventDefault();
    setBirthdate(event.target.value);
  };

  function handleChangeAge(event) {
    event.preventDefault();
    setAge(event.target.value);
  };

  function handleChangeAddress(event) {
    event.preventDefault();
    setAddress(event.target.value);
  };

  function handleChangeAddress2(event) {
    event.preventDefault();
    setAddress2(event.target.value);
  };

  function handleChangeDistrict(event) {
    event.preventDefault();
    setDistrict(event.target.value);
  };

  function handleChangeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  };

  function handleChangeZipCode(event) {
    event.preventDefault();
    setZipCode(event.target.value);
  };

  function handleChangePhone(event) {
    event.preventDefault();
    setPhone(event.target.value);
  };

  function handleChangeEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
  };

  function handleChangeCivilState(event) {
    event.preventDefault();
    setCivilState(event.target.value);
  };

  function handleChangeJob(event) {
    event.preventDefault();
    setJob(event.target.value);
  };

  function handleChangeIncome(event) {
    event.preventDefault();
    setIncome(event.target.value);
  };

  function handleChangeJobAddress(event) {
    event.preventDefault();
    setJobAddress(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      case: '',
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="participation">Participação</Label>
        <Select id="participation" name="participation" defaultValue="default">
          <option>Selecionar</option>
          <option value="author">Requerente</option>
          <option value="defendant">Requerido</option>
          <option value="authorRepresentant">
            Representante do Requerente
          </option>
          <option value="defendantRepresentant">
            Representante do Requerido
          </option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Nome</Label>
        <Input width="400px" id="name" name="name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="securityNumber">CPF</Label>
        <Input width="200px" id="securityNumber" name="securityNumber" />
      </FormGroup>
      <FlexBlock gap="1rem">
        <FormGroup>
          <Label htmlFor="generalRegister">RG</Label>
          <Input width="200px" id="generalRegister" name="generalRegister" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="registerOrigin">Órgão emissor</Label>
          <Input width="100px" id="registerOrigin" />
        </FormGroup>
      </FlexBlock>
      <FlexBlock gap="1rem">
        <FormGroup>
          <Label htmlFor="birthdate">Data de nascimento</Label>
          <Input width="100px" id="birthdate" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Idade</Label>
          <Input width="100px" id="age" name="age" placeholder="Ex: 35" />
        </FormGroup>
      </FlexBlock>
      <FormGroup>
        <Label htmlFor="address">Endereço</Label>
        <Input width="400px" id="address" name="address" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address2">Complemento</Label>
        <Input width="400px" id="address2" name="address2" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="district">Bairro</Label>
        <Input width="400px" id="district" name="district" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="city">Cidade</Label>
        <Input width="400px" id="city" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="zipCode">CEP</Label>
        <Input width="100px" id="zipCode" name="zipCode" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phone">Telefone WhatsApp</Label>
        <Input width="100px" id="phone" name="phone" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input width="400px" id="email" name="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="civilState">Estado Civil</Label>
        <Select id="civilState" name="civilState" defaultValue="default">
          <option>Selecionar</option>
          <option value="solteiro">Solteiro(a)</option>
          <option value="casado">Casado(a)</option>
          <option value="uniãoEstável">União Estável</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="job">Profissão</Label>
        <Input width="200px" id="job" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="income">Renda mensal</Label>
        <Input width="100px" id="income" name="income" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="jobAddress">Endereço profissional</Label>
        <Input width="400px" id="jobAddress" name="jobAddress" />
      </FormGroup>
      <FormGroup>
        <Button action="submitForm">Cadastrar</Button>
      </FormGroup>
    </form>
  )
};

export { AddParticipantToCaseForm };
