import { FormLogin } from "../../organisms";

export const Login = () => {
  const { user, isSuccess, isLoading, isError, message } = useAuth();
  const navigate = useNavigate();

    // const { dispatch, loginUser } = useAuth();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   setEmail(e.target.value);
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(loginPending());
  //   loginUser({ email, password });
  // };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user || isSuccess) {
      navigate("/");
      window.location.reload();
    }
  }, [user, isSuccess, isError, message, navigate]);
  return (
    <>
      <Container>
        <Content>
          <h2>Entrar</h2>
          {/* // case "login":
    //   return (
    //     <form onSubmit={handler}>
    //       <Input name="email" value={formData} handler={handleChange} />
    //       <Input name="password" value={formData} handler={handleChange} />
    //       <Button action="submit" />
    //     </form>
    //   ); */}
        </Content>
      </Container>
      {isLoading && (
        <LoaderContainer>
          <LoaderContent />
        </LoaderContainer>
      )}
    </>
  );
};
