import { useState } from "react";
import { toast } from "react-toastify";
import { createLegalCaseAPIHandler } from "../../../../api/services/legalCase";
import { regexFormat, useAuth } from "../../../../helpers";
import { Button, Input, Label } from "../../../atoms";
import { FormGroup } from "../../../molecules";

const CreateNewCaseForm = () => {
  const [nominationDate, setNominationDate] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('');
  const [subject, setSubject] = useState('');
  const [lawsuitNumber, setLawsuitNumber] = useState('');
  const [lawsuitPassword, setLawsuitPassword] = useState('');

  const { user } = useAuth();

  const handleChangeNominationDate = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length === 10) {
      return console.log("O formato de data está incorreto.");
    };
    setNominationDate(regexFormat.date(inputValue));
  };

  const handleChangeAttendanceDate = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length === 10) {
      return console.log("O formato de data está incorreto.");
    };
    setAttendanceDate(regexFormat.date(event.target.value));
  };

  const handleChangeSubject = event => setSubject(event.target.value)

  const handleChangeLawsuitNumber = event =>
    setLawsuitNumber(event.target.value);

  const handleChangeLawsuitPassword = event =>
    setLawsuitPassword(event.target.value);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      lawyerName: user.username,
      lawyerBarNumber: user.barNumber,
      nominationDate,
      attendanceDate,
      subject,
      lawsuitNumber,
      lawsuitPassword
    };

    createLegalCaseAPIHandler(data)
      .then(response => window.location.replace('/'))
      .catch(error => toast.error(error.response.data.message));
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
        <Button type="submit" action='submitForm'>Cadastrar</Button>
      </FormGroup>
    </form>
  );
};

export { CreateNewCaseForm };
