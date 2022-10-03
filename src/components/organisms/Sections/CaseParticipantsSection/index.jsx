import { useState } from "react";
import { Button, Container, Heading, Section, Transition } from "../../../atoms";
import { AddParticipantToCaseForm, AllParticipantsDisplay } from "../../";

const CaseParticipantsSection = () => {
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);
  const handleOpenForm = () => setIsOpenAddForm(!isOpenAddForm);
  return (
    <Section>
      <Heading type="sectionHeading">
        Partes do Processo
      </Heading>
      <Button action="showForm" toggle={isOpenAddForm} handler={handleOpenForm}>
        {
          isOpenAddForm
            ? 'Fechar formulário'
            : 'Adicionar parte'
        }
      </Button>
      <Container content="casePageFormContent">
        <Transition property="heightTransition" toggle={isOpenAddForm} size="300px">
          <AddParticipantToCaseForm />
        </Transition>
      </Container>
      <AllParticipantsDisplay />
    </Section>
  )
};

export { CaseParticipantsSection };