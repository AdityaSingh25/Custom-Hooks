import useTodos from "./useTodos";

export default function App() {
  const {todos,loading} = useTodos(5);

  if(loading){
    return (<div>Loading...</div>)
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <br />
      <h3>{todo.description}</h3>
    </div>
  );
}
