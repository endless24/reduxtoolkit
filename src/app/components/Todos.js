import React from "react";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.text}</li>
        </ul>
      ))}
    </>
  );
};

export default Todos;
