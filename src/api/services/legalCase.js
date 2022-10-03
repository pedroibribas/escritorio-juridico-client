import { axiosLegalCase } from "../apiLegalCase";

export const getAllLegalCasesAPIHandler = async () => {
  const response = await axiosLegalCase.get("/");
  return response.data;
};

export const createLegalCaseAPIHandler = async (data) => {
  const response = await axiosLegalCase.post("/", data);
  return response.data;
};

export const getLegalCaseAPIHandler = async (id) => {
  const response = await axiosLegalCase.get("/" + id);
  return response.data;
};

export const addParticipantAPIHandler = async (id, data) => {
  const response = await axiosLegalCase.post("/" + id + "/participant", data);
  return response.data;
};

export const addWitnessAPIHandler = async (id, data) => {
  const response = await axiosLegalCase.post("/" + id + "/witness", data);
  return response.data;
};

export const addHistoricAPIHandler = async (id, data) => {
  const response = await axiosLegalCase.post(
    "/" + id + "/historic",
    data
  );

  return response.data;
};