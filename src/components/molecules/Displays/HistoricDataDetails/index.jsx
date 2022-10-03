import { intlDateFormat } from "../../../../helpers";
import { Container, Paragraph } from "../../../atoms";

const HistoricDataDetails = ({ data }) => (
  <Container content="historicData">
    <h4>
      • {intlDateFormat(data.createdAt)}
    </h4>
    <Paragraph type="legalCaseHistoric">
      {data.text}
    </Paragraph>
  </Container>
);

export { HistoricDataDetails };
