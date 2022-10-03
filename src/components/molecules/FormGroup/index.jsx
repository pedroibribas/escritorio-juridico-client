import styled from "styled-components";

const Container = styled.div`
  margin-top: 0.75rem;
`;

const Error = styled.small`
  margin-top: 0.75rem;
`;

const FormGroup = ({ children, error }) => {
  return (
    <Container>
      {children}
      {error && <Error>{error.message}</Error>}
    </Container>
  );
};

export { FormGroup };
