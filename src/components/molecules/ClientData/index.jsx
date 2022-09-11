import { HistoricDisplay } from "../../atoms";
import { Table } from "../../molecules";
import { formatDate } from "../../../helpers/utils/formatDate";
import { UpdateInfo } from "./styles";

export const ClientData = ({ client }) => {
  const dateParam = client?.updatedAt ? client.updatedAt : null;
  const formatedDate = !dateParam ? '00/00/0000' : formatDate(dateParam);
  return (
    <>
      <UpdateInfo>Última atualização em {formatedDate}</UpdateInfo>
      <Table currClient={client} />
      <HistoricDisplay description={client?.description} />
    </>
  );
};