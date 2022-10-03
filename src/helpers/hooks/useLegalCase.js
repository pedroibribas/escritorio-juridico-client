import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLegalCaseAPIHandler } from "../../api/services/legalCase";

export default function useLegalCase() {
  const [legalCase, setLegalCase] = useState({});

  const legalCaseId = useLocation().pathname.split('/')[2];

  useEffect(() => {
    getLegalCaseAPIHandler(legalCaseId)
      .then(response => setLegalCase(response))
      .catch(error => console.log(error.response.data.message));
  }, [legalCaseId]);

  return legalCase;
};