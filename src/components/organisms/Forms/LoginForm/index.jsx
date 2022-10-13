import { useState } from "react";
import { toast } from "react-toastify";
import { loginUserAPIHandler } from "../../../../api/services/user";
import { Button, Input, Label } from "../../../atoms";
import { FormGroup } from "../../../molecules";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = event => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { email, password };

    loginUserAPIHandler(data)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res));
        window.location.replace("/");
      })
      .catch(err => toast.error(err.response.data.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="Ex: joaosilva@hotmail.com"
          value={email}
          onChange={handleChangeEmail}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Senha</Label>
        <Input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" styles="primary">
          Autenticar
        </Button>
      </FormGroup>
    </form>
  );
};

export { LoginForm };