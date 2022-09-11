import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getPDFAPIHandler } from "../../api/services/pdf";
import { Button } from "../../atoms";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { reset } from "../../helpers/reducers/ClientStatesReducer";
import { ClientData, Loader, Modal } from "../../molecules";
import { Container, Content } from "./styles";

export const ClientContent = () => {
  const {
    clientStatesState,
    dispatchClientStates,
    client,
    getClients,
    getClient,
    deleteClient,
  } = useClients();
  const { isError, isSuccess, message } = clientStatesState;
  const [clientIsLoading, setClientIsLoading] = useState(false);
  const [PDFIsLoading, setPDFIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const path = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  useEffect(() => {
    if (!client) {
      getClient(path);
      setClientIsLoading(true);
    } else {
      setClientIsLoading(false);
    }
  }, [getClient, path, client]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatchClientStates(reset());
    }

    if (isSuccess) {
      toast.success(message);
      dispatchClientStates(reset());
      getClients();
      navigate("/");
    }
  }, [dispatchClientStates, isError, isSuccess, message, getClients, navigate]);

  // Save PDF Handler
  const handleSavePDF = async () => {
    setPDFIsLoading(true);
    return await getPDFAPIHandler(client)
      .then((res) => {
        const blob = new Blob([res], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "document.pdf";
        link.click();

        setPDFIsLoading(false);
      })
      .catch((err) => {
        setPDFIsLoading(false);
        console.log(err);
      });
  };

  const handleClick = () => setIsModal(!isModal);
  const handleConfirm = async () => await deleteClient(path);

  return (
    <Container>
      <Content>
			<Button path={"/client/edit/" + path} text="Editar" />
         <Button text="Excluir" handler={handleClick} />
         <Button text="Download PDF" handler={handleSavePDF} />
         <ClientData client={client} />
      </Content>
      {clientIsLoading && <Loader />}
      {PDFIsLoading && <Loader message={"O documento está sendo preparado"} />}
      {isModal && (
        <Modal
          text="Você confirma a exclusão dos dados cadastrais?"
          handleClose={handleClick}
          handleConfirm={handleConfirm}
        />
      )}
    </Container>
  );
};
