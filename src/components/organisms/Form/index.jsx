const FormClient = ({ action }) => {
  const { createClient, updateClient } = useClients();
  const [data, setData] = useState({
    fullname: action === "create" ? "" : action === "update" && "",
    gender: action === "create" ? "" : action === "update" && "",
    civilStatus: action === "create" ? "" : action === "update" && "",
    nationality: action === "create" ? "" : action === "update" && "",
    job: action === "create" ? "" : action === "update" && "",
    securityNumber: action === "create" ? "" : action === "update" && "",
    rgNumber: action === "create" ? "" : action === "update" && "",
    rgOrigin: action === "create" ? "" : action === "update" && "",
    birthdate: action === "create" ? "" : action === "update" && "",
    address: action === "create" ? "" : action === "update" && "",
    phone: action === "create" ? "" : action === "update" && "",
    email: action === "create" ? "" : action === "update" && "",
    lawsuitNumber: action === "create" ? "" : action === "update" && "",
    description: action === "create" ? "" : action === "update" && "",
  });
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = {
    create: async (e) => {
      e.preventDefault();
      validateFormData(data);
      await createClient(data);
    },
    update: async (e) => {
      e.preventDefault();
      const path = useLocation().pathname.split('/')[3];
      validatedata(data);
      //todo create confirmation popup
      await updateClient(path, data);
    },
  };
  return (
    <form onSubmit={handleSubmit[action]}>
      <Input name="fullname" value={data} handler={handleChange} />
      <Select name="gender" value={data} handler={handleChange} />
      <Select name="civilStatus" value={data} handler={handleChange} />
      <Select name="nationality" value={data} handler={handleChange} />
      <Input name="job" value={data} handler={handleChange} />
      <Input name="securityNumber" value={data} handler={handleChange} />
      <Input name="rgNumber" value={data} handler={handleChange} />
      <Input name="rgOrigin" value={data} handler={handleChange} />
      <Input name="birthdate" value={data} handler={handleChange} />
      <Input name="address" value={data} handler={handleChange} />
      <Input name="phone" value={data} handler={handleChange} />
      <Input name="email" value={data} handler={handleChange} />
      <Input name="lawsuitNumber" value={data} handler={handleChange} />
      <TextArea name="description" value={data} handler={handleChange} />
      <Button action="submit" />
    </form>
  );

};

export { FormClient };
