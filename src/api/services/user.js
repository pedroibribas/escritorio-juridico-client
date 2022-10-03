import { axiosUser } from "../apiUser";

const loginUserAPIHandler = async (data) => {
  const response = await axiosUser.post("/login", data);
  return response.data;
};

export { loginUserAPIHandler };