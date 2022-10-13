import { useState } from "react";
import { Button, Container, Heading, Section, Transition } from "../../../atoms";
import { AddWitnessToCaseForm, AllWitnessesDisplay } from "../../";

const CaseWitnessesSection = () => {
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);
  const handleOpenForm = () => setIsOpenAddForm(!isOpenAddForm);
  return (
    <Section>
      <Heading type="sectionHeading">
        Testemunhas
      </Heading>
      <Button onClick={handleOpenForm} styles="primary" toggle={isOpenAddForm}>
        {
          isOpenAddForm
            ? 'Fechar formulário'
            : 'Adicionar testemunha'
        }
      </Button>
      <Container content="casePageFormContent">
        <Transition property="heightTransition" toggle={isOpenAddForm} size="300px">
          <AddWitnessToCaseForm />
        </Transition>
      </Container>
      <AllWitnessesDisplay />
    </Section>
  )
};

export { CaseWitnessesSection };