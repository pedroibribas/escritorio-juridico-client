import { useEffect, useRef } from "react";

export default function useOnClickOutsideRef(callback, initialValue = null) {
  const elementRef = useRef(initialValue);

  useEffect(() => {
    function handleClick(event) {
      if (!elementRef.current?.contains(event.target)) {
        callback();
      };
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [callback]);

  return elementRef;
};