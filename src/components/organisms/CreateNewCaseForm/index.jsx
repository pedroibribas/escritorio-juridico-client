import { useState } from "react";
import { formatInputDateValue, validateDate } from "../../../helpers";
import { Button, Input, Label } from "../../atoms";
import { FormGroup } from "../../molecules";

const CreateNewCaseForm = () => {
  const [nominationDate, setNominationDate] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('');
  const [subject, setSubject] = useState('');
  const [lawsuitNumber, setLawsuitNumber] = useState('');
  const [lawsuitPassword, setLawsuitPassword] = useState('');

  function handleChangeNominationDate(event) {
    event.preventDefault();

    const isDateValid = validateDate(event.target.value);

    if (event.target.value.length === 10 && !isDateValid) {
      return;
    };

    setNominationDate(formatInputDateValue(event.target.value));
  };

  function handleChangeAttendanceDate(event) {
    event.preventDefault();
    setAttendanceDate(formatInputDateValue(event.target.value));
  };

  function handleChangeSubject(event) {
    event.preventDefault();
    setSubject(event.target.value);
  };

  function handleChangeLawsuitNumber(event) {
    event.preventDefault();
    setLawsuitNumber(event.target.value);
  };

  function handleChangeLawsuitPassword(event) {
    event.preventDefault();
    setLawsuitPassword(event.target.value);

  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      lawyerName: '',
      lawyerBarNumber: '',
      nominationDate,
      attendanceDate,
      subject,
      lawsuitNumber,
      lawsuitPassword
    };
    // create new lawsuit function
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="nominationDate">Data da nomeação</Label>
        <Input
          width="150px"
          id="nominationDate"
          name="nominationDate"
          placeholder="Ex: 01-01-2022"
          value={nominationDate}
          onChange={handleChangeNominationDate}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="attendanceDate">Data do atendimento</Label>
        <Input
          width="150px"
          id="attendanceDate"
          name="attendanceDate"
          placeholder="Ex: 01-01-2022"
          value={attendanceDate}
          onChange={handleChangeAttendanceDate}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subject">Assunto</Label>
        <Input
          width="600px"
          id="subject"
          name="subject"
          value={subject}
          onChange={handleChangeSubject}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lawsuitNumber">Número do processo</Label>
        <Input
          width="300px"
          id="lawsuitNumber"
          name="lawsuitNumber"
          value={lawsuitNumber}
          onChange={handleChangeLawsuitNumber}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lawsuitPassword">Senha do processo</Label>
        <Input
          width="200px"
          id="lawsuitPassword"
          name="lawsuitPassword"
          value={lawsuitPassword}
          onChange={handleChangeLawsuitPassword}
        />
      </FormGroup>
      <FormGroup>
        <Button action='submitForm'>Cadastrar</Button>
      </FormGroup>
    </form>
  );
};

export { CreateNewCaseForm };
