import { useEffect, useState } from "react";

export default function useDebounce(value, timeout) {
  // logic which we have to write is, when ever value changes, start clock for 500ms

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);

  return debouncedValue;
}
