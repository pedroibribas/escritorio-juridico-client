import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { addWitnessAPIHandler } from "../../../../api/services/legalCase";
import { intlDateFormat } from "../../../../helpers";
import { Button, Container, Input, Label } from "../../../atoms";
import { FormGroup } from "../../../molecules";

const AddWitnessToCaseForm = () => {
  const [name, setName] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [generalRegister, setGeneralRegister] = useState('');
  const [registerOrigin, setRegisterOrigin] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const legalCaseId = useLocation().pathname.split("/")[2];

  const handleChangeName = event => setName(event.target.value);

  const handleChangeSecurityNumber = event =>
    setSecurityNumber(intlDateFormat.cpf(event.target.value));

  const handleChangeGeneralRegister = event =>
    setGeneralRegister(event.target.value);

  const handleChangeRegisterOrigin = event =>
    setRegisterOrigin(event.target.value);

  const handleChangeAddress = event => setAddress(event.target.value);

  const handleChangeAddress2 = event => setAddress2(event.target.value);

  const handleChangeDistrict = event => setDistrict(event.target.value);

  const handleChangeCity = event => setCity(event.target.value);

  const handleChangeZipCode = event =>
    setZipCode(intlDateFormat.cep(event.target.value));

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      securityNumber,
      generalRegister,
      registerOrigin,
      address,
      address2,
      district,
      city,
      zipCode
    };

    addWitnessAPIHandler(legalCaseId, data)
      .then(res => window.location.reload())
      .catch(error => toast.error(error.response.data.message));
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Container content='row' gap="1rem">
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
        <Button type="submit" action="submitForm">Cadastrar</Button>
      </FormGroup>
    </form>
  );
};

export { AddWitnessToCaseForm };
