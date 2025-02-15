import { useEffect } from "react";
import { useState } from "react";

export default function useInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const value = setInterval(() => {
      setCount(count=>count + 1);
    }, 1000);

    return ()=>{
        clearInterval(value)
    }
  }, []);

  return count;
}
