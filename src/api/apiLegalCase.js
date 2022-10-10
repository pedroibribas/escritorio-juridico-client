import axios from "axios";

export const axiosLegalCase = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/legalCases"
});

axiosLegalCase.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem("user")).token;

  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}, error => Promise.reject(error)
);