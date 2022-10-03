import useLegalCase from "../../../../helpers/hooks/useLegalCase";
import { Paragraph } from "../../../atoms";
import { HistoricDataDetails } from "../../../molecules";

const HistoricDisplay = () => {
  const { historic } = useLegalCase();

  const hasHistoric = historic?.length > 0;

  return (
    <div>
      {hasHistoric ? (
        historic.map(data => (
          <HistoricDataDetails
            key={data._id}
            data={data}
          />
        ))
      ) : (
        <Paragraph>
          Nenhum registro no histórico
        </Paragraph>
      )}
    </div>
  )
};

export { HistoricDisplay };