import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { addHistoricAPIHandler } from "../../../../api/services/legalCase";
import { Button, Label, TextArea } from "../../../atoms";
import { FormGroup } from "../../../molecules";

const AddHistoricDataForm = () => {
  const [text, setText] = useState('');
  const legalCaseId = useLocation().pathname.split("/")[2];

  function handleChange(event) {
    setText(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { text };
    addHistoricAPIHandler(legalCaseId, data)
      .then(res => window.location.reload())
      .catch(error => toast.error(error.response.data.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="text">
          Inserir registro
        </Label>
        <TextArea
          id="text"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Escrever aqui..."
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" styles="primary">
          Cadastrar
        </Button>
      </FormGroup>
    </form>
  );
};

export { AddHistoricDataForm };
