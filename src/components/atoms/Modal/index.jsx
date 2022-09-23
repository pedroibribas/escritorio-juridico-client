import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  position: fixed;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.25;
`;

const ModalContainer = styled.div`
  position: relative;
  z-index: 50;
  width: 50vw;
  border-radius: 0.5rem;
  padding: 3rem;
  background: #fff;
`;

const Modal = ({ isOpen, callback, children }) => (
  <Container isOpen={isOpen}>
    <Background onClick={callback} />
    <ModalContainer>
      {children}
    </ModalContainer>
  </Container>
);

export { Modal };