import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../feactures/todos/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <div className="text-lg font-bold my-5">Todos List</div>
      {todos.length < 1
        ? "Please add Todo"
        : todos.map((todo) => (
            <ul
              key={todo.id}
              className="flex items-center justify-between mx-20 bg-gray-800 text-white pl-3 mb-3"
            >
              <li className="capitalize">{todo.text}</li>
              <button
                className="bg-indigo-500 outline-none border-0 rounded px-3 py-2"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </ul>
          ))}
    </div>
  );
};

export default Todos;
