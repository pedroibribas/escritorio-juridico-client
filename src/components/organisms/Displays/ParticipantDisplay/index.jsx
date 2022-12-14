import { useState } from "react";
import { Container, Transition } from "../../../atoms";
import { ParticipantDetails, ParticipantSummary } from "../../../molecules";

const ParticipantDisplay = ({ participant }) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const handleOpenDetails = () => setIsOpenDetails(!isOpenDetails);
  return (
    <Container content='casePageDisplayContent'>
      <ParticipantSummary
        participant={participant}
        toggle={isOpenDetails}
        handler={handleOpenDetails}
      />
      <Container content='casePageDetailsContent'>
        <Transition
          property="heightTransition"
          toggle={isOpenDetails}
          size="450px"
          overflowY="hidden"
        >
          <ParticipantDetails participant={participant} />
        </Transition>
      </Container>
    </Container>
  )
};

export { ParticipantDisplay };
