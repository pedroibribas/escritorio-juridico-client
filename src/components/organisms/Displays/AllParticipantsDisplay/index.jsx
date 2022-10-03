import useLegalCase from "../../../../helpers/hooks/useLegalCase";
import { Heading, Paragraph } from "../../../atoms";
import { ParticipantDisplay } from "../../";

const AllParticipantsDisplay = () => {
  const { participants } = useLegalCase();

  const claimantParty = participants?.filter(participant =>
    participant?.participation?.toLowerCase().includes('requerente')
  );

  const defendantParty = participants?.filter(participant =>
    participant?.participation?.toLowerCase().includes('requerido')
  );

  const hasClaimantParty = claimantParty?.length > 0;

  const hasDefendantParty = defendantParty?.length > 0;

  return (
    <div>
      <div>
        <Heading type="subSectionHeading">Requerentes</Heading>
        {hasClaimantParty ? (
          claimantParty.map(participant => (
            <ParticipantDisplay key={participant._id} participant={participant} />
          ))
        ) : (
          <Paragraph>Nenhum requerido cadastrado</Paragraph>
        )}
      </div>
      <div>
        <Heading type="subSectionHeading">Requeridos</Heading>
        {hasDefendantParty ? (
          defendantParty.map(participant => (
            <ParticipantDisplay key={participant._id} participant={participant} />
          ))
        ) : (
          <Paragraph>Nenhum requerido cadastrado.</Paragraph>
        )}
      </div>
    </div>
  )
};

export { AllParticipantsDisplay };