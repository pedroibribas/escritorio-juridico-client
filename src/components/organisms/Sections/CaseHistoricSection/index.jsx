import { useToggle } from "../../../../helpers";
import { Button, Container, Heading, Section, Transition } from "../../../atoms";
import { AddHistoricDataForm, HistoricDisplay } from "../../";

const CaseHistoricSection = () => {
  const { isToggle: isOpenAddForm, setToggle: handleOpenForm } = useToggle();

  return (
    <Section>
      <Heading type="sectionHeading">
        Histórico
      </Heading>
      <Button
        action="showForm"
        toggle={isOpenAddForm}
        handler={handleOpenForm}
      >
        {isOpenAddForm ? 'Fechar formulário' : 'Criar novo registro'}
      </Button>
      <Container content="historicData">
        <Transition
          property="heightTransition"
          toggle={isOpenAddForm}
          overflowY="hidden"
          size="600px"
        >
          <AddHistoricDataForm />
        </Transition>
      </Container>
      <HistoricDisplay />
    </Section>
  )
};

export { CaseHistoricSection };