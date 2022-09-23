import { useState } from "react";

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    setErrors((prevState) => [...prevState, {
      field,
      message
    }]);
  }

  function removeError(field) {
    setErrors((prevState) => prevState.filter((error) => error.field !== field)
    );
  }

  function getErrorMessage(field) {
    return errors.find((error) => error.field === field)?.message;
  }

  return {
    setError,
    removeError,
    getErrorMessage,
    errors,
  };
}