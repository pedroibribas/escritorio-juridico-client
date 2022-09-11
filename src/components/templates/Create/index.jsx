const Create = () => {
  const { getClients, clientStatesState, dispatchClientStates } = useClients();
  const { isError, isSuccess, message } = clientStatesState;
  const navigate = useNavigate();
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
  const handleCancel = () => navigate("/");
  return (
    <>
      <Header />
      <Container>
        <h1>Cadastramento de cliente</h1>
        <FormClient action='create' />
        <Button type="button" handler={handleCancel} />
      </Container>
    </>
  );
};

export { Create };