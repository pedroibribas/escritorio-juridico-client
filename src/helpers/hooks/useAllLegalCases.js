import { useEffect, useState } from "react";
import { getAllLegalCasesAPIHandler } from "../../api/services/legalCase";

export default function useAllLegalCases() {
  const [allLegalCases, setAllLegalCases] = useState([]);

  useEffect(() => {
    getAllLegalCasesAPIHandler()
      .then(response => setAllLegalCases(response))
      .catch(error => console.log(error.response.data.message));
  }, []);

  return allLegalCases;
};