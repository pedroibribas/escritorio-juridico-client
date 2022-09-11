import { Loading, Overlay } from "../../atoms";
import { Title, Message } from "./styles";

const Loader = ({ message }) => {
  const title = "Alerta";
  return (
    <>
      <Overlay />
      {message && (
        <>
          <Title>{title}</Title>
          <Message>{message}</Message>
          <Loading animation="spin" />
        </>
      )}
      {!message && <Loading animation="run" />}
    </>
  );
};

export { Loader };