import axios from "axios";

export const axiosPDF = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/pdf"
});