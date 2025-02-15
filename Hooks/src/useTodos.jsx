import axios from "axios";
import { useEffect, useState } from "react";

export default function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // clock can be identified by its value which it returns, so that we can clear this clock easily.
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
    return () => {2
        
      clearInterval(value); // to stop the previous clock when n changes
    };
  }, [n]);

  return { todos, loading };
}

//same thing we can do by using swr library by versel,

// import useSWR from 'swr'

// // const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//     const data = await fetch(url);
//     const json = await data.json();
//     return json;
// };

// function Profile() {
//     const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher);

//     if (error) return <div>failed to load</div>
//     if (isLoading) return <div>loading...</div>
//     return <div>hello, you have {data.todos.length} todos!</div>
// }
