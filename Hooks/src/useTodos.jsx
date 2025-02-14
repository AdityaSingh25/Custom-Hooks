import axios from "axios";
import { useEffect, useState } from "react";

export default function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("http://localhost:3000/").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);
    //if you dont do this then first time when the screen loads then user has to wait for n seconds
    axios.get("http://localhost:3000/").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }, [n]);

  return () => {
    clearInterval(value); // to stop the previous clock when n changes
  };

  return { todos, loading };
}
