import { Container, Heading, Section } from "../../atoms";
import { LoginForm } from "../../organisms";
import { AuthPageTemplate } from "../../templates";

const LoginPage = () => {
  return (
    <AuthPageTemplate>
      <Section isScreenHeight color='var(--gray-300)' size="500px">
        <Container content="loginFormContent">
          <Heading type="subSectionHeading">
            Login
          </Heading>
          <LoginForm />
        </Container>
      </Section>
    </AuthPageTemplate>
  );
};

export { LoginPage };