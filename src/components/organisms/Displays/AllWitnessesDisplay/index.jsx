import useLegalCase from "../../../../helpers/hooks/useLegalCase";
import { Paragraph } from "../../../atoms";
import { WitnessDisplay } from "../../";

const AllWitnessesDisplay = () => {
  const { witnesses } = useLegalCase();
  const hasWitnesses = witnesses?.length > 0;
  return (
    <div>
      {hasWitnesses ? (
        witnesses.map(witness => (
          <WitnessDisplay
            key={witness._id}
            witness={witness}
          />
        ))
      ) : (
        <Paragraph>
          Nenhuma testemunha cadastrada
        </Paragraph>
      )}
    </div>
  )
};

export { AllWitnessesDisplay };