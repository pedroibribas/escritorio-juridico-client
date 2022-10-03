import { useState } from "react";

export function useToggle() {
  const [state, setState] = useState(false);

  return {
    isToggle: state,
    setToggle: () => setState(!state)
  };
};