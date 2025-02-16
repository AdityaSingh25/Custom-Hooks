import { useEffect, useState } from "react";
// import useInterval from "./hooks/useInterval";
// import useIsOnline from "./hooks/useIsOnline";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    // do fetch calls to BE
  }, [debouncedValue]);
  return (
    <div>
      debounced value is {debouncedValue}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default App;
