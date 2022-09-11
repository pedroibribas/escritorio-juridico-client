import { Button, Overlay } from "../../atoms";
import { Content } from "./styles";

export const Modal = ({ text, handleClose, handleConfirm }) => (
  <>
    <Overlay handleClick={handleClose} />
    <Content>
      <span>{text}</span>
      <div>
        <Button handler={handleConfirm} />
        <Button handler={handleClose} />
      </div>
    </Content>
  </>
);

export { Modal };
