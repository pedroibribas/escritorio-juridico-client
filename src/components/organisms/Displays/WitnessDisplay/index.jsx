import { useState } from "react";
import { Container, Transition } from "../../../atoms";
import { WitnessDetails, WitnessSummary } from "../../../molecules";

const WitnessDisplay = ({ witness }) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const handleOpenDetails = () => setIsOpenDetails(!isOpenDetails);
  return (
    <Container content='casePageDisplayContent'>
      <WitnessSummary
        witness={witness}
        toggle={isOpenDetails}
        handler={handleOpenDetails}
      />
      <Container content='casePageDetailsContent'>
        <Transition
          property="heightTransition"
          toggle={isOpenDetails}
          size="250px"
          overflowY="hidden"
        >
          <WitnessDetails witness={witness} />
        </Transition>
      </Container>
    </Container>
  )
};

export { WitnessDisplay };
